import Award from "../content/icons/award-solid.svg"

const SkillCard = ({ img, title, desc, colorLight, colorDark, buttonFunc }) => {

    return (

        <div onClick={buttonFunc} className="flex justify-center flex-col relative w-[19rem] border-2 rounded-lg cursor-pointer grow-skill shadow-xl hover:shadow-2xl active:shadow-2xl">
            <img className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 select-none" src={Award} width="32" height="32" alt="Award" />
            <div className={"min-h-[6rem] rounded-lg rounded-b-none " + colorLight}></div>
            <div className="min-h-[24.5rem] rounded-lg rounded-t-none skill-bg-gradient relative">
                <div className={"absolute -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full border-black border-2 w-20 h-20 " + colorDark}>
                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] select-none">
                        {img}
                    </div>
                </div>
                <div className="py-12 px-2 flex-col justify-center text-center relative">
                    <h3 className="text-lg font-bold px-4 select-none">{title}</h3>
                    <div className="py-4">
                        <hr className="h-1 w-12 border-zinc-400 m-auto"/>
                    </div>
                    <p className="font-base text-sm px-8 select-none">
                        {desc}
                    </p>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm">
                    <div className="py-4">
                        <hr className="h-1 w-24 border-zinc-400 m-auto"/>
                    </div>
                    {/* <div className="flex justify-center">
                        <button className="underline text-blue-400 text-center" onClick={buttonFunc}>Learn more</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SkillCard;