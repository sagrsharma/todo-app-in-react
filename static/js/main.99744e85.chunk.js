(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(2),s=n.n(a),i=n(5),c=n.n(i),r=(n(20),n(13)),d=n(8),u=n(9),o=n(3),l=n(15),h=n(14),j=(n(21),n(22),n(10)),m=n(11),b=n(1);var p=function(t){var e=t.items.map((function(e){return Object(b.jsx)("div",{className:"list",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(b.jsx)("span",{children:Object(b.jsx)(j.a,{className:"faicons",onClick:function(){t.deleteItem(e.key)},icon:"trash"})})]})},e.key)}));return Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{duration:300,easing:"ease-in-out",children:e})})},x=n(4),O=n(12);x.b.add(O.a);var f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},a.addItem=a.addItem.bind(Object(o.a)(a)),a.handleInput=a.handleInput.bind(Object(o.a)(a)),a.deleteItem=a.deleteItem.bind(Object(o.a)(a)),a.setUpdate=a.setUpdate.bind(Object(o.a)(a)),a}return Object(u.a)(n,[{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(""!==e.text){var n=[].concat(Object(r.a)(this.state.items),[e]);localStorage.setItem("addTodo",JSON.stringify(n)),this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){n.key===e&&(n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{children:[Object(b.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(b.jsx)("input",{type:"text",placeholder:"Enter task",value:this.state.currentItem.text,onChange:this.handleInput}),Object(b.jsx)("button",{type:"submit",children:"Add"})]}),Object(b.jsx)("p",{children:this.state.items.text}),Object(b.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})})}}]),n}(s.a.Component);c.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.99744e85.chunk.js.map