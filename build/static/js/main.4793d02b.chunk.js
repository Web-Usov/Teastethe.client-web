(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(82)},73:function(e,t){},76:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"LOGIN",function(){return T}),n.d(a,"SET_SOCKET",function(){return S});var r={};n.r(r),n.d(r,"SET_LIST",function(){return j}),n.d(r,"ADD_ITEM",function(){return g});var i={};n.r(i),n.d(i,"setSocket",function(){return k}),n.d(i,"login",function(){return _});var u={};n.r(u),n.d(u,"setList",function(){return I}),n.d(u,"addTea",function(){return N});var o=n(0),s=n.n(o),l=n(35),c=n.n(l),d=n(4),p=n(5),m=n(7),f=n(6),h=n(8),b=n(36),v=n.n(b)()("http://104.211.35.221:3100"),E=(n(76),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={loading:!1},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props,n=t.user,a=t.login;n.socket.on("login",function(t){if(e.setState({loading:!1}),t.error)return alert(t.error);a({name:t.name})})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({loading:!0});var t=this.props.user,n=this.refs.inputName.value;t.socket.emit("login",n)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("form",{action:"",onSubmit:function(t){return e.handleSubmit(t)}},s.a.createElement("label",{htmlFor:"inputName"},"Name:"),s.a.createElement("input",{type:"text",name:"",id:"inputName",ref:"inputName",disabled:this.state.loading}),s.a.createElement("button",{type:"submit",disabled:this.state.loading},"Send")))}}]),t}(o.Component)),O=n(11),y=n(3),T="login",S="set_socket",j="set_list",g="add_item",k=function(e){return{type:a.SET_SOCKET,payload:{socket:e}}},_=function(e){return{type:a.LOGIN,payload:e}},I=function(e){return{type:r.SET_LIST,payload:e}},N=function(e){return{type:r.ADD_ITEM,payload:e}},w=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.user,n=e.setList,a=e.addTea;t.socket.on("resAllTeas",function(e){n({teas:e.teas,teasId:e.teasId})}),t.socket.on("addTea",function(e){var t=e.error,n=e.tea;if(!e.isYourTea){if(t)return alert(t);a(n)}}),t.socket.emit("reqAllTeas")}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.teas,a=e.addTea;return s.a.createElement("div",null,s.a.createElement("ul",null,n.listId.map(function(e,t){return s.a.createElement("li",{key:t},JSON.stringify(n.list[e]))})),s.a.createElement(L,{addTea:a,user:t}))}}]),t}(o.Component),D=Object(O.b)(function(e){return{teas:e.teas}},function(e){return Object(y.a)(u,e)})(w),L=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={loading:!1},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props,n=t.user,a=t.addTea;n.socket.on("addTea",function(t){var n=t.error,r=t.tea,i=t.isYourTea;if(e.setState({loading:!1}),i){if(e.setState({loading:!1}),n)return alert(n);alert("Tea successfully added"),a(r)}})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({loading:!0});var t=this.props.user,n=this.refs.inputNameTea.value,a=this.refs.inputTypeTea.value;t.socket.emit("addTea",{name:n,type:a})}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},s.a.createElement("label",{htmlFor:""},"Name:",s.a.createElement("input",{type:"text",disabled:this.state.loading,ref:"inputNameTea"})),s.a.createElement("label",{htmlFor:""},"Type:",s.a.createElement("input",{type:"text",disabled:this.state.loading,ref:"inputTypeTea"})),s.a.createElement("button",{type:"submit",disabled:this.state.loading},"Add"))}}]),t}(o.Component),A=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={},e.setSocket(v),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.login,n=e.user;return n.auth?s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement("h1",null,"Welcome, ",n.name,"!")),s.a.createElement(D,{user:n})):s.a.createElement("div",{className:"App"},s.a.createElement(E,{login:t,user:n}))}}]),t}(o.Component),C=Object(O.b)(function(e){return{user:e.user}},function(e){return Object(y.a)(i,e)})(A),M={id:Math.random(),name:"",auth:!1,socket:null},x=n(40),W={list:{},listId:[]},X=Object(y.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case a.LOGIN:return Object.assign({},e,{name:t.payload.name,auth:!0});case a.SET_SOCKET:return Object.assign(e,{socket:t.payload.socket});default:return e}},teas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case r.SET_LIST:return{list:t.payload.teas,listId:t.payload.teasId};case r.ADD_ITEM:var n={list:Object.assign({},e.list),listId:Object(x.a)(e.listId).concat([t.payload.id])};return n.list[t.payload.id]=t.payload,n;default:return e}}}),F=Object(y.c)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(s.a.createElement(O.a,{store:F},s.a.createElement(C,null)),document.getElementById("root"))}},[[41,2,1]]]);
//# sourceMappingURL=main.4793d02b.chunk.js.map