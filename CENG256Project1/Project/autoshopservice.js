      function showInfo(id) {
        var info = document.getElementById(id);
        if (info.style.display === "none") {
          info.style.display = "block";
        } else {
          info.style.display = "none";
        }
      }
      function buyItem(id) {
        var info = document.getElementById(id);
        var price = info.getElementsByTagName("p")[1].textContent;
        alert("You bought your services for " + price + ".");
      }