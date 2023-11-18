---
layout: lists
permalink: list/movielist
---

| Title | Tags | Watched | Personal Rating | Review |
| --- | --- | --- | --- | --- |
{% for movie in site.data.movies.movies %}| {{ movie.title }} | {{ movie.tags }} | {{ movie.watched }} | {{ movie.personal_rating }} | {{ movie.review }} |
{% endfor %}