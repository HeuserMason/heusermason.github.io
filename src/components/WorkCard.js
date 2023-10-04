import DeviceTemplate from '../content/device-template.jpg';
import Plus from '../content/icons/plus-solid.svg';

const WorkCard = ({ img }) => {

    return (
        <button className='w-[35rem] h-[24rem] grow-work hover:z-20 shadow-xl rounded-2xl' 
            style={{
                backgroundImage: `url(${DeviceTemplate})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className='bg-transparent hover:bg-black/20 w-full h-full rounded-2xl work-card-show relative' id='inner-work-parent'>
                <div className='absolute-center hidden-work-child'>
                    <img src={Plus} width="16" height="16" alt="Plus" />
                </div>
            </div>
        </button>
    );
};

export default WorkCard;