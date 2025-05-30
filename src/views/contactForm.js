document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm")

  form.addEventListener("submit", async (event) => {
    event.preventDefault() // gör så att sidan inte laddar om

    const formData = new FormData(form)

    try {
      const response = await fetch("/submit-form", {
        method: "POST",
        body: formData
      })

      if (response.ok) {
        form.reset()
        const successMessage = document.createElement("p")
        successMessage.textContent = "Ansökan skickad!"
        successMessage.style.color = "green"
        form.appendChild(successMessage)
      } else {
        const errorText = await response.text()
        console.error(errorText)
      }
    } catch (error) {
      console.error("Fel vid formulärskickning:", error)
    }
  })
})