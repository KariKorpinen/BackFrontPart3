(this.webpackJsonppuhelinluetteloFrontPart2=this.webpackJsonppuhelinluetteloFrontPart2||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),l=(t(20),t(14)),c=t(2),i=function(e){return r.a.createElement("li",{className:"persons"},e.person.name,"  ",e.person.number,r.a.createElement("button",{onClick:function(){e.deletePhone(e.person.id)}},"Delete "))},s=function(e){return console.log("Phone 1 ",e),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.addPhone},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},m=function(e){return r.a.createElement("div",null,"filter shown with:",r.a.createElement("input",{value:e.searchItem,onChange:e.handleFilterChange}))},d=t(3),f=t.n(d),h="/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},p=function(e){return f.a.post(h,e).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),d=Object(c.a)(o,2),f=d[0],h=d[1],g=Object(a.useState)(""),w=Object(c.a)(g,2),j=w[0],O=w[1],N=Object(a.useState)(""),C=Object(c.a)(N,2),P=C[0],S=C[1],y=Object(a.useState)(""),k=Object(c.a)(y,2),T=k[0],A=k[1],F=Object(a.useState)([]),M=Object(c.a)(F,2),I=(M[0],M[1]),D=Object(a.useState)(null),J=Object(c.a)(D,2),L=J[0],x=J[1],B=Object(a.useState)(null),q=Object(c.a)(B,2),z=q[0],G=q[1];Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[]);var H=function(e){window.confirm("Are you sure you wish to delete this item?")&&E(e).then((function(n){u(t.filter((function(n){return n.id!==e}))),G("Number deleted"),setTimeout((function(){G(null)}),5e3)})).catch((function(n){x("Person '".concat(f,"' and number was already removed from server")),setTimeout((function(){x(null)}),5e3),u(t.filter((function(n){return n.id!==e})))}))},K=P?t:t.filter((function(e){return e.name.toLowerCase().includes(T)}));Object(a.useEffect)((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(T)}));I(e)}),[T]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement((function(e){var n=e.normalMessage;return null===n?null:r.a.createElement("div",{className:"normal"},n)}),{normalMessage:z}),r.a.createElement((function(e){var n=e.errorMessage;return null===n?null:r.a.createElement("div",{className:"error"},n)}),{errorMessage:L}),r.a.createElement(m,{searchItem:T,handleFilterChange:function(e){console.log(e.target.value),A(e.target.value)},setShowAll:S,showAll:P}),r.a.createElement("h3",null,"Add a new "),r.a.createElement(s,{addPhone:function(e){e.preventDefault();var n=t.find((function(e){return e.name===f}));(console.log("persons 2 ",n),n)?window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))&&(console.log("update"),v(n.id,Object(l.a)({},n,{number:j})).then((function(e){u(t.map((function(t){return t.id!==n.id?t:e}))),G("Number updated"),setTimeout((function(){G(null)}),5e3)})).catch((function(e){x("Person '".concat(f,"' was already removed from server")),setTimeout((function(){x(null)}),5e3),u(t.filter((function(e){return e.id!==n.id})))})),console.log("update2 ",t),h(""),O("")):p({name:f,number:j}).then((function(e){u(t.concat(e)),G("Person '".concat(f,"' added")),setTimeout((function(){G(null)}),5e3)})).catch((function(e){x("Error happen, person '".concat(f,"' not added")),setTimeout((function(){x(null)}),5e3)}));h(""),O(""),A("")},newName:f,handleNameChange:function(e){console.log(e.target.value),h(e.target.value)},newNumber:j,handleNumberChange:function(e){console.log(e.target.value),O(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement("ul",null,K.map((function(e,n){return r.a.createElement(i,{key:n,person:e,deletePhone:H})}))),"...")};o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6f1db3b7.chunk.js.map