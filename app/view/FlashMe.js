Ext.define("PinYin.view.FlashMe", {
    extend: "Ext.Container",
    alias: "widget.flashme",
    requires: [
        'Ext.Carousel',
		'Ext.Panel'
    ],	

    initialize: function () {

        this.callParent(arguments);
		
		var homeButton = {
            xtype: "button",
            text: '<',
            ui: 'action',
            handler: this.onHomeBtnTap,
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            title: 'My Flash Cards',
            docked: "top",
            items: [
				homeButton,
                { xtype: 'spacer' }
            ]
        };
		
		var AnsPanel =  new Ext.Panel({
			fullscreen: true,
			styleHtmlContent:true,
			layout: 'fit',
			html:'<div id="box">This is HTML text</div>'
		});
		
		var MainPanel = Ext.create('Ext.Carousel', {
            indicator : false,
			styleHtmlContent: true,
			
			items: [
				{
					// xtype: "cardslist",
						// store: Ext.getStore("Cards"),
							// listeners: {
								// disclose: { fn: this.onCardsListDisclose, scope: this }
							// }
					html : 'Item 1'
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
	onHomeBtnTap: function () {
        //Ext.Viewport.setActiveItem(Ext.create('PinYin.view.Main')); <--this isn't needed here because it has been moved to the controllers file
		this.fireEvent("HomeButtonCmd", this);
    },

    config: {
		style: 'z-index: 5;	background-color: rgb(255, 255, 255); display: block; background-image: url(resources/images/lined-background.png)',
        layout: {
            type: 'fit'
        }
    }
});