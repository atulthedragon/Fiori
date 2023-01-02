How to create a model---->
1) Create a  brand new model object
    var oModelJSON = new sap.ui.model.json.JSONModel();
    var oModelXML = new sap.ui.model.xml.XMLModel();
    var oModelRes = new sap.ui.model.resource.ResourceModel(); 
    var oDataModel = new sap.ui.model.v2.odata.ODataModel();

2) We need to set/load data to model object
oModel.setData(data) / oModel.loadData(path/url)

3) Once model object is ready our app should know it
--set the model object at app level -all views can recgonize it
sap.ui.getCore().setModel(oModel);
--setting model at view level
this.getView().setModel(oModel);
--setting model at Control level
this.getView().byId("control ID").setModel(oModel);

4)Data binding needs to be carried out with property/aggregation of our control

Create address->
{
	"empStr": {
		"empId": "100",
		"eName": "Atul"
	},
	"empTable": [{
		"empId": "200",
		"eName": "Ankush"
	}, {
		"empId": "300",
		"eName": "Satyam"
	}]
}
1) Every curly braces is converted to an address
Get my name - /empStr/eName
2) Every array item which starts with [ converts to /index
Get Ankush name - /empTable/0/eName

API offered to play with data->
oModel.getProperty("address") - get the data at that address eg. address of my whole JSON - /
oModel.setProperty("address",value) - change the data at the address

Apart from onInit, our controller also have 3 methods which are known as hook methods - 
1) onExit - the method works like destructor of a class, it is called when the class object is getting destroyed by SAPUI5 framework. It can be used to write all the cleanup code inside when u are coming out on closing the application 
2) onBeforeRendering - This method will be called everytime before the view is rendered on the screen to the user. This is like PBO in dialog programming in SAP GUI. It is used to make the changes on to your view before the view is displayed to the end user. 
3) onAfterRendering - this method will also be called everytime the view is loaded. But it will get called after the view is displayed to the user. So technically if there is any effect which you want to show to the user at front of the screen you can use this method