const url = 'https://password-generator18.p.rapidapi.com/generate-password';
const pass = document.getElementById("screen");
const btn = document.getElementById("btn");
const Ucase = document.getElementById("upperCase");
const Lcase = document.getElementById("lowerCase");
const num = document.getElementById("number");
const sym = document.getElementById("symbol");
const len = document.getElementById("length");
const copybtn = document.getElementById("copy");







const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '19acb71371mshab2a6900569a4ccp1c83d7jsn8250a7ed6f5a',
		'X-RapidAPI-Host': 'password-generator18.p.rapidapi.com'
	},
	body:JSON.stringify( {
		length: 10,
		numbers: true,
		symbols: false,
		lowercase: true,
		uppercase: true,
		excludeSimilarCharacters: false,
		exclude: '1',
		strict: false
	})
};

function updateBody(){
	options.body = JSON.stringify({
		length: parseInt(len.value),
		numbers: num.checked,
		symbols: sym.checked,
		lowercase: Lcase.checked,
		uppercase: Ucase.checked,
		excludeSimilarCharacters: false,
		exclude: '1',
		strict: false
	})
}

async function fetchData(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	btn.addEventListener("click",()=>{
		updateBody();
		fetch(url,options)
		.then(response=>response.json())
		.then(result =>{
			if(result.password == undefined){
				pass.innerHTML = "👉Specify Length👈"
			}
			else if(parseInt(len.value) >50){
				pass.innerHTML = "length is too long"
			}
			else{pass.innerHTML = result.password}
		})
	});
} catch (error) {
	console.error(error);
}}

fetchData()
