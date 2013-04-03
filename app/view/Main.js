Ext.define("PinYin.view.Main", {
	extend: "Ext.Container",
	alias: "widget.main",
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.tab.Panel',
		'Ext.Anim'
    ],
				
		//Main Variables to build the view
	    initialize: function () {

        this.callParent(arguments);
        
		var topTitlebar = {
            xtype: "toolbar",
            title: 'Pinyin FlashCards',
            docked: "top"
           
		};
		
		var SpacerPanel	= {
			xtype: 'panel',
			html: '<br>'
		};
		//Welcom text and use instructions
		var InfoPanel = {
			xtype: 'panel',
				items: {							
					xtype: 'panel',
					style: 'width: 400px; margin-left: auto; margin-right: auto; text-align: center;',
					html: 'Pinyin FlashCards<br>another line of text'
				}
		};

		var BeginButton = {
            xtype: "button",
			style: 'width: 400px; margin-left: auto; margin-right: auto; text-align: center;',
            text: 'Begin',
            ui: 'action',
			listeners: {
				tap: {
					fn: function() {
						Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.FlashMe'), {type: 'flip'});
					},
					element: 'element'
				}
			}
        };
		
		var GettingStartedPanelBtn = {
			title: 'Get Started',
			iconCls: 'action',
			listeners: {
				//the 'painted' listeners was needed because for some reason it wasn't possible to hook into the tab Panel buttons that are generated.
				painted: {
					fn: function() {
						Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.TutorialContainer'), {type: 'slide', direction: 'left'});
					},
					element: 'element'
				}
			}
        };

		var CardListPanelBtn = {
			title: 'Card List',
			iconCls: 'compose',
			listeners: {
				//the 'painted' listeners was needed because for some reason it wasn't possible to hook into the tab Panel buttons that are generated.
				painted: {
					fn: function() {
						Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.FlashListContainer'), {type: 'slide', direction: 'left'});
					},
					element: 'element'
				}
			}
		};		
		
		var SettingsPanelBtn = {
			title: 'Settings',
			iconCls: 'settings',
			listeners: {
				//the 'painted' listeners was needed because for some reason it wasn't possible to hook into the tab Panel buttons that are generated.
				painted: {
					fn: function() {
						Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.SettingsContainer'), {type: 'slide', direction: 'left'});
					},
					element: 'element'
				}
			}
		};
		//This is the actual main view, where the user clicks on the begin button to open the flash cards
		var WelcomePanel = {
			title: 'Welcome',
			iconCls: 'home',
			style: 'z-index: 5;	background-color: rgb(255, 255, 255); display: block; background-image: url(resources/images/lined-background.png)',
			styleHtmlContent: true,
			scrollable: null,
				items: [
					topTitlebar,
					SpacerPanel,
					InfoPanel,
					SpacerPanel,
					BeginButton
				]
		};
		//This is the navigation bar, which switches between the various views.
		var TabPanel = {
			xtype: "tabpanel",
			tabBarPosition: 'bottom',
				items: [
					WelcomePanel,
					GettingStartedPanelBtn,
					CardListPanelBtn,
					SettingsPanelBtn
				]
		};
		//Actual building of view by combining variables
        this.add([TabPanel]);
		
    },
	//Config options
    config: {
		layout: {
            type: 'fit'
        }
    }
	
});
