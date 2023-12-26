function clickToMemberInfo() {
  fetch("./database/guildInfo.json")
    .then(function (respose) {
      return respose.json();
    })
    .then(function (data) {
      let inputValue = document.querySelector(".uidEnter");
      let detect = document.querySelector(".GuildShowDiv");
      let space = " ";
      let iconUrl = "assets/image/unverified.jpeg";

      // space += `<p class="titleOfShow"style="text-align = "center";>Player Info</p> <hr style="margin:10px;">`;
      let changePosition = 0;
      for (var pick in data.playerId[changePosition]) {
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
                  <li class="list-group-item"> ${data.playerId[0]["name "]} </li>
                    <li class="list-group-item">${data.playerId[changePosition].uid} </li>                    
                    <li class="list-group-item">Level : ${data.playerId[changePosition]["level "]}</li>
                    <li class="list-group-item">Position : ${data.playerId[changePosition].pos}</li>
                    <li class="list-group-item">Topup : <img src="${iconUrl}" style="width:40px" ></li>
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
