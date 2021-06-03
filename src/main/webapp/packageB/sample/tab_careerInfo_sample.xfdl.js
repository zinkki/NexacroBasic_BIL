(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tabPage1");
            this.set_titletext("강사이력정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSear", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"codeSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"lecNo\" type=\"STRING\" size=\"256\"/><Column id=\"careerSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"careerNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCar", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lecNo\" type=\"STRING\" size=\"256\"/><Column id=\"careerSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"careerSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"careerNo\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"startDy\" type=\"STRING\" size=\"256\"/><Column id=\"endDy\" type=\"STRING\" size=\"256\"/><Column id=\"sortNo\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cbo00","20","20","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            obj.set_text("cbo00");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","20","40",null,"100","191",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsCar");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"경력번호\"/><Cell col=\"1\" text=\"내용\"/><Cell col=\"2\" text=\"시작일\"/><Cell col=\"3\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:careerNo\"/><Cell col=\"1\" text=\"bind:description\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:startDy\" edittype=\"date\"/><Cell col=\"3\" text=\"bind:endDy\" edittype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,180,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("tab_careerInfo_sample.xfdl", function() {

        this.tabPage1_onload = function(obj,e)
        {
        	this.dsSear.clearData();
        	this.dsSear.addRow();
        	this.dsSear.setColumn(0, "codeSeCd", "CAREER_SE_CD");
        	this.fn_selectCodeList();

        };


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectCodeList":
        			this.cbo00.set_index(0);
        			break;
        	}
        };


        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        this.fn_selectCodeList = function()
        {
        	var strSvcId    = "selectCodeList";
        	var strSvcUrl   = "selectCodeList.do";
        	var inData      = "input1=dsSear";
        	var outData     = "dsCd=output1";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback");
        };

        this.fn_selectCareerList = function()
        {
        	this.dsSear.clearData();
        	this.dsSear.addRow();
        	this.dsSear.setColumn(0, "lecNo", this.parent.parent.parent.dsLec.getColumn(this.parent.parent.parent.dsLec.rowposition, "lecNo"));
        	this.dsSear.setColumn(0, "careerSeCd", this.cbo00.value);

        	var strSvcId    = "selectCareerList";
        	var strSvcUrl   = "selectCareerList.do";
        	var inData      = "input1=dsSear";
        	var outData     = "dsCar=output1";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tabPage1_onload,this);
            this.cbo00.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
        };
        this.loadIncludeScript("tab_careerInfo_sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
