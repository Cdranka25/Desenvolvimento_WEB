document.addEventListener("DOMContentLoaded", function () {

    const palavraSecreta = "ANEXO";  // A palavra correta é "anexo"
    const input = document.getElementById("inputTexto");
    const buttonConfirmar = document.getElementById("separar");
    const buttonReiniciar = document.getElementById("reiniciar");
    const titulo = document.getElementById("tituloJogo");
    const audioAcerto = new Audio('audio/Bugle Tune.mp3');
    const audioQuase = new Audio('audio/Metallic Clank.mp3');  
    const audioFim = new Audio('audio/533034__evretro__8-bit-game-over-soundtune.wav');

    let tentativaAtual = 0;

    function validarPalpite() {
        const palpite = input.value.toUpperCase();
        console.log(`Tentativa: ${palpite}`); // Debugging

        if (palpite.length !== 5) {
            audioQuase.play();
            alert("Digite uma palavra de 5 letras.");
            return;
        }

        const linha = document.querySelectorAll("table tr")[tentativaAtual];

        for (let i = 0; i < 5; i++) {
            const celula = linha.children[i];
            celula.textContent = palpite[i];

            if (palpite[i] === palavraSecreta[i]) {
                celula.style.backgroundColor = "green";  // Cor correta e posição correta
            } else if (palavraSecreta.includes(palpite[i])) {
                celula.style.backgroundColor = "yellow"; // Cor correta, mas posição incorreta
            } else {
                celula.style.backgroundColor = "grey";  // Letra incorreta
            }
        }

        if (palpite !== palavraSecreta) {
            audioQuase.play();
        }

        if (palpite === palavraSecreta) {
            audioAcerto.play();
            titulo.textContent = "Parabéns!";
            titulo.style.color = "green";

            for (let i = 0; i < 5; i++) {
                linha.children[i].classList.add("correto");
            }
        } else {
            tentativaAtual++;
            if (tentativaAtual === 6) {
                titulo.textContent = "Game Over";
                titulo.style.color = "red";

                audioFim.play();
            }
        }

        input.value = "";
    }

    function reiniciarJogo() {
        const linhas = document.querySelectorAll("table tr");
        linhas.forEach((linha) => {
            for (let i = 0; i < 5; i++) {
                const celula = linha.children[i];
                celula.textContent = "";
                celula.style.backgroundColor = "";
                celula.classList.remove("correto");
            }
        });

        tentativaAtual = 0;
        input.value = "";
        titulo.textContent = "Palavra Secreta"; 
    }

    buttonConfirmar.addEventListener("click", validarPalpite);
    buttonReiniciar.addEventListener("click", reiniciarJogo);
    

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            validarPalpite();
        }
    });
});
