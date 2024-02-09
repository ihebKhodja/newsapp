from django.apps import AppConfig
import os


class NewsappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'newsapp'

    def ready(self):
        if os.environ.get('RUN_MAIN', None) != 'true':
            from .scheduler import start_scheduler
            start_scheduler()