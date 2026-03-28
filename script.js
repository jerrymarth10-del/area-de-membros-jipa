document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const welcomeText = document.getElementById("welcomeText");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const senha = document.getElementById("senha").value.trim();
      const comprou = localStorage.getItem("comprou");

      if (!comprou) {
        alert("Acesso liberado somente após a compra.");
        return;
      }

      if (nome === "" || senha === "") {
        alert("Preencha nome e senha para continuar.");
        return;
      }

      localStorage.setItem("logado", "true");
      localStorage.setItem("alunoNome", nome);
      window.location.href = "membros.html";
    });
  }

  if (window.location.pathname.includes("membros.html")) {
    const logado = localStorage.getItem("logado");
    const nome = localStorage.getItem("alunoNome");

    if (logado !== "true") {
      window.location.href = "index.html";
      return;
    }

    if (welcomeText) {
      welcomeText.textContent = nome ? `Bem-vindo(a), ${nome}!` : "Bem-vindo(a)!";
    }
  }
});

function logout() {
  localStorage.removeItem("logado");
  localStorage.removeItem("alunoNome");
  window.location.href = "index.html";
}
