const key = "42635e3cbf75489f4211bf361420053f"

function colocarDadosNaTela(dados){
    console.log(dados)
    if(dados.name === undefined) {
        alert('Cidade não encontrada!')
    } else {
    document.querySelector(".cidade").innerHTML = "Clima em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".temp-max").innerHTML = Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".temp-min").innerHTML = Math.floor(dados.main.temp_min) + "°C"
    }
}

async function buscarCidade(cidade){
    const langcid = ("pt_br")
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=${langcid}&units=metric`).then( resposta => resposta.json())
    colocarDadosNaTela(dados)
   
}

function pesquisarTemperatura(){
    if(document.querySelector(".input-cidade").value !== "") {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade) 
    } else {
        alert('Você precisa digitar uma cidade!')
    }

}
