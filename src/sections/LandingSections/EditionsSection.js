import React from 'react';

import EditionCards from "./EditionCards";

const EditionsHeading = () => {
    document.documentElement.classList.remove("nav-open");
    const checkScroll = () => {
        const componentPosition = document.getElementsByClassName("add-animation");
        const scrollPosition = window.pageYOffset;
        for (var i = 0; i < componentPosition.length; i++) {
            var rec =
                componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
            if (scrollPosition + window.innerHeight >= rec) {
                componentPosition[i].classList.add("animated");
            } else if (scrollPosition + window.innerHeight * 0.8 < rec) {
                componentPosition[i].classList.remove("animated");
            }
        }
    };
  
    React.useEffect(() => {
        document.body.classList.add("presentation-page");
        window.addEventListener("scroll", checkScroll);
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("presentation-page");
          window.removeEventListener("scroll", checkScroll);
        };
    });
    
    return <EditionCards />
}

export default EditionsHeading;