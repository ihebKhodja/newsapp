from django.http import HttpResponse
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import NewsArticle
from .serializers import NewsArticleSerializer
from django.utils.dateparse import parse_datetime
from rest_framework.pagination import PageNumberPagination


def index(request):
    return HttpResponse("hello new app")


class LatestNewsView(APIView):
    def get(self, request, format=None):
        articles = NewsArticle.objects.all().order_by('-published_at')
        serializer = NewsArticleSerializer(articles, many=True)
        return Response(serializer.data)
    

class FilteredNewsView(APIView):
    def get(self, request, *args, **kwargs):
        
        # api_key = '88e2672cfc52487a99d5fd92064fbfc9'
        api_key='4fcfc0b7666d4d2a9e7c856768e591f3'
        category = request.query_params.get('category')
        q = request.query_params.get('q')

        url = 'https://newsapi.org/v2/top-headlines'
        params = {
            'apiKey': api_key,
            'language':'en',
            'category': category,
            'q': q,
            # 'pageSize':30
        }
        # removing the none value in the request
        params = {k: v for k, v in params.items() if v is not None}

        if category is not None : 
            # article_exists = NewsArticle.objects.filter(category=category).exists() # find existing articles with category
            #     # if not article_exists :
            #     paginator = PageNumberPagination()

            response = requests.get(url, params=params)
            articles_data = response.json()

            for article_data in articles_data['articles']:
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
            # articles = NewsArticle.objects.filter(category=category)   
            articles = NewsArticle.objects.filter(category=category).order_by('-published_at')
            serializer = NewsArticleSerializer(articles, many=True)
            return Response(serializer.data)
            # return paginator.get_paginated_response(serializer.data)

        else:
            # in case of query search
            response = requests.get(url, params=params)
            # if response.status_code == 200:
            return Response(response.json(), status=response.status_code)
           
                        
            
        # if response.status_code == 200:
        # else:
        #     return Response(response.json(), status=response.status_code)
        

