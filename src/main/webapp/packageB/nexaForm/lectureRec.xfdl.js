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

            
            // UI Components Initialize
            obj = new Grid("grd00","20","40",null,"150","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강사번호\"/><Cell col=\"1\" text=\"강사명\"/><Cell col=\"2\" text=\"전화번호\"/><Cell col=\"3\" text=\"생년월일\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"강사등급\"/><Cell col=\"6\" text=\"고용일\"/></Band><Band id=\"body\"><Cell text=\"\"/><Cell col=\"1\" text=\"\"/><Cell col=\"2\" text=\"\"/><Cell col=\"3\" text=\"\"/><Cell col=\"4\" text=\"\"/><Cell col=\"5\" text=\"\"/><Cell col=\"6\" text=\"\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","20","210","1010","210",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("강사기본정보");
            obj.set_url("");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("강사이력정보");
            obj.set_url("");
            this.tab00.addChild(obj.name, obj);

            obj = new Button("btn00","790","218","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","870","218","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","950","218","80","20",null,null,null,null,null,null,this);
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

        };
        
        // User Script
        this.registerScript("lectureRec.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("lectureRec.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
