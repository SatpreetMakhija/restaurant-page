import { createHomepage } from "./pagelayout";
import {makeAllOtherTabsInactive, removeAllChildNodes} from "./helperfns";

function home() {

    //get hold of content-div
    let content = document.getElementById("content");
    let footer = document.querySelector("footer");
    
   let Homebtn = document.getElementById("Home");
    let mainContent = document.getElementById("main-content");
    
   if (Homebtn.classList.contains("not-active")) {
    //first clear main-content div
    removeAllChildNodes(mainContent);


    let witcherImg = document.createElement("img");
    witcherImg.setAttribute("src", "../media/witcher.webp");
    mainContent.appendChild(witcherImg);
    content.insertBefore(mainContent, footer)
   
    makeAllOtherTabsInactive(Homebtn, "navbar-btn");

   }

    

};

export {home};