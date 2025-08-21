---
layout: default
title: Talks
---
<div class="publications-div">
<div style="align: left; font-size:28px">Talks</div>
<hr class="solid">
<p> Here, you shall find the different invited talks in seminar, workshops. While related to scientific publications, the talks shown here are not necessarily tied to one. For talks related to specific papers in conferences, please, go to the Publications page. Talks are ordered from more recent to older.</p>

<ul class = "collapsible">
	{% for pub in site.data.talks %}
    <li>
        <div class = "collapsible-header" style="text-align:left;"><i class="material-icons">expand_more</i>
			<p style="margin-bottom:0px">
				<b>{{ pub.title }}.</b>
				{% if pub.language %}
					(In ({{ pub.language }}))
				{% endif %}
			<br/>
			<em> {{ pub.event }} </em>, {{ pub.venue }}, {{ pub.date }}.
			{% if pub.slides %}
    		    <a class="pub-link" href="{{ pub.slides }}">Slides</a>
		    {% endif %}
		    {% if pub.video %}
		        <a class="pub-link" href="{{ pub.video }}">Video</a>
        	{% endif %}
			</p>
		</div>
        <div class = "collapsible-body abstract">
        	<div class="abstract-text">
        		<span class="abstract-title"><b>Abstract:</b></span><span>{{ pub.abstract }}</span>
        	</div>
        	<div class="abstract-text">
        		<span class="abstract-title"><b>Keywords</b></span><span>
	        	{% for keyword in pub.keywords %}
	        		{% if forloop.last %}
	        			{{ keyword }}.
	    			{% else %}
	    				{{ keyword }},
	    			{% endif %}
	    		{% endfor %}
    			</span>
    		</div>
    	</div>
    </li>
    {% endfor %}
</ul>

</div>