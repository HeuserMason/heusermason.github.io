import X from '../content/icons/xmark-solid.svg';
import Chevron from '../content/icons/chevron-left-solid.svg';
import LinkOut from '../content/icons/arrow-up-right-from-square-solid.svg';
import styled from "styled-components";
import { useRef } from 'react';
import { Carousel } from 'antd';

import Modal from './Modal';

import { WORK } from "../constants";

const WorkModal = ({keyConstant, onClose}) => {
    
    const workObject = WORK.find(x => x.key === keyConstant);

    const mappedImages = workObject.images.map((img) => {

        return (
            <div className="h-72 sm:h-[40rem] w-full rounded-xl rounded-b-none">
                {/* <div className="w-full h-full rounded-xl rounded-b-none" style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}> */}
                    <img src={img} alt="Showcase" className='w-full h-auto absolute-center' />
                {/* </div> */}
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

    const CarouselRef = useRef(null);

    return (
        <Modal className='' onClose={onClose} size={"large"} header={
            <div className='relative'>
                <button onClick={() => CarouselRef.current.prev()} className='absolute left-0 top-1/2 -translate-y-1/2 h-full w-1/6 z-50 hover:bg-black/10 hover:rounded-xl hover:rounded-r-none'>
                    <img src={Chevron} width="12" height="12" alt="Chevron" className='absolute-center select-none' />
                </button>
                <button onClick={() => CarouselRef.current.next()} className='absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/6 z-50 hover:bg-black/10 hover:rounded-xl hover:rounded-l-none rotate-180'>
                    <img src={Chevron} width="12" height="12" alt="Chevron" className='absolute-center select-none' />
                </button>
                <CarouselStyle autoplay effect="fade" className='relative z-40' ref={CarouselRef}>
                    {mappedImages}
                </CarouselStyle>
            </div>
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
                        <div className='flex gap-x-1.5 text-blue-400'>
                            <a className="font-bold underline" href={workObject.website} target="_blank" rel="noreferrer">Website</a><img src={LinkOut} width="12" height="12" alt="Chevron" className='' />
                        </div>
                    </div>
                }
            </div>
        </Modal>
    );
};

export default WorkModal;