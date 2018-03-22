//ajax initiation
function jsondata(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
//function calling
jsondata("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  ba(data.basics);
  educa(data.education);
})
//main div class calling from html
var main =document.querySelector('.main');
//var main=document.getElementById('main');
//left div creation
var left=document.createElement("div");
left.classList.add("left");
//id for left div
left.setAttribute("id","left");
//appending to main div
main.appendChild(left);
console.log(left);
function ba(basic){
  //creation of img
  var img=document.createElement("img");
  img.src=basic.photo;
  left.appendChild(img);
  //name creation
  var name=document.createElement("h1");
  name.textContent=basic.name;
  left.appendChild(name);
  //email creation
  var mail=document.createElement("p");
  mail.textContent=basic.email
  name.appendChild(mail);
  //mobile creation
  var mb=document.createElement("h4");
  mb.textContent=basic.mobile;
  mail.appendChild(mb);
}
//right div creation
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
//edu div creation
var edu=document.createElement("h1");
edu.textContent="Education Details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
//function calling
function educa(education){
  for(i in education){
    var e1=document.createElement("div");
    e1.classList.add("edu1");
    e1.textcontent=education[i].course;
    //lisr creation
    var ul=document.createElement("ul");
    ul.classList.add("edu2");
    for(j in education[i] .college){
      var li=document.createElement("li");
      li.textContent=education[i].college[j];
    edu.appendChild(e1)
    e1.appendChild(ul)
    ul.appendChild(li)
  }
}
}
