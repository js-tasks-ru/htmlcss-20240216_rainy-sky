let $calendar;

const selectDays = () => {
  let count = 0;

  const $days = $calendar.querySelectorAll(
    '.calendar__cell:not(.calendar__cell_day-of-week):not(:empty)',
  );

  $days.forEach((day) => {
    day.addEventListener('click', () => {
      count++;

      if (count === 2) {
        $calendar.dataset.selected = true;
      } else if (count > 2) {
        delete $calendar.dataset.selected;
        $days.forEach((day) => {
          day.classList.remove('calendar__cell_selected');
        });
        count = 1;
      }

      day.classList.toggle('calendar__cell_selected');
    });
  });
};

const propagateDays = () => {
  const month_year = $calendar
    .querySelector('.calendar__title')
    .textContent.split(/\s+/);

  let date = new Date(`${month_year[0]} 1, ${month_year[1]}`);
  if (!isValidDate(date)) return;

  const days = $calendar.querySelectorAll('.calendar__cell');
  let bypass = 7 + date.getDay() - 1;
  let isOutOfMonth = false;

  days.forEach((day) => {
    if (bypass > 0) {
      bypass--;
      return;
    }
    if (isOutOfMonth) return;

    day.textContent = date.getDate();
    day.classList.add('calendar__cell_with-cursor');
    date.setDate(date.getDate() + 1);

    if (date.getDate() === 1) isOutOfMonth = true;
  });
};

const run = () => {
  $calendar = document.querySelector('.calendar');
  propagateDays();
  selectDays();
};

document.addEventListener('DOMContentLoaded', run);

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
