(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(16),t(1)),i=t(2),s=t(4),m=t(3),u=t(5),p=t(7),d=t(10),h=t.n(d),E=(t(19),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.occupation,this.props.data.description,"images/"+this.props.data.image),t=(this.props.data.address.city,this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:e.className})))})));return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"experience")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"portfolio")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("img",{className:"profile-pic",style:{width:200,marginBottom:50},src:a,alt:"Juan Nathaniel Profile Pic"}),r.a.createElement("h1",{className:"responsive-headline"},e),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},t))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#resume"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",{style:{color:"white"}},"\xa9 Copyright ",(new Date).getFullYear()," Juan Nathaniel"))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v=(n.Component,function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage;var e=this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)),r.a.createElement("p",null,e.description))})),a=this.props.data.work.map((function(e){return r.a.createElement("div",{key:e.company},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"info"},e.title,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),e.description.map((function(e,a){return r.a.createElement("p",{style:{"line-height":20}},e.desc)})),e.links.map((function(e,a){return r.a.createElement("a",{href:e.link,style:{marginRight:20},rel:"noopener noreferrer",target:"_blank"},e.desc)})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))})),t=this.props.data.pubs.map((function(e){return r.a.createElement("div",{key:e.title},r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:"info"},e.publication),r.a.createElement("p",null,e.description),e.links.map((function(e,a){return r.a.createElement("a",{href:e.link,style:{marginRight:20},rel:"noopener noreferrer",target:"_blank"},e.desc)})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}))}return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},e)))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Experiences"))),r.a.createElement("div",{className:"nine columns main-col"},a)),r.a.createElement("div",{className:"row pubs"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Publications"))),r.a.createElement("div",{className:"nine columns main-col"},t)))}}]),a}(n.Component)),N=(n.Component,n.Component,function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return r.a.createElement("div",{key:e.title,className:"columns portfolio-item"},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.desc),r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:e.url,title:e.title,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{alt:e.title,src:a}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.title),r.a.createElement("p",null,e.desc))),r.a.createElement("div",{className:"link-icon"},r.a.createElement("i",{className:"fa fa-link"})))))}));return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Check out some of my side stuff!"),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-thirds s-bgrid-thirds cf"},e))))}}]),a}(n.Component)),b=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},p.a.initialize("UA-110570651-1"),p.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{data:this.state.resumeData.main}),r.a.createElement(v,{data:this.state.resumeData.resume}),r.a.createElement(N,{data:this.state.resumeData.portfolio}),r.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");g?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):w(e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.fd2a3178.chunk.js.map