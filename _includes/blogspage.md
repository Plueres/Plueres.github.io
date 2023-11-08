<div id="blogs" class="content-wrapper">
    <button id="blogs-back-button">Back</button>
    <div class="wrapper">
        <h2>This is the blogs of the website</h2>

        {%- if site.blogposts.size > 0 -%}
                <h2 class="blogposts-list-heading">{{ page.list_title | default: "Blogs" }}</h2>
                <blogposts>
                    <div id="blogposts-grid">
                        {%- for blogpost in site.blogposts -%}
                        <article>
                            {%- if blogpost.header_image -%}
                            <img src="{{ blogpost.header_image | relative_url }}" alt="{{ blogpost.title | escape }}"
                                class="blogpost-header-img">
                            {%- endif -%}
                            {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                            <div class="blogpost-text">
                                <span class="blogposts-meta">{{ blogpost.date | date: date_format }}</span>
                                <h3>
                                    <a class="blogposts-link" href="{{ blogpost.url | relative_url }}">
                                        {{ blogpost.title | escape }}
                                    </a>
                                </h3>
                            </div>

                            {%- if site.show_excerpts -%}
                            {{ blogpost.excerpt }}
                            {%- endif -%}
                        </article>
                        {%- endfor -%}
                    </div>
                    {%- endif -%}
                    <div id="filters">
                    </div>
                </blogposts>
        
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
        </ul>-->
    </div>
</div>