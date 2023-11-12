---
layout: lists
permalink: list/showslist
---

| Title | Tags | Season | Watched | Personal Rating | Review |
| --- | --- | --- | --- | --- | --- |
{% for show in site.data.showslist %}| {{ show.Title }} | {{ show.Tags }} | {{ show.Season }} | {{show.Watched}} | {{ show.Personal_Rating }} | {{ show.Review }} |
{% endfor %}