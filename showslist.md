---
layout: lists
permalink: list/showslist
---

| Title | Tags | Season | Watched | Personal Rating | Review |
| --- | --- | --- | --- | --- | --- |
{% for show in site.data.showslist %}| {{ show.title }} | {{ show.tags }} | {{ show.season }} | {{show.watched}} | {{ show.personal_rating }} | {{ show.review }} |
{% endfor %}