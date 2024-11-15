const adviseID = document.getElementById('adviseID');
const quote = document.getElementById('quote');

function generateAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviseID.textContent = data.slip.id;
        quote.textContent = data.slip.advice;

        console.log(data.id);
    })
    .catch(error => {
        console.error(error)
    })
}

generateAdvice()

