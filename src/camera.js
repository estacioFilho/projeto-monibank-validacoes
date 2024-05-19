const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

const capturarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");

const criarConta = document.querySelector("[data-enviar]");
let imagemURL = '';

botaoIniciarCamera.addEventListener('click', async function (){

    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio:false});

    botaoIniciarCamera.style.display = "none";

    campoCamera.style.display = "block";
    video.srcObject = iniciarVideo;
})

capturarFoto.addEventListener('click', () => {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    imagemURL = canvas.toDataURL("image/jpeg");
    campoCamera.style.display = "none";
    mensagem.style.display = "block";
});

criarConta.addEventListener('click', () => {
    localStorage.removeItem('loglevel');
    const listaCadastos = localStorage.getItem('cadastroUsuarios');
    console.log(listaCadastos)

    const converteString = JSON.parse(listaCadastos);

    converteString.imagem = imagemURL;
    localStorage.setItem('cadastroUsuarios', JSON.stringify(converteString));
    location.href = "../pages/abrir-conta-form-3.html"

})

