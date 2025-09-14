// adds code to main element
const renderGifts = async () => {
  const res = await fetch("/gifts")
  const data = await res.json()

  const maincontent = document.getElementById("main-content")

  if (data) {
    data.map((gift) => {
      const giftDiv = document.createElement("div")
      giftDiv.className = "card"

      // Top container
      const topContainer = document.createElement("div")
      topContainer.className = "top-container"
      topContainer.style.backgroundImage = `url(${gift.image})`

      // Bottom container
      const bottomContainer = document.createElement("div")
      bottomContainer.className = "bottom-container"
      const giftName = document.createElement("h3")
      giftName.textContent = `${gift.name}`
      const giftPrice = document.createElement("p")
      giftPrice.textContent = `Point: ${gift.pricePoint}`
      const giftAudience = document.createElement("p")
      giftAudience.textContent = `Great for: ${gift.audience}`
      const readMoreLink = document.createElement("a")
      readMoreLink.href = `/gifts/${gift.id}`
      readMoreLink.role = "button"
      readMoreLink.textContent = "Read More >"

      bottomContainer.appendChild(giftName)
      bottomContainer.appendChild(giftPrice)
      bottomContainer.appendChild(giftAudience)
      bottomContainer.appendChild(readMoreLink)

      giftDiv.appendChild(topContainer)
      giftDiv.appendChild(bottomContainer)

      maincontent.appendChild(giftDiv)
    })
  } else {
    const noGiftsMessage = document.createElement("h2")
    noGiftsMessage.textContent = "No Gifts Available 😞"

    maincontent.appendChild(noGiftsMessage)
  }
}

renderGifts()
