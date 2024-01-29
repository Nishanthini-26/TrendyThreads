var sidenav=document.querySelector(".side-navbar")


function showNavbar()
{
    sidenav.style.left="0"
}

function closeNavbar()
{
    sidenav.style.left="-60%"
}


function subscribe(){
    alert("Thanks for Subscribing");
    document.getElementById("demo").textContent="Subscribed"
}

