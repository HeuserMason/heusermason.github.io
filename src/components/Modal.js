import { useEffect, useRef } from 'react';

const Modal = ({onClose, header, children, size}) => {
    
    useEffect(() => {

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }

    }, []);

    const elementRef = useRef(null);

    const handleClick = (e) => {

        if (!elementRef.current.contains(e.target)) {
            onClose();
        }
    };

    var sizeStyle;
    switch (size) {
        
        default :
        case "small" :
            sizeStyle = "max-w-md sm:max-w-2xl max-h-full w-full";
        break;

        case "large" :
            sizeStyle = "max-w-sm sm:max-w-7xl max-h-full w-full";
        break;
    }

    return (
        <div onClick={handleClick} className={"w-full h-full bg-black/30 z-50 fixed"}>
            <div ref={elementRef} className={"absolute-center flex flex-col justify-center cream-bg rounded-xl mx-18 " + sizeStyle}>
                {header}
                {children}
            </div>
        </div>
    );
};

export default Modal;