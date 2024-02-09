from django.core.management.base import BaseCommand, CommandError
from newsapp.models import NewsArticle
from django.utils.dateparse import parse_datetime
import requests

class Command(BaseCommand):
    help = 'Fetches the latest news from NewsAPI and stores it in the database'

    def handle(self, *args, **kwargs):
        api_key='4fcfc0b7666d4d2a9e7c856768e591f3'
        # api_key = '88e2672cfc52487a99d5fd92064fbfc9'
        url = 'https://newsapi.org/v2/top-headlines'
        
        params = {
            'language':'en',
            'apiKey': api_key,
        }   
        response = requests.get(url, params=params)
        news_data = response.json()

        for article in news_data['articles']:
            try:
                NewsArticle.objects.update_or_create(
                    title=article['title'],
                    defaults={
                        'description': article['description'],
                        'author':article['author'],
                        'published_at': parse_datetime(article['publishedAt']),
                        'url': article['url'],
                        'content': article['content'],
                        'urlToImage': article['urlToImage'],
                        'source': article['source']['name']
                    }
                )
            except NewsArticle.DoesNotExist:
                raise CommandError('NewsArticle "%s" does not exist' % article)
            
        self.stdout.write(self.style.SUCCESS('Successfully fetched and updated news article'))
