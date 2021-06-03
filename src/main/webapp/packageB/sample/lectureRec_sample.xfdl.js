(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lectureRec");
            this.set_titletext("강사정보등록");
            this.getSetter("classname").set("Work");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLec", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lecNo\" type=\"STRING\" size=\"256\"/><Column id=\"lecNm\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"birthDy\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"lecLvSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"lecLvSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireDy\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCar", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lecNo\" type=\"STRING\" size=\"256\"/><Column id=\"careerSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"careerSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"careerNo\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"startDy\" type=\"STRING\" size=\"256\"/><Column id=\"endDy\" type=\"STRING\" size=\"256\"/><Column id=\"sortNo\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCd1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCd2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSear", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"codeSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"lecNo\" type=\"STRING\" size=\"256\"/><Column id=\"careerSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"careerNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmpLec", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lecNo\" type=\"STRING\" size=\"256\"/><Column id=\"lecNm\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"birthDy\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"lecLvSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"lecLvSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireDy\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmpCar", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lecNo\" type=\"STRING\" size=\"256\"/><Column id=\"careerSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"careerSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"careerNo\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"startDy\" type=\"STRING\" size=\"256\"/><Column id=\"endDy\" type=\"STRING\" size=\"256\"/><Column id=\"sortNo\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","20","40",null,"150","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsLec");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강사번호\"/><Cell col=\"1\" text=\"강사명\"/><Cell col=\"2\" text=\"전화번호\"/><Cell col=\"3\" text=\"생년월일\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"강사등급\"/><Cell col=\"6\" text=\"고용일\"/></Band><Band id=\"body\"><Cell text=\"bind:lecNo\"/><Cell col=\"1\" text=\"bind:lecNm\"/><Cell col=\"2\" text=\"bind:telNo\"/><Cell col=\"3\" text=\"bind:birthDy\"/><Cell col=\"4\" text=\"bind:address\"/><Cell col=\"5\" text=\"bind:lecLvSeNm\" suppress=\"1\"/><Cell col=\"6\" text=\"bind:hireDy\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","20","210","1010","210",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("강사기본정보");
            obj.set_url("sample::tab_lecInfo_sample.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("강사이력정보");
            obj.set_url("sample::tab_careerInfo_sample.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new Button("btn00",null,"218","80","20","180",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn01",null,"218","80","20","100",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn02",null,"218","80","20","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","500","19",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("강사관리");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample::tab_lecInfo_sample.xfdl");
            this._addPreloadList("fdl","sample::tab_careerInfo_sample.xfdl");
        };
        
        // User Script
        this.registerScript("lectureRec_sample.xfdl", function() {
        var tab1 = this.tab00.Tabpage1.form;
        var tab2 = this.tab00.Tabpage2.form;

        this.form_onload = function(obj,e)
        {
        	this.fn_selectLecturerList();
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
        		case "selectLecturerList":
        			break;

        		case "selectCareerList":
        			break;

        		case "mergeLecturer":
        			alert("저장되었습니다.");
        			this.fn_selectLecturerList();
        			break;

        		case "mergeCareer":
        			alert("저장되었습니다.");
        			this.fn_selectLecturerList();
        			break;

        		case "deleteLecturer":
        			alert("삭제되었습니다.");
        			this.fn_selectLecturerList();
        			break;

        		case "deleteCareer":
        			alert("삭제되었습니다.");
        			this.fn_selectLecturerList();
        			break;
        	}
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        this.fn_selectLecturerList = function()
        {
        	var strSvcId    = "selectLecturerList";
        	var strSvcUrl   = "selectLecturerList.do";
        	var inData      = "";
        	var outData     = "dsLec=output1";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback");
        };

        this.fn_mergeLecturer = function(OutDs)
        {
        	var strSvcId    = "mergeLecturer";
        	var strSvcUrl   = "mergeLecturer.do";
        	var inData      = "input1=dsTmpLec";
        	var outData     = "";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback");
        };

        this.fn_mergeCareer = function(OutDs)
        {
        	var strSvcId    = "mergeCareer";
        	var strSvcUrl   = "mergeCareer.do";
        	var inData      = "input1=dsCar";
        	var outData     = "";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback");
        };

        this.fn_deleteLecturer = function(OutDs)
        {
        	var strSvcId    = "deleteLecturer";
        	var strSvcUrl   = "deleteLecturer.do";
        	var inData      = "input1=dsTmpLec";
        	var outData     = "";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback");
        };

        this.fn_deleteCareer = function(OutDs)
        {
        	var strSvcId    = "deleteCareer";
        	var strSvcUrl   = "deleteCareer.do";
        	var inData      = "input1=dsTmpCar";
        	var outData     = "";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback");
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        //dsLec rowposition 변경이벤트
        this.dsLec_onrowposchanged = function(obj,e)
        {
        	this.fn_refreshInfo();
        };

        //탭페이지 변경이벤트
        this.tab00_onchanged = function(obj,e)
        {
        	this.fn_refreshInfo();
        };

        //추가버튼
        this.btn00_onclick = function(obj,e)
        {
        	if(this.tab00.tabindex == 0){
        		tab1.dsLec.clearData();
        		tab1.dsLec.addRow();
        	}else{
        		tab2.dsCar.addRow();
        	}
        };

        //저장버튼
        this.btn01_onclick = function(obj,e)
        {
        	if(!this.confirm("저장하시겠습니까?")){
        		return;
        	}

        	if(this.tab00.tabindex == 0){
        		this.dsTmpLec.clearData();
        		this.dsTmpLec.addRow();
        		this.dsTmpLec.copyRow(0, tab1.dsLec, tab1.dsLec.rowposition);

        		this.fn_mergeLecturer();
        	}else{
        		this.dsCar.clearData();
        		for(var i=0;i<tab2.dsCar.getRowCount();i++){
        			this.dsCar.addRow();
        			this.dsCar.copyRow(i, tab2.dsCar, i);
        			if(tab2.dsCar.getRowType(i) == 2){
        				this.dsCar.setColumn(i, "lecNo", this.dsLec.getColumn(this.dsLec.rowposition, "lecNo"));
        				this.dsCar.setColumn(i, "careerSeCd", tab2.cbo00.value);
        			}
        		}
        		this.fn_mergeCareer();
        	}
        };

        //삭제버튼
        this.btn02_onclick = function(obj,e)
        {
        	if(!this.confirm("삭제하시겠습니까?")){
        		return;
        	}

        	if(this.tab00.tabindex == 0){
        		this.dsTmpLec.clearData();
        		this.dsTmpLec.addRow();
        		this.dsTmpLec.copyRow(0, tab1.dsLec, tab1.dsLec.rowposition);

        		this.fn_deleteLecturer();
        	}else{

        		this.dsTmpCar.clearData();
        		this.dsTmpCar.addRow();
        		this.dsTmpCar.copyRow(0, tab2.dsCar, tab2.dsCar.rowposition);

        		this.fn_deleteCareer();
        	}
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        this.fn_refreshInfo = function()
        {
        	if(this.tab00.tabindex == 0){
        		tab1.dsLec.clearData();
        		tab1.dsLec.addRow();
        		tab1.dsLec.copyRow(0, this.dsLec, this.dsLec.rowposition);
        	}else{
        		tab2.fn_selectCareerList();
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.dsLec.addEventHandler("onrowposchanged",this.dsLec_onrowposchanged,this);
        };
        this.loadIncludeScript("lectureRec_sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
