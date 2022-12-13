"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[523],{523:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(165),i=n(861),a=n(885),s=n(791),o=n(739),c=n(717),l=n(952),u=n(273),d=n(290),h=n(712),f=n(144),p=n(671),x=n(136),v=n(516);var m={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937},g=function(){function e(t){(0,p.Z)(this,e),this.code_=t.code,this.units_=t.units,this.extent_=void 0!==t.extent?t.extent:null,this.worldExtent_=void 0!==t.worldExtent?t.worldExtent:null,this.axisOrientation_=void 0!==t.axisOrientation?t.axisOrientation:"enu",this.global_=void 0!==t.global&&t.global,this.canWrapX_=!(!this.global_||!this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit}return(0,f.Z)(e,[{key:"canWrapX",value:function(){return this.canWrapX_}},{key:"getCode",value:function(){return this.code_}},{key:"getExtent",value:function(){return this.extent_}},{key:"getUnits",value:function(){return this.units_}},{key:"getMetersPerUnit",value:function(){return this.metersPerUnit_||m[this.units_]}},{key:"getWorldExtent",value:function(){return this.worldExtent_}},{key:"getAxisOrientation",value:function(){return this.axisOrientation_}},{key:"isGlobal",value:function(){return this.global_}},{key:"setGlobal",value:function(e){this.global_=e,this.canWrapX_=!(!e||!this.extent_)}},{key:"getDefaultTileGrid",value:function(){return this.defaultTileGrid_}},{key:"setDefaultTileGrid",value:function(e){this.defaultTileGrid_=e}},{key:"setExtent",value:function(e){this.extent_=e,this.canWrapX_=!(!this.global_||!e)}},{key:"setWorldExtent",value:function(e){this.worldExtent_=e}},{key:"setGetPointResolution",value:function(e){this.getPointResolutionFunc_=e}},{key:"getPointResolutionFunc",value:function(){return this.getPointResolutionFunc_}}]),e}(),w=6378137,_=Math.PI*w,j=[-_,-_,_,_],E=[-180,-85,180,85],Z=w*Math.log(Math.tan(Math.PI/2)),k=function(e){(0,x.Z)(n,e);var t=(0,v.Z)(n);function n(e){return(0,p.Z)(this,n),t.call(this,{code:e,units:"m",extent:j,global:!0,worldExtent:E,getPointResolution:function(e,t){return e/Math.cosh(t[1]/w)}})}return(0,f.Z)(n)}(g),P=[new k("EPSG:3857"),new k("EPSG:102100"),new k("EPSG:102113"),new k("EPSG:900913"),new k("http://www.opengis.net/def/crs/EPSG/0/3857"),new k("http://www.opengis.net/gml/srs/epsg.xml#3857")];function C(e,t,n){var r=e.length;n=n>1?n:2,void 0===t&&(t=n>2?e.slice():new Array(r));for(var i=0;i<r;i+=n){t[i]=_*e[i]/180;var a=w*Math.log(Math.tan(Math.PI*(+e[i+1]+90)/360));a>Z?a=Z:a<-Z&&(a=-Z),t[i+1]=a}return t}function y(e,t,n){var r=e.length;n=n>1?n:2,void 0===t&&(t=n>2?e.slice():new Array(r));for(var i=0;i<r;i+=n)t[i]=180*e[i]/_,t[i+1]=360*Math.atan(Math.exp(e[i+1]/w))/Math.PI-90;return t}var G=[-180,-90,180,90],b=6378137*Math.PI/180,M=function(e){(0,x.Z)(n,e);var t=(0,v.Z)(n);function n(e,r){return(0,p.Z)(this,n),t.call(this,{code:e,units:"degrees",extent:G,axisOrientation:r,global:!0,metersPerUnit:b,worldExtent:G})}return(0,f.Z)(n)}(g),I=[new M("CRS:84"),new M("EPSG:4326","neu"),new M("urn:ogc:def:crs:OGC:1.3:CRS84"),new M("urn:ogc:def:crs:OGC:2:84"),new M("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new M("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new M("http://www.opengis.net/def/crs/EPSG/0/4326","neu")],N={};var S={};function O(e,t,n){var r=e.getCode(),i=t.getCode();r in S||(S[r]={}),S[r][i]=n}function R(e,t,n){if(void 0!==t)for(var r=0,i=e.length;r<i;++r)t[r]=e[r];else t=e.slice();return t}function D(e){!function(e,t){N[e]=t}(e.getCode(),e),O(e,e,R)}function F(e){!function(e){e.forEach(D)}(e),e.forEach((function(t){e.forEach((function(e){t!==e&&O(t,e,R)}))}))}!function(){var e,t,n;F(P),F(I),e=P,t=C,n=y,I.forEach((function(r){e.forEach((function(e){O(r,e,t),O(e,r,n)}))}))}();var T=n(184),W=function(e){return(0,T.jsx)("div",{className:"map ".concat(e.className),style:e.style,id:"map"})},A=n(825),L=n(198);var U=function(e){var t=(0,d.x)(),n=t.isLoading,o=t.error,f=t.sendRequest,p=t.clearError,x=(0,s.useState)(!1),v=(0,a.Z)(x,2),m=v[0],g=v[1],w=(0,s.useState)(!1),_=(0,a.Z)(w,2),j=_[0],E=_[1],Z=(0,s.useContext)(L.V),k=function(){return g(!1)},P=function(){E(!1)},C=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(!1),t.prev=1,t.next=4,f("".concat("https://mern-app00001.herokuapp.com/api","/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+Z.token});case 4:e.onDelete(e.id),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(l.Z,{error:o,onClear:p}),(0,T.jsx)(A.Z,{show:m,onCancel:k,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,T.jsx)(h.Z,{onClick:k,children:"CLOSE"}),children:(0,T.jsx)("div",{className:"map-container",children:(0,T.jsx)(W,{center:e.coordinates,zoom:16})})}),(0,T.jsx)(A.Z,{show:j,onCancel:P,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h.Z,{inverse:!0,onClick:P,children:"CANCEL"}),(0,T.jsx)(h.Z,{danger:!0,onClick:C,children:"DELETE"})]}),children:(0,T.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it can't be undone thereafter."})}),(0,T.jsx)("li",{className:"place-item",children:(0,T.jsxs)(c.Z,{className:"place-item__content",children:[n&&(0,T.jsx)(u.Z,{asOverlay:!0}),(0,T.jsx)("div",{className:"place-item__image",children:(0,T.jsx)("img",{src:"".concat("https://mern-app00001.herokuapp.com","/").concat(e.image),alt:e.title})}),(0,T.jsxs)("div",{className:"place-item__info",children:[(0,T.jsx)("h2",{children:e.title}),(0,T.jsx)("h3",{children:e.address}),(0,T.jsx)("p",{children:e.description})]}),(0,T.jsxs)("div",{className:"place-item__actions",children:[(0,T.jsx)(h.Z,{inverse:!0,onClick:function(){return g(!0)},children:"VIEW ON MAP"}),Z.userId===e.creatorId&&(0,T.jsx)(h.Z,{to:"/places/".concat(e.id),children:"EDIT"}),Z.userId===e.creatorId&&(0,T.jsx)(h.Z,{danger:!0,onClick:function(){E(!0)},children:"DELETE"})]})]})})]})};var X=function(e){var t=e.items.map((function(t){return(0,T.jsx)(U,{id:t.id,image:t.image,title:t.title,address:t.address,description:t.description,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace},t.id)}));return(0,T.jsxs)(T.Fragment,{children:[0===e.items.length?(0,T.jsx)("div",{className:"place-list center",children:(0,T.jsxs)(c.Z,{children:[(0,T.jsx)("h2",{children:"No Places Found. Maybe create one"}),(0,T.jsx)(h.Z,{to:"/places/new",children:"Share Place"})]})}):(0,T.jsx)("ul",{className:"place-list",children:t}),";"]})};var q=function(e){var t=(0,s.useState)(),n=(0,a.Z)(t,2),h=n[0],f=n[1],p=(0,d.x)(),x=p.isLoading,v=p.error,m=p.sendRequest,g=p.clearError,w=(0,o.UO)().userId;return(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("".concat("https://mern-app00001.herokuapp.com/api","/places/users/").concat(w));case 3:t=e.sent,f(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[m,w]),(0,T.jsxs)(T.Fragment,{children:[h&&(0,T.jsx)(l.Z,{error:v,onClear:g}),x&&(0,T.jsx)("div",{className:"center",children:(0,T.jsx)(u.Z,{})}),!x&&!h&&(0,T.jsx)("div",{className:"center",children:(0,T.jsx)(c.Z,{children:(0,T.jsx)("h2",{children:"You do not have any create places!"})})}),!x&&h&&(0,T.jsx)(X,{items:h,onDeletePlace:function(e){f((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}}}]);
//# sourceMappingURL=523.704ccd83.chunk.js.map