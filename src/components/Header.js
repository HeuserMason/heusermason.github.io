const Header = () => {

    return (

        <div className="w-full pt-96 px-[5%] pb-24">
            <div className="py-4">
                <h1 className="bg-black/80 text-white inline text-2xl">Welcome!</h1>
            </div>
            <div>
                <h2 className="text-highlight inline text-2xl">I'm a freelance full-stack software developer. <br /> Read more below!</h2>
            </div>
        </div>
        // <div className="relative w-full header-bg">
            // <div className="absolute top-12 left-[5%] z-10">
            //     <img width={120} height={120} />
            // </div>
            // <div className="absolute bottom-24 left-[5%] z-10 space-y-4">
            //     <div>
            //         <h1 className="bg-black/80 text-white inline text-2xl">Welcome!</h1>
            //     </div>
            //     <div>
            //         <h2 className="bg-[#FFE800]/95 text-black inline text-2xl">I'm a freelance full-stack software developer. <br /> Checkout my work!</h2>
            //     </div>
            // </div>
        // </div>
    );
};

export default Header;