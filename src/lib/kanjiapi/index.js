import data from './data_optimised.json';

export function kanjiToHiragana(text) {
    const hiragana = data.find(k => k.kanji === text);
    // ignore !
    if (hiragana) {
        let final;
        try {
            final = hiragana.hiragana.replace('！', '').replace('.', '').replace('?', '');
        } catch (e) {
            final = hiragana.hiragana;
        }
        return final;
    } else {
        return text;
    }
}