const renderGift = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop())

  const res = await fetch(`/gifts`)
  const data = await res.json()

  const giftContent = document.getElementById("gift-content")
  let gift = data.find((gift) => gift.id === requestedID)

  if (gift) {
    const nameElem = document.getElementById("name")
    const submittedByElem = document.getElementById("submittedBy")
    const pricePointElem = document.getElementById("pricePoint")
    const audienceElem = document.getElementById("audience")
    const descriptionElem = document.getElementById("description")
    const imageElem = document.getElementById("image")

    document.title = gift.name
    imageElem.src = gift.image
    nameElem.textContent = `${gift.name}`
    submittedByElem.textContent = `Submitted by: ${gift.submittedBy}`
    pricePointElem.textContent = `Price: ${gift.pricePoint}`
    audienceElem.textContent = `Great For: ${gift.audience}`
    descriptionElem.textContent = `${gift.description}`
  } else {
    const noGiftMsg = document.createElement("h2")
    noGiftMsg.textContent = "No Gifts Available 😞"
    giftContent.replaceChildren([])
    giftContent.appendChild(noGiftMsg)
  }
}

renderGift()
