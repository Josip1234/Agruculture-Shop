function setActiveNavLink(id){
var number;
var setElement=document.getElementById(id).setAttribute("class","nav-link active");
if(id=="pocetna"){
    number=1;
    changeNavClass(number);
}else if(id=="kontakt"){
    number=2;
    changeNavClass(number);
}else if(id=="kosarica"){
    number=3;
    changeNavClass(number);
}else if(id=="popusti"){
    number=4;
    changeNavClass(number);
}
return setElement;
}

function changeNavClass(number){
    for(var num=0;num<number;num++){
        document.getElementsByTagName('a')[num].setAttribute("class","nav-link");
    }
}