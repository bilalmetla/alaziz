(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,r){e.exports={table_wrapper:"Print_table_wrapper__2V6DX",invoice_wrapper:"Print_invoice_wrapper__3oJPy",invoice_flex:"Print_invoice_flex__2JE6_",image_wrapper:"Print_image_wrapper__35wRf",invoice_text_wrapper:"Print_invoice_text_wrapper__36nST",invoice_title:"Print_invoice_title__3pBiS"}},22:function(e,t,r){e.exports={navBar:"NavBar_navBar__2g9Et",navMenu:"NavBar_navMenu__25lvR",report_links:"NavBar_report_links__1CC3V",report_button:"NavBar_report_button__1hfeZ"}},23:function(e,t,r){e.exports={add_items_btn:"FormTable_add_items_btn__3eXk2","space-between":"FormTable_space-between__1seKk",form_table_wrapper:"FormTable_form_table_wrapper__34biI",form_table_elements:"FormTable_form_table_elements__Q58DP",table_scroll:"FormTable_table_scroll__2JmKb"}},26:function(e,t){t.constants={isLocal:!1,localServer:"http://127.0.0.1:3000/api",productionServer:"https://alaziz.herokuapp.com/api"}},30:function(e,t,r){e.exports={create_btn:"List_create_btn__v85Xv",buyer_text:"List_buyer_text__3mu00"}},31:function(e,t,r){e.exports={buyer_text_wrapper:"FormsHeading_buyer_text_wrapper__3X1o0",buyer_text:"FormsHeading_buyer_text__1bHZK"}},33:function(e,t,r){e.exports={btns:"Edit_btns__citCq",btn_color:"Edit_btn_color__2nPiw"}},34:function(e,t,r){e.exports={report_table_wrapper:"ReportTable_report_table_wrapper__RXqIb",report_btn:"ReportTable_report_btn__1YCUm"}},35:function(e,t,r){e.exports={container:"App_container__XZ5_J",wrapper:"App_wrapper__FYkoS"}},43:function(e,t,r){e.exports={report_input_btn:"ReportInputs_report_input_btn__20MDX"}},48:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),n=r(20),s=r.n(n),i=(r(48),r(2)),l=r(10),o=r(11),u=r(63),b=(r(49),r(0)),j=function(){return Object(b.jsx)("div",{children:"About"})},d=r(60),p=r(38),O=r(6),m=r.n(O),x=r(12),h=r(7),f=r(61),v=r(26),y="http://127.0.0.1:3000/api";y=v.constants.isLocal?v.constants.localServer:v.constants.productionServer;var g=function(){var e=Object(x.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/"==t.charAt(0)&&(t=t.substring(1)),e.next=3,fetch("".concat(y,"/").concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(x.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/"==t.charAt(0)&&(t=t.substring(1)),e.next=3,fetch("".concat(y,"/").concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(x.a)(m.a.mark((function e(t,r){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},"/"==t.charAt(0)&&(t=t.substring(1)),e.next=4,fetch("".concat(y,"/").concat(t),a);case 4:return c=e.sent,e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.a)(m.a.mark((function e(t,r){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/"==t.charAt(0)&&(t=t.substring(1)),a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.next=4,fetch("".concat(y,"/").concat(t),a);case 4:return c=e.sent,e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),S=function(){var e=Object(x.a)(m.a.mark((function e(t){var r,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/"==t.charAt(0)&&(t=t.substring(1)),r={method:"DELETE",headers:{"Content-Type":"application/json"}},e.next=4,fetch("".concat(y,"/").concat(t),r);case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=_,w=r(30),k=r.n(w),P=r(31),B=r.n(P),D=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(p.a,{children:Object(b.jsx)("div",{className:B.a.buyer_text_wrapper,children:Object(b.jsx)("p",{className:B.a.buyer_text,children:e.title})})})})})},q=function(e){var t=Object(a.useState)([]),r=Object(h.a)(t,2),c=r[0],n=r[1];Object(a.useEffect)(Object(x.a)(m.a.mark((function t(){var r,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="",r=e.match?e.match.url:e.resource,t.next=4,g(r);case 4:return a=t.sent,n(s(a)),t.abrupt("return",(function(){n([])}));case 7:case"end":return t.stop()}}),t)}))),[]);var s=function(t){if("string"!==typeof t&&t)return t.map((function(t,r){return Object(b.jsxs)("tr",{children:[e.keys.map((function(e,r){return Object(b.jsxs)("td",{children:[" ","Date"===e.label?t[e.source].split("T")[0]:t[e.source]]},"key-".concat(r))})),e.actions.map((function(r,a){var c=r.resource;return c?Object.keys(t).forEach((function(e){c=c.replace(":".concat(e),"".concat(t[e]))})):c="".concat(e.resource,"/").concat(t.id),Object(b.jsxs)("td",{children:[" ",Object(b.jsx)(l.b,{to:"".concat(c),children:r.label})," "]},"action-".concat(a))}))]},"row-".concat(r))}))};return Object(b.jsxs)("div",{className:k.a.list_wrapper,children:[Object(b.jsx)(D,Object(i.a)({},e)),Object(b.jsx)("div",{className:k.a.create_btn,children:Object(b.jsx)(l.b,{to:"".concat(e.match.url,"/create"),children:"Create"})}),Object(b.jsxs)(f.a,{responsive:!0,children:[Object(b.jsx)("thead",{children:e.keys.map((function(e,t){return Object(b.jsx)("th",{children:Object(b.jsx)("td",{children:e.label},"heading-".concat(t))})}))}),Object(b.jsx)("tbody",{children:c})]})]})},F=r(64),C=r(22),L=r.n(C),E=function(){var e=Object(o.f)(),t=Object(a.useState)(""),r=Object(h.a)(t,2),c=r[0],n=r[1],s=Object(a.useState)({}),i=Object(h.a)(s,2),u=i[0],j=i[1];return Object(a.useEffect)((function(){var t=sessionStorage.getItem("isAdminLogin"),r=sessionStorage.getItem("userId");r||e.push("/login"),j(t),n(r)})),Object(b.jsx)("div",{className:L.a.navBar,children:Object(b.jsxs)("nav",{className:L.a.navMenu,children:[Object(b.jsxs)("ul",{className:"nav-menu-items",children:["true"===u&&Object(b.jsx)("li",{className:"navbar-toggle",children:Object(b.jsx)(l.b,{to:"/units",className:"menu-bar",children:"Units"})}),Object(b.jsx)("li",{className:"navbar-toggle",children:Object(b.jsx)(l.b,{to:"/units/".concat(c,"/buyers"),className:"menu-bar",children:"Buyers"})})]}),"true"===u&&Object(b.jsx)(F.a,{flush:!0,children:Object(b.jsxs)(F.a.Item,{eventKey:"0",children:[Object(b.jsx)(F.a.Header,{children:"Reports"}),Object(b.jsxs)(F.a.Body,{children:[Object(b.jsx)("p",{className:L.a.report_links,children:Object(b.jsx)(l.b,{to:"/report/with-gst",className:"menu-bar",children:"With GST"})}),Object(b.jsx)("p",{className:L.a.report_links,children:Object(b.jsx)(l.b,{to:"/report/without-gst",className:"menu-bar",children:"Without GST"})}),Object(b.jsx)("p",{className:L.a.report_links,children:Object(b.jsx)(l.b,{to:"/report/with-pst",className:"menu-bar",children:"With PST"})}),Object(b.jsx)("p",{className:L.a.report_links,children:Object(b.jsx)(l.b,{to:"/report/without-pst",className:"menu-bar",children:"Without PST"})})]})]})}),Object(b.jsx)("ul",{className:"nav-menu-items",style:{marginTop:"20px"},children:Object(b.jsx)("li",{className:"navbar-toggle",children:Object(b.jsx)(l.b,{to:"#",onClick:function(t){n(""),j(""),e.push("/login")},className:"menu-bar",children:"LogOut"})})})]})})},R=function(e){e.children;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"log",src:"logo192.png"})})})})},A=function(e){var t=[{label:"Edit",resource:""},{label:"Invoices",resource:"".concat(e.match.url,"/:id/invoices")}];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(q,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers",keys:[{label:"Byuer Name",source:"name"},{label:"Address",source:"address"},{label:"Representitve Name",source:"representitveName"},{label:"Phone",source:"phone"}],actions:t,title:"Buyers Info"}))})]})]})},V=r(15),U=r(65),H=r(66),W=function(e){return Object(b.jsx)(b.Fragment,{children:e.form.map((function(t){return t.isNewList||"select"===t.props.type?"select"===t.props.type?Object(b.jsxs)(U.a.Group,{className:"mb-3",children:[Object(b.jsx)(U.a.Label,{children:t.label}),Object(b.jsxs)(U.a.Select,{name:t.source?t.source:t.props.name,value:e.editFormData[t.source],onChange:e.handleInputsChange,children:[Object(b.jsx)("option",{}),t.options.map((function(e){return Object(b.jsx)("option",{value:e.value,children:e.title})}))]})]}):void 0:Object(b.jsxs)(U.a.Group,{className:"mb-3",children:[Object(b.jsx)(U.a.Label,{children:t.label}),Object(b.jsx)(U.a.Control,Object(i.a)(Object(i.a)({},t.props),{},{name:t.source?t.source:t.props.name,value:(t.props.type,e.editFormData[t.source]),onChange:e.handleInputsChange})),Object(b.jsx)(U.a.Control.Feedback,{type:"invalid",children:"Please enter a ".concat(t.label)})]})}))})},M=r(23),G=r.n(M),z=r(62),J=function(e){return Object(b.jsx)(b.Fragment,{children:e.newListResource&&Object(b.jsxs)("div",{className:G.a.form_table_wrapper,children:[Object(b.jsx)(D,{title:"Item Details"}),e.formDataItems.length>0&&e.form.map((function(t){if(t.isNewList)return Object(b.jsxs)("table",{responsive:!0,className:G.a.table_scroll,children:[Object(b.jsx)("thead",{children:t.list.map((function(e,t){return Object(b.jsx)("td",{children:e.label},"heading-".concat(t))}))}),Object(b.jsx)("tbody",{children:e.formDataItems.map((function(r,a){return Object(b.jsxs)("tr",{children:[t.list.map((function(t){return Object(b.jsx)("td",{children:Object(b.jsxs)(U.a.Group,{className:G.a.form_table_elements,children:[Object(b.jsx)(U.a.Control,Object(i.a)(Object(i.a)({className:G.a.form_table_elements},t.props),{},{name:t.source,value:r[t.source],onChange:function(t){return e.handleInputsChangeOfItems(t,a)}})),Object(b.jsx)(U.a.Control.Feedback,{type:"invalid",children:"Please enter a ".concat(t.label)})]})},"heading-".concat(a))})),Object(b.jsx)(H.a,{variant:"danger",size:"sm",onClick:function(t){return e.removeformDataItems(t,a)},children:Object(b.jsx)(z.a,{})})]})}))})]})})),e.newListResource&&Object(b.jsx)(H.a,{className:G.a.add_items_btn,variant:"primary",onClick:e.manageformDataItems,children:"Add Item "})]})})},X=r(33),Q=r.n(X),K=function(e){e.match.params.id;var t=Object(o.f)(),r=Object(a.useState)({}),c=Object(h.a)(r,2),n=c[0],s=c[1],l=Object(a.useState)([]),u=Object(h.a)(l,2),j=u[0],d=u[1],p=Object(a.useState)(!1),O=Object(h.a)(p,2),f=O[0],v=O[1],y=function(){var r=Object(x.a)(m.a.mark((function r(a){var c,s;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.preventDefault(),!1===(c=a.currentTarget).checkValidity()&&a.stopPropagation(),v(!0),c.checkValidity()){r.next=6;break}return r.abrupt("return");case 6:return s=Object(i.a)({},n),e.newListResource&&(s[e.newListResource]=Object(V.a)(j)),r.next=10,T("".concat(e.match.url),s);case 10:r.sent.errorMessage||t.goBack();case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),g=function(){var r=Object(x.a)(m.a.mark((function r(a){return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.next=3,S("".concat(e.match.url));case 3:r.sent.errorMessage||t.goBack();case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(a.useEffect)(Object(x.a)(m.a.mark((function t(){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N("".concat(e.match.url));case 2:return r=t.sent,t.next=5,s(r);case 5:if(!r[e.newListResource]){t.next=8;break}return t.next=8,d(r[e.newListResource]);case 8:case"end":return t.stop()}}),t)}))),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,Object(i.a)({},e)),Object(b.jsxs)(U.a,{noValidate:!0,validated:f,onSubmit:y,children:[Object(b.jsx)(W,Object(i.a)(Object(i.a)({},e),{},{handleInputsChange:function(e){var t=e.target.name,r=e.target.value,a=Object(i.a)({},n);a[t]=r,s(Object(i.a)({},a))},editFormData:n})),Object(b.jsx)(J,Object(i.a)(Object(i.a)({},e),{},{manageformDataItems:function(e){var t=Object(V.a)(j);t.push({}),d(Object(V.a)(t))},formDataItems:j,removeformDataItems:function(e,t){var r=Object(V.a)(j);r.splice(t,1),d(Object(V.a)(r))},handleInputsChangeOfItems:function(e,t){var r=e.target.name,a=e.target.value,c=Object(V.a)(j);c[t][r]=a,d(Object(V.a)(c))}})),Object(b.jsxs)("div",{className:Q.a.btns,children:[Object(b.jsx)(H.a,{className:Q.a.btn_color,variant:"primary",type:"submit",children:"Update"}),Object(b.jsx)(H.a,{className:"submit-button",variant:"danger",onClick:g,children:"Delete"})]})]})]})},Z=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(K,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers",form:[{label:"Buyer Name",props:{type:"text",required:!0},source:"name"},{label:"Address",props:{type:"text",required:!0},source:"address"},{label:"Phone",props:{type:"number",required:!0},source:"phone"},{label:"Representitve Name",props:{type:"text",required:!0},source:"representitveName"},{label:"NTN Number",props:{type:"text",required:!0},source:"ntnNumber"},{label:"NTN Name",props:{type:"text",required:!0},source:"ntnName"}],title:"Buyers Edit"}))})]})]})},Y=function(e){e.match.params.id;var t=Object(o.f)(),r=Object(a.useState)({}),c=Object(h.a)(r,2),n=c[0],s=c[1],l=Object(a.useState)([]),u=Object(h.a)(l,2),j=u[0],d=u[1],p=Object(a.useState)(!1),O=Object(h.a)(p,2),f=O[0],v=O[1],y=function(){var r=Object(x.a)(m.a.mark((function r(a){var c,s;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.preventDefault(),!1===(c=a.currentTarget).checkValidity()&&a.stopPropagation(),v(!0),c.checkValidity()){r.next=6;break}return r.abrupt("return");case 6:return s=Object(i.a)({},n),e.newListResource&&(s[e.newListResource]=Object(V.a)(j)),r.next=10,_("".concat(e.match.url),s);case 10:r.sent.errorMessage||t.goBack();case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(a.useEffect)(Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,Object(i.a)({},e)),Object(b.jsxs)(U.a,{noValidate:!0,validated:f,onSubmit:y,children:[Object(b.jsx)(W,Object(i.a)(Object(i.a)({},e),{},{handleInputsChange:function(e){var t=e.target.name,r=e.target.value,a=Object(i.a)({},n);a[t]=r,s(Object(i.a)({},a))},editFormData:n})),Object(b.jsx)(J,Object(i.a)(Object(i.a)({},e),{},{manageformDataItems:function(e){var t=Object(V.a)(j);t.push({}),d(Object(V.a)(t))},formDataItems:j,removeformDataItems:function(e,t){var r=Object(V.a)(j);r.splice(t,1),d(Object(V.a)(r))},handleInputsChangeOfItems:function(e,t){var r=e.target.name,a=e.target.value,c=Object(V.a)(j);c[t][r]=a,d(Object(V.a)(c))}})),Object(b.jsx)(H.a,{className:"submit-button",variant:"primary",type:"submit",children:"Submit"})]})]})},$=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(Y,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers",form:[{label:"Buyer Name",props:{type:"text",required:!0},source:"name"},{label:"Address",props:{type:"text",required:!0},source:"address"},{label:"Phone",props:{type:"number",required:!0},source:"phone"},{label:"Representitve Name",props:{type:"text",required:!0},source:"representitveName"},{label:"NTN Number",props:{type:"text",required:!0},source:"ntnNumber"},{label:"NTN Name",props:{type:"text",required:!0},source:"ntnName"}],title:"Buyers Create"}))})]})]})},ee=function(e){var t=[{label:"Edit",resource:"".concat(e.match.url,"/:id")}];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(q,Object(i.a)(Object(i.a)({},e),{},{resource:"buyerInvoices",keys:[{label:"Serial Number",source:"serialNumber"},{label:"Business Type",source:"businessType"},{label:"Invoice Type",source:"invoiceType"},{label:"Date",source:"date"}],actions:t,createResource:"invoices",title:"Invoices List"}))})]})]})},te=function(e){console.log(e);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsxs)(p.a,{lg:9,className:"main_col",children:[Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{className:"align-right",children:[Object(b.jsx)(l.b,{className:"buttons",to:"".concat(e.match.url,"/print"),target:"_blank",children:"Print Invoice"})," ",Object(b.jsx)(l.b,{className:"buttons",to:"".concat(e.match.url,"/print/receipt"),target:"_blank",children:"Print Receipt"})," "]})}),Object(b.jsx)(K,Object(i.a)(Object(i.a)({},e),{},{resource:"invoices",form:[{label:"Serial Number",props:{type:"number",disabled:!0},source:"serialNumber"},{label:"Book Number",props:{type:"number",disabled:!0},source:"bookNumber"},{label:"Business Type",props:{type:"select",required:!0},source:"businessType",options:[{title:"supply",value:1},{title:"service",value:2}]},{label:"Invoice Type",props:{type:"text",required:!0},source:"invoiceType"},{label:"Date",props:{type:"date",required:!0},source:"date"},{label:"Items",isNewList:!0,props:{},source:"items",list:[{label:"Quantity",props:{type:"number",required:!0},source:"quantity"},{label:"Description",props:{type:"text",required:!0},source:"description"},{label:"Price",props:{type:"number",required:!0},source:"price"},{label:"Rate Of ST",props:{type:"number",required:!0},source:"rateOfST"}]}],newListResource:"items",title:"Invoice Edit"}))]})]})]})},re=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(Y,Object(i.a)(Object(i.a)({},e),{},{resource:"invoices",form:[{label:"Business Type",props:{type:"select",required:!0},options:[{title:"supply",value:1},{title:"service",value:2}],source:"businessType"},{label:"Invoice Type",props:{type:"text",required:!0},source:"invoiceType"},{label:"Date",props:{type:"date",required:!0},source:"date"},{label:"Items",isNewList:!0,props:{},source:"items",list:[{label:"Quantity",props:{type:"number",required:!0},source:"quantity"},{label:"Description",props:{type:"text",required:!0},source:"description"},{label:"Price",props:{type:"number",required:!0},source:"price"},{label:"Rate Of ST",props:{type:"number",required:!0},source:"rateOfST"}]}],newListResource:"items",title:"Invoice Create"}))})]})]})},ae=r(21),ce=r.n(ae),ne=function(e){var t=e.match.params,r=(t.buyerId,t.invoiceId,Object(a.useState)({})),c=Object(h.a)(r,2),n=c[0],s=c[1],i=Object(a.useState)({}),l=Object(h.a)(i,2),o=l[0],u=l[1],j=Object(a.useState)([]),O=Object(h.a)(j,2),f=O[0],v=O[1],y=Object(a.useState)({}),N=Object(h.a)(y,2),_=N[0],T=N[1];return Object(a.useEffect)(Object(x.a)(m.a.mark((function t(){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g("".concat(e.match.url));case 2:return r=t.sent,t.next=5,s(r);case 5:return t.next=7,u(r[e.innerSource]);case 7:return t.next=9,v(r[e.innerSource].items);case 9:return t.next=11,T(r[e.innerSource].grandTotals);case 11:case"end":return t.stop()}}),t)}))),[]),Object(b.jsx)("div",{className:ce.a.invoice_wrapper,children:Object(b.jsxs)("div",{className:ce.a.invoice_flex,children:[Object(b.jsx)("div",{className:ce.a.image_wrapper,children:Object(b.jsx)("img",{src:e.logo,style:{height:"173px"}})}),e.isTitleATTop&&e.InvoiceTitle&&Object(b.jsx)("div",{className:ce.a.invoice_title,children:Object(b.jsx)("h2",{children:e.InvoiceTitle})}),e.header.map((function(e){return Object(b.jsx)(d.a,{children:e.map((function(e,t){return Object(b.jsxs)(p.a,{className:ce.a.invoice_text_wrapper,style:t%2===0?{display:"flex"}:{display:"flex",justifyContent:"end"},children:[Object(b.jsx)("h6",{children:e.label}),Object(b.jsx)("p",{children:void 0===e.innerSource?n[e.source]:"invoice"===e.innerSource?o[e.source]:_[e.source]})]})}))})})),!e.isTitleATTop&&e.InvoiceTitle&&Object(b.jsx)("div",{className:ce.a.invoice_title,children:Object(b.jsx)("h2",{children:e.InvoiceTitle})}),Object(b.jsxs)("table",{responsive:!0,className:ce.a.table_wrapper,children:[Object(b.jsx)("thead",{children:e.invoiceItemsHeader&&e.invoiceItemsHeader.map((function(e,t){return Object(b.jsx)("th",{children:Object(b.jsx)("td",{children:e.label},"heading-".concat(t))})}))}),Object(b.jsxs)("tbody",{children:[e.invoiceItems&&f.map((function(t){return Object(b.jsx)("tr",{children:e.invoiceItems.map((function(e){return Object(b.jsx)("td",{children:t[e.source]})}))})})),Object(b.jsx)("tr",{children:e.grandTotals&&e.grandTotals.map((function(e){return Object(b.jsxs)("td",{children:[e.value&&e.value,e.source&&_[e.source]]})}))})]})]})]})})},se=function(e){var t=[{label:"Qty",source:"quantity"},{label:"Description",source:"description"},{label:"Price",source:"price"},{label:"Value Excel.ST",source:"valueExcelST"},{label:"Rate of ST",source:"rateOfST"},{label:"Total ST Payable",source:"totalSTPayable"},{label:"Value Of Including ST",source:"valueOfIncludingST"}];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{}),Object(b.jsx)(d.a,{children:Object(b.jsx)(ne,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers/:buyerId/invoices/:invoiceId",logo:"logo-invoice.png",InvoiceTitle:"BILL",header:[[{label:"Buyer Name:",source:"name"},{label:"NTN Number#:",source:"companyNTNNumber"}],[{label:"Address:",source:"address"},{label:"STRN#:",source:"companySTRNNumber"}],[{label:"Date:",source:"date",innerSource:"invoice"},{label:"Book No:",source:"bookNumber",innerSource:"invoice"},{label:"Sr.No:",source:"serialNumber",innerSource:"invoice"}]],innerSource:"invoice",invoiceItems:t,invoiceItemsHeader:t,grandTotals:[{},{},{value:"Total"},{source:"grandTotalValueExcelST"},{},{source:"grandTotalSTPayable"},{source:"grandTotalValueOfIncludingST"}]}))})]})},ie=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{}),Object(b.jsx)(d.a,{children:Object(b.jsx)(ne,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers/:buyerId/invoices/:invoiceId",logo:"logo-invoice.png",InvoiceTitle:"Received",isTitleATTop:!0,header:[[{label:"Date:",source:"date",innerSource:"invoice"},{label:"Book No:",source:"bookNumber",innerSource:"invoice"},{label:"Sr.No:",source:"serialNumber",innerSource:"invoice"}],[{label:"Buyer Name:",source:"name"}],[{label:"Total Amount Of Bill:",innerSource:"grandTotals",source:"grandTotalValueOfIncludingST"},{label:"Income Tax With Held:",innerSource:"grandTotals",source:"incomeTaxWithHeld"}],[{label:"Total GST/PST Amount Rs:",innerSource:"grandTotals",source:"grandTotalSTPayable"},{label:"Net Payment:",innerSource:"grandTotals",source:"netPayment"}],[{label:"Sale Tax With Held:",innerSource:"grandTotals",source:"saleTaxWithHeld"},{label:"Against The Bill No:",innerSource:"invoice",source:"serialNumber"}],[{label:"",innerSource:"",source:""},{label:"Signature/Stamp:",innerSource:"grandTotals",source:""}]],innerSource:"invoice"}))}),Object(b.jsx)("br",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)(d.a,{children:Object(b.jsx)(ne,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers/:buyerId/invoices/:invoiceId",logo:"logo-invoice.png",InvoiceTitle:"Sales Tax Bill",header:[[{label:"Date:",source:"date",innerSource:"invoice"},{label:"Book No:",source:"bookNumber",innerSource:"invoice"},{label:"Sr.No:",source:"serialNumber",innerSource:"invoice"}],[{label:"Buyer Name:",source:"name"}]],innerSource:"invoice",invoiceItemsHeader:[{label:"Qty",source:"quantity"},{label:"Description",source:"description"},{label:"Price",source:"price"},{label:"Value Excel.ST",source:"valueExcelST"},{label:"Rate of ST",source:"rateOfST"},{label:"Total ST Payable",source:"totalSTPayable"},{label:"Value Of Including ST",source:"valueOfIncludingST"}],grandTotals:[{},{},{value:"Total"},{source:"grandTotalValueExcelST"},{},{source:"grandTotalSTPayable"},{source:"grandTotalValueOfIncludingST"}]}))})]})},le=r(34),oe=r.n(le),ue=function(e){function t(e){for(var t=[],r=document.querySelectorAll("table tr"),a=0;a<r.length;a++){for(var c=[],n=r[a].querySelectorAll("td, th"),s=0;s<n.length;s++)c.push(n[s].innerText);t.push(c.join(","))}!function(e,t){var r,a;r=new Blob([e],{type:"text/csv"}),(a=document.createElement("a")).download=t,a.href=window.URL.createObjectURL(r),a.style.display="none",document.body.appendChild(a),a.click()}(t.join("\n"),e)}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D,Object(i.a)({},e)),e.data&&e.data.length>0&&Object(b.jsx)("div",{className:oe.a.report_btn,children:Object(b.jsx)(H.a,{onClick:function(){return t("".concat(e.title,"-").concat((new Date).getMonth()+1,".csv"))},children:" Excel File"})}),Object(b.jsxs)("table",{responsive:!0,className:oe.a.report_table_wrapper,children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:e.keys.map((function(e,t){return Object(b.jsx)("th",{children:Object(b.jsx)("td",{children:e.label},"heading-".concat(t))})}))})}),Object(b.jsx)("tbody",{children:function(t){if(t&&0!==t.length)return t.map((function(t,r){return t.invoice.items.map((function(a){return a.totalSTPayable20Percent=20*a.totalSTPayable/100,Object(b.jsx)("tr",{children:e.keys.map((function(e,r){var c=a[e.source];return c||(c=t[e.source]),c||(c=t.invoice[e.source]),Object(b.jsxs)("td",{children:[" ",c]},"key-".concat(r))}))},"row-".concat(r))}))}))}(e.data)})]})]})},be=r(43),je=r.n(be),de=function(e){Object(o.f)();var t=Object(a.useState)({}),r=Object(h.a)(t,2),c=r[0],n=r[1],s=Object(a.useState)(!1),l=Object(h.a)(s,2),u=l[0],j=l[1],d=Object(a.useState)([]),p=Object(h.a)(d,2),O=p[0],f=p[1],v=function(){var t=Object(x.a)(m.a.mark((function t(r){var a,n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),!1===(a=r.currentTarget).checkValidity()&&r.stopPropagation(),j(!0),a.checkValidity()){t.next=6;break}return t.abrupt("return");case 6:return n=Object(i.a)({},c),t.next=9,I("".concat(e.match.url),n);case 9:(s=t.sent).errorMessage||f(s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(U.a,{noValidate:!0,validated:u,onSubmit:v,children:[Object(b.jsx)(W,Object(i.a)(Object(i.a)({},e),{},{handleInputsChange:function(e){var t=e.target.name,r=e.target.value,a=Object(i.a)({},c);a[t]=r,n(Object(i.a)({},a))},editFormData:c})),Object(b.jsx)("div",{className:je.a.report_input_btn,children:Object(b.jsx)(H.a,{className:"submit-button",variant:"primary",type:"submit",children:"Submit"})})]}),Object(b.jsx)(ue,Object(i.a)(Object(i.a)({},e),{},{data:O}))]})},pe=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(de,Object(i.a)(Object(i.a)({},e),{},{resource:"reports",form:[{label:"Start Date",props:{type:"date",required:!0,name:"startDate"}},{label:"End Date",props:{type:"date",required:!0,name:"endDate"}}],keys:[{label:"Buyer NTN",source:"ntnNumber"},{label:"Buyer NTN Name",source:"ntnName"},{label:"Name Of Item",source:"description"},{label:"Type",source:"invoiceType"},{label:"Bill No.",source:"serialNumber"},{label:"Value Of Sale",source:"valueExcelST"},{label:"WHST",source:"totalSTPayable"},{label:"20%",source:"totalSTPayable20Percent"},{label:"Total Value Of Sale",source:"valueOfIncludingST"},{label:"Buyer Name",source:"name"},{label:"Buyer Address",source:"address"}],title:"GST Report"}))})]})]})},Oe=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(de,Object(i.a)(Object(i.a)({},e),{},{resource:"reports",form:[{label:"Start Date",props:{type:"date",required:!0,name:"startDate"}},{label:"End Date",props:{type:"date",required:!0,name:"endDate"}}],keys:[{label:"Buyer NTN",source:"ntnNumber"},{label:"Buyer NTN Name",source:"ntnName"},{label:"Name Of Item",source:"description"},{label:"Type",source:"invoiceType"},{label:"Bill No.",source:"serialNumber"},{label:"Value Of Sale",source:"valueExcelST"},{label:"WHST",source:"totalSTPayable"},{label:"20%",source:"totalSTPayable20Percent"},{label:"Total Value Of Sale",source:"valueOfIncludingST"},{label:"Buyer Name",source:"name"},{label:"Buyer Address",source:"address"}],title:"With Out GST Report"}))})]})]})},me=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(de,Object(i.a)(Object(i.a)({},e),{},{resource:"reports",form:[{label:"Start Date",props:{type:"date",required:!0,name:"startDate"}},{label:"End Date",props:{type:"date",required:!0,name:"endDate"}}],keys:[{label:"Buyer NTN",source:"ntnNumber"},{label:"Buyer NTN Name",source:"ntnName"},{label:"Name Of Item",source:"description"},{label:"Type",source:"invoiceType"},{label:"Bill No.",source:"serialNumber"},{label:"Value Of Sale",source:"valueExcelST"},{label:"WHST",source:"totalSTPayable"},{label:"20%",source:"totalSTPayable20Percent"},{label:"Total Value Of Sale",source:"valueOfIncludingST"},{label:"Buyer Name",source:"name"},{label:"Buyer Address",source:"address"}],title:"PST Report"}))})]})]})},xe=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(de,Object(i.a)(Object(i.a)({},e),{},{resource:"reports",form:[{label:"Start Date",props:{type:"date",required:!0,name:"startDate"}},{label:"End Date",props:{type:"date",required:!0,name:"endDate"}}],keys:[{label:"Buyer NTN",source:"ntnNumber"},{label:"Buyer NTN Name",source:"ntnName"},{label:"Name Of Item",source:"description"},{label:"Type",source:"invoiceType"},{label:"Bill No.",source:"serialNumber"},{label:"Value Of Sale",source:"valueExcelST"},{label:"WHST",source:"totalSTPayable"},{label:"20%",source:"totalSTPayable20Percent"},{label:"Total Value Of Sale",source:"valueOfIncludingST"},{label:"Buyer Name",source:"name"},{label:"Buyer Address",source:"address"}],title:"With Out PST Report"}))})]})]})},he=function(e){var t=[{label:"Edit",resource:""},{label:"Buyers",resource:"".concat(e.match.url,"/:id/buyers")}];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(q,Object(i.a)(Object(i.a)({},e),{},{resource:"units",keys:[{label:"Unit Name",source:"name"},{label:"Address",source:"address"},{label:"Orginizer Name",source:"organizerName"},{label:"Phone",source:"phone"},{label:"userName",source:"userName"}],actions:t,title:"Unit List"}))})]})]})},fe=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(Y,Object(i.a)(Object(i.a)({},e),{},{resource:"units",form:[{label:"Unit Name",props:{type:"text",required:!0},source:"name"},{label:"Address",props:{type:"text",required:!0},source:"address"},{label:"Phone",props:{type:"number",required:!0},source:"phone"},{label:"User Name",props:{type:"number",required:!0},source:"userName"},{label:"Password",props:{type:"number",required:!0},source:"password"},{label:"Orginazer Name",props:{type:"text",required:!0},source:"organizerName"}],title:"Unit Create"}))})]})]})},ve=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(R,{})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{lg:3,children:Object(b.jsx)(E,{lg:3})}),Object(b.jsx)(p.a,{lg:9,className:"main_col",children:Object(b.jsx)(K,Object(i.a)(Object(i.a)({},e),{},{resource:"units",form:[{label:"Unit Name",props:{type:"text",required:!0},source:"name"},{label:"Address",props:{type:"text",required:!0},source:"address"},{label:"Phone",props:{type:"number",required:!0},source:"phone"},{label:"User Name",props:{type:"number",required:!0},source:"userName"},{label:"Password",props:{type:"number",required:!0},source:"password"},{label:"Orginazer Name",props:{type:"text",required:!0},source:"organizerName"}],title:"Unit Edit"}))})]})]})},ye=function(e){var t=Object(o.f)(),r=Object(a.useState)({}),c=Object(h.a)(r,2),n=c[0],s=c[1],l=Object(a.useState)(!1),j=Object(h.a)(l,2),O=j[0],f=j[1],v=function(e){var t=e.target.name,r=e.target.value,a=Object(i.a)({},n);a[t]=r,s(Object(i.a)({},a))},y=function(){var e=Object(x.a)(m.a.mark((function e(r){var a,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!1===(a=r.currentTarget).checkValidity()&&r.stopPropagation(),f(!0),a.checkValidity()){e.next=6;break}return e.abrupt("return");case 6:return c=Object(i.a)({},n),e.next=9,I("/login",c);case 9:(s=e.sent)&&!s.errorMessage&&(sessionStorage.setItem("userId",s.id),sessionStorage.setItem("isAdminLogin",s.isAdminLogin),sessionStorage.setItem("isUnitLogin",s.isUnitLogin),s.isUnitLogin&&t.push("/units/".concat(s.id,"/buyers")),s.isAdminLogin&&t.push("/units"));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u.a,{children:Object(b.jsx)(d.a,{children:Object(b.jsxs)(p.a,{md:{span:6,offset:3},children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(p.a,{md:{offset:3},children:Object(b.jsx)("img",{src:"logo192.png",style:{height:"200px"}})})}),Object(b.jsxs)(U.a,{noValidate:!0,validated:O,onSubmit:y,children:[Object(b.jsxs)(U.a.Group,{className:"mb-3",children:[Object(b.jsx)(U.a.Label,{children:"User Name"}),Object(b.jsx)(U.a.Control,{name:"userName",type:"text",onChange:v}),Object(b.jsx)(U.a.Control.Feedback,{type:"invalid",children:"Please enter a username"})]}),Object(b.jsxs)(U.a.Group,{className:"mb-3",children:[Object(b.jsx)(U.a.Label,{children:"Password"}),Object(b.jsx)(U.a.Control,{name:"password",type:"password",onChange:v}),Object(b.jsx)(U.a.Control.Feedback,{type:"invalid",children:"Please enter a password"})]}),Object(b.jsx)(H.a,{className:"submit-button",variant:"primary",type:"submit",children:"Login"})]})]})})})})},ge=r(35),Ne=r.n(ge),_e=function(e){e.title;return Object(b.jsx)(l.a,{children:Object(b.jsx)("div",{className:Ne.a.wrapper,children:Object(b.jsx)(u.a,{className:Ne.a.container,children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:ye}),Object(b.jsx)(o.a,{exact:!0,path:"/about",component:j}),Object(b.jsx)(o.a,{exact:!0,path:"/login",component:ye}),Object(b.jsx)(o.a,{exact:!0,path:"/units",component:he}),Object(b.jsx)(o.a,{exact:!0,path:"/units/create",render:function(e){return Object(b.jsx)(fe,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/units/:id",render:function(e){return Object(b.jsx)(ve,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/units/:id/buyers",render:function(e){return Object(b.jsx)(A,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/units/:id/buyers/create",render:function(e){return Object(b.jsx)($,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/units/:id/buyers/:buyerId",render:function(e){return Object(b.jsx)(Z,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/units/:unitId/buyers/:id/invoices",render:function(e){return Object(b.jsx)(ee,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/units/:unitId/buyers/:id/invoices/create",render:function(e){return Object(b.jsx)(re,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/units/:unitId/buyers/:id/invoices/:invoiceId",render:function(e){return Object(b.jsx)(te,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/units/:unitId/buyers/:buyerId/invoices/:invoiceId/print",render:function(e){return Object(b.jsx)(se,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/units/:unitId/buyers/:buyerId/invoices/:invoiceId/print/receipt",render:function(e){return Object(b.jsx)(ie,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/buyers",component:A}),Object(b.jsx)(o.a,{exact:!0,path:"/buyers/create",render:function(e){return Object(b.jsx)($,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/buyers/:id",render:function(e){return Object(b.jsx)(Z,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/buyers/:id/invoices",render:function(e){return Object(b.jsx)(ee,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/buyers/:id/invoices/create",render:function(e){return Object(b.jsx)(re,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/buyers/:id/invoices/:invoiceId",render:function(e){return Object(b.jsx)(te,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/report/with-gst",render:function(e){return Object(b.jsx)(pe,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/report/without-gst",render:function(e){return Object(b.jsx)(Oe,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/report/with-pst",render:function(e){return Object(b.jsx)(me,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/report/without-pst",render:function(e){return Object(b.jsx)(xe,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/buyers/:buyerId/invoices/:invoiceId/print",render:function(e){return Object(b.jsx)(se,Object(i.a)({},e))}}),Object(b.jsx)(o.a,{exact:!0,path:"/buyers/:buyerId/invoices/:invoiceId/print/receipt",render:function(e){return Object(b.jsx)(ie,Object(i.a)({},e))}})]})})})})},Te=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,67)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),a(e),c(e),n(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(_e,{})}),document.getElementById("root")),Te()}},[[57,1,2]]]);
//# sourceMappingURL=main.4c3895ed.chunk.js.map