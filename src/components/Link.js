const Link = ({children, ...rest}) => {

    return (
        <button {...rest} className='hover:text-gray-600'>{children}</button>
    );
};

export default Link;