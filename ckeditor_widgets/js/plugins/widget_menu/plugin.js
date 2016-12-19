CKEDITOR.plugins.add('widget_menu', {
    requires: 'menu',
    init: function( editor ) {
        // Insert just the group. Plugins should insert them into this group.
        editor.addMenuGroup('widget_menu');
        editor.widget_menu_items = [];
        editor.ui.add('widget_menu', CKEDITOR.UI_MENUBUTTON, {
            label: 'Widget menu',
            modes: {wysiwyg: 1},
            icon: this.path + '/icon.png' ,
            onMenu: function() {
                // You can control the state of your commands live, every time
                // the menu is opened.
                var ret = {};
                if (typeof editor.widget_menu_items != 'undefined') {
                    for (i = 0, len = editor.widget_menu_items.length; i < len; i++) {
                    ret[editor._.menuItems[editor.widget_menu_items[i]].name]
                        = editor.commands[editor._.menuItems[editor.widget_menu_items[i]].command] == undefined ? false : true
                    }
                }
                return ret;
            }
        } );
        
    }


} );