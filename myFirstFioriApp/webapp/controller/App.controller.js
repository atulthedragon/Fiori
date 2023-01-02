sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "jerry/models/models"],
    function(Controller,models){
        return Controller.extend("jerry.controller.App",{
            onInit:function(){
            //step 1:get the container control object-which will encapsulate my views
            var oApp = this.getView().byId("myApp");
            //step 2:create the objects of views which needs to be added inside the container
            var oView1 = new sap.ui.view("idView1",{
                viewName:"jerry.view.View1",
                type:"XML"
            });                
            var oView2 = new sap.ui.view("idView2",{
                viewName:"jerry.view.View2",
                type:"XML"
            });               
            var oEmptyView2 = new sap.ui.view("idEmpty",{
                viewName:"jerry.view.Empty",
                type:"XML"
            });               

            //step 3: add your newly created views inside the container control
            //oApp.addPage(oView1).addPage(oView2);
            oApp.addMasterPage(oView1).addDetailPage(oEmptyView2).addDetailPage(oView2);

            //Initialize the model and set at the app view level
            //ultimately sets the model at the application level
            var oModel = models.createFruitsModel();
            this.getView().setModel(oModel);
        }
        });

    }
);