//DOM Manipulation (Document Object Model)

let elem = document.getElementById("Click")
console.log(elem)

let elemclass = document.getElementsByClassName("Container")
// console.log(elemclass)

// elemclass[0].style.background = 'yellow'
elemclass[0].classList.add("bgp")
elemclass[0].classList.add("texts")
// elemclass[0].classList.remove("texts")

// console.log(elem.innerHTML)
// console.log(elem.innerText)

// console.log(elemclass[0].innerHTML)
// console.log(elemclass[0].innerText)

let tn = document.getElementsByTagName("div")
console.log(tn)

createdelem = document.createElement("p")
createdelem.innerText = "Created Eleme usedd"
tn[0].appendChild(createdelem);

createdelem2 = document.createElement("b")
createdelem2.innerText = "Created Eleme bold"
tn[0].replaceChild(createdelem2, createdelem);

// removeChild(Element);