let input=document.querySelector('#inputype');
let btn=document.querySelector('#btn');
let result=document.querySelector('#result');

btn.addEventListener("click" ,()=> {
let countryName = input.value;
        function api(){
           let  url=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
          console.log(url);
            fetch(url).then((response)=>{
                return response.json();
               
            }).then((data)=>{
               
               
result.innerHTML=`
<img src="${data[0].flags.svg}" class="flagimg">
<h2>${data[0].name.common}</h2>
<div class="details">
<h4>Capital:</h4>
<span><a href="${data[0].maps.googleMaps}">Google Map</a></span>
</div>
<div class="details">
    <h4>Capital:</h4>
    <span>${data[0].capital[0]}</span>
    </div>
    <div class="details">
    <h4>continents:</h4>
    <span>${data[0].continents}</span>
    </div>
    <div class="details">
    <h4>Currencies:</h4>
    <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
    </div>
    <div class="details">
    <h4>Population:</h4>
    <span>${data[0].population}</span>
    </div>
    <div class="details">
    <h4>languages:</h4>
    <span>${(Object.values(data[0].languages).toString().split(",").join(","))}</span>
    </div>
`;              
            }).catch((err)=>{
if(countryName==""){
    result.innerHTML=`<h3>Please Enter Valid Input!!</h3>`;
}else{
    result.innerHTML=`<h3>Please Enter Valid Country Name!!</h3>`;
}
            });
        }
        api(); 
    });
   