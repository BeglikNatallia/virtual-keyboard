window.onload = () => {
    createTextarea();
    createKeyboard();
};

function createTextarea() {
    let form = document.createElement("form");
    let textarea = document.createElement("textarea");
    let body = document.getElementsByTagName("body")[0];
    form.appendChild(textarea);
    body.appendChild(form);
}

function createKeyboard() {

}