---
layout: lists
permalink: list/movielist
---

| Title | Tags | Watched | Personal rating | Review |
| --- | --- | --- | --- | --- |
{% for movie in site.data.movielist %}| {{ movie.Title }} | {{ movie.Tags }} | {{ movie.Watched }} | {{ movie.Personal rating }} | {{ movie.Review }} |
{% endfor %}