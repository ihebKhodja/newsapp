from apscheduler.schedulers.background import BackgroundScheduler
from django.core.management import call_command
from datetime import datetime


def run_my_command():
    """Function to run the Django management command."""
    #calling fetch_news management command 
    call_command('fetch_news') 

def start_scheduler():
    scheduler = BackgroundScheduler()
    scheduler.add_job(run_my_command, 'interval', hours=24)  # adjust the interval as needed
    scheduler.start()
    # job.modify(next_run_time=datetime.now())

