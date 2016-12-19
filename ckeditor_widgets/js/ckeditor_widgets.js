/**
 * @file
 * The jQuery accordion integration.
 */

(function($) {
    Drupal.behaviors.ckeditor_widgets = {
        attach: function (context, settings) {
            jQuery( function() {
                jQuery( '.accordion' ).accordion();
            });
        }
    };
})(jQuery);
