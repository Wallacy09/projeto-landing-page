function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

function contato() {
const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const mensagem = document.getElementById("mensagem").value;

if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos do formulário.");
    return false;
} else {
    alert(`Sr(a) ${nome} Responderemos em 24 horas.\nAgora é só aguardar que nossos antendentes entraram em contato!`)
}
}