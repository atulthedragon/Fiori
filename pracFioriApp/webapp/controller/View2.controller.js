sap.ui.define(
    ["sap/ui/core/mvc/Controller",
     "sap/m/MessageBox",
    "sap/m/MessageToast"],
    function (controller,MessageBox,MessageToast) {
        return controller.extend("jiraya.controller.View2", {
            onInit: function () {

                //By Default show this fragment
                this.showFragment("fruitDisplay");

            },
            onBack: function () {
                //Step 1:Get the parent App COntainer object
                var oApp = this.getView().getParent().getParent();
                //Step 2: Move to First page
                oApp.to("idView1");
            },
            locationOfHolidays:"Romania",
            onApprove:function(){
                //alert("Work in Progress, come later");
                //var that = this;
                MessageBox.confirm("Do you really want to go on holidays",{
                    title:"Just asking?",
                    onClose:this.onBandKarna.bind(this)
                });
            },
            onBandKarna:function(response){
                if(response==="OK"){
                    MessageToast.show("Wonderful, your vacations to " + this.locationOfHolidays + " are approved." );
                };
            },
            onReject:function(){
                alert("Work in Progress, come later");
            },
            onDisplay:function(){
                this.showFragment("fruitDisplay");
            },
            onEdit:function(){
                this.showFragment("fruitChange");
            },
            showFragment:function(fragmentName){

                this.loadFragment({
                    name:"jiraya.fragments." + fragmentName,
                    type:"XML" 
                });
            }
        });
    });