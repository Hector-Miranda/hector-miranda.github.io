---
layout: cards
datafile: keywords-2026-10
title:  "Key Words October 2026"
date:   2026-10-09 00:00:00 -0700
tags: [ keywords, "October 2026" ]
---

<div id="flashcard-container">
{% for word in site.data.keywords-2026-10 %}
    <div class="card">
      <div class="card-inner">
        <div class="card-front">{{ word.english }}</div>
        <div class="card-back">{{ word.spanish }}</div>
      </div>
    </div>
{% endfor %}
</div>