function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    var nav_items = document.getElementsByClassName("nav-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      if(x[i].id == tabName) {
        nav_items[i].className +=' active';
      } else {
        nav_items[i].className = 'nav-item';
      }
    }
    document.getElementById(tabName).style.display = "block";
  }