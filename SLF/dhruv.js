
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let name=document.getElementById("name");
let title=document.getElementById("title");

btn2.onclick=function() {
     name.style.maxHeight="0px";
    name.disabled = true;
    title.innerHTML="SIGN IN";
    btn1.classlist.add("disable");
    btn2.classlist.remove("disable");

}
btn1.onclick=function() {
    name.style.maxHeight="65px";
    title.innerHTML="SIGN UP";
    btn1.classlist.remove("disable");
    btn2.classlist.add("disable");

}




