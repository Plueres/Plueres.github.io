---
layout: pages
permalink: lists/personal/wishlist
---

<wishlists>
{% for wishlist in site.wishlists %}
    <h2><a href="{{ site.baseurl }}{{ wishlist.url }}">{{ wishlist.title }}</a></h2>
{% endfor %}
</wishlists>
