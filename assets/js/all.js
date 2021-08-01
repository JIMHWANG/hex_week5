"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
  $('.search').click(function (e) {
    e.preventDefault();
    $('.admin-search-input').toggleClass('active');
  });
});
//# sourceMappingURL=all.js.map
