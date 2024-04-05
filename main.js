const sentences = [
    "He's not the sharpest knife in the drawer.",
    "The big building was blazing with lights.",
    "Now you must answer some big questions.",
    "Get Your Act Together!"
];

const gridContainer = document.getElementById('gridContainer');

sentences.forEach((sentence, index) => {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    gridContainer.appendChild(row);

    const inputsColumn = document.createElement('div');
    inputsColumn.classList.add('grid-item', 'inputs-column');
    row.appendChild(inputsColumn);

    const sentenceColumn = document.createElement('div');
    sentenceColumn.classList.add('grid-item', 'sentence-column');
    row.appendChild(sentenceColumn);

    const boldBtn = document.createElement('button');
    boldBtn.textContent = 'Bold';
    boldBtn.className = 'button';
    boldBtn.id = `boldBtn-${index}`;

    const italicBtn = document.createElement('button');
    italicBtn.textContent = 'Italic';
    italicBtn.className = 'button';
    italicBtn.id = `italicBtn-${index}`;

    const underlineBtn = document.createElement('button');
    underlineBtn.textContent = 'Underline';
    underlineBtn.className = 'button';
    underlineBtn.id = `underlineBtn-${index}`;

    inputsColumn.appendChild(boldBtn);
    inputsColumn.appendChild(italicBtn);
    inputsColumn.appendChild(underlineBtn);

    const fontSizeInput = document.createElement('input');
    fontSizeInput.type = 'number';
    fontSizeInput.min = '10';
    fontSizeInput.max = '40';
    fontSizeInput.value = '16';
    fontSizeInput.className='font-size';
    fontSizeInput.id = `fontSizeInput-${index}`;

    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.id = `colorInput-${index}`;

    inputsColumn.appendChild(fontSizeInput);
    inputsColumn.appendChild(colorInput);

    const sentenceDiv = document.createElement('div');
    sentenceDiv.classList.add('sentence');
    sentenceDiv.textContent = sentence;
    sentenceColumn.appendChild(sentenceDiv);

    boldBtn.addEventListener("click", () => {
        toggleStyle(sentenceDiv, "fontWeight", "bold");
    });

    italicBtn.addEventListener("click", () => {
        toggleStyle(sentenceDiv, "fontStyle", "italic");
    });

    underlineBtn.addEventListener("click", () => {
        toggleStyle(sentenceDiv, "textDecoration", "underline");
    });

    fontSizeInput.addEventListener("input", () => {
        sentenceDiv.style.fontSize = `${fontSizeInput.value}px`;
    });

    colorInput.addEventListener("input", () => {
        sentenceDiv.style.color = colorInput.value;
    });
});

function toggleStyle(element, styleName, value) {
    const currentStyle = element.style[styleName];
    if(currentStyle.includes("underline")) element.style[styleName] = "none";
    else element.style[styleName] = currentStyle === value ? "normal" : value;
}
