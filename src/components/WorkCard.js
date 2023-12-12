import Plus from '../content/icons/plus-solid.svg';

const WorkCard = ({ title, coverImage, buttonFunc }) => {

    return (
        <button onClick={buttonFunc} className='w-[35rem] h-[11rem] sm:h-[19rem] md:h-[22rem] grow-work shadow-xl rounded-2xl hover:z-20 hover:shadow-2xl' 
            style={{
                backgroundImage: `url(${coverImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            {/* backgroundSize: 'contain', */}
            <div className='bg-transparent hover:bg-black/20 w-full h-full rounded-2xl work-card-show relative' id='inner-work-parent'>
                <div className='absolute top-4 left-4 hidden-work-child'>
                    <h1 className='text-highlight text-4xl px-4'>{title}</h1>
                </div>
                <div className='absolute-center hidden-work-child'>
                    <img src={Plus} width="16" height="16" alt="Plus" />
                </div>
            </div>
        </button>
    );
};

export default WorkCard;