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
    
}
