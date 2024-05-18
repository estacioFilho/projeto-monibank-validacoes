import campoCpf from "./valida-cpf.js";
import maiorIdade from "./valida-idade.js";


const camposObrigatorios = document.querySelectorAll("[required]");

camposObrigatorios.forEach((campo) => {campo.addEventListener('blur', () => verificaCampo(campo))})


function verificaCampo(campo){
    if(campo.name == 'cpf' && campo.value.length >= 11){
         campoCpf(campo);
    }
    if(campo.name = 'idade' && campo.value !=""){
        maiorIdade(campo)
    }
}