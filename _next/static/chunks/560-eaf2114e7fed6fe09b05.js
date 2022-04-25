"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[560],{22829:function(e,n,t){var r=t(45987),o=t(4942),i=t(87462),a=t(67294),u=(t(45697),t(86010)),c=t(14670),s=t(79895),l=t(59693),f=a.forwardRef((function(e,n){var t=e.action,o=e.classes,c=e.className,l=e.message,f=e.role,d=void 0===f?"alert":f,m=(0,r.Z)(e,["action","classes","className","message","role"]);return a.createElement(s.Z,(0,i.Z)({role:d,square:!0,elevation:6,className:(0,u.Z)(o.root,c),ref:n},m),a.createElement("div",{className:o.message},l),t?a.createElement("div",{className:o.action},t):null)}));n.Z=(0,c.Z)((function(e){var n="light"===e.palette.type?.8:.98,t=(0,l._4)(e.palette.background.default,n);return{root:(0,i.Z)({},e.typography.body2,(0,o.Z)({color:e.palette.getContrastText(t),backgroundColor:t,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(f)},63560:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(45987),o=t(4942),i=t(87462),a=t(67294),u=(t(45697),t(86010)),c=t(14670),s=t(43366),l=t(73935),f=t(30626),d=t(17294),m=t(55192);function p(e){return e.substring(2).toLowerCase()}var v=function(e){var n=e.children,t=e.disableReactTree,r=void 0!==t&&t,o=e.mouseEvent,i=void 0===o?"onClick":o,u=e.onClickAway,c=e.touchEvent,s=void 0===c?"onTouchEnd":c,v=a.useRef(!1),E=a.useRef(null),g=a.useRef(!1),Z=a.useRef(!1);a.useEffect((function(){return setTimeout((function(){g.current=!0}),0),function(){g.current=!1}}),[]);var h=a.useCallback((function(e){E.current=l.findDOMNode(e)}),[]),b=(0,d.Z)(n.ref,h),x=(0,m.Z)((function(e){var n=Z.current;if(Z.current=!1,g.current&&E.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(v.current)v.current=!1;else{var t;if(e.composedPath)t=e.composedPath().indexOf(E.current)>-1;else t=!(0,f.Z)(E.current).documentElement.contains(e.target)||E.current.contains(e.target);t||!r&&n||u(e)}})),k=function(e){return function(t){Z.current=!0;var r=n.props[e];r&&r(t)}},w={ref:b};return!1!==s&&(w[s]=k(s)),a.useEffect((function(){if(!1!==s){var e=p(s),n=(0,f.Z)(E.current),t=function(){v.current=!0};return n.addEventListener(e,x),n.addEventListener("touchmove",t),function(){n.removeEventListener(e,x),n.removeEventListener("touchmove",t)}}}),[x,s]),!1!==i&&(w[i]=k(i)),a.useEffect((function(){if(!1!==i){var e=p(i),n=(0,f.Z)(E.current);return n.addEventListener(e,x),function(){n.removeEventListener(e,x)}}}),[x,i]),a.createElement(a.Fragment,null,a.cloneElement(n,w))},E=t(93871),g=t(82568),Z=t(20170),h=t(22829),b=a.forwardRef((function(e,n){var t=e.action,o=e.anchorOrigin,c=(o=void 0===o?{vertical:"bottom",horizontal:"center"}:o).vertical,l=o.horizontal,f=e.autoHideDuration,d=void 0===f?null:f,p=e.children,b=e.classes,x=e.className,k=e.ClickAwayListenerProps,w=e.ContentProps,C=e.disableWindowBlurListener,L=void 0!==C&&C,y=e.message,T=e.onClose,R=e.onEnter,N=e.onEntered,O=e.onEntering,M=e.onExit,P=e.onExited,D=e.onExiting,B=e.onMouseEnter,H=e.onMouseLeave,I=e.open,S=e.resumeHideDuration,W=e.TransitionComponent,_=void 0===W?Z.Z:W,z=e.transitionDuration,A=void 0===z?{enter:s.x9.enteringScreen,exit:s.x9.leavingScreen}:z,j=e.TransitionProps,G=(0,r.Z)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),X=a.useRef(),q=a.useState(!0),F=q[0],Y=q[1],J=(0,m.Z)((function(){T&&T.apply(void 0,arguments)})),K=(0,m.Z)((function(e){T&&null!=e&&(clearTimeout(X.current),X.current=setTimeout((function(){J(null,"timeout")}),e))}));a.useEffect((function(){return I&&K(d),function(){clearTimeout(X.current)}}),[I,d,K]);var Q=function(){clearTimeout(X.current)},U=a.useCallback((function(){null!=d&&K(null!=S?S:.5*d)}),[d,S,K]);return a.useEffect((function(){if(!L&&I)return window.addEventListener("focus",U),window.addEventListener("blur",Q),function(){window.removeEventListener("focus",U),window.removeEventListener("blur",Q)}}),[L,U,I]),!I&&F?null:a.createElement(v,(0,i.Z)({onClickAway:function(e){T&&T(e,"clickaway")}},k),a.createElement("div",(0,i.Z)({className:(0,u.Z)(b.root,b["anchorOrigin".concat((0,E.Z)(c)).concat((0,E.Z)(l))],x),onMouseEnter:function(e){B&&B(e),Q()},onMouseLeave:function(e){H&&H(e),U()},ref:n},G),a.createElement(_,(0,i.Z)({appear:!0,in:I,onEnter:(0,g.Z)((function(){Y(!1)}),R),onEntered:N,onEntering:O,onExit:M,onExited:(0,g.Z)((function(){Y(!0)}),P),onExiting:D,timeout:A,direction:"top"===c?"down":"up"},j),p||a.createElement(h.Z,(0,i.Z)({message:y,action:t},w)))))})),x=(0,c.Z)((function(e){var n={top:8},t={bottom:8},r={justifyContent:"flex-end"},a={justifyContent:"flex-start"},u={top:24},c={bottom:24},s={right:24},l={left:24},f={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:(0,i.Z)({},n,(0,o.Z)({},e.breakpoints.up("sm"),(0,i.Z)({},u,f))),anchorOriginBottomCenter:(0,i.Z)({},t,(0,o.Z)({},e.breakpoints.up("sm"),(0,i.Z)({},c,f))),anchorOriginTopRight:(0,i.Z)({},n,r,(0,o.Z)({},e.breakpoints.up("sm"),(0,i.Z)({left:"auto"},u,s))),anchorOriginBottomRight:(0,i.Z)({},t,r,(0,o.Z)({},e.breakpoints.up("sm"),(0,i.Z)({left:"auto"},c,s))),anchorOriginTopLeft:(0,i.Z)({},n,a,(0,o.Z)({},e.breakpoints.up("sm"),(0,i.Z)({right:"auto"},u,l))),anchorOriginBottomLeft:(0,i.Z)({},t,a,(0,o.Z)({},e.breakpoints.up("sm"),(0,i.Z)({right:"auto"},c,l)))}}),{flip:!1,name:"MuiSnackbar"})(b)}}]);