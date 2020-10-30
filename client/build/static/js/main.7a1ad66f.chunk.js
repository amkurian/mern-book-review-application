(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),l=a.n(o),c=a(10),s=a(11),i=a(13),m=a(12),u=a(15),h=a(17),p=a(67),E=a(69),b=a(8),d=a.n(b),k=a(68),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){d.a.get("/api/books").then((function(e){n.setState({books:e.data.books})})).catch((function(e){return console.error(e)}))},n.delete=function(e){d.a.delete("/api/books/".concat(e)).then((function(e){console.log(e),n.componentDidMount()})).catch((function(e){return console.error(e)}))},n.state={books:[]},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:"mt-3"},r.a.createElement("thead",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"ISBN")),r.a.createElement("tbody",null,this.state.books.map((function(t){return r.a.createElement("tr",{key:t._id,className:"book"},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.author),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.isbn),r.a.createElement("td",null,r.a.createElement(E.a,{outline:!0,color:"secondary",className:"m-1"},r.a.createElement(u.b,{to:"/books/".concat(t._id)},"Review")),r.a.createElement(E.a,{outline:!0,color:"secondary",className:"m-1"},r.a.createElement(u.b,{to:"/books/".concat(t._id,"/edit")},"Update")),r.a.createElement(E.a,{outline:!0,color:"secondary",className:"m-1"},r.a.createElement(u.b,{onClick:e.delete.bind(e,t._id)},"Delete"))))}))))))}}]),a}(n.Component),f=a(18),g=a(70),w=a(71),y=a(72),N=a(73),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).change=function(e,t){var a=Object(f.a)({},n.state.newBook);a[e]=t.target.value,n.setState({newBook:a})},n.newBook=function(e){e.preventDefault(),d.a.post("/api/books",n.state.newBook).then((function(e){e.data.errors?n.setState({errors:e.data.errors.errors}):n.props.history.push("/books")})).catch((function(e){return console.error(e)}))},n.state={newBook:{name:"",author:"",description:"",isbn:""},errors:{}},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(g.a,{className:"m-3",onSubmit:this.newBook},r.a.createElement("h4",null,"Add New Book"),r.a.createElement("hr",null),r.a.createElement(w.a,null,r.a.createElement(y.a,null,"Book Name:"),r.a.createElement(N.a,{type:"text",onChange:this.change.bind(this,"name"),placeholder:"Enter the name of book"}),this.state.errors.name?r.a.createElement("p",null,this.state.errors.name.message):""),r.a.createElement(w.a,null,r.a.createElement(y.a,null,"Author"),r.a.createElement(N.a,{type:"text",onChange:this.change.bind(this,"author"),placeholder:"Enter the name of the author"}),this.state.errors.author?r.a.createElement("p",null,this.state.errors.author.message):""),r.a.createElement(w.a,null,r.a.createElement(y.a,null,"Description"),r.a.createElement(N.a,{type:"text",onChange:this.change.bind(this,"description"),placeholder:"Enter the description"}),this.state.errors.author?r.a.createElement("p",null,this.state.errors.author.message):""),r.a.createElement(w.a,null,r.a.createElement(y.a,null,"ISBN"),r.a.createElement(N.a,{type:"text",onChange:this.change.bind(this,"isbn"),placeholder:"Enter the isbn"}),this.state.errors.author?r.a.createElement("p",null,this.state.errors.author.message):""),r.a.createElement(E.a,{color:"primary",type:"submit",className:"primary"},"Register")))}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){d.a.get("/api/books/".concat(n.props.match.params._id)).then((function(e){n.setState({book:e.data.book})})).catch((function(e){return console.error(e)}))},n.state={book:{reviews:[]}},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{className:"m-3"},r.a.createElement("h4",{className:"float-right"},"Reviews for ",this.state.book.name),r.a.createElement(E.a,{outline:!0,color:"primary",className:"mr-3"},r.a.createElement(u.b,{to:"/books/".concat(this.props.match.params._id,"/review")},"New Review")),r.a.createElement(k.a,{dark:!0,className:"mt-3"},r.a.createElement("thead",null,r.a.createElement("th",null,"Customer Name:"),r.a.createElement("th",null,"Stars:"),r.a.createElement("th",null,"Description:")),r.a.createElement("tbody",null,this.state.book.reviews.map((function(e){return r.a.createElement("tr",{key:e._id,className:"review"},r.a.createElement("td",null,e.customerName),r.a.createElement("td",null,e.rating),r.a.createElement("td",null,e.reviewDescription))})))))}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){d.a.get("/api/books/".concat(n.props.match.params._id)).then((function(e){n.setState({book:e.data.book})})).catch((function(e){console.log(e)}))},n.change=function(e,t){var a=Object(f.a)({},n.state.book);a[e]=t.target.value,n.setState({book:a})},n.updateBook=function(e){e.preventDefault(),d.a.put("/api/books/".concat(n.state.book._id),n.state.book).then((function(e){e.data.errors?n.setState({errors:e.data.errors.errors}):n.props.history.push("/books")}))},n.state={book:{name:"",author:"",description:"",isbn:""},errors:{}},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(g.a,{className:"m-3",onSubmit:this.updateBook},r.a.createElement("h4",null,"Edit New Book"),r.a.createElement("hr",null),r.a.createElement(w.a,null,r.a.createElement(y.a,null,"Book Name:"),r.a.createElement(N.a,{type:"text",onChange:this.change.bind(this,"name"),value:this.state.book.name}),this.state.errors.name?r.a.createElement("p",null,this.state.errors.name.message):""),r.a.createElement(w.a,null,r.a.createElement(y.a,null,"Author"),r.a.createElement(N.a,{type:"text",onChange:this.change.bind(this,"author"),value:this.state.book.author}),this.state.errors.author?r.a.createElement("p",null,this.state.errors.author.message):""),r.a.createElement(w.a,null,r.a.createElement(y.a,null,"Description"),r.a.createElement(N.a,{type:"text",onChange:this.change.bind(this,"description"),value:this.state.book.description}),this.state.errors.author?r.a.createElement("p",null,this.state.errors.author.message):""),r.a.createElement(w.a,null,r.a.createElement(y.a,null,"ISBN"),r.a.createElement(N.a,{type:"text",onChange:this.change.bind(this,"isbn"),value:this.state.book.isbn}),this.state.errors.author?r.a.createElement("p",null,this.state.errors.author.message):""),r.a.createElement(E.a,{color:"primary",type:"submit",className:"primary"},"Update")))}}]),a}(n.Component),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).change=function(e,t){var a=Object(f.a)({},n.state.review);a[e]=t.target.value,n.setState({review:a})},n.review=function(e){e.preventDefault(),d.a.post("/api/reviews/".concat(n.props.match.params._id),n.state.review).then((function(e){e.data.errors?n.setState({errors:e.data.errors.errors}):n.props.history.push("/books/".concat(n.props.match.params._id))})).catch((function(e){return console.error(e)}))},n.componentDidMount=function(){d.a.get("/api/books/".concat(n.props.match.params._id)).then((function(e){n.setState({book:e.data.book})})).catch((function(e){return console.error(e)}))},n.state={book:{reviews:[]},review:{customerName:"",reviewDescription:"",rating:3},errors:{}},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{className:"m-3"},r.a.createElement("div",null,r.a.createElement("h4",null,"Write a review for ",this.state.book.name),r.a.createElement("hr",null),r.a.createElement(g.a,{onSubmit:this.review},r.a.createElement(w.a,null,r.a.createElement(y.a,null,"Your Name:"),r.a.createElement(N.a,{type:"text",onChange:this.change.bind(this,"customerName"),placeholder:"Please enter your name"}),this.state.errors.customerName?r.a.createElement("p",null,this.state.errors.customerName.message):""),r.a.createElement(w.a,null,r.a.createElement(y.a,null,"Select"),r.a.createElement("select",{onChange:this.change.bind(this,"rating")},r.a.createElement("option",{value:"1"},"\u2b51"),r.a.createElement("option",{value:"2"},"\u2b51\u2b51"),r.a.createElement("option",{value:"3",selected:!0},"\u2b51\u2b51\u2b51"),r.a.createElement("option",{value:"4"},"\u2b51\u2b51\u2b51\u2b51"),r.a.createElement("option",{value:"5"},"\u2b51\u2b51\u2b51\u2b51\u2b51")),this.state.errors.rating?r.a.createElement("p",null,this.state.errors.rating.message):""),r.a.createElement(w.a,null,r.a.createElement(y.a,null,"Your Review:"),r.a.createElement(N.a,{type:"text",onChange:this.change.bind(this,"reviewDescription"),placeholder:"Please write a review"}),this.state.errors.reviewDescription?r.a.createElement("p",null,this.state.errors.reviewDescription.message):""),r.a.createElement(E.a,{color:"primary",type:"submit",className:"primary"},"Submit"))))}}]),a}(n.Component),B=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(p.a,{className:"mt-3"},r.a.createElement("h1",{className:"mb-3"},"GreatReads!"),r.a.createElement(E.a,{outline:!0,color:"primary",className:"mr-3"},r.a.createElement(u.b,{to:"/"},"Home")),r.a.createElement(E.a,{outline:!0,color:"primary"},r.a.createElement(u.b,{to:"/new"},"Add New Book")),r.a.createElement(h.a,{exact:!0,path:"/",component:v}),r.a.createElement(h.a,{exact:!0,path:"/new",component:j}),r.a.createElement(h.a,{exact:!0,path:"/books/:_id",component:O}),r.a.createElement(h.a,{exact:!0,path:"/books/:_id/edit",component:C}),r.a.createElement(h.a,{exact:!0,path:"/books/:_id/review",component:S})))}}]),a}(n.Component);a(65),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.7a1ad66f.chunk.js.map