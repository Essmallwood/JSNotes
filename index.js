

const calulateTip = () => {
const amount = document.getElementById('amount').value;
const tip = document.getElementById('tip').value;

//just displaying
const result = document.getElementById('result');



const calulateTip = parseInt(amount) * (parseInt(tip)/100);

const finalBill = calulateTip + parseInt(amount);


result.innerHTML= parseInt(finalBill);




};
const btn = document.getElementById('btn');

btn.addEventListener('click', calulateTip);

