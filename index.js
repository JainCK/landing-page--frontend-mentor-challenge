let menubutton =document.querySelector('.menubtn');
let navbar = document.querySelector('.navbar');
let btn =document.querySelector('.cancelbtn')

function menuBtn(){
    navbar.classList.toggle('active');
    menubutton.classList.toggle('remove');
    btn.classList.toggle('active2');
    

}
function cancelBtn(){
    navbar.classList.remove('active');
    menubutton.classList.remove('remove');
    btn.classList.remove('active2');
}

menubutton.addEventListener('click',menuBtn);
btn.addEventListener('click',cancelBtn);