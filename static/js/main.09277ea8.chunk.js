(window.webpackJsonptweetsearchingapp=window.webpackJsonptweetsearchingapp||[]).push([[0],{110:function(e,t,n){e.exports=n(176)},118:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),s=n(23),i=(n(115),n(97)),l=n(98),u=n(76),E=Object(s.combineReducers)({tweets:u.a}),m=function(e,t){return E(e,t)},d=[i.a];var p=function(e){return Object(s.createStore)(m,e,Object(l.composeWithDevTools)(s.applyMiddleware.apply(void 0,d)))},f=(n(117),n(118),n(95)),h=n(94),w=n(26),g=n(96),_=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,182))}),y=function(e){var t=e.store;return r.a.createElement(f.a,{store:t},r.a.createElement(h.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(g.b,null)},r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:_})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=p(window.__INITIAL_STATE__);o.a.render(r.a.createElement(y,{store:v}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,n){"use strict";var a=n(75),r=n(100),c="http://13.233.0.100:5001",o=function(e){return{type:"REQUEST_SEARCH_TWEETS_ERROR",err:e}},s=function(e){return{type:"REQUEST_MORE_TWEETS_ERROR",err:e}};function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}n.d(t,"c",function(){return E}),n.d(t,"b",function(){return m});var u={error:null,request:!1,data:null},E=(t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_SEARCH_TWEETS":return l({},e,{request:!0});case"RECEIVE_SEARCH_TWEETS":return l({},e,{data:t.payload,request:!1,error:!1});case"RECEIVE_MORE_TWEETS":return l({},e,{data:l({},e.data,{},t.payload,{tweets:[].concat(Object(a.a)(e.data.tweets),Object(a.a)(t.payload.tweets))}),request:!1,error:!1});case"REQUEST_MORE_TWEETS_ERROR":case"REQUEST_SEARCH_TWEETS_ERROR":return l({},e,{error:!0,request:!1});default:return e}},function(e){return function(t,n){var a=c;a="".concat(a,"/search?q=").concat(e),t({type:"REQUEST_SEARCH_TWEETS"});try{return fetch(a).then(function(e){return e.json()}).then(function(e){console.log(e),e&&"successful"===e.message&&t({type:"RECEIVE_SEARCH_TWEETS",payload:e})}).catch(function(e){console.log(e),t(o(e))})}catch(r){console.log(r),t(o(r))}}}),m=function(e,t,n){return function(a,r){var o=c;o="".concat(o,"/load-more-tweets?nextPage=").concat(e,"&totalPages=").concat(t,"&count=").concat(n);try{return fetch(o).then(function(e){return e.json()}).then(function(e){console.log(e),e&&"successful"===e.message&&a({type:"RECEIVE_MORE_TWEETS",payload:e})}).catch(function(e){console.log(e),a(s(e))})}catch(i){console.log(i),a(s(i))}}}},96:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(180),o=function(){return r.a.createElement(c.a.Footer,null,r.a.createElement("span",null,"\xa9 Copyright ",(new Date).getFullYear()))},s=n(6),i=n(177),l=r.a.createElement(s.a,{type:"loading",style:{fontSize:24},spin:!0}),u=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement(i.a,{indicator:l}),"Loading....")},E=n(105),m=n.n(E),d=n(178),p=function(e){var t=e.data;return r.a.createElement("div",{className:"twitter-card"},r.a.createElement("div",{className:"twitter-header"},r.a.createElement("div",{className:"user-image"},r.a.createElement(d.a,{src:t.user.profile_image_url_https,icon:"user"})),r.a.createElement("div",{className:"user-data"},r.a.createElement("span",{className:"user-name"},t.user.name),r.a.createElement("span",{className:"screen-name"},"@",t.user.screen_name),r.a.createElement("span",{className:"tweet-created-on"},"- ",m()(t.created_at).format("MMM,DD")))),r.a.createElement("div",{className:"twitter-content"},r.a.createElement("div",{className:"tweet"},t.text),r.a.createElement("div",{className:"tweet-media"},t.entities.media&&t.entities.media[0]&&"photo"===t.entities.media[0].type&&r.a.createElement("img",{src:t.entities.media[0].media_url_https})),r.a.createElement("div",{className:"tweet-hash-tags"},t.entities.hashtags.map(function(e){return r.a.createElement("span",{className:"hash-tag"},"#",e.text)}))))},f=n(179),h=n(181),w=c.a.Header,g=f.a.Search,_=function(e){var t=e.searchTweets,n=e.tweetsData;return r.a.createElement(w,null,r.a.createElement(g,{placeholder:"Search Tweets",onSearch:function(e){e&&""!==e&&t(e)},enterButton:!0}),r.a.createElement(h.a,{count:n.data&&n.data.notifications},r.a.createElement(s.a,{type:"bell"})))};n.d(t,"c",function(){return p}),n.d(t,"d",function(){return _}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u})}},[[110,1,2]]]);
//# sourceMappingURL=main.09277ea8.chunk.js.map