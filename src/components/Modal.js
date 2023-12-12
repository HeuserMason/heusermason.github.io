import { useEffect, useRef } from 'react';

const Modal = ({onClose, header, children, size, className}) => {
    
    useEffect(() => {

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }

    }, []);

    const elementRef = useRef(null);

    const handleClick = (e) => {

        //e.target is mouse location
        if (!elementRef.current.contains(e.target)) {
            onClose();
        }
    };

    var sizeStyle;
    switch (size) {
        
        default :
        case "small" :
            sizeStyle = "max-w-xs sm:max-w-lg md:max-w-2xl max-h-full w-full";
        break;

        case "large" :
            sizeStyle = "max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl xxl:max-w-7xl max-h-full w-full";
        break;
    }

    return (
        <div onClick={handleClick} className={"w-full h-full bg-black/30 z-50 fixed"}>
            <div ref={elementRef} className={"absolute-center flex flex-col justify-center cream-bg rounded-xl mx-18 squeezeInAnimation " + sizeStyle + " " + className}>
                {header}
                {children}
            </div>
        </div>
    );
};

export default Modal;