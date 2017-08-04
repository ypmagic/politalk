var form = document.querySelector(".talk-box");
console.log(data);
form.addEventListener("submit", function() {
  var text = document.querySelector(".input-box").value.toLowerCase();
  var clintonResponse = document.getElementsByClassName("clinton-talk");
  var originalClintonText = clintonResponse[0].innerHTML;
  document.querySelector(".input-box").value = "";
  data[0]["queries"].forEach(function(topic) {
    topic["keywords"].forEach(function(keyword) {
      if(text.includes(keyword)) {
        clintonResponse[0].innerHTML = topic["response"];
      }
    });
  });
  if (clintonResponse[0].innerHTML === originalClintonText) {
    clintonResponse[0].innerHTML = data[0]["fallback"];
  }
});

function unloadJS(scriptName) {
  var js = document.getElementById("data-stuff");
  js.parentNode.removeChild(js);
}
unloadJS("data-stuff");
