Ext.define("PinYin.view.SettingsContainer", {
    extend: "Ext.Container",
    alias: "widget.settingscontainer",
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],

    initialize: function () {

        this.callParent(arguments);
		
		var homeButton = {
            xtype: "button",
            text: '<',
            ui: 'action',
            handler: this.onHomeButtonTap,
            scope: this
        };
		
        var topToolbar = {
            xtype: "titlebar",
            title: 'Settings',
            docked: "top",
			items: [
                homeButton                
            ]
        };
		
		var SettingsPanel = {
			xtype: 'panel',
			html: 'Pinyin FlashCards<br>another line of text'
		};

        this.add([topToolbar,SettingsPanel]);
    },
	
	onHomeButtonTap: function () {
        Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.Main'), {type: 'slide', direction: 'right'});
    },

    config: {
		style: 'z-index: 5;	background-color: rgb(255, 255, 255); display: block; background-image: url(resources/images/lined-background.png)',
        layout: {
            type: 'card'
        }
    }
});
