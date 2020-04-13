const KEYBOARD_EN = [
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
        ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
        ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&uarr;", "Shift"],
        ["Ctrl", "Win", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Ctrl"]
    ],
    KEYBOARD_EN_SHIFT = [
        ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
        ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del"],
        ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter"],
        ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "&uarr;", "Shift"],
        ["Ctrl", "Win", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Ctrl"]
    ],
    KEYBOARD_EN_CAPSLOCK = [
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del"],
        ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
        ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "&uarr;", "Shift"],
        ["Ctrl", "Win", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Ctrl"]
    ],
    KEYBOARD_RUS = [
        ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " - ", " = ", "Backspace"],
        ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
        ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
        ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "&uarr;", "Shift"],
        ["Ctrl", "Win", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Ctrl"]
    ],
    KEYBOARD_RUS_SHIFT = [
        ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
        ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del"],
        ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
        ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "&uarr;", "Shift"],
        ["Ctrl", "Win", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Ctrl"]
    ],
    KEYBOARD_RUS_CAPSLOCK = [
        ["Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " - ", " = ", "Backspace"],
        ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del"],
        ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
        ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "&uarr;", "Shift"],
        ["Ctrl", "Win", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Ctrl"]
    ],
    KEY_CODE = [
        ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
        ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete"],
        ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
        ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
        ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"]
    ];

let body = document.getElementsByTagName("body")[0];

window.onload = () => {
    createTextarea();
    selectKeyboard();
    eventListeners();
};

function createTextarea() {
    let infomationBlock = document.createElement("div");
    infomationBlock.innerHTML = "<p>Клавиатура создана в операционной системе Windows</p>";
    infomationBlock.innerHTML += "<p>Для переключения языка комбинация: левыe ctrl + alt</p>";
    let textarea = document.createElement("textarea");

    body.appendChild(infomationBlock);
    body.appendChild(textarea);
}

function selectKeyboard() {
    if (localStorage["keybord"] == undefined || localStorage["keybord"] == `${KEYBOARD_EN}`) {
        createKeyboard(KEYBOARD_EN);
    } else if (localStorage["keybord"] == `${KEYBOARD_EN_SHIFT}`) {
        createKeyboard(KEYBOARD_EN_SHIFT);
    } else if (localStorage["keybord"] == `${KEYBOARD_RUS}`) {
        createKeyboard(KEYBOARD_RUS);
    } else if (localStorage["keybord"] == `${KEYBOARD_RUS_SHIFT}`) {
        createKeyboard(KEYBOARD_RUS_SHIFT);
    } else if (localStorage["keybord"] == `${KEYBOARD_RUS_CAPSLOCK}`) {
        createKeyboard(KEYBOARD_RUS_CAPSLOCK);
    } else if (localStorage["keybord"] == `${KEYBOARD_EN_CAPSLOCK}`) {
        createKeyboard(KEYBOARD_EN_CAPSLOCK);
    }
}

function createKeyboard(layout) {
    if (body.children.length > 3) {
        body.getElementsByClassName("keyboard-wrapper")[0].remove();
    }

    let keyboardWrapper = document.createElement("div");
    keyboardWrapper.classList.add("keyboard-wrapper");
    body.appendChild(keyboardWrapper);
    localStorage["keybord"] = `${layout}`;

    layout.forEach((el, index) => {
        keyboardWrapper.innerHTML += `<div class = "row${index + 1}"></div>`;
        let row = document.getElementsByClassName(`row${index + 1}`)[0];
        el.forEach((key, i) => {
            if (key == "Backspace" || key == "CapsLock" || key == "Enter" || key == "Shift") {
                return row.innerHTML += `<span class = "key double" id = ${KEY_CODE[index][i]}>${key}</span>`;
            }
            if (key == "Space") {
                return row.innerHTML += `<span class = "key space" id = ${KEY_CODE[index][i]}></span>`;
            }

            row.innerHTML += `<span class = "key" id = ${KEY_CODE[index][i]}>${key}</span>`;
        });
    });
}

function eventListeners() {
    document.addEventListener("keydown", (event) => keydownHandler(event));
    document.addEventListener("keyup", (event) => keyupHandler(event));
    document.addEventListener("mousedown", (event) => mousedownHandler(event));
    document.addEventListener("mouseup", (event) => mouseupHandler(event));
}

function keydownHandler(e) {
    e.preventDefault();
    let textarea = document.getElementsByTagName("textarea")[0];
    let symbol = document.getElementById(`${e.code}`);

    animation(e.code);
    if (e.key == "Control" || e.key == "Meta" || e.key == "Alt" || e.key == "Delete") {
        return textarea.value += "";
    } else if (e.key == "Enter") {
        return textarea.value += "\n";
    } else if (e.key == "Tab") {
        return textarea.value += "   ";
    } else if (e.key == "Space") {
        return textarea.value += " ";
    } else if (e.key == "Shift") {
        return changeLayoutShift();
    } else if (e.key == "CapsLock") {
        return pressCapsLock();
    } else if (e.key == "Backspace") {
        return  textarea.value = textarea.value.slice(0, -1);
    }

    textarea.value += symbol.textContent;
}

function animation(btn) {
    let element = document.getElementById(`${btn}`);
    element.classList.toggle("animation");
}

function keyupHandler(e) {
    e.preventDefault();
    if ((e.code === "ControlLeft" && e.altKey) || (e.ctrlKey && e.code === "AltLeft")) {
        changeLayoutLanguage();
    } else if (e.key == "Shift") {
        animation(e.code);
        return changeLayoutShift();
    }
    animation(e.code);
}

function mousedownHandler(e) {
    if (e.target.tagName != "SPAN") {
        return;
    }

    let textarea = document.getElementsByTagName("textarea")[0];
    let symbol = document.getElementById(`${e.target.id}`);
    animation(e.target.id);
    if (e.target.id == "CapsLock" || e.target.id == "ControlLeft" || e.target.id == "MetaLeft"
        || e.target.id == "AltLeft" || e.target.id == "Delete" || e.target.id == "ControlRight" || e.target.id == "AltRight") {
        return textarea.value += "";
    } else if (e.target.id == "Space") {
        return textarea.value += " ";
    } else if (e.target.id == "Enter") {
        return textarea.value += "\n";
    } else if (e.target.id == "Tab") {
        return textarea.value += "   ";
    } else if (e.target.id == "ShiftRight" || e.target.id == "ShiftLeft") {
        return changeLayoutShift();
    } else if (e.target.id == "Backspace") {
        return  textarea.value = textarea.value.slice(0, -1);
    }

    textarea.value += symbol.textContent;
}

function mouseupHandler(e) {
    if (e.target.id == "ShiftRight" || e.target.id == "ShiftLeft") {
        return changeLayoutShift();
    } else if (e.target.id == "CapsLock") {
        return pressCapsLock();
    }

    animation(e.target.id);
}

function changeLayoutLanguage() {
    if (localStorage["keybord"] == `${KEYBOARD_EN}`) {
        localStorage["keybord"] = `${KEYBOARD_RUS}`;
        createKeyboard(KEYBOARD_RUS);
    } else if (localStorage["keybord"] == `${KEYBOARD_EN_SHIFT}`) {
        localStorage["keybord"] = `${KEYBOARD_RUS_SHIFT}`;
        createKeyboard(KEYBOARD_RUS_SHIFT);
    } else if (localStorage["keybord"] == `${KEYBOARD_RUS}`) {
        localStorage["keybord"] = `${KEYBOARD_EN}`;
        createKeyboard(KEYBOARD_EN);
    } else if (localStorage["keybord"] == `${KEYBOARD_RUS_SHIFT}`) {
        localStorage["keybord"] = `${KEYBOARD_EN_SHIFT}`;
        createKeyboard(KEYBOARD_EN_SHIFT);
    } else if (localStorage["keybord"] == `${KEYBOARD_RUS_CAPSLOCK}`) {
        localStorage["keybord"] = `${KEYBOARD_EN_CAPSLOCK}`;
        createKeyboard(KEYBOARD_EN_CAPSLOCK);
    } else if (localStorage["keybord"] == `${KEYBOARD_EN_CAPSLOCK}`) {
        localStorage["keybord"] = `${KEYBOARD_RUS_CAPSLOCK}`;
        createKeyboard(KEYBOARD_RUS_CAPSLOCK);
    }
}

function changeLayoutShift() {
    if (localStorage["keybord"] == `${KEYBOARD_EN}`) {
        createKeyboard(KEYBOARD_EN_SHIFT);
    } else if (localStorage["keybord"] == `${KEYBOARD_EN_SHIFT}`) {
        createKeyboard(KEYBOARD_EN);
    } else if (localStorage["keybord"] == `${KEYBOARD_RUS}`) {
        createKeyboard(KEYBOARD_RUS_SHIFT);
    } else if (localStorage["keybord"] == `${KEYBOARD_RUS_SHIFT}`) {
        createKeyboard(KEYBOARD_RUS);
    }
}

function pressCapsLock() {
    if (localStorage["keybord"] == `${KEYBOARD_EN}`) {
        createKeyboard(KEYBOARD_EN_CAPSLOCK);
    } else if (localStorage["keybord"] == `${KEYBOARD_EN_CAPSLOCK}`) {
        createKeyboard(KEYBOARD_EN);
    } else if (localStorage["keybord"] == `${KEYBOARD_RUS}`) {
        createKeyboard(KEYBOARD_RUS_CAPSLOCK);
    } else if (localStorage["keybord"] == `${KEYBOARD_RUS_CAPSLOCK}`) {
        createKeyboard(KEYBOARD_RUS);
    }
}