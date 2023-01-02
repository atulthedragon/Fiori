sap.ui.define(
    ["sap/ui/model/json/JSONModel"],
    function(JSONModel){
        return {
            createFruitsModel:function(){
                //Step 1:Create a model object
                var oModel = new JSONModel();
                //Step 2:Load the data from json file
                oModel.loadData("models/mockData/fruits.json");
                //Step 3:Return the model object
                return oModel;
            }
        };
    });
