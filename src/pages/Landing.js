
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';
import SkillModal from '../components/SkillModal';
import WorkModal from '../components/WorkModal';

import SkillCard from "../components/SkillCard";
import WorkCard from '../components/WorkCard';
import Input from "../components/Input";
import Button from "../components/Button";

import { SKILLS, WORK } from "../constants";

import Envelope from "../content/icons/envelope-solid.svg";
import User from "../content/icons/user-solid.svg"
import Hastag from "../content/icons/hashtag-solid.svg";
import Pen from "../content/icons/pen-solid.svg";

const Landing = () => {

    const [submitButtonDisabled, SetSubmitButtonDisabled] = useState(false);
    
    const [skillModal, setSkillModal] = useState(null);
    const [workModal, setWorkModal] = useState(null);

    useEffect(() => {

        window.addEventListener('scroll', onScroll);
      
        return () => window.removeEventListener('scroll', onScroll);     
    });

    var skillCardsStarted = false;
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const onScroll = () => {
        
        if (aboutRef.current != null) { //Just for optimization

            const offset = 800;
            const aboutPos = aboutRef.current.getBoundingClientRect().top + offset
            const scrollPos = window.scrollY + window.innerHeight;

            if (aboutPos <= scrollPos && !aboutRef.current.classList.contains("fade-in")) {

                //Animation classes
                aboutRef.current.classList.add("fade-in");
                aboutRef.current.classList.remove("opacity-0");
                aboutRef.current = null;
            }
        }   
        
        if (!skillCardsStarted) { //Just for optimization

            const offset = 1200;
            const skillsPos = skillsRef.current.getBoundingClientRect().top + offset
            const scrollPos = window.scrollY + window.innerHeight;

            if (skillsPos <= scrollPos) {
                
                recursiveSkillCards();
                skillCardsStarted = true;
            }
        }
    }
    
    const skillCardFadeIn = (ele) => {

        ele.classList.add("fade-in-skillcard");
        ele.classList.remove("opacity-0");
    }

    var i = 0;
    const recursiveSkillCards = () => {
        
        skillCardFadeIn(skillsRef.current.children[i]);
        setTimeout(function() {

            if (i < skillsRef.current.children.length - 1) {
                i++;
                //skillCardFadeIn(skillsRef.current.children[i]);
                recursiveSkillCards();
            }
        }, 250)
    }

    const openSkillModal = (key) => {

        setSkillModal(
            <SkillModal keyConstant={key} onClose={() => { setSkillModal(null); }} />
        );
    };

    const openWorkModal = (key) => {

        setWorkModal(
            <WorkModal keyConstant={key} onClose={() => { setWorkModal(null); }} />
        );
    };

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
            
            try {
                const res = await emailjs.send('default_service', 'template_ckv97fl', templateParams, 'wmCC6VZsKuhZ3Ir7y');
                switch (res.status) {

                    case 200 :
                        toast.success("Email sent, thank you!");
                        event.target.reset();
                    break;
                    
                    default :
                    case 400 :
                        toast.error("An error has occured, try manually emailing using the address at the top!");
                    break;
                }

            } catch (error) {
                toast.error(error);
            }

        } else {
            errors.forEach((err) => toast.error(err)); 
        }

        SetSubmitButtonDisabled(false);
    };

    const mappedSkills = SKILLS.map((skill) =>
        <SkillCard 
            title={skill.title} 
            img={<img src={skill.img} width={skill.imgSize} height={skill.imgSize} alt={skill.imgAlt} />} 
            desc={skill.shortDesc}
            colorLight={skill.colorLight}
            colorDark={skill.colorDark}
        />
        // buttonFunc={() => openSkillModal(skill.key)}
    );

    const mappedWork = WORK.map((work) =>
        <WorkCard
            title={work.title}
            coverImage={work.coverImage}
            buttonFunc={() => openWorkModal(work.key)}
        />
    );

    const getYearsProgramming = () => {
        //2017 likely year started seriously coding
        var currDate = new Date().getFullYear();
        return currDate - 2017;
    }

    return (

        <>  
            <div className='bg-image'></div>
            {skillModal}
            {workModal}
            <div className="w-full pt-[30rem] px-[5%] pb-24">
                <div className="py-4">
                    <h1 className="inline text-6xl font-bold">Welcome!</h1>
                </div>
                <div>
                    <h2 className="text-highlight inline text-4xl px-2 font-medium">I'm a freelance full-stack software developer for hire. <br /> Read more below!</h2>
                </div>
            </div>
            <div className="main-padding py-28 pb-8 cream-bg vertical-shadow" id="about">
                <div className="text-center opacity-0" ref={aboutRef}>
                    <div className='flex justify-center'>
                        <div className='rounded-full portfolio-pic border-8 border-slate-200 border-double select-none shadow-xl'></div>
                    </div>
                    <div className="py-4 space-y-6">
                        <div className="flex justify-center items-center space-x-4">
                            <hr className="h-1 w-12 border-zinc-400 mt-3"/>
                            <h1 className="text-5xl whitespace-nowrap select-none font-bold">About Me</h1>
                            <hr className="h-1 w-12 border-zinc-400 mt-3"/>
                        </div>
                        <p className='font-light text-2xl py-2'>
                            Hey! I am a self-taught software developer <span className="text-highlight font-medium">programming for {getYearsProgramming()}+ years</span>, with a passion for building ideas. Whether they're small-scale applications or large-scale solutions built to scale.
                            <br /><br />
                            I take immense pride in my ability to deliver <span className="text-highlight font-medium">high-quality</span>, innovative solutions that exceed expectations.
                            <br /><br />
                            My commitment to <span className="text-highlight font-medium">client satisfaction</span> is at the core of my freelance practice. I believe in fostering strong, transparent, and collaborative relationships with my clients to ensure that their visions are not just met but exceeded.
                            <br /><br />
                            <span className='font-medium'>Let's collaborate and turn your ideas into reality!</span>
                            <br /><br />
                        </p>
                        <div className="">
                            <hr className="h-1 w-24 border-zinc-400 m-auto"/>
                        </div>
                        <div className='relative pt-28 select-none'>
                            <div className='bg-slate-100 rounded-full absolute-center h-14 w-14 border-2 border-zinc-500 cream-bg'>
                                <p className='text-center absolute-center text-xl leading-5 text-[1.1rem] signature-font'>M<br/>H</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[10%] sm:px-[15%] lg:px-[10%] xxl:px-[20%] py-48" id="skills">
                <div className="w-full pb-24 px-[2%] md:px-[5%]">
                    <div className="py-4 pb-2 whitespace-nowrap flex items-center space-x-6">
                        <h1 className="inline text-6xl font-bold">Skills</h1>
                        <hr className="h-1 w-24 border-zinc-400 mt-4"/>
                    </div>
                    <p className="text-lg block px-2 italic font-bold text-gray-600">My main skills outlining what I'm capable of!</p>
                    {/* Tap a card to learn more. */}
                </div>
                <div className="flex flex-wrap justify-center gap-12" ref={skillsRef}>
                    {mappedSkills}
                </div>
            </div>
            <div className="px-[10%] sm:px-[10%] lg:px-[10%] py-24 cream-bg vertical-shadow" id="work">
                <div className="w-full pb-24 text-right px-[5%]">
                    <div className="py-4 pb-2 whitespace-nowrap flex items-center justify-end space-x-6">
                        <hr className="h-1 w-24 border-zinc-400 mt-4"/>
                        <h1 className="inline text-6xl font-bold">Work</h1>
                    </div>
                    <p className="text-lg block px-2 italic font-bold text-gray-600">Here's a collection of some of my past work. Have a look!</p>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-8'>
                    {mappedWork}
                </div>
                {/* <p className="text-lg text-center block px-2 italic font-bold text-gray-500 pb-8 pt-20">More showcases coming soon!</p> */}
            </div>
            <div className="px-[10%] sm:px-[15%] lg:px-[20%] py-48" id="contact">
                <div className="w-full pb-24">
                    <div className="py-4 pb-2 whitespace-nowrap flex items-center space-x-6">
                        <h1 className="inline text-6xl font-bold">Hire Me</h1>
                        <hr className="h-1 w-24 border-zinc-400 mt-4"/>
                    </div>
                    {/* bg-[#FFE800]/50 */}
                    <p className="text-lg block px-2 italic font-bold text-gray-600">Contact me and tell me all about your grand ideas! <br /> I'll get back to you as soon as possible.</p>
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