console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
  $('.search').click(function (e) {
    e.preventDefault();
    $('.admin-search-input').toggleClass('active');
  })
});