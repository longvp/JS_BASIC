const tabItems = document.querySelectorAll(".tab-item");
const tabPanes = document.querySelectorAll(".tab-pane");
const tabActive = document.querySelector(".tab-item.active");
const line = document.querySelector(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabItems.forEach(function(tabItem, index){
    tabItem.onmouseenter = function(){
        document.querySelector(".tab-item.active").classList.remove("active");
        document.querySelector(".tab-pane.active").classList.remove("active");

        this.classList.add("active");
        tabPanes[index].classList.add("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
    }
})