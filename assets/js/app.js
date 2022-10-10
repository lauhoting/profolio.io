// Close hamburger menu when a link is clicked

// Select nav links
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(`#${tab.dataset.tabTarget}`)
    console.log(tabContents)
    tabContents.forEach(tabContent => {

      tabContent.style.display = "none"
    })

    target.style.display = "block"
  })
})

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});