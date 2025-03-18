document.addEventListener("DOMContentLoaded", function () {
    const nomeInput = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultadoLista = document.getElementById("resultado");
    let nomes = [];

    window.adicionarAmigo = function () {
        const nome = nomeInput.value.trim();
        if (nome === "" || nomes.includes(nome)) {
            alert("Nome inválido ou já adicionado!");
            return;
        }
        nomes.push(nome);
        atualizarLista();
        nomeInput.value = "";
    };

    function atualizarLista() {
        listaAmigos.innerHTML = "";
        nomes.forEach((nome) => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (nomes.length < 2) {
            alert("Adicione pelo menos 2 participantes!");
            return;
        }
        let embaralhado = [...nomes].sort(() => Math.random() - 0.5);
        let pares = embaralhado.map((pessoa, i) => ({
            amigo: pessoa,
            sorteado: embaralhado[(i + 1) % embaralhado.length]
        }));
        mostrarResultado(pares);
    };

    function mostrarResultado(pares) {
        resultadoLista.innerHTML = "";
        pares.forEach((par) => {
            const li = document.createElement("li");
            li.textContent = `${par.amigo} → ${par.sorteado}`;
            resultadoLista.appendChild(li);
        });
    }

    window.reiniciarLista = function () {
        nomes = [];
        listaAmigos.innerHTML = "";
        resultadoLista.innerHTML = "";
    };

    nomeInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            adicionarAmigo();
        }
    });
});
