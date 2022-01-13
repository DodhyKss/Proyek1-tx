let h2 =  document.getElementsByClassName("hasil");
let p = document.getElementsByClassName('klue');
let hasil = 0;
let angkaInputan = 0;
let kesempatan = 3;
let angkaTebakan = 0;
function inputAngka(){
	let angka = document.getElementById("inpangka").value;
	if(angka != '' && angka >= 1 && angka <= 10){
		angkaInputan = parseInt(angka);
		angkaRandon();
	}
}

function tebakAngka(){
	let tebak = document.getElementById("inptebak").value;
	if(tebak != ''){
		angkaTebakan = parseInt(tebak);
	}
	if(kesempatan > 0){
		if(angkaTebakan == hasil){
			h2[0].innerHTML = hasil+', Tebakan Anda Benar';
		} else {
			h2[0].innerHTML = 'Tebakan Anda Salah, '+ kesempatan;
			kesempatan--;
		}
	} else {
		h2[0].innerHTML = 'kesempatan Anda Telah Habis';
	}

}

function angkaRandon(){
	hasil = angkaInputan + Math.floor(Math.random() * 11);
}

function ulang(){
	hasil = 0;
	angkaInputan = 0;
	kesempatan = 3;
	angkaTebakan = 0;
	h2[0].innerHTML = '';
	document.getElementById('inpangka').value = '';
	document.getElementById('inptebak').value = '';
	p[0].innerHTML = '';
}

function klue(){
	if(hasil > 10 && angkaInputan != 0){
		p[0].innerHTML = 'Jawaban lebih besar dari 10';
	} else if (hasil < 10 && angkaInputan != 0) {
		p[0].innerHTML = 'Jawaban lebih kecil dari 10';
	} else {

	}
}
