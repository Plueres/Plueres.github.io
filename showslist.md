---
layout: lists
permalink: list/showslist?sort=name
---

| Title | Tags | Season | Watched | Personal Rating | Review |
| --- | --- | --- | --- | --- | --- |
{% for show in site.data.shows.shows %}| {{ show.title }} | {{ show.tags }} | {{ show.season }} | {{show.watched}} | {{ show.personal_rating }} | {{ show.review }} |
{% endfor %}