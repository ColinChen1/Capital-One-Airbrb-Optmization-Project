
console.log("FWIOEF");
document.getElementById("openFile").addEventListener('change', function() {
	console.log("Load file");
	var fr = new FileReader(); 
	fr.onload = function() {
		document.getElementById("fileContents").textContent = this.result;
	}

	fr.readAsText(this.files[0]); 
})

	this.files[0] = "summaries.txt";
	fr.readAsText(this.files[0]); 