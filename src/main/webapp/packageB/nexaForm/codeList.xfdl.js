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
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"content\">수익</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"content\">비용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"code2\" type=\"STRING\" size=\"256\"/><Column id=\"content2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code2\">A2</Col><Col id=\"content2\">매출원</Col></Row><Row><Col id=\"code2\">B2</Col><Col id=\"content2\">경상운영</Col></Row><Row><Col id=\"code2\">C2</Col><Col id=\"content2\">영업외비용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset03", this);
            obj._setContents("<ColumnInfo><Column id=\"code3\" type=\"STRING\" size=\"256\"/><Column id=\"content3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code3\">A3</Col><Col id=\"content3\">사업인건비</Col></Row><Row><Col id=\"code3\">B3</Col><Col id=\"content3\">사업경비</Col></Row><Row><Col id=\"code3\">C3</Col><Col id=\"content3\">위탁사업비</Col></Row><Row><Col id=\"code3\">D4</Col><Col id=\"content3\">부가가치세</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset04", this);
            obj._setContents("<ColumnInfo><Column id=\"code4\" type=\"STRING\" size=\"256\"/><Column id=\"content4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code4\">A4</Col><Col id=\"content4\">계약직</Col></Row><Row><Col id=\"code4\">B4</Col><Col id=\"content4\">현장보조인부</Col></Row><Row><Col id=\"code4\">C4</Col><Col id=\"content4\">자문비</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset05", this);
            obj._setContents("<ColumnInfo><Column id=\"code5\" type=\"STRING\" size=\"256\"/><Column id=\"content5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code5\">A5</Col><Col id=\"content5\">특급기술자</Col></Row><Row><Col id=\"code5\">B5</Col><Col id=\"content5\">고급기술자</Col></Row><Row><Col id=\"code5\">C5</Col><Col id=\"content5\">중급기술자</Col></Row><Row><Col id=\"code5\">D5</Col><Col id=\"content5\">초급기술자</Col></Row><Row><Col id=\"code5\">E5</Col><Col id=\"content5\">특별인부</Col></Row><Row><Col id=\"code5\">F5</Col><Col id=\"content5\">보통인부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"profit_cost\" type=\"STRING\" size=\"256\"/><Column id=\"big_group\" type=\"STRING\" size=\"256\"/><Column id=\"middle_group\" type=\"STRING\" size=\"256\"/><Column id=\"small_group\" type=\"STRING\" size=\"256\"/><Column id=\"detail_group\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"profit_cost\">수익</Col><Col id=\"big_group\">A</Col><Col id=\"middle_group\">A1</Col><Col id=\"small_group\">A2</Col><Col id=\"detail_group\">A3</Col><Col id=\"Column4\">A4</Col></Row><Row><Col id=\"profit_cost\">비용</Col><Col id=\"big_group\">B</Col><Col id=\"middle_group\">B1</Col><Col id=\"small_group\">B2</Col><Col id=\"detail_group\">B3</Col><Col id=\"Column4\">B4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd01","10","30",null,"230","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"214\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"profit_cost\"/><Cell col=\"1\" text=\"big_group\"/><Cell col=\"2\" text=\"middle_group\"/><Cell col=\"3\" text=\"small_group\"/><Cell col=\"4\" text=\"detail_group\"/></Band><Band id=\"body\"><Cell text=\"bind:profit_cost\"/><Cell text=\"bind:big_group\"/><Cell text=\"bind:middle_group\"/><Cell text=\"bind:small_group\"/><Cell text=\"bind:detail_group\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn","1090","10","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","1150","10","60","20",null,null,null,null,null,null,this);
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

            obj = new Combo("profit_cost","0","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("content");
            obj.set_text("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("big_group","109","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("Dataset02");
            obj.set_codecolumn("code2");
            obj.set_datacolumn("content2");
            obj.set_text("관");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("middle_group","218","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("Dataset03");
            obj.set_codecolumn("code3");
            obj.set_datacolumn("content3");
            obj.set_text("항");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("small_group","327","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("Dataset04");
            obj.set_codecolumn("code4");
            obj.set_datacolumn("content4");
            obj.set_text("목");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("detail_group","436","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("Dataset05");
            obj.set_codecolumn("code5");
            obj.set_datacolumn("content5");
            obj.set_text("과");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","545","0","280","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","825","0","109","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_format("");
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
            obj = new BindItem("item0","btn02","text","SaveBtn","SaveBtn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("codeList.xfdl", function() {
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/



        this.btn02_onclick = function(obj,e)
        {
        	this.alert("TEST");
        };

        this.addBtn_onclick = function(obj,e)
        {
        	var row  = this.ds00.addRow();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addBtn.addEventHandler("onclick",this.addBtn_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.div00.form.profit_cost.addEventHandler("onitemchanged",this.div00_profit_cost_onitemchanged,this);
        };
        this.loadIncludeScript("codeList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
