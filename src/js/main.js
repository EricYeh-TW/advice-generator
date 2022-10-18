import '../scss/styles.scss';

let dice = document.querySelector('#dice');

function fetchAdvice() {
  const advice__id = document.querySelector('#advice__id');
  const content = document.querySelector('#advice');
  const url = 'https://api.adviceslip.com/advice';

  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      let { id, advice } = result.slip;

      advice__id.innerHTML = `ADVICE ${id}`;
      content.innerHTML = advice;

      console.log(result.slip);
    });
}

dice.addEventListener('click', fetchAdvice);
fetchAdvice();
