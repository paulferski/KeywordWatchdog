document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('saveButton');
    var clearButton = document.getElementById('clearButton');
    saveButton.addEventListener('click', function() {
        save();
    });
    clearButton.addEventListener('click', function() {
        erase();
    });
});

// code modified from https://stackoverflow.com/questions/31122797/making-an-array-in-chrome-storage-and-retrieving-data
function save() {
    chrome.storage.local.get({savedKeywords:{}}, function(data) {
		update(data.savedKeywords);
	});
}

function erase() {
	chrome.storage.local.clear();
}

function update(dictionary) {
	var keyword = document.getElementById('keyword').value;
    var replacement = document.getElementById('replacement').value;
    dictionary[keyword] = replacement;

    chrome.storage.local.set({savedKeywords:dictionary});
}