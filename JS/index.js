function adicionarHabito() {
  const inputHabito = document.getElementById("inputHabito");
  const inputHorario = document.getElementById("inputHorario");
  const inputData = document.getElementById("inputData");
  const tabela = document.getElementById("tabela");

  if (inputHabito.value.trim() === "" || inputHorario.value === "" || inputData.value === "") {
    alert(
      "Poderia preencher o campo antes de adicionar? Adoraria saber qual o seu plano de hoje 😊",
      inputHabito.value = "",
      inputHorario.value = "",
      inputData.value = "",
      inputHabito.focus()
    );
  } else {
    const tr = document.createElement("tr");

    const tdHabito = document.createElement("td");
    const valorHabito = inputHabito.value.trim();
    tdHabito.innerText = valorHabito;

    const tdHorario = document.createElement("td");
    const valorHorario = inputHorario.value;
    tdHorario.innerText = valorHorario;

    const tdData = document.createElement("td");
    const valorData = inputData.value;
    tdData.innerText = valorData;

    const tdAcao = document.createElement("td");
    const btnRemover = document.createElement("button");
    btnRemover.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v1H14a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>

      </svg> Remover
    `;
    btnRemover.className = "btn-remover";

    btnRemover.onclick = function () {
      tr.remove();
    };

    const btnConcluir = document.createElement("button");
    btnConcluir.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
      </svg> Concluir
    `;
    btnConcluir.className = "btn-concluir";
    let clique = false;
    btnConcluir.onclick = function () {
      if ((clique = !clique)) {
        tdHabito.style.textDecoration = "line-through";
        tdHabito.style.opacity = "0.5";
      } else {
        tdHabito.style.textDecoration = "none";
        tdHabito.style.opacity = "1";
      }
    };


    tdAcao.appendChild(btnRemover);
    tdAcao.appendChild(btnConcluir);

    tr.appendChild(tdHabito);
    tr.appendChild(tdData);
    tr.appendChild(tdHorario);
    tr.appendChild(tdAcao);

    tabela.appendChild(tr);

    const datalist = document.getElementById("habitosSugestoes");
    const existe = [...datalist.options].some((op) => op.value === valorHabito);
    if (!existe) {
      const novaOpcao = document.createElement("option");
      novaOpcao.value = valorHabito;
      datalist.appendChild(novaOpcao);
    }

    inputHabito.value = "";
    inputData.value = "";
    inputHorario.value = "";
    inputHabito.focus();
  }
}

// slideshow de imagens ------------
let slideIndex = 0;
mostrarSlides();

function mostrarSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("ponto");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" ponto-ativo", "");
  }

  // se existir pontos, marca ativo
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " ponto-ativo";
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(mostrarSlides, 5000);
}
