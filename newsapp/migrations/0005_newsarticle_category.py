# Generated by Django 5.0.1 on 2024-02-08 21:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsapp', '0004_newsarticle_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='newsarticle',
            name='category',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
