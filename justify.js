function justify(text, width) {
  class Page {
    constructor() {
      this.lines = [];
    }
  
    addLine(text) {
      const Line = class {
        constructor(text) {
          this.text = text;
        }
      };
  
      const line = new Line(text);
      this.lines.push(line);
    }
  }
  debugger
  const justifiedPage = new Page;

  let counter =  1
  let i = 0
  while (text.length > 0) {
    justifiedPage.addLine(text.slice(i, counter *width))
    counter++
    i+=width
  }
  return text
}
const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

console.log(justify(LIPSUM, 300))