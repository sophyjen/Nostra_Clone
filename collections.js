// Popup closing window

var pop = document.querySelector(".popup")
var clos = document.getElementById("clos")

clos.addEventListener("click",()=>{
    pop.style.display="none"
})

//Selecting Side Navbar, Menu
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")

menuicon.addEventListener("click", function(){
    sidenav.style.left=0
})

closenav.addEventListener("click", function(){
    sidenav.style.left="-50%"
})


//Product Search Functionality
var prodContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = prodContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredval = event.target.value.toUpperCase()

    for(count=0; count<productlist.length;count++)
        {
            var prodname = productlist[count].querySelector("h1").textContent

            if(prodname.toUpperCase().indexOf(enteredval)<0)
                {
                    productlist[count].style.display="none"
                }
                else
                {
                    productlist[count].style.display="block"
                }
        }

})