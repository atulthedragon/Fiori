sap.ui.define(["sap/ui/core/mvc/Controller"],
    function(controller){
        return controller.extend("tobirama.controller.Main",{
            onInit:function(){

            },
            magic:function(){
                var myInput = sap.ui.getCore().byId("idInp").getValue();
                myInput = 'Your email Id is -' + myInput ;
                sap.m.MessageToast.show(myInput);
            }

        });
    });