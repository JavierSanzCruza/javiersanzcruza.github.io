---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: PhD Thesis
---

<div class="publications-div">
	<div class="about">
		<div>
			<div style="font-size:28px; line-height:35px">Contact recommendation in social networks: algorithmic models, diversity and network evolution</div>
			<hr class="solid">
			<div style="text-align: justify; line-height: 25px">
				<b>Supervisor:</b> Pablo Castells<br/>
				Submitted in January 2021, publicly defended on May 25 2021
			</div><br/>
			<div style="font-size:20px; text-align:left">Links</div>
			<hr class="solid">
			<div style="text-align: left">
				<a style="color: rgb(0,0,139)" href="https://javiersanzcruza.github.io/jsanzcruzado-phdthesis.pdf"><u>Thesis document</u></a> <br/>
				<a style="color: rgb(0,0,139)" href="https://javiersanzcruza.github.io/jsanzcruzado-phdthesis.pdf"><u>Defense slides</u></a>
			</div> <br/>
			<div style="font-size:20px; text-align:left">Abstract</div>
			<hr class="solid">
			<div style="text-align: justify">
				<p>Online social networks like Twitter, Facebook and LinkedIn are used daily by hundreds of millions of people to connect with other users around the world and share information with then. The massive scale of these platforms has led to the development of automated tools to prevent users from being overwhelmed by the vast amount of information they have access to on these sites. Recommender systems appear as a family of such tools, designed to make individual suggestions of items or people that users might be interested in according to their past personal preferences.</p>
				<p>This thesis focuses on the study of a particular problem at the confluence of online social networks and recommender systems: the problem of finding users in the network with whom other people wants to connect -- the problem known as contact recommendation. We explore this problem from three different perspectives.</p>
				<p>We first aim to identify the factors leading to the development of effective contact recommendation approaches, targeting the density of the network. For this, we explore the relation between contact recommendation in social networks and text information retrieval. Considering a collaborative filtering perspective, we explore the utility of adapting search-based models for their use in three different aspects of contact recommendation: as standalone recommendation algorithms, as similarity measures, and as samplers and features in learning to rank. Thorough experiments over Twitter and Facebook samples show the effectiveness of the adapted models in the three roles when compared to the best state of the art approaches.</p>
				<p>We also explore the potential of contact recommendation algorithms to drive the evolution of social networks towards desirable properties of the network as a whole -- beyond aggregating the isolated gains of each user. We investigate the definition of novel diversity metrics that quantify the effects of people recommendation over the structure of the network, with a particular focus on notions of structural diversity and weak ties. Over samples from Twitter, we find that recommending weak ties leads to increased novelty and diversity in the information that reaches the users in the network, with potential implications on the mitigation of filter bubbles.</p>
				<p>Finally, following up on the evolution perspectives, we address the recommendation task as an interactive cyclic process, where information is constantly exchanged between the users and the system. We develop a simple stochastic approach, based on the classical user-based k nearest neighbors collaborative filtering algorithm, that deals with the uncertainty of the available data for selecting the optimal neighbors of the user we want to generate recommendations for. We explore the utility of this method in dealing with cold start situations over different datasets from different recommendation domains -- including contact recommendation as a particularly compelling one.</p>
			</div>
		</div>
	</div>
</div>