fetch("./database/database.json")
  .then(function (respose) {
    return respose.json();
  })
  .then(function (data) {
    let detect = document.querySelector(".priceSection");
    let space = " ";
    let i = 0;
    space += `<p class= "titleDiv">Select Recharge</p> <hr style="margin:10px;">`;

    for (var pick in data.freefire[0]) {
      space += `      
             <button type="button" class="buttonClass" name = '${data.freefire[0][i]}'>
            <div>
             ${data.freefire[0][i].name} <sub> ${data.freefire[0][i].price}  Taka<sub/>
             </div>
             </button>
            `;
      i = i + 1;
    }
    detect.innerHTML = space;
  });

//New database for pubg
fetch("./database/database.json")
  .then(function (respose) {
    return respose.json();
  })
  .then(function (data) {
    let detect = document.querySelector(".priceSectionPubg");
    let space = " ";
    let i = 0;
    for (var pick in data.pubg[0]) {
      space += `
        <button type="button" class="buttonClass">
            <div>
             $${data.pubg[0][i].name} <sub> ${data.pubg[0][i].price}  Taka<sub/>
             </div>
             </button>
    `;
      i++;
    }
    detect.innerHTML = space;
  });

//weekly price
fetch("./database/database.json")
  .then(function (respose) {
    return respose.json();
  })
  .then(function (data) {
    let detect = document.querySelector("#weeklyPrice");
    let space = " ";
    space += `Price : ${
      data.freefire[0][Object.keys(data.freefire[0]).length - 2].price
    } Taka`;
    detect.innerHTML = space;
  });
//monthly
fetch("./database/database.json")
  .then(function (respose) {
    return respose.json();
  })
  .then(function (data) {
    let detect = document.querySelector("#monthlyPrice");
    let space = " ";
    space += `Price : ${
      data.freefire[0][Object.keys(data.freefire[0]).length - 1].price
    } Taka `;

    detect.innerHTML = space;
  });

//shell fetch
fetch("./database/database.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let coughts = document.querySelector(".priceSectionForShell");
    let space = " ";
    let i = 0;
    for (var pick in data.shell) {
      space += `
    <button type="button" class="buttonClass">
            <div>
             ${data.shell[i].name} <sub>${data.shell[i].price} Taka</sub>
             </div>
             </button>
    
    `;
      console.log(data);
      i++;
    }
    coughts.innerHTML = space;
  });

//new page
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
