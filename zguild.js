async function clickToMemberInfo() {
  //async use for wait fetch finish
  await fetch("./database/guildInfo.json") //await use for wait fetch finish
    .then(function (respose) {
      // await isn't use this line because it's not fetch finish
      return respose.json();
    })
    .then(function (data) {
      let inputValue = document.querySelector(".uidEnter");
      let detect = document.querySelector(".GuildShowDiv");
      let space = " ";
      let iconUrl = "assets/image/unverified.jpeg";

      // space += `<p style="text-align = "center";position : absulote;>Player Info</p> <hr style="margin:10px;">`;
      let changePosition = 0;

      for (var pick in data.playerId) {
        if (data.playerId[changePosition].uid == inputValue.value) {
          console.log(inputValue.value);
          if (data.playerId[changePosition].choose == "yes") {
            iconUrl = "./assets/image/verified.png";
            diplayValue = "none";
            congr = "block";
            clr = "gold";
          } else {
            iconUrl = "./assets/image/unverified.jpeg";
            diplayValue = "block";
            congr = "none";
            clr = "white";
          }
          space += `      
             
            
                <div class="card" style="width: 18rem; background-color: ${clr}">
                <img src="${data.playerId[changePosition].img}" class="card-img-top"
                ">
                <div class="card-body">
                  <h5 class="card-title" style =" color="${clr}">${data.playerId[changePosition]["name"]} <sub> </sub></h5>
                  
                </div>
                  
                  <ul class="list-group list-group-flush }">
                  <li class="list-group-item"> <b></b></li>
                    <li class="list-group-item">${data.playerId[changePosition].pos} </li>                    
                    <li class="list-group-item">${data.playerId[changePosition].uid} </li>                    
                    <li class="list-group-item">Level : ${data.playerId[changePosition]["level"]}</li>
                    <li class="list-group-item">Topup : <img src="${iconUrl}" style="width:40px" ></li>
                    <p >
                    <a href="index.html" style="text-decoration:none"><button class ="btn-success"  style="display:${diplayValue};margin-left: 20px;margin-top : 25px; border-radius: 9px ; padding: 9px;">TopUp Now</button></a>
                    <a href="#" style="text-decoration:none"><button class ="btn-success" style="display:${congr}; margin-left: 20px;margin-top : 25px; border-radius: 9px ; padding: 9px;"> Thanks for Shopping with us  .</button></a>
                    </p>
                  </ul>
                </div>

                
                
                
                
            `;
        }
        changePosition = changePosition + 1;
      }
      detect.innerHTML = space;
      space = "";
    });
}

fetch("./database/guildInfo.json") //await use for wait fetch finish
  .then(function (respose) {
    // await isn't use this line because it's not fetch finish
    return respose.json();
  })
  .then(function (data) {
    let detect = document.querySelector(".playersListSection");
    let space = " ";
    let iconUrl = "assets/image/unverified.jpeg";

    // space += `<p style="text-align = "center";position : absulote;>Player Info</p> <hr style="margin:10px;">`;
    let changePosition = 0;
    let diplayValue = "block";
    let clr = "black";
    let congr = "none";
    let clsName = "whiteCard";
    for (var pick in data.playerId) {
      if (data.playerId[changePosition].choose == "yes") {
        iconUrl = "./assets/image/verified.png";
        diplayValue = "none";
        congr = "block";
        clr = "gold";
        clsName = "goldCard";
      } else {
        iconUrl = "./assets/image/unverified.jpeg";
        diplayValue = "block";
        congr = "none";
        clr = "silver";
      }
      space += `      
             
            
                <div class="card ${clsName}" style="width: 18rem; background-color: ${clr}">
                <img src="${data.playerId[changePosition].img}" class="card-img-top"
                ">
                <div class="card-body">
                  <h5 class="card-title" >${data.playerId[changePosition]["name"]}</h5>
                  
                </div>
                  
                  <ul class="list-group list-group-flush">

                    <li class="list-group-item">${data.playerId[changePosition].pos} </li>                    
                    <li class="list-group-item">${data.playerId[changePosition].uid} </li>                    
                    <li class="list-group-item">Level : ${data.playerId[changePosition]["level"]}</li>
                    <li class="list-group-item">Topup : <img src="${iconUrl}" style="width:40px" ></li>
                    <p >
                    <a href="./freefire.html" style ="
                    text-decoration: none" ><button class ="btn-danger"  style="display:${diplayValue};margin-left: 20px;margin-top : 25px; border-radius: 9px ; padding: 9px;">TopUp Now</button></a>
                    <button class ="btn-success" style="display:${congr}; margin-left: 20px;margin-top : 25px; border-radius: 9px ; padding: 9px;">Thanks for Shopping with us</button>
                    </p>
                  </ul>
                </div>

                
                
                
                
            `;
      changePosition = changePosition + 1;
    }

    detect.innerHTML = space;
    space = "";
  });
