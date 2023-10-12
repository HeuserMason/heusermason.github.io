import Sig from '../content/signature_cropped.png';

// import Discord from '../content/icons/discord.svg';
import Mail from '../content/icons/envelope-solid.svg';
// import LinkedIn from '../content/icons/linkedin-in.svg';
// import Upwork from '../content/icons/upwork.png';
// import Phone from '../content/icons/phone-flip-solid.svg'

import Link from './Link';
// import IconLink from './IconLink';

import scrollToElement from '../functions/scrollToElement';

const Header = () => {

    return (

        <div className='fixed w-full z-40'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 content-center justify-items-center text-center px-[5%] sm:px-[10%] lg:px-[10%] xl:px-[15%] py-5 bg-[#f6f4ef] border-b-[1px] border-gray-600">
                <div className="flex justify-center items-center">
                    <img src={Sig} className='h-12' alt='Signature'/>
                </div>
                <div className="flex justify-center items-center text-center gap-6 xl:gap-10 font-bold text-lg">
                    <Link onClick={() => scrollToElement("about")}>About</Link>
                    <Link onClick={() => scrollToElement("skills")}>Skills</Link>
                    <Link onClick={() => scrollToElement("work")}>Work</Link>
                    <Link onClick={() => scrollToElement("contact")}>Contact</Link>
                </div>
                <a href="mailto:masonheuser@gmail.com" className="flex justify-center items-center gap-3">
                    <img src={Mail} width="21" height="21" className='svg-grey-filter' alt='Mail Icon'/>
                    <h3 className='font-bold italic'>masonheuser@gmail.com</h3>
                </a>
            </div>
        </div>
    );
};

export default Header;