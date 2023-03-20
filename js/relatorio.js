const params = new URLSearchParams(window.location.href);
const cpf = params.get("cpf");
(async () => {
  const response = await fetch(
    `https://api.invertexto.com/v1/validator?token=2981|zCrLD8iVT3Wy8CRUtUP1UPiQbjvwsLbn&value=${cpf}`
  );
  const value = await response.json();
  if (!value.valid) {
    localStorage.setItem("invalidCpf", JSON.stringify({ invalid: true }));
    window.location.href = "/";
  }
})();

const nome = params.get("nome");
const rendimento = Number(params.get("rendimento"));
let aliquota = 0;
let parcela = 0;

console.log(nome, cpf, rendimento);

if (rendimento <= 22847.76) {
  aliquota = 0;
} else if (rendimento >= 22847.77 && rendimento <= 33919.8) {
  parcela = 1713.58;
  aliquota = 7.5;
} else if (rendimento >= 33919.81 && rendimento <= 45012.6) {
  parcela = 4257.57;
  aliquota = 15;
} else if (rendimento >= 45012.61 && rendimento <= 55976.16) {
  parcela = 7633.51;
  aliquota = 22.5;
} else if (rendimento > 55976.16) {
  parcela = 10432.32;
  aliquota = 27.5;
}

console.log(`${aliquota}% e valor a pagar ${parcela}`);

function showInformations() {
  const aliquotaP = document.querySelector("#aliquota");
  aliquotaP.innerHTML = `${aliquota}%`;
  const valorP = document.querySelector("#valor");
  valorP.innerHTML = `${parcela.toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
  })}`;
}
