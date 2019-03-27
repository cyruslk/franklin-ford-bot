const sentencesFromFord = [
  "There was no original bent in me to solve the so-called social question; in fact it never occurred to me, per se.",
  "The settlement day in the world's affairs comes in with the organized movement of the whole intelligence or fact.",
  "Ye shall know the truth and the truth will make you free.",
  "Edward Atkinson gave most striking illustration of the volume of news that must at once result from full inquiry into the food question.",
  "It is perceived that we have only to act upon the principle in order to get not simply more news in quantity, but new news in quality.",
  "There must come in the daily newspaper Grain and other like publications.",
  "The price-making fact is the centre of interest."
]

document.querySelectorAll('h2').forEach(function(element) {
    element.innerText = sentencesFromFord[Math.floor(Math.random()*sentencesFromFord.length)];
});
