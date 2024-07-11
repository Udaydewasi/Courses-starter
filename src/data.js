import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import img10 from './images/img10.png';
import img11 from './images/img11.png';
import img12 from './images/img12.png';
import img13 from './images/img13.png';
import img14 from './images/img14.png';
import img15 from './images/img15.png';
import img16 from './images/img16.png';
import img17 from './images/img17.png';


export const FilterData = [
	{
		id: 1,
		title: "All",
	},
	{
		id: 2,
		title: "Development",
	},
	{
		id: 3,
		title: "Business",
	},
	{
		id: 4,
		title: "Design",
	},
	{
		id: 5,
		title: "LifeStyle",
	}
];

export const apiUrl = [
{
  "data":{ 
     "Development":[
        {
           "id":"WD101",
           "title":"Web Development Fundamentals",
           "description":"This course covers the basic concepts and tools for building static and dynamic websites. Students will learn HTML, CSS, JavaScript, and jQuery to create engaging and interactive web pages.",
           "image":{
              "url":img1,
              "alt":"Web Development Fundamentals"
           }
        },
        {
           "id":"DS201",
           "title":"Data Science Essentials",
           "description":"This course provides an introduction to the fundamental concepts and techniques used in data science. Students will learn how to collect, clean, analyze, and visualize data using popular tools and programming languages like Python and R.",
           "image":{
              "url":img2,
              "alt":"Data Science Essentials"
           }
        },
        {
           "id":"ST301",
           "title":"Software Testing Fundamentals",
           "description":"This course covers the basics of software testing, including test planning, test case design, test execution, and defect management. Students will learn how to use popular testing frameworks and tools to ensure the quality and reliability of software applications.",
           "image":{
              "url":img3,
              "alt":"Software Testing Fundamentals"
           }
        },
        {
           "id":"MD401",
           "title":"Mobile App Development with React Native",
           "description":"This course teaches students how to build native mobile apps using the React Native framework. Students will learn how to create cross-platform apps that work on both iOS and Android devices, using a single codebase.",
           "image":{
              "url":img4,
              "alt":"Mobile App Development with React Native"
           }
        },
        {
           "id":"DO501",
           "title":"DevOps for Agile Teams",
           "description":"This course provides an overview of DevOps principles and practices, with a focus on how they can be applied in agile software development teams. Students will learn how to use popular tools and techniques for continuous integration, continuous delivery, and automated testing.",
           "image":{
              "url":img5,
              "alt":"DevOps for Agile Teams"
           }
        }
     ],
     "Business":[
        {
           "id":"MK101",
           "title":"Introduction to Marketing",
           "description":"This course provides an overview of marketing principles and practices, including market research, segmentation, targeting, and positioning. Students will learn how to create effective marketing plans and campaigns, using both traditional and digital marketing techniques.",
           "image":{
              "url":img6,
              "alt":"Introduction to Marketing"
           }
        },
        {
           "id":"LD201",
           "title":"Leadership Development",
           "description":"This course covers the fundamental concepts and skills required for effective leadership, including communication, motivation, delegation, and team building. Students will learn how to lead teams and organizations, and how to handle common leadership challenges.",
           "image":{
              "url":img7,
              "alt":"Leadership Development"
           }
        },
        {
           "id":"FN301",
           "title":"Finance for Non-Financial Managers",
           "description":"This course provides an introduction to finance concepts and tools for non-financial managers. Students will learn how to read and interpret financial statements, analyze financial data, and make informed financial decisions.",
           "image":{
              "url":img8,
              "alt":"Finance for Non-Financial Managers"
           }
        },
        {
           "id":"OM401",
           "title":"Operations Management Fundamentals",
           "description":"This course covers the basics of operations management, including process design, capacity planning, inventory management, and quality control. Students will learn how to optimize operations to improve efficiency, productivity, and customer satisfaction.",
           "image":{
              "url":img9,
              "alt":"Operations Management Fundamentals"
           }
        },
        {
           "id":"PM501",
           "title":"Project Management Essentials",
           "description":"This course provides an overview of project management principles and techniques, including project planning, scheduling, budgeting, risk management, and stakeholder communication. Students will learn how to manage projects effectively, using both traditional and agile project management approaches.",
           "image":{
              "url":img10,
              "alt":"Project Management Essentials"
           }
        }
     ],
     "Design":[
        {
           "id":"GD101",
           "title":"Graphic Design Fundamentals",
           "description": "This course covers the basic principles of graphic design, including typography, color theory, layout design, and image manipulation. Students will learn how to use industry-standard design software to create effective visual designs for print and digital media.",
           "image":{
              "url":img11,
              "alt":"Graphic Design Fundamentals"
           }
        },
        {
           "id":"UX201",
           "title":"User Experience Design",
           "description":"This course covers the fundamentals of user experience (UX) design, including user research, interaction design, information architecture, and usability testing. Students will learn how to design digital products and services that meet user needs and business goals.",
           "image":{
              "url":img12,
              "alt":"User Experience Design"
           }
        },
        {
           "id":"ID301",
           "title":"Industrial Design Essentials",
           "description":"This course covers the fundamental concepts and techniques used in industrial design, including sketching, prototyping, modeling, and design for manufacturing. Students will learn how to create innovative and functional products that meet user needs and market demands.",
           "image":{
              "url":img13,
              "alt":"Industrial Design Essentials"
           }
        },
        {
           "id":"FD401",
           "title":"Fashion Design Principles",
           "description":"This course covers the principles and practices of fashion design, including fashion illustration, textile design, pattern making, and garment construction. Students will learn how to design and produce original and stylish clothing for different markets and occasions.",
           "image":{
              "url":img14,
              "alt":"Fashion Design Principles"
           }
        }
     ],
     "Lifestyle":[
        {
           "id":"LC101",
           "title":"Cooking Basics",
           "description":"This course provides an introduction to cooking techniques, ingredients, and flavors. Students will learn how to plan and prepare meals, using simple recipes and kitchen tools. The course covers a range of cuisines and dietary preferences.",
           "image":{
              "url":img15,
              "alt":"Cooking Basics"
           }
        },
        {
           "id":"LF201",
           "title":"Fitness for Life",
           "description":"This course covers the fundamentals of fitness, including exercise principles, workout planning, and nutrition. Students will learn how to build strength, endurance, and flexibility, and how to create a healthy and sustainable lifestyle.",
           "image":{
              "url":img16,
              "alt":"Fitness for Life"
           }
        },
        {
           "id":"LT301",
           "title":"Travel Photography",
           "description":"This course covers the fundamentals of travel photography, including composition, lighting, and storytelling. Students will learn how to use a range of camera equipment and editing software to capture and share their travel experiences.",
           "image":{
              "url":img17,
              "alt":"Travel Photography"
           }
        }
     ]
  }
}
];