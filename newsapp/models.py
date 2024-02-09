from django.db import models

class NewsArticle(models.Model):
    
    title = models.CharField(max_length=400)
    author=models.CharField(max_length=400, null=True)
    description = models.TextField(null=True, blank=True)
    url = models.URLField(max_length=1000)
    published_at = models.DateTimeField(db_index=True)
    content= models.TextField(null=True, blank=True)
    urlToImage= models.URLField(max_length=1000,null=True, blank=True)
    source = models.CharField(max_length=100) 
    category=models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.title
    
    class Meta: # adding indexes
        indexes = [
            models.Index(fields=['published_at', 'category']),
        ]