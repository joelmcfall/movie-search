(this.webpackJsonpmoviesearch=this.webpackJsonpmoviesearch||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),i=(a(36),a(7)),s=a(8),l=a(12),h=a(9),m=a(11),u=a(26),p=a.n(u),v=(a(54),a(62)),d=a(28),E=a(63),f=a(64),g=a(29),b=a(61),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{id:"movieRow"},r.a.createElement(v.a,null,r.a.createElement(d.a,{xs:"auto"},r.a.createElement(E.a,{width:"100",src:"https://image.tmdb.org/t/p/w200/"+this.props.movie.poster_path})),r.a.createElement(d.a,null,r.a.createElement("h3",null,this.props.movie.title),r.a.createElement("p",{className:"text-overflow"}," ",this.props.movie.overview))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={movies:[]},console.log(a.state.movies),a.Search(a.state.search),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSearch",value:function(e){console.log(e.target.value);var t=e.target.value;this.Search(t)}},{key:"Search",value:function(e){var t=this;p.a.get("https://api.themoviedb.org/3/search/movie?api_key=29408d281b8290ab79293fd3f9c29a82&language=en-US&query="+e+"&page=1&include_adult=false").then((function(e){var a=e.data.results,n=[];a.forEach((function(e){var t=r.a.createElement(w,{key:e.id,movie:e});console.log(t.props.movie.poster_path),""!==t.props.movie.overview&&null!==t.props.movie.poster_path&&n.push(t)})),t.setState({movies:n})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{id:"header",className:"align-items-center"},r.a.createElement(d.a,{className:"no-padding",xs:"auto"},r.a.createElement(E.a,{src:"https://via.placeholder.com/100"})),r.a.createElement(d.a,{xs:8},r.a.createElement("h1",null,"Movie Searcher"))),r.a.createElement(v.a,{id:"search"},r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{type:"text",placeholder:"Search",onChange:this.handleSearch.bind(this)})))),this.state.movies)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(59);c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.901955ea.chunk.js.map