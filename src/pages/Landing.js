import SkillCard from "../components/SkillCard";

import CodeSlash from "../content/icons/code-solid.svg";
import Database from "../content/icons/database-solid.svg";
import Cubes from "../content/icons/cubes-solid.svg";
import PaintBrush from "../content/icons/paintbrush-solid.svg";
import Communication from "../content/icons/comments-solid.svg";
import Phone from "../content/icons/mobile-screen-button-solid.svg";
import BriefCase from "../content/icons/briefcase-solid.svg";

const Landing = () => {

    return (

        <>
            <div className="main-padding py-24 cream-bg vertical-shadow">
                <div className="text-center">
                    <div className='flex justify-center'>
                        <div className='rounded-full portfolio-pic border-8 border-slate-200 border-double select-none' ></div>
                    </div>
                    <div className="py-4 space-y-6">
                        <div className="flex justify-center items-center space-x-4">
                            <hr className="h-1 w-12 border-zinc-400"/>
                            <h1 className="text-4xl whitespace-nowrap select-none">About Me</h1>
                            <hr className="h-1 w-12 border-zinc-400"/>
                        </div>
                        <p class='font-light text-2xl py-2'>
                            Hey! I am a self-taught software engineer with a passion for crafting projects from inception to fruition, whether they're small-scale applications or large-scale solutions built to scale.
                            <br /><br />
                            I take immense pride in my ability to deliver <span className="text-highlight font-normal">high-quality</span>, innovative solutions that exceed expectations. My approach to each project is a commitment to excellence, ensuring that every line of code serves a purpose and contributes to a seamless user experience.
                            <br /><br />
                            My commitment to <span className="text-highlight font-normal">client satisfaction</span> is at the core of my freelance practice. I believe in fostering strong, transparent, and collaborative relationships with my clients to ensure that their visions are not just met but exceeded, along with always keeping an open line of communication so they're never left in the dark.
                            <br /><br />
                            Let's collaborate and turn your ideas into reality!
                        </p>
                        <div className="pt-6">
                            <hr className="h-1 w-24 border-zinc-400 m-auto"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[10%] sm:px-[15%] md:px-[25%] py-48">
                <div className="w-full pb-24">
                    <div className="py-4">
                        <h1 className="text-highlight text-white inline text-4xl">Skill Highlights</h1>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-12">
                    <SkillCard 
                        title={"Programming"} 
                        img={<img src={CodeSlash} width="32" height="32" alt="Code Slash" />} 
                        desc={<>A skill that forms the backbone of any idea, from inception to fruition. With <b>proficiency in many different languages</b> and the ability to understand, work with, and <b>build complex design structures</b>, I'm confident to be able to meet your needs as a developer.</>}
                        colorLight={"bg-red-200"}
                        colorDark={"bg-red-400"}
                        />
                    <SkillCard 
                        title={"Data Architecture"}
                        img={<img src={Database} width="28" height="28" alt="Database" />} 
                        desc={<>Adeptness in data flow and architecture enables both straightforward and advanced data <b>handling and optimization</b>. This proficiency extends to database maintenance, guaranteeing a <b>seamless, secure, and precise</b> flow of data within any project structure!</>}
                        colorLight={"bg-purple-200"}
                        colorDark={"bg-purple-400"}
                    />
                    <SkillCard 
                        title={"Full-stack Development"}
                        img={<img src={Cubes} width="36" height="36" alt="Stacked Cubes" />} 
                        desc={<>Proficiency in both front-end and back-end architecture allows seamless design over a website or application flow, <b>eliminating the need to seek additional resources</b>. Along with staying current with popular frameworks and libraries ensures every project is equipped with the <b>latest features and advancements</b>!</>}
                        colorLight={"bg-lime-200"}
                        colorDark={"bg-lime-400"}
                    />
                    <SkillCard 
                        title={"Design"}
                        img={<img src={PaintBrush} width="36" height="36" alt="Paint Brush" />}
                        desc={<>With a keen eye for <b>design</b> and a <b>creative touch</b>, I'll infuse your project with vibrant colors and visually <b>captivating</b> elements, ensuring we present your idea in the most compelling way possible!</>}
                        colorLight={"bg-amber-200"}
                        colorDark={"bg-amber-400"}
                    />
                    <SkillCard 
                        title={"Communication"}
                        img={<img src={Communication} width="48" height="48" alt="User Group" />}
                        desc={<>Emphasizing <b>clear communication</b> stands as a foundational principle in every project I undertake. Keeping an open channel of <b>contact with clients at all times</b> ensures you're never left in the dark.</>}
                        colorLight={"bg-blue-200"}
                        colorDark={"bg-blue-400"}
                    />
                    <SkillCard 
                        title={"Mobile Ready"}
                        img={<img src={Phone} width="24" height="24" alt="Phone" />}
                        desc={<>Whether we're crafting a straightforward app or developing a robust website for widespread use in our <b>mobile-centric</b> world, I prioritize ensuring that every application functions <b>seamlessly on all devices</b>, regardless of their specifications.</>}
                        colorLight={"bg-pink-200"}
                        colorDark={"bg-pink-400"}
                    />
                    <SkillCard 
                        title={"Business Optimized"}
                        img={<img src={BriefCase} width="32" height="32" alt="Briefcase" />}
                        desc={<>By experiencing business and it's logistics first-hand, I am capable of furnishing you and your project with the <b>essential building blocks</b> required for smooth and precise operation, ensuring you're <b>equipped with the necessary tools</b> to tackle any challenge that may come your way.</>}
                        colorLight={"bg-teal-200"}
                        colorDark={"bg-teal-400"}
                    />
                </div>
            </div>
            <div className="main-padding py-24 cream-bg vertical-shadow">

            </div>
        </>
    );
};

export default Landing;