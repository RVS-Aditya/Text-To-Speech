document.querySelector("button").addEventListener("click", () => {
  let textinput = document.querySelector(".textinput").value;
  responsiveVoice.speak(textinput, "UK English Female")
  let previous = document.querySelector("#previous").innerHTML = "Previous- " + textinput + "<br/>";
  document.querySelector(".textinput").value = "";
});
