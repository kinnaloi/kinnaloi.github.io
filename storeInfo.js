fetch("./database/storeInfo.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let get = document.querySelector(".storeName");
    let space = "";
    space += `
    <img src="${data[2].titleIcon}" alt="" width="30"
    height="24" class="d-inline-block align-text-top " style="margin-left: 13px;">
    ${data[0].storeName}<sup style="color: #ebd40ce7;">store</sup>`;
    get.innerHTML = space;
  });

fetch("database/storeInfo.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (storeInfo) {
    let space = "";
    let cought = document.querySelector("#fotterId");
    space += `<p style="text-align: center;">&copy; By ${storeInfo[1].poweredBy} ${storeInfo[1].year}</p>`;
    cought.innerHTML = space;
  });

//parametar # or . for id or class
function onClickLoading(name, urlAddress, type) {
  let get = document.querySelector(type);
  let space = "";
  space += `<a href="${urlAddress}" class="btn btn-primary"
  style="font-family: Copperplate, Papyrus, fantasy;">
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true">
  </span>
  ${name}
  </a>`;
  get.innerHTML = space;
}

function commingSoon() {
  alert("Comming Soon\nPlease Buy with Whatsapp ");
}
