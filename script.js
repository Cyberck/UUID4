let bgg = document.querySelector('.header__content-wanted'),
    back = document.querySelector('body'),
    font = document.querySelector('.header__content-rightTitle'),
    ont = document.querySelector('.header__content-rightStory'),
    soName = document.querySelector('.header__content-name'),
    born = document.querySelector('.header__content-born'),
    loca = document.querySelector('.header__content-location'),
    hotin = document.querySelector('.header__content-married')
bgg.addEventListener('click', function () {
    if (bgg.innerHTML == 'WANTED') {
        bgg.innerHTML = 'DANGER';
        bgg.style.color = 'white'
        back.style.background = 'olive';
        font.style.color = 'white';
        ont.style.color = 'white';
        soName.style.color = 'white';
        born.style.color = 'white';
        loca.style.color = 'white';
        hotin.style.color = 'white';
    } else {
        bgg.innerHTML = 'WANTED';
        bgg.style.color = 'grey';
        back.style.background = 'white';
        font.style.color = 'black';
        ont.style.color = 'black';
        soName.style.color = 'black';
        born.style.color = 'black';
        loca.style.color = 'black';
        hotin.style.color = 'black';
    }
});



let hourNumber = document.querySelector('.hours'),
    minNumber = document.querySelector('.minutes');

function clock() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours()

    hourNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    minNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

}
clock();


// const CURRENCY__CODE = {
//     USD: 'USD',
//     EUR: 'EUR',
//     RUB: 'RUB',    
// };

// let getToday = () => {
//     let date = new Date();

//     return `${date.getFullYear()}-${getMonth() + 1}-${date.getDate()}}`;
// };

// let renderContent = (response) => {
//     let { data } = response;
//     let content = document.getElementById('data').innerHTML;     
//     Object
//         .keys(data.rates)
//         .map((currencyCode) =>{
//             content += `
//             <tr>
//                 <td> ${data.base}</td>
//                 <td> ${data.base[currencyCode].toFixed(2)}</td>
//             </td>
//             `;
//             document.getElementById('data').innerHTML = content;
//         })
// };

// Promise
//     .all([
//         axios.get(`http://api.exchangeratesapi.io/v1/ latest? access_key = 6e5dd92a8f52253dbd37ee04ae372676${getToday}?base=${CURRENCY__CODE.USD}&symbols=${CURRENCY__CODE.RUB}`),
//         axios.get(`http://api.exchangeratesapi.io/v1/ latest? access_key = 6e5dd92a8f52253dbd37ee04ae372676${getToday}?base=${CURRENCY__CODE.EUR}&symbols=${CURRENCY__CODE.RUB}`),
//     ])
//     .then((values) => values.forEach(renderContent));

// axios
//     .get(`http://api.exchangeratesapi.io/v1/ latest? access_key = 6e5dd92a8f52253dbd37ee04ae372676${getToday}?base=USD&symbols=GBP`)
//     .then((response) => {
//         console.log(response);
//     });    