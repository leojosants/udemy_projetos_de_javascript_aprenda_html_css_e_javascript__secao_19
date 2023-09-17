/* */
const word_or_phrase_input = document.querySelector('[data_word_or_phrase]');
const check_button = document.querySelector('[data_to_check]');
const result = document.querySelector('[data_result]');

/* */
function checkPalindrome() {
    const word_or_phrase = word_or_phrase_input.value;
    const reversed_word_or_phrase = word_or_phrase.split('').reverse().join('');
    const checkSpace = (string) => /\s/g.test(string);

    if (word_or_phrase === '') {
        result.innerHTML = 'Por favor, digite alguma <strong>palavra</strong> ou <strong>frase</strong>.';
    }
    else {
        if (checkSpace(word_or_phrase)) {
            if (word_or_phrase.toLowerCase() === reversed_word_or_phrase.toLowerCase()) {
                result.innerHTML = `A frase <strong>"${word_or_phrase}"</strong> é um Palíndromo.`;
            }
            else {
                result.innerHTML = `A frase <strong>"${word_or_phrase}"</strong> não é um Palíndromo.`;
            }
        }
        else {
            if (word_or_phrase.toLowerCase() === reversed_word_or_phrase.toLowerCase()) {
                result.innerHTML = `A palavra <strong>"${word_or_phrase}"</strong> é um Palíndromo.`;
            }
            else {
                result.innerHTML = `A palavra <strong>"${word_or_phrase}"</strong> não é um Palíndromo.`;
            };
        };

        word_or_phrase_input.value = '';
    };
};

/* */
check_button.addEventListener('click', checkPalindrome);

/* */
word_or_phrase_input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkPalindrome();
        word_or_phrase_input.value = '';
    };
});