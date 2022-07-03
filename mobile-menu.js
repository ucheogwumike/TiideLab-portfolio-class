<<<<<<< HEAD
const primaryNav = document.querySelector('.navlinks-wrapper');
const medButton = document.querySelector('.burger');

medButton.addEventListener("click",() => {
    const visibile = primaryNav.getAttribute('data-visible');


    if(visibile === "false"){
    primaryNav.setAttribute('data-visible',true);
    medButton.setAttribute('aria-expanded',true);
}
    else{
        primaryNav.setAttribute('data-visible',false);
        medButton.setAttribute('aria-expanded',false);
    }
    
=======
const primaryNav = document.querySelector('.navlinks-wrapper');
const medButton = document.querySelector('.burger');

medButton.addEventListener("click",() => {
    const visibile = primaryNav.getAttribute('data-visible');


    if(visibile === "false"){
    primaryNav.setAttribute('data-visible',true);
    medButton.setAttribute('aria-expanded',true);
}
    else{
        primaryNav.setAttribute('data-visible',false);
        medButton.setAttribute('aria-expanded',false);
    }
    
>>>>>>> 9542d660aa6d9e5b99b69317bdd1ac8886f6d895
});