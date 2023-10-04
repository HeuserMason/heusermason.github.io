
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';

import SkillCard from "../components/SkillCard";
import WorkCard from '../components/WorkCard';
import Input from "../components/Input";
import Button from "../components/Button";

import CodeSlash from "../content/icons/code-solid.svg";
import Database from "../content/icons/database-solid.svg";
import Cubes from "../content/icons/cubes-solid.svg";
import PaintBrush from "../content/icons/paintbrush-solid.svg";
import Communication from "../content/icons/comments-solid.svg";
import Phone from "../content/icons/mobile-screen-button-solid.svg";
import BriefCase from "../content/icons/briefcase-solid.svg";

import Envelope from "../content/icons/envelope-solid.svg";
import User from "../content/icons/user-solid.svg"
import Hastag from "../content/icons/hashtag-solid.svg";
import Pen from "../content/icons/pen-solid.svg";

const Landing = () => {

    const [submitButtonDisabled, SetSubmitButtonDisabled] = useState(false);

    const handleEmailSubmit = async (event) => {
        
        event.preventDefault();

        const errors = [];

        SetSubmitButtonDisabled(true);

        var templateParams = {
            reply_to: event.target.email.value,
            from_name: event.target.name.value,
            subject: event.target.subject.value,
            message: event.target.body.value
        };

        const containsEmptyValues = Object.values(templateParams).some(value => !value);
        if (containsEmptyValues) {

            errors.push("One or more fields left empty!");
        }

        if (errors.length <= 0) {

            const res = await emailjs.send('default_service', 'template_ckv97fl', templateParams, 'wmCC6VZsKuhZ3Ir7y');
            if (res.text === "OK") {
                toast.success("Email sent, thank you!");
                event.target.reset();
            }

        } else {
            errors.forEach((err) => toast.error(err)); 
        }

        SetSubmitButtonDisabled(false);
    };

    return (

        <>
            <div className="w-full pt-[32.5rem] px-[5%] pb-24">
                <div className="py-4">
                    <h1 className="bg-black/80 text-white inline text-2xl">Welcome!</h1>
                </div>
                <div>
                    <h2 className="text-highlight inline text-2xl">I'm a freelance full-stack software developer. <br /> Read more below!</h2>
                </div>
            </div>
            <div className="main-padding py-28 cream-bg vertical-shadow" id="about">
                <div className="text-center">
                    <div className='flex justify-center'>
                        <div className='rounded-full portfolio-pic border-8 border-slate-200 border-double select-none shadow-xl'></div>
                    </div>
                    <div className="py-4 space-y-6">
                        <div className="flex justify-center items-center space-x-4">
                            <hr className="h-1 w-12 border-zinc-400"/>
                            <h1 className="text-5xl whitespace-nowrap select-none font-bold">About Me</h1>
                            <hr className="h-1 w-12 border-zinc-400"/>
                        </div>
                        <p class='font-light text-2xl py-2'>
                            Hey! I am a self-taught software engineer with a passion for crafting projects, whether they're small-scale applications or large-scale solutions built to scale.
                            <br /><br />
                            I take immense pride in my ability to deliver <span className="text-highlight font-medium">high-quality</span>, innovative solutions that exceed expectations. My approach to each project is a commitment to excellence, ensuring that every line of code serves a purpose and contributes to a seamless user experience.
                            <br /><br />
                            My commitment to <span className="text-highlight font-medium">client satisfaction</span> is at the core of my freelance practice. I believe in fostering strong, transparent, and collaborative relationships with my clients to ensure that their visions are not just met but exceeded.
                            <br /><br />
                            Let's collaborate and turn your ideas into reality!
                        </p>
                        <div className="pt-6">
                            <hr className="h-1 w-24 border-zinc-400 m-auto"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[10%] sm:px-[15%] lg:px-[20%] py-48" id="skills">
                <div className="w-full pb-24 px-[2%] md:px-[5%]">
                    <div className="py-4 pb-2 whitespace-nowrap flex items-center space-x-4">
                        <h1 className="inline text-6xl font-bold">Skills</h1>
                        <hr className="h-1 w-24 border-zinc-400"/>
                    </div>
                    <p className="text-lg inline px-2 italic font-bold">A couple of my main skills outlining what I'm capable of!</p>
                </div>
                <div className="flex flex-wrap justify-center gap-12">
                    <SkillCard 
                        title={"Programming"} 
                        img={<img src={CodeSlash} width="32" height="32" alt="Code Slash" />} 
                        desc={<>A skill that forms the backbone of any idea, from inception to fruition. With <b>proficiency in many different programming languages</b> and the ability to understand, work with, and <b>build complex design structures</b>, I'm confident to be able to meet your needs as a developer.</>}
                        colorLight={"bg-red-300"}
                        colorDark={"bg-red-400"}
                        />
                    <SkillCard 
                        title={"Data Architecture"}
                        img={<img src={Database} width="28" height="28" alt="Database" />} 
                        desc={<>Adeptness in data flow and architecture enables both straightforward and advanced data <b>handling, optimization, and maintenance</b>. Guaranteeing a <b>seamless, secure, and precise</b> flow of data within any project structure!</>}
                        colorLight={"bg-purple-200"}
                        colorDark={"bg-purple-400"}
                    />
                    <SkillCard 
                        title={"Full-stack Development"}
                        img={<img src={Cubes} width="36" height="36" alt="Stacked Cubes" />} 
                        desc={<>Proficiency in both front-end and back-end architecture allows seamless design over a website or application flow, <b>eliminating the leg work of seeking additional resources</b>. Staying current with popular frameworks and libraries ensures every project is equipped with the <b>latest and greatest features and advancements</b>!</>}
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
                        desc={<>Whether we're crafting a straightforward app or developing a robust website for widespread use in our <b>mobile-centric</b> world, I prioritize ensuring that every application or website functions <b>seamlessly on all devices</b>, regardless of their specifications.</>}
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
            <div className="px-[10%] sm:px-[10%] lg:px-[15%] py-24 cream-bg vertical-shadow" id="work">
                <div className="w-full pb-24 text-right px-[5%]">
                    <div className="py-4 pb-2 whitespace-nowrap flex items-center justify-end space-x-4">
                        <hr className="h-1 w-24 border-zinc-400"/>
                        <h1 className="inline text-6xl font-bold">Work</h1>
                    </div>
                    <p className="text-lg inline px-2 italic font-bold">Here's a collection of some of my past work, have a look.</p>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-8'>
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                </div>
            </div>
            <div className="px-[10%] sm:px-[15%] lg:px-[20%] py-48" id="contact">
                <div className="w-full pb-24">
                    <div className="py-4 pb-2 whitespace-nowrap flex items-center space-x-4">
                        <h1 className="inline text-6xl font-bold">Contact</h1>
                        <hr className="h-1 w-24 border-zinc-400"/>
                    </div>
                    {/* bg-[#FFE800]/50 */}
                    <p className="text-lg inline px-2 italic font-bold">Email me and tell me all about your grand ideas, I'd love to hear em! <br /> I'll get back to you as soon as possible!</p>
                </div>
                <form onSubmit={handleEmailSubmit} className="xxl:px-[20%]">
                    <div className="space-y-4">           
                        <Input type="email" name="email" label="Email" img={<img className="svg-grey-filter" src={Envelope} width="16" height="16" alt="Email Icon" />} />
                        <Input type="text" name="name" label="Name" img={<img className="svg-grey-filter" src={User} width="16" height="16" alt="Hashtag Icon" />} />
                        <Input type="text" name="subject" label="Subject" img={<img className="svg-grey-filter" src={Hastag} width="16" height="16" alt="Hashtag Icon" />} />
                        <Input type="text" name="body" label="Body" textarea img={<img className="svg-grey-filter" src={Pen} width="16" height="16" alt="Pen Icon" />} />
                    </div>
                    <div className="flex justify-end py-4">
                        <Button type="submit" disabled={submitButtonDisabled}>Send</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Landing;