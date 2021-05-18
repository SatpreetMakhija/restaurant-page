import { home } from './home'

function createHomepage () {

    //get hold of content-div
    let content = document.querySelector("#content");
   
    let heading = document.createElement("h1");
    heading.textContent = "Witcher's Restaurant";
    content.appendChild(heading);

    //create navbar
    let navbar = document.createElement("div");
    navbar.setAttribute("class" , "nav-bar");
    

    let navbarArray = ['Home', 'Menu', 'About'];
   
    for (var i = 0; i< navbarArray.length; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("id", `${navbarArray[i]}`);
        btn.classList.add("not-active");
        btn.classList.add("navbar-btn");
        const span = document.createElement('span');
        span.textContent = navbarArray[i];
        btn.appendChild(span);
        navbar.appendChild(btn);
    }
    content.appendChild(navbar);



    let mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");
    content.appendChild(mainContent);

  
    

    //add footer
    let footer = document.createElement("footer");
    footer.innerHTML = "Made by a Witcher";
    content.appendChild(footer);

    // //add Home
    // home();


};

export { createHomepage }