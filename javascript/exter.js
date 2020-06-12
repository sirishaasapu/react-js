var body=document.querySelector("#root");

var main=document.createElement("section");
main.classList.add("main");
body.appendChild(main);

var article1=document.createElement("article");
article1.setAttribute("class","article1");
main.appendChild(article1)

var image=document.createElement("img");
image.src="../HTML/images/download.jpg";
image.alt="profile picture";
article1.appendChild(image);

article1.appendChild(document.createElement("hr"));

var heading=document.createElement("h2");
heading.textContent="Name :sirisha.A";
article1.appendChild(heading);

var heading=document.createElement("h3");
heading.textContent="Email :sirisha@gmail.com";
article1.appendChild(heading);

var heading=document.createElement("h3");
heading.textContent="Mobile:832778289";
article1.appendChild(heading);

var article2=document.createElement("article");
article2.setAttribute("class","article1");
main.appendChild(article2)

var image=document.createElement("img");
image.src="../HTML/images/man.png";
image.alt="profile picture";
article2.appendChild(image);

article2.appendChild(document.createElement("hr"));

var heading=document.createElement("h2");
heading.textContent="Name :durgarao.A";
article2.appendChild(heading);

var heading=document.createElement("h3");
heading.textContent="Email :rao@gmail.com";
article2.appendChild(heading);

var heading=document.createElement("h3");
heading.textContent="Mobile:832778284";
article2.appendChild(heading);



var article2=document.createElement("article");
article2.setAttribute("class","article1");
main.appendChild(article2)

var image=document.createElement("img");
image.src="../HTML/images/women.jpg";
image.alt="profile picture";
article2.appendChild(image);

article2.appendChild(document.createElement("hr"));

var heading=document.createElement("h2");
heading.textContent="Name :praveena.A";
article2.appendChild(heading);

var heading=document.createElement("h3");
heading.textContent="Email :xyz@gmail.com";
article2.appendChild(heading);

var heading=document.createElement("h3");
heading.textContent="Mobile:832778283";
article2.appendChild(heading);