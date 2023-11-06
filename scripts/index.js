const adviceBtn = document.querySelector("button");
const advice = document.querySelector("p");
const adviceID = document.getElementById("advice-id");

const getRandomAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let adviceSlip = data.slip;
      advice.textContent = `"${adviceSlip.advice}"`;
      adviceID.textContent = adviceSlip.id.toString();
      console.log(adviceID.textContent);
    });
};

getRandomAdvice();

adviceBtn.addEventListener("click", () => {
  getRandomAdvice();
});
