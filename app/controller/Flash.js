Ext.define("PinYin.controller.Flash", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            FlashListContainer: "flashlistcontainer",
			CardEditor: "cardeditor",
			//SettingsContainer: "settingscontainer"
			FlashMe: "flashme"
        },
        control: {
            FlashListContainer: {
                // The commands fired by the notes list container.
                newNoteCommand: "onNewNoteCommand",
                editNoteCommand: "onEditNoteCommand",
				HomeButtonCmd: "onHomeButtonTap",
				RevealAnswer: "onRevealAnswerTap"
			},
			SettingsContainer: {
                // The commands fired by the notes list container.
                HomeButtonCmd: "onHomeButtonTap"
            },
			FlashMe: {
                HomeButtonCmd: "onHomeButtonTap"
            },
			CardEditor: {
                BackButtonCmd: "onBackButtonTap",
				SaveButtonCmd: "onSaveButtonTap",
				DelButtonCmd: "onDelButtonTap"	
			},
        }
    },

    // Commands.
	
	//This doesnt work yet
	onRevealAnswerTap: function () {
		console.log("Should switch panels");
	},	
	//This is used to return a random number which can be used to create a unique identifier
	getRandomInt: function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	//This activates the card editing function (the little blue button on the card line)
	activateCardEditor: function (record) {
		var CardEditor = this.getCardEditor();
		CardEditor.setRecord(record); // load() is deprecated.
		//Ext.Viewport.animateActiveItem(CardEditor, this.slideLeftTransition); <---This doesnt work, but the following line does?
		Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.CardEditor'), {type: 'slide', direction: 'left'});
	},
	//actual button to open new note input function
	onNewNoteCommand: function () {

		var now = new Date();
		var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

		var newCard = Ext.create("PinYin.model.Card", {
			id: noteId,
			dateCreated: now,
			title: "",
			narrative: ""
		});

		this.activateCardEditor(newCard);
	},	
    onEditNoteCommand: function (list, record) {
		this.activateCardEditor(record);
    },
	onHomeButtonTap: function () {
		Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.Main'), {type: 'slide', direction: 'right'});
    },
	onBackButtonTap: function () {
		Ext.Viewport.animateActiveItem(Ext.create('PinYin.view.FlashListContainer'), {type: 'slide', direction: 'right'});
    },
    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});