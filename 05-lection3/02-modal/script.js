const run = () => {
  const $button = document.querySelector('#target');
  const $cross = document.querySelector('.modal__cross');
  const $modal = document.querySelector('.modal');

  if (!$cross || !$button) return;

  $button.addEventListener('click', () => {
    window.location.hash = 'modal';
  });

  const onClose = () => {
    $modal.style.opacity = 0;

    const cb = () => {
      $modal.style.opacity = '';
      window.location.hash = '';
      $modal.removeEventListener('transitionend', cb);
    };

    $modal.addEventListener('transitionend', cb);
  };

  $cross.addEventListener('click', onClose);
  $modal.addEventListener('click', onClose);
};

document.addEventListener('DOMContentLoaded', run);
