"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[898],{6898:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(2791),a=n(9434),s=n(4270),o=n(3433),c=n(9439),i={form:"ContactForm_form__dhl+T",formName:"ContactForm_formName__9bHzl",formNumber:"ContactForm_formNumber__UMrmC",formBtn:"ContactForm_formBtn__qZGY3"},u=n(3634),m=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},d=function(e){return e.filter.filter},f=n(184),h=function(){var e=(0,r.useState)(""),t=(0,c.Z)(e,2),n=t[0],s=t[1],l=(0,r.useState)(""),d=(0,c.Z)(l,2),h=d[0],p=d[1],b=(0,a.I0)(),_=(0,a.v9)(m);return(0,f.jsxs)("form",{className:i.form,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;-1!==(0,o.Z)(_).findIndex((function(e){return n===e.name}))?alert("".concat(n," is already in contacts.")):b((0,u.uK)({name:n,number:h})),t.reset()},children:[(0,f.jsx)("label",{className:i.formLabel,children:"Name "}),(0,f.jsx)("input",{className:i.formName,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:n,onChange:function(e){var t=e.target.value;s(t)}}),(0,f.jsx)("label",{className:i.formLabel,children:"Number "}),(0,f.jsx)("input",{className:i.formNumber,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number",value:h,onChange:function(e){var t=e.target.value;p(t)}}),(0,f.jsx)("button",{className:i.formBtn,type:"submit",children:"Add contact"})]})},p={contactListItemBtn:"ContactList_contactListItemBtn__TXYnT"},b=function(){var e=function(e,t){return t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e}((0,a.v9)(m),(0,a.v9)(d)),t=(0,a.I0)();return(0,f.jsx)("div",{className:p.wraperContactList,children:(0,f.jsx)("ul",{className:p.contactList,children:e.map((function(e,n){return(0,f.jsxs)("li",{className:p.contactListItem,children:[e.name,": ",e.number,(0,f.jsx)("button",{type:"button",className:p.contactListItemBtn,onClick:function(){return function(e){return t((0,u.nE)(e))}(e.id)},children:"Delete"})]},n)}))})})};function _(){var e=(0,a.I0)(),t=(0,a.v9)(l);return(0,r.useEffect)((function(){e((0,u.yF)())}),[e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.q,{children:(0,f.jsx)("title",{children:"Your contacts"})}),(0,f.jsx)(h,{}),(0,f.jsx)("div",{children:t&&"Request in progress..."}),(0,f.jsx)(b,{})]})}}}]);
//# sourceMappingURL=898.9c5660e4.chunk.js.map