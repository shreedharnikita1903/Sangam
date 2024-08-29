import React from 'react'
import blog1 from './img/blog 1.jpg'
import blog2 from './img/blog 2.jpg'
import blog3 from './img/blog 3.jpg'
import blog4 from './img/blog 4.jpg'
import blog5 from './img/blog 5.jpg'
import blog6 from './img/blog 6.jpg'
import { Link } from 'react-router-dom'

function Blog() {
  return (
	
	  
<body>



<section id="blog" class="text-center py-5 text-light">
	<div class="inner-overlay">
		<div class="container">
			<div class="row">
				<div class="col mt-5 pt-4">
					<h1 class="text-light">Blog</h1 >
					<p class="lead">
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="blog-post" class="py-5">
	<div class="container">
		<div class="row">
			<div class="col col-md-12">
				<div class="card-columns">
					<div class="card">
						<img src={blog1} class="img-fluid card-img-top"/>
						<div class="card-body">
							<h4 class="card-title">Git Branching Strategy</h4>
							<small class="text-muted">Posted by Raghu kumar C.K</small>
							<hr/>
							<p class="lead">"Imagine you're working on Link big group project with your classmates. You're all writing Link story together, but everyone has their own ideas and changes to make.</p>
							<Link to="" class="btn btn-dark btn-block">Read More</Link>
						</div>
					</div>
					<div class="card">
						<img src={blog2} class="img-fluid card-img-top"/>
						<div class="card-body">
							<h4 class="card-title">Stop using EOL Softwares</h4>
							<small class="text-muted">Posted by Raghu kumar C.K</small>
							<hr/>
							<p class="lead">EOL stands for "End-of-Life". It refers to the stage at which Link product, software, or technology reaches the end of its supported life cycle.</p>
							<Link to="" class="btn btn-dark btn-block">Read More</Link>
						</div>
					</div>
					<div class="card">
						<img src={blog3} class="img-fluid card-img-top"/>
						<div class="card-body">
							<h4 class="card-title">HPA in Kubernetes</h4>
							<small class="text-muted">Posted by Raghu kumar C.K</small>
							<hr/>
							<p class="lead">The Horizontal Pod Autoscaler (HPA) plays Link crucial role in maintaining resource efficiency and application performance in Kubernetes. </p>
							<Link to="" class="btn btn-dark btn-block">Read More</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="card-columns">
					<div class="card">
						<img src={blog4} class="img-fluid card-img-top"/>
						<div class="card-body">
							<h4 class="card-title">Monitoring setup using Open Source tools<br/></h4>
							<small class="text-muted">Posted by Raghu kumar C.K</small>
							<hr/>
							<p class="lead">Infrastructure monitoring is Link crucial aspect of maintaining the health, performance, and reliability of IT environments.</p>
							<Link to="" class="btn btn-dark btn-block">Read More</Link>
						</div>
					</div>
					<div class="card">
						<img src={blog5} class="img-fluid card-img-top"/>
						<div class="card-body">
							<h4 class="card-title">Top 5 Kubernetes Features</h4>
							<small class="text-muted">Posted by Raghu kumar C.K</small>
							<hr/>
							<p class="lead">Kubernetes, often abbreviated as K8s, is an open-source container orchestration platform for automating the deployment, scaling, and management of containerized applications.</p>
							<Link to="" class="btn btn-dark btn-block">Read More</Link>
						</div>
					</div>
					<div class="card">
						<img src={blog6} class="img-fluid card-img-top"/>
						<div class="card-body">
							<h4 class="card-title">GIT concepts for Freshers</h4>
							<small class="text-muted">Posted by Raghu kumar C.K</small>
							<hr/>
							<p class="lead">DevOps fresher, Link good understanding of Git is highly advantageous, considering its pivotal role in collaborative software development and its integral part in DevOps methodologies.</p>
							<Link to="" class="btn btn-dark btn-block">Read More</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


</body>



  )
}

export default Blog
