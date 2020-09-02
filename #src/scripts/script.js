let discoverButton = $(".discover__button");
let cross = $(".paragraph__cross");
let blockForm = $(".paragraph");
let wrapper = $(".paragraph__wrapper");
let submit = $(".paragraph__submit");
let body = $(".body");

function showForm () {
    blockForm.toggleClass("showForm");
    wrapper.toggle();
    body.toggleClass("body");
}

cross.on("click", function () {
    blockForm.toggleClass("showForm");
    wrapper.toggle();
})
    
discoverButton.on("click", function () {
    showForm ();
})
wrapper.on("click", function () {
    showForm ();
})














function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else{
        document.querySelector('body').classList.add('no-webp');
    }
});