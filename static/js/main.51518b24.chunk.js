(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,t,n){e.exports=n(391)},199:function(e,t,n){},216:function(e,t,n){},391:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(190),c=n.n(l),i=(n(199),n(113)),o=n(114),s=n(116),m=n(115),u=n(117),h=n(191),E=n.n(h),d=n(393),f=n(396),p=n(394),v=n(395),b=(n(216),E()("2MFEVOS5ZR","d47a9bf01a0fbedd42ce794d5c924c72")),g=function(e){var t=e.hit;return r.a.createElement("div",{className:"tags"},r.a.createElement("strong",null,"Tags:"),t.tags.map(function(e){return r.a.createElement("p",{className:"tag",key:t.objectID+t.tags.indexOf(e)},e)}))},w=function(e){var t=e.hit;return r.a.createElement("div",{className:"links"},r.a.createElement("strong",null,"Relevant Links:"),t.relevantLinks.map(function(e){return r.a.createElement("a",{target:"_blank",href:e,className:"tag",key:t.objectID+t.relevantLinks.indexOf(e)},e.slice(0,30))}))},k=function(e){var t=e.hit;return r.a.createElement("div",{className:"definitions"},r.a.createElement("p",null,r.a.createElement("strong",null,"Formal:")," ",t.formalDefinition),r.a.createElement("p",null,r.a.createElement("strong",null,"Simple:")," ",t.simpleDefinition))},N=function(e){var t=e.hit;return r.a.createElement("p",null,r.a.createElement("strong",null,"Current Version:")," v",t.currentVersion)},O=function(e){var t=e.hit;return r.a.createElement("p",null,r.a.createElement("strong",null,"Managed By:")," ",t.managedBy)},j=function(e){return r.a.createElement("div",{className:e.open},r.a.createElement("div",{className:"contentHeader"},r.a.createElement("h1",{className:"modalTerm",onClick:e.onClick},e.hit.term),r.a.createElement("div",null,r.a.createElement(g,{hit:e.hit})),r.a.createElement("p",null,r.a.createElement("strong",null,"Created:")," ",e.hit.created),r.a.createElement(N,{hit:e.hit}),r.a.createElement(O,{hit:e.hit}),r.a.createElement(w,{hit:e.hit})),r.a.createElement(k,{hit:e.hit}))},C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).showModal=function(){n.setState({show:!0})},n.hideModal=function(){n.setState({show:!1})},n.state={show:!1},n.props={hit:e.hit},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,{show:this.state.show,handleClose:this.hideModal},r.a.createElement(j,{hit:this.props.hit})),r.a.createElement("button",{className:"openbutton",type:"button",onClick:this.showModal},"Show More"))}}]),t}(a.Component),y=function(e){var t=e.handleClose,n=e.show,a=e.children;return r.a.createElement("div",{className:n?"open":"closed"},r.a.createElement("section",{className:"modal-main"},a,r.a.createElement("button",{className:"closebutton",onClick:t},"Show Less")))},M=function(e){var t=e.hit;return r.a.createElement("div",{className:"hitItem"},r.a.createElement("h1",{className:"term"},t.term),r.a.createElement(C,{hit:t}))},S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{indexName:"terms",searchClient:b},r.a.createElement(f.a,null,r.a.createElement(p.a,{autoFocus:!0,searchAsYouType:!0,showLoadingIndicator:!0})),r.a.createElement(f.a,null,r.a.createElement(v.a,{hitComponent:M})))}}]),t}(a.Component);c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[194,2,1]]]);
//# sourceMappingURL=main.51518b24.chunk.js.map