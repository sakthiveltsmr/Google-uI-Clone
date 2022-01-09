const search = document.querySelector(".search");
const form = document.querySelector("#searchform");
form.addEventListener("sumbmit", (data) => {
  console.log(data);
  data.preventDefault();
  let searchquery = search.value;
  if (searchquery.length == 0) {
    console.log("data");
    return false;
  } else {
    console.log("data received");
    window.location = `http://www.google.com/search?q=${searchquery}`;
  }
});
