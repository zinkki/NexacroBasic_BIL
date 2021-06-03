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

            
            // UI Components Initialize
            obj = new Grid("grd01","10","30",null,"316","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"214\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"수익/비용\"/><Cell col=\"1\" text=\"관\"/><Cell col=\"2\" text=\"항\"/><Cell col=\"3\" text=\"목\"/><Cell col=\"4\" text=\"과\"/><Cell col=\"5\" text=\"내용\"/><Cell col=\"6\" text=\"금액\"/><Cell col=\"7\" text=\"거래일자\"/><Cell col=\"8\" text=\"작성자\"/><Cell col=\"9\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"\"/><Cell col=\"1\" text=\"\"/><Cell col=\"2\" text=\"\"/><Cell col=\"3\" text=\"\"/><Cell col=\"4\" text=\"\"/><Cell col=\"5\" text=\"\"/><Cell col=\"6\" text=\"\"/><Cell col=\"7\" text=\"\"/><Cell col=\"8\" text=\"\"/><Cell col=\"9\" text=\"\"/></Band></Format></Formats>");
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
        this.registerScript("editableGrid.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("editableGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
