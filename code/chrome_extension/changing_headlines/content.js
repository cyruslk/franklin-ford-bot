// quick and dirty prototype: replacing a word by another; words by others
// Probably not suited for parsing big chunks of data

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3 &&
            node.parentElement.tagName.toLowerCase() != "script" &&
            node.parentElement.tagName.toLowerCase() != "style") {
              var text = node.textContent;
              var replacedText = text.replace("Ford", "Franklin Ford");
              if (replacedText !== text) {
                  element.replaceChild(document.createTextNode(replacedText), node);
              }
        }
    }
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3 &&
            node.parentElement.tagName.toLowerCase() != "script" &&
            node.parentElement.tagName.toLowerCase() != "style") {
            var text = node.textContent;
            var replacedText = text.replace("Canada", "USA");
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3 &&
            node.parentElement.tagName.toLowerCase() != "script" &&
            node.parentElement.tagName.toLowerCase() != "style") {
            var text = node.textContent;
            var replacedText = text.replace("triangle", "the intelligence triangle");
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
