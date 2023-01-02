sap.ui.define([], function () {
    return {
        getState: function (status) {
            switch (status) {
                case "Out of Stock":
                    return "Warning";
                case "Discontinued":
                    return "Error";
                default:
                    return "Success";
            }
        }
    };
});