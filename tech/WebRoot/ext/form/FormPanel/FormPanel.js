/**
Ext.ns('Ext.app');

Ext.app.ContactForm = Ext.extend(Ext.FormPanel, {
    formTitle: 'Contact Information (English)',
    firstName: 'First Name',
    lastName: 'Surname',
    surnamePrefix: 'Surname Prefix',
    company: 'Company',
    state: 'State',
    stateEmptyText: 'Choose a state...',
    email: 'E-mail',
    birth: 'Date of Birth',
    save: 'Save',
    cancel: 'Cancel',
    
    initComponent : function(config) {
        Ext.apply(this, {
            labelWidth: 100, // label settings here cascade unless overridden
            url:'save-form.php',
            frame:true,
            title: this.formTitle,
            bodyStyle:'padding:5px 5px 0',
            width: 370,
            defaults: {width: 220},
            defaultType: 'textfield',
    
            items: [{
                    fieldLabel: this.firstName,
                    name: 'firstname',
                    allowBlank:false
                },{
                    fieldLabel: this.lastName,
                    name: 'lastName'
                },{
                    fieldLabel: this.surnamePrefix,
                    width: 50,
                    name: 'surnamePrefix'
                },{
                    fieldLabel: this.company,
                    name: 'company'
                },  new Ext.form.ComboBox({
                    fieldLabel: this.province,
                    hiddenName: 'state',
                    store: new Ext.data.ArrayStore({
                        fields: ['provincie'],
                        data : [["12","12"],["12","12"]] // from dutch-provinces.js
                    }),
                    displayField: 'provincie',
                    typeAhead: true,
                    mode: 'local',
                    triggerAction: 'all',
                    emptyText: this.stateEmtyText,
                    selectOnFocus:true,
                    width:190
                }), {
                    fieldLabel: this.email,
                    name: 'email',
                    vtype:'email'
                }, new Ext.form.DateField({
                    fieldLabel: this.birth,
                    name: 'birth'
                })
            ],
    
            buttons: [{
                text: this.save
            },{
                text: this.cancel
            }]
        });
        
        Ext.app.ContactForm.superclass.initComponent.apply(this, arguments);
    }
});

Ext.onReady(function(){
    Ext.QuickTips.init();

    // turn on validation errors beside the field globally
    Ext.form.Field.prototype.msgTarget = 'side';
    
    var bd = Ext.getBody();
    
    bd.createChild({tag: 'h2', html: 'Localized Contact Form'});
        
    // simple form
    var simple = new Ext.app.ContactForm();
    simple.render(document.body);
});
* */
function FormPanel() {
	this.showForm = function() {//var s = /^[010]s/
	//Ext.onReady(function(){	new Ext.Panel({		renderTo:"formpanel",		title:"面板头部header",		width:900,		height:200,		html:'<h1>面板主区域</h1>',		tbar:[{text:'顶部工具栏topToolbar'}],		bbar:[{text:'底部工具栏bottomToolbar'}],		buttons:[{text:"按钮位于footer"}]		}); });
	
		Ext.onReady(function(){
			var dateField = new Ext.form.DateField({
				fieldLabel:"输入日期",name:"date",
				width:120,format :'Y-m-d'
			}) ;
			var numberField = new Ext.form.NumberField({
				fieldLabel:"邮编",name:"post"
			}) ;
			var displayField = new Ext.form.DisplayField({
				fieldLabel:"显示组件",name:"show",
				value:'您好'
			}) ;
			var comboBox = new Ext.form.ComboBox({
				renderTo:"se",
				//id:'se',
				tiggerAction:'all',
				fieldLabel:"ComboBox组件",name:"com",
				emptyText:'请选择....',
				store:new Ext.data.ArrayStore({
					fields:[{name:'displaytext'},{name:'valuetext'}],
//					listeners:{datachanged:function(){if(!this.mySnap)this.mySnap=this.snapshot;delete this.snapshot}},
					
					data:[['yes','是'],['no','否']]
				}),
				displayField:'displaytext',
  				valueField:'valuetext',
  				selectOnFocus:true,
  				typeAhead: true,
  				lazyInit: false,
  				//lazyRender :true,
  				//hideTrigger :false,
  				forceSelection :false,
//  				 listeners:{
//		            render:function(_this){
//		                realInput=Ext.DomHelper.insertAfter(container,{tag: 'input',type:'hidden',name:_this.getName(),value:_this.getValue()}) 
//		                realInput.onpropertychange=function(){_this.setValue(this.value)};  //真实表单联动模拟表单
//		                container.dom.removeAttribute('name');
//		                _this.clearFilter=function(){   //扩展一个方法还原store
//		                    _this.store.snapshot=_this.store.mySnap;
//		                    _this.store.clearFilter();
//		                }
//		            },
//		            select:function(combo,rec,index){   //模拟表单联动真实表单
//		                realInput.value=rec.get('valuetext');
//		            }
//		        },
  				
				mode:'local',
				listClass: 'x-combo-list-small'
			}) ;
			var radio = new Ext.form.RadioGroup({
				fieldLabel : '默认计量单位', 
				items:[{name:"radio",boxLabel:"YES",inputValue:'1',checked:true},
				{name:"radio",boxLabel:"NO",inputValue:'0'}]
			}) ;
			var checkgroup = new Ext.form.CheckboxGroup({
				fieldLabel : '请选择', 
				items:[{name:"check",boxLabel:"苹果",inputValue:'1',checked:true},
				{name:"check",boxLabel:"梨",inputValue:'0'}]
			}) ;
			var button = new Ext.Button({
				text:'按钮',
				//enableToggle:true,
				//autoWidth:true,
				//labelStyle: 'font-weight:bold;color:red;',
				clearCls:'x-form-clear-left',
				ctCls :"x-form-clear-right",
				cls:'x-form-clear-right'
				//menuAlign:''
			}) ;
			var button1 = new Ext.Button({
				text:'按钮',
				//enableToggle:true,
				//autoWidth:true,
				//labelStyle: 'font-weight:bold;color:red;',
				clearCls:'x-form-clear-right',
				ctCls :"font-weight:bold;color:red;"
			}) ;
			//Ext.fly(button.addSpacer().getEl().parentNode).setStyle('align', 'center');
			new Ext.Panel({
				renderTo:"formpanel",
				plain: true,
				title:"From表单组件",
				layout:'form',
				//width:300, 
				labelAlign:"right",
				//height:400,
				autoWidth: true,  
	         	autoHeight: true,  
	         	frame: true, 
	         	clearCls :'x-form-clear-left',
				//cls:'text-align:center;',
				defaultType: 'textfield',
				buttonAlign:'center',
				items:[
						{fieldLabel:"请输入姓名",name:"name"},
						{fieldLabel:"请输入地址",name:"address"},
						{fieldLabel:"请输入电话",name:"tel",regex:/^010\w*$/},
						numberField,
						displayField,
						//comboBox,
						radio,
						checkgroup,
						dateField
					],
				bbar:[{text:'底部工具栏bottomToolbar'}],
				buttons:[button,button1]
			}) ;
		}) ;
	}
	this.onShow2 = function() {
		 Ext.onReady(function(){  
	     Ext.BLANK_IMAGE_URL = "/widgets/ext-2.2/resources/images/default/s.gif";   
	     Ext.QuickTips.init();  
	     Ext.form.Field.prototype.msgTarget = "qtip";  
	   
	     //component  
	     var hiddenField = new Ext.form.Hidden({  
	         name: "hiddenField",  
	         value: "1"  
	     });  
	   
	     var usernameField = new Ext.form.TextField({  
	         name: "username",  
	         fieldLabel: "用户名",  
	         allowBlank: true,  
	         blankText: "请输入用户名！"  
	     });  
	   
	     var pwdField = new Ext.form.TextField({  
	         name: "password",  
	         fieldLabel: "密码",  
	         allowBlank: true,  
	         blankText: "请输入密码！",  
	         inputType: "password"  
	     });  
	   
	     var ageField = new Ext.form.NumberField({  
	         name: "age",  
	         allowBlank: true,  
	         blankText: "请输入年龄！",  
	         fieldLabel: "年龄",  
	         allowDecimals: false,  
	         allowNegative: false,  
	         minValue: 18,  
	         minText: "年龄不能少于18",  
	         maxValue: 100,  
	         maxText: "年龄不能大于100"  
	     });  
	   
	     var love1 = new Ext.form.Checkbox({  
	         name: "love1",  
	         boxLabel: "打球",  
	         inputValue: "1"  
	     });  
	   
	     var love2 = new Ext.form.Checkbox({  
	         name: "love2",  
	         boxLabel: "游泳",  
	         inputValue: "2"  
	     });  
	   
	     var love3 = new Ext.form.Checkbox({  
	         name: "love3",  
	         boxLabel: "登山",  
	         inputValue: "3"  
	     });  
	   
	     var loveGroup = new Ext.form.CheckboxGroup({  
	         name: "love",  
	         columns: [80, 80, 1.0],  
	         fieldLabel: "爱好",  
	         items: [love1, love2, love3]  
	     });  
	   
	     var sex1 = new Ext.form.Radio({  
	         name: "sex1",  
	         boxLabel: "男",  
	         inputValue: "1"  
	     });  
	   
	     var sex2 = new Ext.form.Radio({  
	         name: "sex1",  
	         boxLabel: "女",  
	         inputValue: "0"  
	     });  
	   
	     var sexGroup = new Ext.form.RadioGroup({  
	         name: "sex",  
	         columns: [80, 1.0],  
	         fieldLabel: "性别",  
	         items: [sex1, sex2]  
	     });  
	   
	     //本地数据源的组合框  
	     var store = new Ext.data.SimpleStore({  
	         fields: ["code", "name"],  
	         data: [  
	             ["1", "北京"],  
	             ["5", "上海"],  
	             ["4",  "广东"]  
	         ]  
	     });  
	     var cmbProvince = new Ext.form.ComboBox({  
	         id: "cmbProvince",  
	         hiddenName: "province.id",  
	         fieldLabel: "省份",  
	         resizable: true,  
	         editable: false,  
	         width: 100,  
	         emptyText: "请选择...",  
	         store: store,  
	         valueField: "code",  
	         displayField: "name",  
	         triggerAction: "all",  
	         mode: "local"  
	     });  
	   
	     //远程数据源的组合框  
	     var store2 = new Ext.data.SimpleStore({  
	         fields: ["name"],  
	         proxy: new Ext.data.HttpProxy({  
	             url: "../testForm!loadData.action"  
	         })  
	     });  
	   
	     var cmbManager = new Ext.form.ComboBox({  
	         hiddenName: "manager",  
	         fieldLabel: "经理",  
	         editable: false,  
	         triggerAction: "all",  
	         mode: "local",  
	         maxHeight: 200,  
	         store: new Ext.data.SimpleStore({fields:[],data:[[]]}),  
	         onSelect: Ext.emptyFn,  
	         tpl: "<tpl for='.'><div id='tree'></div></tpl>"  
	     });  
	   
	     var root = new Ext.tree.TreeNode({  
	         nodeId: 1,  
	         text: "根节点",  
	         expanded: true  
	     });  
	     root.appendChild(new Ext.tree.TreeNode({nodeId:2, text:"节点A", leaf:true}));  
	     root.appendChild(new Ext.tree.TreeNode({nodeId:3, text:"节点B", leaf:true}));  
	   
	     var tree = new Ext.tree.TreePanel({  
	         root: root,  
	         border: false,  
	         autoHeight: true,  
	         autoScroll: true  
	     });  
	   
	     tree.on("click", function(node){     
	         if(!node.isLeaf()) return; //只能选择叶节点  
	         //下拉框的隐藏值  
	         if(cmbManager.hiddenField){  
	             cmbManager.hiddenField.value = node.attributes.nodeId;  
	         }  
	         cmbManager.setRawValue(node.text); //下拉框的显示值  
	         cmbManager.collapse(); //折叠下拉框  
	     });  
	   
	     cmbManager.on("expand", function(){    
	         tree.render("tree");     
	     });   
	   
	     //分页远程数据源的组合框  
	     var store3 = new Ext.data.JsonStore({  
	         url: "../testForm!loadData3.action",  
	         totalProperty: "totalNum",  
	         root: "books",  
	         fields: ["id", "name"]  
	     });  
	     var cmbBook = new Ext.form.ComboBox({  
	         hiddenName: "books",  
	         fieldLabel: "书籍",  
	         store: store3,  
	         valueField: "name",  
	         displayField: "name",  
	         triggerAction: "all",  
	         mode: "remote",  
	         queryParam: "books",  
	         loadingText: "正在装载数据...",  
	         width: 180,  
	         minChars: 1,  
	         editable: false,  
	         listWidth: 250,  
	         pageSize: 3  
	     });  
	   
	     //HTML标准组件  
	     var cmbPass = new Ext.form.ComboBox({  
	         hiddenName: "status",  
	         fieldLabel: "是否有效",  
	         triggerAction: "all",  
	         editable: false,  
	         width: 100,  
	         transform: "isPass",  
	         lazyRender: true  
	     });  
	   
	     var cmbTimes = new Ext.form.TimeField({  
	         hiddenName: "time",  
	         fieldLabel: "时间",  
	         minValue: "09:00",  
	         minText: "所选时间应大于{0}",  
	         maxValue: "18:00",  
	         maxText: "所选时间应小于{0}",  
	         format: "H时i分",  
	         increment: 30,  
	         invalidText: "时间格式无效！",  
	         maxHeight: 200,  
	         width: 100,  
	         value: "09时00分",  
	         editable: false  
	     });  
	   
	     var cmbMonths = new Ext.ux.MultiSelectCombo({  
	         hiddenName: "months",  
	         fieldLabel: "月份",  
	         maxHeight: 200,  
	         editable: false,  
	         store: [["201010","201010"], ["201009","201009"], ["201008","201008"], ["201007","201007"], ["201006","201006"]],  
	         mode: "local",  
	         width: 180,  
	         maxItemsCount: 3,  
	         maxItemsCountText: "最多只能选择三个选项！"  
	     });  
	   
	     var cmbBirths =  new Ext.form.DateField({  
	         name: "births",  
	         fieldLabel: "出生日期",  
	         disabledDays: [0,6],  
	         disabledDaysText: "禁止选择周末！",  
	         width: 100,  
	         readOnly: true,  
	         format: "Y-m-d",  
	         invalidText: "不是有效的日期值！"  
	     });  
	   
	     var fieldSet1 = new Ext.form.FieldSet({  
	         title: "下拉框",  
	         checkboxName: "fieldSet1",  
	         checkboxToggle: true,  
	         autoHeight: true,  
	         layout: "table",  
	         layoutConfig: {  
	             columns: 3  
	         },  
	         defaults: {  
	             style:"margin-left:8px; margin-top:3px; margin-right:8px; margin-bottom:3px; valign:top",  
	             layout:"form",  
	             labelAlign: "right"  
	         },  
	         items: [  
	             {rowspan:1, colspan:1, items:[cmbProvince]},  
	             {rowspan:1, colspan:1, items:[cmbManager]},  
	             {rowspan:1, colspan:1, items:[cmbBook]},  
	             {rowspan:1, colspan:1, items:[cmbPass]},  
	             {rowspan:1, colspan:1, items:[cmbTimes]},  
	             {rowspan:1, colspan:1, items:[cmbMonths]},  
	             {rowspan:1, colspan:1, items:[cmbBirths]}]  
	     });  
	   
	     var remarksField = new Ext.form.TextArea({  
	         name: "remarks",  
	         fieldLabel: "备注",  
	         width: 400,  
	         height: 80  
	     });  
	     var form = new Ext.form.FormPanel({  
	         id: "frmAddUser",  
	         title: "新增用户",  
	         autoWidth: true,  
	         autoHeight: true,  
	         frame: true,  
	         renderTo: "formpanel2",  
	         labelWidth: 70,  
	         tbar: toolbar,  
	         items: [hiddenField, usernameField, pwdField, ageField, loveGroup, sexGroup,   
	             fieldSet1, remarksField],  
	         url: "../testForm!ajaxSubmitForm.action"  
	     });  
	 }); 
	}
}