const kanjiapi = require('../kanjiapi_full.json');
const fs = require('fs');

const kanjiapi_optimised = [];
for (let i in kanjiapi.kanjis) {
    kanjiapi_optimised.push({
        "kanji": kanjiapi.kanjis[i].kanji,
        "hiragana": kanjiapi.kanjis[i].kun_readings[0],
        "katakana": kanjiapi.kanjis[i].on_readings,
    });
}

fs.writeFile('../kanjiapi_optimised.json', JSON.stringify(kanjiapi_optimised), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});