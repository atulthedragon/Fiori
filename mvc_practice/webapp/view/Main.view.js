sap.ui.jsview("tobirama.view.Main",{
    getControllerName:function(){
        return "tobirama.controller.Main";
    },
    createContent:function(oController){
        var oInput = new sap.m.Input("idInp",{
            type:sap.m.InputType.Email,
            placeholder:"Enter your Email Id",
            width:"40%",
            showClearIcon:true
        });
        var oBtn = new sap.m.Button("idBtn",{
            text:"Click here",
            type:sap.m.ButtonType.Ghost,
            press: oController.magic    
        });
        return[oInput,oBtn];
    }
})