import '../scss/styles.scss';

let dice = document.querySelector('#dice');
let cache;

async function fetchAdvice() {
  const advice__id = document.querySelector('#advice__id');
  const content = document.querySelector('#advice');
  const url = 'https://api.adviceslip.com/advice';

  try {
    let response = await fetch(url);
    let result = await response.json();

    let { id, advice } = result.slip;
    if (cache === id) return;
    // console.log('oldId: ' + cache, 'newId: ' + id);
    console.log(cache === id);

    advice__id.innerHTML = `ADVICE #${id}`;
    content.innerHTML = advice;

    cache = id; // prevent same result
  } catch (error) {
    console.log(error);
  }
}

dice.addEventListener('click', fetchAdvice);
fetchAdvice();
