
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
         item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
     item.addEventListener('click', selectLink)
)

//Expandir o menu//

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})




// ---------------------------BOTAOSCROLL--------------------------



const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


//--------------------------------CARREGAMENTO-----------------------------

const pre_carregamento = document.querySelector("div.pre-carregamento");

function preCarregamento(){
    pre_carregamento.style.opacity = "0";

setTimeout(() => {
    pre_carregamento.style.display = "none";
}, 500);
}


//--------------------------------- CARROOSSEL--------------------------------


let count = 1;
document.getElementById("radio1").checked = true;
   
setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>4){
        count =1;
    }

    document.getElementById("radio"+count).checked = true;
}
