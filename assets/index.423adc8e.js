(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var L="top",I="bottom",M="right",D="left",Ee="auto",Pt=[L,I,M,D],_t="start",Nt="end",un="clippingParents",Qe="viewport",Ct="popper",fn="reference",Ke=Pt.reduce(function(s,t){return s.concat([t+"-"+_t,t+"-"+Nt])},[]),Je=[].concat(Pt,[Ee]).reduce(function(s,t){return s.concat([t,t+"-"+_t,t+"-"+Nt])},[]),hn="beforeRead",pn="read",gn="afterRead",mn="beforeMain",_n="main",vn="afterMain",En="beforeWrite",bn="write",yn="afterWrite",wn=[hn,pn,gn,mn,_n,vn,En,bn,yn];function U(s){return s?(s.nodeName||"").toLowerCase():null}function V(s){if(s==null)return window;if(s.toString()!=="[object Window]"){var t=s.ownerDocument;return t&&t.defaultView||window}return s}function vt(s){var t=V(s).Element;return s instanceof t||s instanceof Element}function P(s){var t=V(s).HTMLElement;return s instanceof t||s instanceof HTMLElement}function Ze(s){if(typeof ShadowRoot>"u")return!1;var t=V(s).ShadowRoot;return s instanceof t||s instanceof ShadowRoot}function Vi(s){var t=s.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e];!P(o)||!U(o)||(Object.assign(o.style,n),Object.keys(i).forEach(function(r){var a=i[r];a===!1?o.removeAttribute(r):o.setAttribute(r,a===!0?"":a)}))})}function ji(s){var t=s.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(n){var i=t.elements[n],o=t.attributes[n]||{},r=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:e[n]),a=r.reduce(function(c,u){return c[u]="",c},{});!P(i)||!U(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(c){i.removeAttribute(c)}))})}}const ts={name:"applyStyles",enabled:!0,phase:"write",fn:Vi,effect:ji,requires:["computeStyles"]};function K(s){return s.split("-")[0]}var mt=Math.max,ge=Math.min,xt=Math.round;function Ye(){var s=navigator.userAgentData;return s!=null&&s.brands?s.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function An(){return!/^((?!chrome|android).)*safari/i.test(Ye())}function Lt(s,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var n=s.getBoundingClientRect(),i=1,o=1;t&&P(s)&&(i=s.offsetWidth>0&&xt(n.width)/s.offsetWidth||1,o=s.offsetHeight>0&&xt(n.height)/s.offsetHeight||1);var r=vt(s)?V(s):window,a=r.visualViewport,c=!An()&&e,u=(n.left+(c&&a?a.offsetLeft:0))/i,l=(n.top+(c&&a?a.offsetTop:0))/o,f=n.width/i,p=n.height/o;return{width:f,height:p,top:l,right:u+f,bottom:l+p,left:u,x:u,y:l}}function es(s){var t=Lt(s),e=s.offsetWidth,n=s.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:s.offsetLeft,y:s.offsetTop,width:e,height:n}}function Tn(s,t){var e=t.getRootNode&&t.getRootNode();if(s.contains(t))return!0;if(e&&Ze(e)){var n=t;do{if(n&&s.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function J(s){return V(s).getComputedStyle(s)}function Hi(s){return["table","td","th"].indexOf(U(s))>=0}function rt(s){return((vt(s)?s.ownerDocument:s.document)||window.document).documentElement}function be(s){return U(s)==="html"?s:s.assignedSlot||s.parentNode||(Ze(s)?s.host:null)||rt(s)}function Cs(s){return!P(s)||J(s).position==="fixed"?null:s.offsetParent}function Bi(s){var t=/firefox/i.test(Ye()),e=/Trident/i.test(Ye());if(e&&P(s)){var n=J(s);if(n.position==="fixed")return null}var i=be(s);for(Ze(i)&&(i=i.host);P(i)&&["html","body"].indexOf(U(i))<0;){var o=J(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function qt(s){for(var t=V(s),e=Cs(s);e&&Hi(e)&&J(e).position==="static";)e=Cs(e);return e&&(U(e)==="html"||U(e)==="body"&&J(e).position==="static")?t:e||Bi(s)||t}function ss(s){return["top","bottom"].indexOf(s)>=0?"x":"y"}function Ut(s,t,e){return mt(s,ge(t,e))}function Wi(s,t,e){var n=Ut(s,t,e);return n>e?e:n}function Cn(){return{top:0,right:0,bottom:0,left:0}}function Sn(s){return Object.assign({},Cn(),s)}function On(s,t){return t.reduce(function(e,n){return e[n]=s,e},{})}var Fi=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Sn(typeof t!="number"?t:On(t,Pt))};function Ki(s){var t,e=s.state,n=s.name,i=s.options,o=e.elements.arrow,r=e.modifiersData.popperOffsets,a=K(e.placement),c=ss(a),u=[D,M].indexOf(a)>=0,l=u?"height":"width";if(!(!o||!r)){var f=Fi(i.padding,e),p=es(o),h=c==="y"?L:D,y=c==="y"?I:M,m=e.rects.reference[l]+e.rects.reference[c]-r[c]-e.rects.popper[l],v=r[c]-e.rects.reference[c],w=qt(o),T=w?c==="y"?w.clientHeight||0:w.clientWidth||0:0,C=m/2-v/2,_=f[h],E=T-p[l]-f[y],b=T/2-p[l]/2+C,A=Ut(_,b,E),$=c;e.modifiersData[n]=(t={},t[$]=A,t.centerOffset=A-b,t)}}function Yi(s){var t=s.state,e=s.options,n=e.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||!Tn(t.elements.popper,i)||(t.elements.arrow=i))}const $n={name:"arrow",enabled:!0,phase:"main",fn:Ki,effect:Yi,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Dt(s){return s.split("-")[1]}var Ui={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zi(s){var t=s.x,e=s.y,n=window,i=n.devicePixelRatio||1;return{x:xt(t*i)/i||0,y:xt(e*i)/i||0}}function Ss(s){var t,e=s.popper,n=s.popperRect,i=s.placement,o=s.variation,r=s.offsets,a=s.position,c=s.gpuAcceleration,u=s.adaptive,l=s.roundOffsets,f=s.isFixed,p=r.x,h=p===void 0?0:p,y=r.y,m=y===void 0?0:y,v=typeof l=="function"?l({x:h,y:m}):{x:h,y:m};h=v.x,m=v.y;var w=r.hasOwnProperty("x"),T=r.hasOwnProperty("y"),C=D,_=L,E=window;if(u){var b=qt(e),A="clientHeight",$="clientWidth";if(b===V(e)&&(b=rt(e),J(b).position!=="static"&&a==="absolute"&&(A="scrollHeight",$="scrollWidth")),b=b,i===L||(i===D||i===M)&&o===Nt){_=I;var O=f&&b===E&&E.visualViewport?E.visualViewport.height:b[A];m-=O-n.height,m*=c?1:-1}if(i===D||(i===L||i===I)&&o===Nt){C=M;var S=f&&b===E&&E.visualViewport?E.visualViewport.width:b[$];h-=S-n.width,h*=c?1:-1}}var N=Object.assign({position:a},u&&Ui),H=l===!0?zi({x:h,y:m}):{x:h,y:m};if(h=H.x,m=H.y,c){var x;return Object.assign({},N,(x={},x[_]=T?"0":"",x[C]=w?"0":"",x.transform=(E.devicePixelRatio||1)<=1?"translate("+h+"px, "+m+"px)":"translate3d("+h+"px, "+m+"px, 0)",x))}return Object.assign({},N,(t={},t[_]=T?m+"px":"",t[C]=w?h+"px":"",t.transform="",t))}function Gi(s){var t=s.state,e=s.options,n=e.gpuAcceleration,i=n===void 0?!0:n,o=e.adaptive,r=o===void 0?!0:o,a=e.roundOffsets,c=a===void 0?!0:a,u={placement:K(t.placement),variation:Dt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ss(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ss(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const ns={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Gi,data:{}};var oe={passive:!0};function qi(s){var t=s.state,e=s.instance,n=s.options,i=n.scroll,o=i===void 0?!0:i,r=n.resize,a=r===void 0?!0:r,c=V(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach(function(l){l.addEventListener("scroll",e.update,oe)}),a&&c.addEventListener("resize",e.update,oe),function(){o&&u.forEach(function(l){l.removeEventListener("scroll",e.update,oe)}),a&&c.removeEventListener("resize",e.update,oe)}}const is={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:qi,data:{}};var Xi={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(s){return s.replace(/left|right|bottom|top/g,function(t){return Xi[t]})}var Qi={start:"end",end:"start"};function Os(s){return s.replace(/start|end/g,function(t){return Qi[t]})}function os(s){var t=V(s),e=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:e,scrollTop:n}}function rs(s){return Lt(rt(s)).left+os(s).scrollLeft}function Ji(s,t){var e=V(s),n=rt(s),i=e.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,c=0;if(i){o=i.width,r=i.height;var u=An();(u||!u&&t==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:o,height:r,x:a+rs(s),y:c}}function Zi(s){var t,e=rt(s),n=os(s),i=(t=s.ownerDocument)==null?void 0:t.body,o=mt(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),r=mt(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-n.scrollLeft+rs(s),c=-n.scrollTop;return J(i||e).direction==="rtl"&&(a+=mt(e.clientWidth,i?i.clientWidth:0)-o),{width:o,height:r,x:a,y:c}}function as(s){var t=J(s),e=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+n)}function Nn(s){return["html","body","#document"].indexOf(U(s))>=0?s.ownerDocument.body:P(s)&&as(s)?s:Nn(be(s))}function zt(s,t){var e;t===void 0&&(t=[]);var n=Nn(s),i=n===((e=s.ownerDocument)==null?void 0:e.body),o=V(n),r=i?[o].concat(o.visualViewport||[],as(n)?n:[]):n,a=t.concat(r);return i?a:a.concat(zt(be(r)))}function Ue(s){return Object.assign({},s,{left:s.x,top:s.y,right:s.x+s.width,bottom:s.y+s.height})}function to(s,t){var e=Lt(s,!1,t==="fixed");return e.top=e.top+s.clientTop,e.left=e.left+s.clientLeft,e.bottom=e.top+s.clientHeight,e.right=e.left+s.clientWidth,e.width=s.clientWidth,e.height=s.clientHeight,e.x=e.left,e.y=e.top,e}function $s(s,t,e){return t===Qe?Ue(Ji(s,e)):vt(t)?to(t,e):Ue(Zi(rt(s)))}function eo(s){var t=zt(be(s)),e=["absolute","fixed"].indexOf(J(s).position)>=0,n=e&&P(s)?qt(s):s;return vt(n)?t.filter(function(i){return vt(i)&&Tn(i,n)&&U(i)!=="body"}):[]}function so(s,t,e,n){var i=t==="clippingParents"?eo(s):[].concat(t),o=[].concat(i,[e]),r=o[0],a=o.reduce(function(c,u){var l=$s(s,u,n);return c.top=mt(l.top,c.top),c.right=ge(l.right,c.right),c.bottom=ge(l.bottom,c.bottom),c.left=mt(l.left,c.left),c},$s(s,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function xn(s){var t=s.reference,e=s.element,n=s.placement,i=n?K(n):null,o=n?Dt(n):null,r=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,c;switch(i){case L:c={x:r,y:t.y-e.height};break;case I:c={x:r,y:t.y+t.height};break;case M:c={x:t.x+t.width,y:a};break;case D:c={x:t.x-e.width,y:a};break;default:c={x:t.x,y:t.y}}var u=i?ss(i):null;if(u!=null){var l=u==="y"?"height":"width";switch(o){case _t:c[u]=c[u]-(t[l]/2-e[l]/2);break;case Nt:c[u]=c[u]+(t[l]/2-e[l]/2);break}}return c}function kt(s,t){t===void 0&&(t={});var e=t,n=e.placement,i=n===void 0?s.placement:n,o=e.strategy,r=o===void 0?s.strategy:o,a=e.boundary,c=a===void 0?un:a,u=e.rootBoundary,l=u===void 0?Qe:u,f=e.elementContext,p=f===void 0?Ct:f,h=e.altBoundary,y=h===void 0?!1:h,m=e.padding,v=m===void 0?0:m,w=Sn(typeof v!="number"?v:On(v,Pt)),T=p===Ct?fn:Ct,C=s.rects.popper,_=s.elements[y?T:p],E=so(vt(_)?_:_.contextElement||rt(s.elements.popper),c,l,r),b=Lt(s.elements.reference),A=xn({reference:b,element:C,strategy:"absolute",placement:i}),$=Ue(Object.assign({},C,A)),O=p===Ct?$:b,S={top:E.top-O.top+w.top,bottom:O.bottom-E.bottom+w.bottom,left:E.left-O.left+w.left,right:O.right-E.right+w.right},N=s.modifiersData.offset;if(p===Ct&&N){var H=N[i];Object.keys(S).forEach(function(x){var ct=[M,I].indexOf(x)>=0?1:-1,dt=[L,I].indexOf(x)>=0?"y":"x";S[x]+=H[dt]*ct})}return S}function no(s,t){t===void 0&&(t={});var e=t,n=e.placement,i=e.boundary,o=e.rootBoundary,r=e.padding,a=e.flipVariations,c=e.allowedAutoPlacements,u=c===void 0?Je:c,l=Dt(n),f=l?a?Ke:Ke.filter(function(y){return Dt(y)===l}):Pt,p=f.filter(function(y){return u.indexOf(y)>=0});p.length===0&&(p=f);var h=p.reduce(function(y,m){return y[m]=kt(s,{placement:m,boundary:i,rootBoundary:o,padding:r})[K(m)],y},{});return Object.keys(h).sort(function(y,m){return h[y]-h[m]})}function io(s){if(K(s)===Ee)return[];var t=fe(s);return[Os(s),t,Os(t)]}function oo(s){var t=s.state,e=s.options,n=s.name;if(!t.modifiersData[n]._skip){for(var i=e.mainAxis,o=i===void 0?!0:i,r=e.altAxis,a=r===void 0?!0:r,c=e.fallbackPlacements,u=e.padding,l=e.boundary,f=e.rootBoundary,p=e.altBoundary,h=e.flipVariations,y=h===void 0?!0:h,m=e.allowedAutoPlacements,v=t.options.placement,w=K(v),T=w===v,C=c||(T||!y?[fe(v)]:io(v)),_=[v].concat(C).reduce(function(wt,tt){return wt.concat(K(tt)===Ee?no(t,{placement:tt,boundary:l,rootBoundary:f,padding:u,flipVariations:y,allowedAutoPlacements:m}):tt)},[]),E=t.rects.reference,b=t.rects.popper,A=new Map,$=!0,O=_[0],S=0;S<_.length;S++){var N=_[S],H=K(N),x=Dt(N)===_t,ct=[L,I].indexOf(H)>=0,dt=ct?"width":"height",k=kt(t,{placement:N,boundary:l,rootBoundary:f,altBoundary:p,padding:u}),B=ct?x?M:D:x?I:L;E[dt]>b[dt]&&(B=fe(B));var te=fe(B),ut=[];if(o&&ut.push(k[H]<=0),a&&ut.push(k[B]<=0,k[te]<=0),ut.every(function(wt){return wt})){O=N,$=!1;break}A.set(N,ut)}if($)for(var ee=y?3:1,Oe=function(tt){var Bt=_.find(function(ne){var ft=A.get(ne);if(ft)return ft.slice(0,tt).every(function($e){return $e})});if(Bt)return O=Bt,"break"},Ht=ee;Ht>0;Ht--){var se=Oe(Ht);if(se==="break")break}t.placement!==O&&(t.modifiersData[n]._skip=!0,t.placement=O,t.reset=!0)}}const Ln={name:"flip",enabled:!0,phase:"main",fn:oo,requiresIfExists:["offset"],data:{_skip:!1}};function Ns(s,t,e){return e===void 0&&(e={x:0,y:0}),{top:s.top-t.height-e.y,right:s.right-t.width+e.x,bottom:s.bottom-t.height+e.y,left:s.left-t.width-e.x}}function xs(s){return[L,M,I,D].some(function(t){return s[t]>=0})}function ro(s){var t=s.state,e=s.name,n=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,r=kt(t,{elementContext:"reference"}),a=kt(t,{altBoundary:!0}),c=Ns(r,n),u=Ns(a,i,o),l=xs(c),f=xs(u);t.modifiersData[e]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}const Dn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ro};function ao(s,t,e){var n=K(s),i=[D,L].indexOf(n)>=0?-1:1,o=typeof e=="function"?e(Object.assign({},t,{placement:s})):e,r=o[0],a=o[1];return r=r||0,a=(a||0)*i,[D,M].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}function lo(s){var t=s.state,e=s.options,n=s.name,i=e.offset,o=i===void 0?[0,0]:i,r=Je.reduce(function(l,f){return l[f]=ao(f,t.rects,o),l},{}),a=r[t.placement],c=a.x,u=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=r}const kn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:lo};function co(s){var t=s.state,e=s.name;t.modifiersData[e]=xn({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const ls={name:"popperOffsets",enabled:!0,phase:"read",fn:co,data:{}};function uo(s){return s==="x"?"y":"x"}function fo(s){var t=s.state,e=s.options,n=s.name,i=e.mainAxis,o=i===void 0?!0:i,r=e.altAxis,a=r===void 0?!1:r,c=e.boundary,u=e.rootBoundary,l=e.altBoundary,f=e.padding,p=e.tether,h=p===void 0?!0:p,y=e.tetherOffset,m=y===void 0?0:y,v=kt(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:l}),w=K(t.placement),T=Dt(t.placement),C=!T,_=ss(w),E=uo(_),b=t.modifiersData.popperOffsets,A=t.rects.reference,$=t.rects.popper,O=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,S=typeof O=="number"?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(!!b){if(o){var x,ct=_==="y"?L:D,dt=_==="y"?I:M,k=_==="y"?"height":"width",B=b[_],te=B+v[ct],ut=B-v[dt],ee=h?-$[k]/2:0,Oe=T===_t?A[k]:$[k],Ht=T===_t?-$[k]:-A[k],se=t.elements.arrow,wt=h&&se?es(se):{width:0,height:0},tt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Cn(),Bt=tt[ct],ne=tt[dt],ft=Ut(0,A[k],wt[k]),$e=C?A[k]/2-ee-ft-Bt-S.mainAxis:Oe-ft-Bt-S.mainAxis,Di=C?-A[k]/2+ee+ft+ne+S.mainAxis:Ht+ft+ne+S.mainAxis,Ne=t.elements.arrow&&qt(t.elements.arrow),ki=Ne?_==="y"?Ne.clientTop||0:Ne.clientLeft||0:0,ms=(x=N==null?void 0:N[_])!=null?x:0,Ii=B+$e-ms-ki,Mi=B+Di-ms,_s=Ut(h?ge(te,Ii):te,B,h?mt(ut,Mi):ut);b[_]=_s,H[_]=_s-B}if(a){var vs,Pi=_==="x"?L:D,Ri=_==="x"?I:M,ht=b[E],ie=E==="y"?"height":"width",Es=ht+v[Pi],bs=ht-v[Ri],xe=[L,D].indexOf(w)!==-1,ys=(vs=N==null?void 0:N[E])!=null?vs:0,ws=xe?Es:ht-A[ie]-$[ie]-ys+S.altAxis,As=xe?ht+A[ie]+$[ie]-ys-S.altAxis:bs,Ts=h&&xe?Wi(ws,ht,As):Ut(h?ws:Es,ht,h?As:bs);b[E]=Ts,H[E]=Ts-ht}t.modifiersData[n]=H}}const In={name:"preventOverflow",enabled:!0,phase:"main",fn:fo,requiresIfExists:["offset"]};function ho(s){return{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}}function po(s){return s===V(s)||!P(s)?os(s):ho(s)}function go(s){var t=s.getBoundingClientRect(),e=xt(t.width)/s.offsetWidth||1,n=xt(t.height)/s.offsetHeight||1;return e!==1||n!==1}function mo(s,t,e){e===void 0&&(e=!1);var n=P(t),i=P(t)&&go(t),o=rt(t),r=Lt(s,i,e),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!e)&&((U(t)!=="body"||as(o))&&(a=po(t)),P(t)?(c=Lt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):o&&(c.x=rs(o))),{x:r.left+a.scrollLeft-c.x,y:r.top+a.scrollTop-c.y,width:r.width,height:r.height}}function _o(s){var t=new Map,e=new Set,n=[];s.forEach(function(o){t.set(o.name,o)});function i(o){e.add(o.name);var r=[].concat(o.requires||[],o.requiresIfExists||[]);r.forEach(function(a){if(!e.has(a)){var c=t.get(a);c&&i(c)}}),n.push(o)}return s.forEach(function(o){e.has(o.name)||i(o)}),n}function vo(s){var t=_o(s);return wn.reduce(function(e,n){return e.concat(t.filter(function(i){return i.phase===n}))},[])}function Eo(s){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(s())})})),t}}function bo(s){var t=s.reduce(function(e,n){var i=e[n.name];return e[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,e},{});return Object.keys(t).map(function(e){return t[e]})}var Ls={placement:"bottom",modifiers:[],strategy:"absolute"};function Ds(){for(var s=arguments.length,t=new Array(s),e=0;e<s;e++)t[e]=arguments[e];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function ye(s){s===void 0&&(s={});var t=s,e=t.defaultModifiers,n=e===void 0?[]:e,i=t.defaultOptions,o=i===void 0?Ls:i;return function(a,c,u){u===void 0&&(u=o);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ls,o),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},f=[],p=!1,h={state:l,setOptions:function(w){var T=typeof w=="function"?w(l.options):w;m(),l.options=Object.assign({},o,l.options,T),l.scrollParents={reference:vt(a)?zt(a):a.contextElement?zt(a.contextElement):[],popper:zt(c)};var C=vo(bo([].concat(n,l.options.modifiers)));return l.orderedModifiers=C.filter(function(_){return _.enabled}),y(),h.update()},forceUpdate:function(){if(!p){var w=l.elements,T=w.reference,C=w.popper;if(!!Ds(T,C)){l.rects={reference:mo(T,qt(C),l.options.strategy==="fixed"),popper:es(C)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(S){return l.modifiersData[S.name]=Object.assign({},S.data)});for(var _=0;_<l.orderedModifiers.length;_++){if(l.reset===!0){l.reset=!1,_=-1;continue}var E=l.orderedModifiers[_],b=E.fn,A=E.options,$=A===void 0?{}:A,O=E.name;typeof b=="function"&&(l=b({state:l,options:$,name:O,instance:h})||l)}}}},update:Eo(function(){return new Promise(function(v){h.forceUpdate(),v(l)})}),destroy:function(){m(),p=!0}};if(!Ds(a,c))return h;h.setOptions(u).then(function(v){!p&&u.onFirstUpdate&&u.onFirstUpdate(v)});function y(){l.orderedModifiers.forEach(function(v){var w=v.name,T=v.options,C=T===void 0?{}:T,_=v.effect;if(typeof _=="function"){var E=_({state:l,name:w,instance:h,options:C}),b=function(){};f.push(E||b)}})}function m(){f.forEach(function(v){return v()}),f=[]}return h}}var yo=ye(),wo=[is,ls,ns,ts],Ao=ye({defaultModifiers:wo}),To=[is,ls,ns,ts,kn,Ln,In,$n,Dn],cs=ye({defaultModifiers:To});const Mn=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:ye,detectOverflow:kt,createPopperBase:yo,createPopper:cs,createPopperLite:Ao,top:L,bottom:I,right:M,left:D,auto:Ee,basePlacements:Pt,start:_t,end:Nt,clippingParents:un,viewport:Qe,popper:Ct,reference:fn,variationPlacements:Ke,placements:Je,beforeRead:hn,read:pn,afterRead:gn,beforeMain:mn,main:_n,afterMain:vn,beforeWrite:En,write:bn,afterWrite:yn,modifierPhases:wn,applyStyles:ts,arrow:$n,computeStyles:ns,eventListeners:is,flip:Ln,hide:Dn,offset:kn,popperOffsets:ls,preventOverflow:In},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Co=1e6,So=1e3,ze="transitionend",Oo=s=>s==null?`${s}`:Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase(),$o=s=>{do s+=Math.floor(Math.random()*Co);while(document.getElementById(s));return s},Pn=s=>{let t=s.getAttribute("data-bs-target");if(!t||t==="#"){let e=s.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t},Rn=s=>{const t=Pn(s);return t&&document.querySelector(t)?t:null},G=s=>{const t=Pn(s);return t?document.querySelector(t):null},No=s=>{if(!s)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(s);const n=Number.parseFloat(t),i=Number.parseFloat(e);return!n&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*So)},Vn=s=>{s.dispatchEvent(new Event(ze))},q=s=>!s||typeof s!="object"?!1:(typeof s.jquery<"u"&&(s=s[0]),typeof s.nodeType<"u"),nt=s=>q(s)?s.jquery?s[0]:s:typeof s=="string"&&s.length>0?document.querySelector(s):null,Rt=s=>{if(!q(s)||s.getClientRects().length===0)return!1;const t=getComputedStyle(s).getPropertyValue("visibility")==="visible",e=s.closest("details:not([open])");if(!e)return t;if(e!==s){const n=s.closest("summary");if(n&&n.parentNode!==e||n===null)return!1}return t},it=s=>!s||s.nodeType!==Node.ELEMENT_NODE||s.classList.contains("disabled")?!0:typeof s.disabled<"u"?s.disabled:s.hasAttribute("disabled")&&s.getAttribute("disabled")!=="false",jn=s=>{if(!document.documentElement.attachShadow)return null;if(typeof s.getRootNode=="function"){const t=s.getRootNode();return t instanceof ShadowRoot?t:null}return s instanceof ShadowRoot?s:s.parentNode?jn(s.parentNode):null},me=()=>{},Xt=s=>{s.offsetHeight},Hn=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Le=[],xo=s=>{document.readyState==="loading"?(Le.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Le)t()}),Le.push(s)):s()},R=()=>document.documentElement.dir==="rtl",j=s=>{xo(()=>{const t=Hn();if(t){const e=s.NAME,n=t.fn[e];t.fn[e]=s.jQueryInterface,t.fn[e].Constructor=s,t.fn[e].noConflict=()=>(t.fn[e]=n,s.jQueryInterface)}})},z=s=>{typeof s=="function"&&s()},Bn=(s,t,e=!0)=>{if(!e){z(s);return}const n=5,i=No(t)+n;let o=!1;const r=({target:a})=>{a===t&&(o=!0,t.removeEventListener(ze,r),z(s))};t.addEventListener(ze,r),setTimeout(()=>{o||Vn(t)},i)},ds=(s,t,e,n)=>{const i=s.length;let o=s.indexOf(t);return o===-1?!e&&n?s[i-1]:s[0]:(o+=e?1:-1,n&&(o=(o+i)%i),s[Math.max(0,Math.min(o,i-1))])},Lo=/[^.]*(?=\..*)\.|.*/,Do=/\..*/,ko=/::\d+$/,De={};let ks=1;const Wn={mouseenter:"mouseover",mouseleave:"mouseout"},Io=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Fn(s,t){return t&&`${t}::${ks++}`||s.uidEvent||ks++}function Kn(s){const t=Fn(s);return s.uidEvent=t,De[t]=De[t]||{},De[t]}function Mo(s,t){return function e(n){return us(n,{delegateTarget:s}),e.oneOff&&d.off(s,n.type,t),t.apply(s,[n])}}function Po(s,t,e){return function n(i){const o=s.querySelectorAll(t);for(let{target:r}=i;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return us(i,{delegateTarget:r}),n.oneOff&&d.off(s,i.type,t,e),e.apply(r,[i])}}function Yn(s,t,e=null){return Object.values(s).find(n=>n.callable===t&&n.delegationSelector===e)}function Un(s,t,e){const n=typeof t=="string",i=n?e:t||e;let o=zn(s);return Io.has(o)||(o=s),[n,i,o]}function Is(s,t,e,n,i){if(typeof t!="string"||!s)return;let[o,r,a]=Un(t,e,n);t in Wn&&(r=(y=>function(m){if(!m.relatedTarget||m.relatedTarget!==m.delegateTarget&&!m.delegateTarget.contains(m.relatedTarget))return y.call(this,m)})(r));const c=Kn(s),u=c[a]||(c[a]={}),l=Yn(u,r,o?e:null);if(l){l.oneOff=l.oneOff&&i;return}const f=Fn(r,t.replace(Lo,"")),p=o?Po(s,e,r):Mo(s,r);p.delegationSelector=o?e:null,p.callable=r,p.oneOff=i,p.uidEvent=f,u[f]=p,s.addEventListener(a,p,o)}function Ge(s,t,e,n,i){const o=Yn(t[e],n,i);!o||(s.removeEventListener(e,o,Boolean(i)),delete t[e][o.uidEvent])}function Ro(s,t,e,n){const i=t[e]||{};for(const o of Object.keys(i))if(o.includes(n)){const r=i[o];Ge(s,t,e,r.callable,r.delegationSelector)}}function zn(s){return s=s.replace(Do,""),Wn[s]||s}const d={on(s,t,e,n){Is(s,t,e,n,!1)},one(s,t,e,n){Is(s,t,e,n,!0)},off(s,t,e,n){if(typeof t!="string"||!s)return;const[i,o,r]=Un(t,e,n),a=r!==t,c=Kn(s),u=c[r]||{},l=t.startsWith(".");if(typeof o<"u"){if(!Object.keys(u).length)return;Ge(s,c,r,o,i?e:null);return}if(l)for(const f of Object.keys(c))Ro(s,c,f,t.slice(1));for(const f of Object.keys(u)){const p=f.replace(ko,"");if(!a||t.includes(p)){const h=u[f];Ge(s,c,r,h.callable,h.delegationSelector)}}},trigger(s,t,e){if(typeof t!="string"||!s)return null;const n=Hn(),i=zn(t),o=t!==i;let r=null,a=!0,c=!0,u=!1;o&&n&&(r=n.Event(t,e),n(s).trigger(r),a=!r.isPropagationStopped(),c=!r.isImmediatePropagationStopped(),u=r.isDefaultPrevented());let l=new Event(t,{bubbles:a,cancelable:!0});return l=us(l,e),u&&l.preventDefault(),c&&s.dispatchEvent(l),l.defaultPrevented&&r&&r.preventDefault(),l}};function us(s,t){for(const[e,n]of Object.entries(t||{}))try{s[e]=n}catch{Object.defineProperty(s,e,{configurable:!0,get(){return n}})}return s}const et=new Map,ke={set(s,t,e){et.has(s)||et.set(s,new Map);const n=et.get(s);if(!n.has(t)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(t,e)},get(s,t){return et.has(s)&&et.get(s).get(t)||null},remove(s,t){if(!et.has(s))return;const e=et.get(s);e.delete(t),e.size===0&&et.delete(s)}};function Ms(s){if(s==="true")return!0;if(s==="false")return!1;if(s===Number(s).toString())return Number(s);if(s===""||s==="null")return null;if(typeof s!="string")return s;try{return JSON.parse(decodeURIComponent(s))}catch{return s}}function Ie(s){return s.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const X={setDataAttribute(s,t,e){s.setAttribute(`data-bs-${Ie(t)}`,e)},removeDataAttribute(s,t){s.removeAttribute(`data-bs-${Ie(t)}`)},getDataAttributes(s){if(!s)return{};const t={},e=Object.keys(s.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of e){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=Ms(s.dataset[n])}return t},getDataAttribute(s,t){return Ms(s.getAttribute(`data-bs-${Ie(t)}`))}};class Qt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const n=q(e)?X.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...q(e)?X.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const i=e[n],o=t[n],r=q(o)?"element":Oo(o);if(!new RegExp(i).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${i}".`)}}}const Vo="5.2.3";class W extends Qt{constructor(t,e){super(),t=nt(t),t&&(this._element=t,this._config=this._getConfig(e),ke.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ke.remove(this._element,this.constructor.DATA_KEY),d.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,n=!0){Bn(t,e,n)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return ke.get(nt(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return Vo}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const we=(s,t="hide")=>{const e=`click.dismiss${s.EVENT_KEY}`,n=s.NAME;d.on(document,e,`[data-bs-dismiss="${n}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),it(this))return;const o=G(this)||this.closest(`.${n}`);s.getOrCreateInstance(o)[t]()})},jo="alert",Ho="bs.alert",Gn=`.${Ho}`,Bo=`close${Gn}`,Wo=`closed${Gn}`,Fo="fade",Ko="show";class Ae extends W{static get NAME(){return jo}close(){if(d.trigger(this._element,Bo).defaultPrevented)return;this._element.classList.remove(Ko);const e=this._element.classList.contains(Fo);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),d.trigger(this._element,Wo),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Ae.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}we(Ae,"close");j(Ae);const Yo="button",Uo="bs.button",zo=`.${Uo}`,Go=".data-api",qo="active",Ps='[data-bs-toggle="button"]',Xo=`click${zo}${Go}`;class Te extends W{static get NAME(){return Yo}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(qo))}static jQueryInterface(t){return this.each(function(){const e=Te.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}d.on(document,Xo,Ps,s=>{s.preventDefault();const t=s.target.closest(Ps);Te.getOrCreateInstance(t).toggle()});j(Te);const g={find(s,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,s))},findOne(s,t=document.documentElement){return Element.prototype.querySelector.call(t,s)},children(s,t){return[].concat(...s.children).filter(e=>e.matches(t))},parents(s,t){const e=[];let n=s.parentNode.closest(t);for(;n;)e.push(n),n=n.parentNode.closest(t);return e},prev(s,t){let e=s.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(s,t){let e=s.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(s){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,s).filter(e=>!it(e)&&Rt(e))}},Qo="swipe",Vt=".bs.swipe",Jo=`touchstart${Vt}`,Zo=`touchmove${Vt}`,tr=`touchend${Vt}`,er=`pointerdown${Vt}`,sr=`pointerup${Vt}`,nr="touch",ir="pen",or="pointer-event",rr=40,ar={endCallback:null,leftCallback:null,rightCallback:null},lr={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class _e extends Qt{constructor(t,e){super(),this._element=t,!(!t||!_e.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return ar}static get DefaultType(){return lr}static get NAME(){return Qo}dispose(){d.off(this._element,Vt)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),z(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=rr)return;const e=t/this._deltaX;this._deltaX=0,e&&z(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(d.on(this._element,er,t=>this._start(t)),d.on(this._element,sr,t=>this._end(t)),this._element.classList.add(or)):(d.on(this._element,Jo,t=>this._start(t)),d.on(this._element,Zo,t=>this._move(t)),d.on(this._element,tr,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===ir||t.pointerType===nr)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const cr="carousel",dr="bs.carousel",at=`.${dr}`,qn=".data-api",ur="ArrowLeft",fr="ArrowRight",hr=500,Wt="next",At="prev",St="left",he="right",pr=`slide${at}`,Me=`slid${at}`,gr=`keydown${at}`,mr=`mouseenter${at}`,_r=`mouseleave${at}`,vr=`dragstart${at}`,Er=`load${at}${qn}`,br=`click${at}${qn}`,Xn="carousel",re="active",yr="slide",wr="carousel-item-end",Ar="carousel-item-start",Tr="carousel-item-next",Cr="carousel-item-prev",Qn=".active",Jn=".carousel-item",Sr=Qn+Jn,Or=".carousel-item img",$r=".carousel-indicators",Nr="[data-bs-slide], [data-bs-slide-to]",xr='[data-bs-ride="carousel"]',Lr={[ur]:he,[fr]:St},Dr={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},kr={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Jt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=g.findOne($r,this._element),this._addEventListeners(),this._config.ride===Xn&&this.cycle()}static get Default(){return Dr}static get DefaultType(){return kr}static get NAME(){return cr}next(){this._slide(Wt)}nextWhenVisible(){!document.hidden&&Rt(this._element)&&this.next()}prev(){this._slide(At)}pause(){this._isSliding&&Vn(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(!!this._config.ride){if(this._isSliding){d.one(this._element,Me,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){d.one(this._element,Me,()=>this.to(t));return}const n=this._getItemIndex(this._getActive());if(n===t)return;const i=t>n?Wt:At;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&d.on(this._element,gr,t=>this._keydown(t)),this._config.pause==="hover"&&(d.on(this._element,mr,()=>this.pause()),d.on(this._element,_r,()=>this._maybeEnableCycle())),this._config.touch&&_e.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of g.find(Or,this._element))d.on(n,vr,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(St)),rightCallback:()=>this._slide(this._directionToOrder(he)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),hr+this._config.interval))}};this._swipeHelper=new _e(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Lr[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=g.findOne(Qn,this._indicatorsElement);e.classList.remove(re),e.removeAttribute("aria-current");const n=g.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);n&&(n.classList.add(re),n.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const n=this._getActive(),i=t===Wt,o=e||ds(this._getItems(),n,i,this._config.wrap);if(o===n)return;const r=this._getItemIndex(o),a=h=>d.trigger(this._element,h,{relatedTarget:o,direction:this._orderToDirection(t),from:this._getItemIndex(n),to:r});if(a(pr).defaultPrevented||!n||!o)return;const u=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=o;const l=i?Ar:wr,f=i?Tr:Cr;o.classList.add(f),Xt(o),n.classList.add(l),o.classList.add(l);const p=()=>{o.classList.remove(l,f),o.classList.add(re),n.classList.remove(re,f,l),this._isSliding=!1,a(Me)};this._queueCallback(p,n,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(yr)}_getActive(){return g.findOne(Sr,this._element)}_getItems(){return g.find(Jn,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return R()?t===St?At:Wt:t===St?Wt:At}_orderToDirection(t){return R()?t===At?St:he:t===At?he:St}static jQueryInterface(t){return this.each(function(){const e=Jt.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}d.on(document,br,Nr,function(s){const t=G(this);if(!t||!t.classList.contains(Xn))return;s.preventDefault();const e=Jt.getOrCreateInstance(t),n=this.getAttribute("data-bs-slide-to");if(n){e.to(n),e._maybeEnableCycle();return}if(X.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});d.on(window,Er,()=>{const s=g.find(xr);for(const t of s)Jt.getOrCreateInstance(t)});j(Jt);const Ir="collapse",Mr="bs.collapse",Zt=`.${Mr}`,Pr=".data-api",Rr=`show${Zt}`,Vr=`shown${Zt}`,jr=`hide${Zt}`,Hr=`hidden${Zt}`,Br=`click${Zt}${Pr}`,Pe="show",$t="collapse",ae="collapsing",Wr="collapsed",Fr=`:scope .${$t} .${$t}`,Kr="collapse-horizontal",Yr="width",Ur="height",zr=".collapse.show, .collapse.collapsing",qe='[data-bs-toggle="collapse"]',Gr={parent:null,toggle:!0},qr={parent:"(null|element)",toggle:"boolean"};class Gt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=g.find(qe);for(const i of n){const o=Rn(i),r=g.find(o).filter(a=>a===this._element);o!==null&&r.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Gr}static get DefaultType(){return qr}static get NAME(){return Ir}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(zr).filter(a=>a!==this._element).map(a=>Gt.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||d.trigger(this._element,Rr).defaultPrevented)return;for(const a of t)a.hide();const n=this._getDimension();this._element.classList.remove($t),this._element.classList.add(ae),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ae),this._element.classList.add($t,Pe),this._element.style[n]="",d.trigger(this._element,Vr)},r=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[n]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown()||d.trigger(this._element,jr).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Xt(this._element),this._element.classList.add(ae),this._element.classList.remove($t,Pe);for(const i of this._triggerArray){const o=G(i);o&&!this._isShown(o)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(ae),this._element.classList.add($t),d.trigger(this._element,Hr)};this._element.style[e]="",this._queueCallback(n,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Pe)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=nt(t.parent),t}_getDimension(){return this._element.classList.contains(Kr)?Yr:Ur}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(qe);for(const e of t){const n=G(e);n&&this._addAriaAndCollapsedClass([e],this._isShown(n))}}_getFirstLevelChildren(t){const e=g.find(Fr,this._config.parent);return g.find(t,this._config.parent).filter(n=>!e.includes(n))}_addAriaAndCollapsedClass(t,e){if(!!t.length)for(const n of t)n.classList.toggle(Wr,!e),n.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const n=Gt.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}d.on(document,Br,qe,function(s){(s.target.tagName==="A"||s.delegateTarget&&s.delegateTarget.tagName==="A")&&s.preventDefault();const t=Rn(this),e=g.find(t);for(const n of e)Gt.getOrCreateInstance(n,{toggle:!1}).toggle()});j(Gt);const Rs="dropdown",Xr="bs.dropdown",Et=`.${Xr}`,fs=".data-api",Qr="Escape",Vs="Tab",Jr="ArrowUp",js="ArrowDown",Zr=2,ta=`hide${Et}`,ea=`hidden${Et}`,sa=`show${Et}`,na=`shown${Et}`,Zn=`click${Et}${fs}`,ti=`keydown${Et}${fs}`,ia=`keyup${Et}${fs}`,Ot="show",oa="dropup",ra="dropend",aa="dropstart",la="dropup-center",ca="dropdown-center",pt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',da=`${pt}.${Ot}`,pe=".dropdown-menu",ua=".navbar",fa=".navbar-nav",ha=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",pa=R()?"top-end":"top-start",ga=R()?"top-start":"top-end",ma=R()?"bottom-end":"bottom-start",_a=R()?"bottom-start":"bottom-end",va=R()?"left-start":"right-start",Ea=R()?"right-start":"left-start",ba="top",ya="bottom",wa={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Aa={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Y extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=g.next(this._element,pe)[0]||g.prev(this._element,pe)[0]||g.findOne(pe,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return wa}static get DefaultType(){return Aa}static get NAME(){return Rs}toggle(){return this._isShown()?this.hide():this.show()}show(){if(it(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!d.trigger(this._element,sa,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(fa))for(const n of[].concat(...document.body.children))d.on(n,"mouseover",me);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ot),this._element.classList.add(Ot),d.trigger(this._element,na,t)}}hide(){if(it(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!d.trigger(this._element,ta,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))d.off(n,"mouseover",me);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ot),this._element.classList.remove(Ot),this._element.setAttribute("aria-expanded","false"),X.removeDataAttribute(this._menu,"popper"),d.trigger(this._element,ea,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!q(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Rs.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Mn>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:q(this._config.reference)?t=nt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=cs(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ot)}_getPlacement(){const t=this._parent;if(t.classList.contains(ra))return va;if(t.classList.contains(aa))return Ea;if(t.classList.contains(la))return ba;if(t.classList.contains(ca))return ya;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(oa)?e?ga:pa:e?_a:ma}_detectNavbar(){return this._element.closest(ua)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(X.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const n=g.find(ha,this._menu).filter(i=>Rt(i));!n.length||ds(n,e,t===js,!n.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=Y.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Zr||t.type==="keyup"&&t.key!==Vs)return;const e=g.find(da);for(const n of e){const i=Y.getInstance(n);if(!i||i._config.autoClose===!1)continue;const o=t.composedPath(),r=o.includes(i._menu);if(o.includes(i._element)||i._config.autoClose==="inside"&&!r||i._config.autoClose==="outside"&&r||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Vs||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),n=t.key===Qr,i=[Jr,js].includes(t.key);if(!i&&!n||e&&!n)return;t.preventDefault();const o=this.matches(pt)?this:g.prev(this,pt)[0]||g.next(this,pt)[0]||g.findOne(pt,t.delegateTarget.parentNode),r=Y.getOrCreateInstance(o);if(i){t.stopPropagation(),r.show(),r._selectMenuItem(t);return}r._isShown()&&(t.stopPropagation(),r.hide(),o.focus())}}d.on(document,ti,pt,Y.dataApiKeydownHandler);d.on(document,ti,pe,Y.dataApiKeydownHandler);d.on(document,Zn,Y.clearMenus);d.on(document,ia,Y.clearMenus);d.on(document,Zn,pt,function(s){s.preventDefault(),Y.getOrCreateInstance(this).toggle()});j(Y);const Hs=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Bs=".sticky-top",le="padding-right",Ws="margin-right";class Xe{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,le,e=>e+t),this._setElementAttributes(Hs,le,e=>e+t),this._setElementAttributes(Bs,Ws,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,le),this._resetElementAttributes(Hs,le),this._resetElementAttributes(Bs,Ws)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const i=this.getWidth(),o=r=>{if(r!==this._element&&window.innerWidth>r.clientWidth+i)return;this._saveInitialAttribute(r,e);const a=window.getComputedStyle(r).getPropertyValue(e);r.style.setProperty(e,`${n(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,o)}_saveInitialAttribute(t,e){const n=t.style.getPropertyValue(e);n&&X.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=i=>{const o=X.getDataAttribute(i,e);if(o===null){i.style.removeProperty(e);return}X.removeDataAttribute(i,e),i.style.setProperty(e,o)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){if(q(t)){e(t);return}for(const n of g.find(t,this._element))e(n)}}const ei="backdrop",Ta="fade",Fs="show",Ks=`mousedown.bs.${ei}`,Ca={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Sa={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class si extends Qt{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ca}static get DefaultType(){return Sa}static get NAME(){return ei}show(t){if(!this._config.isVisible){z(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Xt(e),e.classList.add(Fs),this._emulateAnimation(()=>{z(t)})}hide(t){if(!this._config.isVisible){z(t);return}this._getElement().classList.remove(Fs),this._emulateAnimation(()=>{this.dispose(),z(t)})}dispose(){!this._isAppended||(d.off(this._element,Ks),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Ta),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=nt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),d.on(t,Ks,()=>{z(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Bn(t,this._getElement(),this._config.isAnimated)}}const Oa="focustrap",$a="bs.focustrap",ve=`.${$a}`,Na=`focusin${ve}`,xa=`keydown.tab${ve}`,La="Tab",Da="forward",Ys="backward",ka={autofocus:!0,trapElement:null},Ia={autofocus:"boolean",trapElement:"element"};class ni extends Qt{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ka}static get DefaultType(){return Ia}static get NAME(){return Oa}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),d.off(document,ve),d.on(document,Na,t=>this._handleFocusin(t)),d.on(document,xa,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,d.off(document,ve))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const n=g.focusableChildren(e);n.length===0?e.focus():this._lastTabNavDirection===Ys?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){t.key===La&&(this._lastTabNavDirection=t.shiftKey?Ys:Da)}}const Ma="modal",Pa="bs.modal",F=`.${Pa}`,Ra=".data-api",Va="Escape",ja=`hide${F}`,Ha=`hidePrevented${F}`,ii=`hidden${F}`,oi=`show${F}`,Ba=`shown${F}`,Wa=`resize${F}`,Fa=`click.dismiss${F}`,Ka=`mousedown.dismiss${F}`,Ya=`keydown.dismiss${F}`,Ua=`click${F}${Ra}`,Us="modal-open",za="fade",zs="show",Re="modal-static",Ga=".modal.show",qa=".modal-dialog",Xa=".modal-body",Qa='[data-bs-toggle="modal"]',Ja={backdrop:!0,focus:!0,keyboard:!0},Za={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class It extends W{constructor(t,e){super(t,e),this._dialog=g.findOne(qa,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Xe,this._addEventListeners()}static get Default(){return Ja}static get DefaultType(){return Za}static get NAME(){return Ma}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||d.trigger(this._element,oi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Us),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||d.trigger(this._element,ja).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(zs),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])d.off(t,F);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new si({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ni({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=g.findOne(Xa,this._dialog);e&&(e.scrollTop=0),Xt(this._element),this._element.classList.add(zs);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,d.trigger(this._element,Ba,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){d.on(this._element,Ya,t=>{if(t.key===Va){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),d.on(window,Wa,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),d.on(this._element,Ka,t=>{d.one(this._element,Fa,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Us),this._resetAdjustments(),this._scrollBar.reset(),d.trigger(this._element,ii)})}_isAnimated(){return this._element.classList.contains(za)}_triggerBackdropTransition(){if(d.trigger(this._element,Ha).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(Re)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Re),this._queueCallback(()=>{this._element.classList.remove(Re),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const i=R()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!n&&t){const i=R()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const n=It.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](e)}})}}d.on(document,Ua,Qa,function(s){const t=G(this);["A","AREA"].includes(this.tagName)&&s.preventDefault(),d.one(t,oi,i=>{i.defaultPrevented||d.one(t,ii,()=>{Rt(this)&&this.focus()})});const e=g.findOne(Ga);e&&It.getInstance(e).hide(),It.getOrCreateInstance(t).toggle(this)});we(It);j(It);const tl="offcanvas",el="bs.offcanvas",Z=`.${el}`,ri=".data-api",sl=`load${Z}${ri}`,nl="Escape",Gs="show",qs="showing",Xs="hiding",il="offcanvas-backdrop",ai=".offcanvas.show",ol=`show${Z}`,rl=`shown${Z}`,al=`hide${Z}`,Qs=`hidePrevented${Z}`,li=`hidden${Z}`,ll=`resize${Z}`,cl=`click${Z}${ri}`,dl=`keydown.dismiss${Z}`,ul='[data-bs-toggle="offcanvas"]',fl={backdrop:!0,keyboard:!0,scroll:!1},hl={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ot extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return fl}static get DefaultType(){return hl}static get NAME(){return tl}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||d.trigger(this._element,ol,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Xe().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(qs);const n=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Gs),this._element.classList.remove(qs),d.trigger(this._element,rl,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown||d.trigger(this._element,al).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Xs),this._backdrop.hide();const e=()=>{this._element.classList.remove(Gs,Xs),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Xe().reset(),d.trigger(this._element,li)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){d.trigger(this._element,Qs);return}this.hide()},e=Boolean(this._config.backdrop);return new si({className:il,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new ni({trapElement:this._element})}_addEventListeners(){d.on(this._element,dl,t=>{if(t.key===nl){if(!this._config.keyboard){d.trigger(this._element,Qs);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const e=ot.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}d.on(document,cl,ul,function(s){const t=G(this);if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),it(this))return;d.one(t,li,()=>{Rt(this)&&this.focus()});const e=g.findOne(ai);e&&e!==t&&ot.getInstance(e).hide(),ot.getOrCreateInstance(t).toggle(this)});d.on(window,sl,()=>{for(const s of g.find(ai))ot.getOrCreateInstance(s).show()});d.on(window,ll,()=>{for(const s of g.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(s).position!=="fixed"&&ot.getOrCreateInstance(s).hide()});we(ot);j(ot);const pl=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),gl=/^aria-[\w-]*$/i,ml=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,_l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,vl=(s,t)=>{const e=s.nodeName.toLowerCase();return t.includes(e)?pl.has(e)?Boolean(ml.test(s.nodeValue)||_l.test(s.nodeValue)):!0:t.filter(n=>n instanceof RegExp).some(n=>n.test(e))},ci={"*":["class","dir","id","lang","role",gl],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function El(s,t,e){if(!s.length)return s;if(e&&typeof e=="function")return e(s);const i=new window.DOMParser().parseFromString(s,"text/html"),o=[].concat(...i.body.querySelectorAll("*"));for(const r of o){const a=r.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){r.remove();continue}const c=[].concat(...r.attributes),u=[].concat(t["*"]||[],t[a]||[]);for(const l of c)vl(l,u)||r.removeAttribute(l.nodeName)}return i.body.innerHTML}const bl="TemplateFactory",yl={allowList:ci,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},wl={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Al={entry:"(string|element|function|null)",selector:"(string|element)"};class Tl extends Qt{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return yl}static get DefaultType(){return wl}static get NAME(){return bl}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,o]of Object.entries(this._config.content))this._setContent(t,o,i);const e=t.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&e.classList.add(...n.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,n]of Object.entries(t))super._typeCheckConfig({selector:e,entry:n},Al)}_setContent(t,e,n){const i=g.findOne(n,t);if(!!i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(q(e)){this._putElementInTemplate(nt(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?El(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return typeof t=="function"?t(this):t}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Cl="tooltip",Sl=new Set(["sanitize","allowList","sanitizeFn"]),Ve="fade",Ol="modal",ce="show",$l=".tooltip-inner",Js=`.${Ol}`,Zs="hide.bs.modal",Ft="hover",je="focus",Nl="click",xl="manual",Ll="hide",Dl="hidden",kl="show",Il="shown",Ml="inserted",Pl="click",Rl="focusin",Vl="focusout",jl="mouseenter",Hl="mouseleave",Bl={AUTO:"auto",TOP:"top",RIGHT:R()?"left":"right",BOTTOM:"bottom",LEFT:R()?"right":"left"},Wl={allowList:ci,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Fl={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class jt extends W{constructor(t,e){if(typeof Mn>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Wl}static get DefaultType(){return Fl}static get NAME(){return Cl}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(!!this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),d.off(this._element.closest(Js),Zs,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=d.trigger(this._element,this.constructor.eventName(kl)),n=(jn(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!n)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:o}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(o.append(i),d.trigger(this._element,this.constructor.eventName(Ml))),this._popper=this._createPopper(i),i.classList.add(ce),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))d.on(a,"mouseover",me);const r=()=>{d.trigger(this._element,this.constructor.eventName(Il)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(r,this.tip,this._isAnimated())}hide(){if(!this._isShown()||d.trigger(this._element,this.constructor.eventName(Ll)).defaultPrevented)return;if(this._getTipElement().classList.remove(ce),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))d.off(i,"mouseover",me);this._activeTrigger[Nl]=!1,this._activeTrigger[je]=!1,this._activeTrigger[Ft]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),d.trigger(this._element,this.constructor.eventName(Dl)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ve,ce),e.classList.add(`bs-${this.constructor.NAME}-auto`);const n=$o(this.constructor.NAME).toString();return e.setAttribute("id",n),this._isAnimated()&&e.classList.add(Ve),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Tl({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[$l]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ve)}_isShown(){return this.tip&&this.tip.classList.contains(ce)}_createPopper(t){const e=typeof this._config.placement=="function"?this._config.placement.call(this,t,this._element):this._config.placement,n=Bl[e.toUpperCase()];return cs(this._element,t,this._getPopperConfig(n))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return typeof t=="function"?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:n=>{this._getTipElement().setAttribute("data-popper-placement",n.state.placement)}}]};return{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")d.on(this._element,this.constructor.eventName(Pl),this._config.selector,n=>{this._initializeOnDelegatedTarget(n).toggle()});else if(e!==xl){const n=e===Ft?this.constructor.eventName(jl):this.constructor.eventName(Rl),i=e===Ft?this.constructor.eventName(Hl):this.constructor.eventName(Vl);d.on(this._element,n,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusin"?je:Ft]=!0,r._enter()}),d.on(this._element,i,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusout"?je:Ft]=r._element.contains(o.relatedTarget),r._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},d.on(this._element.closest(Js),Zs,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");!t||(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=X.getDataAttributes(this._element);for(const n of Object.keys(e))Sl.has(n)&&delete e[n];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:nt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=jt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}j(jt);const Kl="popover",Yl=".popover-header",Ul=".popover-body",zl={...jt.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Gl={...jt.DefaultType,content:"(null|string|element|function)"};class hs extends jt{static get Default(){return zl}static get DefaultType(){return Gl}static get NAME(){return Kl}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Yl]:this._getTitle(),[Ul]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=hs.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}j(hs);const ql="scrollspy",Xl="bs.scrollspy",ps=`.${Xl}`,Ql=".data-api",Jl=`activate${ps}`,tn=`click${ps}`,Zl=`load${ps}${Ql}`,tc="dropdown-item",Tt="active",ec='[data-bs-spy="scroll"]',He="[href]",sc=".nav, .list-group",en=".nav-link",nc=".nav-item",ic=".list-group-item",oc=`${en}, ${nc} > ${en}, ${ic}`,rc=".dropdown",ac=".dropdown-toggle",lc={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},cc={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ce extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return lc}static get DefaultType(){return cc}static get NAME(){return ql}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=nt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){!this._config.smoothScroll||(d.off(this._config.target,tn),d.on(this._config.target,tn,He,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const n=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:i,behavior:"smooth"});return}n.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=r=>this._targetLinks.get(`#${r.target.id}`),n=r=>{this._previousScrollData.visibleEntryTop=r.target.offsetTop,this._process(e(r))},i=(this._rootElement||document.documentElement).scrollTop,o=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const r of t){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(r));continue}const a=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&a){if(n(r),!i)return;continue}!o&&!a&&n(r)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=g.find(He,this._config.target);for(const e of t){if(!e.hash||it(e))continue;const n=g.findOne(e.hash,this._element);Rt(n)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,n))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Tt),this._activateParents(t),d.trigger(this._element,Jl,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(tc)){g.findOne(ac,t.closest(rc)).classList.add(Tt);return}for(const e of g.parents(t,sc))for(const n of g.prev(e,oc))n.classList.add(Tt)}_clearActiveClass(t){t.classList.remove(Tt);const e=g.find(`${He}.${Tt}`,t);for(const n of e)n.classList.remove(Tt)}static jQueryInterface(t){return this.each(function(){const e=Ce.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}d.on(window,Zl,()=>{for(const s of g.find(ec))Ce.getOrCreateInstance(s)});j(Ce);const dc="tab",uc="bs.tab",bt=`.${uc}`,fc=`hide${bt}`,hc=`hidden${bt}`,pc=`show${bt}`,gc=`shown${bt}`,mc=`click${bt}`,_c=`keydown${bt}`,vc=`load${bt}`,Ec="ArrowLeft",sn="ArrowRight",bc="ArrowUp",nn="ArrowDown",gt="active",on="fade",Be="show",yc="dropdown",wc=".dropdown-toggle",Ac=".dropdown-menu",We=":not(.dropdown-toggle)",Tc='.list-group, .nav, [role="tablist"]',Cc=".nav-item, .list-group-item",Sc=`.nav-link${We}, .list-group-item${We}, [role="tab"]${We}`,di='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Fe=`${Sc}, ${di}`,Oc=`.${gt}[data-bs-toggle="tab"], .${gt}[data-bs-toggle="pill"], .${gt}[data-bs-toggle="list"]`;class Mt extends W{constructor(t){super(t),this._parent=this._element.closest(Tc),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),d.on(this._element,_c,e=>this._keydown(e)))}static get NAME(){return dc}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),n=e?d.trigger(e,fc,{relatedTarget:t}):null;d.trigger(t,pc,{relatedTarget:e}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(gt),this._activate(G(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Be);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),d.trigger(t,gc,{relatedTarget:e})};this._queueCallback(n,t,t.classList.contains(on))}_deactivate(t,e){if(!t)return;t.classList.remove(gt),t.blur(),this._deactivate(G(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Be);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),d.trigger(t,hc,{relatedTarget:e})};this._queueCallback(n,t,t.classList.contains(on))}_keydown(t){if(![Ec,sn,bc,nn].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[sn,nn].includes(t.key),n=ds(this._getChildren().filter(i=>!it(i)),t.target,e,!0);n&&(n.focus({preventScroll:!0}),Mt.getOrCreateInstance(n).show())}_getChildren(){return g.find(Fe,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const n of e)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),n=this._getOuterElement(t);t.setAttribute("aria-selected",e),n!==t&&this._setAttributeIfNotExists(n,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=G(t);!e||(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const n=this._getOuterElement(t);if(!n.classList.contains(yc))return;const i=(o,r)=>{const a=g.findOne(o,n);a&&a.classList.toggle(r,e)};i(wc,gt),i(Ac,Be),n.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,n){t.hasAttribute(e)||t.setAttribute(e,n)}_elemIsActive(t){return t.classList.contains(gt)}_getInnerElement(t){return t.matches(Fe)?t:g.findOne(Fe,t)}_getOuterElement(t){return t.closest(Cc)||t}static jQueryInterface(t){return this.each(function(){const e=Mt.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}d.on(document,mc,di,function(s){["A","AREA"].includes(this.tagName)&&s.preventDefault(),!it(this)&&Mt.getOrCreateInstance(this).show()});d.on(window,vc,()=>{for(const s of g.find(Oc))Mt.getOrCreateInstance(s)});j(Mt);const $c="toast",Nc="bs.toast",lt=`.${Nc}`,xc=`mouseover${lt}`,Lc=`mouseout${lt}`,Dc=`focusin${lt}`,kc=`focusout${lt}`,Ic=`hide${lt}`,Mc=`hidden${lt}`,Pc=`show${lt}`,Rc=`shown${lt}`,Vc="fade",rn="hide",de="show",ue="showing",jc={animation:"boolean",autohide:"boolean",delay:"number"},Hc={animation:!0,autohide:!0,delay:5e3};class Se extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Hc}static get DefaultType(){return jc}static get NAME(){return $c}show(){if(d.trigger(this._element,Pc).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Vc);const e=()=>{this._element.classList.remove(ue),d.trigger(this._element,Rc),this._maybeScheduleHide()};this._element.classList.remove(rn),Xt(this._element),this._element.classList.add(de,ue),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||d.trigger(this._element,Ic).defaultPrevented)return;const e=()=>{this._element.classList.add(rn),this._element.classList.remove(ue,de),d.trigger(this._element,Mc)};this._element.classList.add(ue),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(de),super.dispose()}isShown(){return this._element.classList.contains(de)}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){d.on(this._element,xc,t=>this._onInteraction(t,!0)),d.on(this._element,Lc,t=>this._onInteraction(t,!1)),d.on(this._element,Dc,t=>this._onInteraction(t,!0)),d.on(this._element,kc,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Se.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}we(Se);j(Se);const an=new Map,yt=(s={})=>{const{nameElement:t}=s;return t&&an.set(t,s),an},Bc={xs:"0",s:"433px",sm:"500px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"},Q=s=>window.matchMedia(`(min-width: ${Bc[s]})`).matches,ui="navChange",fi=()=>`
    <div class="flex-grow-1 flex-lg-grow-0">
      <div role="button" class="ms-3" style="width: 130px">
        <img src="/img/navBar/SvgLogo.svg" alt="..." class="w-100" />
      </div>
    </div>
  `,hi=()=>`
    <div style="width: 25px;" role="button">
      <img src="/img/navBar/SvgSearch.svg" alt="..." class="w-100">
    </div>
  `,pi=()=>`
    <div class="d-flex gap-2">
      <button type="button" class="btn btn-light text-primary fw-bold">Login</button>
      <button type="button" class="btn btn-primary fw-bold">Register</button>
    </div>
  `,Kt=(s,t)=>{const e=`
    <span class="original-name fw-normal-2">${t}</span>
    <div class="vstack AnimationLink position-absolute animationLink">
      <span>${t}</span>
      <span class="fw-normal-2">${t}</span>
    </div>
  `;return`
    <a class="nav-link overflow-hidden position-relative" ${s?"":'data-bs-dismiss="offcanvas"'} href="#">${s?e:t}</a>
  `},gs=()=>{const s=Q("lg");return`
    <ul
      id="MenuMain"
      class="navbar-nav flex-lg-grow-1 gap-4 justify-content-lg-center font-openSans"
      data-change
    >
      <li class="nav-item">${Kt(s,"Home")}</li>
      <li class="nav-item">${Kt(s,"Courses")}</li>
      <li class="nav-item">${Kt(s,"Instructor")}</li>
      <li class="nav-item">${Kt(s,"Schedules")}</li>
      <li class="nav-item">${Kt(s,"Contact Us")}</li>
    </ul>
  `};yt({nameElement:"MenuMain",functionElement:gs});const Wc=()=>`
    ${fi()}
    ${gs()}
    ${hi()}
    ${pi()}
  `,Fc=()=>`
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header justify-content-end">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body vstack gap-5">
        ${gs()}
        <div class="hstack justify-content-around">
          ${hi()}
          ${pi()}
        </div>
      </div>
    </div>
  `,Kc=()=>`
    <div role="button" style="width: 35px" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
      <img src="/img/navBar/SvgMenu.svg" alt="..." class="w-100" />
    </div>
    ${fi()}
    <div role="button" style="width: 35px">
      <img src="/img/navBar/SvgLogin.svg" alt="..." class="w-100" />
    </div>
    ${Fc()}
  `,gi=()=>{const s=Q("lg"),t={movil:"container-fluid hstack px-4 py-3 shadow-c2",desktop:"navbar navbar-expand-lg navbar-padding-y-4 mx-5 gap-2"};return`
    <nav
      id="${ui}"
      class="${s?t.desktop:t.movil}"
      data-change
    >
      ${s?"":Kc()} 
      ${s?Wc():""}
    </nav>
  `};yt({nameElement:ui,functionElement:gi});const Yc=()=>{const s=[],t=(e=0)=>`
    <span
      class="d-inline-block overflow-hidden rounded-circle border border-light border-3 position-relative ElementImageRounded"
      style="right: ${e}px;"
    >
      <img src="/img/header/SrHipster.jpg" alt="..." class="w-100" />
    </span>
  `;for(let e=0;e<5;e++)s.push(t(15*e));return s.join("")},Uc=()=>`
    <div
      class="position-absolute vstack rounded-3 p-2 bg-light shadow-c1 ElementRight"
    >
      <div style="width: 30px" class="align-self-center">
        <img src="/img/header/SvgPerson.svg" alt="..." class="w-100" />
      </div>
      <div>
        <p class="text-primary fw-bolder h5 text-center">15K</p>
        <p class="vstack text-center m-0 h6" style="font-size: 0.7rem;">
          <span>Amazing</span>
          <span>students around</span>
          <span>the globe</span>
        </p>
      </div>
    </div>
  `,zc=()=>`
    <div
      class="position-absolute vstack rounded-3 p-3 bg-light translate-middle-x shadow-c1 ElementLeft"
    >
      <p class="h6 vstack text-center">
        <span>Learn from best</span
        ><span><span class="text-primary">instructors</span> around</span
        ><span>the globe</span>
      </p>
      <div class="position-relative overflow-hidden" style="height: 32px">
        <div class="position-absolute d-flex">
          ${Yc()}
        </div>
      </div>
    </div>
  `,Gc=(s,t)=>`
    <div class="col d-flex justify-content-center">
      <div class="hstack gap-2 p-2 bg-tertiary flex-grow-1 customElementOption">
        <div style="width: 40px;">
          <img src="${t}" alt="..." class="w-100">
        </div>
        <span class="fw-semibold">${s}</span>
      </div>
    </div>
  `,ln=s=>`<span id="DecorationRight${s}" class="position-absolute top-0 end-0 bottom-0 bg-fourth decorationRight"> </span>`,qc=()=>`
    <div class="mt-5 position-relative">
      <div class="row mx-0 gx-3 gy-3 ">
        ${[["Problem Solving","/img/header/SvgOption1.svg"],["Live chat","/img/header/SvgOption2.svg"],["Group Reading","/img/header/SvgOption3.svg"],["10k Courses","/img/header/SvgOption4.svg"],["Hand-on activities","/img/header/SvgOption5.svg"]].map(e=>Gc(...e)).join("")}
      </div>
    </div>
  `,Xc=()=>`
    <header class="container my-3">
      <div id="ContainerHeader1" class="bg-secondary bg-lg-transparent py-5 position-relative">
        <div id="ContainerHeader2" class="bg-lg-secondary d-flex flex-wrap rounded-lg-5 px-lg-4 py-lg-5 position-relative">
          <div id="ContainerTittleHeader" class="vstack gap-4 mt-4 col-12 col-lg-6 align-self-center position-relative">
            <h1 class="vstack fs-x gap-2 text-black">
              <span>Quality <span class="text-primary">Education</span></span>
              <span>By Any Means</span>
              <span>Necessary.</span>
            </h1>
            <div>
              <button id="GetStarted" class="btn btn-primary btn-lg fw-bolder">Get Started</button>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-5 mt-lg-0 col-12 col-lg-6 position-relative">
            <div class="col-10 position-relative ContainerElementImage">
              <div class="rounded-5 overflow-hidden position-relative">
                <img
                  src="/img/header/GirlStudent.jpg"
                  alt="..."
                  id="MainImageHeader"
                />
              </div>
              ${zc()} ${Uc()}
            </div>
          </div>
          ${ln(1)}
        </div>
        ${qc()}
        ${ln(2)}
      </div>
    </header>
  `,mi=(s,t,e,n,i)=>{const o=[...s][i](r=>e(r.getBoundingClientRect()[n],t[n]));o>-1&&s[o].scrollIntoView({block:"center"})},cn=(s,t,e,n)=>{const i=t[0].getBoundingClientRect(),o=t[t.length-1].getBoundingClientRect();s.left==i.left?e.classList.add("d-none"):e.classList.remove("d-none"),s.right==o.right?n.classList.add("d-none"):n.classList.remove("d-none")},_i=(s,t,e)=>{console.log("fasd");const n=l=>document.getElementById(l),i=n(s),o=n(t),r=n(e);cn(i.getBoundingClientRect(),i.children,o,r);const a=(l,f,p)=>{mi(i.children,i.getBoundingClientRect(),l,f,p),cn(i.getBoundingClientRect(),i.children,o,r)},c=()=>a((l,f)=>l<f,"left","findLastIndex"),u=()=>a((l,f)=>l>f,"right","findIndex");return o.addEventListener("click",c),r.addEventListener("click",u),()=>{console.log("exec"),o.removeEventListener("click",c),r.removeEventListener("click",u)}},vi=()=>`
    <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06255 21.25L18.4376 15L9.06255 8.75003C8.93944 8.66795 8.83369 8.56243 8.75136 8.43949C8.66903 8.31654 8.61171 8.17859 8.5827 8.0335C8.55368 7.88841 8.55352 7.73902 8.58224 7.59387C8.61095 7.44872 8.66798 7.31064 8.75005 7.18753C8.83213 7.06441 8.93765 6.95867 9.06059 6.87634C9.18353 6.794 9.32149 6.73669 9.46658 6.70767C9.61167 6.67865 9.76106 6.6785 9.90621 6.70721C10.0514 6.73593 10.1894 6.79295 10.3126 6.87503L20.9401 13.96C21.1112 14.0742 21.2516 14.2288 21.3487 14.4103C21.4458 14.5917 21.4966 14.7943 21.4966 15C21.4966 15.2058 21.4458 15.4084 21.3487 15.5898C21.2516 15.7712 21.1112 15.9259 20.9401 16.04L10.3126 23.125C10.1894 23.2071 10.0514 23.2641 9.90621 23.2928C9.76106 23.3216 9.61167 23.3214 9.46658 23.2924C9.32149 23.2634 9.18353 23.2061 9.06059 23.1237C8.93765 23.0414 8.83213 22.9356 8.75005 22.8125C8.66798 22.6894 8.61095 22.5513 8.58224 22.4062C8.55352 22.261 8.55368 22.1116 8.5827 21.9666C8.61171 21.8215 8.66903 21.6835 8.75136 21.5606C8.83369 21.4376 8.93944 21.3321 9.06255 21.25Z" fill="#09B451"/>
    </svg>
  `,Ei=()=>`
    <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9374 21.25L11.5624 15L20.9374 8.75003C21.0606 8.66795 21.1663 8.56243 21.2486 8.43949C21.331 8.31654 21.3883 8.17859 21.4173 8.0335C21.4463 7.88841 21.4465 7.73902 21.4178 7.59387C21.389 7.44872 21.332 7.31064 21.2499 7.18753C21.1679 7.06441 21.0624 6.95867 20.9394 6.87634C20.8165 6.794 20.6785 6.73669 20.5334 6.70767C20.3883 6.67865 20.2389 6.6785 20.0938 6.70721C19.9486 6.73593 19.8106 6.79295 19.6874 6.87503L9.05995 13.96C8.88875 14.0742 8.74838 14.2288 8.6513 14.4103C8.55421 14.5917 8.50342 14.7943 8.50342 15C8.50342 15.2058 8.55421 15.4084 8.6513 15.5898C8.74838 15.7712 8.88875 15.9259 9.05995 16.04L19.6874 23.125C19.8106 23.2071 19.9486 23.2641 20.0938 23.2928C20.2389 23.3216 20.3883 23.3214 20.5334 23.2924C20.6785 23.2634 20.8165 23.2061 20.9394 23.1237C21.0624 23.0414 21.1679 22.9356 21.2499 22.8125C21.332 22.6894 21.389 22.5513 21.4178 22.4062C21.4465 22.261 21.4463 22.1116 21.4173 21.9666C21.3883 21.8215 21.331 21.6835 21.2486 21.5606C21.1663 21.4376 21.0606 21.3321 20.9374 21.25Z" fill="#09B451"/>
    </svg>
  `,bi=(s,t)=>`
    <div role="button" id="${s}" class="position-absolute top-50 translate-middle-y">
      <div
        class="d-flex justify-content-center align-items-center rounded-circle btn prevInner"
        style="width: 50px; height: 50px"
      >
        <span class="d-block" style="width: 30px">
          ${Ei()}
        </span>
      </div>
    </div>
    <div role="button" id="${t}" class="position-absolute top-50 translate-middle-y nextInner">
      <div
        class="d-flex justify-content-center align-items-center rounded-circle btn nextInner"
        style="width: 50px; height: 50px"
      >
        <span class="d-block" style="width: 30px">
          ${vi()}
        </span>
      </div>
    </div>
  `,Qc=()=>`
    <p class="descriptionCourse d-none d-lg-block fs-7">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, id. Alias
      esse ab a! Temporibus.
    </p>
  `,Jc=()=>{const s=(e,n)=>`
    <div class="position-relative card-favourite-course rounded rounded-lg-0 overflow-hidden flex-shrink-0">
      <div class="position-relative h-100">
        <img src="${n}" alt="..." class="w-100 h-100"/>
        <div
          id="DescriptionCardFavouriteCourse"
          class="d-flex justify-content-center justify-content-lg-end align-items-center align-items-lg-start flex-lg-column position-absolute top-0 start-0 end-0 bottom-0"
        >
          <h3 class="text-light fs-5 fs-lg-4 text-center ps-lg-3 pb-lg-1">${e}</h3>
          ${Qc()}
        </div>
      </div>
      <a href="#" class="position-absolute top-0 start-0 end-0 bottom-0"></a>
    </div>
  `;return[["Marketing","/img/favouriteCourse/marketing.jpg"],["Technology","/img/favouriteCourse/technology.jpg"],["Photography","/img/favouriteCourse/photography.jpg"],["Cooking","/img/favouriteCourse/cooking.jpg"],["Design","/img/favouriteCourse/design.jpg"],["Programming","/img/favouriteCourse/programming.jpg"],["Helth and Care","/img/favouriteCourse/helthAndCare.jpg"]].map(e=>s(...e)).join("")},yi=()=>`
    <div id="PrevAndNext1" data-change>
      ${Q("lg")?bi("prev1","next1"):""}
    </div>
  `;yt({nameElement:"PrevAndNext1",functionElement:yi,execFunction:{func:()=>_i("ContainerCardsFavouriteCourse","prev1","next1"),exec:!1},resize:"lg"});const Zc=()=>`
    <section class="container vstack mb-5">
      <header class="d-flex align-items-center mb-3 mb-lg-4">
        <div class="flex-grow-1">
          <h2 class="col-8 h4 fw-normal-2 fw-lg-semibold m-0">
            Choose favourite course from top cartegories
          </h2>
        </div>
        <a href="#" class="text-black text-decoration-none text-nowrap fs-5"
          >See all</a
        >
      </header>
      <div class="position-relative">
        <div
          id="ContainerCardsFavouriteCourse"
          class="hstack gap-2 gap-lg-3 py-1 scroll-x"
        >
          ${Jc()}
        </div>
        ${yi()}
      </div>
    </section>
  `,dn=s=>`<p class="m-0 h5 text-primary">${s}$</p>`,wi=(s,t,e,n,i,o,r)=>`
    <div
      class="overflow-hidden rounded-2 shadow-card-1 card-custom-1 position-relative card-type-${r}"
    >
      <div class="container-img-card">
        <img src="${s}" alt="..." class="w-100 h-100" />
      </div>
      <div class="body-card p-2 p-lg-3 vstack gap-lg-4 fw-normal-2">
        <header class="hstack">
          <div class="flex-grow-1">
            <h3 class="h5 fw-normal-2 text-break">${t}</h3>
          </div>
          <div class="hstack h-max-c gap-1">
            <img src="/img/popularCourse/SvgStar.svg" alt="..." class="svg-star" />
            <p class="m-0 text-black">${e}</p>
          </div>
        </header>
        <div class="d-lg-none mb-3 mt-2">${dn(n)}</div>
        <div class="hstack gap-2">
          <div>
            <p class="m-0">${o}</p>
          </div>
          <div class="flex-grow-1">
            <div class="hstack gap-1">
              <img
                src="/img/popularCourse/SvgPersons.svg"
                alt="..."
                class="svg-persons"
              />
              <p class="m-0">${i}</p>
            </div>
          </div>
          <div class="d-none d-lg-block">${dn(n)}</div>
        </div>
      </div>
      <a href="#" class="position-absolute top-0 bottom-0 end-0 start-0"></a>
    </div>
  `,td=()=>[["/img/popularCourse/imgCard1.jpg","Learn Marketing from Top Instructors","4.5","30.5","1.5k Students","6 weeks"],["/img/popularCourse/imgCard2.jpg","Front-end development is not hard as you think","4.5","30.5","1.5k Students","6 weeks"],["/img/popularCourse/imgCard3.jpg","Everrything you need to know in UX","4.5","30.5","1.5k Students","6 weeks"],["/img/popularCourse/imgCard4.jpg","Learn photography with ease","4.5","30.5","1.5k Students","6 weeks"],["/img/popularCourse/imgCard5.jpg","Be a pro in data analysis","4.5","30.5","1.5k Students","6 weeks"],["/img/popularCourse/imgCard6.jpg","Ethical Harking is not hard as you think","4.5","30.5","1.5k Students","6 weeks"]].map(t=>`
    <div class="col">
      ${wi(...t,1)}
    </div>
  `).join(""),ed=()=>`
    <section class="container mb-5">
      <header class="hstack mb-4">
        <div class="flex-grow-1">
          <h2 class="h4 fw-normal-2 fw-lg-semibold">Most Popular courses</h2>
        </div>
        <div>
          <div role="button" class="bg-primary rounded-5 dropdown-custom-1 hstack px-3 py-1">
            <div style="width: 30px; height: 30px">
              <img
                src="/img/popularCourse/SvgIconDropdown1.svg"
                alt="..."
                class="w-100"
              />
            </div>
            <span class="ms-1 d-block text-light w-max-c">Sort by</span>
          </div>
        </div>
      </header>
      <div class="row row-cols-2 row-cols-lg-3 gx-3 gy-4">
        ${td()}
      </div>
    </section>
  `,sd=()=>[["/img/learnSkill/imgCard4.jpg","All you need in Business Strategy","4.5","30.5","1.5k Students","6 weeks"],["/img/learnSkill/imgCard3.jpg","The amazing hack in Figma prototyping","4.5","30.5","1.5k Students","6 weeks"],["/img/learnSkill/imgCard1.jpg","Introduction to basic game developement","4.5","30.5","1.5k Students","6 weeks"],["/img/learnSkill/imgCard7.jpg","Introduction to front-end development","4.5","30.5","1.5k Students","6 weeks"],["/img/learnSkill/imgCard2.jpg","Use surveyMonkey to create a survey","4.5","30.5","1.5k Students","6 weeks"],["/img/learnSkill/imgCard6.jpg","Get started with First aid","4.5","30.5","1.5k Students","6 weeks"],["/img/learnSkill/imgCard5.jpg","Everrything you need to know in UX","4.5","30.5","1.5k Students","6 weeks"]].map(t=>`
    <div class="col">
      ${wi(...t,2)}
    </div>
  `).join(""),Ai=()=>`
    <div id="PrevAndNext2" data-change>
      ${Q("lg")?bi("prev2","next2"):""}
    </div>
  `;yt({nameElement:"PrevAndNext2",functionElement:Ai,execFunction:{func:()=>_i("ContainerCardsLearnSkill","prev2","next2"),exec:!1},resize:"lg"});const nd=()=>`
    <section class="container mb-5">
      <header class="mb-2">
        <h2 class="h4 fw-normal-2 fw-lg-semibold">Learn a new skill in two hours</h2>
      </header>
      <div class="position-relative">
        <div
          id="ContainerCardsLearnSkill"
          class="hstack gap-2 gap-lg-3 pb-1 pt-3 scroll-x"
        >
          ${sd()}
        </div>
        ${Ai()}
      </div>
    </section>
  `,id=()=>`
    <div class="col">
      <div class="col-lg-10 mb-3">
        <h3 class="h1 fw-normal-2 fw-lg-semibold m-0">Let Your Education Do The Walking</h3>
      </div>
      <div class="vstack gap-3 gap-lg-4">
        <div class="hstack gap-2">
          <span
            class="d-flex justify-content-center align-items-center bg-tertiary svgItem1 rounded-circle"
            ><img src="/img/bringEducation/SvgBook.svg" alt="..."
          /></span>
          <p class="m-0 fw-normal-2 flex-grow-1">Free E-book, Videos and kits</p>
        </div>
        <div class="hstack gap-2">
          <span
            class="d-flex justify-content-center align-items-center bg-tertiary svgItem1 rounded-circle"
            ><img src="/img/bringEducation/SvgTime.svg" alt=".."
          /></span>
          <p class="m-0 fw-normal-2 flex-grow-1">Learn at your own pace</p>
        </div>
        <div class="hstack gap-2">
          <span
            class="d-flex justify-content-center align-items-center bg-tertiary svgItem1 rounded-circle"
            ><img src="/img/bringEducation/SvgJob.svg" alt="..."
          /></span>
          <p class="m-0 fw-normal-2 flex-grow-1">
            Collaborate with different learners around the globe
          </p>
        </div>
        <div class="hstack gap-2">
          <span
            class="d-flex justify-content-center align-items-center bg-tertiary svgItem1 rounded-circle"
            ><img src="/img/popularCourse/SvgPersons.svg" alt="..."
          /></span>
          <p class="m-0 fw-normal-2 flex-grow-1">
            Top instructors around the globe
          </p>
        </div>
      </div>
    </div>
  `,od=()=>`
    <div class="col mb-5 mb-lg-0">
      <div class="col-10 col-sm-9 position-relative ContainerElementImage2 mx-sm-auto">
        <div class="rounded-5 overflow-hidden position-relative">
          <img
            src="/img/bringEducation/fondo.jpg"
            alt="..."
            id="MainImageBringEducation"
          />
        </div>
        <div
          class="position-absolute bg-light rounded-3 p-2 start-100 top-50 translate-middle-x vstack align-items-center shadow-c1 gap-2"
        >
          <div
            class="rounded-circle d-flex justify-content-center align-items-center bg-tertiary"
            id="SvgJob1"
          >
            <img src="/img/bringEducation/SvgJob.svg" alt="..." />
          </div>
          <div class="text-center vstack align-items-center mb-3">
            <span class="d-block position-relative">
              <span class="text-primary h5">Job</span>
              <img
                src="/img/bringEducation/SvgFigure1.svg"
                alt="..."
                class="w-100 position-absolute start-0 figure-bottom"
              />
            </span>
            <span class="d-block fw-normal-2">Opportunities</span>
          </div>
        </div>
      </div>
    </div>
  `,rd=()=>`
    <section class="container mb-5">
      <header class="mb-4 mb-lg-5">
        <h2 class="h4 fw-normal-2 fw-lg-semibold m-0">
          We Bring The Good Education To Life
        </h2>
      </header>
      <div class="row row-cols-1 row-cols-lg-2">
        ${od()}
        ${id()}
      </div>
    </section>
  `,Ti={functions:[],addFunction:function(s){this.functions.push(s)},execFunctions:function(){this.functions.forEach(s=>s())}},ad=(s,t,e)=>{const n=l=>document.getElementById(l),i=n(s),o=n(t),r=n(e),a=(l,f,p)=>{mi(i.children,i.getBoundingClientRect(),l,f,p)},c=()=>a((l,f)=>l<f,"left","findLastIndex"),u=()=>a((l,f)=>l>f,"right","findIndex");o.addEventListener("click",c),r.addEventListener("click",u)},ld=()=>{const s=(e,n,i)=>`
    <div class="cardReview rounded shadow-card-2 p-3 flex-shrink-0">
      <div class="hstack gap-2 mb-3">
        <div class="overflow-hidden rounded-circle containerImgPerfil">
          <img src="${e}" alt="..." class="w-100 h-100" />
        </div>
        <div class="vstack">
          <h4 class="h6 text-black m-0">${n}</h4>
          <p class="m-0 text-primary fs-7 fw-semibold">${i}</p>
        </div>
      </div>
      <div>
        <p class="m-0 fs-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi
          saepe dolor omnis soluta quibusdam quia perferendis numquam nisi tenetur
          qui nostrum odit, possimus nesciunt placeat.
        </p>
      </div>
    </div>
  `;return`
    <div class="col-12 col-lg-8">
      <div id="ContainerCardsReview" class="hstack scroll-x not-scroll-hover p-2 gap-3">
        ${[["/img/review/perfil1.jpg","Mohh Jumah","Senior Developer"],["/img/review/perfil2.jpg","John Mark","Data Analyst"],["/img/review/perfil3.jpg","Rabiu Hassan","Marketer"],["/img/review/perfil4.jpg","Mheyah Khalifa","Ux Lead"],["/img/review/perfil5.jpeg","Elon Musk","Content Writer"]].map(e=>s(...e)).join("")}
      </div>
    </div>
  `},cd=()=>`
    <div class="col-12 col-lg-4 d-flex flex-row flex-lg-column mb-4 mb-lg-0">
      <h3 class="h1 mb-0 mb-lg-5 text-black lh-base">
        What our
        <span class="position-relative"
          ><span class="text-primary">Students</span
          ><img
            src="/img/review/SvgFigure2.svg"
            alt="..."
            class="w-100 position-absolute start-0 figure-bottom"
        /></span>
        say about us
      </h3>
      <div class="hstack gap-4 gap-lg-5">
        <div
          role="button"
          class="d-flex justify-content-center rounded-circle align-items-center btn prevOuter"
          style="width: 50px; height: 50px"
          id="prev3"
        >
          <span class="d-block" style="width: 30px">
            ${Ei()}
          </span>
        </div>
        <div
          role="button"
          class="d-flex justify-content-center rounded-circle align-items-center btn nextOuter"
          style="width: 50px; height: 50px"
          id="next3"
        >
          <span class="d-block" style="width: 30px">
            ${vi()}
          </span>
        </div>
      </div>
    </div>
  `;Ti.addFunction(()=>ad("ContainerCardsReview","prev3","next3"));const dd=()=>`
    <section class="container mb-5">
      <header class="mb-4 mb-lg-5">
        <h2 class="h4 fw-normal-2 fw-lg-semibold m-0 text-center">Reviews</h2>
      </header>
      <div class="row">
        ${cd()}
        ${ld()}
      </div>
    </section>
  `,ud=()=>{const s=(e,n,i,o,r=!1)=>`
    <div class="col ${r?"mx-auto mx-lg-0":""}">
      <div class="h-100 shadow-card-3 px-4 px-lg-5 py-4">
        <div class="mb-4 vstack align-items-center text-center">
          <div class="overflow-hidden rounded-circle container-perfil-instructor-img mb-3">
            <img
              src="${e}"
              alt="..."
              class="w-100 h-100"
            />
          </div>
          <h3 class="h6 text-black mb-2">${n}</h3>
          <p class="mb-0 fs-7 text-primary fw-semibold">${i}</p>
        </div>
        <div>
          <p class="mb-0 text-center fs-7 fs-lg-6">
            \u201C${o}\u201D
          </p>
        </div>
      </div>
    </div>
  `;return[["/img/instructors/perfil2.jpg","John Mark","Senior Developer","Education will be for you what you want it to be"],["/img/instructors/perfil1.jpg","Lora Shrof","Marketing Lead","Knowledge has to be improved, challenged, and increased constantly, or it vanishes"],["/img/instructors/perfil3.jpg","Zeng Chin","Data Analist at Meta","To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge",!0]].map(e=>s(...e)).join("")},fd=()=>`
    <section class="container mb-5">
      <header class="mb-4 mb-lg-5">
        <h2 class="h4 fw-normal-2 fw-lg-semibold m-0">Meet our instructors</h2>
      </header>
      <div class="row row-cols-2 row-cols-lg-3 gx-3 gx-lg-4 gy-4">
        ${ud()}
      </div>
    </section>
  `,Ci=()=>`
    <div
      id="ContainerGirlContactUs"
      class="d-none d-lg-block overflow-hidden rounded-4 mx-auto"
      data-change
    >
      ${Q("lg")?'<img src="/img/contactUs/girlContactUs.png" alt="..." class="w-100" />':""}
    </div>
  `;yt({nameElement:"ContainerGirlContactUs",functionElement:Ci});const hd=()=>`
    <div class="d-none d-lg-block p-5"></div>
    <section id="SectionCallUs" class="container-fluid position-relative">
      <div
        id="ContainerImageContactUs"
        class="position-absolute top-0 start-0 end-0 bottom-0 z-index-1 overflow-hidden"
      >
        <img
          src="/img/contactUs/fondo.webp"
          alt="..."
          class="w-100 h-100 position-relative z-index-2"
        />
      </div>
      <div class="container position-relative z-index-2">
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col">
            ${Ci()}
          </div>
          <div class="col">
            <div class="py-5">
              <h2 class="text-light col-9 mb-4 font-openSans mx-auto mx-lg-0 text-center text-lg-start">
                You don\u2019t have to see the whole staircase just take the first step
              </h2>
              <p class="text-light col-9 mb-4 font-openSans mx-auto mx-lg-0 text-center text-lg-start">
                Amet in a suspendisse convallis eget, Amet in a suspendisse
                convallis egetAmet in a
              </p>
              <div class="hstack flex-wrap gap-3 pt-4 justify-content-center justify-content-lg-start">
                <button
                  role="button"
                  class="btn btn-primary primary-2 fw-semibold fs-7"
                >
                  Get Started
                </button>
                <button role="button" class="btn btn-light light-2 fw-semibold fs-7">
                  Please a call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,Si=["Home","Services","Training","Resources","About Us"],Oi=["SME","Solution","Reviews","Blog"],$i=["Contact Us","Place a Call","Wischool@gmail.com"],pd=["Job Opening","News","Research"],gd=["Uk Privacy Policy","Terms of Use"],st=(s=[])=>{const t=e=>`<a href="#" class="text-decoration-none text-light font-openSans text-break">${e}</a>`;return`
    <div class="vstack gap-3">
      ${s.map(e=>t(e)).join("")}
    </div>
  `},Ni=()=>{const s=e=>`
      <a href="#" class="text-decoration-none">
        <img src="${e}" alt="..." class="socialNetworks" />
      </a>
    `;return`
    <div id="SocialNetworks" class="vstack align-items-lg-start pb-5 pb-lg-0">
      <h4 class="text-light mb-lg-4 font-sourceSansPro">WiSchool</h4>
      <p class="text-light col-9 d-none d-lg-block">
        We are not here to sell you products, we sell value through our
        expertise.
      </p>
      <div class="hstack gap-3">
        ${["/img/footer/SvgFacebook.svg","/img/footer/SvgTwitter.svg","/img/footer/SvgInstragram.svg","/img/footer/SvgLinkedin.svg"].map(e=>s(e)).join("")}
      </div>
    </div>
  `},md=()=>`
    <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex gap-4">
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
      <div class="flex-grow-1 bg-lines-footer"></div>
    </div>
  `,xi=()=>`
    <div
      class="vstack align-items-start align-items-lg-center gap-0 gap-lg-3 position-relative z-index-2 col-md-10 mx-auto col-lg-6 mx-auto mt-lg-5"
    >
      <h3 class="text-light fw-normal-2 fs-6 fs-lg-3">Subscribe to get latest updates</h3>
      <div class="input-group flex-nowrap mb-lg-5">
        <input
          type="email"
          name="EmailSubscribe"
          id="EmailSubscribe"
          class="form-control rounded-0"
          placeholder="Your Email address"
        />
        <button id="Btn-primary-subscribe" class="btn btn-primary rounded-0">
          Subscribe
        </button>
      </div>
    </div>
  `,_d=()=>`
    ${md()}
    <div class="p-4"></div>
    <div class="position-relative z-index-2 hstack gap-3 py-5">
      ${Ni()}
      ${st(Si)}
      ${st(Oi)}
      ${st($i)}
      ${st(pd)}
      ${st(gd)}
    </div>
    ${xi()}
  `,vd=()=>`
    ${xi()}
    <div class="hstack gap-2 gap-sm-3 py-5">
      ${st(Si)}
      ${st(Oi)}
      ${st($i)}
    </div>
    ${Ni()}
  `,Li=()=>`
    <section id="FooterMain" class="container-fluid bg-black pt-5 pt-lg-0" data-change>
      <div class="container position-relative p-lg-0">
        ${Q("lg")?_d():vd()}
      </div>
    </section>
  `;yt({nameElement:"FooterMain",functionElement:Li});const Ed=()=>`
    ${gi()}
    ${Xc()}
    <main>
      ${Zc()}
      ${ed()}
      ${nd()}
      ${rd()}
      ${dd()}
      ${fd()}
      ${hd()}
    </main>
    ${Li()}
  `,Yt=new Map,bd=s=>{const t=document.createElement("div");return t.innerHTML=s,t.innerHTML},yd=s=>{window.addEventListener("resize",()=>{document.querySelectorAll("[data-change]").forEach(e=>{const n=e.id,i=s.get(n),o=bd(i.functionElement());if(e.outerHTML.trim()!=o.trim()&&(e.outerHTML=o),!!i.execFunction&&(Yt.has(i.nameElement)&&(Yt.get(i.nameElement)(),Yt.delete(i.nameElement)),Q(i.resize))){const r=i.execFunction.func();r&&Yt.set(i.nameElement,r)}})}),s.forEach(t=>{if(!t.execFunction||!Q(t.resize))return;const e=t.execFunction,n=e.func();n&&Yt.set(t.nameElement,n),Q(t.resize)&&(e.exec=!0)})},wd=document.getElementById("root");wd.innerHTML=Ed();yd(yt());Ti.execFunctions();
