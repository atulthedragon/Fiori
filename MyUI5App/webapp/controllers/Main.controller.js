sap.ui.define(["sap/ui/core/mvc/Controller"],
    function (Controller) {
        return Controller.extend("jerry.controllers.Main", {
            //constructor of your class(Main)
            onInit: function () {
                console.log("Constructor called after controller was initialized");
            },
            zumba:function () {
                //alert("Welcome to UI5");
                //this pointer points to object of current control
                //this.setType("Reject");
                //this.setEnabled(false);
                //how to get object of a UI5 control
                var myInp = sap.ui.getCore().byId("idInp");
                alert(myInp.getValue());
            }
        });
    }
);
//when we use the sap standard classes as module in js file we should convert the . to /
//->sap.ui.core.mvc.Controller -> sap/ui/core/mvc/Controller