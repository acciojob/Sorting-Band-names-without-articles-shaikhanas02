//your code here
//your code here

function strip(article, bandName) {
return bandName.replace(article, '').trim();
}
const articles = ['a', 'an', 'the'];
const bands = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Who', 'Pink Floyd'];
const sortedBands = bands.sort((a, b) => {
const strippedA = articles.reduce(strip.bind(null, a), a);
const strippedB = articles.reduce(strip.bind(null, b), b);
return strippedA.localeCompare(strippedB);
});
const ul = document.querySelector('#bands');
ul.innerHTML = sortedBands.map(band => <li>${band}</li>).join('');
