function clicked(){
    console.log("Button Clicked")
}

window.onload = function(){
    console.log("Document Loaded")
}

// FirstContainer.addEventListener("click",function(){
//     document.querySelectorAll(".Container")[1].innerHTML = "<b> Clicked </b>"
//     console.log("Container Clicked")
// })

// FirstContainer.addEventListener("mouseover",function(){
//     console.log("Mouse Over Container")
// })

// FirstContainer.addEventListener("mouseout",function(){
//     console.log("Mouse Out Container")
// })

let previousHTML = document.querySelectorAll(".Container")[1].innerHTML;
FirstContainer.addEventListener("mouseup",function(){
    document.querySelectorAll(".Container")[1].innerHTML = previousHTML;
    console.log("Mouse UP when clicked Container")
})

FirstContainer.addEventListener("mousedown",function(){
    document.querySelectorAll(".Container")[1].innerHTML = "<b> Clicked </b>"
    console.log("Mouse Down when clicked Container")
})