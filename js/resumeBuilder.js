var bio = {
	"fullname" : "Oscar Laverde", 
	"role" : "Web-Developer", 
	"contacts" : {
		"mobile" : "519-619-3907",
		"email" : "info@oscarlab.ca", 
		"github" : "ozkarlav",
		"twitter" : "@oscarlav",
		"location" : "London, ON, Canada"
	},
	"picture" : "images/oscar.jpg", 
	"welcomemsg" : "Welcome to my Bio Page", 
	"skills" : ["e-commerce", "HTML", "CSS", "Windows"]
};

var work = {
	"jobs": [	{
		"employer": "ABC Cork Co.",
		"title": "Web Developer, Graphic Designer, IT/Project Manager.",
		"location": "London, ON",
		"dates": "2005 - 2016",
		"description": "Responsible for design and daily maintenance of a global website and many of its localized sites. Supervise the development, security and performance of the online business working with a team within the organization as well as external 3rd party agencies, successfully increasing company revenues. Investigate various security incidents caused by malicious activities, and identify false positives. Document security events daily, creating activity reports for future use and reference. Assist in sales and human resources functions by training staff and contractors."
	}, {
		"employer": "MediaLime Co-Owner",
		"title": "Owner/Web-Designer/Photografer",
		"location": "London, ON",
		"dates": "2004-2005",
		"description": "Company specialized in real estate virtual tours and video tours, providing professional Videos and 360° home virtual tours as well as 360° commercial virtual tours across southwestern Ontario."
	}, {
		"employer": "ProAves",
		"title": "Scientist",
		"location": "Barbacoas, Colombia",
		"dates": "2003 - 2004",
		"description": "Captured mammals, birds, reptiles and amphibians using different type of methods of hand capture, mist nets, pitfall traps and Tomahawk traps. As well as collecting vital biological data such as location, weight, measures and photographical record. Collected and analyzed geographical data about distribution and relationships among organisms’ populations. Successfully finding new distribution reports for wildlife animal species. Providing a basis for future monitoring and an ecological basis for land management and conservation decisions."
	}]
};

var projects = {
	"project" : [
		{
			"title" : "Portfolio Site",
			"date" : "January, 2016",
			"description" : "A PDF-file was privides and I replicated that design in HTML and CSS. I developed a responsive website that will display images, descriptions and links to each of the portfolio projects I will completing throughout the course of the Front-End Web Developer Nanodegree.",
			"url" : "https://github.com/ozkarlav/P1-Build-a-Portfolio-Site",
			"images" : ["images/portfolio01-thumbnail.jpg", "images/portfolio02-thumbnail.jpg"]
		},{
			"title" : "About Me",
			"date" : "January, 2016",
			"description" : "I created and edited simple HTML and CSS files and created my very first webpage! I was able to complete this project after reviewing Lesson 1 of the Intro to HTML & CSS course.",
			"url" : "https://github.com/ozkarlav/PO-About-Me",
			"images" : ["images/about-me-01.jpg", "images/about-me-02.jpg"]
		},
		{
			"title" : "HealthQ",
			"date" : "2013",
			"description" : "This was a graduation project for the GIS program from Fanshawe College. Its pourpose was to help users find the nearest Walk-in Clinic, its business hours, contact info and location.",
			"url" : "http://www.healthq.ca",
			"images" : ["images/healthq-map-thumbnail.jpg", "images/healthq-team-thumbnail.jpg"]
		}
	]
};

var education = {
	"schools" : [
		{

			"name" : "Fanshawe College",
			"location" : "London, ON",
			"degree" : "Geographic Information Systems - Graduate Certificate",
			"major" : "N/A",
			"dates" : 2014,
		},
		{
			"name" : "Universidad del Tolima",
			"location" : "Ibague, Colombia",
			"degree" : "Bachelor of Science",
			"major" : "Biology",
			"dates" : 2005,
		}
	],
	"onlinecourses" : [
	{
		"school" : "Udacity",
		"title" : "Front-End Web Developer Nanodegree",
		"dates" : 2016,
		"url" : "http://www.udacity.com/"
	}
	]
};


bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.fullname);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomemsg);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcome);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);	
	}
};



work.display = function(){
	$("#workExperience").prepend(HTMLworkStart);
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescrip = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedDescrip);
	}
};


projects.display = function(){
	for (projct in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[projct].title).replace("#", projects.project[projct].url);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.project[projct].date);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[projct].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDate);
		$(".project-entry:last").append(formattedProjectDescription);
		if (projects.project[projct].images.length > 0) {
			for (img in projects.project[projct].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[projct].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			};
		}
	}
};

education.display = function(){
	$("#education").append(HTMLschoolStart);
	for (school in education.schools){
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolName + formattedDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedMajor);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (courses in education.onlinecourses){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[courses].title).replace("#", education.onlinecourses[courses].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[courses].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses[courses].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[courses].url);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);