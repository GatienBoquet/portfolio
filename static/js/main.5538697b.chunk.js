(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){e.exports=a.p+"static/media/logo.a671f156.png"},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),o=a.n(r),c=(a(19),a(7)),u=a(8),i=a(10),s=a(9),m=(a(28),a(29),a(13)),h=a(1),v=a(12),p=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={taxin:1,taxout:1,tps:.05,tvq:.09975},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.taxoutChange=n.taxoutChange.bind(Object(v.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value*this.state.tps,a=e.target.value*this.state.tvq,n=parseFloat(e.target.value)+t+a;n=n||0,this.setState({taxin:+n.toPrecision(5),taxout:e.target.value})}},{key:"taxoutChange",value:function(e){e.target.value,this.state.tps,e.target.value,this.state.tvq;var t=parseFloat(e.target.value)/1.14975;t=t||0,this.setState({taxin:e.target.value,taxout:+t.toPrecision(5)})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"App-header"},l.a.createElement("label",{htmlFor:"taxout"},"Sans taxes :"),l.a.createElement("input",{type:"number",id:"taxout",name:"taxout",value:this.state.taxout,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"taxin"},"Tax In (TPS et TVQ):"),l.a.createElement("input",{type:"number",id:"taxin",name:"taxin",value:this.state.taxin,onChange:this.taxoutChange})))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h2",null,"Bienvenue sur mon portfolio.")))}}]),a}(n.Component),E=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Portfolio"},l.a.createElement(m.a,null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{to:"/"},"Accueil")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/tax"},"Calcul Tax")))),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/tax"},l.a.createElement(p,null)),l.a.createElement(h.a,{path:"/"},l.a.createElement(g,null))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.5538697b.chunk.js.map