const SkillBubble = ({ img, title, colorLight, colorDark, buttonFunc, className }) => {

    return (

        <div onClick={buttonFunc} className={"relative cursor-pointer grow-skill shadow-xl hover:shadow-2xl active:shadow-2xl opacity-0 " + className}>
            <div className={"rounded-full border-black border-2 w-20 h-20 " + colorDark}>
                <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] select-none">
                    {img}
                </div>
                <div className={"absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-[50%] select-none rounded-lg min-w-fit whitespace-nowrap font-bold border-2 border-black px-2 shadow-xl " + colorLight}>
                    {title}
                </div>
            </div>
        </div>
    );
}

export default SkillBubble;