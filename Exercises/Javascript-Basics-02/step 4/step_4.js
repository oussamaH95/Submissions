function f1() {
  if (confirm("are you sure you want to clear ???")) {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
  }
}
