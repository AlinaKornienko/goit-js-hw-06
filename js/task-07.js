const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeEl.addEventListener('input', onInputChange);

function onInputChange({currentTarget}){
    text.setAttribute('style', `font-size: ${currentTarget.value}px`);
}