<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <title>egg - HackerNews</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <div id="wrapper">
      <div id="header">
        <a id="yc" href="http://www.ycombinator.com"><img src="https://news.ycombinator.com/y18.gif"></a>
        <h1><a href="/news">Hacker News</a></h1>
        <span class="source">
          Built with <a href="https://eggjs.org/" target="_blank">egg</a> | <a href="https://github.com/eggjs/egg-boilerplate-simple" target="_blank">Source</a>
        </span>
      </div>

      <div class="news-view view v-transition">
        {% for item in list %}
          <div class="item">
            <span class="index">{{ (page-1) * pageSize + loop.index }}.</span>
            <p>
              <a class="title" target="_blank" href="{{ item.url }}">{{ item.title }}</a>
              <span class="domain">({{ helper.domain(item.url) }})</span>
            </p>
            <p class="subtext">
              <span>
                {{ item.score }} points by <a href="/news/user/{{ item.by }}">{{ item.by }}</a>
              </span>
              {{ item.time | relativeTime }}
              <span class="comments-link">
                | <a href="/news/item/{{ item.id }}">{{item.descendants}} comments</a>
              </span>
            </p>
          </div>
        {% endfor %}

        <div class="nav">
          {% if page > 1 %}
          <a href="/news?page={{ page }}">&lt; prev</a>
          {% endif %}
          <a href="/news?page={{ page + 1 }}">more...</a>
        </div>
      </div>
    </div>
  </body>
<html/>