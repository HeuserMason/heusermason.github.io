
const Header = () => {

    return (
        <div className="relative w-full header-bg">
            <div className="absolute top-12 left-[5%] z-10">
                <img width={85} height={85} />
            </div>
            <div className="absolute bottom-24 left-[5%] z-10 space-y-4">
                <div>
                    <h1 className="bg-black/80 text-white inline text-2xl-res">Welcome!</h1>
                </div>
                <div>
                    <h2 className="bg-[#FFE800]/95 text-black inline text-2xl-res">I'm a freelance full-stack software developer. <br /> Checkout my work!</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;