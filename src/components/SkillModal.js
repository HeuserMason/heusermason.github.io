import X from '../content/icons/xmark-solid.svg';

import Modal from './Modal';

import { SKILLS } from "../constants";

const SkillModal = ({keyConstant, onClose}) => {
    
    const skillObject = SKILLS.find(x => x.key === keyConstant);

    return (
        <Modal onClose={onClose} size={"small"} header={
            <div className={"relative h-36 rounded-xl rounded-b-none border-b-2 " + skillObject.colorLight}>
                <button onClick={onClose} className="p-4 bg-gray-200 hover:bg-gray-300 rounded-xl absolute right-5 top-4 border-2">
                    <img src={X} width="12" height="12" alt="X Mark" className='absolute-center select-none' />
                </button>
            </div>
        }>
            <div className='relative'>
                <div className={"absolute -translate-y-[50%] left-1/2 -translate-x-1/2 rounded-full border-black border-2 w-20 h-20 sm:w-24 sm:h-24 " + skillObject.colorDark}>
                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] select-none">
                        <img src={skillObject.img} className="h-7 sm:h-12" alt={skillObject.imgAlt} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center text-center px-[10%]'>
                <h2 className="text-4xl sm:text-6xl font-bold py-14 pb-4">{skillObject.title}</h2>
                <hr className="h-1 w-[25%] border-zinc-400 mx-auto mt-4"/>
                <div className='overflow-y-auto max-h-[21rem] sm:max-h-[40rem] my-6'>
                    <h3 className='font-bold text-zinc-600 text-xl tracking-wide'>Description</h3>
                    <hr className="h-1 w-[10%] border-zinc-400 mx-auto my-4"/>
                    <div className='text-lg sm:max-h-[35rem] py-2 px-0 sm:px-3 md:px-6'>
                        {skillObject.shortDesc}
                    </div>
                    <hr className="h-1 w-[20%] border-zinc-400 mx-auto my-6"/>
                    <div className='text-lg sm:max-h-[35rem] py-2 px-0 sm:px-3 md:px-6'>
                        {skillObject.longDesc}
                    </div>
                </div>
                <hr className="h-1 w-[50%] border-zinc-400 mx-auto mt-3 mb-8"/>
            </div>
        </Modal>
    );
};

export default SkillModal;