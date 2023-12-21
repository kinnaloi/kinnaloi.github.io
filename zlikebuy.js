fetch("./database/likes.json")
  .then(function (respose) {
    return respose.json();
  })
  .then(function (data) {
    let detect = document.querySelector(".likesSection");
    let space = " ";
    let i = 0;
    space += `<p class= "titleDiv">Select Recharge</p> <hr style="margin:10px;">`;

    for (var pick in data.like) {
      space += `      
             <button type="button" class="buttonClass" name = '${data.like[0][i]}'
            <div
            style="
             box-shadow: 5px 5px black;
             border: 1px solid black;
            border-radius: 6px;
            padding: 1px font-size: 30px;
            margin: 5px; 
            "
            
            >
            <p><b>Like Count</b> : <span style = "color :red ">${data.like[i].name} Likes</span> </p>
            <p><b>Time </b>: <span style ="color : green">${data.like[i].time}</p></span>
            <p><b>price </b>: <span style ="color : #f55707">${data.like[i].price} taka</p></span>
             </div>
             </button>
            `;
      i = i + 1;
    }
    detect.innerHTML = space;
  });
function buyNow() {
  var accType = document.getElementsByClassName(".accType").value;
  var userName = document.getElementsByClassName(".user").value;
  var passWord = document.getElementsByClassName(".pass").value;
  var item = document.querySelector(".itemValue").value;
  var trxnId = document.querySelector(".transectionValue").value;
  var phoneNumber = document.querySelector(".phoneValue").value;
  var mobileBank = document.querySelector(".mobileBanking").value;
  var waLink = "https://wa.me/";
  var myPhone = "+8801755267077";

  var text =
    "*Hey Please review it* " +
    "%0a" +
    "*Account Type* : _" +
    accType +
    "_" +
    "%0a" +
    "*Username* : _" +
    userName +
    "_" +
    "%0a" +
    "*Password * : _" +
    passWord +
    "_" +
    "%0a" +
    "*Item* : " +
    item +
    "%0a" +
    "*Phone Number* : " +
    phoneNumber +
    "%0a" +
    "*TransectionID* : " +
    trxnId +
    "%0a" +
    "*Path* : " +
    mobileBank +
    "%0a";
  let url = waLink + myPhone + "?text=" + text;
  if (
    item.length == 0 ||
    trxnId.length == 0 ||
    passWord.length == 0 ||
    accType.length == 0
  ) {
    alert(" Proper Information Missing");
  } else {
    window.open(url, "_blank");
  }
}
