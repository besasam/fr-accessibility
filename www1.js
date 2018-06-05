document.querySelector("#loginbar-treasure").innerHTML = document.querySelector("#loginbar-treasure").innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
document.querySelector("#loginbar-gems").innerHTML = document.querySelector("#loginbar-gems").innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
