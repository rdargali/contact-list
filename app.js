const filterInput = document.getElementById("filterInput");
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  const filterValue = document
    .getElementById("filterInput")
    .value.toUpperCase();

  const ul = document.getElementById("names");

  const li = ul.querySelectorAll("li.collection-item"); //returns array

  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName("a")[0];

    if (a.innerText.toUpperCase().indexOf(filterValue) > -1) {
      console.log(a);
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
