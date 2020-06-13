
getCardData();
function getCardData()
{
     var xhr=new XMLHttpRequest();
     xhr.onreadystatechange=function()
     {
         if(this.readyState==4 && this.status==200){
             var res=JSON.parse(this.responseText);
              console.log(res);
              cardDetails(res);
         }
     };
     xhr.open("GET","../JSON/card.json");
     xhr.send();
}


function cardDetails(carddata){
  var body=document.querySelector("#root");

   var main=document.createElement("section");
   body.appendChild(main);

   var article1=document.createElement("article");
   article1.classList.add("class","article1");
   main.appendChild(article1);

   var image=document.createElement("img");
   image.src="../HTML/images/download.jpg";
   image.alt="profile pic";
   article1.appendChild(image);

   article1.appendChild(document.createElement("hr"));
    
   var id=document.createElement("h3");
   id.textContent="Reg Id:"+carddata.card[0].cardId;
   article1.appendChild(id);

   var name=document.createElement("h3");
   name.textContent="Name:"+carddata.card[0].cardname;
   article1.appendChild(name);

   var email=document.createElement("h3");
   email.textContent="Email:"+carddata.card[0].email;
   article1.appendChild(email);

   var branch=document.createElement("h3");
   branch.textContent="Branch:"+carddata.card[0].branch;
   article1.appendChild(branch);

   var article1=document.createElement("article");
   article1.classList.add("class","article1");
   main.appendChild(article1);

   var image=document.createElement("img");
   image.src="../HTML/images/women.jpg";
   image.alt="profile pic";
   article1.appendChild(image);

   article1.appendChild(document.createElement("hr"));
    
   var id=document.createElement("h3");
   id.textContent="Reg Id:"+carddata.card[1].cardId;
   article1.appendChild(id);

   var name=document.createElement("h3");
   name.textContent="Name:"+carddata.card[1].cardname;
   article1.appendChild(name);

   var email=document.createElement("h3");
   email.textContent="Email:"+carddata.card[1].email;
   article1.appendChild(email);

   var branch=document.createElement("h3");
   branch.textContent="Branch:"+carddata.card[1].branch;
   article1.appendChild(branch);


   var article1=document.createElement("article");
   article1.classList.add("class","article1");
   main.appendChild(article1);

   var image=document.createElement("img");
   image.src="../HTML/images/man.png";
   image.alt="profile pic";
   article1.appendChild(image);

   article1.appendChild(document.createElement("hr"));
    
   var id=document.createElement("h3");
   id.textContent="Reg Id:"+carddata.card[2].cardId;
   article1.appendChild(id);

   var name=document.createElement("h3");
   name.textContent="Name:"+carddata.card[2].cardname;
   article1.appendChild(name);

   var email=document.createElement("h3");
   email.textContent="Email:"+carddata.card[2].email;
   article1.appendChild(email);

   var branch=document.createElement("h3");
   branch.textContent="Branch:"+carddata.card[2].branch;
   article1.appendChild(branch);
}