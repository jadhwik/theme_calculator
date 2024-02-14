var buttons=document.getElementsByClassName('button1');
var arr=[...buttons];

arr.forEach((element,index)=>{
element.addEventListener("click",()=>{
    element.style.opacity="1";

    
    if (index==0){
        document.getElementsByTagName('body')[0].style.backgroundColor="#1c2687";
        document.getElementById('switches').style.background='#16144a';
       
        document.getElementById('th').style.color='white';
        document.getElementById('num').style.color='white';
        document.getElementById('calc').style.color='white';
        document.getElementById('disp').style.background='#051c36';
        document.getElementById('disp').style.color='white';
        document.getElementById('reset').style.background='#2d90fd';
        document.getElementById('reset').style.color='black';
        document.getElementById('eq').style.background='#eb2121';
        document.getElementById('eq').style.color='black';
        document.getElementsByClassName('theme')[0].style.backgroundColor='#051c36';
        document.getElementById('three').style.backgroundColor='orange';
        let but= document.getElementsByClassName('button');
        for (let a=0;a<but.length-2;a++){
            but[a].style.background='#e4dade';
            but[3].style.background='#2d90fd';
        }
    

        for(let i=0;i<but.length-2;i++){
            but[i].style.color='black';
        
        }
       
        
        
         
        
    }
    else if (index==1){
        document.getElementsByTagName('body')[0].style.backgroundColor="#e4dade";
        document.getElementById('switches').style.background='#eeaeca';
       
        document.getElementById('th').style.color='black';
        document.getElementById('num').style.color='black';
        document.getElementById('calc').style.color='black';
        document.getElementById('disp').style.background='white';
        document.getElementById('disp').style.color='black';
        document.getElementById('reset').style.background='#22c1c3';
        document.getElementById('reset').style.color='white';
        document.getElementById('eq').style.background='#e27909';
        document.getElementById('eq').style.color='black';
        document.getElementsByClassName('theme')[0].style.backgroundColor='white';
        document.getElementById('three').style.backgroundColor='orange';
        let but= document.getElementsByClassName('button');
        for (let a=0;a<but.length-2;a++){
            but[a].style.background='#e4dade';
            but[3].style.background='#22c1c3';
        }
    

        for(let i=0;i<but.length-2;i++){
            but[i].style.color='black';
            but[3].style.color='white';
        }
       
        
        
        
        
    }
    else {
        document.getElementsByTagName('body')[0].style.backgroundColor="#260636";
        document.getElementById('switches').style.background='#280659';
       
        document.getElementById('th').style.color='gold';
        document.getElementById('num').style.color='gold';
        document.getElementById('calc').style.color='gold';
        document.getElementById('disp').style.background='#280659';
        document.getElementById('disp').style.color='gold';
        document.getElementById('reset').style.background='#833ab4';
        document.getElementById('reset').style.color='white';
        document.getElementById('eq').style.background='#66e8ca';
        document.getElementById('eq').style.color='black';
        document.getElementById('three').style.backgroundColor='aqua';
        
        
        
       
        
        let but= document.getElementsByClassName('button');
        for (let a=0;a<but.length-2;a++){
            but[a].style.background='#260636';
            but[3].style.background='#833ab4';
        }
    

        for(let i=0;i<but.length-2;i++){
            but[i].style.color='gold';
            but[3].style.color='white';
        }
       
        

        
    }

    arr
    .filter(function(item){
        return item!=element;
    })
    .forEach((item)=>{
        item.style.opacity="0";


    });
});
});

let switches=document.getElementsByClassName('switches');



//TO MAKE THE CALCULATIONS

let buttons1=document.getElementsByClassName("button").value;
console.log(buttons1);
let display=document.getElementById('disp');

function disp(buttons1){
    display.value+=buttons1;

}
function calc(){
    display.value=eval(display.value);
}
function clr(){
    display.value=display.value.slice(0,-1);
}
function reset(){
    display.value='';
}


