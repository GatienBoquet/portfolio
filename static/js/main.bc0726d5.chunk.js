(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,a){},22:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAArCAYAAAA65tviAAACJUlEQVRoQ+2aP2gUQRTGv7dbJJ21wkGq3ARSiggWKUKqkL3eRhG8WQ7rFBa2Yi1JblAh2NipO5pCBbGQEEhlITdWNoqFlTaJktyES7hkOXdvd8e7ndswVy3czsz3e3/mvdldAgDWjB6C6E7vehJ/SgSUpYvq4etbpLtPsm60/X8WDDEutW2RedZ3IHmsVOY9ziMn1vavK7H8rG951pTfQbhUpif6axl7xO/iyudHwe6gaMZf7QF6umwYY5BhA23sdA7k3HtkjsuWBtYqkyM9oYNeYbe3ZuEdfikbIknLoAbXopTtFeNdazxC6ZuG/gBggYBakTWMQdIGsvDFDLT/9UyEvqtE4/4/hTOMNqHpRp74zlOXLIN4i0qs5LJ8FoxVENVu3CwSPsNgrIEUAThtSocc8qoF0pRNEESSEayD1MNolTQ9yNuOp4WXVRAWyrfQWBq0sEkfZxckLeZJb6t241pSCE2mRwyS14EUtUDeyt4LG5O6UFRPPzxTu9//bVEcSEpeTeaulXBoy6ruDsTlSKzKuV0roeS7HDk3OWJyMBrnGOPQGqcok7njIPOtl7WDQ28dwE/ysN3ZCB5X9gEd49F7Iu9jp71yrx7Kp5UDYVz+UiK4EPdqnUeXqwiyo0Rwtd+U9kJuvvWmdvwiPuuZkklMj3RM7EQ5x7eWOmL5XXx+xuWP0y8KGJf7AKZGKmAEkyXtViyMnvseVv3u9O+/+s8nJYKLR/0rLjRx85ZOAAAAAElFTkSuQmCC"},23:function(e,t,a){e.exports=a.p+"static/media/DM-Logo-sm.4f9d12fe.png"},24:function(e,t,a){e.exports=a.p+"static/media/crm.8930079f.png"},26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){e.exports=a.p+"static/media/logo.a671f156.png"},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),i=a.n(r),c=(a(15),a(5)),o=a(6),u=a(8),s=a(7),m=(a(31),a(32),a(12)),h=a(1),p=a(3),d=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={taxin:1,taxout:1,tps:.05,tvq:.09975},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.taxoutChange=n.taxoutChange.bind(Object(p.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value*this.state.tps,a=e.target.value*this.state.tvq,n=parseFloat(e.target.value)+t+a;n=n||0,this.setState({taxin:+n.toPrecision(5),taxout:e.target.value})}},{key:"taxoutChange",value:function(e){e.target.value,this.state.tps,e.target.value,this.state.tvq;var t=parseFloat(e.target.value)/1.14975;t=t+.01||0,this.setState({taxin:e.target.value,taxout:+t.toPrecision(5)})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"App-header"},l.a.createElement("label",{htmlFor:"taxout"},"Sans taxes :"),l.a.createElement("input",{type:"number",id:"taxout",name:"taxout",value:this.state.taxout,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"taxin"},"Tax In (TPS et TVQ):"),l.a.createElement("input",{type:"number",id:"taxin",name:"taxin",value:this.state.taxin,onChange:this.taxoutChange})))}}]),a}(n.Component),E=a(22),v=a.n(E),b=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(){window.open("https://www.linkedin.com/in/gatienboquet/","_blank")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"intro"},l.a.createElement("h1",null,"Gatien Boquet"),l.a.createElement("h1",null,"Bienvenue sur mon portfolio."),l.a.createElement("h2",null,"\ud83d\udcbbD\xe9veloppeur Frontend React.JS \u269b"),l.a.createElement("h3",null,"\ud83d\udccd Montr\xe9al, Qu\xe9bec"),l.a.createElement("img",{className:"logo-LI",src:v.a,onClick:this.handleClick})))}}]),a}(n.Component),f=a(23),g=a.n(f),x=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(){window.open("https://www.linkedin.com/in/gatienboquet/","_blank")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"intro"},l.a.createElement("img",{className:"center",height:250,width:350,src:g.a}),l.a.createElement("h1",null,"Dubstep Mag - Le m\xe9dia 100% dubstep"),l.a.createElement("h2",null,"Version actuel : Wordpress"),l.a.createElement("h2",null,"Stack frontend : "),l.a.createElement("h2",null,"React, TypeScript, GraphQL, LESS, WebPack "),l.a.createElement("h2",null,"Stack Backend :"),l.a.createElement("h2",null,"Node.js"),l.a.createElement("h3",null,"Lien : Publication en cours")))}}]),a}(n.Component),k=a(24),O=a.n(k),y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(){window.open("https://github.com/GatienBoquet/crm-react-firebase","_blank")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"intro"},l.a.createElement("img",{className:"center",height:250,width:350,src:O.a}),l.a.createElement("h1",null,"Un simple CRM avec React.JS / Materialize et FireBase comme backend"),l.a.createElement("h2",null,"Liste de fonctionnalit\xe9s"),l.a.createElement("h2",null," Affichage des items"),l.a.createElement("h2",null," Ajout d'items"),l.a.createElement("h2",null," Suppression d'items"),l.a.createElement("h3",null," Modifcation d'items"),l.a.createElement("a",{href:"https://github.com/GatienBoquet/crm-react-firebase"},"GitHub crm-react-firebase")))}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={taxin:1,taxout:1,tps:.05,tvq:.09975,prix_achat:0,prix_vente:0,profit:0},n.toTaxIn=n.toTaxIn.bind(Object(p.a)(n)),n.taxoutChange=n.taxoutChange.bind(Object(p.a)(n)),n.setPrixAchat=n.setPrixAchat.bind(Object(p.a)(n)),n.setPrixVente=n.setPrixVente.bind(Object(p.a)(n)),n.calcul_profit=n.calcul_profit.bind(Object(p.a)(n)),n}return Object(o.a)(a,[{key:"toTaxIn",value:function(e){var t=e.target.value*this.state.tps,a=e.target.value*this.state.tvq,n=parseFloat(e.target.value)+t+a;n=n||0,this.setState({taxin:+n.toPrecision(5),taxout:e.target.value})}},{key:"taxoutChange",value:function(e){e.target.value,this.state.tps,e.target.value,this.state.tvq;var t=parseFloat(e.target.value)/1.14975;t=t+.01||0,this.setState({taxin:e.target.value,taxout:+t.toPrecision(5)})}},{key:"setPrixAchat",value:function(e){this.setState({prix_achat:e.target.value})}},{key:"setPrixVente",value:function(e){this.setState({prix_vente:e.target.value})}},{key:"calcul_profit",value:function(){var e=this.state.prix_achat||0,t=(this.state.prix_vente||0)-e;this.setState({profit:t})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"App-header"},l.a.createElement("label",{htmlFor:"taxout"},"Prix d'achat :"),l.a.createElement("input",{type:"number",id:"taxout",name:"taxout",value:this.state.prix_achat,onChange:this.setPrixAchat}),l.a.createElement("label",{htmlFor:"taxin"},"Prix vente TAX IN"),l.a.createElement("input",{type:"number",id:"taxin",name:"taxin",value:this.state.prix_vente,onChange:this.setPrixVente,onKeyUp:this.calcul_profit}),l.a.createElement("label",{htmlFor:"prixfinal"},"Profit :"),l.a.createElement("a",{style:{backgroundColor:"blue"},id:"prixfinal"},this.state.profit)))}}]),a}(n.Component);console.log("%c Build by Gatien Boquet","font-family: Arial; font-size: 12px; padding: 10px; color: #fff;");var A=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Portfolio"},l.a.createElement(m.a,null,l.a.createElement("nav",{className:"grid"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{to:""},"Accueil")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/tax"},"Calcul Tax")),l.a.createElement("li",{className:""},l.a.createElement(m.b,{to:"/dm"},"Dubstep Mag")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/crm"}," crm-react-firebase")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/profit"}," Calcul Profit")))),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/tax"},l.a.createElement(d,null)),l.a.createElement(h.a,{path:"/dm"},l.a.createElement(x,null)),l.a.createElement(h.a,{path:"/crm"},l.a.createElement(y,null)),l.a.createElement(h.a,{path:"/profit"},l.a.createElement(C,null)),l.a.createElement(h.a,{path:""},l.a.createElement(b,null))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.bc0726d5.chunk.js.map