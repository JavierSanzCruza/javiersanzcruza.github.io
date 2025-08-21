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
				<b>{{ net.title }}</b>
			{% if net.link %}
				</a>
			{% endif %}
			<br/>
			</p>
		</div>
        <div class = "collapsible-body abstract">
        	<div class="abstract-text">
        		<span class="abstract-title"><b>Description:</b></span><span>{{ net.description }}</span>
        	</div>
        	<div class="abstract-text">
        		<span class="abstract-title"><b>Keywords</b></span><span>
	        	{% for keyword in net.keywords %}
	        		{% if forloop.last %}
	        			{{ keyword }}.
	    			{% else %}
	    				{{ keyword }},
	    			{% endif %}
	    		{% endfor %}
	    	</span>
	    	</div>
    		{% if net.altlinks %}
    		<div class="abstract-text">
        		<span class="abstract-title"><b>Alternative links</b></span><span>
    			<ul>
    				{% for link in net.altlinks %}
    				<li><a href="{{ link.link }}">{{link.description}}</a></li>
    				{% endfor %}
    			</ul>
    		</span></div>
    	    {% endif %}
    	</div>
    </li>
    {% endfor %}
</ul>