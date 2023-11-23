---
layout: default
permalink: /articles
---

<div id="articles">
    <div class="wrapper">

        {%- if site.articles.size > 0 -%}
        <articles>
            <div id="articles-grid">
                {%- assign sorted_articles = site.articles | sort: "updated" | reverse -%}
                {%- for article in sorted_articles -%}
                <article data-tag="{{ article.tags | join: '|' }}">
                    <div class="article-overlay">
                        {% for tag in article.tags %}
                        <a href="{{ site.url }}/articles?tags={{ tag | url_encode }}">
                            <posttags>{{ tag }}</posttags>
                        </a>
                        {% endfor %}
                    </div>
                    <a class="articles-link" href="{{ article.url | relative_url }}">
                        {%- if article.header_image -%}
                        <img src="{{ article.header_image | relative_url }}" alt="{{ article.title | escape }}"
                            class="article-header-img">
                        {%- endif -%}
                        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                        <div class="article-text">
                            <span class="articles-meta">{{ article.date | date: date_format }}</span>
                            <h3>
                                {{ article.title | escape }}
                            </h3>
                        </div>

                        {%- if site.show_excerpts -%}
                        {{ article.excerpt }}
                        {%- endif -%}
                    </a>
                </article>
                {%- endfor -%}
            </div>
            {%- endif -%}
            <div id="filters">

                <div id="filtersheader">
                    <div id="searchbarcontainer">
                        <input type="search" id="search-bar" placeholder="Search">
                        <span class="material-symbols-rounded">
                            search
                        </span>
                    </div>

                    <button id="filtericon">
                        <span class="material-symbols-rounded">filter_alt</span>
                    </button>
                </div>

                <div id="filterlist">
                    {% assign all_tags = "" %}
                    {% for post in site.articles %}
                    {% for tag in post.tags %}
                    {% assign all_tags = all_tags | append: "|" | append: tag %}
                    {% endfor %}
                    {% endfor %}
                    {% assign all_tags = all_tags | split: "|" | uniq | sort %}
                    {% for tag in all_tags %}
                    {% if tag != "" %}
                    <tag>
                        <input type="checkbox" id="tag-{{ tag | lowercase | replace: ' ', '-' }}"
                            name="tag-{{ tag | lowercase | replace: ' ', '-' }}"
                            value="{{ tag | lowercase | replace: ' ', '-' }}">
                        <label for="tag-{{ tag | lowercase | replace: ' ', '-' }}">{{ tag | capitalize }}</label>
                    </tag>
                    {% endif %}
                    {% endfor %}
                </div>
            </div>

        </articles>
    </div>

</div>
<script src="/scripts/articles.js"></script>
<script src="/scripts/global.js"></script>