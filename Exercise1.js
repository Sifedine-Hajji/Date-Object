
let Brussel = new Date()

let Anchora = new Date(new Date().getTime() - (9 * 60 * 60 * 1000))

let Reykjavik = new Date(new Date().getTime() - (1 * 60 * 60 * 1000))

let Saint_Petersburg = new Date(new Date().getTime() + (3 * 60 * 60 * 1000))

console.log('Anchora : ' + Anchora.toLocaleTimeString('en-US') + ' Brussel : ' + Brussel.toLocaleTimeString('en-Us'));
console.log('Reykjavik : ' + Reykjavik.toLocaleTimeString('en-US') + ' Brussel : ' + Brussel.toLocaleTimeString('en-Us'));
console.log('Saint-Petersburg : ' + Saint_Petersburg.toLocaleTimeString('en-US') + ' Brussel : ' + Brussel.toLocaleTimeString('en-Us'));




