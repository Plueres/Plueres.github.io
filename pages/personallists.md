---
layout: personallist
permalink: /personal/homepage
---

<div id="personallists">
        <wishlists class="personallist">
                <h2>Wishlists</h2>
                {% for wishlist in site.wishlists %}
                <a href="{{ site.baseurl }}{{ wishlist.url }}" class="personallistitem">
                        <h3>{{ wishlist.title }}</h3>
                </a>
                {% endfor %}
        </wishlists>
        <bucketlist class="personallist">
                <h2>Bucketlist</h2>
                <a href="bucketlist" id="bucketlist" class="personallistitem">
                        <h3>
                                Bucketlist
                        </h3>
                </a>
        </bucketlist>
</div>