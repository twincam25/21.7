let myKey = localStorage.getItem("myKey");
let data = localStorage.getItem("date");
let time = localStorage.getItem("time");

if (myKey) {
    alert(`Добрый день, ${myKey}! Давно не заходили к нам. В последний раз вы были у нас ${data} ${time}`)
} else {
  let name = prompt("Добро пожаловать! Пожалуйста, представьтесь.");
  myKey = localStorage.setItem("myKey", name);
  let now = new Date().toLocaleDateString();
  data = localStorage.setItem("date", now);
  let now2 = new Date().toLocaleTimeString().slice(0,-3);
  time = localStorage.setItem("time", now2);
}
// localStorage.clear();