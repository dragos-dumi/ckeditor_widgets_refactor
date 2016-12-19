/**
 * @file
 * The jQuery accordion integration.
 */

(function($) {
    Drupal.behaviors.ckeditor_widget_accordion = {
        attach: function (context, settings) {
            $(context).find('.accordion').once('ckeditor_widget_accordion').each(function () {
                var options = {
                    collapsible: true
                };
                options.active = $(this).data('active') ? $(this).data('active') : false;
                $(this).accordion(options);
            });
        }
    };
})(jQuery);
