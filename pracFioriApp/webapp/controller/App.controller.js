sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "jiraya/models/model"],
    function(controller,model){
        return controller.extend("jiraya.controller.App",{
            onInit:function(){
                //Step1: Get the App object inside the view
                var oApp = this.getView().byId("myApp");
                //Step 2:Create the view objects for View1 and View 2
                var oView1 = new sap.ui.view("idView1",{
                    viewName:"jiraya.view.View1",
                    type:"XML"
                });
                var oView2 = new sap.ui.view("idView2",{
                    viewName:"jiraya.view.View2",
                    type:"XML"
                });
                var oEmptyView = new sap.ui.view("idEmptyView",{
                    viewName:"jiraya.view.Empty",
                    type:"XML"
                });

                //Step 3:Add the pages
                oApp.addMasterPage(oView1).addDetailPage(oEmptyView).addDetailPage(oView2);
                //Step 4:Create fruits model
                var oModel = model.createFruitsModel();
                //Step 5:Set at view level
                this.getView().setModel(oModel);
            }
        });
    });