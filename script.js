let agregar = document.querySelector(".boton-agregar")
let input = document.querySelector(".input")
let container = document.querySelector(".container")


class Item{
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)    
    }

   crearDiv(nuevaTarea){
    let inputItem = document.createElement("input")
    inputItem.disabled = true
    inputItem.classList.add("item-input")
    inputItem.value = nuevaTarea

    let div= document.createElement("div")
    div.classList.add("item")

    let botonEditar = document.createElement("button")
    botonEditar.innerHTML="<i class='fas fa-lock'></i>"
    botonEditar.classList.add("boton-editar")

    let botonRemover = document.createElement("button")
    botonRemover.innerHTML= "<i class='fas fa-trash'></i>"
    botonRemover.classList.add("boton-remover")

    div.appendChild(inputItem)
    div.appendChild(botonEditar)
    div.appendChild(botonRemover)
    container.appendChild(div)

   botonEditar.addEventListener("click",()=>{
    inputItem.disabled = !inputItem.disabled
    if(inputItem.disabled == false){
        botonEditar.innerHTML="<i class='fas fa-lock-open'></i>"}
        else{botonEditar.innerHTML="<i class='fas fa-lock'></i>"}
    })
    botonRemover.addEventListener("click",()=>{
   //     container.removeChild(div)
        div.remove()
    })
}
}

function chequearInput(){
    if(input.value != false){
        new Item(input.value)
        input.value = ""
    }
}
agregar.addEventListener("click",chequearInput)

