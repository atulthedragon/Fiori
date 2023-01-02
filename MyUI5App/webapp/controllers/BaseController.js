sap.ui.define(["sap/ui/core/mvc/Controller"],
    function (oController) {
        return oController.extend("jerry.controllers.BaseController", {
            oCore: sap.ui.getCore(),
            reuseFunctions:function(){
                alert("Chal gaya");
            }
        });
    });