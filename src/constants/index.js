import CodeSlash from "../content/icons/code-solid.svg";
import Database from "../content/icons/database-solid.svg";
import Cubes from "../content/icons/cubes-solid.svg";
import PaintBrush from "../content/icons/paintbrush-solid.svg";
import Communication from "../content/icons/comments-solid.svg";
import Phone from "../content/icons/mobile-screen-button-solid.svg";
import BriefCase from "../content/icons/briefcase-solid.svg";
import Gears from "../content/icons/gears-solid.svg";
import Gamepad from "../content/icons/gamepad-solid.svg";

// import babyBoostsCover from '../content/work/babyboosts/baby_1.png';
// import coverImage from '../content/work/1.jpg';

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
        "longDesc": 
        <>
            <h3 className='font-bold text-zinc-600 text-xl tracking-wide'>Language Proficiencies</h3>
            <hr className="h-1 w-[10%] border-zinc-400 mx-auto my-4"/>
            <ul>
                <li className="text-lg font-bold">HTML</li>
                <li className="text-lg font-bold">CSS</li>
                <li className="text-lg font-bold">JavaScript</li>
                <li className="text-lg font-bold">PHP</li>
                <li className="text-lg font-bold">SQL</li>
                <li className="text-lg font-bold">C#</li>
                <li className="text-lg font-bold">C++</li>
                <li className="text-lg font-bold">Python</li>
            </ul>
        </>,
    },
    {
        "key": 1,
        "title": "Data Architecture",
        "img": Database,
        "imgAlt": "Database",
        "imgSize": "28",
        "colorLight": "bg-purple-200",
        "colorDark": "bg-purple-400",
        "shortDesc": <>Adeptness in data flow and architecture enables both straightforward and advanced data <b>handling, optimization, and maintenance</b>. Guaranteeing a <b>seamless, secure, and precise</b> flow within any project structure!</>,
        "longDesc": 
        <>
            <h3 className='font-bold text-zinc-600 text-xl tracking-wide'>Data Structure Proficiencies</h3>
            <hr className="h-1 w-[10%] border-zinc-400 mx-auto my-4"/>
            <ul>
                <li className="text-lg font-bold">SQL</li>
                <li className="text-lg font-bold">MongoDB</li>
                <li className="text-lg font-bold">Mongoose</li>
            </ul>
        </>,
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
        "longDesc": 
        <>
            <h3 className='font-bold text-zinc-600 text-xl tracking-wide'>Proficient Developmental Stacks</h3>
            <hr className="h-1 w-[10%] border-zinc-400 mx-auto my-4"/>
            <ul>
                <li className="text-lg font-bold">MERN Stack</li>
                <li className="text-lg font-bold">LAMP Stack</li>
            </ul>
        </>,
    },
    {
        "key": 3,
        "title": "Search Optimization",
        "img": Gears,
        "imgAlt": "Gears",
        "imgSize": "48",
        "colorLight": "bg-cyan-200",
        "colorDark": "bg-cyan-400",
        "shortDesc": <>For websites and businesses looking to stay competitive, <b><i>S</i>earch <i>E</i>ngine <i>O</i>ptimization</b> is a must. Through close study of your target market, your business will be optimized so that <b>anyone can find you without worry.</b></>,
        "longDesc": 
        <>
            
        </>,
    },
    {
        "key": 4,
        "title": "Design & Animation",
        "img": PaintBrush,
        "imgAlt": "Paint Brush",
        "imgSize": "36",
        "colorLight": "bg-amber-200",
        "colorDark": "bg-amber-400",
        "shortDesc": <>With a careful eye for <b>design</b> and a <b>creative touch</b>, I'll infuse your project with vibrant colors and visually <b>captivating</b> elements, ensuring we present your idea in the most compelling way possible!</>, //Along with animations added to incite energy and enthusiasim in any project!
        "longDesc": 
        <>
            <h3 className='font-bold text-zinc-600 text-xl tracking-wide'>Design Oriented Features</h3>
            <hr className="h-1 w-[10%] border-zinc-400 mx-auto my-4"/>
            <ul>
                <li className="text-lg font-bold">Figma Prototyping</li>
                <li className="text-lg font-bold">Website Design</li>
                <li className="text-lg font-bold">Accessibility and Responsiveness</li>
                <li className="text-lg font-bold">Typography and Color Theory</li>
            </ul>
        </>,
    },
    {
        "key": 5,
        "title": "Communication",
        "img": Communication,
        "imgAlt": "User Group",
        "imgSize": "48",
        "colorLight": "bg-blue-200",
        "colorDark": "bg-blue-400",
        "shortDesc": <>Emphasizing <b>clear communication</b> stands as a foundational principle in every project I undertake. Keeping an open channel of <b>contact with clients at all times</b> ensures you're never left in the dark.</>,
        "longDesc": 
        <>
            <h3 className='font-bold text-zinc-600 text-xl tracking-wide'>Communication Expectations</h3>
            <hr className="h-1 w-[10%] border-zinc-400 mx-auto my-4"/>
            <ul>
                <li className="text-lg font-bold">Proactive Updates</li>
                <li className="text-lg font-bold">Accessible Communication Channels</li>
                <li className="text-lg font-bold">Timely Responses</li>
                <li className="text-lg font-bold">Transparency on Challenges</li>
                <li className="text-lg font-bold">Client Feedback Loop</li>
                <li className="text-lg font-bold">Client Insight</li>
            </ul>
        </>,
    },
    {
        "key": 6,
        "title": "Mobile Ready",
        "img": Phone,
        "imgAlt": "Phone",
        "imgSize": "24",
        "colorLight": "bg-pink-200",
        "colorDark": "bg-pink-400",
        "shortDesc": <>Whether we're crafting a straightforward app or developing a robust website for widespread use in our <b>mobile-centric</b> world, I prioritize ensuring that every application or website functions <b>seamlessly on all devices</b>, regardless of their specifications.</>,
        "longDesc": 
        <>
            {/* I take pride in my proficiency in crafting applications that are seamlessly optimized for mobile devices. This skill enables me to deliver a superior user experience on a wide range of smartphones and tablets. By employing responsive design principles and leveraging the latest technologies, I ensure that my applications perform flawlessly across various mobile platforms. This proficiency allows me to meet the evolving demands of today's mobile-centric user base, providing them with a user-friendly and visually appealing experience. */}
        </>,
    },
    {
        "key": 7,
        "title": "Business Optimized",
        "img": BriefCase,
        "imgAlt": "Briefcase",
        "imgSize": "32",
        "colorLight": "bg-teal-200",
        "colorDark": "bg-teal-400",
        "shortDesc": <>By experiencing business and it's logistics first-hand, I am capable of furnishing you and your project with the <b>essential building blocks</b> required for smooth and precise operation, ensuring you're <b>equipped with the necessary tools</b> to tackle any challenge that may come your way.</>,
        "longDesc": 
        <>
            {/* My coding proficiency is tailored to meet the demands of business logistics. I specialize in developing applications and websites that streamline and optimize logistical operations. By leveraging efficient algorithms, intuitive user interfaces, and robust backend systems, I create solutions that enhance supply chain management, inventory tracking, and order fulfillment. This ensures businesses operate with maximum efficiency, ultimately leading to improved productivity, cost savings, and customer satisfaction. My expertise lies in crafting digital solutions that are finely tuned to meet the unique challenges of modern logistics, providing businesses with a competitive edge in today's fast-paced market. */}
        </>,
    },
    {
        "key": 8,
        "title": "Game Development",
        "img": Gamepad,
        "imgAlt": "Gamepad",
        "imgSize": "48",
        "colorLight": "bg-orange-200",
        "colorDark": "bg-orange-400",
        "shortDesc": <>A natural passion for video games pushed me in a direction to practice making them, and through time, gain the confidence to craft anything from <b>minor 2D features</b> to <b>sprawling 3D worlds!</b> Additionally, a deep understanding of <b>networking</b> allows the creation of <b>seamless multiplayer experiences</b> too!</>,
        "longDesc": 
        <>
            <h3 className='font-bold text-zinc-600 text-xl tracking-wide'>Development Engine Proficiencies</h3>
            <hr className="h-1 w-[10%] border-zinc-400 mx-auto my-4"/>
            <ul>
                <li className="text-lg font-bold">Unity Engine</li>
                <li className="text-lg font-bold">Unreal Engine 4 & 5</li>
                <li className="text-lg font-bold">Godot</li>
            </ul>
        </>,
    },
];

function importAll(r) {
    return r.keys().map(r);
}

const babyBoostsImages = importAll(require.context('../content/work/babyboosts', false, /\.(png|jpe?g|svg)$/));
const lunarisCoachingImages = importAll(require.context('../content/work/lunariscoaching', false, /\.(png|jpe?g|svg)$/));

// {
//     "key": 1,
//     "title": "Just Grooming",
//     "website": "",
//     "desc": "A nice grooming business for animals!",
//     "coverImage": coverImage,
//     "images": justGroomingImages,
// },

const WORK = [

    {
        "key": 0,
        "title": "Baby Boosts",
        "website": "https://babyboosts.com",
        "desc": <>One of my first personal projects, designed to help players achieve their goals in League of Legends. <br/> </>,
        "coverImage": babyBoostsImages[0],
        "images": babyBoostsImages,
    },
    {
        "key": 2,
        "title": "Lunaris Coaching",
        "website": "https://lunariscoaching.com",
        "desc": "Designed for ease of use and a simplistic approach. Made for learning how to become a better player through coaching in League of Legends.",
        "coverImage": lunarisCoachingImages[0],
        "images": lunarisCoachingImages,
    },
];

export { SKILLS, WORK };