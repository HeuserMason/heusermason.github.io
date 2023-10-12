import X from '../content/icons/xmark-solid.svg';

import Modal from './Modal';

import { SKILLS } from "../constants";

const SkillModal = ({keyConstant, onClose}) => {
    
    const skillObject = SKILLS.find(x => x.key === keyConstant);

    return (
        <Modal onClose={onClose} size={"small"} header={
            <div className={"relative h-36 rounded-xl rounded-b-none border-b-2 " + skillObject.colorLight}>
                <div className='flex justify-center items-center space-x-6 sm:space-x-8 py-16'>
                    <img src={skillObject.img} className="h-7 sm:h-12" alt={skillObject.imgAlt} />
                    <h2 className="text-3xl sm:text-6xl font-bold">{skillObject.title}</h2>
                </div>
                <button onClick={onClose} className="p-4 bg-gray-200 hover:bg-gray-300 rounded-xl absolute right-5 top-4 border-2">
                    <img src={X} width="12" height="12" alt="X Mark" className='absolute-center select-none' />
                </button>
            </div>
        }>
            <div className='flex flex-col justify-center text-center px-[10%]'>
                <hr className="h-1 w-[25%] border-zinc-400 mx-auto my-6"/>
                    <div className='overflow-y-auto max-h-[18rem] sm:max-h-[35rem] py-4 px-0 sm:px-3 md:px-6'>
                        {skillObject.longDesc}
                    </div>
                <hr className="h-1 w-[50%] border-zinc-400 mx-auto my-6"/>
            </div>
        </Modal>
    );
};

export default SkillModal;