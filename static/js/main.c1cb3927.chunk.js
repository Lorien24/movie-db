(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{29:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(21),n=c.n(i),r=(c(29),c(8)),o=c(3),l=c(0),j=function(){return Object(l.jsx)("header",{children:Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"logo_title",children:Object(l.jsx)(r.b,{to:"/",children:"Popular Movies"})}),Object(l.jsx)("div",{className:"watchlist_link",children:Object(l.jsx)(r.b,{to:"/watchlist",children:"Watchlist"})})]})})},d=c(9),h=c(24),b=c(13),m=function(e,t){switch(t.type){case"add":return Object(b.a)(Object(b.a)({},e),{},{watchlist:[t.payload].concat(Object(h.a)(e.watchlist))});case"remove":return Object(b.a)(Object(b.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});default:return e}},O={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[]},v=Object(a.createContext)(O),u=function(e){var t=Object(a.useReducer)(m,O),c=Object(d.a)(t,2),s=c[0],i=c[1];Object(a.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(s.watchlist))}),[s]);return Object(l.jsx)(v.Provider,{value:{watchlist:s.watchlist,addMovieToWatchlist:function(e){i({type:"add",payload:e})},removeFromWatchlist:function(e){i({type:"remove",payload:e})}},children:e.children})},x=c(16),p=c(17),f=Object(l.jsx)(x.a,{icon:p.a,size:"2x"}),g=function(e){var t=e.type,c=e.movie,s=Object(a.useContext)(v).removeFromWatchlist;return Object(l.jsx)("div",{children:"watchlist"===t&&Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("button",{className:"btn",onClick:function(){return s(c.id)},children:[f," Remove from watchlist"]})})})},N=function(e){var t=e.movie,c=e.type;return Object(l.jsxs)("div",{className:"movie_card",children:[Object(l.jsx)("div",{className:"movie_img",children:Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t.poster_path),alt:"".concat(t.title," Poster")})}),Object(l.jsx)(g,{type:c,movie:t})]})},w=function(){var e=Object(a.useContext)(v).watchlist;return Object(l.jsx)("div",{className:"watchlist_page",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:"My Watchlist"})}),e.length>0?Object(l.jsx)("div",{className:"wathclist_card",children:e.map((function(e){return Object(l.jsx)(N,{movie:e,type:"watchlist"},e.id)}))}):Object(l.jsx)("h2",{children:"It`s empty~ Please add some!"})]})})},_=Object(l.jsx)(x.a,{icon:p.a,size:"2x"}),y=function(e){var t,c=e.movie,s=Object(a.useContext)(v),i=s.addMovieToWatchlist;s.watchlist;return Object(l.jsxs)("div",{className:"movie_card",children:[Object(l.jsx)("img",{className:"movie_img",src:"https://image.tmdb.org/t/p/original".concat(c.poster_path),alt:"".concat(c.title," Poster")}),Object(l.jsx)("span",{className:"tag ".concat((t=c.vote_average,t>=8?"green":t>=6?"orange":"red")),children:c.vote_average}),Object(l.jsxs)("div",{className:"movie_info",children:[Object(l.jsx)(r.b,{className:"",to:"/movieinfo/".concat(c.id),children:Object(l.jsx)("h3",{className:"title",children:c.title})}),Object(l.jsx)("button",{className:"btn",label:"Add to watchlist",onClick:function(){return i(c)},children:_})]})]})},S=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),n=Object(d.a)(i,2),r=n[0],o=n[1],j="8fbbb787d44ee790aebc20d0dd773784",h="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=".concat(j,"&language=en-US&page=1"),b="https://api.themoviedb.org/3/search/movie?api_key=".concat(j,"&query=");Object(a.useEffect)((function(){m(h)}),[]);var m=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.results)}))};return Object(l.jsx)("div",{className:"home_page",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"home_content",children:[Object(l.jsx)("div",{className:"input",children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),m(b+r),o("")},children:Object(l.jsx)("input",{className:"search",type:"text",placeholder:"Search...",value:r,onChange:function(e){o(e.target.value)}})})}),c.length>0&&Object(l.jsx)("div",{className:"movie-content",children:Object(l.jsx)("ul",{className:"results",children:c.map((function(e){return Object(l.jsx)("li",{className:"movie_li",children:Object(l.jsx)(y,{movie:e})},e.id)}))})})]})})})};var k=function(){var e=Object(a.useState)({}),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(o.f)().id;return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=").concat("8fbbb787d44ee790aebc20d0dd773784")).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[i]),Object(l.jsxs)("div",{className:"movie_container",children:[Object(l.jsx)("div",{className:"movie_poster",children:Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(c.poster_path),alt:"".concat(c.title," Poster")})}),Object(l.jsxs)("div",{className:"movie_descr",children:[Object(l.jsx)("h2",{children:c.title}),Object(l.jsxs)("p",{children:["Vote average: ",c.vote_average]}),Object(l.jsxs)("p",{children:["Release Date: ",c.release_date]}),Object(l.jsxs)("p",{children:["Overview: ",c.overview]})]})]})};var C=function(){return Object(l.jsx)(u,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(S,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/movieinfo/:id",children:Object(l.jsx)(k,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/watchlist",children:Object(l.jsx)(w,{})})]})]})})};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c1cb3927.chunk.js.map