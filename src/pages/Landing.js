
import { useState } from 'react';
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

    const mappedSkills = SKILLS.map((skill) =>
        <SkillCard 
            title={skill.title} 
            img={<img src={skill.img} width={skill.imgSize} height={skill.imgSize} alt={skill.imgAlt} />} 
            desc={skill.shortDesc}
            colorLight={skill.colorLight}
            colorDark={skill.colorDark}
            buttonFunc={() => openSkillModal(skill.key)}
        />
    );

    const mappedWork = WORK.map((work) =>
        <WorkCard
            title={work.title}
            coverImage={work.coverImage}
            buttonFunc={() => openWorkModal(work.key)}
        />
    );

    return (

        <>
            {skillModal}
            {workModal}
            <div className="w-full pt-[32.5rem] px-[5%] pb-24">
                <div className="py-4">
                    <h1 className="inline text-6xl font-bold">Welcome!</h1>
                </div>
                <div>
                    <h2 className="text-highlight inline text-4xl px-2 font-medium">I'm a freelance full-stack software developer for hire. <br /> Read more below!</h2>
                </div>
            </div>
            <div className="main-padding py-28 cream-bg vertical-shadow" id="about">
                <div className="text-center">
                    <div className='flex justify-center'>
                        <div className='rounded-full portfolio-pic border-8 border-slate-200 border-double select-none shadow-xl'></div>
                    </div>
                    <div className="py-4 space-y-6">
                        <div className="flex justify-center items-center space-x-4">
                            <hr className="h-1 w-12 border-zinc-400 mt-3"/>
                            <h1 className="text-5xl whitespace-nowrap select-none font-bold">About Me</h1>
                            <hr className="h-1 w-12 border-zinc-400 mt-3"/>
                        </div>
                        <p class='font-light text-2xl py-2'>
                            Hey! I am a self-taught software developer with a passion for building ideas, whether they're small-scale applications or large-scale solutions built to scale.
                            <br /><br />
                            I take immense pride in my ability to deliver <span className="text-highlight font-medium">high-quality</span>, innovative solutions that exceed expectations.
                            <br /><br />
                            My commitment to <span className="text-highlight font-medium">client satisfaction</span> is at the core of my freelance practice. I believe in fostering strong, transparent, and collaborative relationships with my clients to ensure that their visions are not just met but exceeded.
                            <br /><br />
                            Let's collaborate and turn your ideas into reality!
                            <br /><br />
                        </p>
                        <div className="pt-6">
                            <hr className="h-1 w-24 border-zinc-400 m-auto"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[10%] sm:px-[15%] lg:px-[20%] py-48" id="skills">
                <div className="w-full pb-24 px-[2%] md:px-[5%]">
                    <div className="py-4 pb-2 whitespace-nowrap flex items-center space-x-6">
                        <h1 className="inline text-6xl font-bold">Skills</h1>
                        <hr className="h-1 w-24 border-zinc-400 mt-4"/>
                    </div>
                    <p className="text-lg inline px-2 italic font-bold text-gray-600">A couple of my main skills outlining what I'm capable of! Tap a card to learn more.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-12">
                    {mappedSkills}
                </div>
            </div>
            <div className="px-[10%] sm:px-[10%] lg:px-[10%] py-24 cream-bg vertical-shadow" id="work">
                <div className="w-full pb-24 text-right px-[5%]">
                    <div className="py-4 pb-2 whitespace-nowrap flex items-center justify-end space-x-6">
                        <hr className="h-1 w-24 border-zinc-400 mt-4"/>
                        <h1 className="inline text-6xl font-bold">Work</h1>
                    </div>
                    <p className="text-lg inline px-2 italic font-bold text-gray-600">Here's a collection of some of my past work. Have a look!</p>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-8'>
                    {mappedWork}
                </div>
            </div>
            <div className="px-[10%] sm:px-[15%] lg:px-[20%] py-48" id="contact">
                <div className="w-full pb-24">
                    <div className="py-4 pb-2 whitespace-nowrap flex items-center space-x-6">
                        <h1 className="inline text-6xl font-bold">Contact</h1>
                        <hr className="h-1 w-24 border-zinc-400 mt-4"/>
                    </div>
                    {/* bg-[#FFE800]/50 */}
                    <p className="text-lg inline px-2 italic font-bold text-gray-600">Email me and tell me all about your grand ideas, I'd love to hear em! <br /> I'll get back to you as soon as possible!</p>
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