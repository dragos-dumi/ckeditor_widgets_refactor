/**
 * @file
 * The jQuery accordion integration.
 */

(function ($, Drupal) {
    Drupal.behaviors.ckeditor_widget_accordion = {
        attach: function (context, settings) {
            $(context).find('.jquery-ui-accordion').once('ckeditor_widget_accordion').each(function () {
                var options = {
                    collapsible: true,
                    heightStyle: 'content'
                };
                options.active = $(this).data('active') ? $(this).data('active') - 1 : false;
                $(this).accordion(options);
            });
        }
    };
})(jQuery, Drupal);
