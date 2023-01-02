sap.ui.define(
    ["jerry/controllers/BaseController",
    "jerry/models/model",
    "jerry/formatter/lifeSaver"],
    function (Controller,myModel,lifeSaver) {
        return Controller.extend("jerry.controllers.MyXMLView", {
            //oCore:sap.ui.getCore(),
            formatter:lifeSaver,
            onInit:function(){
                var oModel = myModel.createMyJSONModel("models/mockData/myData.json");
                //Step 3:Make the model aware to app/view/control level
                //Default model
                this.oCore.setModel(oModel);
                sap.ui.getCore().setModel(oModel);

                var oModel2 = myModel.createMyJSONModel("models/mockData/myData2.json");
                this.oCore.setModel(oModel2,"herculis");
                
                var oResource = myModel.createResourceModel();
                this.oCore.setModel(oResource,"i18n")

                //var oModelXML = myModel.createMyXMLModel("models/mockData/myNewData.xml");
                //this.oCore.setModel(oModelXML);
                
                //Binding using JS Code - 2 variations 
                //var oSal = this.getView().byId("idSal");
                //var oCur = this.getView().byId("idCurr");
                //oSal.bindValue("/empStr/salary");
                //oCur.bindProperty("value","/empStr/currency");

            },
            wallah: function () {
                //when we use XML Views, the id of any control is changed by SAP UI5 at runtime,
                //the id is made by the viewId--controlId
                //var oPage = sap.ui.getCore().byId("myPage");
                //We need to do use following logic - 
                //this represents control object
                //we can get the view object from the controller object using this.getView()
                //From the view object since control is direct child of view, we can call byId("control id")
                var oPage = this.getView().byId("myPage");
                oPage.setTitle("Title is changed");
                //alert("Output is available");
            },
            onFlip:function(){
                var oDefModel = sap.ui.getCore().getModel();
                var oHerModel = sap.ui.getCore().getModel("herculis");
                this.oCore.setModel(oHerModel);
                this.oCore.setModel(oDefModel,"herculis");
            },
            onRowSelect:function(oEvent){
               //Step 1: I need to know which record was clicked by user
               var oContext = oEvent.getParameter("rowContext");
               //Step 2:Get the address of the element(memory) of that record
               var elementPath = oContext.getPath();
               //Step 3:Connect our simple form with element address as absolute path
               var oSimple = this.getView().byId("idForm");
               oSimple.bindElement(elementPath);
               //Step 4:Children of simple form should have relative path binding 
                
            }
        });
    });