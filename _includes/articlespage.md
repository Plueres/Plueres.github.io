<div id="articles" class="content-wrapper">
    <button id="articles-back-button">Back</button>
    <div class="wrapper">
        <h2>This is the articles of the website</h2>

        {%- if site.articles.size > 0 -%}
        <h2 class="articles-list-heading">{{ page.list_title | default: "articles" }}</h2>
        <articles>
            <div id="articles-grid">
                {%- assign sorted_articles = site.articles | sort: "date" | reverse -%}
                {%- for article in sorted_articles -%}
                <article data-category="{{ article.categories }}">
                    {%- if article.header_image -%}
                    <img src="{{ article.header_image | relative_url }}" alt="{{ article.title | escape }}"
                        class="article-header-img">
                    {%- endif -%}
                    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                    <div class="article-text">
                        <span class="articles-meta">{{ article.date | date: date_format }}</span>
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
                <input type="text" id="search-bar" placeholder="Search articles...">

                {% assign all_categories = "" %}
                {% for post in site.articles %}
                {% for category in post.categories %}
                {% assign all_categories = all_categories | append: " " | append: category %}
                {% endfor %}
                {% endfor %}
                {% assign all_categories = all_categories | split: " " | uniq | sort %}
                {% for category in all_categories %}
                <input type="checkbox" id="category-{{ category }}" name="category-{{ category }}"
                    value="{{ category }}">
                <label for="category-{{ category }}">{{ category }}</label><br>
                {% endfor %}
            </div>
        </articles>
    </div>
</div>
<script>
    function filterPosts() {
        var url = new URL(window.location.href);
        var categories = (url.searchParams.get('categories') || '').toLowerCase().split(',');
        var posts = document.querySelectorAll('#articles-grid article');
        posts.forEach(function (post) {
            var postCategories = post.getAttribute('data-category').toLowerCase().split(' ');
            if (categories.some(category => postCategories.some(postCategory => postCategory.includes(category)))) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    document.querySelectorAll('#filters input[type=checkbox]').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            var checkedBoxes = document.querySelectorAll('#filters input[type=checkbox]:checked');
            var categories = Array.from(checkedBoxes).map(function (box) { return box.value.toLowerCase(); });
            var url = new URL(window.location.href);
            if (categories.length > 0) {
                url.searchParams.set('categories', categories.join(','));
            } else {
                url.searchParams.delete('categories');
            }
            window.history.replaceState({}, '', url);
            filterPosts();
        });
    });

    document.getElementById('search-bar').addEventListener('input', function () {
        var searchTerm = this.value.toLowerCase();
        var articles = document.querySelectorAll('#articles-grid article');
        articles.forEach(function (article) {
            var title = article.querySelector('h3 a').textContent.toLowerCase();
            var categories = article.getAttribute('data-category').toLowerCase();
            if (title.includes(searchTerm) || categories.includes(searchTerm)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    });

    window.addEventListener('load', filterPosts);
</script>
<!-- <ul>
            {% for posts in site.posts %}
            <li>
                <h2><a href="{{ posts.url }}">{{ posts.title }}</a></h2>
                <p>{{ posts.excerpt }}</p>
            </li>
            {% endfor %}
        </ul>

        <ul>
            {% for article in site.articles %}
            <li>
                <h2><a href="{{ article.url }}">{{ article.title }}</a></h2>
                <p>{{ article.excerpt }}</p>
            </li>
            {% endfor %}
        </ul>-->