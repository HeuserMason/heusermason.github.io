const scrollToElement = (id) => {

    const element = document.getElementById(id); 
    window.scrollTo({
        top: element.offsetTop,
        behavior:"smooth"
    });
};

export default scrollToElement;