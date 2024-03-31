document.addEventListener('DOMContentLoaded', () => {
  const columns = document.querySelectorAll('.histogram__column');
  columns.forEach((column) => {
    const coordY = 100 - Math.floor(Math.random() * 100);
    console.info(coordY);
    column.style.transform = `translateY(${coordY}%)`;
  });
});
