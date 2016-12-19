/**
 * @file
 * The jQuery accordion integration.
 */

(function($) {
    Drupal.behaviors.ckeditor_widgets = {
        attach: function (context, settings) {
            jQuery( function() {

                jQuery('.accordion').each(function() {
                    var active = 0;
                    if (jQuery(this).data('active') != undefined) {
                        active  = jQuery(this).data('active') - 1;
                    }
                    jQuery(this).accordion({collapsible: true, active:active});
                });

            });
        }
    };
})(jQuery);
