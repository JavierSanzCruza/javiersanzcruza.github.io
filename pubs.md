---
layout: default
title: Publications
---
<div class="publications-div">
<div style="align: left; font-size:28px">Publications</div>
<hr class="solid">
<p> Here, you shall find the different articles we have published in scientific journals, conferences, workshops, etc. For each category, articles are ordered from more recent to older.</p>
<h5>Journal publications</h5>
<ul class = "collapsible">
	{% for pub in site.data.journals %}
    <li>
        <div class = "collapsible-header" style="text-align:left;"><i class="material-icons">expand_more</i>
			<p style="margin-bottom:0px">{% for author in pub.authors %}
				{% if forloop.last %}
					{{ author }}. 
				{% else %}
					{{ author }},
				{% endif %}
			{% endfor %} 
			{% if pub.link %}
				<a href="{{ pub.link }}">
			{% endif %} 
				<b>{{ pub.title }}.</b>
			{% if pub.link %}
				</a>
			{% endif %}
			<br/>
			<em> {{ pub.journal }} </em>, 
			{{ pub.volume }}
			{% if pub.issue %}
			({{ pub.issue }}),
			{% endif %}
			{% if pub.articleid %}
				{{ pub.articleid }},
			{% endif %}
			{% if pub.pages %}
				pp. {{ pub.pages }},
			{% endif %}
			{{ pub.date }}.
			{% if pub.doi %}
			DOI: <a href="{{ pub.doi }}">{{ pub.doi }}</a> 
    		{% endif %}
    		<br/>
    		{% if pub.award %}
    			<span class="award-{{pub.award_num}}"><b>{{ pub.award }}</b></span>
    		{% endif %}
    		{% if pub.slides %}
    		    <a class="pub-link" href="{{ pub.slides }}">Slides</a>
		    {% endif %}
		    {% if pub.video %}
		        <a class="pub-link" href="{{ pub.video }}">Video</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <a class="pub-link" href="{{ pub.poster }}">Poster</a>
    	    {% endif %}
    	    {% if pub.data %}
    	    	<a class="pub-link" href="{{ pub.data }}">Data</a>
    	    {% endif %}
    	    {% if pub.code %}
    		    <a class="pub-link" href="{{ pub.code }}">Code</a>
    		{% endif %}
    		{% if pub.model %}
    		    <a class="pub-link" href="{{ pub.model }}">Model</a>
    		{% endif %}
    		{% if pub.website %}
    		    <a class="pub-link" href="{{ pub.website }}">Website</a>
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
<h5>Conference publications</h5>
<ul class = "collapsible">
	{% for pub in site.data.conferences %}
    <li>
        <div class = "collapsible-header" style="text-align:left"><i class="material-icons">expand_more</i>
			<p style="margin-bottom:0px">{% for author in pub.authors %}
				{% if forloop.last %}
					{{ author }}. 
				{% else %}
					{{ author }},
				{% endif %}
			{% endfor %}
			{% if pub.link %}
				<a href="{{ pub.link }}">
			{% endif %} 
				<b>{{ pub.title }}.</b>
			{% if pub.link %}
				</a>
			{% endif %}
			<br/>
			<em>{{ pub.conference }}</em>,
			{% if pub.book %}
				{{ pub.book }}, Vol. {{ pub.volume }}.
			{% endif %}
			{{ pub.venue }},
			{{ pub.date }},
			{% if pub.articleid %}
				{{ pub.articleid }}
			{% endif %}
			{% if pub.pages %}
				pp. {{ pub.pages }}.
			{% else %}
			.
			{% endif %}
			{% if pub.doi %}
			DOI: <a href="{{ pub.doi }}">{{ pub.doi }}</a> 
    		{% endif %}
    		<br/>
    		{% if pub.award %}
    			<span class="award-{{pub.award_num}}"><b>{{ pub.award }}</b></span>
    		{% endif %}
    		{% if pub.slides %}
    		    <a class="pub-link" href="{{ pub.slides }}">Slides</a>
		    {% endif %}
		    {% if pub.video %}
		        <a class="pub-link" href="{{ pub.video }}">Video</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <a class="pub-link" href="{{ pub.poster }}">Poster</a>
    	    {% endif %}
    	    {% if pub.data %}
    	    	<a class="pub-link" href="{{ pub.data }}">Data</a>
    	    {% endif %}
    	    {% if pub.code %}
    		    <a class="pub-link" href="{{ pub.code }}">Code</a>
    		{% endif %}
    		{% if pub.model %}
    		    <a class="pub-link" href="{{ pub.model }}">Model</a>
    		{% endif %}
    		{% if pub.website %}
    		    <a class="pub-link" href="{{ pub.website }}">Website</a>
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
<h5>Conference demonstrations</h5>
<ul class = "collapsible">
	{% for pub in site.data.demonstrations %}
    <li>
        <div class = "collapsible-header" style="text-align:left"><i class="material-icons">expand_more</i>
			<p style="margin-bottom:0px">{% for author in pub.authors %}
				{% if forloop.last %}
					{{ author }}. 
				{% else %}
					{{ author }},
				{% endif %}
			{% endfor %}
			{% if pub.link %}
				<a href="{{ pub.link }}">
			{% endif %} 
				<b>{{ pub.title }}.</b>
			{% if pub.link %}
				</a>
			{% endif %}
			<br/>
			<em>{{ pub.conference }}</em>,
			{% if pub.book %}
				{{ pub.book }}, Vol. {{ pub.volume }}.
			{% endif %}
			{{ pub.venue }},
			{{ pub.date }},
			{% if pub.articleid %}
				{{ pub.articleid }}
			{% endif %}
			{% if pub.pages %}
				pp. {{ pub.pages }}.
			{% else %}
			.
			{% endif %}
			{% if pub.doi %}
			DOI: <a href="{{ pub.doi }}">{{ pub.doi }}</a> 
    		{% endif %}
    		<br/>
    		{% if pub.award %}
    			<span class="award-{{pub.award_num}}"><b>{{ pub.award }}</b></span>
    		{% endif %}
    		{% if pub.slides %}
    		    <a class="pub-link" href="{{ pub.slides }}">Slides</a>
		    {% endif %}
		    {% if pub.video %}
		        <a class="pub-link" href="{{ pub.video }}">Video</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <a class="pub-link" href="{{ pub.poster }}">Poster</a>
    	    {% endif %}
    	    {% if pub.data %}
    	    	<a class="pub-link" href="{{ pub.data }}">Data</a>
    	    {% endif %}
    	    {% if pub.code %}
    		    <a class="pub-link" href="{{ pub.code }}">Code</a>
    		{% endif %}
    		{% if pub.model %}
    		    <a class="pub-link" href="{{ pub.model }}">Model</a>
    		{% endif %}
    		{% if pub.website %}
    		    <a class="pub-link" href="{{ pub.website }}">Website</a>
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

