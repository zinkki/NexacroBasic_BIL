(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsIn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"comKor\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccount", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"profitCost\" type=\"STRING\" size=\"256\"/><Column id=\"bigGroup\" type=\"STRING\" size=\"256\"/><Column id=\"middleGroup\" type=\"STRING\" size=\"256\"/><Column id=\"smallGroup\" type=\"STRING\" size=\"256\"/><Column id=\"detailGroup\" type=\"STRING\" size=\"256\"/><Column id=\"comments\" type=\"STRING\" size=\"256\"/><Column id=\"transactionMoney\" type=\"INT\" size=\"256\" prop=\"TEXT\"/><Column id=\"transactionDate\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"accountSeq\" type=\"STRING\" size=\"256\"/><Column id=\"uiRowType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAllCode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"comKor\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmpAccount", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"profitCost\" type=\"STRING\" size=\"256\"/><Column id=\"bigGroup\" type=\"STRING\" size=\"256\"/><Column id=\"middleGroup\" type=\"STRING\" size=\"256\"/><Column id=\"smallGroup\" type=\"STRING\" size=\"256\"/><Column id=\"detailGroup\" type=\"STRING\" size=\"256\"/><Column id=\"comments\" type=\"STRING\" size=\"256\"/><Column id=\"transactionMoney\" type=\"INT\" size=\"256\" prop=\"TEXT\"/><Column id=\"transactionDate\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"accountSeq\" type=\"STRING\" size=\"256\"/><Column id=\"uiRowType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd01","10","30",null,"316","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAccount");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"214\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"??????/??????\"/><Cell col=\"1\" text=\"???\"/><Cell col=\"2\" text=\"???\"/><Cell col=\"3\" text=\"???\"/><Cell col=\"4\" text=\"???\"/><Cell col=\"5\" text=\"??????\"/><Cell col=\"6\" text=\"??????\"/><Cell col=\"7\" text=\"????????????\"/><Cell col=\"8\" text=\"?????????\"/><Cell col=\"9\" text=\"?????????\"/></Band><Band id=\"body\"><Cell displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:profitCost\" combodataset=\"dsAllCode\" combocodecol=\"code\" combodatacol=\"comKor\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:bigGroup\" combodataset=\"dsAllCode\" combocodecol=\"code\" combodatacol=\"comKor\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:middleGroup\" combodataset=\"dsAllCode\" combocodecol=\"code\" combodatacol=\"comKor\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:smallGroup\" combodataset=\"dsAllCode\" combocodecol=\"code\" combodatacol=\"comKor\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:detailGroup\" combodataset=\"dsAllCode\" combocodecol=\"code\" combodatacol=\"comKor\"/><Cell col=\"5\" text=\"bind:comments\" edittype=\"text\" editmaxlength=\"100\"/><Cell col=\"6\" text=\"bind:transactionMoney\" edittype=\"mask\" editinputtype=\"number\" maskeditformat=\"#,#\" editmaxlength=\"11\"/><Cell col=\"7\" text=\"bind:transactionDate\" edittype=\"date\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:writer\"/><Cell col=\"9\" text=\"bind:regDate\" displaytype=\"date\" maskeditformat=\"####-##-##\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;transactionMoney&quot;)\" displaytype=\"mask\" maskeditformat=\"#,#\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn",null,"10","60","20","130",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("??????");
            this.addChild(obj.name, obj);

            obj = new Button("btn01",null,"10","60","20","70",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("??????");
            this.addChild(obj.name, obj);

            obj = new Button("btn02",null,"10","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("??????");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","50","410","270","180",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsAllCode");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"comKor\"/><Cell col=\"2\" text=\"category\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:comKor\"/><Cell col=\"2\" text=\"bind:category\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("editableGrid_sample.xfdl", function() {

        this.test_onload = function(obj,e)
        {
        	this.fn_searchCodeList();
        	this.fn_searchAccountList();
        };


        /************************************************************************************************
         * CALLBACK ?????? ????????????(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// ?????? ??? ?????? ?????? ??????
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "searchCode":
        			break;

        		case "saveAccount":
        			alert("?????????????????????.");
        			this.fn_searchAccountList();
        			break;

        		case "deleteAccount":
        			alert("?????????????????????.");
        			this.fn_searchAccountList();
        			break;
        	}

        };



        /************************************************************************************************
        * TRANSACTION ????????? ?????? ??????
        ************************************************************************************************/

        this.fn_searchCodeList = function ()
        {
         	var strSvcId    = "searchCode";
        	var strSvcUrl   = "selectAllCode.do";
        	var inData      = "";
        	var outData     = "dsAllCode=output000";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback", true);
        };

        this.fn_searchAccountList = function ()
        {
        	var strSvcId    = "accountList";
        	var strSvcUrl   = "accountList.do";
        	var inData      = "";
        	var outData     = "dsAccount=output01";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback", true);
        }

        this.fn_saveAccountList = function ()
        {
         	var strSvcId    = "saveAccount";
        	var strSvcUrl   = "saveAccount.do";
        	var inData      = "dsAccount=dsAccount";
        	var outData     = "";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback", true);
        };

        this.fn_deleteAccount = function ()
        {
         	var strSvcId    = "deleteAccount";
        	var strSvcUrl   = "deleteAccount.do";
        	var inData      = "dsAccount=dsTmpAccount";
        	var outData     = "";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback", true);
        };



        /************************************************************************************************
         * ??? COMPONENT ??? EVENT ??????
        ************************************************************************************************/
        //????????????
        this.addBtn_onclick = function(obj,e)
        {
        	this.dsAccount.addRow();
        };

        //????????????
        this.btn01_onclick = function(obj,e)
        {
        	if(!this.confirm("?????????????????????????")){
        		return;
        	}

        	this.dsTmpAccount.clearData();
        	this.dsTmpAccount.addRow();
        	this.dsTmpAccount.copyRow(0, this.dsAccount, this.dsAccount.rowposition);

        	this.fn_deleteAccount();
        };

        //????????????
        this.btn02_onclick = function(obj,e)
        {
        	if(!this.confirm("?????????????????????????")){
        		return;
        	}

        	for(var i=0; i<this.dsAccount.getRowCount(); i++)
        	{
        		this.dsAccount.setColumn(i, "uiRowType", this.dsAccount.getRowType(i));

        		var mon = this.dsAccount.getColumn(i, "transactionMoney");
        		if(mon != "" && mon != null && mon.toString().length > 11){
        			alert("????????? 11?????? ?????? ?????????????????????.");
        			return;
        		}

        	}

        	this.fn_saveAccountList();
        };

        //????????? ?????? ???????????? ?????????
        this.grd01_ondropdown = function(obj,e)
        {
        	if(e.col < 5){
        		for(var i=e.col ; i<5 ; i++){
        			this.dsAccount.setColumn(e.row, i, "");
        		}
        		if(e.col == 0){
        			this.dsAllCode.filter("category=='A000000'");
        		}else{
        			if(this.dsAllCode.getColumn(e.row, e.col-1) != ""){
        				this.dsAllCode.filter("category=='"+this.dsAccount.getColumn(e.row, e.col-1)+"'");
        			}else{
        				this.dsAllCode.filter("category==''");
        			}
        		}
        	}
        };


        /************************************************************************************************
        * ????????? FUNCTION ??????
        ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_onload,this);
            this.grd01.addEventHandler("ondropdown",this.grd01_ondropdown,this);
            this.addBtn.addEventHandler("onclick",this.addBtn_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.dsAccount.addEventHandler("onrowposchanged",this.dsAccount_onrowposchanged,this);
            this.dsAccount.addEventHandler("oncolumnchanged",this.dsAccount_oncolumnchanged,this);
            this.dsTmpAccount.addEventHandler("onrowposchanged",this.dsAccount_onrowposchanged,this);
            this.dsTmpAccount.addEventHandler("oncolumnchanged",this.dsAccount_oncolumnchanged,this);
        };
        this.loadIncludeScript("editableGrid_sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
