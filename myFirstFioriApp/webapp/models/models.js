sap.ui.define(["sap/ui/model/json/JSONModel"],
    function(JSONModel){
        return {
            createFruitsModel:function(){
                //Step 1:Create a brand new model object
                var oModel = new JSONModel();
                //Step 2:Set/Load the data
                oModel.loadData("models/mockData/fruits.json");
                return oModel;
            },
            createResourceModel:function(){
                var oResource = new sap.ui.model.resource.ResourceModel({
                    bundleUrl:"i18n/i18n.properties"
                });                
                return oResource;
            }
        };

    });