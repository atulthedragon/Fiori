sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "jerry/formatter/formatter"],
    function (Controller,Formatter) {
        return Controller.extend("jerry.controller.View1", {
            formatter:Formatter,
            onInit: function () {
                //Step 1:get the object of UI control on which binding needs to be done
                //var oList = this.getView().byId("myFruitList");
                //Step 2:call the method to perform the binding
                //oList.bindAggregation("items",{
                //    path:'/fruits',
                //    template:new sap.m.StandardListItem({
                //        title:"{name}",
                //        description:"{type}",
                //        icon:"{image}"
                //    })});
            },
            onNext: function () {
                //Step 1: get the parent control of the page
                var oApp = this.getView().getParent().getParent();
                //Step 2 :Navigate to the next View
                oApp.to("idView2");
            },
            onSearch: function (oEvent) {
                //Step 1: Get the search string 
                var searchStr = oEvent.getParameter("query");
                if (!searchStr) {
                    searchStr = oEvent.getParameter("newValue");
                }
                //Step 1:Get the object of list control
                var oList = this.getView().byId("myList");
                //Step 2:construct the filter expression 2 operands and 1 operand - contains not equals
                var oFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, searchStr);
                var oFilter1 = new sap.ui.model.Filter("type", sap.ui.model.FilterOperator.Contains, searchStr);
                var oFilterMain = new sap.ui.model.Filter({
                    filters: [oFilter, oFilter1],
                    and: false
                });
                //Step 3:Inject the filter inside the items binding of the list
                oList.getBinding("items").filter([oFilterMain]);

                //Step 2: Get the App Container Control  Object
                //var oApp = this.getView().getParent();
                //Step 3:Get the second View Object
                //var oView2 = oApp.getPages()[1];
                //Step 4:Obtain the page which is inside view2  
                //var oPage = oView2.getContent()[0];
                //oPage.setTitle(searchStr);
                //sap.ui.getCore().byId("idView2--idPg2").setTitle(oString);
                //Step 5:Navigate to next screen
                //this.onNext();
            },
            onItemPress: function (oEvent) {
                //Get address of selected item{/fruits/1}
                var sPath = oEvent.getParameter("listItem").getBindingContextPath();
                //Get object of second view
                //var oView2 = this.getView().getParent().getPages()[1];
                var oView2 = this.getView().getParent().getParent().getDetailPages()[1];
                //Bind the whole element with whole of second view
                oView2.bindElement(sPath);
                this.onNext();
            },
            onDelete: function (oEvent) {
                //Step 1:Get the object of item on which delete was pressed
                var oItemToBeDeleted = oEvent.getParameter("listItem");
                //Step 2:Get the object of the source control = list itself 
                var oList = oEvent.getSource();
                //Step 3:Delete the item from the list of items
                oList.removeItem(oItemToBeDeleted);
            }
        });

    }
);