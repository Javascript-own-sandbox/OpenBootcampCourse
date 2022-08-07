 const parrafos = document.querySelectorAll(".parrafo")
//  console.log(parrafos)
parrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', event => {
        // console.log("Inicio de arrastre")
        console.log("arrastro el parrafo: " + parrafo.innerText)
        parrafo.classList.add('dragging')
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0 , 0)
    })
    parrafo.addEventListener('dragend', () => {
        parrafo.classList.remove('dragging')
    })
})

const secciones = document.querySelectorAll(".seccion")
secciones.forEach(seccion => {
    seccion.addEventListener('dragover', event => {
        event.preventDefault()
       // console.log("drag over")
       event.dataTransfer.dropEffect = "copy"
        
    })
    seccion.addEventListener('drop', event => {
       console.log("drop")
       const idp = event.dataTransfer.getData("id")
       console.log("Parrafo id: "+ idp)
       const parrafo = document.getElementById(idp)
       seccion.appendChild(parrafo)
    })
})

const trash = document.querySelector('.trash')
    trash.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })

    trash.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        document.getElementById(id_parrafo).remove()
    })