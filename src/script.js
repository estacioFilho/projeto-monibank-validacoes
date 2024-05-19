import campoCpf from "./valida-cpf.js";
import maiorIdade from "./valida-idade.js";


const camposObrigatorios = document.querySelectorAll("[required]");
const furmulario = document.querySelector("[data-formulario]");

camposObrigatorios.forEach((campo) => campo.addEventListener('blur', () => verificaCampo(campo)))
camposObrigatorios.forEach((campo) => campo.addEventListener('invalid', event => event.preventDefault()))

const tiposErros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo){
    // campo.setCustomValidity('');
    let mensagem = "";
    if(campo.name == 'cpf' && campo.value.length >= 11){
         campoCpf(campo);
    }
    if(campo.name =='idade' && campo.value !== ""){
        maiorIdade(campo)
    }
    tiposErros.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })
    //parentNode procura o elemento com nome do seletor mais proximo, nesse caso a tag span com a class mensagem-erro mais proxima.
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorInput = campo.checkValidity();
    if(!validadorInput){
        mensagemErro.textContent = mensagem;
    }else{
        mensagemErro.textContent = "";
    }
}
console.log(camposObrigatorios)
furmulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const cadastros = {
        "nome": event.target.elements["nome"].value,
        "email": event.target.elements["email"].value,
        "rg": event.target.elements["rg"].value,
        "cpf": event.target.elements["cpf"].value,
        "aniversario": event.target.elements["aniversario"].value
    }

        
    


    localStorage.setItem("cadastroUsuarios", JSON.stringify(cadastros));

    location.href = "../pages/abrir-conta-form-2.html";
})
