export default function maiorIdade(campo){
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCusomValidity('O usuário não é maior de 18 anos.')
    }

}

function validaIdade(data){
    const dataAgora = new Date();
    const idade18 = new Date(data.getUTCFullYear()+ 18, data.getUTCMonth(), data.getUTCDate());

    return dataAgora >= idade18;
}