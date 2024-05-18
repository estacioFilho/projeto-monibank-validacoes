import campoCpf from "./valida-cpf.js";

const camposObrigatorios = document.querySelectorAll("[required]");
const mensagemErro = document.getElementsByClassName('mensagem-erro')[0];

camposObrigatorios.forEach((campo) => {campo.addEventListener('blur', () => verificaCampo(campo))})


function verificaCampo(campo){
    if(campo.name == 'cpf' && campo.value.length >= 11){
        return campoCpf(campo);
    }
}