function GetElement(id) {
  const elemnt = document.getElementById(id);
  return elemnt;
}
document.getElementById("card-btn-1").addEventListener("click", function () {
  const title = GetElement("card-title-1").innerText;
  const price = GetElement("card-price-1").innerText;
  //total price ta dhorlam
  const totalPrice = GetElement("total-Price").innerText;
  //calculate korlam
  const currentTotal = Number(price) + Number(totalPrice);
  //price update korlam
  GetElement("total-Price").innerText = currentTotal.toFixed(2);
  //cart container ke dhorlam
  const cardcontainer = GetElement("card-container");
  //ekta div banalam
  const NewCard = document.createElement("div");
  NewCard.innerHTML = `<div class="flex justify-between p-4">
             <img src="./assets/kitchen-1.png" class="w-10" alt="">
            <div>
             <h2 class="font-bold">${title}</h2>
             <h2 class="">${price}</h2>
            </div>
          </div>`;
  //cartcontainer e add koram
  cardcontainer.append(NewCard);
});
//////////////////////////////////////////////////////////////////////////
// traverse technique
///////////////////////////////////////////////////////////////////////////
const cardBTn = document.getElementsByClassName("card-btn");
for (let cardButton of cardBTn) {
  cardButton.addEventListener("click", function () {});
}
