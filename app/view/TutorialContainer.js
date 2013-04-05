Ext.define("PinYin.view.TutorialContainer", {
    extend: "Ext.Container",
    alias: "widget.tutorialcontainer",
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
            title: 'Getting Started',
            docked: "top",
			items: [
                homeButton                
            ]
        };
		
		var VideoPanel = {
			xtype: 'video',
			url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
			posterUrl: 'resources/images/demo.png'
		};

        this.add([topToolbar,VideoPanel]);
    },
	
	onHomeButtonTap: function () {
        Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.Main'), {type: 'slide', direction: 'right'});
    },

    config: {
		style: 'z-index: 5;	background-color: rgb(255, 255, 255); display: block; background-image: url(resources/images/lined-background.png)',
        layout: {
            type: 'fit'
        }
    }
});