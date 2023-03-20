const value = JSON.parse(localStorage.getItem("invalidCpf"));
localStorage.removeItem("invalidCpf");
const erro = document.querySelector("#erro");

if (value.invalid) {
  console.log("INVALUD CPF");
  erro.innerHTML = `CPF INVALIDO`;
  erro.style.color = "red";
}else{
erro.innerHTML = '';
}
