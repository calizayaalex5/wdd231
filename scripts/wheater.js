const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74938569217893&lon=6.637618484750595&units=metric&appid=9e878f816280f1ddc7f113f6d7412181';

const currentTemp=document.querySelector('#current-temp')
const weatherIcon=document.querySelector('#weather-icon')
const currentDesc=document.querySelector('figcaption')

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data)
        } else {
            throw Error(await response.text());
        } 
    } catch(error) {
        console.log(error);
    }
}



function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}


apiFetch();