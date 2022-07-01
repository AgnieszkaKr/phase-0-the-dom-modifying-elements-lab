// Write your code here!
const mainRemove = document.querySelector('main')
mainRemove.remove()

let newHeader = document.createElement('h1')
// const header = newHeader.setAttribute('#victory')
newHeader.setAttribute("id", "victory")
newHeader.textContent = 'Me is the champion ..'
document.body.append(newHeader)


// document.querySelector(newHeader).textContent = 'Agnes is the champion"';