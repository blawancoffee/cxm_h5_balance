(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"6ANx":function(e,t,a){"use strict";var l=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var n=l(a("bx4M"));a("14J3");var d=l(a("BMrR"));a("+L6B");var u=l(a("2/Rp"));a("iQDF");var i=l(a("+eQT"));a("jCWc");var o=l(a("kPKH"));a("miYZ");var s=l(a("tsqr")),c=l(a("lwsE")),f=l(a("W8MJ")),p=l(a("a1gu")),m=l(a("Nsbk")),h=l(a("7W2i")),g=l(a("PJYZ"));a("OaEy");var y=l(a("2fM7"));a("y8nQ");var v=l(a("Vl3Y"));a("g9YV");var b,E,k,I=l(a("wCAj")),N=r(a("q1tI")),w=(l(a("wd/R")),a("MuoO")),S=l(a("mOP9")),A=l(a("d3jC")),x=a("RO9D"),D=(a("7cBs"),a("cA2t"),I.default.Column),C=v.default.Item,F=(y.default.Option,"YYYY-MM-DD"),O=(b=(0,w.connect)(function(e){var t=e.finance,a=e.loading;return{finance:t,loading:a.models.list}}),E=v.default.create(),b(k=E(k=function(e){function t(e){var a;return(0,c.default)(this,t),a=(0,p.default)(this,(0,m.default)(t).call(this,e)),a.handleOnQuery=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(!e){var l=(0,x.isEmptyObject)(t.startDate)?null:t.startDate.format(F),r=t.supplierId,n=t.batchId;(0,x.isEmptyObject)(r)?s.default.warn("\u8bf7\u9009\u62e9\u8d27\u4e3b"):(0,x.isEmptyObject)(n)?s.default.warn("\u8bf7\u9009\u62e9\u8f66\u6b21"):(a.updataState(l),a.fetchSelectCarIncome({supplierId:r,startDate:l,batchId:n}))}})},a.handleReset=function(){a.props.form.resetFields()},a.state={startDate:0,loading:!1},a.updataState=a.updataState.bind((0,g.default)((0,g.default)(a))),a}return(0,h.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.fetchSupplierList({})}},{key:"updataState",value:function(e){this.setState({startDate:e,loading:!0})}},{key:"fetchSupplierList",value:function(e){this.props.dispatch({type:"finance/fetchSupplierList",payload:e})}},{key:"fetchSelectCarIncome",value:function(e){var t=this;this.props.dispatch({type:"finance/fetchSelectCarIncome",payload:e}).then(function(e){t.setState({loading:!1})})}},{key:"fetchBatchList",value:function(e){this.props.dispatch({type:"finance/fetchBatchList",payload:e})}},{key:"selectSupplier",value:function(e){this.fetchBatchList({supplierId:e})}},{key:"render",value:function(){var e=this.props,t=e.finance,a=t.supplierListData,l=t.selectCarIncomeData,r=t.batchListData,s=(e.loading,this.props.form.getFieldDecorator),c=[];void 0===a||Array.isArray(a)||null===a||(c=a.suppliers),void 0==r&&null==r&&(r=[]);var f=[];void 0!==l&&null!==l&&l.length&&l.map(function(e){var t=e.cashierName,a=e.billFee,l=e.extraAmount,r=e.goodsAmount,n=e.goodsName,d=e.packFee,u=e.saleAmount,i=e.saleNumber,o=e.saleWeight,s=e.tradeFee,c=e.rowSpan,p=e.supplierName,m=e.batchLst,h=c,g=0;m.length&&m.map(function(e,a){g=0==a?h:0;var l=e.date,r=e.rowSpan,n=e.orders;n.length&&n.map(function(e,a){var n=e.batchId,d=e.goodsAttrId,u=e.cashierId,i=e.billFee,o=e.extraAmount,s=e.goodsAmount,c=e.goodsName,m=e.packFee,h=e.saleAmount,y=e.saleNumber,v=e.saleWeight,b=e.tradeFee,E=e.avgUnitPrice,k=e.packType;a&&(r=0,g=0),f.push({key:a,date:l,carNo:p,batchId:n,goodsAttrId:d,cashierId:u,cashierName:t,goodsName:c,saleNumber:y,saleWeight:v,goodsAmount:s,tradeFee:b,billFee:i,extraAmount:o,packFee:m,saleAmount:h,avgUnitPrice:E,packType:k,rowSpan:r,num:g})})}),f.push({carNo:"\u603b\u8ba1",goodsName:n,saleNumber:i,saleWeight:o,goodsAmount:r,tradeFee:s,billFee:a,extraAmount:l,packFee:d,saleAmount:u})});var p={xs:24,sm:12,md:12,lg:12,xl:6,style:{marginBottom:12}},m=N.default.createElement("div",{className:A.default.extraContent},N.default.createElement(v.default,{onSubmit:this.handleOnQuery.bind(this),className:"login-form"},N.default.createElement(d.default,{gutter:24},N.default.createElement(o.default,p,N.default.createElement(C,null,s("supplierId",{rules:[{required:!1,message:"\u8bf7\u9009\u62e9\u8d27\u4e3b!"}]})(N.default.createElement(y.default,{placeholder:"\u8bf7\u9009\u62e9\u8d27\u4e3b",onChange:this.selectSupplier.bind(this),showSearch:!0,allowClear:!0,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},c.map(function(e){return N.default.createElement(y.default.Option,{key:e.user_id},e.name)}))))),N.default.createElement(o.default,p,N.default.createElement(C,null,s("batchId",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u8f66\u6b21\u4fe1\u606f!"}]})(N.default.createElement(y.default,{placeholder:"\u8bf7\u9009\u62e9\u8f66\u6b21\u4fe1\u606f"},r.map(function(e){return N.default.createElement(y.default.Option,{key:e.id},e.carNo)}))))),N.default.createElement(o.default,p,N.default.createElement(C,null,s("startDate",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u67e5\u8be2\u65f6\u95f4!"}]})(N.default.createElement(i.default,{style:{width:"100%"}})))),N.default.createElement(o.default,{span:24,className:A.default.submitBtn},N.default.createElement(u.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),N.default.createElement(u.default,{onClick:this.handleReset},"\u91cd\u7f6e")))));return N.default.createElement("div",{className:A.default.batchLayout},N.default.createElement(n.default,{className:A.default.listCard,bordered:!1,title:"",extra:m},N.default.createElement(I.default,{rowKey:"1",dataSource:f,pagination:!1,scroll:{x:800},bordered:!0,loading:this.state.loading},N.default.createElement(D,{title:"\u8f66\u6b21",dataIndex:"carNo",key:"carNo",render:function(e,t){var a={children:e,props:{}};return a.props.rowSpan=t.rowSpan,a}}),N.default.createElement(D,{title:"",dataIndex:"date",key:"date",render:function(e,t){var a=t.batchId,l=t.date,r={children:N.default.createElement(S.default,{to:"batchdata?id=".concat(a,"&startDate=").concat(l)},e),props:{}};return r.props.rowSpan=t.rowSpan,r}}),N.default.createElement(D,{title:"\u54c1\u79cd",dataIndex:"goodsName",key:"goodsName"}),N.default.createElement(D,{title:"\u4ef6\u6570",dataIndex:"saleNumber",key:"saleNumber"}),N.default.createElement(D,{title:"\u91cd\u91cf",dataIndex:"saleWeight",key:"saleWeight"}),N.default.createElement(D,{title:"\u8d27\u6b3e",dataIndex:"goodsAmount",key:"goodsAmount"}),N.default.createElement(D,{title:"\u5305\u88c5\u7c7b\u578b",dataIndex:"packType",key:"packType"}),N.default.createElement(D,{title:"\u5747\u4ef7",dataIndex:"avgUnitPrice",key:"avgUnitPrice"}))))}}]),t}(N.PureComponent))||k)||k);t.default=O}}]);