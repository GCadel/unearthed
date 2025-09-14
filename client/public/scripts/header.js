// adds code to header element

const header = document.querySelector("header")
const headerContainer = document.createElement("div")
headerContainer.className = "header-container"

// left header div
const logo = document.createElement("img")
logo.src = "../unearthed-logo.png"
logo.alt = "UnEarthed Logo"

const title = document.createElement("h1")
title.textContent = "UnEarthed"

const headerLeft = document.createElement("div")
headerLeft.className = "header-left"
headerLeft.appendChild(logo)
headerLeft.appendChild(title)

// right header div
const headerRight = document.createElement("div")
headerRight.className = "header-right"
const headerButton = document.createElement("button")
headerButton.textContent = "Home"
headerButton.addEventListener("click", (e) => {
  window.location = "/"
})

headerRight.appendChild(headerButton)
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)
