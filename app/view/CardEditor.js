Ext.define("PinYin.view.CardEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.cardeditor",
    config:{
        scrollable:'vertical'
    },
    initialize: function () {

        this.callParent(arguments);
		
		var backButton = {
            xtype: "button",
            ui: "back",
            text: "Back",
            handler: this.onBackBtnTap,
            scope: this
        };

        var saveButton = {
            xtype: "button",
            ui: "action",
            text: "Save",
            handler: this.onSaveBtnTap,
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: "Edit Note",
            items: [
                backButton,
                { xtype: "spacer" },
                saveButton
            ]
        };

        var deleteButton = {
            xtype: "button",
            iconCls: "trash",
            iconMask: true,
            scope: this,
            handler: this.onDelBtnTap,
            scope: this
        };

        var bottomToolbar = {
            xtype: "toolbar",
            docked: "bottom",
            items: [
                deleteButton
            ]
        };

        var noteTitleEditor = {
            xtype: 'textfield',
            name: 'title',
            label: 'Title',
            required: true
        };

        var noteNarrativeEditor = {
            xtype: 'textareafield',
            name: 'narrative',
            label: 'Narrative'
        };

        this.add([
            topToolbar,
            { xtype: "fieldset",
                items: [noteTitleEditor, noteNarrativeEditor]
            },
            bottomToolbar
        ]);
    },
	onBackBtnTap: function () {
		this.fireEvent("BackButtonCmd", this);
    },
	onSaveBtnTap: function () {
		this.fireEvent("SaveButtonCmd", this);
    },
	onDelBtnTap: function () {
		this.fireEvent("DelButtonCmd", this);
    },

});