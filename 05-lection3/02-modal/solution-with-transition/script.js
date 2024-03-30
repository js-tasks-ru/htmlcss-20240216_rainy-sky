const run = () => {
  const $button = document.querySelector('#target');
  const $cross = document.querySelector('.modal__cross');
  const $modal = document.querySelector('.modal');

  if (!$cross || !$button) return;

  $button.addEventListener('click', () => {
    document.body.dataset.transition_open = true;
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      document.body.classList.add('modal-open');
      delete document.body.dataset.transition_open;
    });
  });

  const onClose = () => {
    document.body.dataset.transition_close = true;

    const cb = () => {
      delete document.body.dataset.transition_close;
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      $modal.removeEventListener('transitionend', cb);
    };

    $modal.addEventListener('transitionend', cb);
  };

  $cross.addEventListener('click', onClose);
  $modal.addEventListener('click', onClose);
};

document.addEventListener('DOMContentLoaded', run);
