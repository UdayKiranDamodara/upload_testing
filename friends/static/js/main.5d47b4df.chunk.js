(this.webpackJsonpfriends=this.webpackJsonpfriends||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),o=t.n(i),c=(t(12),t(3)),l=t(4),m=t(6),s=t(5);var u=function(e){var a=e.name,t=e.email,n=e.id;return r.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,t)))};var h=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,t){return r.a.createElement(u,{key:t,id:a[t].id,name:a[t].name,email:a[t].email})})))};var d=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search name",onChange:a}))},g=[{id:1,name:"Uday Kiran",username:"udayuchiha",email:"udaykirandamodara@gmail.com"},{id:2,name:"Girish Chalumuri",username:"Girish",email:"girish123@gmail.com"},{id:3,name:"Hitesh Kumar",username:"Legolas",email:"khshk@gmail.com"},{id:4,name:"Hemanth Bollamreddi",username:"Hemanth",email:"blmhemu@gmail.com"},{id:5,name:"Gautam Yakasiri",username:"Gautam",email:"ygautam@iitk.ac.in"}],b=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:g,searchfield:""},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Friends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(h,{robots:a}))}}]),t}(n.Component);t(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.5d47b4df.chunk.js.map