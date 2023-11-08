---
layout: wishlist
title:  Wishlist
categories: wishlist
permalink:  personal/wishlist/wishlist
header_image:
---

<h2> Wishlist </h2>

<div class="listgrid">
{% for item in site.data.wishlists.wishlist %}
    <div class="listitem">
        <div class="listitemimg">
            <img src="{{ item.image }}" alt="{{ item.name }}">
        </div>
        <div class="listitemcontent">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <h3>links:</h3>
            {% for link in item.links %}
                <a href="{{ link.url }}" target="_blank">{{ link.name }}</a><br>
            {% endfor %}
        </div>
    </div>
{% endfor %}
</div>