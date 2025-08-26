document.getElementById("convertBtn").addEventListener("click", convertTemp);

function convertTemp() {
  let degrees = parseFloat(document.getElementById("degrees").value);
  let type = document.getElementById("type").value;
  let resultText = "";

  if (isNaN(degrees)) {
    document.getElementById("result").innerText = "⚠️ Please enter a valid number!";
    return;
  }

  if (type === "Celsius") {
    resultText = `${degrees} °C = ${(degrees * 9/5 + 32).toFixed(2)} °F | ${(degrees + 273.15).toFixed(2)} K`;
  } 
  else if (type === "Fahrenheit") {
    resultText = `${degrees} °F = ${((degrees - 32) * 5/9).toFixed(2)} °C | ${(((degrees - 32) * 5/9) + 273.15).toFixed(2)} K`;
  } 
  else if (type === "Kelvin") {
    resultText = `${degrees} K = ${(degrees - 273.15).toFixed(2)} °C | ${(((degrees - 273.15) * 9/5) + 32).toFixed(2)} °F`;
  }

  document.getElementById("result").innerText = resultText;
}
