// code modified from https://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/
var elements = document.getElementsByTagName('*');

chrome.storage.local.get({savedKeywords:{}}, function(data) {
    keywords = (data.savedKeywords);
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text;

                for (var key in keywords) {
                    replacedText = replacedText.replace(key, keywords[key]);
                }

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
});

