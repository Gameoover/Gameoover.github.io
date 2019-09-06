let myHeading = document.querySelector('h1');
myHeading.textContent ='婉薇的小本本';

let iceCream = "chocolate";
if (iceCream === "chocolate"){
    alert("我最喜欢冰淇淋了！")
}else{
    alert("我最喜欢巧克力了！")
}

function multiply(num1,num2){
    let result = num1*num2;
    return result;
}
document.querySelector('h1').onclick=function(){
    alert("别戳我，我怕疼")
}


let myImage = document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc=="images/clannad.png"){
        myImage.setAttribute('src',"images/clannad2.png");
    }else{
        myImage.setAttribute('src',"images/clannad.png")
    }
}

function setHeading(name){
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '婉薇的小本本厉害死了，'+ name +'!';
}

function setUserName(){
    let myName = prompt("input your name please");
    localStorage.setItem('name',myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName){
    setUserName();
}else{
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName; 