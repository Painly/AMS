var $sidebar = $('.control-sidebar')
  var $container = $('<div />', {
    class: 'p-3 control-sidebar-content'
  })

  $sidebar.append($container)

  // Checkboxes



  var $dark_mode_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('dark-mode'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('dark-mode')
    } else {
      $('body').removeClass('dark-mode')
    }
  })
  var $dark_mode_container = $('<div />', { class: 'mb-4' }).append($dark_mode_checkbox).append('<span>Dark Mode</span>')
  $container.append($dark_mode_container)

  
  $("#myModal").on("show.bs.modal-primary", function(e) {
    var link = $(e.relatedTarget);
    $(this).find(".modal-body-edit").load(link.attr("href"));
});
 
var $sidebar_collapsed_checkbox = $('<input />', {
  type: 'checkbox',
  value: 1,
  checked: $('body').hasClass('sidebar-collapse'),
  class: 'mr-1'
}).on('click', function () {
  if ($(this).is(':checked')) {
    $('body').addClass('sidebar-collapse')
    $(window).trigger('resize')
  } else {
    $('body').removeClass('sidebar-collapse')
    $(window).trigger('resize')
  }
})


 

  var $sidebar_collapsed_container = $('<div />', { class: 'mb-1' }).append($sidebar_collapsed_checkbox).append('<span>Collapsed</span>')
  $container.append($sidebar_collapsed_container)

  $(document).on('collapsed.lte.pushmenu', '[data-widget="pushmenu"]', function () {
    $sidebar_collapsed_checkbox.prop('checked', true)
  })
  $(document).on('shown.lte.pushmenu', '[data-widget="pushmenu"]', function () {
    $sidebar_collapsed_checkbox.prop('checked', false)
  })