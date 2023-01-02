sap.ui.define(
    [],
    function(){
        return {
            createJSONModel:function(sPath){
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData(sPath);
                return oModel;
            
            }
        };
});