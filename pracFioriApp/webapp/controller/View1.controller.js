sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "jiraya/formatter/formatter",
    "sap/ui/layout/form/SimpleForm"],
    function (controller,Formatter) {
        return controller.extend("jiraya.controller.View1", {
            formatter:Formatter,
            onInit: function () {

            },
            onNext: function () {
                //Step 1:Get the parent App Container object
                var oApp = this.getView().getParent().getParent();
                //Step 2: Move to Second page
                oApp.to("idView2");
            },
            onSearch: function (oEvent) {
                var searchStr = oEvent.getParameter("query");
                if(!searchStr){
                    searchStr = oEvent.getParameter("newValue");
                };
                //Step 1:Create a filter object
                var oFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, searchStr);
                var oFilter1 = new sap.ui.model.Filter("type", sap.ui.model.FilterOperator.Contains, searchStr);
                var oFilterMain = new sap.ui.model.Filter({
                    filters: [oFilter, oFilter1],and:false
                });
                //Step 2:Get the list object
                var oList = this.getView().byId("myList");
                //Step 3:Inject the filter result to list
                oList.getBinding("items").filter([oFilterMain]);

                //Step 1:Get the parent app container control
                //var oApp = this.getView().getParent();
                //Step 2:Get the second view object 
                //var oView2 = oApp.getPages()[1];
                //Step 3:Get the page object on second view and change the title
                //var oPg2 = oView2.getContent()[0];
                //oPg2.setTitle(searchStr); 
                //Go to Second View
                //this.onNext();
            },
            onItemPress:function(oEvent){
                //Step 1:Get The item which fired the pressed event.
                var itemPressed  = oEvent.getParameter("listItem").getBindingContextPath();
                //Step 2:Get view 2 object
                var oView2 = this.getView().getParent().getParent().getDetailPages()[1];
                //Step 3:Bind the view
                oView2.bindElement(itemPressed);

                //Get Page 2 object
                //    var oPage2 = oView2.getContent()[0];
                    //Code to add a simpleForm
                //    if(!this.myForm){
                //        this.myForm = new sap.ui.layout.form.SimpleForm("idMyForm",{
                //            title: new sap.ui.core.Title({text: "Fruit Details"}),
                //            editable:true,
                //            content:[
                //               new sap.m.Label({text:"Fruit Name"}),
                //                new sap.m.Input({value:"{name}"}),
                //                new sap.m.Label({text:"Acidity type"}),
                //                new sap.m.Input({value:"{type}"}),
                //                new sap.m.Label({text:"Color"}),
                //                new sap.m.Input({value:"{color}"})
                                
                //            ]
                //        });
                //        oPage2.addContent(this.myForm);    };
    
                this.onNext();
            }
        });
    });