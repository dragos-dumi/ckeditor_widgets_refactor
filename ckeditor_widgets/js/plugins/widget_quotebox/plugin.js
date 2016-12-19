CKEDITOR.plugins.add( 'widget_quotebox', {
    requires: 'widget',

    icons: 'widget_quotebox',

    init: function( editor ) {
        
        // Define the widgets
        editor.widgets.add('widget_quotebox', {

            // button: showButtons ? 'Add Quotebox' : undefined,

            template:
                '<blockquote class="widget-quotebox">' +
                    '<div class="quote-content">Quote </div>' +
                    '<div class="quote-cite">&mdash; Person</div>' +
                '</blockquote>',

            editables: {
                quote: {
                    selector: '.quote-content'
                },
                cite: {
                    selector: '.quote-cite'
                }
            },

            // allowedContent: allowedFull,

            upcast: function( element ) {
                return element.name == 'blockquote' && element.hasClass( 'widget-quotebox' );
            }
        });

        var item = {
            label: Drupal.t('Blockquote'),
            command: 'widget_quotebox',
            icon: this.path + '/icon.png'
        };
        if (typeof editor.widget_menu_items != 'undefined') {
            editor.widget_menu_items.push('widget_quotebox');
            item.group = 'widget_menu';
            editor.addMenuItem('widget_quotebox', item);
        }
        else {
            editor.ui.addButton('widget_quotebox', item);
        }

        // Append the widget's styles when in the CKEditor edit page,
        // added for better user experience.
        // Assign or append the widget's styles depending on the existing setup.
        if (typeof editor.config.contentsCss == 'object') {
            editor.config.contentsCss.push(CKEDITOR.getUrl(this.path + 'contents.css'));
        }

        else {
            editor.config.contentsCss = [editor.config.contentsCss, CKEDITOR.getUrl(this.path + 'contents.css')];
        }
    }


} );