<h5>Conference tutorials</h5>
<ul class = "collapsible">
	{% for pub in site.data.tutorials %}
    <li>
        <div class = "collapsible-header" style="text-align:left"><i class="material-icons">expand_more</i>
			<p style="margin-bottom:0px">{% for author in pub.authors %}
				{% if forloop.last %}
					{{ author }}. 
				{% else %}
					{{ author }},
				{% endif %}
			{% endfor %}
			{% if pub.link %}
				<a href="{{ pub.link }}">
			{% endif %} 
				<b>{{ pub.title }}.</b>
			{% if pub.link %}
				</a>
			{% endif %}
			<br/>
			<em>{{ pub.conference }}</em>,
			{% if pub.book %}
				{{ pub.book }}, Vol. {{ pub.volume }}.
			{% endif %}
			{{ pub.venue }},
			{{ pub.date }},
			{% if pub.articleid %}
				{{ pub.articleid }}
			{% endif %}
			{% if pub.pages %}
				pp. {{ pub.pages }}.
			{% else %}
			.
			{% endif %}
			{% if pub.doi %}
			DOI: <a href="{{ pub.doi }}">{{ pub.doi }}</a> 
    		{% endif %}
    		<br/>
    		{% if pub.award %}
    			<span class="award-{{pub.award_num}}"><b>{{ pub.award }}</b></span>
    		{% endif %}
    		{% if pub.slides %}
    		    <a class="pub-link" href="{{ pub.slides }}">Slides</a>
		    {% endif %}
		    {% if pub.video %}
		        <a class="pub-link" href="{{ pub.video }}">Video</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <a class="pub-link" href="{{ pub.poster }}">Poster</a>
    	    {% endif %}
    	    {% if pub.data %}
    	    	<a class="pub-link" href="{{ pub.data }}">Data</a>
    	    {% endif %}
    	    {% if pub.code %}
    		    <a class="pub-link" href="{{ pub.code }}">Code</a>
    		{% endif %}
    		{% if pub.model %}
    		    <a class="pub-link" href="{{ pub.model }}">Model</a>
    		{% endif %}
    		{% if pub.website %}
    		    <a class="pub-link" href="{{ pub.website }}">Website</a>
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

