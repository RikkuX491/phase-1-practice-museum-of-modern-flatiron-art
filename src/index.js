const exhibitTitle = document.getElementById('exhibit-title')
const exhibitImage = document.getElementById('exhibit-image')
const exhibitDescription = document.getElementById('exhibit-description')
const ticketsBoughtElement = document.getElementById('tickets-bought')
const commentsSection = document.getElementById('comments-section')
let numOfTicketsBought

// Deliverable One
fetch("http://localhost:3000/current-exhibits")
.then(response => response.json())
.then(exhibits => {
    exhibitTitle.textContent = exhibits[0].title
    exhibitImage.src = exhibits[0].image
    exhibitDescription.textContent = exhibits[0].description
    numOfTicketsBought = exhibits[0].tickets_bought
    ticketsBoughtElement.textContent = `${numOfTicketsBought} Tickets Bought`

    exhibits[0].comments.forEach(comment => {
        addComment(comment)
    })
})

function addComment(comment){
    const pElement = document.createElement('p')
    pElement.textContent = comment
    commentsSection.appendChild(pElement)
}

// Deliverable Two
const commentForm = document.getElementById('comment-form')
commentForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newComment = event.target[0].value
    addComment(newComment)
})

// Deliverable Three
const buyTicketsButton = document.getElementById('buy-tickets-button')
buyTicketsButton.addEventListener('click', () => {
    numOfTicketsBought++
    ticketsBoughtElement.textContent = `${numOfTicketsBought} Tickets Bought`
})