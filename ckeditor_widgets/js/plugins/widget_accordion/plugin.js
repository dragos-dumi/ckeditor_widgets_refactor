CKEDITOR.plugins.add('widget_accordion', {
    requires: 'widget',

    icons: 'widget_accordion',

    init: function( editor ) {

        // Configurable settings
        // var allowedFull = editor.config.widgetcommon_allowedFull != undefined ? editor.config.widgetcommon_allowedFull :
        //     'div(!row,two-col-left,two-col-right,accordion,two-col,three-col){width};' +
        //     'div(!columns,col-xs-12,col-sm-3,col-sm-9,col-sidebar,col-main,col-1,col-2,col-3,panel,panel-default,panel-heading,panel-body)';

        CKEDITOR.dialog.add( 'widgetAccordion', this.path + 'dialogs/widgetAccordion.js' );

        editor.widgets.add( 'widgetAccordion', {


            button: 'Add accordion box',

            template:
                '<div class="jquery-ui-accordion" data-accordion></div>',

            editables: {
                header: {
                    selector: '.accordion-none'
                }
            },

            // allowedContent: allowedFull,

            dialog: 'widgetAccordion',

            upcast: function( element ) {
                return element.name == 'div' && element.hasClass( 'jquery-ui-accordion' );
            },

            init: function() {
                var activePanel = this.element.data( 'active' );
                if (activePanel) {
                    this.data.activePanel = activePanel;
                }

                var count = this.element.data( 'count' );
                if (count) {
                    this.data.count = count;
                    for (var i=1; i <= count; i++) {
                        this.initEditable( 'heading'+i, {
                            selector: '.jquery-ui-accordion-header-'+i
                        } );
                        this.initEditable( 'content'+i, {
                            selector: '.jquery-ui-accordion-content-'+i
                        } );
                    }
                }

                var width = this.element.getStyle( 'width' );
                if ( width )
                    this.setData( 'width', width );
                if ( this.element.hasClass( 'align-left' ) )
                    this.setData( 'align', 'left' );
                if ( this.element.hasClass( 'align-right' ) )
                    this.setData( 'align', 'right' );
                if ( this.element.hasClass( 'align-center' ) )
                    this.setData( 'align', 'center' );
            },

            data: function() {

                var activePanel = this.data.activePanel != undefined ? this.data.activePanel : false;
                var name = this.data.name != undefined ? this.data.name : 'jquery-ui-accordion';
                var count = this.data.count != undefined ? this.data.count : 0;

                this.data.prevCount = this.element.data('count');
                this.element.data('count', count);
                this.element.data('active', activePanel);

                // Add rows
                if (this.data.prevCount == undefined || this.data.prevCount < count) {
                    for (var i = this.data.prevCount != undefined ? (this.data.prevCount * 1 + 1) : 1; i <= count; i++) {
                        var active = this.data.activePanel == i ? ' active' : '';
                        var template = '<h3 class="jquery-ui-accordion-header jquery-ui-accordion-header-'+i+'">Heading '+i+'</h3>';
                        var newPanel = CKEDITOR.dom.element.createFromHtml( template );
                        this.element.append(newPanel);

                        var template = '<div class="jquery-ui-accordion-content jquery-ui-accordion-content-'+i+active+'">' + 'Content ' + i + '</div>';
                        var newPanel = CKEDITOR.dom.element.createFromHtml( template );
                        this.element.append(newPanel);
                    }

                    // For some reason, the initEditable call needs to come in a separate for loop
                    // the html code added wasn't in the DOM yet
                    for (var i=this.data.prevCount != undefined ? this.data.prevCount : 1; i<=count; i++) {
                        this.initEditable( 'heading'+i, {
                            selector: '.jquery-ui-accordion-header-'+i
                        } );
                        this.initEditable( 'content'+i, {
                            selector: '.jquery-ui-accordion-content-'+i
                        } );
                    }
                }

                // Remove rows
                if (this.data.prevCount != undefined && this.data.prevCount > count) {
                    for (var i = 1; i <= (this.data.prevCount - count); i++) {
                        this.element.getLast().remove(); // h3
                        this.element.getLast().remove(); // div
                    }
                }
            }
        } );

        // If the "contextmenu" plugin is loaded, register the listeners.
        if (editor.contextMenu) {
            editor.contextMenu.addListener(function (element, selection) {
                var menu = {};
                var selection = editor.getSelection();
                var selectedElement = selection.getSelectedElement();
                if (selectedElement && selectedElement.find('.jquery-ui-accordion')) {
                    menu = {widget_accordion: CKEDITOR.TRISTATE_OFF};
                }
                return menu;
            });
        }

        var item = {
            label: Drupal.t('Accordion'),
            command: 'widgetAccordion',
            icon: this.path + '/icon.png'
        };
        if (typeof editor._.menuGroups['widget_menu'] != 'undefined') {
            editor.widget_menu_items.push('widget_accordion');
            item.group = 'widget_menu';
            editor.addMenuItem('widget_accordion', item);
        }
        else {
            editor.ui.addButton('widget_accordion', item);
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
}
);
