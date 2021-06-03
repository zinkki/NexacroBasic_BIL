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

            
            // UI Components Initialize
            obj = new Combo("cbo00","20","20","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("cbo00");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","20","40",null,"100","191",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"경력번호\"/><Cell col=\"1\" text=\"내용\"/><Cell col=\"2\" text=\"시작일\"/><Cell col=\"3\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"\"/><Cell col=\"1\" text=\"\"/><Cell col=\"2\" text=\"\"/><Cell col=\"3\" text=\"\"/></Band></Format></Formats>");
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
        this.registerScript("tab_careerInfo.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("tab_careerInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
