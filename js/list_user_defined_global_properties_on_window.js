// make sure it doesn't count my own properties
(function () {
    var results, currentWindow,
    // create an iframe and append to body to load a clean window object
    iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    // get the current list of properties on window
    currentWindow = Object.getOwnPropertyNames(window);
    // filter the list against the properties that exist in the clean window
    results = currentWindow.filter(function(prop) {
        return !iframe.contentWindow.hasOwnProperty(prop);
    });
    // remove iframe
    document.body.removeChild(iframe);
    // log an array of properties that are different
    console.log(results);
}());
