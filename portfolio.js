import emoji from "react-easy-emoji";

export const greetings = {
	name: "Theodore Idoko",
	title: "Hi all, I'm Theodore",
	description:
		"I am a Frontend developer who also have reasonable experience of backend. MERN Stack precisely. I aim at developing and creating human centered design solutions with empathy. JavaScript, React, Bootstrap, CSS/HTML, jQuery, Sass, Node, Nest*, Express, Node Package Manager, API CRUD operation, Database, MongoDb and Mongoose, Deployment, Git and GitHub, Adobe XD, Figma, Zeplin etc. I also have good knowledge of Python and currently enthusiastic to learn Django.",
	resumeLink: "TcCV.pdf",
};

export const openSource = {
	githubUserName: "Theodore-Idoko",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/profile.php?id=100010423380280",
	instagram: "https://www.instagram.com/idokotheodore",
	twitter: "https://twitter.com/TochuksCode",
	github: "https://github.com/Theodore-Idoko",
	linkedin: "https://www.linkedin.com/in/theodore-idoko-031039189/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web  applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		//{
		//	skillName: "TypeScript",
			//fontAwesomeClassname: "logos:typescript-icon",
		//},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		//{
		//	skillName: "flutter",
		//	fontAwesomeClassname: "logos:flutter",
		//},
		//{
		//	skillName: "swift",
		//	fontAwesomeClassname: "vscode-icons:file-type-swift",
		//},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		//{
			//skillName: "sql-database",
			//fontAwesomeClassname: "vscode-icons:file-type-sql",
		//},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		//{
		//	skillName: "docker",
		//	fontAwesomeClassname: "logos:docker-icon",
		//},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "70", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Ruhr Universität Bochum",
		subHeader: "Bachelor in Computer Science",
		duration: "Oct 2021 - Presently",
		//desc: "Participated in the research of XXX and published 3 papers.",
		//descBullets: [
		//	"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
		//	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		//],
	},
	{
		schoolName: "Stutern",
		subHeader: "Ausbildung Software-engineering",
		duration: "October 2019 - June 2020",
		desc: "Participated in so many personal and group  full-stack Projects",
		//descBullets: [
		//	"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
			//"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		//],
	},
	{
		schoolName: "Lagos State Employability Support Project",
		subHeader: "UI/UX Bootcamp",
		duration: "March 2019 – May 2019",
		desc: "Vocational Training exercise implemented by Lagos State and United Nations Development program (UNDP). Certified in UI/UX. Use of Figma to design website and webapp",
		//descBullets: [
			//"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
	//	],
	},
	{
		schoolName: "Nnamdi Azikiwe University",
		subHeader: "Bachelor of Arts - BA Philosophy",
		duration: "Oct 2011 – Jul 2015",
		//desc: "Vocational Training exercise implemented by Lagos State and United Nations Development program (UNDP). Certified in UI/UX. Use of Figma to design website and webapp",
		//descBullets: [
			//"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
	//	],
	},
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "Stutern",
		companylogo: "/img/icons/common/stuter.svg",
		date: "June 2020 – Sep 2020",
		desc: " Worked on the companies website and other smaller projects",
		//descBullets: [
			//"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			//"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		//],
	},
	//{
	//	role: "Front-End Developer",
		//company: "Github",
		//companylogo: "/img/icons/common/github.svg",
		//date: "May 2017 – May 2018",
		//desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	//},
	{
		role: "UI/UX Intern",
		company: "Cico Serve",
	//	companylogo: "/img/icons/common/airbnbLogo.png",
		date: "June 2019 – August 2019",
		desc: " Helped in designing some of their products with the help of Figma",
	},
];

export const projects = [
	{
		name: "Ecommerce-website",
		desc: "Build a Full-stack ecommerce website with React for the frontend and Nodejs for the backend. Mongodb was used as the database. It has full authenticatin procedure were people can login and logout. Payment was implemented as well",
		//link: "https://example.com",
	},
	{
		name: "Edemy-website",
		desc: "Implemented a market-place website like udemy, where prospective tutors can upload their videos and people pay to gain access to the tutorials. Nextjs was used for the frontend and Nodejs for the backend. Mongodb served as the database and AWS was also integerated for storing the large video sizes. Stripe was also implemented for the payment process",
	//	github: "https://github.com/1hanzla100",
	},
	{
		name: "Other Projects",
		desc: "Built other smaller projects throughout the course of my learning. They are all in my Github",
		//github: "https://github.com/1hanzla100",
		//link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
