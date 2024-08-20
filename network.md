---
layout: default
title: Networks
---

<div class="publications-div">
    <div style="align: left; font-size:28px">Curriculum vitae</div>
    <hr class="solid">
    <p>In this section, I show examples of network visualizations. Available networks are:</p>
	<ul class = "collapsible">
	{% for net in site.data.networks %}
    <li>
        <div class = "collapsible-header" style="text-align:left;"><i class="material-icons">expand_more</i>
			<p style="margin-bottom:0px">
			{% if net.link %}
				<a href="{{ net.link }}">
			{% endif %} 
				<b>{{ net.title }}.</b>
			{% if net.link %}
				</a>
			{% endif %}
			<br/>
			</p>
		</div>
        <div class = "collapsible-body abstract">
        	<span><b>Description: </b> {{ net.description }}
        	<br/><b>Keywords:</b>
        	{% for keyword in net.keywords %}
        		{% if forloop.last %}
        			{{ keyword }}.
    			{% else %}
    				{{ keyword }},
    			{% endif %}
    		{% endfor %}
    		{% if net.altlinks %}
    		<br><b>Alternative links:</b>
    			<ul>
    				{% for link in net.altlinks %}
    				<li><a href="{{ link.link }}">{{link.description}}</a></li>
    				{% end for %}
    			</ul>
    		{% endif %}
    	</span>
    	</div>
    </li>
    {% endfor %}
</ul>