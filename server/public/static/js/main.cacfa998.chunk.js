(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,r){},47:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),a=r(20),s=r.n(a),i=(r(38),r(2)),o=r(10),u=r(9),l=r(51),b=r(50),j=r(33),d=(r(39),r(52)),p=r(0),O=function(){return Object(p.jsx)("div",{className:"navbar",children:Object(p.jsxs)("nav",{className:"nav-menu active",children:[Object(p.jsxs)("ul",{className:"nav-menu-items",children:[Object(p.jsx)("li",{className:"navbar-toggle",children:Object(p.jsx)(o.b,{to:"/",className:"menu-bar",children:"Dashboard"})}),Object(p.jsx)("li",{className:"navbar-toggle",children:Object(p.jsx)(o.b,{to:"/buyers",className:"menu-bar",children:"Buyers"})}),Object(p.jsx)("li",{className:"navbar-toggle",children:Object(p.jsx)(o.b,{to:"/about",className:"menu-bar",children:"About"})})]}),Object(p.jsx)(d.a,{flush:!0,children:Object(p.jsxs)(d.a.Item,{eventKey:"0",children:[Object(p.jsx)(d.a.Header,{children:"Reports"}),Object(p.jsxs)(d.a.Body,{children:[Object(p.jsx)("p",{children:Object(p.jsx)(o.b,{to:"/report/with-gst",className:"menu-bar",children:"With GST"})}),Object(p.jsx)("p",{children:Object(p.jsx)(o.b,{to:"/without-gst",className:"menu-bar",children:"Without GST"})}),Object(p.jsx)("p",{children:Object(p.jsx)(o.b,{to:"/with-pst",className:"menu-bar",children:"With PST"})}),Object(p.jsx)("p",{children:Object(p.jsx)(o.b,{to:"/without-pst",className:"menu-bar",children:"Without PST"})})]})]})})]})})},h=function(e){e.children;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"header",children:Object(p.jsx)("div",{children:Object(p.jsx)("img",{className:"log",src:"logo192.png"})})})})},m=function(){return Object(p.jsx)("div",{children:"home"})},x=function(){return Object(p.jsx)("div",{children:"About"})},f=r(6),v=r.n(f),y=r(11),g=r(8),T=r(49),N="http://127.0.0.1:3000/api",S=function(){var e=Object(y.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/"==t.charAt(0)&&(t=t.substring(1)),e.next=3,fetch("".concat(N,"/").concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/"==t.charAt(0)&&(t=t.substring(1)),e.next=3,fetch("".concat(N,"/").concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(y.a)(v.a.mark((function e(t,r){var c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},"/"==t.charAt(0)&&(t=t.substring(1)),e.next=4,fetch("".concat(N,"/").concat(t),c);case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),w=function(){var e=Object(y.a)(v.a.mark((function e(t,r){var c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/"==t.charAt(0)&&(t=t.substring(1)),c={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.next=4,fetch("".concat(N,"/").concat(t),c);case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),D=function(){var e=Object(y.a)(v.a.mark((function e(t){var r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/"==t.charAt(0)&&(t=t.substring(1)),r={method:"DELETE",headers:{"Content-Type":"application/json"}},e.next=4,fetch("".concat(N,"/").concat(t),r);case 4:return c=e.sent,e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=k,P=function(e){var t=Object(c.useState)([]),r=Object(g.a)(t,2),n=r[0],a=r[1];Object(c.useEffect)(Object(y.a)(v.a.mark((function t(){var r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="",r=e.match?e.match.url:e.resource,t.next=4,S(r);case 4:return c=t.sent,a(s(c)),t.abrupt("return",(function(){a([])}));case 7:case"end":return t.stop()}}),t)}))),[]);var s=function(t){return t.map((function(t,r){return Object(p.jsxs)("tr",{children:[e.keys.map((function(e,r){return Object(p.jsxs)("td",{children:[" ",t[e.source]]},"key-".concat(r))})),e.actions.map((function(r,c){var n=r.resource;return n?Object.keys(t).forEach((function(e){n=n.replace(":".concat(e),"".concat(t[e]))})):n="".concat(e.resource,"/").concat(t.id),Object(p.jsxs)("td",{children:[" ",Object(p.jsx)(o.b,{to:"".concat(n),children:r.label})," "]},"action-".concat(c))}))]},"row-".concat(r))}))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.b,{to:"".concat(e.match.url,"/create"),style:{display:"flex",justifyContent:"end"},children:"Create"}),Object(p.jsxs)(T.a,{responsive:!0,children:[Object(p.jsx)("thead",{children:e.keys.map((function(e,t){return Object(p.jsx)("th",{children:Object(p.jsx)("td",{children:e.label},"heading-".concat(t))})}))}),Object(p.jsxs)("tbody",{children:[n,Object(p.jsx)("tr",{children:Object(p.jsx)("td",{})})]})]})]})},B=function(e){var t=[{label:"Edit",resource:""},{label:"Invoices",resource:"".concat(e.match.url,"/:id/invoices")}];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{children:"Buyers Info"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(P,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers",keys:[{label:"Byuer Name",source:"name"},{label:"Address",source:"address"},{label:"Representitve Name",source:"representitveName"},{label:"Phone",source:"phone"},{label:"NTN Number",source:"ntnNumber"},{label:"NTN Name",source:"ntnName"}],actions:t}))})]})},C=r(14),F=r(53),R=r(54),L=function(e){return Object(p.jsx)(p.Fragment,{children:e.form.map((function(t){return t.isNewList||"select"===t.props.type?"select"===t.props.type?Object(p.jsxs)(F.a.Group,{className:"mb-3",children:[Object(p.jsx)(F.a.Label,{children:t.label}),Object(p.jsxs)(F.a.Select,{name:t.source?t.source:t.props.name,value:e.editFormData[t.source],onChange:e.handleInputsChange,children:[Object(p.jsx)("option",{}),t.options.map((function(e){return Object(p.jsx)("option",{value:e.value,children:e.title})}))]})]}):void 0:Object(p.jsxs)(F.a.Group,{className:"mb-3",children:[Object(p.jsx)(F.a.Label,{children:t.label}),Object(p.jsx)(F.a.Control,Object(i.a)(Object(i.a)({},t.props),{},{name:t.source?t.source:t.props.name,value:(t.props.type,e.editFormData[t.source]),onChange:e.handleInputsChange})),Object(p.jsx)(F.a.Control.Feedback,{type:"invalid",children:"Please enter a ".concat(t.label)})]})}))})},E=function(e){return Object(p.jsxs)(p.Fragment,{children:[e.newListResource&&Object(p.jsxs)("div",{className:"space-between",children:[Object(p.jsx)("h3",{children:"Item Details"}),Object(p.jsx)(R.a,{variant:"primary",onClick:e.manageformDataItems,children:"Add Item "})]}),e.form.map((function(t){if(t.isNewList)return Object(p.jsx)("table",{responsive:!0,children:Object(p.jsx)("tbody",{children:e.formDataItems.map((function(r,c){return Object(p.jsxs)("tr",{children:[t.list.map((function(t){return Object(p.jsx)("td",{children:Object(p.jsxs)(F.a.Group,{className:"mb-3",children:[Object(p.jsx)(F.a.Label,{children:t.label}),Object(p.jsx)(F.a.Control,Object(i.a)(Object(i.a)({},t.props),{},{name:t.source,value:r[t.source],onChange:function(t){return e.handleInputsChangeOfItems(t,c)}})),Object(p.jsx)(F.a.Control.Feedback,{type:"invalid",children:"Please enter a ".concat(t.label)})]})},"heading-".concat(c))})),Object(p.jsx)(R.a,{variant:"danger",size:"sm",style:{marginTop:"33px"},onClick:function(t){return e.removeformDataItems(t,c)},children:"Remove"})]})}))})})}))]})},A=function(e){var t=e.match.params.id,r=Object(u.f)(),n=Object(c.useState)({}),a=Object(g.a)(n,2),s=a[0],o=a[1],l=Object(c.useState)([]),b=Object(g.a)(l,2),j=b[0],d=b[1],O=Object(c.useState)(!1),h=Object(g.a)(O,2),m=h[0],x=h[1],f=function(){var c=Object(y.a)(v.a.mark((function c(n){var a,o;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),!1===(a=n.currentTarget).checkValidity()&&n.stopPropagation(),x(!0),a.checkValidity()){c.next=6;break}return c.abrupt("return");case 6:return o=Object(i.a)({},s),e.newListResource&&(o[e.newListResource]=Object(C.a)(j)),c.next=10,w("".concat(e.resource,"/").concat(t),o);case 10:c.sent.errorMessage||r.goBack();case 12:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),T=function(){var t=Object(y.a)(v.a.mark((function t(c){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,D("".concat(e.match.url));case 3:t.sent.errorMessage||r.goBack();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)(Object(y.a)(v.a.mark((function t(){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I("".concat(e.match.url));case 2:return r=t.sent,t.next=5,o(r);case 5:if(!r[e.newListResource]){t.next=8;break}return t.next=8,d(r[e.newListResource]);case 8:case"end":return t.stop()}}),t)}))),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(F.a,{noValidate:!0,validated:m,onSubmit:f,children:[Object(p.jsx)(L,Object(i.a)(Object(i.a)({},e),{},{handleInputsChange:function(e){var t=e.target.name,r=e.target.value,c=Object(i.a)({},s);c[t]=r,o(Object(i.a)({},c))},editFormData:s})),Object(p.jsx)(E,Object(i.a)(Object(i.a)({},e),{},{manageformDataItems:function(e){var t=Object(C.a)(j);t.push({}),d(Object(C.a)(t))},formDataItems:j,removeformDataItems:function(e,t){var r=Object(C.a)(j);r.splice(t,1),d(Object(C.a)(r))},handleInputsChangeOfItems:function(e,t){var r=e.target.name,c=e.target.value,n=Object(C.a)(j);n[t][r]=c,d(Object(C.a)(n))}})),Object(p.jsxs)("div",{className:"space-between",children:[Object(p.jsx)(R.a,{className:"submit-button",variant:"primary",type:"submit",children:"Update"}),Object(p.jsx)(R.a,{className:"submit-button",variant:"danger",onClick:T,children:"Delete"})]})]})})},V=function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{children:"Buyers Edit"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(A,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers",form:[{label:"Buyer Name",props:{type:"text",required:!0},source:"name"},{label:"Address",props:{type:"text",required:!0},source:"address"},{label:"Phone",props:{type:"number",required:!0},source:"phone"},{label:"Representitve Name",props:{type:"text",required:!0},source:"representitveName"},{label:"NTN Number",props:{type:"text",required:!0},source:"ntnNumber"},{label:"NTN Name",props:{type:"text",required:!0},source:"ntnName"}]}))})]})},H=function(e){var t=e.match.params.id,r=Object(u.f)(),n=Object(c.useState)({}),a=Object(g.a)(n,2),s=a[0],o=a[1],l=Object(c.useState)([]),b=Object(g.a)(l,2),j=b[0],d=b[1],O=Object(c.useState)(!1),h=Object(g.a)(O,2),m=h[0],x=h[1],f=function(){var c=Object(y.a)(v.a.mark((function c(n){var a,o;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),!1===(a=n.currentTarget).checkValidity()&&n.stopPropagation(),x(!0),a.checkValidity()){c.next=6;break}return c.abrupt("return");case 6:return o=Object(i.a)({},s),e.newListResource&&(o[e.newListResource]=Object(C.a)(j),o.buyerId=t),c.next=10,k("".concat(e.resource),o);case 10:c.sent.errorMessage||r.goBack();case 12:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(c.useEffect)(Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(F.a,{noValidate:!0,validated:m,onSubmit:f,children:[Object(p.jsx)(L,Object(i.a)(Object(i.a)({},e),{},{handleInputsChange:function(e){var t=e.target.name,r=e.target.value,c=Object(i.a)({},s);c[t]=r,o(Object(i.a)({},c))},editFormData:s})),Object(p.jsx)(E,Object(i.a)(Object(i.a)({},e),{},{manageformDataItems:function(e){var t=Object(C.a)(j);t.push({}),d(Object(C.a)(t))},formDataItems:j,removeformDataItems:function(e,t){var r=Object(C.a)(j);r.splice(t,1),d(Object(C.a)(r))},handleInputsChangeOfItems:function(e,t){var r=e.target.name,c=e.target.value,n=Object(C.a)(j);n[t][r]=c,d(Object(C.a)(n))}})),Object(p.jsx)(R.a,{className:"submit-button",variant:"primary",type:"submit",children:"Submit"})]})})},W=function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{children:"Buyers Create"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(H,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers",form:[{label:"Buyer Name",props:{type:"text",required:!0},source:"name"},{label:"Address",props:{type:"text",required:!0},source:"address"},{label:"Phone",props:{type:"number",required:!0},source:"phone"},{label:"Representitve Name",props:{type:"text",required:!0},source:"representitveName"},{label:"NTN Number",props:{type:"text",required:!0},source:"ntnNumber"},{label:"NTN Name",props:{type:"text",required:!0},source:"ntnName"}]}))})]})},G=function(e){var t=[{label:"Edit",resource:"".concat(e.match.url,"/:id")}];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{children:"Invoices List"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(P,Object(i.a)(Object(i.a)({},e),{},{resource:"buyerInvoices",keys:[{label:"Serial Number",source:"serialNumber"},{label:"Book Number",source:"bookNumber"},{label:"Business Type",source:"businessType"},{label:"Invoice Type",source:"invoiceType"},{label:"Date",source:"date"}],actions:t,createResource:"invoices"}))})]})},M=function(e){console.log(e);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{children:"Invoice Edit"})}),Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{className:"align-right",children:[Object(p.jsx)(o.b,{className:"buttons",to:"".concat(e.match.url,"/print"),children:"Print Invoice"})," ",Object(p.jsx)(o.b,{className:"buttons",to:"".concat(e.match.url,"/print/receipt"),children:"Print Receipt"})," "]})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(A,Object(i.a)(Object(i.a)({},e),{},{resource:"invoices",form:[{label:"Serial Number",props:{type:"number",disabled:!0},source:"serialNumber"},{label:"Book Number",props:{type:"number",disabled:!0},source:"bookNumber"},{label:"Business Type",props:{type:"select",required:!0},source:"businessType",options:[{title:"supply",value:1},{title:"service",value:2}]},{label:"Invoice Type",props:{type:"text",required:!0},source:"invoiceType"},{label:"Date",props:{type:"date",required:!0},source:"date"},{label:"Items",isNewList:!0,props:{},source:"items",list:[{label:"Quantity",props:{type:"number",required:!0},source:"quantity"},{label:"Description",props:{type:"text",required:!0},source:"description"},{label:"Price",props:{type:"number",required:!0},source:"price"},{label:"Rate Of ST",props:{type:"number",required:!0},source:"rateOfST"}]}],newListResource:"items"}))})]})},J=function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{children:"Invoice Create"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(H,Object(i.a)(Object(i.a)({},e),{},{resource:"invoices",form:[{label:"Business Type",props:{type:"select",required:!0},options:[{title:"supply",value:1},{title:"service",value:2}],source:"businessType"},{label:"Invoice Type",props:{type:"text",required:!0},source:"invoiceType"},{label:"Date",props:{type:"date",required:!0},source:"date"},{label:"Items",isNewList:!0,props:{},source:"items",list:[{label:"Quantity",props:{type:"number",required:!0},source:"quantity"},{label:"Description",props:{type:"text",required:!0},source:"description"},{label:"Price",props:{type:"number",required:!0},source:"price"},{label:"Rate Of ST",props:{type:"number",required:!0},source:"rateOfST"}]}],newListResource:"items"}))})]})},Q=function(e){var t=e.match.params,r=(t.buyerId,t.invoiceId,Object(c.useState)({})),n=Object(g.a)(r,2),a=n[0],s=n[1],i=Object(c.useState)({}),o=Object(g.a)(i,2),u=o[0],l=o[1],d=Object(c.useState)([]),O=Object(g.a)(d,2),h=O[0],m=O[1],x=Object(c.useState)({}),f=Object(g.a)(x,2),T=f[0],N=f[1];return Object(c.useEffect)(Object(y.a)(v.a.mark((function t(){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S("".concat(e.match.url));case 2:return r=t.sent,t.next=5,s(r);case 5:return t.next=7,l(r[e.innerSource]);case 7:return t.next=9,m(r[e.innerSource].items);case 9:return t.next=11,N(r[e.innerSource].grandTotals);case 11:case"end":return t.stop()}}),t)}))),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:e.logo,style:{height:"173px"}})}),e.isTitleATTop&&e.InvoiceTitle&&Object(p.jsx)("h2",{children:e.InvoiceTitle}),e.header.map((function(e){return Object(p.jsx)(b.a,{children:e.map((function(e){return Object(p.jsxs)(j.a,{style:{display:"flex"},children:[Object(p.jsx)("p",{children:e.label}),Object(p.jsx)("span",{children:void 0===e.innerSource?a[e.source]:"invoice"===e.innerSource?u[e.source]:T[e.source]})]})}))})})),!e.isTitleATTop&&e.InvoiceTitle&&Object(p.jsx)("h2",{children:e.InvoiceTitle}),Object(p.jsxs)("table",{responsive:!0,children:[Object(p.jsx)("thead",{children:e.invoiceItemsHeader&&e.invoiceItemsHeader.map((function(e,t){return Object(p.jsx)("th",{children:Object(p.jsx)("td",{children:e.label},"heading-".concat(t))})}))}),Object(p.jsxs)("tbody",{children:[e.invoiceItems&&h.map((function(t){return Object(p.jsx)("tr",{children:e.invoiceItems.map((function(e){return Object(p.jsx)("td",{children:t[e.source]})}))})})),Object(p.jsx)("tr",{children:e.grandTotals&&e.grandTotals.map((function(e){return Object(p.jsxs)("td",{children:[e.value&&e.value,e.source&&T[e.source]]})}))})]})]})]})},U=function(e){var t=[{label:"Qty",source:"quantity"},{label:"Description",source:"description"},{label:"Price",source:"price"},{label:"Value Excel.ST",source:"valueExcelST"},{label:"Rate of ST",source:"rateOfST"},{label:"Total ST Payable",source:"totalSTPayable"},{label:"Value Of Including ST",source:"valueOfIncludingST"}];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{}),Object(p.jsx)(b.a,{children:Object(p.jsx)(Q,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers/:buyerId/invoices/:invoiceId",logo:"logo-invoice.png",InvoiceTitle:"BILL",header:[[{label:"Buyer Name:",source:"name"},{label:"NTN Number#:",source:"companyNTNNumber"}],[{label:"Address:",source:"address"},{label:"STRN#:",source:"companySTRNNumber"}],[{label:"Date:",source:"date",innerSource:"invoice"},{label:"Book No:",source:"bookNumber",innerSource:"invoice"},{label:"Sr.No:",source:"serialNumber",innerSource:"invoice"}]],innerSource:"invoice",invoiceItems:t,invoiceItemsHeader:t,grandTotals:[{},{},{value:"Total"},{source:"grandTotalValueExcelST"},{},{source:"grandTotalSTPayable"},{source:"grandTotalValueOfIncludingST"}]}))})]})},z=function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{}),Object(p.jsx)(b.a,{children:Object(p.jsx)(Q,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers/:buyerId/invoices/:invoiceId",logo:"logo-invoice.png",InvoiceTitle:"Received",isTitleATTop:!0,header:[[{label:"Date:",source:"date",innerSource:"invoice"},{label:"Book No:",source:"bookNumber",innerSource:"invoice"},{label:"Sr.No:",source:"serialNumber",innerSource:"invoice"}],[{label:"Buyer Name:",source:"name"}],[{label:"Total Amount Of Bill:",innerSource:"grandTotals",source:"grandTotalValueOfIncludingST"},{label:"Income Tax With Held:",innerSource:"grandTotals",source:"incomeTaxWithHeld"}],[{label:"Total GST/PST Amount Rs:",innerSource:"grandTotals",source:"grandTotalSTPayable"},{label:"Net Payment:",innerSource:"grandTotals",source:"netPayment"}],[{label:"Sale Tax With Held:",innerSource:"grandTotals",source:"saleTaxWithHeld"},{label:"Against The Bill No:",innerSource:"invoice",source:"serialNumber"}],[{label:"",innerSource:"",source:""},{label:"Signature/Stamp:",innerSource:"grandTotals",source:""}]],innerSource:"invoice"}))}),Object(p.jsx)("br",{}),Object(p.jsx)("hr",{}),Object(p.jsx)("br",{}),Object(p.jsx)(b.a,{children:Object(p.jsx)(Q,Object(i.a)(Object(i.a)({},e),{},{resource:"buyers/:buyerId/invoices/:invoiceId",logo:"logo-invoice.png",InvoiceTitle:"Sales Tax Bill",header:[[{label:"Date:",source:"date",innerSource:"invoice"},{label:"Book No:",source:"bookNumber",innerSource:"invoice"},{label:"Sr.No:",source:"serialNumber",innerSource:"invoice"}],[{label:"Buyer Name:",source:"name"}]],innerSource:"invoice",invoiceItemsHeader:[{label:"Qty",source:"quantity"},{label:"Description",source:"description"},{label:"Price",source:"price"},{label:"Value Excel.ST",source:"valueExcelST"},{label:"Rate of ST",source:"rateOfST"},{label:"Total ST Payable",source:"totalSTPayable"},{label:"Value Of Including ST",source:"valueOfIncludingST"}],grandTotals:[{},{},{value:"Total"},{source:"grandTotalValueExcelST"},{},{source:"grandTotalSTPayable"},{source:"grandTotalValueOfIncludingST"}]}))})]})},K=function(e){Object(u.f)();var t=Object(c.useState)({}),r=Object(g.a)(t,2),n=r[0],a=r[1],s=Object(c.useState)(!1),o=Object(g.a)(s,2),l=o[0],b=o[1],j=function(){var t=Object(y.a)(v.a.mark((function t(r){var c,a,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),!1===(c=r.currentTarget).checkValidity()&&r.stopPropagation(),b(!0),c.checkValidity()){t.next=6;break}return t.abrupt("return");case 6:return a=Object(i.a)({},n),t.next=9,q("".concat(e.match.url),a);case 9:(s=t.sent).errorMessage||e.getData(s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(F.a,{noValidate:!0,validated:l,onSubmit:j,children:[Object(p.jsx)(L,Object(i.a)(Object(i.a)({},e),{},{handleInputsChange:function(e){var t=e.target.name,r=e.target.value,c=Object(i.a)({},n);c[t]=r,a(Object(i.a)({},c))},editFormData:n})),Object(p.jsx)(R.a,{className:"submit-button",variant:"primary",type:"submit",children:"Submit"})]})})},X=function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(K,Object(i.a)(Object(i.a)({},e),{},{resource:"reports",form:[{label:"Start Date",props:{type:"date",required:!0,name:"startDate"}},{label:"End Date",props:{type:"date",required:!0,name:"endDate"}}],getData:function(e){console.log(e)}}))})},Y=function(e){e.title;return Object(p.jsx)(o.a,{children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(h,{})}),Object(p.jsxs)(b.a,{children:[Object(p.jsx)(j.a,{lg:4,children:Object(p.jsx)(O,{})}),Object(p.jsx)(j.a,{lg:8,children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:"/",component:m}),Object(p.jsx)(u.a,{exact:!0,path:"/about",component:x}),Object(p.jsx)(u.a,{exact:!0,path:"/buyers",component:B}),Object(p.jsx)(u.a,{exact:!0,path:"/buyers/create",render:function(e){return Object(p.jsx)(W,Object(i.a)({},e))}}),Object(p.jsx)(u.a,{exact:!0,path:"/buyers/:id",render:function(e){return Object(p.jsx)(V,Object(i.a)({},e))}}),Object(p.jsx)(u.a,{exact:!0,path:"/buyers/:id/invoices",render:function(e){return Object(p.jsx)(G,Object(i.a)({},e))}}),Object(p.jsx)(u.a,{exact:!0,path:"/buyers/:id/invoices/create",render:function(e){return Object(p.jsx)(J,Object(i.a)({},e))}}),Object(p.jsx)(u.a,{exact:!0,path:"/buyers/:id/invoices/:invoiceId",render:function(e){return Object(p.jsx)(M,Object(i.a)({},e))}}),Object(p.jsx)(u.a,{exact:!0,path:"/buyers/:buyerId/invoices/:invoiceId/print",render:function(e){return Object(p.jsx)(U,Object(i.a)({},e))}}),Object(p.jsx)(u.a,{exact:!0,path:"/buyers/:buyerId/invoices/:invoiceId/print/receipt",render:function(e){return Object(p.jsx)(z,Object(i.a)({},e))}}),Object(p.jsx)(u.a,{exact:!0,path:"/report/with-gst",render:function(e){return Object(p.jsx)(X,Object(i.a)({},e))}})]})})]})]})})},Z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,55)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),c(e),n(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[47,1,2]]]);
//# sourceMappingURL=main.cacfa998.chunk.js.map