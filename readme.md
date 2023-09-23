## Detail Kompleksitas Jawaban No.3

Untuk kompleksitasnya terdapat pada bagian break. Jadi dia mengecek setiap karakter yang di loop dan jika terdapat closing breacket tanpa ada open breacket, maka dia akan berhenti melakukan looping dan mengirimkan output "No".

```javascript
if (!isOpenBracket && openBrackets.length === 0) {
	isValid = false;
	break;
}
```

Misalkan seseorang memasukkan input 10.000 bracket dan bracket closing tidak sesuai ada pada huruf index ketiga. Maka dia tidak akan perlu melakukan looping ke semua karakter, tetapi dia akan langsung berhenti di index ket-3