Ext.define("PinYin.view.FlashListContainer", {
    extend: "Ext.Container",
    alias: "widget.flashlistcontainer",

    initialize: function () {

        this.callParent(arguments);
		
		var homeButton = {
            xtype: "button",
            text: '<',
            ui: 'action',
            handler: this.onHomeButtonTap,
            scope: this
        };

        var newButton = {
            xtype: "button",
            text: '+',
            ui: 'action',
            handler: this.onNewButtonTap,
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            title: 'My Flash Cards',
            docked: "top",
            items: [
				homeButton,
                { xtype: 'spacer' },
                newButton
            ]
        };

        this.add([topToolbar]);
    },
	onHomeButtonTap: function () {
        Ext.Viewport.setActiveItem(Ext.create('PinYin.view.Main'));
    },
	onNewButtonTap: function () {
		console.log("newNoteCommand");
		this.fireEvent("newNoteCommand", this);
	},

    config: {
		style: 'z-index: 5;	background-color: rgb(255, 255, 255); display: block; background-image: url(resources/images/lined-background.png)',
        layout: {
            type: 'fit'
        }
    }
});