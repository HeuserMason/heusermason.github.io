import X from '../content/icons/xmark-solid.svg';
import styled from "styled-components";
import { Carousel } from 'antd';

import Modal from './Modal';

import { WORK } from "../constants";

const WorkModal = ({keyConstant, onClose}) => {
    
    const workObject = WORK.find(x => x.key === keyConstant);

    const mappedImages = workObject.images.map((img) => {

        return (
            <div className="h-72 sm:h-[40rem] w-full rounded-xl rounded-b-none">
                <div className="w-full h-full rounded-xl rounded-b-none" style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                </div>
            </div>
        );
    });

    const CarouselStyle = styled(Carousel)`
        > .slick-dots li button {
            height: 6px;
            border: solid;
            border-width: 0.5px;
            border-color: grey;
            border-radius: 45px;
        }
        > .slick-dots li.slick-active button {
            
        }
    `;

    return (
        <Modal onClose={onClose} size={"large"} header={
            <CarouselStyle autoplay effect="fade" className='relative'>
                {mappedImages}
            </CarouselStyle>
        }>
            <div className='py-8 px-[7.5%] rounded-xl rounded-t-none border-t-2 cream-bg relative'>
                <button onClick={onClose} className="p-4 bg-gray-200 hover:bg-gray-300 rounded-xl absolute right-5 top-4 border-2">
                    <img src={X} width="12" height="12" alt="X Mark" className='absolute-center select-none' />
                </button>
                <h2 className='text-highlight text-3xl sm:text-6xl inline px-4'>{workObject.title}</h2>
                <p className='text-lg pl-6 py-4 font-medium italic'>{workObject.desc}</p>
                {workObject.website !== "" &&
                    <div className='flex items-center space-x-2 mt-8'>
                        <hr className="h-1 w-8 border-zinc-400 mt-1"/>
                        <a className="font-bold underline text-blue-400" href={workObject.website} target="_blank" rel="noreferrer">Website</a>
                    </div>
                }
            </div>
        </Modal>
    );
};

export default WorkModal;