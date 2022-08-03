const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function getSymbol(morse) {
    for (const [key, value] of Object.entries(MORSE_TABLE)) {
        if(`${key}` === morse){
            return `${value}`
        }
      } 
}

function decode(str) {
    let array = [];
    let symbols = "";
    

    for (let i = 0; i < str.length; i += 10) {
        array.push(str.substring(i, i + 10).replace(/\b0+/g, ''));
    }

    for(let arr=0; arr < array.length; arr ++){
        let result = "";
        if(array[arr] != "**********"){
      for (let j = 0; j < array[arr].length; j += 2) {
          if(array[arr].substring(j, j + 2) == "10"){
              result+=".";
          }else{
              result+="-";
          }
      }
    
      symbols += getSymbol(result);
    }else{
        symbols += ' ';
    }

    }

    return symbols;
}

module.exports = {
    decode
}