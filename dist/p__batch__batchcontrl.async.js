(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{qUgs:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("14J3");var u=l(a("BMrR"));a("+L6B");var d=l(a("2/Rp"));a("giR+");var c=l(a("fyUT"));a("jCWc");var i=l(a("kPKH")),o=l(a("lwsE")),s=l(a("W8MJ")),f=l(a("a1gu")),p=l(a("Nsbk")),m=l(a("7W2i")),h=l(a("PJYZ"));a("y8nQ");var v=l(a("Vl3Y"));a("g9YV");var E=l(a("wCAj"));a("2qtc");var y=l(a("kLXV"));a("OaEy");var b,g,N,I=l(a("2fM7")),x=n(a("q1tI")),S=a("MuoO"),k=l(a("mOP9")),D=l(a("d3jC")),w=n(a("+n12")),C=a("7cBs"),O=a("RO9D"),Y=a("/2se"),M=I.default.Option,L=y.default.confirm,B=E.default.Column,q=v.default.Item,z=(b=(0,S.connect)(function(e){var t=e.batch;return{batch:t}}),g=v.default.create(),b(N=g(N=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,f.default)(this,(0,p.default)(t).call(this,e)),a.handleOnQuery=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(!e){var l=t.rangeValue,n=t.supplierId,r=t.carNo,u=t.state;a.updataState(n,r,u);var d=(0,Y.getCurrentDate)(),c=(0,Y.getCurrentDate)();(0,O.isEmptyObject)(l)||(d=l[0].format("YYYY-MM-DD"),c=l[1].format("YYYY-MM-DD")),a.fetchData({startDate:d,endDate:c,supplierId:n,carNo:r,state:u})}})},a.modifyStatusBtn=function(e){var t=(0,h.default)((0,h.default)(a));L({title:"\u662f\u5426\u628a\u8f66\u6b21\u4fee\u6539\u4e3a\u552e\u7f44",content:"",onOk:function(){t.updateTrainStatus({batchId:e,state:1}),window.location.reload()},onCancel:function(){}})},a.handleReset=function(){a.props.form.resetFields()},a.pageSwitch=function(e){var t=a.state,l=t.supplierId,n=t.carNo,r=t.state;a.fetchData({pageSize:e.pageSize,pageNo:e.current,supplierId:l,carNo:n,state:r})},a.state={supplierId:null,carNo:0,state:0,load:!1},a.updataState=a.updataState.bind((0,h.default)((0,h.default)(a))),a}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.fetchData({pageSize:10,pageNo:1}),this.fetchSupplierData({stallId:10005})}},{key:"updataState",value:function(e,t,a){this.setState({supplierId:e,carNo:t,state:a})}},{key:"fetchData",value:function(e){this.props.dispatch({type:"batch/fetchBatchContrl",payload:e})}},{key:"fetchSupplierData",value:function(e){this.props.dispatch({type:"batch/fetchSupplierList",payload:e})}},{key:"updateTrainStatus",value:function(e){this.props.dispatch({type:"batch/updateTrainStatus",payload:e})}},{key:"render",value:function(){var e=this,t=this.props.batch,a=t.batchContrlList,l=t.supplierDataList,n=this.props.form.getFieldDecorator,o=a.data,s=a.total,f={xs:24,sm:12,md:12,lg:12,xl:6,style:{marginBottom:12}},p=[{name:"\u5168\u90e8",value:0},{name:"\u5f85\u552e\u8f66\u6b21",value:1},{name:"\u5728\u552e\u8f66\u6b21",value:2},{name:"\u552e\u7f44\u8f66\u6b21",value:3},{name:"\u7ed3\u7b97\u8f66\u6b21",value:4}],m=l&&l.suppliers?l.suppliers.map(function(e){return x.default.createElement(M,{value:e.user_id,key:e.user_id},e.name)}):null,h=x.default.createElement("div",{className:D.default.extraContent},x.default.createElement(v.default,{onSubmit:this.handleOnQuery,className:"login-form"},x.default.createElement(u.default,{gutter:24},x.default.createElement(i.default,f,x.default.createElement(q,null,n("state",{rules:[{required:!1,message:"\u8bf7\u9009\u62e9\u72b6\u6001!"}]})(x.default.createElement(I.default,{placeholder:"\u8bf7\u9009\u62e9\u72b6\u6001"},p.map(function(e){return x.default.createElement(M,{key:e.value},e.name)}))))),x.default.createElement(i.default,f,x.default.createElement(q,null,n("supplierId",{rules:[{required:!1,message:"\u8bf7\u9009\u62e9\u8d27\u4e3b!"}]})(x.default.createElement(I.default,{placeholder:"\u8bf7\u9009\u62e9\u8d27\u4e3b",showSearch:!0,allowClear:!0,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},m)))),x.default.createElement(i.default,f,x.default.createElement(q,null,n("carNo",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u8f66\u6b21\u4fe1\u606f!"}]})(x.default.createElement(c.default,{type:"text",prefix:"\u8f66\u6b21",formatter:function(e){return"\u8f66\u6b21 ".concat(e)},min:1,max:9999,size:4,style:{paddingLeft:"0px",width:"100%"},placeholder:"\u8bf7\u8f93\u5165\u8f66\u6b21\u4fe1\u606f",autocomplete:"off"})))),x.default.createElement(i.default,{span:24},x.default.createElement(d.default,{type:"primary",style:{float:"left",width:"100px",textAlign:"center"},htmlType:"submit"},"\u67e5\u8be2"),x.default.createElement(d.default,{style:{marginLeft:"5px",float:"left",width:"100px",textAlign:"center"},onClick:this.handleReset},"\u91cd\u7f6e"))))),y={pageSize:10,total:s};return x.default.createElement("div",{className:D.default.batchLayout},x.default.createElement(r.default,{className:D.default.listCard,bordered:!1,title:"",extra:h},x.default.createElement(E.default,{dataSource:o,pagination:y,scroll:{x:600},bordered:!0,onChange:this.pageSwitch.bind(this)},x.default.createElement(B,{title:"\u8f66\u6b21",dataIndex:"batchId",key:"batchId",render:function(e,t){var a=t.batchId,l=t.carNo;return x.default.createElement(k.default,{to:"batchsales?id=".concat(a)},w.fixedZeroTo4Bit(l,4))}}),x.default.createElement(B,{title:"\u8d27\u4e3b",dataIndex:"supplierName",key:"supplierName",render:function(e,t){var a=t.supplierName,l=t.carNo,n=t.batchId;return x.default.createElement("div",null,x.default.createElement("div",null,a),x.default.createElement("div",null,x.default.createElement(k.default,{to:"batchsales?id=".concat(n,"&name=").concat(a,"&carNo=").concat(l)},"\u9500\u552e\u7edf\u8ba1")))}}),x.default.createElement(B,{title:"\u4ea7\u5730",dataIndex:"districtName",key:"districtName",render:function(e,t){var a=t.districtName,l=t.supplierName,n=t.carNo,r=t.batchId;return x.default.createElement("div",null,x.default.createElement("div",null,a),x.default.createElement("div",null,x.default.createElement(k.default,{to:"batchdata?id=".concat(r,"&name=").concat(l,"&carNo=").concat(n)},"\u9500\u552e\u660e\u7ec6")))}}),x.default.createElement(B,{title:"\u9500\u552e\u8d27\u6b3e",dataIndex:"goodsAmount",key:"goodsAmount",render:function(t,a){var l=a.goodsAmount,n=a.batchId,r=a.status;return x.default.createElement("div",null,x.default.createElement("div",null,(0,C.Yuan)(l,2)),x.default.createElement("div",null,x.default.createElement("a",{size:"small",disabled:1==r||3==r||7==r||11==r,onClick:e.modifyStatusBtn.bind(e,n)},"\u8bbe\u7f6e\u552e\u7f44")))}}),x.default.createElement(B,{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e,t){t.status,t.batchId;var a=t.statusDesc;return x.default.createElement("div",null,a)}}))))}}]),t}(x.PureComponent))||N)||N);t.default=z}}]);