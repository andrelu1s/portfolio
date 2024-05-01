function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* Da para usar essa função comentada ou a linha acima.
    
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
 */
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatarAndre-light.png")
    img.setAttribute(
      "alt",
      "Foto de perfil André Silva light, sem barba usando camisa florida."
    )
  } else {
    img.setAttribute("src", "./assets/avatarAndre-dark.png")
    img.setAttribute(
      "alt",
      "Foto de perfil André Silva dark, sem barba usando camisa florida e sorrindo."
    )
  }
}
