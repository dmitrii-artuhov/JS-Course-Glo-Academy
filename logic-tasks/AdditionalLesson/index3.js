const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}

const countryArr = {
	rus: 'Россия',
	uk: 'Украина',
	bel: 'Белорусь',
	jap: 'Япония'
}

let selectCountry = document.querySelector('#country');
let selectCity = document.querySelector('#city');
let result = document.querySelector('.result');

let countryValue = null;

selectCity.style.opacity = 0;

function clearSelectOptions() {
	let options = document.querySelectorAll('#city option');
	for(let i = 0; i < options.length; i++) {
		options[i].remove();
	}
}

function showSelectBlock(e) {
	clearSelectOptions();

	countryValue = e.target.value;

	for(let i = 0; i < cityArr[selectCountry.value].length; i++) {
		let option = document.createElement('option');
		option.textContent = cityArr[selectCountry.value][i];
		selectCity.appendChild(option);
	}

	selectCity.style.opacity = 1;
}

selectCountry.addEventListener('change', showSelectBlock);
selectCity.addEventListener('change', () => {
	result.textContent = `${countryArr[countryValue]} ${selectCity.value}`;
});
