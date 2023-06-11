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
      this.size+= word.size
    }
  }
  
  class Word {
    constructor(text, size) {
      this.text = text;
      this.size = size;
    }
  }
  
  arrText = text.split(' ')
  const justifiedPage = new Page;
  const newLine = new Line(0);
  //  populate lines
  while ((newLine.size + arrText[0].length) <= width) {
    newWord = new Word (arrText.shift(),0)
    newWord.size = newWord.text.length
    newLine.addWord(newWord)

    newLine.words.push(' ')
    newLine.size++
  }

  // enhance blanks
  function isWord(element) {
    return typeof element === 'string' && element.trim() !== '';
  }
  
  function addSpaceToEnd(str) {
    return str + ' ';
  }
  let counter = width - newLine.size
  let i = 0 
  while (counter > 0) {
    if (isWord(newLine.words[i].text)){
      addSpaceToEnd(newLine.words[i])
      newLine.size++
      counter = width - newLine.size
      i++
    } 
    else (
      i++
    )
    if ((i > newLine.words.length) && (counter > 0)) {
      i = 0
    }
  }
  return newLine.words.map(word => word.text).join(' ');
}
const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

console.log(justify(LIPSUM, 30))