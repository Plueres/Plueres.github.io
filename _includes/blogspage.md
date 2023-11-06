<div id="blogs" class="content-wrapper">
    <button id="blogs-back-button">Back</button>
    <div class="wrapper">
        <h2>This is the blogs of the website</h2>

        {%- if site.articles.size > 0 -%}
        <h2 class="articles-list-heading">{{ page.list_title | default: "Blogs" }}</h2>
        <articles>
            <div id="articles-grid">
                {%- for articles in site.articles -%}
                <article>
                    {%- if articles.header_image -%}
                    <img src="{{ articles.header_image | relative_url }}" alt="{{ articles.title | escape }}"
                        class="article-header-img">
                    {%- endif -%}
                    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                    <div class="article-text">
                        <span class="articles-meta">{{ articles.date | date: date_format }}</span>
                        <h3>
                            <a class="articles-link" href="{{ articles.url | relative_url }}">
                                {{ articles.title | escape }}
                            </a>
                        </h3>
                    </div>

                    {%- if site.show_excerpts -%}
                    {{ articles.excerpt }}
                    {%- endif -%}
                </article>
                {%- endfor -%}
            </div>
            {%- endif -%}
            <div id="filters">

            </div>
        </articles>
        <!-- <ul>
            {% for posts in site.posts %}
            <li>
                <h2><a href="{{ posts.url }}">{{ posts.title }}</a></h2>
                <p>{{ posts.excerpt }}</p>
            </li>
            {% endfor %}
        </ul>

        <ul>
            {% for blogpost in site.blogposts %}
            <li>
                <h2><a href="{{ blogpost.url }}">{{ blogpost.title }}</a></h2>
                <p>{{ blogpost.excerpt }}</p>
            </li>
            {% endfor %}
        </ul>
    </div>
</div>