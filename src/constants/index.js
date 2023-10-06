import CodeSlash from "../content/icons/code-solid.svg";
import Database from "../content/icons/database-solid.svg";
import Cubes from "../content/icons/cubes-solid.svg";
import PaintBrush from "../content/icons/paintbrush-solid.svg";
import Communication from "../content/icons/comments-solid.svg";
import Phone from "../content/icons/mobile-screen-button-solid.svg";
import BriefCase from "../content/icons/briefcase-solid.svg";

import coverImage from '../content/work/1.jpg';

const SKILLS = [
    {   
        "key": 0,
        "title": "Programming",
        "img": CodeSlash,
        "imgAlt": "Code Slash",
        "imgSize": "32",
        "colorLight": "bg-red-300",
        "colorDark": "bg-red-400",
        "shortDesc": <>A skill that forms the backbone of any idea, from inception to fruition. With <b>proficiency in many different programming languages</b> and the ability to understand, work with, and <b>build complex design structures</b>, I'm confident to be able to meet your needs as a developer.</>,
        "longDesc": <>This is a testing line! hello WE DO BE TESTIN BOY</>,
    },
    {
        "key": 1,
        "title": "Data Architecture",
        "img": Database,
        "imgAlt": "Database",
        "imgSize": "28",
        "colorLight": "bg-purple-200",
        "colorDark": "bg-purple-400",
        "shortDesc": <>Adeptness in data flow and architecture enables both straightforward and advanced data <b>handling, optimization, and maintenance</b>. Guaranteeing a <b>seamless, secure, and precise</b> flow of data within any project structure!</>,
        "longDesc": <></>,
    },
    {
        "key": 2,
        "title": "Full-stack Development",
        "img": Cubes,
        "imgAlt": "Stacked Cubes",
        "imgSize": "36",
        "colorLight": "bg-lime-200",
        "colorDark": "bg-lime-400",
        "shortDesc": <>Proficiency in both front-end and back-end architecture allows seamless design over a website or application flow, <b>eliminating the leg work of seeking additional resources</b>. Staying current with popular frameworks and libraries ensures every project is equipped with the <b>latest and greatest features and advancements</b>!</>,
        "longDesc": <></>,
    },
    {
        "key": 3,
        "title": "Design",
        "img": PaintBrush,
        "imgAlt": "Paint Brush",
        "imgSize": "36",
        "colorLight": "bg-amber-200",
        "colorDark": "bg-amber-400",
        "shortDesc": <>With a keen eye for <b>design</b> and a <b>creative touch</b>, I'll infuse your project with vibrant colors and visually <b>captivating</b> elements, ensuring we present your idea in the most compelling way possible!</>,
        "longDesc": <></>,
    },
    {
        "key": 4,
        "title": "Communication",
        "img": Communication,
        "imgAlt": "User Group",
        "imgSize": "48",
        "colorLight": "bg-blue-200",
        "colorDark": "bg-blue-400",
        "shortDesc": <>Emphasizing <b>clear communication</b> stands as a foundational principle in every project I undertake. Keeping an open channel of <b>contact with clients at all times</b> ensures you're never left in the dark.</>,
        "longDesc": <></>,
    },
    {
        "key": 5,
        "title": "Mobile Ready",
        "img": Phone,
        "imgAlt": "Phone",
        "imgSize": "24",
        "colorLight": "bg-pink-200",
        "colorDark": "bg-pink-400",
        "shortDesc": <>Whether we're crafting a straightforward app or developing a robust website for widespread use in our <b>mobile-centric</b> world, I prioritize ensuring that every application or website functions <b>seamlessly on all devices</b>, regardless of their specifications.</>,
        "longDesc": <></>,
    },
    {
        "key": 6,
        "title": "Business Optimized",
        "img": BriefCase,
        "imgAlt": "Briefcase",
        "imgSize": "32",
        "colorLight": "bg-teal-200",
        "colorDark": "bg-teal-400",
        "shortDesc": <>By experiencing business and it's logistics first-hand, I am capable of furnishing you and your project with the <b>essential building blocks</b> required for smooth and precise operation, ensuring you're <b>equipped with the necessary tools</b> to tackle any challenge that may come your way.</>,
        "longDesc": <></>,
    },
];

function importAll(r) {
    return r.keys().map(r);
}
  
const justGroomingImages = importAll(require.context('../content/work', false, /\.(png|jpe?g|svg)$/));

const WORK = [

    {
        "key": 0,
        "title": "Just Grooming",
        "website": "https://justgrooming.com",
        "desc": "A nice grooming business for animals!",
        "coverImage": coverImage,
        "images": justGroomingImages,
    },
];

export { SKILLS, WORK };