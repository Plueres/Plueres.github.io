---
layout: lists
permalink: list/movielist
---

| Title | Tags | Watched | Personal Rating | Review |
| --- | --- | --- | --- | --- |
{% for movie in site.data.movielist %}| {{ movie.Title }} | {{ movie.Tags }} | {{ movie.Watched }} | {{ movie.Personal_Rating }} | {{ movie.Review }} |
{% endfor %}