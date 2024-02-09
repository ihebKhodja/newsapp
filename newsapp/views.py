import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import NewsArticle
from .serializers import NewsArticleSerializer
from django.utils.dateparse import parse_datetime
from dotenv import load_dotenv
import os
load_dotenv()

class LatestNewsView(APIView): ## retrieving all data 

    def get(self, request, format=None):
        articles = NewsArticle.objects.all().order_by('-published_at')
        serializer = NewsArticleSerializer(articles, many=True)
        return Response(serializer.data)
    

class FilteredNewsView(APIView): ## this view is used for both of query search and fetching data by category requested 
    def get(self, request, *args, **kwargs):
        
        api_key=os.getenv('API_KEY')
        category = request.query_params.get('category')
        q = request.query_params.get('q')

        url = 'https://newsapi.org/v2/top-headlines'
        params = {
            'apiKey': api_key,
            'language':'en',
            'category': category,
            'q': q,
        }
        # removing the none value in the request
        params = {k: v for k, v in params.items() if v is not None}

        ######## request is for fetching data by category
        if category is not None : 

                # article_exists = NewsArticle.objects.filter(category=category).exists() # find existing articles with category
                #     # if not article_exists :

                response = requests.get(url, params=params)
                articles_data = response.json()

                for article_data in articles_data['articles']: # 
                    NewsArticle.objects.update_or_create(
                        title=article_data['title'],  # This assumes 'title' can uniquely identify your articles
                        defaults={
                            'description': article_data['description'],
                            'author': article_data['author'],
                            'published_at': parse_datetime(article_data['publishedAt']),
                            'url': article_data['url'],
                            'content': article_data['content'],
                            'urlToImage': article_data['urlToImage'],
                            'source': article_data['source']['name'],
                            'category': category  
                        }
                    )      
            
                ### Return articles by category
                articles = NewsArticle.objects.filter(category=category).order_by('-published_at') 
                serializer = NewsArticleSerializer(articles, many=True)
                return Response(serializer.data)
        

        ####### in case of query search
        else: 
            response = requests.get(url, params=params)
            return Response(response.json(), status=response.status_code)
           