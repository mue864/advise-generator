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

document.getElementById("bounceButton").addEventListener("click", function () {
  const button = this;
  
  // Remove the class if it's already applied to allow re-trigger
  button.classList.remove("bounce");
  
  // Trigger reflow to restart the animation
  void button.offsetWidth; 
  
  // Add the bounce class
  button.classList.add("bounce");
});


