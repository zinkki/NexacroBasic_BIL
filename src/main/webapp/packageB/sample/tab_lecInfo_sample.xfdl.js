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
            this.set_titletext("강사기본정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLec", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lecNo\" type=\"STRING\" size=\"256\"/><Column id=\"lecNm\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"birthDy\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"lecLvSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"lecLvSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireDy\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSear", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"codeSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"lecNo\" type=\"STRING\" size=\"256\"/><Column id=\"careerSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"careerNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt00","70","10","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","10","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("강사번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","330","10","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","270","10","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("강사명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02","70","50","720","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","50","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","270","30","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("강사등급");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","530","10","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","10","30","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("생년월일");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","530","30","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("고용일");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","330","30","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","70","30","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_format("@@@@\'-\'@@\'-\'@@");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk01","590","30","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_format("@@@@\'-\'@@\'-\'@@");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk02","590","10","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_format("@@@\'-\'@@@@\'-\'@@@@");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1010,180,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","edt00","value","dsLec","lecNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt01","value","dsLec","lecNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt02","value","dsLec","address");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cbo00","value","dsLec","lecLvSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","msk00","value","dsLec","birthDy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","msk01","value","dsLec","hireDy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","msk02","value","dsLec","telNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("tab_lecInfo_sample.xfdl", function() {

        this.tabPage1_onload = function(obj,e)
        {
        	this.dsSear.clearData();
        	this.dsSear.addRow();
        	this.dsSear.setColumn(0, "codeSeCd", "LEC_LV_SE_CD");
        	this.fn_selectCodeList("dsCd2");

        	this.dsLec.clearData();
        	this.dsLec.addRow();
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tabPage1_onload,this);
            this.dsLec.addEventHandler("onrowposchanged",this.dsLec_onrowposchanged,this);
        };
        this.loadIncludeScript("tab_lecInfo_sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
