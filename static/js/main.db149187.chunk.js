(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(3),i=n.n(a),c=n(7),s=n(1),l=n(16),u=n(17),h=(n(28),n(4)),d=n(5),b=n(8),f=n(6),p=n(9),g=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200*200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},E=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(g,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},m=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},O=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops. This is not good!"):this.props.children}}]),t}(o.Component),w=(n(29),function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isLoading,i=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robo Friends"),r.a.createElement(m,{searchChange:n}),r.a.createElement(v,null,a?r.a.createElement("h1",null,"Loading..."):r.a.createElement(O,null,r.a.createElement(E,{robots:i}))))}}]),t}(o.Component)),R=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isLoading:e.requestRobots.isLoading,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_LOADING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(w),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=n(2),C={searchField:""},L={isLoading:!1,robots:[],error:""},k=(n(30),Object(l.createLogger)()),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(j.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(t.type){case"REQUEST_ROBOTS_LOADING":return Object(j.a)({},e,{isLoading:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(j.a)({},e,{robots:t.payload,isLoading:!1});case"REQUEST_ROBOTS_FAILED":return Object(j.a)({},e,{error:t.payload,isLoading:!1});default:return e}}}),T=Object(s.d)(_,Object(s.a)(u.a,k));i.a.render(r.a.createElement(c.a,{store:T},r.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");y?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.db149187.chunk.js.map