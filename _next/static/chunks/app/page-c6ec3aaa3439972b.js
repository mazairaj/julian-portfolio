(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5426:function(t,e,n){Promise.resolve().then(n.bind(n,2106)),Promise.resolve().then(n.bind(n,9858)),Promise.resolve().then(n.bind(n,5852)),Promise.resolve().then(n.bind(n,5768)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,231,23))},2106:function(t,e,n){"use strict";var r=n(7437),i=n(4635),a=n(6648);e.default=()=>(0,r.jsx)("div",{className:"w-full h-full relative",children:(0,r.jsxs)(i.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:2,duration:.4,ease:"easeInOut"}},children:[(0,r.jsx)(i.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:2,duration:.4,ease:"easeInOut"}},className:"w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute",children:(0,r.jsx)("div",{className:"relative w-full h-full rounded-full border-4 border-primary",children:(0,r.jsx)(a.default,{src:"/assets/LinkedInPhotoCircle.png",priority:!0,quality:100,fill:!0,alt:"",className:"object-contain rounded-full"})})}),(0,r.jsx)(i.E.svg,{className:"w-[300px] xl:w-[520px] h-[300px] xl:h-[520px]",fill:"transparent",viewBox:"0 0 510 510",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(i.E.circle,{cx:"255",cy:"251",r:"260",stroke:"#00ff99",strokeWidth:"4",strokelineca:"round",strokeLinejoin:"round",initial:{strokeDasharray:"24 10 0 0"},animate:{strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],rotate:[120,360]},transition:{duration:20,repeat:1/0,repeatType:"reverse"}})})]})})},9858:function(t,e,n){"use strict";var r=n(7437),i=n(4635),a=n(6648);e.default=()=>(0,r.jsx)("div",{className:"w-full h-full relative",children:(0,r.jsx)(i.E.div,{className:"mb-5 xl:mb-0 xl:mt-5",initial:{opacity:0},animate:{opacity:1,transition:{delay:2,duration:.4,ease:"easeInOut"}},style:{height:"50px",width:"auto",position:"relative"},children:(0,r.jsx)(a.default,{src:"/assets/white-signature.png",alt:"White Signature",layout:"fill",objectFit:"contain",style:{objectFit:"contain"}})})})},5852:function(t,e,n){"use strict";var r=n(7437),i=n(7095);let a=[{num:8,text:"Years of experience"},{num:26,text:"Projects completed"},{num:8,text:"Technologies mastered"},{num:1e3,text:"Code commits"}];e.default=()=>(0,r.jsx)("section",{className:"pt-4 pb-12 xl:pt-0 xl:pb-0",children:(0,r.jsx)("div",{className:"container mx-auto",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none",children:a.map((t,e)=>(0,r.jsxs)("div",{className:"flex-1 flex gap-4 items-center justify-center xl:justify-start",children:[(0,r.jsx)(i.ZP,{end:t.num,duration:5,delay:2,className:"text-4xl xl:text-6xl font-extrabold"}),(0,r.jsx)("p",{className:"".concat(t.text.length<15?"max-w-[100px]":"max-w-[150px]"," leading-snug text-white/80"),children:t.text})]},e))})})})},5768:function(t,e,n){"use strict";var r=n(7437),i=n(2265);n(3441),e.default=t=>{let{words:e,typingSpeed:n=100,deletingSpeed:a=50,delayBetweenWords:s=2e3,delayBeforeDelete:o=1e3}=t,[l,u]=(0,i.useState)(""),[c,f]=(0,i.useState)(!1),[p,d]=(0,i.useState)(0),[h,m]=(0,i.useState)(n);return(0,i.useEffect)(()=>{let t=setTimeout(()=>{let t=e[p],r=c?t.substring(0,l.length-1):t.substring(0,l.length+1);u(r),c||r!==t?c&&""===r?(f(!1),d(t=>(t+1)%e.length),m(s)):m(c?a:n):setTimeout(()=>f(!0),o)},h);return()=>clearTimeout(t)},[l,c,h,e,p,n,a,o,s]),(0,r.jsxs)("span",{className:"inline-flex items-center",children:[l,(0,r.jsx)("span",{className:"cursor"})]})}},7992:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,a=(Math.abs(t).toFixed(i.options.decimalPlaces)+"").split(".");if(e=a[0],n=a.length>1?i.options.decimal+a[1]:"",i.options.useGrouping){r="";for(var s=3,o=0,l=0,u=e.length;l<u;++l)i.options.useIndianSeparators&&4===l&&(s=2,o=1),0!==l&&o%s==0&&(r=i.options.separator+r),o++,r=e[u-l-1]+r;e=r}return i.options.numerals&&i.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return i.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return i.options.numerals[+t]})),(t<0?"-":"")+i.options.prefix+e+n+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},6648:function(t,e,n){"use strict";n.d(e,{default:function(){return i.a}});var r=n(5601),i=n.n(r)},5601:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{default:function(){return l},getImageProps:function(){return o}});let r=n(9920),i=n(497),a=n(8173),s=r._(n(1241));function o(t){let{props:e}=(0,i.getImgProps)(t,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[t,n]of Object.entries(e))void 0===n&&delete e[t];return{props:e}}let l=a.Image},7095:function(t,e,n){"use strict";var r=n(2265),i=n(7992);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){!function(t,e,n){var r;(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function f(t){var e=r.useRef(t);return c(function(){e.current=t}),r.useCallback(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)},[])}var p=function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,s=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,f=e.separator,p=e.start,d=e.suffix,h=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,y=e.enableScrollSpy,v=e.scrollSpyDelay,b=e.scrollSpyOnce,x=e.plugin;return new i.CountUp(t,o,{startVal:p,duration:a,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:d,plugin:x,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:y,scrollSpyDelay:v,scrollSpyOnce:b})},d=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},m=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(t){return void 0!==(function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a,s,o=[],l=!0,u=!1;try{for(a=(n=n.call(t)).next;!(l=(r=a.call(n)).done)&&(o.push(r.value),2!==o.length);l=!0);}catch(t){u=!0,i=t}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return o}}(t,2)||function(t,e){if(t){if("string"==typeof t)return u(t,2);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=r.useMemo(function(){return s(s({},h),e)},[t]),i=n.ref,a=n.startOnMount,o=n.enableReinitialize,c=n.delay,m=n.onEnd,g=n.onStart,y=n.onPauseResume,v=n.onReset,b=n.onUpdate,x=l(n,d),w=r.useRef(),V=r.useRef(),E=r.useRef(!1),O=f(function(){return p("string"==typeof i?i:i.current,x)}),j=f(function(t){var e=w.current;if(e&&!t)return e;var n=O();return w.current=n,n}),S=f(function(){var t=function(){return j(!0).start(function(){null==m||m({pauseResume:P,reset:F,start:A,update:N})})};c&&c>0?V.current=setTimeout(t,1e3*c):t(),null==g||g({pauseResume:P,reset:F,update:N})}),P=f(function(){j().pauseResume(),null==y||y({reset:F,start:A,update:N})}),F=f(function(){j().el&&(V.current&&clearTimeout(V.current),j().reset(),null==v||v({pauseResume:P,start:A,update:N}))}),N=f(function(t){j().update(t),null==b||b({pauseResume:P,reset:F,start:A})}),A=f(function(){F(),S()}),R=f(function(t){a&&(t&&F(),S())});return r.useEffect(function(){E.current?o&&R(!0):(E.current=!0,R())},[o,E,R,c,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect(function(){return function(){F()}},[F]),{start:A,pauseResume:P,reset:F,update:N,getCountUp:j}},g=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,u=t.style,c=l(t,g),p=r.useRef(null),d=r.useRef(!1),h=m(s(s({},c),{},{ref:p,startOnMount:"function"!=typeof a||0===t.delay,enableReinitialize:!1})),y=h.start,v=h.reset,b=h.update,x=h.pauseResume,w=h.getCountUp,V=f(function(){y()}),E=f(function(e){t.preserveValue||v(),b(e)}),O=f(function(){if("function"==typeof t.children&&!(p.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}w()});r.useEffect(function(){O()},[O]),r.useEffect(function(){d.current&&E(t.end)},[t.end,E]);var j=n&&t;return(r.useEffect(function(){n&&d.current&&V()},[V,n,j]),r.useEffect(function(){!n&&d.current&&V()},[V,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect(function(){d.current=!0},[]),"function"==typeof a)?a({countUpRef:p,start:y,reset:v,update:b,pauseResume:x,getCountUp:w}):r.createElement("span",o({className:e,ref:p,style:u},i),void 0!==t.start?w().formattingFn(t.start):"")}},3441:function(){}},function(t){t.O(0,[877,635,231,173,971,23,744],function(){return t(t.s=5426)}),_N_E=t.O()}]);