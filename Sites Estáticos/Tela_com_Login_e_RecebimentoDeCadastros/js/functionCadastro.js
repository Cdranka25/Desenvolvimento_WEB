//aguarda o carregamento completo do DOM antes de adicionar o evento ao botão "Listar Cadastros"
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ListarCadastros").addEventListener("click", buscarDados);
});

// busca os dados utilizando o arquivo JSON do link abaixo
function buscarDados() {
    fetch('https://bu.furb.br/mcardoso/progWeb/geraJSON.php')
        .then(response => response.json())
        .then(data => {
            const authorsList = document.getElementById('authors');
            let tabelaHTML = `
            <table class="tabela-cadastros" border="1">
                <tr>
                    <th class='dadoExcluirTopo' ></th>
                    <th class='dadoIDTopo' >ID</th>
                    <th class='dadoNomeTopo' >Nome</th>
                    <th class='dadoDepartamentoTopo' >Departamento</th>
                    <th class='dadoEnderecoTopo' >Endereço</th>
                    <th class='dadoEmailTopo' >Email</th>
                </tr>
            `;

            data.forEach(item => {
                tabelaHTML += `
                <tr>
                    <td class='dadoExcluir'>
                        <a href="../img/complementar/lixo.png" class="imgLixo">
                            <img src="../img/complementar/lixo.png" class ="imagemLixo" alt="Excluir" style="width: 13px; height: 13px;">
                        </a>
                    </td>
                    <td class='dadoID'>${item.id}</td>
                    <td class='dadoNome'>${item.nome}</td>
                    <td class='dadoDepartamento'>${item.departamento}</td>
                    <td class='dadoEndereco'>${item.endereco}</td>
                    <td class='dadoEmail'>${item.email}</td>
                </tr>
                `;
            });

            tabelaHTML += `</table>`;
            authorsList.innerHTML = tabelaHTML;

            if (!document.getElementById("incluirLinha")) {
                const botoesContainer = document.createElement("div");
                botoesContainer.style.display = "flex";
                botoesContainer.style.gap = "10px";
                botoesContainer.style.width = "100%";
                botoesContainer.style.margin = "0 auto 10px";
                
                // Centraliza o container horizontalmente
                botoesContainer.style.justifyContent = "center";
                
                // Centraliza o container verticalmente
                botoesContainer.style.alignItems = "center";
                
                document.body.appendChild(botoesContainer);

                // Botão Incluir Linha
                const incluirLinhaBtn = document.createElement("button");
                incluirLinhaBtn.id = "incluirLinha";
                incluirLinhaBtn.innerText = "Incluir Linha";
                incluirLinhaBtn.addEventListener("click", incluirLinha);

                // Botão Confirmar, inicialmente oculto
                const confirmarBtn = document.createElement("button");
                confirmarBtn.id = "confirmar";
                confirmarBtn.innerText = "Confirmar";
                confirmarBtn.style.display = "none"; // Oculto inicialmente
                confirmarBtn.addEventListener("click", confirmarAcao);

                // Adiciona os botões ao contêiner
                botoesContainer.appendChild(incluirLinhaBtn);
                botoesContainer.appendChild(confirmarBtn);

                document.querySelector(".tableCadastro").appendChild(botoesContainer);
            }


            function confirmarAcao() {
                console.log("Ação de confirmar executada!");
            }

            function incluirLinha() {
                console.log("Linha incluída!");
                document.getElementById("confirmar").style.display = "inline-block";
            }
        })
        .catch(error => console.error('Erro ao buscar os dados:', error));
}



