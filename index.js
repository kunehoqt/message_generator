const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "You are worthy",
    "You are enough",
    "You are one of the strongest people I know.",
    "You have the best smile."

  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})