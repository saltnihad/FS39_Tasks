document.querySelectorAll('.circle-1').forEach(circle => {
    circle.addEventListener('click', function () {
      document.body.style.backgroundColor = 'gray';
    });
  });

  document.querySelectorAll('.circle-2').forEach(circle => {
    circle.addEventListener('click', function () {
      document.body.style.backgroundColor = 'red';
    });
  });

  document.querySelectorAll('.circle-3').forEach(circle => {
    circle.addEventListener('click', function () {
      document.body.style.backgroundColor = 'blue';
    });
  });

  document.querySelectorAll('.circle-4').forEach(circle => {
    circle.addEventListener('click', function () {
      document.body.style.backgroundColor = 'yellow';
    });
  });

