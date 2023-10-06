const input = document.querySelector('#input');
const result = document.querySelector('#result');
const rate1 = document.querySelector('#rate1');
const rate2 = document.querySelector('#rate2');

let url = 'https://v6.exchangerate-api.com/v6/87667b8610c367a546351d40/pair/'

//Получаем курс валюты
async function getRate() {
    const responce = await fetch(url);
    const data = await responce.json();
    const rate = await data;

    console.log(rate.conversion_rate);
    return rate.conversion_rate;
}

input.oninput = async function() {
    url += rate2.value + "/" + rate1.value;
    let tempRate = await getRate();
    result.value = await (input.value / tempRate).toFixed(2);
    url = 'https://v6.exchangerate-api.com/v6/87667b8610c367a546351d40/pair/';
}


rate1.oninput = async function() {
    url += rate2.value + "/" + rate1.value;
    let tempRate = await getRate();
    result.value = await (input.value / tempRate).toFixed(2);
    url = 'https://v6.exchangerate-api.com/v6/87667b8610c367a546351d40/pair/';
}

rate2.oninput = async function() {
    url += rate2.value + "/" + rate1.value;
    let tempRate = await getRate();
    result.value = await (input.value / tempRate).toFixed(2);
    url = 'https://v6.exchangerate-api.com/v6/87667b8610c367a546351d40/pair/';
}
