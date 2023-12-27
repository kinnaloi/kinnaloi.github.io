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
        console.log(pick);
        if (data.playerId[changePosition].uid == inputValue.value) {
          if (data.playerId[changePosition].choose == "yes") {
            iconUrl = "./assets/image/verified.png";
          } else {
            iconUrl = "./assets/image/unverified.jpeg";
          }
          space += `      
             
            
                <div class="card" style="width: 18rem;">
                  <div class="card-header">
                    Member Info
                  </div>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item"> <b>${data.playerId[changePosition]["name"]} </b></li>
                    <li class="list-group-item">${data.playerId[changePosition].uid} </li>                    
                    <li class="list-group-item">Level : ${data.playerId[changePosition]["level"]}</li>
                    <li class="list-group-item">Position : ${data.playerId[changePosition].pos}</li>
                    <li class="list-group-item">Topup : <img src="${iconUrl}" style="width:40px" ></li>
                    <p>
                    <a href="index.html"><button class ="btn-primary" style="margin : 5px; border-radius: 9px ; padding: 9px;">TopUp</button></a>
                    <a href="#"><button class ="btn-primary" style="margin : 5px; border-radius: 9px ; padding: 9px;">Eidt Info</button></a>
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
        console.log(pick);
        if (data.playerId[changePosition].uid == inputValue.value) {
          if (data.playerId[changePosition].choose == "yes") {
            iconUrl = "./assets/image/verified.png";
          } else {
            iconUrl = "./assets/image/unverified.jpeg";
          }
          space += `      
             
            
                <div class="card" style="width: 18rem;">
                  <div class="card-header">
                    Member Info
                  </div>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item"> <b>${data.playerId[changePosition]["name"]} </b></li>
                    <li class="list-group-item">${data.playerId[changePosition].uid} </li>                    
                    <li class="list-group-item">Level : ${data.playerId[changePosition]["level"]}</li>
                    <li class="list-group-item">Position : ${data.playerId[changePosition].pos}</li>
                    <li class="list-group-item">Topup : <img src="${iconUrl}" style="width:40px" ></li>
                    <p>
                    <a href="index.html"><button class ="btn-primary" style="margin : 5px; border-radius: 9px ; padding: 9px;">TopUp</button></a>
                    <a href="#"><button class ="btn-primary" style="margin : 5px; border-radius: 9px ; padding: 9px;">Eidt Info</button></a>
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