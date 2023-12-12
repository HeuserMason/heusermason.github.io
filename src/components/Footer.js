import Sig from '../content/signature_cropped.png';

// import Discord from '../content/icons/discord.svg';
import Github from '../content/icons/github.svg';
import LinkedIn from '../content/icons/linkedin-in.svg';
import Upwork from '../content/icons/upwork.png';
import Phone from '../content/icons/phone-flip-solid.svg'

import Link from './Link';
import IconLink from './IconLink';

import scrollToElement from '../functions/scrollToElement';

const Footer = () => {

    return (
        <div className="flex flex-col main-padding py-12 gap-6 cream-bg border-t-[1px] border-gray-600">
            <div className="flex justify-center items-center">
                <img src={Sig} className='h-12' alt='Signature'/>
            </div>
            <div className="flex justify-center items-center text-center gap-3 sm:gap-5 font-bold text-base sm:text-lg">
                <Link onClick={() => scrollToElement("about")}>About</Link> |
                <Link onClick={() => scrollToElement("skills")}>Skills</Link> |
                <Link onClick={() => scrollToElement("work")}>Work</Link> |
                <Link onClick={() => scrollToElement("contact")}>Contact</Link>
            </div>
            <div className="flex justify-center gap-3">
                <IconLink href="https://github.com/MasonHeuser" title="Github Profile" img={<img src={Github} width="48" height="48" className='svg-white-filter' alt='Github Icon'/>} />
                {/* <IconLink href="https://discordapp.com/users/186953472640417793" title="Discord Profile" img={<img src={Discord} width="32" height="32" className='svg-white-filter' alt='Discord Icon'/>} /> */}
                {/* <IconLink href="https://www.upwork.com/freelancers/~0122f86a7861df0f7a" title="Upwork Profile" img={<img src={Upwork} width="32" height="32" className='svg-white-filter' alt='Upwork Icon'/>} /> */}
                <IconLink href="https://www.linkedin.com/in/mason-heuser-a3a018294/" title="Linkedin Icon" img={<img src={LinkedIn} width="16" height="16" className='svg-white-filter' alt='Linkedin Icon'/>} />
                <IconLink href="sms:9046027742" title="Text Me" img={<img src={Phone} width="16" height="16" className='svg-white-filter' alt='Phone Icon'/>} />
            </div>
        </div>
    );
};

export default Footer;