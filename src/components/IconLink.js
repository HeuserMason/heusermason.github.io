const IconLink = ({href, title, img, ...rest }) => {

    return (
        <a href={href} target="_blank" rel="noreferrer" className="relative rounded-full bg-gray-600 p-5 shadow-xl grow-icon" title={title} {...rest}>
            <div className="absolute-center">
                {img}
            </div>
        </a>
    );
};

export default IconLink;