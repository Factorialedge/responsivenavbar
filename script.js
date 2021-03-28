const navSlide = ()=>{
const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-links")

const r= document.querySelectorAll(".nav-links li")


burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active')



    r.forEach((i,index) => {
        if(i.style.animation){
            i.style.animation=''
    
        }
        else{
            i.style.animation=` navlinkFade 0.5s ease forwards ${index/7+0.5}s`
    
        }
        
    });


    burger.classList.toggle('toggle')
    
})


}



navSlide()