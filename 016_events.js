function clicked(){
    console.log("Button Clicked")
}

window.onload = function(){
    console.log("Document Loaded")
}

FirstContainer.addEventListener("click",function(){
    console.log("Container Clicked")
})

FirstContainer.addEventListener("mouseover",function(){
    console.log("Mouse Over Container")
})

FirstContainer.addEventListener("mouseout",function(){
    console.log("Mouse Out Container")
})

FirstContainer.addEventListener("mouseup",function(){
    console.log("Mouse UP when clicked Container")
})

FirstContainer.addEventListener("mousedown",function(){
    console.log("Mouse Down when clicked Container")
})