<h5>Book chapters</h5>
<ul class = "collapsible">
	{% for pub in site.data.books %}
    <li>
        <div class = "collapsible-header" style="text-align:left"><i class="material-icons">expand_more</i>
			<p style="margin-bottom:0px">{% for author in pub.authors %}
				{% if forloop.last %}
					{{ author }}. 
				{% else %}
					{{ author }},
				{% endif %}
			{% endfor %}
			{% if pub.link %}
				<a href="{{ pub.link }}">
			{% endif %} 
				<b>{{ pub.title }}.</b>
			{% if pub.link %}
				</a>
			{% endif %}
			<br/>
			{% for editor in pub.editors %}
				{% if forloop.last %}
					{{ editor }} (Eds): 
				{% else %}
					{{ editor }},
				{% endif %}
			{% endfor %}
			<em>{{ pub.book }}</em>,
			{{ pub.editorial }},
			{{ pub.date }},
			{% if pub.articleid %}
				{{ pub.articleid }}
			{% endif %}
			{% if pub.pages %}
				pp. {{ pub.pages }}.
			{% else %}
			.
			{% endif %}
			{% if pub.doi %}
			DOI: <a href="{{ pub.doi }}">{{ pub.doi }}</a> 
    		{% endif %}
    		<br/>
    		{% if pub.award %}
    			<span class="award-{{pub.award_num}}"><b>{{ pub.award }}</b></span>
    		{% endif %}
    		{% if pub.slides %}
    		    <a class="pub-link" href="{{ pub.slides }}">Slides</a>
		    {% endif %}
		    {% if pub.video %}
		        <a class="pub-link" href="{{ pub.video }}">Video</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <a class="pub-link" href="{{ pub.poster }}">Poster</a>
    	    {% endif %}
    	    {% if pub.data %}
    	    	<a class="pub-link" href="{{ pub.data }}">Data</a>
    	    {% endif %}
    	    {% if pub.code %}
    		    <a class="pub-link" href="{{ pub.code }}">Code</a>
    		{% endif %}
    		{% if pub.model %}
    		    <a class="pub-link" href="{{ pub.model }}">Model</a>
    		{% endif %}
    		{% if pub.website %}
    		    <a class="pub-link" href="{{ pub.website }}">Website</a>
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


<h5>Workshop publications</h5>
<ul class = "collapsible">
	{% for pub in site.data.workshops %}
    <li>
        <div class = "collapsible-header" style="text-align:left"><i class="material-icons">expand_more</i>
			<p style="margin-bottom:0px">{% for author in pub.authors %}
				{% if forloop.last %}
					{{ author }}. 
				{% else %}
					{{ author }},
				{% endif %}
			{% endfor %}
			{% if pub.link %}
				<a href="{{ pub.link }}">
			{% endif %} 
				<b>{{ pub.title }}.</b>
			{% if pub.link %}
				</a>
			{% endif %}
			<br/>
			<em>{{ pub.workshop }}</em> co-located with <em>{{ pub.conference }}</em>.
			{% if pub.book %}
				{{ pub.book }}
				{% if pub.volume %} 
					, Vol. {{ pub.volume }}.
				{% else %}
					.
				{% endif %}
			{% endif %}
			{{ pub.venue }},
			{{ pub.date }},
			{% if pub.articleid %}
				{{ pub.articleid }}
			{% endif %}
			{% if pub.pages %}
				pp. {{ pub.pages }}.
			{% else %}
			.
			{% endif %}
			{% if pub.doi %}
        		DOI: <a href="{{ pub.doi }}">{{ pub.doi }}</a> 
    		{% endif %}
    		<br/>
    		{% if pub.award %}
    			<span class="award-{{pub.award_num}}"><b>{{ pub.award }}</b></span>
    		{% endif %}
    		{% if pub.slides %}
    		    <a class="pub-link" href="{{ pub.slides }}">Slides</a>
		    {% endif %}
		    {% if pub.video %}
		        <a class="pub-link" href="{{ pub.video }}">Video</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <a class="pub-link" href="{{ pub.poster }}">Poster</a>
    	    {% endif %}
    	    {% if pub.data %}
    	    	<a class="pub-link" href="{{ pub.data }}">Data</a>
    	    {% endif %}
    	    {% if pub.code %}
    		    <a class="pub-link" href="{{ pub.code }}">Code</a>
    		{% endif %}
    		{% if pub.model %}
    		    <a class="pub-link" href="{{ pub.model }}">Model</a>
    		{% endif %}
    		{% if pub.website %}
    		    <a class="pub-link" href="{{ pub.website }}">Website</a>
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