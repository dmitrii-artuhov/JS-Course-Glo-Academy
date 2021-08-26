// let m = [2,3,2,5,7,6,2,6,4,12,3,3,3,12];
// let count = m.length;
// for(let i = 0; i < count; i++) {
// 	m[i] = m[i].toString();
// }
// // console.log(m);
// //создаем вспомогательный массив mysort
// //и в нем считаем сколько каждое число встречается в исходном массиве
// //то есть в итоге получим mysort[1]=1, mysort[2]=2, mysort[4]=1, mysort[6]=1 и тд
// let mysort = {};
// for (let i = 0; i < count; i++) {
// 	let k = m[i] + "/";
// 	if (mysort[k] === undefined) {
// 		mysort[k] = 1;
// 	} else {
// 		mysort[k]++;
// 	}
// }
// // console.log(mysort);


// // for(key in mysort) {
// // 	mysort[parseInt(key).toString()] = mysort[key];
// // 	delete mysort[key];
// // }
// // console.log(mysort);

// let n = [];
// //cчитаем сколько значимых элементов в этом массиве
// count = 0;
// for (let item in mysort) {
// 	count++;
// }



// //перебираем массив столько раз сколько в нём элементов
// for (let i = 0; i < count; i++) {
// 	let maxcount = 0;
// 	let index = 0;
// 	//в цикле находим элемент с максимальным значением
// 	for (let item in mysort) {
// 		if (Number(mysort[item]) > maxcount) {
// 			//в maxcount пишем текущее максимальное значение
// 			//в index индекс элемента с этим значением
// 			index = Number(parseInt(item));
// 			maxcount = Number(mysort[item]);
// 			// console.log("index: " , index, "  maxcount: " , maxcount);
			
// 		} 
// 	}
// 	//после того как нашли нужный элемент
// 	//удаляем его из массива mysort
// 	//и записываем в массив n число index столько раз сколько значение maxcount

// 	index = index.toString() + "/";
// 	delete mysort[index];
// 	for (let i = 0; i < maxcount; i++) {
// 		index = parseInt(index);
// 		n.push(index);
// 	}
// }
// console.log(n);




function func(m) {
	let count = m.length;
	for (let i = 0; i < count; i++) {
		m[i] = m[i].toString();
	}
	// console.log(m);
	//создаем вспомогательный массив mysort
	//и в нем считаем сколько каждое число встречается в исходном массиве
	//то есть в итоге получим mysort[1]=1, mysort[2]=2, mysort[4]=1, mysort[6]=1 и тд
	let mysort = {};
	for (let i = 0; i < count; i++) {
		let k = m[i] + "/";
		if (mysort[k] === undefined) {
			mysort[k] = 1;
		} else {
			mysort[k]++;
		}
	}
	// console.log(mysort);


	// for(key in mysort) {
	// 	mysort[parseInt(key).toString()] = mysort[key];
	// 	delete mysort[key];
	// }
	// console.log(mysort);

	let n = [];
	//cчитаем сколько значимых элементов в этом массиве
	count = 0;
	for (let item in mysort) {
		count++;
	}



	//перебираем массив столько раз сколько в нём элементов
	for (let i = 0; i < count; i++) {
		let maxcount = 0;
		let index = 0;
		//в цикле находим элемент с максимальным значением
		for (let item in mysort) {
			if (Number(mysort[item]) > maxcount) {
				//в maxcount пишем текущее максимальное значение
				//в index индекс элемента с этим значением
				index = Number(parseInt(item));
				maxcount = Number(mysort[item]);
				// console.log("index: " , index, "  maxcount: " , maxcount);

			}
		}
		//после того как нашли нужный элемент
		//удаляем его из массива mysort
		//и записываем в массив n число index столько раз сколько значение maxcount

		index = index.toString() + "/";
		delete mysort[index];
		for (let i = 0; i < maxcount; i++) {
			index = parseInt(index);
			n.push(index);
		}
	}
	console.log(n);

}

let m = [2,3,2,4,5,12,2,3,3,3,12];


func(m);