import{u as d,a as m,b as p,r as x,S as h,j as s,R as u,C as j,B as t}from"./index-DaXVb0xI.js";import{F as r,I as g}from"./api-naasp-CrZ9yRmT.js";import{a as F,C as f,r as y}from"./style-DcPKsJEj.js";import"./Dropdown-Ciyb9Mo4.js";function E(){const[e]=r.useForm(),n=d(),i=m(),a=p(F),l=()=>{const c={email:e.getFieldValue("email")};n(y(c))},o=()=>{e.resetFields()};return x.useEffect(()=>{a==h.FULFILLED&&i("/")},[a]),s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"naasp-logo",children:s.jsx("img",{src:"src/assets/naasp.png",alt:"naasp-logo",style:{width:"300px",height:"150px"}})}),s.jsx(u,{align:"middle",children:s.jsx(j,{children:s.jsxs(f,{className:"card",children:[s.jsx("p",{style:{fontSize:"20px"},className:"title",children:"Preencha seu e-mail para resetar a senha"}),s.jsxs(r,{form:e,onFinish:l,children:[s.jsx(g,{placeholder:"E-mail",name:"email",type:"email",required:!0}),s.jsxs("div",{className:"action-buttons",style:{marginLeft:"40px"},children:[s.jsx(t,{type:"primary",htmlType:"submit",children:s.jsx("span",{className:"action-buttons-text",children:" Resetar Senha"})}),s.jsx("br",{}),s.jsx(t,{htmlType:"button",onClick:o,children:s.jsx("span",{className:"action-buttons-text",children:"Limpar"})})]})]})]})})})]})}export{E as default};
