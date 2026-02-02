---
layout: cards
datafile: keywords-2026-01
title:  "Key Words January 2026"
date:   2026-01-31 22:00:00 -0800
tags: [ keywords, "January 2026" ]
---

<div id="flashcard-container">
{% for word in site.data.keywords-2026-01 %}
    <div class="card">
      <div class="card-inner">
        <div class="card-front">{{ word.english }}</div>
        <div class="card-back">{{ word.spanish }}</div>
      </div>
    </div>
{% endfor %}
</div>