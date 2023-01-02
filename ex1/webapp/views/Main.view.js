sap.ui.jsview("tom.views.Main", {
    getControllerName: function () {
        //Tell the address of controller
        return "tom.controllers.Main";
    },
    createContent: function () {
        var oInp = new sap.m.Input("idInp", {
            placeholder: "Enter a text",
            width: "30%"
        });
        var oBtn = new sap.m.Button("idBtn", {
            text: "Click me",
            press: function () {
                var myInput = sap.ui.getCore().byId("idInp").getValue();
                sap.m.MessageToast.show(myInput);
            }
        });
        return [oInp, oBtn];
    }
})