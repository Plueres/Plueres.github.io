---
layout: default
permalink: /articles
---

<div id="articles" class="content-wrapper">
    <div class="wrapper">
        <button id="filtericon">
            <span class="material-symbols-rounded">filter_alt</span>
        </button>

        {%- if site.articles.size > 0 -%}
        <articles>
            <div id="articles-grid">
                {%- assign sorted_articles = site.articles | sort: "date" | reverse -%}
                {%- for article in sorted_articles -%}
                <article data-category="{{ article.categories }}">
                    {%- if article.header_image -%}
                    <img src="{{ article.header_image | relative_url }}" alt="{{ article.title | escape }}"
                        class="article-header-img">
                    {%- else -%}
                    <div class="article-header-img" style="background-color: gray;"></div>
                    {%- endif -%}
                    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                    <div class="article-text">
                        <span class="articles-meta">{{ article.date | date: date_format }}</span>
                        {% for category in article.categories %}
                        <a href="{{ site.url }}/articles?categories={{ category | url_encode }}">
                            <category>{{ category }}</category>
                        </a>
                        {% endfor %}
                        <h3>
                            <a class="articles-link" href="{{ article.url | relative_url }}">
                                {{ article.title | escape }}
                            </a>
                        </h3>
                    </div>

                    {%- if site.show_excerpts -%}
                    {{ article.excerpt }}
                    {%- endif -%}
                </article>
                {%- endfor -%}
            </div>
            {%- endif -%}
            <div id="filters">
                <div id="filtersearch">
                    <input type="text" id="search-bar" placeholder="Search">
                </div>

                <div id="filterlist">
                    {% assign all_categories = "" %}
                    {% for post in site.articles %}
                    {% for category in post.categories %}
                    {% assign all_categories = all_categories | append: " " | append: category %}
                    {% endfor %}
                    {% endfor %}
                    {% assign all_categories = all_categories | split: " " | uniq | sort %}
                    {% for category in all_categories %}
                    <tag>
                        <input type="checkbox" id="category-{{ category }}" name="category-{{ category }}"
                            value="{{ category }}">
                        <label for="category-{{ category }}">{{ category }}</label>
                    </tag>
                    {% endfor %}
                </div>

            </div>

        </articles>
    </div>

</div>
<script src="scripts/articles.js"></script>