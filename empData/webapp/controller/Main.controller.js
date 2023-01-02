sap.ui.define(
    ["sap/ui/core/mvc/Controller",
     "jiraya/models/model"],
    function(Controller,myModel){
        return Controller.extend("jiraya.controller.Main",{
            onInit:function(){
            var oModel = myModel.createJSONModel("models/mockData/employee.json");    
            sap.ui.getCore().setModel(oModel);
            //var oSal = this.getView().byId("idSal");
            //oSal.bindValue("/empStr/salary");
            //var oCur = this.getView().byId("idCur");
            //oCur.bindProperty("value","/empStr/currency");
            },
            onChg:function(){
                var oModel = sap.ui.getCore().getModel()
                oModel.setProperty("/empStr/eid","1000");
                oModel.setProperty("/empStr/ename","Ram");
                oModel.setProperty("/empStr/salary","10000");
                oModel.setProperty("/empStr/currency","PNR");
            },
            onShow:function(){
                var oModel = sap.ui.getCore().getModel();
                console.log(oModel.getProperty("/empStr"));
            },
            onRowSelect:function(oEvent){
               // alert("Something is selected");
            //Step 1:Get the row selected
            var oContext = oEvent.getParameter("rowContext");
            //Step 2:Get the address of element selected
            var bindingElement = oContext.getPath();
            //Step 3:Bind the control of form element with the address    
            var oForm = this.getView().byId("idForm1");
            oForm.bindElement(bindingElement);
        }
        });
});