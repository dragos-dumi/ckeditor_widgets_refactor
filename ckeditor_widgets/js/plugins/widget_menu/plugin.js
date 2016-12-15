CKEDITOR.plugins.add('widget_menu', {
    requires: 'menu',
    init: function( editor ) {
        // Insert just the group. Plugins should insert them into this group.
        editor.addMenuGroup('widget_menu');
        editor.ui.add('widget_menu', CKEDITOR.UI_MENUBUTTON, {
            label: 'Widget menu',
            icon: this.path + '/icon.png' ,
            onMenu: function() {
                // You can control the state of your commands live, every time
                // the menu is opened.
                var ret = {};
                for (var key in editor._.menuItems) {
                    if (editor._.menuItems[key].group == editor._.menuGroups.widget_menu) {
                        ret[editor._.menuItems[key].name] = editor.commands[editor._.menuItems[key].command] == undefined ? false : true
                    }
                }
                return ret;
            }
        } );
        
    }


} );