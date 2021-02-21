---
layout: default
title: Publications
---

<ul class="collapsible collapsible-accordion">
	{% for pub in site.data.pubs %}
	<li>
		<div class = "collapsible-header"><i class="material-icons">expand_more</i>
		{% for author in pub.authors %}
			{% if forloop.last %}
				{{ author }}.
			{% else %}
				{{ author }},
			{% endif %}
		{% endfor %}
		<b>{{ pub.title }}</b>
	</div>
	<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
	</li>
	{% endfor %}
</ul>