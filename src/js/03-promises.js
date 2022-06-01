const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', ev => {
  ev.preventDefault();
  let delay = form.elements[0].value;
  let step = form.elements[1].value;
  let amount = form.elements[2].value;

  delay -= step;
  for (let position = 1; position <= amount; position += 1) {
    const totalDelay = delay + position * step;
    createPromise(position, totalDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
