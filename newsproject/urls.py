
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("api/articles/", include("newsapp.urls")),
    path("admin/", admin.site.urls),
]

