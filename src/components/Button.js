const Button = ({ type, children, className, ...rest }) => {

    return (

        <button 
            type={type}
            {...rest}
            className={"text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-5 py-2.5 mr-2 mb-2 grow-skill first-line:" + className}>
            {children}
        </button>
    );
};

export default Button;