const base = document.querySelector('.base-container')
const toppings = document.querySelector('.toppings-container')

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("image", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var selectedImageId = e.dataTransfer.getData("image");
    e.target.appendChild(document.getElementById(selectedImageId));

    if(selectedImageId=="base1" || selectedImageId=="base2"){
        base.classList.add('none')
        toppings.classList.remove('none')
        localStorage.removeItem("topping-id")
    }

    const toppingID = JSON.parse(localStorage.getItem("topping-id")) || [];
    localStorage.setItem("topping-id",  JSON.stringify([...toppingID, selectedImageId]))

    const getToppingId = JSON.parse(localStorage.getItem("topping-id"))

    if(getToppingId.length > 3 && getToppingId.includes("base1")){
        const emptyCircle = e.target.children[0]
            e.target.innerHTML = ''
            e.target.appendChild(emptyCircle)
            const finalPizza = document.createElement("IMG");
            finalPizza.setAttribute("src", "images/final-thin-crust-pizza.png");
            e.target.appendChild(finalPizza)
            localStorage.removeItem("topping-id")
    }

    if(getToppingId.length > 3 && getToppingId.includes("base2")){
        const emptyCircle = e.target.children[0]
            e.target.innerHTML = ''
            e.target.appendChild(emptyCircle)
            const finalPizza = document.createElement("IMG");
            finalPizza.setAttribute("src", "images/final-stuffed-crust-pizza.png");
            finalPizza.setAttribute("width", "255px");
            finalPizza.style.marginTop = "42px"
            e.target.appendChild(finalPizza)
            localStorage.removeItem("topping-id")
    }

    
    document.getElementById(selectedImageId).style.width = "270px"

    if(selectedImageId=="base2"){
        document.getElementById(selectedImageId).style.width = "266px"
        document.getElementById(selectedImageId).style.marginTop = "15px"
    }
    
    else if(selectedImageId=="topping2"){
        document.getElementById(selectedImageId).style.width = "175px"
        document.getElementById(selectedImageId).style.marginTop = "64px"
    }
    else if(selectedImageId=="topping3"){
        document.getElementById(selectedImageId).style.width = "195px"
        document.getElementById(selectedImageId).style.marginTop = "86px"
    }
}