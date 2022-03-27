const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_value = document.getElementById('temp_real_value');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === "") {
        city_name.innerText = `Please Write City Name Before Search`;
        datahide.classList.add('data_hide');
    }else {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d3fce2b1754d7f87ca9096fb20f9011e`;
            const response = await fetch(url);
            const data =  await response.json();
            const arrData = [data];
            temp_real_value.innerText = arrData[0].main.temp;
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            const tempMood = arrData[0].weather[0].main;

            // Condition to check sunny or cloudy

            if(tempMood =="Clear") {
                temp_status.innerHTML = "<i class='fa fa-sun' style='color:#eccc68;'></i>";
            }else if (tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fa fa-cloud' style='color:#f1f2f6;'></i>";
            }else if(tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fa fa-cloud-rain' style='color:#a4b0be;'></i>";
            }else {
                temp_status.innerHTML = "<i class='fa fa-sun' style='color:#eccc68;'></i>";
            }

            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Please Enter City Name Properly`;
            datahide.classList.add('data_hide');
        }
        
    }

}
submitBtn.addEventListener('click', getInfo);