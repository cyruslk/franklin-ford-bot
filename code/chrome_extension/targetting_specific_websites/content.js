// Here, we're going to target specific websites based on their hostnames (URL).
// For more info, see https://developer.mozilla.org/fr/docs/Web/API/window/location

const sentencesForSocialRenderings = [
  "Social: There was no original bent in me to solve the so-called social question; in fact it never occurred to me, per se.",
  "Social: The settlement day in the world's affairs comes in with the organized movement of the whole intelligence or fact.",
  "Social: Ye shall know the truth and the truth will make you free.",
]

const sentencesForSpecialRenderings = [
  "Special: There was no original bent in me to solve the so-called social question; in fact it never occurred to me, per se.",
  "Special: The settlement day in the world's affairs comes in with the organized movement of the whole intelligence or fact.",
  "Special: Ye shall know the truth and the truth will make you free.",
]

if(window.location.host === "duckduckgo.com"){
  document.querySelectorAll('.result__title').forEach(function(element) {
    element.innerText = sentencesForSocialRenderings[Math.floor(Math.random()*sentencesForSocialRenderings.length)];
  });
}


if(window.location.host === "www.nytimes.com"){
  document.querySelectorAll('h2').forEach(function(element) {
      element.innerText = sentencesForSpecialRenderings[Math.floor(Math.random()*sentencesForSpecialRenderings.length)];
  });
}
