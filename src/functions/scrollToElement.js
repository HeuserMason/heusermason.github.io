const scrollToElement = (id) => {

    //Small fix for an odd offset issue of covering elements we don't want covered
    //after scrolling with this function
    var offset;
    switch (id) {

        case "about":
        case "work":
            offset = -100
        break;

        default:
            offset = 0
        break;
    }

    const element = document.getElementById(id); 
    window.scrollTo({
        top: element.offsetTop + offset,
        behavior:"smooth"
    });
};

export default scrollToElement;