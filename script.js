function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
document.getElementById("lname").addEventListener("change",upperCase())