const RESOURCES: Resource[] = [
  {
    name: "30 Seconds Of Interviews",
    description:
      "A curated collection of common interview questions to help you prepare for your next interview.",
    url: "https://30secondsofinterviews.org/",
    github: "https://github.com/30-seconds/30-seconds-of-interviews",
    icon: "https://30secondsofinterviews.org/30s-favicon.107cc86d.ico",
    tags: [
      "web development",
      "html",
      "css",
      "javascript",
      "react",
      "node",
      "security",
      "career",
      "interview",
      "programming",
      "coding",
      "frontend",
      "backend",
      "learning",
      "github",
      "free",
    ],
  },
  {
    name: "Cloudcraft",
    description:
      "A site where you can create smart URL diagrams and visualize your cloud architecture easily",
    url: "https://www.cloudcraft.co/",
    github: "https://github.com/cloudcraft",
    icon: "https://global-uploads.webflow.com/57013820ae28654573965bf2/57013a1ff31eee4673af9209_cloudcraft.svg",
    tags: [
      "aws",
      "cloud diagrams",
      "cloud architecture",
      "tools",
      "programming",
      "coding",
      "web development",
    ],
  },
  {
    name: "Postman Academy",
    url: "https://academy.postman.com/",
    description: "A home base for students to learn about APIs and Postman hands-on, and get certifications proving your skills",
    icon: "https://cc.sj-cdn.net/instructor/3d8458f2k85sh-postman/themes/24l6l4s6qhihn/favicon.1643816979.png",
    github: "https://github.com/postmanlabs",
    tags: ["web development", "coding", "programming", "learning", "free", "tools"]
  },
  {
    name: "SAVEE",
    description:
      "SAVEE is a platform for you to get inspired save everything you love, right on your phone. Save images straight from Instagram and your browser.",
    url: "https://savee.it/",
    icon: "https://www.evernote.design/assets/images/savee.jpg",
    tags: ["graphic design", "ui/ux", "pinboard", "moodboard"],
  },
  {
    name: "freeCodeCamp",
    description:
      "freeCodeCamp is a community of millions of people around the world who are learning to code together. You can learn to code with free online courses, programming projects, and interview preparation for developer jobs.",
    url: "https://www.freecodecamp.org/",
    github: "https://github.com/freeCodeCamp",
    icon: "https://www.freecodecamp.org/icons/icon-512x512.png?v=6cba562cbd10e31af925a976f3db73f7",
    tags: [
      "career",
      "programming",
      "web development",
      "javascript",
      "frontend",
      "backend",
      "coding",
      "learning",
      "courses",
      "github",
      "all",
      "free",
      "certification",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-0"],
    },
  },
  {
    name: "The Odin Project",
    description:
      "The Odin Project provides a free open source coding curriculum that can be taken entirely online.",
    url: "https://www.theodinproject.com/",
    github: "https://github.com/TheOdinProject",
    icon: "https://www.theodinproject.com/favicon-32x32.png",
    tags: [
      "career",
      "programming",
      "web development",
      "javascript",
      "frontend",
      "backend",
      "coding",
      "learning",
      "courses",
      "all",
      "free",
      "github",
      "certification",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-0"],
    },
  },
  {
    name: "Choose a License",
    description: "Non-judgmental guidance on choosing a license for your open source project",
    url: "https://choosealicense.com/",
    icon: "https://choosealicense.com/favicon.ico",
    github: "https://github.com/github/choosealicense.com",
    tags: ["github", "open source", "tools", "productivity"]
  },
  {
    name: "CSSBattle",
    description:
      'CSSBattle is an online CSS Code Golfing game. Here, players from all around the world try to visually replicate "Targets" in smallest possible CSS code and battle it out to get to the top of the leaderboard.',
    url: "https://cssbattle.dev/",
    icon: "https://cssbattle.dev/images/logo-square.png",
    tags: [
      "programming",
      "web development",
      "javascript",
      "frontend",
      "coding",
      "css",
      "html",
      "learning",
      "free",
      "practice",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-2"],
    },
  },
  {
    name: "B. Tech ECE Notes",
    description:
      "Collection of all notes of SRMIST B.Tech Electronics and Communications Dept. for the academic year: 2020-24.",
    url: "https://notes.kunalkeshan.dev",
    github: "https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24",
    icon: "https://notes.kunalkeshan.dev/logo192.png",
    tags: [
      "open source",
      "ece",
      "github",
      "free",
      "notes",
      "srmist",
      "college",
      "study",
    ],
  },
  {
    name: "Fontjoy",
    description:
      "Fontjoy helps designers choose the best font combinations. Mix and match different fonts for the perfect pairing",
    url: "https://fontjoy.com/",
    icon: "https://www.threebu.it/public/247/fontjoy-logo.jpg",
    tags: ["font-pairing", "graphic design", "free"],
  },
  {
    name: "CSS Grid Garden",
    description: "A game for learning CSS grid layout",
    url: "https://cssgridgarden.com/",
    github: "https://github.com/thomaspark/gridgarden/",
    icon: "https://raw.githubusercontent.com/thomaspark/gridgarden/master/favicon.ico",
    tags: [
      "open source",
      "css",
      "github",
      "frontend",
      "web development",
      "learning",
      "study",
      "free",
      "practice",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-2"],
    },
  },
  {
    name: "Learn Git Branching",
    description:
      "An interactive Git visualization tool to educate and challenge!",
    url: "https://learngitbranching.js.org/",
    github: "https://github.com/pcottle/learnGitBranching",
    icon: "https://learngitbranching.js.org/assets/favicon.ico",
    tags: [
      "frontend",
      "web development",
      "learning",
      "study",
      "free",
      "react",
      "javascript",
      "jsx",
      "practice",
    ],
  },
  {
    name: "Regexr",
    description:
      "RegExr is an online tool to learn, build and test Regular Expressions.",
    url: "https://regexr.com/",
    github: "https://github.com/gskinner/regexr/",
    icon: "https://regexr.com/assets/icons/apple-touch-icon.png?1",
    tags: [
      "javascript",
      "web development",
      "tools",
      "practice",
      "productivity",
      "programming",
      "open source",
      "github",
    ],
  },
  {
    name: "Patterns",
    description:
      "Patterns.dev is a free book on design patterns and component patterns for building powerful web apps with vanilla JavaScript and React.",
    url: "https://www.patterns.dev/",
    icon: "https://www.patterns.dev/img/favicon/favicon-192x192.png?hash=b4b7ad3f7c",
    tags: [
      "open source",
      "css",
      "github",
      "frontend",
      "web development",
      "learning",
      "study",
      "free",
      "practice",
      "git",
    ],
  },
  {
    name: "10 Fast Fingers (Typing Tests)",
    description: "Test & Improve your Typing Speed with our free Typing Games",
    url: "https://10fastfingers.com/",
    icon: "https://pbs.twimg.com/profile_images/517343049085485056/6ll-wjg5_400x400.png",
    tags: [
      "practice",
      "productivity",
      "tools",
      "typing",
      "programming",
      "coding",
      "free",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-4"],
    },
  },
  {
    name: "Stack Overflow",
    description:
      "Stack Overflow is a question and answer website for professional and enthusiast programmers.",
    url: "https://stackoverflow.com/",
    icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
    tags: [
      "practice",
      "productivity",
      "tools",
      "web development",
      "all",
      "programming",
      "coding",
      "free",
      "frontend",
      "backend",
      "react",
      "javascript",
      "html",
      "css",
      "git",
      "github",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-4"],
    },
  },
  {
    name: "Geeks For Geeks",
    description:
      "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.",
    url: "https://www.geeksforgeeks.org",
    icon: "https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200.png",
    tags: [
      "practice",
      "productivity",
      "tools",
      "web development",
      "all",
      "programming",
      "coding",
      "free",
      "frontend",
      "backend",
      "react",
      "javascript",
      "html",
      "css",
      "git",
      "github",
      "dsa",
      "competitive coding",
    ],
  },
  {
    name: "Crontab Guru",
    description:
      "The quick and simple editor for cron schedule expressions by Cronitor",
    url: "https://crontab.guru/",
    icon: "https://cdn.cronitor.io/static/img/favicon.4a228b95944f.png",
    tags: ["tools", "productivity", "programming", "backend"],
  },
  {
    name: "TOOOLS.design",
    description:
      "A growing archive of over a thousand design resources, weekly updated for the community. Discover highly useful design tools you never thought existed.",
    url: "https://www.toools.design/",
    icon: "https://cdn.buymeacoffee.com/uploads/profile_pictures/2022/05/8e8c6b213a3b2dfcb75fa78f1cd6728e.jpg@300w_0e.webp",
    tags: ["graphic design", "ui/ux", "productivity", "graphic design", "free"],
  },
  {
    name: "Checklist Design",
    description: "A collection of the best design practices.",
    url: "https://www.checklist.design/",
    icon: "https://uploads-ssl.webflow.com/5ba4b3c973b5d218459f7e6f/5f33ce6795b617814aa43eb1_checklist-favicon.png",
    tags: [
      "practice",
      "productivity",
      "tools",
      "graphic design",
      "ui/ux",
      "frontend",
      "free",
      "html",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-4"],
    },
  },
  {
    name: "remove.bg",
    description: "Remove Image Background. 100% Automatically and Free",
    url: "https://www.remove.bg/",
    icon: "https://www.remove.bg/apple-touch-icon.png?v=YAXaAv7pao",
    tags: [
      "productivity",
      "tools",
      "graphic design",
      "ui/ux",
      "frontend",
      "free",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-4"],
    },
  },
  {
    name: "figma",
    description:
      "With Figma, everyone works towards a shared goal. This has enabled product teams to ship new products faster and feel more confident in their decisions.",
    url: "https://www.figma.com/",
    github: "https://github.com/figma",
    icon: "https://miro.medium.com/max/1400/1*yaZ-u-EiZ6kanJP9zPFXVQ.jpeg",
    tags: ["graphic design", "graphic design", "ui/ux", "free", "productivity"],
  },
  {
    name: "Dev.to",
    description:
      "DEV is a community of software developers getting together to help one another out. The software industry relies on collaboration and networked learning. We provide a place for that to happen.",
    url: "https://dev.to/",
    icon: "https://res.cloudinary.com/practicaldev/image/fetch/s--gDM0_LTS--/c_limit,f_png,fl_progressive,q_80,w_180/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png",
    tags: ["productivity", "blogging", "free", "web development", "community"],
  },
  {
    name: "Hashnode",
    description:
      "The hassle-free blogging platform for engineers, thought-leaders, and the dev community! Blog on a custom domain, own your content and share your ideas with the world.",
    url: "https://hashnode.com/",
    icon: "https://cdn.hashnode.com/res/hashnode/image/upload/v1611242155728/W3_BYVVVh.png",
    tags: ["productivity", "blogging", "free", "web development", "community"],
  },
  {
    name: "Internshala",
    description:
      "Internshala is India's no.1 internship and training platform with 40000+ paid internships in Engineering, MBA, media, law, arts, and other streams.",
    url: "https://internshala.com/",
    icon: "https://internshala.com//favicon.ico?v=5",
    tags: [
      "career",
      "interview",
      "internship",
      "programming",
      "engineering",
      "web development",
    ],
    roadmap: {
      ids: [""],
      subTopics: [""],
    },
  },
  {
    name: "Canva",
    description:
      "Canva is an Australian graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content.",
    url: "https://www.canva.com/",
    icon: "https://static.canva.com/static/images/android-192x192-2.png",
    tags: ["productivity", "tools", "graphic design", "ui/ux", "free"],
  },
  {
    name: "Dribbble",
    description:
      "Dribbble is a self-promotion and social networking platform for digital designers and creatives.",
    url: "https://dribbble.com/",
    icon: "https://cdn.dribbble.com/assets/dribbble-ball-192-23ecbdf987832231e87c642bb25de821af1ba6734a626c8c259a20a0ca51a247.png",
    tags: [
      "productivity",
      "tools",
      "graphic design",
      "ui/ux",
      "frontend",
      "free",
      "practice",
    ],
  },
  {
    name: "Behance",
    description:
      "Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
    url: "https://www.behance.net/",
    icon: "https://a5.behance.net/3dcd67bd8b6dfcc3a5f57ce37aa58c5865e5e428/img/site/apple-touch-icon.png",
    tags: [
      "productivity",
      "tools",
      "graphic design",
      "ui/ux",
      "frontend",
      "free",
      "practice",
    ],
  },
  {
    name: "Meta Tags Generator",
    description:
      "With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!",
    url: "https://metatags.io/",
    icon: "https://metatags.io/assets/favicon-71ffc45e665afe1eb5447e86787278b28f56dfb39a6d53c8603d8477bdee7b6f.png",
    tags: [
      "productivity",
      "tools",
      "frontend",
      "free",
      "web development",
      "html",
    ],
  },
  {
    name: "Mozilla Developer Network (MDN)",
    description:
      "MDN Web Docs is an open-source, collaborative project documenting Web platform technologies, including CSS, HTML, JavaScript, and Web APIs. We also provide an extensive set of learning resources for beginning developers and students",
    url: "https://developer.mozilla.org/",
    github: "https://github.com/mdn/",
    icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
    tags: [
      "javascript",
      "documentation",
      "programming",
      "coding",
      "github",
      "open source",
      "web development",
      "backend",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-0"],
    },
	},
	{
		name: "CSSFX",
		description: "A carefully crafted collection designed with a focus on fluidity, simplicity, and ease of use. Powered by CSS with minimal markup. Completely open source and MIT licensed.",
		url: "https://cssfx.netlify.app/",
		tags: ["css", "web development", "frontend"],
		github: "https://github.com/jolaleye/cssfx",
		icon: "https://cssfx.netlify.app/logo.png",
	},
	{
		name: "Beautiful CSS box-shadow examples",
		description: "Beautiful CSS box-shadow examples with their code snippets, that can be copied over with just a single click.",
		url: "https://getcssscan.com/css-box-shadow-examples",
		tags: ["css", "web development", "frontend"],
		icon: "https://toastlog.com/img/logos/cssscan.svg"
	},
  {
    name: "CSS-Tricks",
    description:
      "Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.",
    url: "https://css-tricks.com/",
    icon: "https://css-tricks.com/apple-touch-icon.png",
    tags: [
      "web development",
      "css",
      "html",
      "web development",
      "blogging",
      "community",
      "javascript",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-2"],
    },
  },
  {
    name: "CSS {In Real Life}",
    description:
      "Tips, tricks and tutorials on the web’s most beautiful language.",
    url: "https://css-irl.info/",
    icon: "https://css-irl.info/favicon/apple-touch-icon.png",
    tags: [
      "web development",
      "css",
      "html",
      "web development",
      "blogging",
      "community",
      "javascript",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-2"],
    },
  },
  {
    name: "HTMLHell",
    description:
      "A collection of bad practices in HTML, copied from real websites.",
    url: "https://www.htmhell.dev/",
    icon: "https://www.htmhell.dev/apple-touch-icon.png",
    tags: [
      "web development",
      "css",
      "html",
      "web development",
      "blogging",
      "community",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-1"],
    },
  },
  {
    name: "JavaScript Tips",
    description:
      "JS Tips is a collection of useful daily JavaScript tips that will allow you to improve your code writing.",
    url: "https://www.jstips.co/",
    github: "https://github.com/loverajoel/jstips",
    icon: "https://www.jstips.co/favicon.ico",
    tags: [
      "javascript",
      "documentation",
      "programming",
      "coding",
      "github",
      "open source",
      "framework",
      "web development",
      "jsx",
      "react",
      "angular",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-3"],
    },
  },
  {
    name: "React JS Documentation",
    description: "A JavaScript library for building user interfaces.",
    url: "https://reactjs.org/",
    github: "https://github.com/facebook/react",
    icon: "https://reactjs.org/logo-180x180.png",
    tags: [
      "javascript",
      "documentation",
      "programming",
      "coding",
      "github",
      "open source",
      "typescript",
      "framework",
      "web development",
      "jsx",
      "react",
    ],
  },
  {
    name: "Coursera",
    description:
      "Coursera is the global online learning platform that offers anyone, anywhere access to online courses and degrees from world-class universities and companies.",
    url: "https://www.coursera.org/",
    icon: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/android-chrome-v2-192x192.png",
    tags: [
      "career",
      "programming",
      "coding",
      "learning",
      "courses",
      "all",
      "certification",
      "college",
    ],
  },
  {
    name: "Node JS",
    description:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.",
    url: "https://nodejs.org/",
    icon: "https://nodejs.org/static/images/favicons/favicon-32x32.png",
    tags: [
      "library",
      "web development",
      "tools",
      "typing",
      "programming",
      "coding",
      "backend",
      "node",
      "frontend",
      "documentation",
      "open source",
    ],
  },
  {
    name: "NPTEL (National Programme on Technology Enhanced Learning)",
    description:
      "NPTEL is a joint venture of the IITs and IISc, funded by the Ministry of Education (MoE) Government of India, and was launched in 2003.",
    url: "https://nptel.ac.in/",
    icon: "https://www.mooclab.club/showcase/nptel.174/cover-image",
    tags: [
      "free",
      "notes",
      "college",
      "study",
      "notes",
      "courses",
      "certification",
    ],
  },
  {
    name: "edX",
    description:
      "edX is an American massive open online course provider created by Harvard and MIT.",
    url: "https://www.edx.org/",
    icon: "https://www.edx.org/favicon.ico",
    tags: [
      "career",
      "programming",
      "coding",
      "learning",
      "courses",
      "all",
      "certification",
      "college",
    ],
  },
  {
    name: "Udemy",
    description:
      "Udemy is an online learning and teaching marketplace with over 204000 courses and 54 million students.",
    url: "https://www.udemy.com/",
    icon: "https://www.udemy.com/staticx/udemy/images/v8/favicon-32x32.png",
    tags: [
      "career",
      "programming",
      "coding",
      "learning",
      "courses",
      "all",
      "certification",
      "college",
    ],
  },
  {
    name: "Varsity by Zerodha",
    description:
      "Varsity by Zerodha - Markets, Trading, and Investing Simplified.",
    url: "https://zerodha.com/varsity/",
    icon: "https://zerodha.com/varsity/wp-content/themes/varsity/images/favicon.png",
    tags: ["learning", "free", "finance"],
  },
  {
    name: "Introduction to Web Development by Web Dev Simplified",
    description:
      "If you are just starting you web development journey this is the only course you will need to get up and running with all of the technology that you will need to start creating web pages today.",
    url: "https://www.youtube.com/playlist?list=PLZlA0Gpn_vH-cEDOofOujFIknfZZpIk3a",
    icon: "https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s48-c-k-c0x00ffffff-no-rj",
    tags: [
      "learning",
      "free",
      "web development",
      "youtube",
      "html",
      "css",
      "javascript",
    ],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-0"],
    },
  },
  {
    name: "HTML Crash Course For Absolute Beginners by Traversy Media",
    description:
      "In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners. If you are interested in learning HTML but know nothing, then you are in the right place. We will be creating a cheat sheet with all of the common HTML5 tags, attributes, semantic markup, etc. We will not be focusing on CSS in this video. The CSS crash course will be released shortly after",
    url: "https://youtu.be/UB1O30fR-EE",
    icon: "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s48-c-k-c0x00ffffff-no-rj",
    tags: ["learning", "free", "web development", "youtube", "html"],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-1"],
    },
  },
  {
    name: "CSS Crash Course For Absolute Beginners by Traversy Media",
    description:
      "In this video I will cram as much as possible about CSS. We will be looking at styles, selectors, declarations, etc. We will build a CSS cheat sheet that you can keep as a resource and we will also create a basic website layout. We are using CSS3 but mostly the basics. I will be creating an advanced CSS course with animations,  etc. I do have a Flexbox in 20 minutes video as well if you want to learn flexbox.",
    url: "https://youtu.be/yfoY53QXEnI",
    icon: "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s48-c-k-c0x00ffffff-no-rj",
    tags: ["learning", "free", "web development", "youtube", "css"],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-2"],
    },
  },
  {
    name: "JavaScript Crash Course For Absolute Beginners by Traversy Media",
    description:
      " In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc. This is the starting point on my channel for learning JS.",
    url: "https://youtu.be/hdI2bqOjy3c",
    icon: "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s48-c-k-c0x00ffffff-no-rj",
    tags: ["learning", "free", "web development", "youtube", "css"],
    roadmap: {
      ids: ["001"],
      subTopics: ["001-3"],
    },
  },
  {
    name: "Web.dev",
    description:
      "Google believes in an open, accessible, private, and secure web. We want to help developers take advantage of the latest modern technologies to build amazing user experiences for everyone.",
    url: "https://web.dev/",
    icon: "https://web.dev/images/favicon-32x32.png",
    tags: ["learning", "free", "web development", "youtube", "css"],
  },
  {
    name: "Public APIs",
    description: "A collective list of free APIs",
    url: "https://github.com/public-apis/public-apis",
    github: "https://github.com/public-apis/public-apis",
    icon: "https://github.com/fluidicon.png",
    tags: ["open source", "github", "free", "learning", "web development"],
  },
  {
    name: "Random user",
    description:
      "A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.",
    url: "https://randomuser.me/",
    github: "https://github.com/RandomAPI/Randomuser.me-Node",
    icon: "https://raw.githubusercontent.com/RandomAPI/Randomuser.me-Node/master/public/img/favicon.png",
    tags: ["open source", "github", "free"],
  },
  {
    name: "Zero to Mastery",
    description:
      "Lets Git started in the world of opensource, starting in the Zero to mastery's opensource playground.",
    url: "https://github.com/zero-to-mastery",
    github: "https://github.com/zero-to-mastery",
    icon: "https://avatars.githubusercontent.com/u/35373879?s=200&v=4",
    tags: [
      "open source",
      "web development",
      "practice",
      "programming",
      "coding",
    ],
  },
  {
    name: "Z-Library",
    description: "Part of Z-Library project. The world's largest ebook library",
    url: "https://b-ok.asia/",
    icon: "https://b-ok.asia/favicon-32x32.svg?v=2",
    tags: ["learning", "library"],
  },
  {
    name: "Codechef",
    description:
      "Practice more than 3000 problems across varying difficulty ratings and Popular topics. Curated for everyone, including novice and seasoned programmers.",
    url: "https://www.codechef.com/",
    icon: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zruiknbedz8yqafxbazb",
    tags: ["free", "coding", "programming", "dsa", "practice"],
  },
  {
    name: "Hackerrank",
    description:
      "HackerRank is a technology hiring platform that is the standard for assessing developer skills for over 2,800+ companies around the world. ",
    url: "https://www.hackerrank.com/",
    icon: "https://www.hackerrank.com/wp-content/uploads/2020/05/hackerrank_cursor_favicon_480px-300x300.png",
    tags: ["coding", "dsa", "programming", "practice"],
  },
  {
    name: "Leetcode",
    description:
      "LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.",
    url: "https://leetcode.com/",
    icon: "https://assets.leetcode.com/static_assets/public/icons/apple-touch-icon-180x180.png",
    tags: ["interview", "coding", "dsa"],
  },
 
  {
    name: "Pluralsight",
    description:
      "Pluralsight is an online learning and teaching marketplace with over 25k courses and 20 million students",
    url: "https://pluralsight.com/",
    icon: "https://pluralsight.imgix.net/author/lg/1708f64b-8969-4de8-ae00-9c7b732c5fb9.jpg",
    tags: ["interview", "coding", "dsa"],
  },
  {
    name: "NextUI",
    description:
      "Beautiful, Modern and fast react library which Make beautiful websites regardless of your design experience. It includes pre-built components which are highly customisable",
    url: "https://nextui.org/",
    icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Yee2W_yTCRQd2iSp_k1nbAHaDt%26pid%3DApi&f=1&ipt=1430e8698b8b837b9ecbab68f9f820bac1d57f0f12252cca55a2f8fdcae4c02c&ipo=images",
    tags: [
      "programming",
      "web development",
      "javascript",
      "frontend",
      "coding",
      "css",
      "free",
    ],
	},
	{
		name: "daisyUI",
		description: "A free and open-source Tailwind CSS based component library.",
		url: "https://daisyui.com/",
		tags: ["frontend", "css", "react", "tailwindcss"],
		github: "https://github.com/saadeghi/daisyui",
		icon: "https://raw.githubusercontent.com/saadeghi/daisyui/master/src/docs/static/favicon.ico"
	},
	{
		name: "Headless UI",
		description: "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
		url: "https://headlessui.com/",
		tags: ["frontend", "css", "react", "tailwindcss"],
		github: "https://github.com/tailwindlabs/headlessui",
		icon: "https://headlessui.com/apple-touch-icon.png"
	},
	{
		name: "React Aria",
		description: "React Aria is a collection of React hooks that implement accessible UI patterns.",
		url: "https://react-spectrum.adobe.com/react-aria/",
		tags: ["frontend", "css", "react", "library"],
		github: "https://github.com/adobe/react-spectrum",
		icon: "https://avatars.githubusercontent.com/u/476009?s=200&v=4",

	},
	{
		name: "Radix",
		description: "Radix is a React component library that provides accessible, fully customizable UI primitives.",
		url: "https://www.radix-ui.com/",
		tags: ["frontend", "css", "react", "library"],
		icon: "https://www.radix-ui.com/favicon.png",
		github: "https://github.com/radix-ui",
	},
	{
		name: "React.gg",
		url: "https://react.gg/",
		description: "The interactive way to master modern React",
		tags: ["frontend", "react", "framework", "library", "web development", "practice"],
		icon: "https://react.gg/favicon.png"
	},
	{
		name: 'HTML Head',
		url: 'https://htmlhead.dev/',
		description: 'A simple guide to HTML <head> elements',
		tags: ['frontend', 'web development', 'html', 'learning', 'coding'],
		icon: 'https://raw.githubusercontent.com/joshbuchea/HEAD/gh-pages/favicon.png'
	},
	{
		name: 'Business Model Analyst',
		url: 'https://businessmodelanalyst.com/',
		description: 'Business Model Examples and Types using the Business Model Canvas for Detailed Analysis of the Most Innovative Companies and Startups.',
		tags: ['business', 'startup'],
		icon: 'https://businessmodelanalyst.com/wp-content/uploads/2019/03/cropped-unnamed-192x192.webp'
	},
	{
		name: 'Resume.io',
		url: 'https://resume.io/',
		description: 'Create your job winning resume for free, choose between thousands of resume templates and cover letters. Write your professional resume in 5 minutes',
		tags: ['productivity', 'tools', 'career', 'internship', 'interview', 'resume'],
		icon: 'https://resume.io/assets/favicon/resume/apple-touch-icon-b8fda06896fb6e22e014be6ad49291c17233342397d40cb1f3bb1413143287bf.png'
	},
	{
		name: 'Flexbox Froggy',
		url: 'https://flexboxfroggy.com/',
		description: 'A game for learning CSS flexbox',
		tags: ['web development', 'frontend', 'css', 'learning', 'coding'],
		github: 'https://github.com/thomaspark/flexboxfroggy/',
		icon: 'https://raw.githubusercontent.com/thomaspark/flexboxfroggy/gh-pages/favicon.ico'
	},
	{
		name: 'The Full Stack Deep Learning',
		url: 'https://fullstackdeeplearning.com/',
		description: 'News, community, and courses for people building AI-powered products.',
		tags: ['coding', 'artificial intelligence', 'machine learning'],
		icon: 'https://fullstackdeeplearning.com/images/favicon.png'
	},
	{
		name: 'Skilled.dev',
		url: 'https://skilled.dev/',
		description: 'Skilled.dev is the leading interview course that developers trust to teach them how to master the coding interview and land their next job as a software engineer.',
		tags: ['coding', 'javascript', 'typescript', 'python', 'dsa', 'web development'],
		icon: 'https://skilled.dev/icons/android-icon-192x192.png'
	},
	{
		name: 'Invoice Ninja',
		url: 'https://invoiceninja.com/',
		description: 'An invoicing tool built to serve freelancers and business owners with a complete suite of invoicing & payment tools to advance your business.',
		tags: ['career', 'tools', 'productivity', 'freelancing'],
		icon: 'https://invoiceninja.com/wp-content/uploads/2022/06/InvoiceNinjaCircle.png'
	},
	{
		name: 'Interview Pen',
		url:'https://interviewpen.com/',
		description: 'Accelerate your career in technology. Software engineering interviews with courses in Data Structures and Algorithms, System Design, & more. Land your dream job in technology, get paid more, & accelerate your career.',
		tags: ['career', 'interview', 'dsa', 'web development'],
		icon: 'https://interviewpen.com/favicon.ico'
	},
	{
		name: 'Kaggle',
		url:'https://www.kaggle.com/',
		description: 'Kaggle is a online platform for data science competitions and collaborative data analysis, offering datasets, notebooks, and a community of data enthusiasts.',
		tags: ['data science', 'machine learning', 'data analytics', 'data competitions', 'data sets', 'data visualizations', 'jupyter notebooks'],
		icon: 'https://www.kaggle.com/static/images/favicon.ico'
	},
  {

    name: "React.gg",
    url: "https://react.gg/",
    description: "The interactive way to master modern React",
    tags: ["frontend", "react", "framework", "library", "web development", "practice"],
    icon: "https://react.gg/favicon.png"
  },
  {
    name: "30 Days of Javasript",
    url: "https://30daysofjs.netlify.app/",
    description: "An awesome way to learn Javascript by building projects",
    tags: ["frontend", "javascript", "library", "web development", "practice"],
    icon: "https://30daysofjs.netlify.app/30DaysOfJavaScript/assets/favicon.png"
  },{
    name: 'Xata',
    url:'https://xata.io/',
    description: 'Xata is a serverless database platform built for modern development, offering a fully managed and scalable database powered by PostgreSQL, with features such as full-text search engine, support for rich data types, vector search capabilities, and AI-enabled applications.',
    tags: ['web development','databases'],
    icon: 'https://xata.io/favicon.ico'
  },
  {
    name: 'Clerk',
    url:'https://clerk.com/',
    description: 'Clerk is a comprehensive user management platform offering authentication and user management UIs and APIs, specifically designed for React, Next.js, and the Modern Web.',
    tags: ['security','web development','frontend'],
    icon: 'https://clerk.com/favicon/apple-touch-icon.png'
  },
  {
		name: 'SVG waves',
		url:'https://www.svgwaves.io/',
		description: 'SVG Waves is a free tool that allows you to generate unique SVG waves for your web design, with options to choose a curve, adjust complexity, and randomize.',
		tags: ['ui/ux','graphic design','frontend'],
		icon: 'https://www.svgwaves.io/logo.png'
	},
  {
		name: 'free-for.dev',
		url:'https://free-for.dev/#/',
		description: 'Free for Dev is a comprehensive list of software (SaaS, PaaS, IaaS, etc.) and other offerings that provide free tiers for developers.',
		tags: ['web development','interview','learning'],
		icon: 'https://raw.githubusercontent.com/ripienaar/free-for-dev/master/logo.webp'
	},
  {
    name: "Leetcode patterns by Sean Prashad",
    description: "This Website offers a vast collection of company-wise and pattern-focused LeetCode questions for swift and effective interview preparation",
    url: "https://seanprashad.com/leetcode-patterns/",
    icon: "https://seanprashad.com/leetcode-patterns/favicon.ico",
    tags: ["interview", "coding", "dsa"],
  },
  {
    name: "Building Elements of AI",
    description: "This Website helps you understand the basics of AI and ML with the help of interactive courses and quizes",
    url: "https://buildingai.elementsofai.com/",
    icon: "https://buildingai.elementsofai.com/favicon-32x32.png",
    tags: ["machine learning", "data visualizations", "artificial intelligence","neural networks"],
  },
	{
    name: "Kattis Problem Archive",
    description: "This Website is home to ample number of programming questions that can help you with your DSA and CP Preparation Journey",
    url: "https://open.kattis.com/problems?language=en",
    icon: "https://open.kattis.com/favicon",
    tags: ["interview", "coding", "dsa","competitive coding"],
  },
  {
    name: "Striver's SDE Sheet for DSA Preparation",
    description: "This Website is home to ample number of programming questions and topics that can help you with your DSA preparation for Interviews",
    url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    icon: "https://takeuforward.org/wp-content/uploads/2021/09/cropped-logo_circle_red-32x32.gif",
    tags: ["interview", "coding", "dsa","competitive coding"],
  },
  {
    name: "Neetcode",
    description: "It is a curated list of LeetCode problems designed to cover all possible patterns & topics in data structures. Mainly based out of C , C++ , Rust , Python , JAVA & JavaScript.",
    url: "https://neetcode.io/practice",
    icon: "https://neetcode.io/favicon.ico",
    tags: ["interview", "coding", "dsa"],
  },
	{
    name: "W3 Schools",
    description: "W3 Schools is a website with tutorials for many tech stacks like Python, C++, JavaScript. This is a best source for the learners who consider documented tutorials in the form of articles rather than videos or books.",
    url: "https://www.w3schools.com/",
    icon: "https://www.w3schools.com/favicon.ico",
    tags: ["interview", "coding", "dsa", "documentation", "articles"],
  },
	{
    name: "Tutorialspoint",
    description: "Tutorialspoint is a website with tutorials for many tech stacks like Python, C++, JavaScript. This is a best source for the learners who consider documented tutorials in the form of articles rather than videos or books and also helpful for people who are lookking for jobs and internships.",
    url: "https://www.tutorialspoint.com/index.htm",
    icon: "https://www.tutorialspoint.com/favicon.ico",
    tags: ["interview", "coding", "dsa", "documentation", "articles", "internship"],
  },
	{
    name: "Babel",
    description: "Babel is a renowned transpiler enabling the use of advanced JavaScript features in current browsers. It transforms the latest JavaScript code (ES2020) into a compatible version for widespread browser support. In essence, a transpiler converts source code to a different source code level, ensuring seamless compatibility with modern browsers.",
    url: "https://babeljs.io/",
    icon: "https://babeljs.io/img/babel.svg",
    tags: ["javascript", "typescript", "html", "css", "jsx"],
  },
	{
    name: "Machine Learning Mastery",
    description: "Machine Learning Mastery is a online learning platform dedicated to machine learning and its core concepts which includes maths, fundamentals of deep learning and building models.",
    url: "https://machinelearningmastery.com/",
    icon: "https://machinelearningmastery.com/wp-content/uploads/2016/09/icon-150x150.png",
    tags: ["machine learning", "artificial intelligence", "mathematics"],
  },
	{
    name: "UnoCSS",
    description: "UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated, and all the CSS utilities are provided via presets.",
    url: "https://unocss.dev/",
    icon: "https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg",
    tags: ["css", "frontend", "web development","ui/ux"],
  },
	{
    name: "Docusaurus",
    description: "Docusaurus is a static-site generator. It builds a single-page application with fast client-side navigation, leveraging the full power of React to make your site interactive. It provides out-of-the-box documentation features but can be used to create any kind of site (personal website, product, blog, marketing landing pages, etc).",
    url: "https://docusaurus.io/",
    icon: "https://d33wubrfki0l68.cloudfront.net/ea8e37a6a30e9c260a8936d95c579af4a2dd3df7/6ee7e/img/docusaurus_keytar.svg",
    tags: ["documentation", "web development"],
  },
	{
    name: "Simulator",
    description: "Build and simulate logic circuits.",
    url: "https://simulator.io/",
    icon: "https://scontent.fmaa12-1.fna.fbcdn.net/v/t39.30808-1/358712575_778804913943005_2591044677637656427_n.png?stp=dst-png_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fmV_o1o-ZBoAX-EwXaw&_nc_ht=scontent.fmaa12-1.fna&oh=00_AfDFy-pGWqU_mehUFe_x5Ax8b7e-5ayuElUhtbj0B2Tq2Q&oe=653553F7",
    tags: ["linux","learning","tools"],
  },
	{
      name: "ineedaresume 2.0",
      description: "Simply enter your information and make a beautifully formatted resume in seconds ",
      url: "https://ineedaresu.me/",
      icon: "https://ineedaresu.me/static/img/favicon.png",
      tags: ["resume","tools"],
  },
  {
      name: "Uppbeat",
      description: "A platform offering free, copyright-free music for creators",
      url: "https://uppbeat.io/",
      icon: "https://cdn.uppbeat.io/images/logo/apple-touch-icon.png",
      tags: ["free music","creators","learning","productivity","moodboard"],
  },
  {
      name: "Faker",
      description: "A library generating fake, reasonable data for testing and development",
      url: "https://fakerjs.dev/",
      icon: "https://fakerjs.dev/logo.svg",
      tags: ["programming","web development","productivity"],
  },
  {
    name: "Mantine",
    description: "A library with over 100 customizable components and hooks for web applications",
    url: "https://mantine.dev/",
    icon: "https://mantine.dev/favicon.svg",
    tags: ["web development","programming","coding","javascript","typescript"],
  },
  {
    name: "Mixkit",
    description: "Provides free video clips, music tracks, sound effects and video templates",
    url: "https://mixkit.co/",
    icon: "https://assets.mixkit.co/build/mixkit-logo--black-a90b84b6ac6ad0fbd410b16466b4cb252d399b5caaf03603f36c52ffc648455c.svg",
    tags: ["graphic design","ui/ux","productivity","moodboard"],
  },
  {
    name: "Next2023",
    description:
      "Next.js: The Future of React Web Development",
    url: "https://nextjs.org/",
    icon: "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png",
    tags: [
      "web development",
      "dynamic html",
      "web development",
      "tech stack",
      "framework",
      "optimization"
    ],
    roadmap: {
      ids: ["002"],
      subTopics: ["002-0"],
    },
  },
  {
    name: "NEXT.js",
    description:
      " open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
    url: "https://en.wikipedia.org/wiki/Next.js",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    tags: [
      "documentation",
      "community",
      "ssr",
      "framework",
      "webpack 4"
    ],
    roadmap: {
      ids: ["002"],
      subTopics: ["002-0"],
    },
  },
  {
    name: "SSR Docuimentation",
    description:
      "Optimizing Web Performance: The Power of Server-Side Rendering",
    url: "https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#server-side-rendering",
    icon: "https://img-c.udemycdn.com/course/480x270/3873464_403c.jpg",
    tags: [
      "Server-Side Rendering",
      "SSR",
      "React SSR",
      "Angular Universal",
      "Next.js"
    ],
    roadmap: {
      ids: ["002"],
      subTopics: ["002-2"],
    },
  },
  {
    name: "SSR with Node and Express",
    description:
      "React Server Side Rendering With Node And Express",
    url: "https://www.smashingmagazine.com/2016/03/server-side-rendering-react-node-express/",
    icon: "https://www.smashingmagazine.com/images/events/online-workshops-summer.svg",
    tags: [
      "Vue SSR",
      "SEO Optimization",
      "Node.js",
      "Mobile Optimization",
    ],
    roadmap: {
      ids: ["002"],
      subTopics: ["002-2"],
    },
  },
  {
    name: "Starting with Next.js",
    description:
      "Mastering Next.js: Supercharge Your React Applications with Next.js",
    url: "https://www.freecodecamp.org/news/nextjs-tutorial/",
    icon: "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ikqra03zdnggljdu5vv0",
    tags: [
      "SEO",
      "Api routes",
      "Authentication",
      "Routing",
      "React Framework",
      "Script"
    ],
    roadmap: {
      ids: ["002"],
      subTopics: ["002-1"],
    },
  },
  {
    name: "Client Side Routing (CSR)",
    description:
      "Effortless Navigation: Client-Side Routing for Modern Web Applications",
    url: "https://medium.com/@eyoo5/client-side-routing-in-next-js-react-apps-479fdfbf30d3",
    icon: "https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png",
    tags: [
      "Page",
      "SEO Optimization",
      "Routing",
      "Route",
      "Components"
    ],
    roadmap: {
      ids: ["002"],
      subTopics: ["002-3"],
    },
  },
  {
    name: "Data Fetching",
    description:
      "Data Fetching Mastery: Techniques for Efficient Client-Side Data Retrieval",
    url: "https://www.geeksforgeeks.org/next-js-data-fetching-methods/",
    icon: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    tags: [
      "data",
      "getStaticProps",
      "pre-rendering",
      "SEO performance",
      "ServerSideProps",
      "JSONPlaceholder"
    ],
    roadmap: {
      ids: ["002"],
      subTopics: ["002-4"],
    },
  },
];

export default RESOURCES;
