import {removeAllChildNodes, makeAllOtherTabsInactive} from './helperfns';


function createAboutUs() {

    const about = document.createElement("div");
    about.setAttribute("class", "main-content-tab")
    about.textContent = "We are the Witchers";

    return about;

};

function about() {

    //get hold of content-div
    let content = document.getElementById("content");
    let footer = document.querySelector("footer");
   console.log("inside about")
   

   let Aboutbtn = document.getElementById("About");

   if (Aboutbtn.classList.contains("not-active")) {
       //remove all chidren of main-content div
       const mainContent = document.getElementById("main-content");
       removeAllChildNodes(mainContent);
       
    const about = createAboutUs();
    mainContent.appendChild(about);
    content.insertBefore(mainContent, footer);
    makeAllOtherTabsInactive(Aboutbtn, "navbar-btn");
  
   };

};

export {about};