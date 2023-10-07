let select = document.querySelector("#select")
let article_for_base = document.querySelector(".article_for_base")
let article_for_texto = document.querySelector(".article_for_texto")
let article_for_multimedia = document.querySelector(".article_for_multimedia")
let article_for_contenido = document.querySelector(".article_for_contenido")
let article_for_tables = document.querySelector(".article_for_tables")
let article_for_forms = document.querySelector(".article_for_forms")
let cardImgs = document.querySelector(".card-imgs")


select.addEventListener("change", ()=> {
    // let opciones = ["completo", "base", "texto", "multimedia", "tablas", "formulario"]
    let cards = document.querySelectorAll(".card")
    cards.forEach(elemento =>{
        elemento.style.visibility="hidden"
    })

    if(select.value === "completo"){
        console.log(cards)
        cards.forEach(elemento=>{
            elemento.style.visibility = "visible"
        })
    }
    if(select.value === "base"){
        cards.forEach(elemento =>{
            elemento.classList.forEach(item=>{
                if(item === "card2"){
                    elemento.style.visibility= "visible";
                }
            })
        })
    }
    if(select.value === "texto"){
        cards.forEach(elemento =>{
            elemento.classList.forEach(item=>{
                if(item === "card2"){
                    elemento.style.visibility= "visible";
                }
            })
        })
    }
    if(select.value === "multimedia"){
        cards.forEach(elemento =>{
            elemento.classList.forEach(item=>{
                if(item === "card3"){
                    elemento.style.visibility= "visible";
                }
            })
        })
    }
    if(select.value === "tablas"){
        cards.forEach(elemento =>{
            elemento.classList.forEach(item=>{
                if(item === "card4"){
                    elemento.style.visibility= "visible";
                }
            })
        })
    }
    if(select.value === "formulario"){
        cards.forEach(elemento =>{
            elemento.classList.forEach(item=>{
                if(item === "card4"){
                    elemento.style.visibility= "visible";
                }
            })
        })
    }
})