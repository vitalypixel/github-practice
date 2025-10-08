document.getElementById('btn').addEventListener('click', () => {
  const h1 = document.querySelector('h1');
  h1.textContent = 'Заголовок изменён! ✅';
  console.log('Heading changed');
});
