
    console.log('welcome')


    let according=document.querySelectorAll('.according');
   

    function accordingItem(){
        
for(let x=0 ; x <according.length ; x++){


according[x].addEventListener('click',()=>{

var panel=according[x].nextElementSibling;

if(panel.style.display==='block'){
    panel.style.display='none';
    according[x].style.color='black';

}else{
    panel.style.display='block';
    according[x].style.color='orange';
    
}


})

}
    }

    accordingItem();



let menu=document.querySelector('.navbar_sm')

    function showMenu() {
        

if(menu.style.display==='block'){
    menu.style.display='none'; 
}else{
    menu.style.display='block';  
}


    }