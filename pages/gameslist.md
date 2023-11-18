---
layout: lists
permalink: list/gameslist
---
| Name of game | Tags | Has Played | Has Finished Story | Personal rating | Review |
| --- | --- | --- | --- | --- | --- |
{% for game in site.data.games.games %}| {{ game.title }} | {{ game.tags }} | {{ game.played }} | {{ game.finished }} | {{ game.personal_rating }} | {{game.review}} |
{% endfor %}