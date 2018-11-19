function colorChanger() {
	document.getElementById("first").style.color= "blue";
	document.getElementById("first").style.fontWeight="italic";
}




function mixer(){

	let para3 = document.getElementById('second').innerHTML;
	var wordArr = para3.split(' ');


	for (var i = 0; i < wordArr.length; i++) {
		wordArr[i] = wordArr[i].split('');
		wordArr[i] = wordArr[i].sort();
		wordArr[i] = wordArr[i].join('');
	}

	let finishedAnagram = wordArr.join(" ");

	document.getElementById('second').innerHTML = finishedAnagram;

}
