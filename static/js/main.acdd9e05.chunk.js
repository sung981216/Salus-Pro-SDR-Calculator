(this["webpackJsonpsalus-calculator"]=this["webpackJsonpsalus-calculator"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(4),a=c.n(r),s=(c(9),c(2)),j=(c(10),c(0)),l=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(""),a=Object(s.a)(r,2),l=a[0],o=a[1],b=Object(n.useState)(""),u=Object(s.a)(b,2),A=u[0],m=u[1],d=Object(n.useState)(""),O=Object(s.a)(d,2),h=O[0],M=O[1],N=Object(n.useState)(""),C=Object(s.a)(N,2),v=C[0],x=C[1],g=Object(n.useState)(""),p=Object(s.a)(g,2),w=p[0],f=p[1],D=Object(n.useState)(0),G=Object(s.a)(D,2),S=G[0],Y=G[1],R=Object(n.useState)(0),F=Object(s.a)(R,2),L=F[0],I=F[1],k=Object(n.useState)(""),X=Object(s.a)(k,2),y=X[0],B=X[1],V=Object(n.useState)(0),W=Object(s.a)(V,2),E=W[0],H=W[1],Q=Object(n.useState)(0),Z=Object(s.a)(Q,2),z=Z[0],U=Z[1];Object(n.useEffect)((function(){!function(e){var t,c=Number(e),n=500;t=0===c?0:c>=1&&c<=10?n+10*c:c>=11&&c<=20?n+9*c:c>=21&&c<=30?n+8*c:c>=31&&c<=40?n+7*c:c>=41&&c<=50?n+6*c:c>=51&&c<=60?n+5*c:c>=61&&c<=70?n+4*c:n+3*c,M(c>1e3?"Custom":t.toString())}(c),function(e){var t=Number(e),c=200;x((0===t?0:t>=1&&t<=5?1e3:t>=6&&t<=10?c+180*t:t>=11&&t<=15?c+160*t:t>=16&&t<=20?c+140*t:t>=21&&t<=25?c+120*t:c+100*t).toString())}(l),function(e){var t=Number(e);f((0===t||t>=1&&t<=5?0:10*(t-5)).toString())}(A)}));return Object(j.jsxs)("div",{className:"calculatorComponentContainer",children:[Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"workerContractorContainer",children:[Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("label",{htmlFor:"workers",children:"Number of Workers"}),Object(j.jsx)("input",{name:"workers",id:"workers",value:c,onChange:function(e){i(e.target.value)}})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("label",{htmlFor:"contractors",children:"Number of Sub-contractors"}),Object(j.jsx)("input",{name:"contractors",id:"contractors",value:l,onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("label",{htmlFor:"forms",children:"Number of Forms"}),Object(j.jsx)("input",{name:"forms",id:"forms",value:A,onChange:function(e){m(e.target.value)}})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("label",{htmlFor:"forms",children:"Discount (%)"}),Object(j.jsx)("input",{name:"discount",id:"discount",value:y,onChange:function(e){B(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"buttonContainer",children:[Object(j.jsx)("button",{type:"reset",onClick:function(e){e.preventDefault(),i(""),o(""),m(""),M(""),Y(0),I(0),x(""),f(""),B(""),U(0),H(0)},children:"Reset"}),Object(j.jsx)("button",{type:"submit",onClick:function(e,t,c,n,i,r){return function(e){e.preventDefault(),function(e,t){var c=Number(e)+Number(t);Y(c)}(c,n),function(e,t,c,n){var i,r=Number(n)/100;i=n?Number(e)+Number(t)-(Number(e)+Number(t))*r+Number(c):Number(e)+Number(t)+Number(c),I(i)}(c,n,r,y),function(e,t,c){var n,i=Number(c)/100;n=i?Number(e)+Number(t)-(Number(e)+Number(t))*i:0,U(n)}(c,n,y),function(e,t,c){var n=Number(c)/100,i=(Number(e)+Number(t))*n;H(i)}(c,n,y)}}(0,0,h,v,0,w),children:"Calculate"})]})]}),Object(j.jsxs)("div",{className:"resultContainer",children:[Object(j.jsxs)("p",{className:"outputLine",children:["For ",c," workers & ",l," sub-contractors"]}),Object(j.jsxs)("p",{children:["Salus Pro ARR: $",h]}),Object(j.jsxs)("p",{children:["Subcontractor Portal ARR: $",v]}),Object(j.jsxs)("p",{children:["One Time Fee: $",w]}),Object(j.jsx)("p",{children:y?"Total ARR: ".concat(S):Object(j.jsxs)("b",{children:["Total ARR: $",S]})}),Object(j.jsx)("p",{className:"discountResult",children:y?Object(j.jsxs)("p",{children:[y||"0","% Discount: $",E]}):null}),Object(j.jsx)("p",{children:y?Object(j.jsx)("p",{children:Object(j.jsxs)("b",{children:["Total ARR: $",z]})}):null}),Object(j.jsx)("p",{children:Object(j.jsxs)("b",{children:["First Year Subscription: $",L]})})]})]})},o=function(){return Object(j.jsxs)("div",{className:"homePageContainer",children:[Object(j.jsx)("div",{className:"logoContainer",children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAdCAYAAADvqyMCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDY0OCwgMjAyMS8wMS8xMi0xNTo1MjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjY3MjAwNzc3MzA5MTFFQkFBMjlEMzMzODA0M0U1MTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjY3MjAwNzg3MzA5MTFFQkFBMjlEMzMzODA0M0U1MTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTY5M0NEMjczMDgxMUVCQUEyOUQzMzM4MDQzRTUxNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNjcyMDA3NjczMDkxMUVCQUEyOUQzMzM4MDQzRTUxNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmjM21wAAAxDSURBVHja7FwL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",alt:"logo-salus"})}),Object(j.jsx)("div",{className:"calculatorContainer",children:Object(j.jsx)(l,{})})]})};c(12);var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(o,{})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),u()}],[[13,1,2]]]);
//# sourceMappingURL=main.acdd9e05.chunk.js.map