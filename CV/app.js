const burger = document.querySelector(".burger")
const primary_navigation_items = document.querySelector(".primary-navigation-items")

burger.addEventListener("click", () => {
    primary_navigation_items.classList.toggle("active")
    burger.classList.toggle("active")
})