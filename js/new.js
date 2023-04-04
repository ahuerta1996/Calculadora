function handler(event) {
  const value = event.target.innerText
  console.log(value)
  const display = document.getElementById("input")
  console.log(display)
  
  switch(value) {
    case "AC":
      display.innerText = ""
      break

      case "←":
      display.innerText = display.innerText.slice(0, -1)
      break
      
    case "=":
      display.innerText = eval(display.innerText)
      break
    
    default:
      display.innerText += value
  }
}

Array
  .from(
    document.getElementsByTagName("button")
  )
  .forEach(
    (td) => {
      td.addEventListener("click", handler)
    }
  )