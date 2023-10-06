const Link = ({children, className, ...rest}) => {

    return (
        <button {...rest} className={'hover:text-gray-600 ' + className}>{children}</button>
    );
};

export default Link;