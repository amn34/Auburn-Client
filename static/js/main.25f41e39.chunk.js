(this["webpackJsonpauburn-client"]=this["webpackJsonpauburn-client"]||[]).push([[0],{33:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(11),r=n.n(s),i=(n(33),n(8)),l=n(17),o=n.n(l),j=n(19),b=n(44),u=n(45),d=n(22),h=n(47),O=n(26),x=n(2);function p(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1];function r(e){return l.apply(this,arguments)}function l(){return(l=Object(j.a)(o.a.mark((function t(n){var c,a,s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.split(", "),"https://fabled-decker-310400.wl.r.appspot.com/",a=c.length>1?"".concat(c[1],"/").concat(c[0]):"".concat(c[0]),console.log(a),t.next=6,fetch("https://fabled-decker-310400.wl.r.appspot.com/"+a).catch((function(){console.log("One of the locations seems to be invalid")}));case 6:return s=t.sent,t.next=9,s.json();case 9:return r=t.sent,e.updateStats(r),console.log(r),t.abrupt("return",r);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(x.jsxs)(b.a,{expand:"lg",children:[Object(x.jsx)(b.a.Brand,{children:"Healthy State"}),Object(x.jsx)(O.a,{}),Object(x.jsxs)(u.a,{onSubmit:function(e){r(a),e.preventDefault()},inline:!0,style:m,children:[Object(x.jsx)(d.a,{onSubmit:function(){return r(a)},onChange:function(e){return s(e.target.value)},id:"location",type:"text",placeholder:"Enter a city, state",className:"mr-sm-2"}),Object(x.jsx)(h.a,{onClick:function(){return r(a)},variant:"outline-success",children:"Search"})]})]})}var m={padding:"0 10px"},f=n(46),v=function(e){var t=e.stat;return Object(x.jsxs)(f.a,{border:"secondary",children:[Object(x.jsx)(f.a.Header,{children:t.text}),Object(x.jsx)(f.a.Body,{children:Object(x.jsx)(f.a.Text,{children:t.number})})]})},g=n(23),y=n(24),S=n(28),w=n(25),N=(n(39),function(e){Object(S.a)(n,e);var t=Object(w.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.readings&&e.readings.length&&e.readings.map((function(t,n){return Object(x.jsx)("div",{className:"bar",style:{backgroundColor:t.color,width:100/e.readings.length+"%",border:this.props.vulnLevel===n?"4px solid":null}},n)}),this),n=e.readings&&e.readings.length&&e.readings.map((function(e,t){return Object(x.jsxs)("div",{className:"legend",style:{padding:"0 20px"},children:[Object(x.jsx)("span",{className:"dot",style:{color:e.color},children:"\u25cf"}),Object(x.jsx)("span",{className:"label",children:e.name})]},t)}),this);return Object(x.jsxs)("div",{className:"multicolor-bar",children:[Object(x.jsx)("div",{className:"bars",children:""===t?"":t}),Object(x.jsx)("div",{className:"legends",children:""===n?"":n})]})}}]),n}(a.a.Component)),k=function(e){return Object(x.jsxs)("header",{style:{"margin-top":"50px"},children:[Object(x.jsx)("h1",{children:e.title}),Object(x.jsx)(N,{readings:[{name:"Low",color:"#38ba6e"},{name:"Medium",color:"#ebe22f"},{name:"High",color:"#eba32f"},{name:"Very high",color:"#c91212"},{name:"Severe",color:"#820a0a"}],vulnLevel:e.vulnLevel}),Object(x.jsx)("small",{children:"COVID Risk Level"})]})},C=function(){return Object(x.jsxs)("div",{className:"mt-5",children:[Object(x.jsx)("h5",{children:"Get vaccinated today!"}),Object(x.jsx)(h.a,{children:Object(x.jsx)("a",{href:"https://vaccinefinder.org/search",target:"_blank",rel:"noreferrer",style:{color:"white"},children:"VaccineFinder"})})]})},L=n(43);var F=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),r=Object(i.a)(s,2),l=r[0],o=r[1],j=Object(c.useState)(0),b=Object(i.a)(j,2),u=b[0],d=b[1],h=Object(c.useState)(0),O=Object(i.a)(h,2),m=O[0],f=O[1],g=Object(c.useState)(0),y=Object(i.a)(g,2),S=y[0],w=y[1],N=Object(c.useState)(0),F=Object(i.a)(N,2),D=F[0],T=F[1],V=Object(c.useState)(0),A=Object(i.a)(V,2),B=A[0],I=A[1],E=Object(c.useState)(0),H=Object(i.a)(E,2),M=H[0],P=H[1],J=Object(c.useState)(0),G=Object(i.a)(J,2),R=G[0],_=G[1],q=Object(c.useState)("Auburn, Alabama"),z=Object(i.a)(q,2),K=z[0],Q=z[1];function U(e){a(e["new-cases"]),o(e["tot-cases"]),d(e["new-deaths"]),f(e["tot-deaths"]),w(e["infection-rate"]),T(100*e["positive-test-rate"]),I(e["vaccines-administered"]||"N/A"),P(e["vaccines-completed"]),_(Math.min(4,e["vulnerability-level"])),Q(e.location)}return Object(c.useEffect)((function(){fetch("https://fabled-decker-310400.wl.r.appspot.com/al/auburn").then((function(e){e.json().then((function(e){console.log(e),U(e)}))})).catch((function(e){console.log(e.message)}))}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(p,{updateStats:U}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(k,{title:K,vulnLevel:R}),Object(x.jsxs)(L.a,{className:"mt-5",children:[Object(x.jsx)(v,{stat:{text:"Daily new cases",number:n+" per 100k",range:[[0,1],[1,10],[10,25],[25,45],[45,1e5]]}}),Object(x.jsx)(v,{stat:{text:"Total cases",number:l}}),Object(x.jsx)(v,{stat:{text:"Daily new deaths",number:u}}),Object(x.jsx)(v,{stat:{text:"Total deaths",number:m}})]}),Object(x.jsxs)(L.a,{className:"mt-4",children:[Object(x.jsx)(v,{stat:{text:"Infection rate",number:S.toFixed(1)}}),Object(x.jsx)(v,{stat:{text:"Positive test rate",number:D.toFixed(1)+"%"}}),Object(x.jsx)(v,{stat:{text:"Vaccines administered",number:B}}),Object(x.jsx)(v,{stat:{text:"Vaccines completed",number:M}})]}),Object(x.jsx)(C,{})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(40);r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),D()}},[[41,1,2]]]);
//# sourceMappingURL=main.25f41e39.chunk.js.map