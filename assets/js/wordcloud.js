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

/*Stores the data for summaries word cloud. Learned how to do some sublime text stuff.*/

var summaries = "3075 room 2556 place 2552 San 2483 Francisco 2440 bedroom 2279 s 2174 you 2173 The 2146 restaurants 2041 apartment 1972 kitchen 1937 on 1906 home 1738 Park 1706 private 1647 This 1611 SF 1552 neighborhood 1547 My 1545 has 1497 located 1470 walk 1455 close 1440 are 1362 Mission 1324 one 1305 city 1291 bathroom 1267 or 1262 You 1255 all 1230 access 1226 blocks 1211 great 1206 street 1191 living 1190 away 1136 views 1117 heart 1108 Golden 1098 downtown 1092 Gate 1091 quiet 1079 distance 1076 your 1030 this 1019 business 1006 ll 993 my 989 full 986 It 981 two 970 have 961 our 960 house 954 travelers 950 public 942 parking 927 bars 924 block 904 shops" 
var summariesArray = summaries.split(" "); 
var wordsSummary = []; 
var i; 
for(i = 0; i < summariesArray.length; i+=2) {
  wordsSummary.push({
    text: summariesArray[i+1],
    weight: Number(summariesArray[i])
  })
}

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

function createWordCloudSummaries() {
  $('#wordcloud2').jQCloud(wordsSummary, {
    //shape: 'elliptic',
    fontSize: {
      from: 0.1,
      to: 0.02
    },
    autoResize: true,
    delay: 10,
    removeOverflowing: false
  });
}

$(document).ready(function() {
	createWordCloud(); 
	createWordCloudNoConjunction(); 
  createWordCloudSummaries();
}); 


