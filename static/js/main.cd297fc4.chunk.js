(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=(n(11),n(1)),l=n.n(s),i=n(5),u=n(2),h=(n(13),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.robot.name,".png&size=150x150"),alt:"A robot"}),r.a.createElement("h3",null,e.robot.name),r.a.createElement("p",null,e.robot.company.catchPhrase))}),m=(n(14),function(e){return r.a.createElement("div",{className:"card-list"},e.robots.map((function(e){return r.a.createElement(h,{key:e.id,robot:e})})))}),p=function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement(a.Fragment,null,r.a.createElement("input",{type:"search",placeholder:t,onChange:n}))},f=(n(15),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),h=s[0],f=s[1];Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()}));case 2:n=e.sent,a=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())})),o(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}()}),[h]);return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Robo Monsters"),r.a.createElement(p,{placeholder:"search robot",handleChange:function(e){return f(e.target.value)}}),r.a.createElement(m,{robots:n}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.cd297fc4.chunk.js.map