Ext.define("PinYin.view.FlashListContainer", {
    extend: "Ext.Container",
    alias: "widget.flashlistcontainer",
    requires: [
        'Ext.Carousel',
		'Ext.Panel'
    ],	
	//Main Variables to build the view
    initialize: function () {

        this.callParent(arguments);
		
		var homeButton = {
            xtype: "button",
            text: '<',
            ui: 'action',
            handler: this.onHomeBtnTap,
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
		
		var CardList = {
			xtype: "cardslist",
			store: Ext.getStore("Cards"),
			listeners: {
				disclose: { fn: this.onCardsListDisclose, scope: this }
			}
		};
		//Actual building of view by combining variables
        this.add([topToolbar,CardList]);
    },	
	// Commands
	onHomeBtnTap: function () {
		this.fireEvent("HomeButtonCmd", this);
    },
	onNewButtonTap: function () {
		console.log("newNoteCommand");
		this.fireEvent("newNoteCommand", this);
	},
	onCardsListDisclose: function (list, record, target, index, evt, options) {
		this.fireEvent('editNoteCommand', this, record);
	},
	//Config options
    config: {
		style: 'z-index: 5;	background-color: rgb(255, 255, 255); display: block; background-image: url(resources/images/lined-background.png)',
        layout: {
            type: 'fit'
        }
    }
});