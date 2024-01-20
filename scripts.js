

const key = "45967314a51f60a8dbb0c24d5f86fee9"


function ColocarDadosNaTela (dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em: " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".txt-prev").innerHTML = dados.weather[0].description
    document.querySelector(".Umidade").innerHTML = "A umidade é de: " + dados.main.humidity + "%"
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function BuscarCidade (cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    ColocarDadosNaTela (dados)
}

function CliqueBotao (){
    const cidade = document.querySelector(".buscar-cidade").value

    BuscarCidade(cidade)
}