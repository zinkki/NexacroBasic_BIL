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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"comKor\" type=\"STRING\" size=\"256\"/><Column id=\"dataset\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccount", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"accountSeq\" type=\"STRING\" size=\"256\"/><Column id=\"profitCost\" type=\"STRING\" size=\"256\"/><Column id=\"profitCostNm\" type=\"STRING\" size=\"256\"/><Column id=\"bigGroup\" type=\"STRING\" size=\"256\"/><Column id=\"bigGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"middleGroup\" type=\"STRING\" size=\"256\"/><Column id=\"middleGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"smallGroup\" type=\"STRING\" size=\"256\"/><Column id=\"smallGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"detailGroup\" type=\"STRING\" size=\"256\"/><Column id=\"detailGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"comments\" type=\"STRING\" size=\"256\"/><Column id=\"transactionMoney\" type=\"INT\" size=\"256\"/><Column id=\"transactionDate\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"uiRowType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAllCode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"comKor\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCd00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"comKor\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCd01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"comKor\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCd02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"comKor\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCd03", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"comKor\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCd04", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"comKor\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmpAccount", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"accountSeq\" type=\"STRING\" size=\"256\"/><Column id=\"profitCost\" type=\"STRING\" size=\"256\"/><Column id=\"profitCostNm\" type=\"STRING\" size=\"256\"/><Column id=\"bigGroup\" type=\"STRING\" size=\"256\"/><Column id=\"bigGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"middleGroup\" type=\"STRING\" size=\"256\"/><Column id=\"middleGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"smallGroup\" type=\"STRING\" size=\"256\"/><Column id=\"smallGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"detailGroup\" type=\"STRING\" size=\"256\"/><Column id=\"detailGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"comments\" type=\"STRING\" size=\"256\"/><Column id=\"transactionMoney\" type=\"INT\" size=\"256\"/><Column id=\"transactionDate\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"uiRowType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd01","10","30",null,"230","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAccount");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"214\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"수익/비용\"/><Cell col=\"1\" text=\"관\"/><Cell col=\"2\" text=\"항\"/><Cell col=\"3\" text=\"목\"/><Cell col=\"4\" text=\"과\"/><Cell col=\"5\" text=\"내용\"/><Cell col=\"6\" text=\"금액\"/><Cell col=\"7\" text=\"거래일자\"/><Cell col=\"8\" text=\"작성자\"/><Cell col=\"9\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:profitCostNm\" combodataset=\"dsCd00\" combocodecol=\"code\" combodatacol=\"comKor\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:bigGroupNm\" combodataset=\"dsCd01\" combocodecol=\"code\" combodatacol=\"comKor\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:middleGroupNm\" combodataset=\"dsCd02\" combocodecol=\"code\" combodatacol=\"comKor\" suppress=\"1\"/><Cell col=\"3\" text=\"bind:smallGroupNm\" combodataset=\"dsCd03\" combocodecol=\"code\" combodatacol=\"comKor\" suppress=\"1\"/><Cell col=\"4\" text=\"bind:detailGroupNm\" combodataset=\"dsCd04\" combocodecol=\"code\" combodatacol=\"comKor\" suppress=\"1\"/><Cell col=\"5\" text=\"bind:comments\" editmaxlength=\"100\"/><Cell col=\"6\" text=\"bind:transactionMoney\" maskeditformat=\"#,#\" editmaxlength=\"11\"/><Cell col=\"7\" text=\"bind:transactionDate\" displaytype=\"date\" calendardisplaynulltype=\"none\" suppress=\"1\"/><Cell col=\"8\" text=\"bind:writer\"/><Cell col=\"9\" text=\"bind:regDate\" displaytype=\"date\" maskeditformat=\"####-##-##\" calendardisplaynulltype=\"none\" suppress=\"1\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;transactionMoney&quot;)\" maskeditformat=\"#,#\" displaytype=\"mask\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn",null,"10","60","20","130",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn01",null,"10","60","20","70",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn02",null,"10","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("div00","10","269","1263","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","0","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCd00");
            obj.set_codecolumn("code");
            obj.set_datacolumn("comKor");
            obj.set_text("cbo00");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cbo01","109","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCd01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("comKor");
            obj.set_text("cbo00");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cbo02","218","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCd02");
            obj.set_codecolumn("code");
            obj.set_datacolumn("comKor");
            obj.set_text("cbo00");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cbo03","327","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCd03");
            obj.set_codecolumn("code");
            obj.set_datacolumn("comKor");
            obj.set_text("cbo00");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cbo04","436","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCd04");
            obj.set_codecolumn("code");
            obj.set_datacolumn("comKor");
            obj.set_text("cbo00");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","545","0","280","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","825","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_format("#,#");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00","934","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt01","1043","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal01","1152","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.cbo00","value","dsAccount","profitCost");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.cbo01","value","dsAccount","bigGroup");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.cbo02","value","dsAccount","middleGroup");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.cbo03","value","dsAccount","smallGroup");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.cbo04","value","dsAccount","detailGroup");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.edt00","value","dsAccount","comments");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00.form.msk00","value","dsAccount","transactionMoney");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00.form.cal00","value","dsAccount","transactionDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00.form.edt01","value","dsAccount","writer");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00.form.cal01","value","dsAccount","regDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div00.form.cbo00","displaynulltext","dsCd00","comKor");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00.form.cbo01","displaynulltext","dsCd01","comKor");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div00.form.cbo02","displaynulltext","dsCd02","comKor");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div00.form.cbo03","displaynulltext","dsCd03","comKor");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div00.form.cbo04","displaynulltext","dsCd04","comKor");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("codeList_sample.xfdl", function() {

        this.test_onload = function(obj,e)
        {
        	this.fn_selectCodeInlvl("2", "dsCd00");
        	this.fn_selectCodeInlvl("3", "dsCd01");
        	this.fn_selectCodeInlvl("4", "dsCd02");
        	this.fn_selectCodeInlvl("5", "dsCd03");
        	this.fn_selectCodeInlvl("6", "dsCd04");

        	this.fn_searchAccountList();
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
        		case "selectCodeInlvl":
        			var dsNm = this.dsIn.getColumn(0, "dataset");
        			this.objects[dsNm].insertRow(0);
        			this.objects[dsNm].setColumn(0, "code", "");
        			this.objects[dsNm].setColumn(0, "comKor", "선택");
        			if(dsNm != "dsCd00"){
        				this.objects[dsNm].filter("code==''")
        			}
        			this.div00.form.components["cbo"+dsNm.substr(4, 6)].set_index(0);
        			break;

        		case "accountList":
        			this.fn_filteringDs(this.dsAccount);
        			break;

        		case "saveAccount":
        			alert("저장되었습니다.");
        			this.fn_searchAccountList();
        			break;

        		case "deleteAccount":
        			alert("삭제되었습니다.");
        			this.fn_searchAccountList();
        			break;
        	}

        };



        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        this.fn_selectCodeInlvl = function (level, dsNm)
        {
        	this.dsIn.clearData();
        	this.dsIn.addRow();
        	this.dsIn.setColumn(0, "level", level);
        	this.dsIn.setColumn(0, "dataset", dsNm);

        	var strSvcId    = "selectCodeInlvl";
        	var strSvcUrl   = "selectCodeInlvl.do";
        	var inData      = "dsIn=dsIn";
        	var outData     = dsNm+"=output01";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, "", "fnCallback", false);
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
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        //추가버튼
        this.addBtn_onclick = function(obj,e)
        {
        	this.dsAccount.addRow();
        };

        //삭제버튼
        this.btn01_onclick = function(obj,e)
        {
        	if(!this.confirm("삭제하시겠습니까?")){
        		return;
        	}

        	this.dsTmpAccount.clearData();
        	this.dsTmpAccount.addRow();
        	this.dsTmpAccount.copyRow(0, this.dsAccount, this.dsAccount.rowposition);

        	this.fn_deleteAccount();
        };

        //저장버튼
        this.btn02_onclick = function(obj,e)
        {


        	if(!this.confirm("저장하시겠습니까?")){
        		return;
        	}

        	for(var i=0; i<this.dsAccount.getRowCount(); i++)
        	{
        		this.dsAccount.setColumn(i, "uiRowType", this.dsAccount.getRowType(i));

        		var mon = this.dsAccount.getColumn(i, "transactionMoney");
        		if(mon != "" && mon != null && mon.toString().length > 11){
        			alert("금액은 11자리 까지 입력가능합니다.");
        			return;
        		}
        	}

        	this.fn_saveAccountList();
        };

        //콤보 드롭다운 이벤트
        this.div00_cbo00_ondropdown = function(obj,e)
        {
        	this.fn_resetCombo(3);
        };

        this.div00_cbo01_ondropdown = function(obj,e)
        {
        	this.fn_resetCombo(5);
        	this.dsCd01.filter("category=='"+this.dsAccount.getColumn(this.dsAccount.rowposition, "profitCost")+"'||code==''");
        };

        this.div00_cbo02_ondropdown = function(obj,e)
        {
        	this.fn_resetCombo(7);
        	this.dsCd02.filter("category=='"+this.dsAccount.getColumn(this.dsAccount.rowposition, "bigGroup")+"'||code==''");
        };

        this.div00_cbo03_ondropdown = function(obj,e)
        {
        	this.fn_resetCombo(9);
        	this.dsCd03.filter("category=='"+this.dsAccount.getColumn(this.dsAccount.rowposition, "middleGroup")+"'||code==''");
        };

        this.div00_cbo04_ondropdown = function(obj,e)
        {
        	this.dsCd04.filter("category=='"+this.dsAccount.getColumn(this.dsAccount.rowposition, "smallGroup")+"'||code==''");
        };

        //로우포지션 변경이벤트
        this.dsAccount_onrowposchanged = function(obj,e)
        {
        	this.fn_filteringDs(obj);
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        //콤보리셋
        this.fn_resetCombo = function(no)
        {
        	for(var i=no;i<11;i++){
        		this.dsAccount.setColumn(this.dsAccount.rowposition, i, "");
        	}
        }

        //데이터셋필터링
        this.fn_filteringDs = function(obj)
        {
        	this.dsCd01.filter("category=='"+obj.getColumn(obj.rowposition, "profitCost")+"'||code==''");
        	this.dsCd02.filter("category=='"+obj.getColumn(obj.rowposition, "bigGroup")+"'||code==''");
        	this.dsCd03.filter("category=='"+obj.getColumn(obj.rowposition, "middleGroup")+"'||code==''");
        	this.dsCd04.filter("category=='"+obj.getColumn(obj.rowposition, "smallGroup")+"'||code==''");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_onload,this);
            this.grd01.addEventHandler("ondropdown",this.grd01_ondropdown,this);
            this.addBtn.addEventHandler("onclick",this.addBtn_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.div00.form.cbo00.addEventHandler("onitemchanged",this.div00_cbo00_onitemchanged,this);
            this.div00.form.cbo00.addEventHandler("ondropdown",this.div00_cbo00_ondropdown,this);
            this.div00.form.cbo01.addEventHandler("onitemchanged",this.div00_cbo01_onitemchanged,this);
            this.div00.form.cbo01.addEventHandler("ondropdown",this.div00_cbo01_ondropdown,this);
            this.div00.form.cbo02.addEventHandler("onitemchanged",this.div00_cbo02_onitemchanged,this);
            this.div00.form.cbo02.addEventHandler("ondropdown",this.div00_cbo02_ondropdown,this);
            this.div00.form.cbo03.addEventHandler("onitemchanged",this.div00_cbo03_onitemchanged,this);
            this.div00.form.cbo03.addEventHandler("ondropdown",this.div00_cbo03_ondropdown,this);
            this.div00.form.cbo04.addEventHandler("onitemchanged",this.div00_cbo04_onitemchanged,this);
            this.div00.form.cbo04.addEventHandler("ondropdown",this.div00_cbo04_ondropdown,this);
            this.dsAccount.addEventHandler("onrowposchanged",this.dsAccount_onrowposchanged,this);
            this.dsTmpAccount.addEventHandler("onrowposchanged",this.dsAccount_onrowposchanged,this);
            this.dsTmpAccount.addEventHandler("oncolumnchanged",this.dsAccount_oncolumnchanged,this);
        };
        this.loadIncludeScript("codeList_sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
