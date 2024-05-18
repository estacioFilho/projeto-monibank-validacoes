export default function maiorIdade(campo){
    const dataNascimento = new Date(campo.value);
    console.log(validaIdade(dataNascimento));

}

function validaIdade(data){
    const dataAgora = new Date();
    const idade18 = new Date(data.getUTCFullYear()+ 18, data.getUTCMonth(), data.getUTCDate());

    return dataAgora >= idade18;
}