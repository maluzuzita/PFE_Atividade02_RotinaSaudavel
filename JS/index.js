function adicionarHabito(){
    const input = document.getElementById("inputHabito");
    const tabela = document.getElementById("tabela");

    if(input.value.trim() === ""){
        alert("Poderia preencher o campo antes de adicionar? Adoraria saber qual o seu plano de hoje 😊");
    }

    const tr = document.createElement("tr");
    const tdTarefa = document.createElement("td");
    tdTarefa.innerText = input.value;

    const tdAcao = document.createElement("td");
    const btn = document.createElement("button");
    btn.innerText = "Remover";
    btn.className = "btn-remover";

    btn.onclick = function () {
        tr.remove();
    }

    tdAcao.appendChild(btn);

    tr.appendChild(tdTarefa);
    tr.appendChild(tdAcao);
    
    tabela.appendChild(tr);

    input.value = "";
    input.focus();
}