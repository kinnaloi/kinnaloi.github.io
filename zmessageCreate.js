fetch("./database/database.json")
  .then(function (respose) {
    return respose.json();
  })
  .then(function (data) {
    let detect = document.querySelector(".priceSectionNew");
    let space = " ";
    let i = 0;
    space += `<p class= "titleDiv">Select Recharge</p> <hr style="margin:10px;">`;

    for (var pick in data.freefire[0]) {
      space += `      
             
            <div>
             ${data.freefire[0][i].name} <sub> ${data.freefire[0][i].price}  Taka<sub/>
             </div>
             
            `;
      i = i + 1;
    }
    detect.innerHTML = space;
  });

//message grab from page

function buyNow() {
  var idNumber = document.querySelector(".idValue").value;
  var item = document.querySelector(".itemValue").value;
  var trxnId = document.querySelector(".transectionValue").value;
  var phoneNumber = document.querySelector(".phoneValue").value;
  var mobileBank = document.querySelector(".mobileBanking").value;

  var waLink = "https://wa.me/";
  var myPhone = "+8801755267077";
  var text =
    "Hey Please review it " +
    "%0a" +
    "Player UID : " +
    idNumber +
    "%0a" +
    "*Item* : " +
    item +
    "%0a" +
    "Phone Number : " +
    phoneNumber +
    "%0a" +
    "Transection ID : " +
    trxnId +
    "%0a" +
    "Path : " +
    mobileBank +
    "%0a";
  let url = waLink + myPhone + "?text=" + text;
  alert("Processing ...\n Press Continue to Chat");
  window.open(url, "_blank");
}
