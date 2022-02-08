clicked = () =>{
    console.log("Button Clicked")
}

logg = ()=>{
    document.querySelectorAll(".Container")[1].innerHTML = "<b>Set Fired"
    console.log("Set Fireddd")
}

// setTimeout(logg, 2000);  //2000 millisecondss

clr = setInterval(logg, 2000);
//clr is ID returned we can use ClearInterval(clr) to stop
// similary ClearTimeout can be usedd
