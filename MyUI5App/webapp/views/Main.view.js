sap.ui.jsview("jerry.views.Main", {
    getControllerName: function () {
        return "jerry.controllers.Main";
    },
    createContent: function (oController) {
        var oInp = new sap.m.Input("idInp");
        var oBtn = new sap.m.Button("idBtn", {
            text: "Click me",
            type: sap.m.ButtonType.Accept,
            press:oController.zumba
        });
        //oBtn.attachPress();
        return [oInp,oBtn];
    }
})