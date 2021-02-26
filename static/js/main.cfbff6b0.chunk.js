(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(26),a=n.n(i),o=(n(60),n(8)),r=(n(61),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("668efdae4f3a4e41a04e1e556c0fa97e","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),l=(n(62),n(1));var j=function(){return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(l.jsx)("a",{href:r,children:"LOGIN WITH SPOTIFY"})]})},u=n(36),d=n.n(u),b=(n(64),n(65),n(28)),O=n.n(b),p=n(91),f=Object(c.createContext)(),y=function(e){var t=e.initialState,n=e.reducer,s=e.children;return Object(l.jsx)(f.Provider,{value:Object(c.useReducer)(n,t),children:s})},_=function(){return Object(c.useContext)(f)};var h=function(){var e=_(),t=Object(o.a)(e,2),n=t[0].user;return t[1],Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header__left",children:[Object(l.jsx)(O.a,{}),Object(l.jsx)("input",{placeholder:"Search for Artists, Songs, or Podcasts ",type:"text"})]}),Object(l.jsxs)("div",{className:"header__right",children:[Object(l.jsx)(p.a,{src:null===n||void 0===n?void 0:n.images[0].url,alt:null===n||void 0===n?void 0:n.display_name}),Object(l.jsx)("h4",{children:null===n||void 0===n?void 0:n.display_name})]})]})};n(71);var m=function(e){var t=e.track,n=e.playSong;return console.log(t),Object(l.jsxs)("div",{className:"songrow",onClick:function(){return n(t.id)},children:[Object(l.jsx)("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"songRow__info",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})},x=n(39),v=n.n(x),g=n(40),S=n.n(g),T=n(41),N=n.n(T);var E=function(e){var t=e.spotify,n=_(),c=Object(o.a)(n,2),s=c[0].discover_weekly,i=c[1],a=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){i({type:"SET_ITEM",item:e.item}),i({type:"SET_PLAYING",playing:!0})}))}))};return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(h,{spotify:t}),Object(l.jsxs)("div",{className:"body__info",children:[Object(l.jsx)("img",{src:null===s||void 0===s?void 0:s.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"body__infoText",children:[Object(l.jsx)("strong",{children:"PLAYLIST"}),Object(l.jsx)("h2",{children:"Discover Weekly"}),Object(l.jsx)("p",{children:null===s||void 0===s?void 0:s.description})]})]}),Object(l.jsxs)("div",{className:"body__songs",children:[Object(l.jsxs)("div",{className:"body__icons",onClick:function(e){t.play({context_uri:"spotify:playlist:37i9dQZEVXcJZyENOWUFo7"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){i({type:"SET_ITEM",item:e.item}),i({type:"SET_PLAYING",playing:!0})}))}))},children:[Object(l.jsx)(v.a,{className:"body__shuffle"}),Object(l.jsx)(S.a,{fontSize:"large"}),Object(l.jsx)(N.a,{})]}),null===s||void 0===s?void 0:s.tracks.items.map((function(e){return Object(l.jsx)(m,{playSong:a,track:e.track})}))]})]})};n(72),n(73),n(74);var I=function(e){var t=e.title,n=e.Icon;return Object(l.jsxs)("div",{className:"sidebarOption",children:[n&&Object(l.jsx)(n,{className:"sidebarOption__icon"}),n?Object(l.jsx)("h4",{children:t}):Object(l.jsx)("p",{children:t})]})},k=n(42),P=n.n(k),L=n(43),w=n.n(L);var C=function(){var e,t,n=_(),c=Object(o.a)(n,2),s=c[0],i=s.playlists,a=s.top_artists;return c[1],console.log(i),Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(l.jsx)(I,{Icon:P.a,title:"Home"}),Object(l.jsx)(I,{Icon:O.a,title:"Search"}),Object(l.jsx)(I,{Icon:w.a,title:"Your Library"}),Object(l.jsx)("strong",{className:"sidebar__title",children:"PLAYLISTS"}),Object(l.jsx)("hr",{}),null===i||void 0===i||null===(e=i.items)||void 0===e?void 0:e.map((function(e){return Object(l.jsx)(I,{title:e.name})})),Object(l.jsx)("strong",{className:"sidebar__title",children:"TOP ARTISTS"}),Object(l.jsx)("hr",{}),null===a||void 0===a||null===(t=a.items)||void 0===t?void 0:t.map((function(e){return Object(l.jsx)(I,{title:e.name})}))]})},A=(n(75),n(47)),Y=n.n(A),M=n(45),R=n.n(M),F=n(48),G=n.n(F),z=n(44),D=n.n(z),K=n(49),U=n.n(K),W=n(51),H=n.n(W),J=n(46),V=n.n(J),Z=n(50),q=n.n(Z),B=n(89),Q=n(90);var X=function(e){var t=e.spotify,n=_(),s=Object(o.a)(n,2),i=s[0],a=(i.token,i.item),r=i.playing,j=s[1];Object(c.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),j({type:"SET_PLAYING",playing:e.is_playing}),j({type:"SET_ITEM",item:e.item})}))}),[t]);var u=function(){r?(t.pause(),j({type:"SET_PLAYING",playing:!1})):(t.play(),j({type:"SET_PLAYING",playing:!0}))};return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer__left",children:[Object(l.jsx)("img",{className:"footer__albumLogo",src:null===a||void 0===a?void 0:a.album.images[0].url,alt:null===a||void 0===a?void 0:a.name}),a?Object(l.jsxs)("div",{className:"footer__songInfo",children:[Object(l.jsx)("h4",{children:a.name}),Object(l.jsx)("p",{children:a.artists.map((function(e){return e.name})).join(", ")})]}):Object(l.jsxs)("div",{className:"footer__songInfo",children:[Object(l.jsx)("h4",{children:"No song is playing"}),Object(l.jsx)("p",{children:"..."})]})]}),Object(l.jsxs)("div",{className:"footer__center",children:[Object(l.jsx)(D.a,{className:"footer__green"}),Object(l.jsx)(R.a,{className:"footer__icon"}),r?Object(l.jsx)(V.a,{onClick:u,fontSize:"large",className:"footer__icon"}):Object(l.jsx)(Y.a,{onClick:u,fontSize:"large",className:"footer__icon"}),Object(l.jsx)(G.a,{onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){j({type:"SET_ITEM",item:e.item}),j({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),Object(l.jsx)(U.a,{className:"footer__green"})]}),Object(l.jsx)("div",{className:"footer__right",children:Object(l.jsxs)(B.a,{container:!0,spacing:2,children:[Object(l.jsx)(B.a,{item:!0,children:Object(l.jsx)(q.a,{})}),Object(l.jsx)(B.a,{item:!0,children:Object(l.jsx)(H.a,{})}),Object(l.jsx)(B.a,{item:!0,xs:!0,children:Object(l.jsx)(Q.a,{"aria-labelledby":"continuous-slider"})})]})})]})};var $=function(e){var t=e.spotify;return Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("div",{className:"player__body",children:[Object(l.jsx)(C,{}),Object(l.jsx)(E,{spotify:t})]}),Object(l.jsx)(X,{spotify:t})]})},ee=new d.a;var te=function(){var e=_(),t=Object(o.a)(e,2),n=t[0].token,s=t[1];return Object(c.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(s({type:"SET_TOKEN",token:t}),ee.setAccessToken(t),ee.getMe().then((function(e){s({type:"SET_USER",user:e})})),ee.getUserPlaylists().then((function(e){s({type:"SET_PLAYLISTS",playlists:e})})),ee.getPlaylist("5gz9HKsaqpb07DqZHwpCcC").then((function(e){s({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),ee.getMyTopArtists().then((function(e){return s({type:"SET_TOP_ARTISTS",top_artists:e})})),s({type:"SET_SPOTIFY",spotify:ee}))}),[n,s]),Object(l.jsx)("div",{className:"app",children:n?Object(l.jsx)($,{spotify:ee}):Object(l.jsx)(j,{})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))},ce=n(4),se=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(ce.a)(Object(ce.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object(ce.a)(Object(ce.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(ce.a)(Object(ce.a)({},e),{},{item:t.item});case"SET_TOP_ARTISTS":return Object(ce.a)(Object(ce.a)({},e),{},{top_artists:t.top_artists});case"SET_SPOTIFY":return Object(ce.a)(Object(ce.a)({},e),{},{spotify:t.spotify});case"SET_TOKEN":return Object(ce.a)(Object(ce.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(ce.a)(Object(ce.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(ce.a)(Object(ce.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null},reducer:se,children:Object(l.jsx)(te,{})})}),document.getElementById("root")),ne()}},[[76,1,2]]]);
//# sourceMappingURL=main.cfbff6b0.chunk.js.map