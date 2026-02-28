---
layout: cards
datafile: keywords-2026-02
title:  "Key Words February 2026"
date:   2026-02-28 14:30:00 -0800
tags: [ keywords, "February 2026" ]
---

<div id="flashcard-container">
{% for word in site.data.keywords-2026-02 %}
    <div class="card">
      <div class="card-inner">
        <div class="card-front">{{ word.english }}</div>
        <div class="card-back">{{ word.spanish }}</div>
      </div>
    </div>
{% endfor %}
</div>
<div>
  <img src="https://www.pngkey.com/png/full/47-473699_charlie-we-bare-bears-au.png" alt="¡Hola, amigos!" style="width:25%;height:25%;">
</div>