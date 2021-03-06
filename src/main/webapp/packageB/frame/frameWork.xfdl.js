(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameWork");
            this.set_titletext("frameWork");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,872);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","1063","-1","33","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h16");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","0","32",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px none , 1px none , 1px none, 1px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("frame::frameWorkTitle.xfdl");
            obj.set_border("1px none , 1px none , 1px solid gainsboro");
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
            this._addPreloadList("fdl","frame::frameWorkTitle.xfdl");
        };
        
        // User Script
        this.addIncludeScript("frameWork.xfdl","lib::cmmInclude.xjs");
        this.registerScript("frameWork.xfdl", function() {
        /***********************************************************************************
        * 01. ???????????? :
        * 02. ?????????   :
        * 03. ???????????? :
        * 04. ?????????   :
        * 05. ?????????   :
        * 06. ???????????? :
        ***********************************************************************************
        *     ?????????     ?????????   ??????
        ***********************************************************************************
        *
        ***********************************************************************************/

        /***********************************************************************************
        * include ?????????  													               *
        ***********************************************************************************/
        this.executeIncludeScript("lib::cmmInclude.xjs"); /*include "lib::cmmInclude.xjs"*/;

        /***********************************************************************************/
        /* ??? ???????????? ?????????												               */
        /***********************************************************************************/
        this.objApp;
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        /**
         * form onload ??????
         * @return
         * @example
         * @memberOf
         */
        this.form_onload = function(obj,e)
        {
        	this.objApp = nexacro.getApplication() ;

        	//????????? ???????????? ??????
        	this.fnSetOwnFrameArgu(this);

        	// form????????? ????????? ????????? page URL ??????
        	this.divWork.set_url(this.objApp.gvWorkPageUrl);
        	this.fnOnsize();

        	this.divTitle.form.set_scrollbartype("none")
        };

        /**
         *  ????????? ???????????? ?????? ??????
         * @param  {XaComp} this(??????form)
         * @return
         * @example
         * fnSetOwnFrameArgu(this);
         * @memberOf
         */
        this.fnSetOwnFrameArgu = function(o)
        {
        	this.objApp.gvWorkWinkey  = o.getOwnerFrame().arguments["winKey"];
        	this.objApp.gvWorkPageUrl = o.getOwnerFrame().arguments["pageUrl"];
        	this.objApp.gvWorkMenuNm  = o.getOwnerFrame().arguments["menuNm"];
        	this.objApp.gvWorkMenuId  = o.getOwnerFrame().arguments["menuId"];
        	this.objApp.gvWorkTitle   = this.objApp.gvWorkMenuNm+" ("+ this.objApp.gvWorkMenuId+")";

        	var menuId = o.getOwnerFrame().arguments["menuId"];

        	if(this.objApp.gvIsComBtnUse){	//?????? ?????? ????????????
        		//?????? ??????????????????
        		var sAuth = this.fnGetAuth(menuId, "auth");  //????????????
        		this.divTitle.form.fnSetAuthBtn(sAuth);
        	}

        	var sTitle = o.getOwnerFrame().arguments["menuNm"];
        	this.divTitle.form.staTitle.set_text(sTitle);

        	//???????????? ????????????
        }

        /**
         * workFrame_onactivate event
         * @return
         * @example
         *
         * @memberOf
         */
        this.form_onactivate = function(obj,e)
        {
        	var winKey = this.objApp.gvWorkFrame.getActiveFrame().name;
        	//this.objApp.gvWorkFrame.frames[winKey].setFocus();

        	var gRow = this.objApp.gdsOpenMenu.findRow(this.objApp.gvMenuColumns.winId, winKey);

        	var dsLMenu = this.objApp.gvLeftFrame.form.dsMenu;
        	var menuId = this.objApp.gdsOpenMenu.getColumn(gRow, this.objApp.gvMenuColumns.menuId);
        	var lRow = this.objApp.gvLeftFrame.form.dsMenu.findRow(this.objApp.gvMenuColumns.menuId, menuId);

        	//?????? ?????????
        	var sTitle = this.objApp.gdsOpenMenu.getColumn(gRow, "title");
        	this.divTitle.form.staTitle.set_text(sTitle);

        	// gdsOpenMenu row ??????
        	this.objApp.gdsOpenMenu.set_rowposition(gRow);
        };

        /**
         * gdsMenu?????? ???????????? ????????????
         * @param {string} menuId: ??????Id
         * @param {string} colId: ??????(?????????) Id
         * @return
         * @example
         *
         * @memberOf
         */
        this.fnGetAuth = function(menuId, colId)
        {
        	var sValue = this.objApp.gdsMenu.lookupAs(this.objApp.gvMenuColumns.menId, menuId, colId);
        	if(this.gfnIsNull(sValue))
        	{
        		sValue = "YNNNNN";
        	}
        	return sValue;
        }

        /**
         * workFrame_onclose event
         * @return
         * @example
         *
         * @memberOf
         */
        this.form_onclose = function(obj, e)
        {
        	try{
        	//trace("workFrame_onclose : " + e.fromobject.name);
        		if( e.fromobject == "[object Form]" ){
        			var objApp = nexacro.getApplication();
        			var winId = this.getOwnerFrame().name;
        			//trace("winId : " + winId);
        			if( objApp.gvMdiFrame.form.bClose ) {
        				objApp.gvMdiFrame.form.bClose = false;
        				objApp.gvMdiFrame.form.fnTabOnClose(winId);
        			}
        		}
        	}catch(e){

        	}
        }

        /**
         * work resize event
         * @return
         * @example
         *
         * @memberOf this
         */
        this.form_onsize = function(obj, e)
        {
        	this.fnOnsize();
        }

        this.fnOnsize = function()
        {
            this.resetScroll();
        }

         /**
         * @description ??? ???????????? ??????????????? ????????? ??? ????????? ????????? ??????
        */
        this.form_onkeydown = function(obj,e)
        {
        	//trace("e.ctrlkey : " + e.ctrlkey + " / e.keycode : " + e.keycode);
        	if (e.ctrlkey && e.keycode == 68)
        	{
        		var oArg = {};
        		var oOption = {popuptype:"modeless"};	//top, left??? ???????????? ????????? ??????????????? //top:20,left:370
        		var sPopupCallBack = "fnPopupCallback";
        		this.gfnOpenPopup( "debug","cmm::cmmDebug.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.form_onbeforeclose = function(obj,e)
        {

        };

        this.fnWorkFrameClose = function()
        {
        	//this.gfn_formClose();
        	if(this.gfnIsNull(this.divWork.form.lookup("fnClose")))
        	{
        		trace("fnClose ????????? ????????????.");
        	}else{
        		if(this.divWork.form.fnClose() == true)
        		{
        			var sMsgId = "confirm.before.movepage";							//?????????ID
        			var arrArg = "";												//????????????????????? ??????[????????????]
        			var sPopId = sMsgId;											//???????????????ID[????????????]	*?????????????????? ????????? ??????????????? ?????????????????? ???????????????
        			var sMsgCallback = "fnMsgCallback";								//???????????????[????????????] 		* confirm??? ???????????? ?????? ??? ????????? ??????

        			// ????????? ????????? ?????? ???????????????????
        			this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        			return false;
        		}
        	}
        	this.close();
        }

         /**
         * @description ????????? ??????
        */
        this.fnMsgCallback = function (strId, strVal)
        {
        	//trace("strId >> " + strId + "   strVal >> " + strVal);
        	if(strId == "confirm.before.movepage"){
        		if(strVal == true)
        		{
        			this.close();
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onactivate",this.form_onactivate,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeydown",this.form_onkeydown,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
        };
        this.loadIncludeScript("frameWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
