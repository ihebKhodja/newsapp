# NewsApp

NewsApp is a Django-based project that serves as a proxy to the News API, allowing users to fetch the latest news based on categories, with a keyword search functionality. The project uses PostgreSQL as its database and Django Rest Framework for creating API endpoints.

## Features

- Fetch and display the latest news from various categories and countries.
- RESTful API to access news data.
- Integration with PostgreSQL for efficient data storage and retrieval.
- API endpoint customization using Django Rest Framework.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Python 3.8 or newer
- pip and virtualenv
- Request 
- PostgreSQL installed and running
- An API key from [NewsAPI.org](https://newsapi.org/)

## Installation

Follow these steps to get your development environment set up:

1. Clone the repository:

```bash
    git clone https://github.com/ihebKhodja/newsapp.git
    cd newsapp
```
2. Create and activate a virtual environment:

```bash
    virtualenv env
    source env/bin/activate 
```
3. Setting default database in settings.py:
    ```bash
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.postgresql',
                'NAME': 'news_db',
                'USER': 'postgres',
                'PASSWORD': '12345',
                'HOST': 'localhost', 
                'PORT': '5432',       
            }
        }
    ```
4. Apply the migrations::

```bash
    py manage.py migrate
``` 
5. Run server:
   
```bash
    py manage.py runserver
```
The project should be running now at http://localhost:8000/.


## Api Endpoints
### List of news Articles: 
- URL: /articles/
- Method: GET
- Description: Retrieves a list of news articles.
- Success Response: Code: 200 OK
-Content: A list of articles with details such as id, title, author, description, url, publishedAt,content, source, and image.
- Sample Call:
 ```bash
    GET "http://localhost:8000/api/articles"
```
- Sample Response:
```bash
[
.... 
        {
            "source": {
                "id": null,
                "name": "GSMArena.com"
            },
            "author": "Michail",
            "title": "Apple Vision Pro’s micro OLED displays, battery detailed in iFixt teardown part 2 - GSMArena.com news - GSMArena.com",
            "description": "Vision Pro earned a 4/10 repairability rating. iFixit shared a part 2 video to its Apple Vision Pro teardown which details the key components inside...",
            "url": "https://www.gsmarena.com/apple_vision_pros_micro_oled_displays_battery_detailed_in_ifixt_teardown_part_2-news-61531.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/02/apple-vision-pro-teardown-pt-2/-952x498w6/gsmarena_000.jpg",
            "publishedAt": "2024-02-08T17:01:01Z",
            "content": "iFixit shared a part 2 video to its Apple Vision Pro teardown which details the key components inside Apples first Spatial Computer. Spoiler alert Apple did some clever marketing tricks with the whol… [+1670 chars]"
        },
    ...
]


```
### Filter news by category: 
- URL: /articles/fiter/?category=''
- Method: GET
- Description: Retrieves detailed information about a specific news article.
- Success Response: Code: 200 OK
- Content: A list of articles with details such as id, title, author, description, url, publishedAt,content, source, and image.
-URL Parameters:
    ?category='value': the category of the requested articles.
-Success Response: Code: 200 OK
-Content: Detailed information about the article.
-Sample Call:
```bash
    GET "http://localhost:8000/api/articles/?category=health"
```
-Sample Response:
```bash
[
    ...
      {
        "id": 423,
        "title": "Kidney Stones Symptoms: Warning signs of kidney stones you must never ignore - IndiaTimes",
        "author": "TIMESOFINDIA.COM",
        "description": "​Kidney stones are hard mineral deposits that form in the kidneys when urine contains high levels of certain substances, such as calcium, oxalate, and uric acid, which can't be diluted properly. These crystals can grow in size over time, forming solid masses …",
        "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/warning-signs-of-kidney-stones-you-must-never-ignore/photostory/107526988.cms",
        "published_at": "2024-02-08T17:30:00Z",
        "content": "Kidney stones are hard mineral deposits that form in the kidneys when urine contains high levels of certain substances, such as calcium, oxalate, and uric acid, which can't be diluted properly. These… [+409 chars]",
        "urlToImage": "https://static.toiimg.com/photo/107527059.cms",
        "source": "The Times of India",
        "category": "health"
    },
  ... 
]
```
### Search news by keyword : 
- URL: /articles/fiter/?q=''
- Method: GET
- Description: Retrieves detailed information about a specific keyword inserted.
- Success Response: Code: 200 OK
- Content: A list of articles with details such as id, title, author, description, url, publishedAt,content, source, and image.
-URL Parameters:
    ?q='value': the category of the requested articles.
-Success Response: Code: 200 OK
-Content: Detailed information about the article.
-Sample Call:
```bash
    GET "http://localhost:8000/api/articles/?q=ball"
```
```bash
[
    ...
  {
            "source": {
                "id": null,
                "name": "Phys.Org"
            },
            "author": "Science X",
            "title": "What turned Earth into a giant snowball 700 million years ago? Scientists now have an answer - Phys.org",
            "description": "Australian geologists have used plate tectonic modeling to determine what most likely caused an extreme ice-age climate in Earth's history, more than 700 million years ago.",
            "url": "https://phys.org/news/2024-02-earth-giant-snowball-million-years.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/2024/what-turned-earth-into-3.jpg",
            "publishedAt": "2024-02-08T15:20:54Z",
            "content": "Australian geologists have used plate tectonic modeling to determine what most likely caused an extreme ice-age climate in Earth's history, more than 700 million years ago.\r\nThe study, published in G… [+4822 chars]"
    },
    ...
]   
```