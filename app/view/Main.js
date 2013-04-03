Ext.define("PinYin.view.Main", {
	extend: "Ext.Container",
	alias: "widget.main",
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.tab.Panel',
		'Ext.Anim'
    ],
	
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
						Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.FlashListContainer'), {type: 'flip'});
					},
					element: 'element'
				}
			}
        };
		
		var GettingStartedPanelBtn = {
			title: 'Get Started',
			iconCls: 'action',
			listeners: {
				painted: {
					fn: function() {
						Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.TutorialContainer'), {type: 'slide', direction: 'left'});
					},
					element: 'element'
				}
			}
        };
		
		var SettingsPanelBtn = {
			title: 'Settings',
			iconCls: 'settings',
			listeners: {
				painted: {
					fn: function() {
						Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.SettingsContainer'), {type: 'slide', direction: 'left'});
					},
					element: 'element'
				}
			}
		};
		
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
		
		var TabPanel = {
			xtype: "tabpanel",
			tabBarPosition: 'bottom',
				items: [
					WelcomePanel,
					GettingStartedPanelBtn,
					SettingsPanelBtn
				]
		};

        this.add([TabPanel]);
		
    },

    config: {
		layout: {
            type: 'fit'
        }
    }
	
});
