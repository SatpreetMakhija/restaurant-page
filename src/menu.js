import {removeAllChildNodes, makeAllOtherTabsInactive} from './helperfns';


function createMenu() {

    const menu = document.createElement("div");
    menu.setAttribute("class", "main-content-tab")
    menu.textContent = "Here's the menu for you. It's blank for now.";

    return menu

}

function menu() {

     //get hold of content-div
     let content = document.getElementById("content");
     let footer = document.querySelector("footer");
    
    

    let Menubtn = document.getElementById("Menu");
 
    if (Menubtn.classList.contains("not-active")) {
        //remove all chidren of main-content div
        const mainContent = document.getElementById("main-content");
        removeAllChildNodes(mainContent);
        
     const menu = createMenu();
     mainContent.appendChild(menu);
     content.insertBefore(mainContent, footer);
     makeAllOtherTabsInactive(Menubtn, "navbar-btn");
   
    


    }

};

export {menu};

