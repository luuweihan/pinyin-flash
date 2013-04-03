Ext.define("PinYin.store.Cards", {
    extend: "Ext.data.Store",
    config: {
        model: "PinYin.model.Card",
        data: [
            { title: "Flash Card 1", narrative: "narrative 1" },
            { title: "Flash Card 2", narrative: "narrative 2" },
            { title: "Flash Card 3", narrative: "narrative 3" },
            { title: "Flash Card 4", narrative: "narrative 4" },
            { title: "Flash Card 5", narrative: "narrative 5" },
            { title: "Flash Card 6", narrative: "narrative 6" }
        ],
        sorters: [{ property: 'dateCreated', direction: 'DESC'}]
    }
});
