from django.urls import path
from . import views
from .views import LatestNewsView
from .views import FilteredNewsView


urlpatterns = [
    path('', LatestNewsView.as_view(), name='latest-news'),
    path('filter/', FilteredNewsView.as_view(), name='filtered-news'),
]