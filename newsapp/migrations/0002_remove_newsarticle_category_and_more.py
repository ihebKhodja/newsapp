# Generated by Django 5.0.1 on 2024-02-06 20:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('newsapp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='newsarticle',
            name='category',
        ),
        migrations.RemoveField(
            model_name='newsarticle',
            name='country',
        ),
    ]
