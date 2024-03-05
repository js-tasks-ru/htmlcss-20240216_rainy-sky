document.addEventListener('DOMContentLoaded', () => {
  const columns = document.querySelectorAll('.histogram__column');
  columns.forEach((column) => {
    column.style.height = `${Math.floor(Math.random() * 100 + 1)}%`;
  });
});
