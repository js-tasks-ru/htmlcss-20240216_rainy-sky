const run = () => {
  const $button = document.querySelector('#target');
  const $cross = document.querySelector('.modal__cross');
  const $modal = document.querySelector('.modal');

  if (!$cross || !$button) return;

  $button.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    $modal.style.display = 'grid';
  });

  const onClose = () => {
    document.body.style.overflow = '';
    $modal.style.display = 'none';
  };

  $cross.addEventListener('click', onClose);
  $modal.addEventListener('click', onClose);
};

document.addEventListener('DOMContentLoaded', run);
