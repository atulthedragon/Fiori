sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/m/MessageBox",
        "sap/m/MessageToast"],
    function (Controller, MessageBox, MessageToast) {
        return Controller.extend("jerry.controller.View2", {
            onBack: function () {
                //Step 1: get the parent control of the page
                var oApp = this.getView().getParent();
                //Step 2 :Navigate to the next View
                oApp.to("idView1");
            },
            locationOfHoliday: "Spain",
            onApprove: function () {
                var that = this;
                MessageBox.confirm("Are you sure, you wanna go for vaccation?", {
                    title: "Yo Yo Holiday",
                    onClose: this.afterMsgClose.bind(this)
                })
            },
            afterMsgClose:function (response) {
                if (response === "OK") {
                    MessageToast.show("Wallah your vacation is now approved to " + this.locationOfHoliday);
                }
            },
            onReject: function () { }
        });

    }
);