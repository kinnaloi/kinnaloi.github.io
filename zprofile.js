function id_login() {
  fetch("database/memberLogin.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var userId = document.querySelector(".userClass").value;
      var userPw = document.querySelector(".pwClass").value;
      let changePosition = 0;

      let space = "";
      let detect = document.querySelector(".changeJs");
      space += ``;
      detect.innerHTML = space;
      for (var pick in data.loginGuild) {
        if (data.loginGuild[changePosition].userid == userId) {
          space += `
              <div class="card position-absolute top-50 start-50 translate-middle" style="width: 18rem;
              background-color: gold;color: black; border-radius: 10px; 
              ">
            <img src="${data.loginGuild[changePosition].img}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h3 style = "text-align:center">${data.loginGuild[changePosition].game_name}</h3>
                <hr>
                <p class="card-text">${data.loginGuild[changePosition].pos}
                </p>
                <hr>
                 <table style="width:100%; text-align: center;">
                      <tr>
                      <th>Money </th> 
                      <td>${data.loginGuild[changePosition].moneySpend}</td>

                      </tr>
                      <tr>
                        <th>Diamond </th>
                        <td>${data.loginGuild[changePosition].diamondSpend}</td>

                      </tr>
                      <tr>
                      <th>Monthly </th>
                        <td>${data.loginGuild[changePosition].monthly} times</td>
                      </tr>
                      <tr>
                      <th>Weekly </th>
                        <td>${data.loginGuild[changePosition].weekly} times</td>
                      </tr>
                     
                </table>
                </p>
                <a href="index.html" class="btn btn-primary" role="button"
                    style="background-color: #c6ff702c; color: black;"><img src="
                                        https://cdn-icons-png.flaticon.com/512/126/126492.png" alt="" width="11px"
                        style="margin-bottom: 4px ;overflow: hidden;">
                    HOME</a>
            </div>
        </div>
              `;
          break;
        }
        changePosition = changePosition + 1;
      }
      if (space.length == 0) {
        alert(
          "please check your uid or Login key\nif you don't have login key, please purchase some from this website\nhttps://www.kinnaloi.github.io/"
        );
        window.location.reload();
      } else {
        detect.innerHTML = space;
      }
    });
}
