const ratingels = document.querySelectorAll(".rating");
const btn = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectRating = "";
ratingels.forEach((ratingEl) =>{
    ratingEl.addEventListener("click", (event)=>{
        removeActive();
        selectRating = event.target.innerText || event.target.parentNode.innerText;
        console.log(selectRating);
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");

    });
});
function removeActive() {
    ratingels.forEach((ratingel) =>{
        ratingel.classList.remove("active");
    })
}

btn.addEventListener("click", getReview);

function getReview(){

    if(selectRating != ""){
        containerEl.innerHTML = `  <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback : ${selectRating}</strong>
        <p>We'll see your feedback to improve our customer support</p>
        `;

    }

}
