document.querySelector("#user_treasure").innerHTML = document.querySelector("#user_treasure").innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
document.querySelector("#user_gems").innerHTML = document.querySelector("#user_gems").innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
