(function () {

  showPage(location.hash);

  (function addNavLinkEvents () {
    var navLinks = $('li');
    for (var i = 0; i < navLinks.length; i++) {
      $(navLinks[i]).click(clickedNavLink);
    }
  }())

  function clickedNavLink (evt) {
    var pages = $('.page');

    for (var i = 0; i < pages.length; i++) {
      $(pages[i]).addClass('hidden');
    }

    showPage(evt.target.hash);
  }

  function showPage (id) {
    if (id) {
      $(id).removeClass('hidden');
      $(`a[href="${id}"]`).parent().html('Add Music');
      $($('li')[0]).html('<a href="#">List Music</a>');
    } else {
      $('#home').removeClass('hidden');
      $('li').html('List Music');
      $('li:last-of-type').html('<a href="#add-music">Add Music</a>');
    }
  }

})()
