Ext.define("PinYin.view.FlashListContainer", {
    extend: "Ext.Container",
    alias: "widget.flashlistcontainer",
    requires: [
        'Ext.Carousel'
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
		
		var AnsPanel = Ext.create('Ext.Container', {
			layout: {
				type: 'hbox',
				align: 'middle'
			},
			items: [
				{
					xtype: 'panel',
					flex: 1,
					style: 'background-color: red;'
				},
				{
					xtype: 'panel',
					flex: 2,
					style: 'background-color: green'
				}
			]
		});
		
		var MainPanel = Ext.create('Ext.Carousel', {
            indicator : false,
			styleHtmlContent: true,
			
			items: [
				{
					html : 'Item 1',
					listeners: {
						tap: {
							fn: function() {
								Ext.Viewport.animateActiveItem('AnsPanel'), {type: 'flip'};
							},
							element: 'element'
						}
					}
					
				},
				{
					html : 'Item 2'
				},
				{
					html : 'Item 3'
				}
			]
		});

        this.add([topToolbar,MainPanel]);
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