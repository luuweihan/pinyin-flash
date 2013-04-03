Ext.define("PinYin.controller.Flash", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            FlashListContainer: "flashlistcontainer"
        },
        control: {
            FlashListContainer: {
                // The commands fired by the notes list container.
                newNoteCommand: "onNewNoteCommand",
                editNoteCommand: "onEditNoteCommand"
            }
        }
    },

    // Commands.
    onNewNoteCommand: function () {

        console.log("onNewNoteCommand");
    },
    onEditNoteCommand: function (list, record) {

        console.log("onEditNoteCommand");
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