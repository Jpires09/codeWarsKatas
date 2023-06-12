function justify(text, width) {
  class Page {
    constructor() {
      this.lines = [];
    }

    addLine(line) {
      this.lines.push(line);
    }
  }

  class Line {
    constructor(size) {
      this.words = [];
      this.size = size;
    }

    addWord(word) {
      this.words.push(word);
      this.size += word.size;
    }
  }

  class Word {
    constructor(text, size) {
      this.text = text;
      this.size = size;
    }
  }

  const arrText = text.split(' ');
  const justifiedPage = new Page();
  while (arrText.length > 0) {
    let newLine = new Line(0);
    // Populate lines
    while (newLine.size + arrText[0].length <= width) {
      const newWord = new Word(arrText.shift(), 0);
      newWord.size = newWord.text.length;
      newLine.addWord(newWord);
      if  (arrText.length === 0){
        break
      }
      if (!(newLine.size + arrText[0].length <= width)) {
        break;
      } else {
        newLine.addWord(new Word(' ', 1));
      }
    }

    // Enhance blanks
    function isBlank(element) {
      return typeof element === 'string' && element.trim() === '';
    }
    let counter = width - newLine.size;
    let i = 1;
    while (counter > 0) {
      if (isBlank(newLine.words[i].text)) {
        newLine.words[i].text += ' ';
        newLine.size++;
        counter = width - newLine.size;
        i += 2;
      } else {
        i++;
      }

      if (i >= newLine.words.length && counter > 0) {
        i = 0;
      }
    }
  
    justifiedPage.addLine(newLine);
  }

return justifiedPage.lines.map(line => line.words.map(word => word.text).join(' ')).join('\n');

}

const LIPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

const lines = justify(LIPSUM, 30);
console.log(lines);



