getCardData();
getResume();



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
  var body=document.querySelector(".root");

   var main=document.createElement("section");
   body.appendChild(main);

   var article1=document.createElement("article");
   article1.classList.add("class","article1");
   main.appendChild(article1);

   var image=document.createElement("img");
   image.classList.add("class","img2");
   image.src="../HTML/images/download.jpg";
   image.alt="profile pic";
//    image.height="500%";
   article1.appendChild(image);

   article1.appendChild(document.createElement("hr"));
    
   var id=document.createElement("li");
   id.textContent="Reg Id:"+carddata.card[0].cardId;
   article1.appendChild(id);

   var name=document.createElement("li");
   name.textContent="Name:"+carddata.card[0].cardname;
   article1.appendChild(name);

   var email=document.createElement("li");
   email.textContent="Email:"+carddata.card[0].email;
   article1.appendChild(email);

   var branch=document.createElement("li");
   branch.textContent="Branch:"+carddata.card[0].branch;
   article1.appendChild(branch);

}

function getResume(){
    var xmp=new XMLHttpRequest();
    xmp.overrideMimeType("application/json");
    xmp.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200){
            var rep=JSON.parse(this.responseText);
            console.log(rep);
            resumedata(rep);
        }
    };
    xmp.open("GET","../JSON/resume.json",true);

    xmp.send();
}

function resumedata(data){

var body=document.querySelector(".root");

var main=document.createElement("section");
body.appendChild(main);

var left=document.createElement("div");
left.classList.add("resume");
main.appendChild(left);

/****image****** */
var image1=document.createElement("img");
image1.classList.add("class","img1");
image1.src="../HTML/images/download.jpg";
image1.alt="profile";
left.appendChild(image1);


/*h3 */
var fname=document.createElement("h3");
fname.classList.add("name");
fname.textContent=data.resumedata.name;
left.appendChild(fname);

/*list -li */
var city=document.createElement("li");
city.classList.add("city");
city.textContent=data.resumedata.city;
left.appendChild(city);

var email=document.createElement("li");
email.classList.add("email");
email.textContent="Email : "+data.resumedata.email;
left.appendChild(email);

var mobile=document.createElement("li");
mobile.classList.add("mobile");
mobile.textContent="Contact : "+data.resumedata.mobile;
left.appendChild(mobile);

left.appendChild(document.createElement("hr"));


/***Objective */
var obj=document.createElement("h3");
obj.classList.add("obj");
obj.textContent="Objective";
left.appendChild(obj);

var objp=document.createElement("p");
objp.classList.add("objp");
objp.textContent="To pursue a career in a company where I can utilize my problem solving and software development skills to achieve the objective of the organization & which provides the opportunity of continuous learning";
left.appendChild(objp);

left.appendChild(document.createElement("hr")); 


var edu=document.createElement("h3");
edu.classList.add("edu");
edu.textContent="Education";
left.appendChild(edu);




/**Table */
var table=document.createElement("table");
table.classList.add("tab");
left.appendChild(table);
table.cellPadding='10px';
/**THEAD* */
var thead=document.createElement("thead");
table.appendChild(thead);

var tr=document.createElement("tr");
thead.appendChild(tr);

var td=document.createElement("td");
td.textContent="qualification";
tr.appendChild(td);

var td=document.createElement("td");
td.textContent="course";
tr.appendChild(td);

var td=document.createElement("td");
td.textContent="grade";
tr.appendChild(td);

/**TBODY */
var tbody=document.createElement("tbody");
table.appendChild(tbody);

var tr=document.createElement("tr");
tbody.appendChild(tr);

var td=document.createElement("td");
td.textContent="B.tech";
tr.appendChild(td);

var td=document.createElement("td");
td.textContent="cse";
tr.appendChild(td);

var td=document.createElement("td");
td.textContent="8.1";
tr.appendChild(td);


var tr=document.createElement("tr");
tbody.appendChild(tr);

var td=document.createElement("td");
td.textContent="Inter";
tr.appendChild(td);

var td=document.createElement("td");
td.textContent="Mpc";
tr.appendChild(td);

var td=document.createElement("td");
td.textContent="93.9";
tr.appendChild(td);

var tr=document.createElement("tr");
tbody.appendChild(tr);

var td=document.createElement("td");
td.textContent="10Th";
tr.appendChild(td);

var td=document.createElement("td");
td.textContent="ssc";
tr.appendChild(td);

var td=document.createElement("td");
td.textContent="9.2";
tr.appendChild(td);

left.appendChild(document.createElement("hr"));

/**Skills */
var skill=document.createElement("h3");
skill.classList.add("skill");
skill.textContent="Skills";
left.appendChild(skill);

var web=document.createElement("li");
web.classList.add("web");
web.textContent="Web technologies : "+data.web;
left.appendChild(web);

var web=document.createElement("li");
web.classList.add("web");
web.textContent="Programming languages : "+data.lang;
left.appendChild(web);

left.appendChild(document.createElement("hr"));

/**Hobbies */

var hobbies=document.createElement("h3");
hobbies.classList.add("hobbies");
hobbies.textContent="Hobbies";
left.appendChild(hobbies);

for(var i=0;i<=data.hobbies.length;i++){
var hobbies=document.createElement("li");
hobbies.textContent=data.hobbies[i];
left.appendChild(hobbies);
}
// var hobbies=document.createElement("li");
// hobbies.textContent="playing shuttle";
// left.appendChild(hobbies);
}