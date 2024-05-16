/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
function justify(str, len) {
  var words = str.split(' ');
  var lines = [];
  var lastLine = words.reduce(function(line, word) {
    if (line) {
      if (line.length + word.length + 1 <= len)
        return line + ' ' + word;
      lines.push(line);
    }
    return word;
  });
  lines = lines.map(function(line) {
    if (line.indexOf(' ') >= 0)
      for (var lineLen = line.length; lineLen < len; )
        line = line.replace(/ +/g, function(spaces) {
          return spaces + (lineLen++ < len ? ' ' : '');
        });
    return line;
  });
  lastLine && lines.push(lastLine);
  return lines.join('\n');
}

const LIPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

const lines = justify(LIPSUM, 30);
console.log(lines);

// justify=(t,W)=>t.split` `.reduce((a,w)=>(!(l=a[L='length'])||(a[l-1]+w)[L]>=W)?[...a,w]:(a[l-1]+=' '+w,a),[]).map(l=>l.split` `.map((w,i,a)=>w+' '.repeat(~~((x=W-l[L])/(y=a[L]-1))+1+(i<x%y))).join``).join`\n`.replace(/ +$/gm,'').replace(/(?<=(\n|^).+) +(?=.+$)/g,' ')