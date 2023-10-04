// import { useState } from "react";

const Input = ({ type, name, label, img, textarea, ...rest }) => {

    const autoResize = (e) => {

        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    };

    var inputEle = <input 
        type={type}
        name={name}
        className="shadow-2xl bg-gray-50 border border-gray-300 text-gray-900 rounded-full rounded-l-none focus:ring-slate-500 placeholder:text-base focus:border-slate-500 block w-full p-2.5 px-3"
        placeholder={label}
        {...rest}
    />

    if (textarea) {
        inputEle = <textarea 
            type={type}
            name={name}
            className="resize-none overflow-hidden shadow-2xl min bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl rounded-l-none focus:ring-slate-500 placeholder:text-base focus:border-slate-500 block w-full p-2.5 px-3"
            placeholder={label}
            rows={5}
            {...rest}
            onInput={autoResize}
        />
    }

    return (
        <div className="flex">
            <span className="relative text-sm p-4 px-5 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md select-none">
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 translate-y-1/2">
                    {img}
                </div>
            </span>
            {inputEle}
        </div>
    );
};

export default Input;