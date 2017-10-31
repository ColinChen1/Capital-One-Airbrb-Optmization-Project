/* Colin Chen 

   The wordcloud.js file is the JavaScript using JQCloud2 for the WordCloud 
   The data is hardcoded because the data isn't dynamic..and I didn't want to
   figure out how to do file input here.  */

var words = [
  {text: "and", weight: 619202},
  {text: "the", weight: 457462},
  {text: "a", weight: 370776},
  {text: "to", weight: 360602},
  {text: "was", weight: 329671},
  {text: "is", weight: 223952},
  {text: "in", weight: 221042},
  {text: "The", weight: 170674},
  {text: "I", weight: 170233},
  {text: "of", weight: 160779},
  {text: "very", weight: 152106},
  {text: "for", weight: 143445},
  {text: "with", weight: 121736},
  {text: "great", weight: 118963},
  {text: "stay", weight: 115673},
];

var wordsNoConjunctions = [
  {text: "great", weight: 118963},
  {text: "stay", weight: 115673},
  {text: "place", weight: 107714},
  {text: "location", weight: 64011},
  {text: "clean", weight: 63313},
  {text: "apartment", weight: 61236},
  {text: "room", weight: 55128},
  {text: "host", weight: 53975},
  {text: "nice", weight: 51539},
  {text: "comfortable", weight: 49383},
  {text: "home", weight: 43692},
  {text: "again", weight: 41656},
  {text: "recommend", weight: 40374},
  {text: "easy", weight: 34922},
  {text: "perfect", weight: 33322}
];


function createWordCloud() {
	$('#wordcloud').jQCloud(words, {
		//shape: 'elliptic',
		fontSize: {
			from: 0.14,
			to: 0.03
		},
		autoResize: true,
		delay: 10
	});
}

function createWordCloudNoConjunction() {
	$('#wordcloud1').jQCloud(wordsNoConjunctions, {
		//shape: 'elliptic',
		fontSize: {
			from: 0.1,
			to: 0.02
		},
		autoResize: true,
		delay: 10
	});
}

$(document).ready(function() {
	createWordCloud(); 
	createWordCloudNoConjunction(); 
}); 
