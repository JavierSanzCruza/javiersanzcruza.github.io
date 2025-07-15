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
			</p>
		</div>
        <div class = "collapsible-body abstract">
        	<span><b>Abstract: </b> {{ pub.abstract }}
        	<br/><b>Keywords:</b>
        	{% for keyword in pub.keywords %}
        		{% if forloop.last %}
        			{{ keyword }}.
    			{% else %}
    				{{ keyword }},
    			{% endif %}
    		{% endfor %}
    		{% if pub.slides %}
    		    <br><b>Slides:</b> <a href="{{ pub.slides }}">{{ pub.slides }}</a>
		    {% endif %}
		    {% if pub.video %}
		        <br><b>Video:</b> <a href="{{ pub.video }}">{{ pub.video }}</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <br><b>Poster:</b> <a href="{{ pub.poster }}">{{ pub.poster }}</a>
    	    {% endif %}
    	</span>
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
			</p>
		</div>
        <div class = "collapsible-body abstract">
        	<span><b>Abstract: </b> {{ pub.abstract }}
        	<br/><b>Keywords:</b>
        	{% for keyword in pub.keywords %}
        		{% if forloop.last %}
        			{{ keyword }}.
    			{% else %}
    				{{ keyword }},
    			{% endif %}
    		{% endfor %}
    		{% if pub.slides %}
    		    <br><b>Slides:</b> <a href="{{ pub.slides }}">{{ pub.slides }}</a>
		    {% endif %}
		    {% if pub.video %}
		        <br><b>Video:</b> <a href="{{ pub.video }}">{{ pub.video }}</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <br><b>Poster:</b> <a href="{{ pub.poster }}">{{ pub.poster }}</a>
    	    {% endif %}
    		{% if pub.code %}
    		    <br><b>Code:</b> <a href="{{ pub.code }}">{{ pub.code }}</a>
    		{% endif %}</span>
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
			</p>
		</div>
        <div class = "collapsible-body abstract">
        	<span><b>Abstract: </b> {{ pub.abstract }}
        	<br/><b>Keywords:</b>
        	{% for keyword in pub.keywords %}
        		{% if forloop.last %}
        			{{ keyword }}.
    			{% else %}
    				{{ keyword }},
    			{% endif %}
    		{% endfor %}
    		{% if pub.slides %}
    		    <br><b>Slides:</b> <a href="{{ pub.slides }}">{{ pub.slides }}</a>
		    {% endif %}
		    {% if pub.video %}
		        <br><b>Video:</b> <a href="{{ pub.video }}">{{ pub.video }}</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <br><b>Poster:</b> <a href="{{ pub.poster }}">{{ pub.poster }}</a>
    	    {% endif %}
    		{% if pub.code %}
    		    <br><b>Code:</b> <a href="{{ pub.code }}">{{ pub.code }}</a>
    		{% endif %}
    		{% if pub.website %}
    		    <br><b>Website:</b> <a href="{{ pub.website }}">{{ pub.website }}</a>
    		{% endif %}</span>
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
			</p>
		</div>
        <div class = "collapsible-body abstract">
        	<span><b>Abstract: </b> {{ pub.abstract }}
        	<br/><b>Keywords:</b>
        	{% for keyword in pub.keywords %}
        		{% if forloop.last %}
        			{{ keyword }}.
    			{% else %}
    				{{ keyword }},
    			{% endif %}
    		{% endfor %}
    		{% if pub.slides %}
    		    <br><b>Slides:</b> <a href="{{ pub.slides }}">{{ pub.slides }}</a>
		    {% endif %}
		    {% if pub.video %}
		        <br><b>Video:</b> <a href="{{ pub.video }}">{{ pub.video }}</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <br><b>Poster:</b> <a href="{{ pub.poster }}">{{ pub.poster }}</a>
    	    {% endif %}
    		{% if pub.code %}
    		    <br><b>Code:</b> <a href="{{ pub.code }}">{{ pub.code }}</a>
    		{% endif %}
    		{% if pub.website %}
    		    <br><b>Website:</b> <a href="{{ pub.website }}">{{ pub.website }}</a>
    		{% endif %}</span>
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
			</p>
		</div>
        <div class = "collapsible-body abstract">
        	<span><b>Abstract: </b> {{ pub.abstract }}
        	<br/><b>Keywords:</b>
        	{% for keyword in pub.keywords %}
        		{% if forloop.last %}
        			{{ keyword }}.
    			{% else %}
    				{{ keyword }},
    			{% endif %}
    		{% endfor %}
    		{% if pub.slides %}
    		    <br><b>Slides:</b> <a href="{{ pub.slides }}">{{ pub.slides }}</a>
		    {% endif %}
		    {% if pub.video %}
		        <br><b>Video:</b> <a href="{{ pub.video }}">{{ pub.video }}</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <br><b>Poster:</b> <a href="{{ pub.poster }}">{{ pub.poster }}</a>
    	    {% endif %}
    	    {% if pub.code %}
    		    <br><b>Code:</b> <a href="{{ pub.code }}">{{ pub.code }}</a>
    		{% endif %}</span>
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
			</p>
		</div>
        <div class = "collapsible-body abstract">
        	<span><b>Abstract: </b> {{ pub.abstract }}
        	<br/><b>Keywords:</b>
        	{% for keyword in pub.keywords %}
        		{% if forloop.last %}
        			{{ keyword }}.
    			{% else %}
    				{{ keyword }},
    			{% endif %}
    		{% endfor %}
    		{% if pub.slides %}
    		    <br><b>Slides:</b> <a href="{{ pub.slides }}">{{ pub.slides }}</a>
		    {% endif %}
		    {% if pub.video %}
		        <br><b>Video:</b> <a href="{{ pub.video }}">{{ pub.video }}</a>
        	{% endif %}
        	{% if pub.poster %}
        	    <br><b>Poster:</b> <a href="{{ pub.poster }}">{{ pub.poster }}</a>
    	    {% endif %}
    	    {% if pub.code %}
    		    <br><b>Code:</b> <a href="{{ pub.code }}">{{ pub.code }}</a>
    		{% endif %}
    		</span>
    	</div>
    </li>
    {% endfor %}
</ul>




</div>