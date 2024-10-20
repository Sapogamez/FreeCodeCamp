var e={47:(e,t,o)=>{const i=o(602),s=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,r=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,a=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/uy,l=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,c=/\p{M}+/gu,d={limit:1/0,ellipsis:""},p=(e,t={},o={})=>{const h=t.limit??1/0,u=t.ellipsis??"",g=t?.ellipsisWidth??(u?p(u,d,o).width:0),m=o.ansiWidth??0,f=o.controlWidth??0,v=o.ambiguousWidth??1,y=o.emojiWidth??2,w=o.fullWidthWidth??2,_=o.regularWidth??1,x=o.wideWidth??2;let $=0,C=0,P=e.length,S=0,A=!1,E=P,O=Math.max(0,h-g),T=0,D=0,F=0,W=0;e:for(;;){if(D>T||C>=P&&C>$){const t=e.slice(T,D)||e.slice($,C);S=0;for(const e of t.replaceAll(c,"")){const t=e.codePointAt(0)||0;if(W=(0,i.isFullWidth)(t)?w:(0,i.isWide)(t)?x:v!==_&&(0,i.isAmbiguous)(t)?v:_,F+W>O&&(E=Math.min(E,Math.max(T,$)+S)),F+W>h){A=!0;break e}S+=e.length,F+=W}T=D=0}if(C>=P)break;if(l.lastIndex=C,l.test(e)){if(S=l.lastIndex-C,W=S*_,F+W>O&&(E=Math.min(E,C+Math.floor((O-F)/_))),F+W>h){A=!0;break}F+=W,T=$,D=C,C=$=l.lastIndex}else if(s.lastIndex=C,s.test(e)){if(F+m>O&&(E=Math.min(E,C)),F+m>h){A=!0;break}F+=m,T=$,D=C,C=$=s.lastIndex}else if(r.lastIndex=C,r.test(e)){if(S=r.lastIndex-C,W=S*f,F+W>O&&(E=Math.min(E,C+Math.floor((O-F)/f))),F+W>h){A=!0;break}F+=W,T=$,D=C,C=$=r.lastIndex}else if(a.lastIndex=C,a.test(e)){if(F+y>O&&(E=Math.min(E,C)),F+y>h){A=!0;break}F+=y,T=$,D=C,C=$=a.lastIndex}else C+=1}return{width:A?O:F,index:A?E:P,truncated:A,ellipsed:A&&h>=g}}},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0;t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109;t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510;t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},t={};function o(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),void 0!==o&&Object.defineProperty(o,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var i={};o.d(i,{K:()=>es});const s=globalThis,r=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),l=new WeakMap;class n{constructor(e,t,o){if(this._$cssResult$=!0,o!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=l.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&l.set(t,e))}return e}toString(){return this.cssText}}const c=e=>new n("string"==typeof e?e:e+"",void 0,a),d=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new n(o,e,a)},p=(e,t)=>{if(r)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=s.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}},h=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return c(t)})(e):e,{is:u,defineProperty:g,getOwnPropertyDescriptor:m,getOwnPropertyNames:f,getOwnPropertySymbols:v,getPrototypeOf:y}=Object,w=globalThis,_=w.trustedTypes,x=_?_.emptyScript:"",$=w.reactiveElementPolyfillSupport,C=(e,t)=>e,P={toAttribute(e,t){switch(t){case Boolean:e=e?x:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},S=(e,t)=>!u(e,t),A={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=A){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&g(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:s}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const r=i?.call(this);s.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??A}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,t=[...f(e),...v(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return p(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:P).toAttribute(t,o.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:P;this._$Em=i,this[i]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??S)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[C("elementProperties")]=new Map,b[C("finalized")]=new Map,$?.({ReactiveElement:b}),(w.reactiveElementVersions??=[]).push("2.0.4");const E=globalThis,O=E.trustedTypes,T=O?O.createPolicy("lit-html",{createHTML:e=>e}):void 0,D="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,W="?"+F,B=`<${W}>`,U=document,V=()=>U.createComment(""),G=e=>null===e||"object"!=typeof e&&"function"!=typeof e,j=Array.isArray,q=e=>j(e)||"function"==typeof e?.[Symbol.iterator],K="[ \t\n\f\r]",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,Y=/>/g,Z=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,ee=/"/g,te=/^(?:script|style|textarea|title)$/i,oe=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),ie=oe(1),ne=(oe(2),oe(3),Symbol.for("lit-noChange")),se=Symbol.for("lit-nothing"),re=new WeakMap,ae=U.createTreeWalker(U,129);function le(e,t){if(!j(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(t):t}const ce=(e,t)=>{const o=e.length-1,i=[];let s,r=2===t?"<svg>":3===t?"<math>":"",a=Q;for(let t=0;t<o;t++){const o=e[t];let l,c,d=-1,p=0;for(;p<o.length&&(a.lastIndex=p,c=a.exec(o),null!==c);)p=a.lastIndex,a===Q?"!--"===c[1]?a=J:void 0!==c[1]?a=Y:void 0!==c[2]?(te.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=Z):void 0!==c[3]&&(a=Z):a===Z?">"===c[0]?(a=s??Q,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?Z:'"'===c[3]?ee:X):a===ee||a===X?a=Z:a===J||a===Y?a=Q:(a=Z,s=void 0);const h=a===Z&&e[t+1].startsWith("/>")?" ":"";r+=a===Q?o+B:d>=0?(i.push(l),o.slice(0,d)+D+o.slice(d)+F+h):o+F+(-2===d?t:h)}return[le(e,r+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class N{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let s=0,r=0;const a=e.length-1,l=this.parts,[c,d]=ce(e,t);if(this.el=N.createElement(c,o),ae.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ae.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(D)){const t=d[r++],o=i.getAttribute(e).split(F),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:a[2],strings:o,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),i.removeAttribute(e)}else e.startsWith(F)&&(l.push({type:6,index:s}),i.removeAttribute(e));if(te.test(i.tagName)){const e=i.textContent.split(F),t=e.length-1;if(t>0){i.textContent=O?O.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],V()),ae.nextNode(),l.push({type:2,index:++s});i.append(e[t],V())}}}else if(8===i.nodeType)if(i.data===W)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(F,e+1));)l.push({type:7,index:s}),e+=F.length-1}s++}}static createElement(e,t){const o=U.createElement("template");return o.innerHTML=e,o}}function de(e,t,o=e,i){if(t===ne)return t;let s=void 0!==i?o._$Co?.[i]:o._$Cl;const r=G(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=s:o._$Cl=s),void 0!==s&&(t=de(e,s._$AS(e,t.values),s,i)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??U).importNode(t,!0);ae.currentNode=i;let s=ae.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new R(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new z(s,this,e)),this._$AV.push(t),l=o[++a]}r!==l?.index&&(s=ae.nextNode(),r++)}return ae.currentNode=U,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=de(this,e,t),G(e)?e===se||null==e||""===e?(this._$AH!==se&&this._$AR(),this._$AH=se):e!==this._$AH&&e!==ne&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):q(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==se&&G(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=N.createElement(le(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new M(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=re.get(e.strings);return void 0===t&&re.set(e.strings,t=new N(e)),t}k(e){j(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const s of e)i===t.length?t.push(o=new R(this.O(V()),this.O(V()),this,this.options)):o=t[i],o._$AI(s),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,s){this.type=1,this._$AH=se,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=se}_$AI(e,t=this,o,i){const s=this.strings;let r=!1;if(void 0===s)e=de(this,e,t,0),r=!G(e)||e!==this._$AH&&e!==ne,r&&(this._$AH=e);else{const i=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=de(this,i[o+a],t,a),l===ne&&(l=this._$AH[a]),r||=!G(l)||l!==this._$AH[a],l===se?e=se:e!==se&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!i&&this.j(e)}j(e){e===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===se?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==se)}}class L extends k{constructor(e,t,o,i,s){super(e,t,o,i,s),this.type=5}_$AI(e,t=this){if((e=de(this,e,t,0)??se)===ne)return;const o=this._$AH,i=e===se&&o!==se||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==se&&(o===se||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){de(this,e)}}const pe=E.litHtmlPolyfillSupport;pe?.(N,R),(E.litHtmlVersions??=[]).push("3.2.1");class lit_element_r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=o?.renderBefore??null;i._$litPart$=s=new R(t.insertBefore(V(),e),e,void 0,o??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ne}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const he=globalThis.litElementPolyfillSupport;he?.({LitElement:lit_element_r});(globalThis.litElementVersions??=[]).push("4.1.1");const ue=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},ge={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:S},me=(e=ge,t,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const s=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,s,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];t.call(this,o),this.requestUpdate(i,s,e)}}throw Error("Unsupported decorator location: "+i)};function fe(e){return(t,o)=>"object"==typeof o?me(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function be(e){return fe({...e,state:!0,attribute:!1})}const ve=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ye(e,t){return(o,i,s)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?o:s??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ve(o,i,{get(){let o=e.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return ve(o,i,{get(){return r(this)}})}}class IpcCall{constructor(e,t,o=!1,i=!1){this.scope=e,this.reset=o,this.pack=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const we=new IpcCommand("core","webview/ready"),_e=new IpcCommand("core","webview/focus/changed"),xe=(new IpcCommand("core","command/execute"),new IpcCommand("core","configuration/update"),new IpcCommand("core","telemetry/sendEvent")),ke=(new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const $e="home",Ce=new IpcCommand($e,"section/collapse"),Pe=new IpcNotification($e,"repositories/didChange"),Se=new IpcNotification($e,"integrations/didChange"),Re=new IpcNotification($e,"subscription/didChange"),Ae=new IpcNotification($e,"org/settings/didChange"),Ee=new IpcNotification($e,"account/didFocus");class context_request_event_s extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}}class context_consumer_s{constructor(e,t,o,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context){const e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.t,this.subscribe))}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class context_provider_i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const o=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)o.has(e)||(o.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function Oe({context:e}){return(t,o)=>{const i=new WeakMap;if("object"==typeof o)return o.addInitializer((function(){i.set(this,new context_provider_i(this,{context:e}))})),{get(){return t.get.call(this)},set(e){return i.get(this)?.setValue(e),t.set.call(this,e)},init(e){return i.get(this)?.setValue(e),e}};{t.constructor.addInitializer((t=>{i.set(t,new context_provider_i(t,{context:e}))}));const s=Object.getOwnPropertyDescriptor(t,o);let r;if(void 0===s){const e=new WeakMap;r={get(){return e.get(this)},set(t){i.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{const e=s.set;r={...s,set(t){i.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,o,r)}}}function Te({context:e,subscribe:t}){return(o,i)=>{"object"==typeof i?i.addInitializer((function(){new context_consumer_s(this,{context:e,callback:e=>{o.set.call(this,e)},subscribe:t})})):o.constructor.addInitializer((o=>{new context_consumer_s(o,{context:e,callback:e=>{o[i]=e},subscribe:t})}))}}function De(e,t,o){let i,s,r,a,l;function c(e){const o=e-(s??0);return null==s||o>=t||o<0}function d(){const e=Date.now();if(c(e))p();else{l=setTimeout(d,t-(e-(s??0)))}}function p(){return l=void 0,i?function(){const t=i,o=r;return i=r=void 0,a=e.apply(o,t),a}():(i=void 0,r=void 0,a)}function h(...e){const p=Date.now(),h=c(p);return i=null!=o&&i?o(i,e):e,r=this,s=p,h&&null==l?(l=setTimeout(d,t),a):(null==l&&(l=setTimeout(d,t)),a)}return h.cancel=function(){null!=l&&clearTimeout(l),i=void 0,s=void 0,r=void 0,l=void 0},h.flush=function(){return null==l?a:(clearTimeout(l),p())},h.pending=function(){return null!=l},h}const Le=/\(([\s\S]*)\)/,Fe=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,Ie=/\s?=.*$/;const ze=new WeakMap;function We(e,t){return function(o,i,s){let r=ze.get(o.constructor);null==r&&ze.set(o.constructor,r=[]),r.push({method:s.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_r{emit(e,t,o){const i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(i),i}update(e){const t=ze.get(this.constructor);if(null!=t)for(const{keys:o,method:i,afterFirstUpdate:s}of t){if(s&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&i.call(this,t)}super.update(e)}}function Be(e){const t=.001*performance.now();let o=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],i-=e[1],i<0&&(o--,i+=1e9)),[o,i]}function Ue(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const Ve=Ue(),Ge=new Map;function Me(e){Ge.delete(e)}function je(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function He(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const o=t?Ve.current:void 0,i=Ve.next();return{scopeId:i,prevScopeId:o,prefix:`${je(i)} ${e}`}}Error;function Ne(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;o(47);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const qe="utm_source=gitlens-extension&utm_medium=in-app-links",Ke=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${qe}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${qe}`,graph:`https://gitkraken.com/solutions/commit-graph?${qe}`,launchpad:`https://gitkraken.com/solutions/launchpad?${qe}`,platform:`https://gitkraken.com/devex?${qe}`,pricing:`https://gitkraken.com/gitlens/pricing?${qe}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${qe}`,security:`https://help.gitkraken.com/gitlens/security?${qe}`,workspaces:`https://gitkraken.com/solutions/workspaces?${qe}`,cli:`https://gitkraken.com/cli?${qe}`,browserExtension:`https://gitkraken.com/browser-extension?${qe}`,desktop:`https://gitkraken.com/git-client?${qe}`,releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:`https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?${qe}`}),{fromCharCode:Qe}=String;new TextEncoder;function Je(e){const[t,o]=Be(e);return 1e3*t+Math.floor(o/1e6)}function Ye(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const i=1===t?e:o.plural??`${e}s`;return o.only?i:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${i}`}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);const Ze=Symbol("logInstanceNameFn");function Xe(e){return function(e,t=!1){let o,i,s,r,a,l=0,c=!1,d=!1,p=!0;null!=e&&({args:o,if:i,enter:s,exit:r,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:p=!0}=e);l>0&&(d=!0,p=!0);p&&(c=!0);const h=ot.isDebugging,u=t?ot.debug:ot.log,g=h?"debug":"info";return(e,t,m)=>{let f,v;if("function"==typeof m.value?(f=m.value,v="value"):"function"==typeof m.get&&(f=m.get,v="get"),null==f||null==v)throw new Error("Not supported");const y=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(Fe,"")||t,t=t.slice(0,t.indexOf("{"));let o=t.indexOf("("),i=t.indexOf(")");o=o>=0?o+1:0,i=i>0?i:t.indexOf("="),t=t.slice(o,i),t=`(${t})`;const s=Le.exec(t);return null!=s?s[1].split(",").map((e=>e.trim().replace(Ie,""))):[]}(f):[];m[v]=function(...e){if(!h&&!ot.enabled(g)||null!=i&&!i.apply(this,e))return f.apply(this,e);const m=Ve.current,v=Ve.next(),w=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const i=o.indexOf("_");o=-1===i?o:o.substring(i+1),null!=t?.[Ze]&&(o=t[Ze](e,o));return o}(this):void 0;let _,x=w?c?`${je(v,m)} ${w}.${t}`:`${w}.${t}`:t;null!=a&&(x=a({id:v,instance:this,instanceName:w??"",name:t,prefix:x},...e)),c&&(_=function(e,t){return t={prevScopeId:Ve.current,...t},Ge.set(e,t),t}(v,{scopeId:v,prevScopeId:m,prefix:x}));const $=null!=s?s(...e):"";let C;if(!1===o||0===e.length)C="",d||u.call(ot,`${x}${$}`);else{let t;C="";let i,s,r,a=-1;for(r of e){if(i=y[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(C.length>0&&(C+=", "),"string"==typeof t){C+=t;continue}s=String(t(r))}else C.length>0&&(C+=", "),s=ot.toLoggable(r);C+=i?`${i}=${s}`:s}d||u.call(ot,C?`${x}${$}(${C})`:`${x}${$}`)}if(d||p||null!=r){const t=p?Be():void 0,o=e=>{const o=void 0!==t?` [${Je(t)}ms]`:"";d?ot.error(e,C?`${x}${$}(${C})`:`${x}${$}`,_?.exitDetails?`failed${_.exitDetails}${o}`:`failed${o}`):ot.error(e,x,_?.exitDetails?`failed${_.exitDetails}${o}`:`failed${o}`),c&&Me(v)};let i;try{i=f.apply(this,e)}catch(e){throw o(e),e}const s=e=>{let o,i,s,a;if(null!=t?(o=Je(t),o>500?(i=ot.warn,s=` [*${o}ms] (slow)`):(i=u,s=` [${o}ms]`)):(s="",i=u),null!=r)if("function"==typeof r)try{a=r(e)}catch(e){a=`@log.exit error: ${e}`}else!0===r&&(a=`returned ${ot.toLoggable(e)}`);else _?.exitFailed?(a=_.exitFailed,i=ot.error):a="completed";d?(0===l||o>l)&&i.call(ot,C?`${x}${$}(${C}) ${a}${_?.exitDetails||""}${s}`:`${x}${$} ${a}${_?.exitDetails||""}${s}`):i.call(ot,C?`${x}(${C}) ${a}${_?.exitDetails||""}${s}`:`${x} ${a}${_?.exitDetails||""}${s}`),c&&Me(v)};return null!=i&&Ne(i)?i.then(s,o):s(i),i}return f.apply(this,e)}}}(e,!0)}const et=new Set(["accessToken","password","token"]),tt=function(e,t){return et.has(e)?`<${t}>`:t},ot=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=it(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=it(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let i;if(i=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==i){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(t??=this.provider.sanitize??tt,Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function it(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const nt={enabled:e=>ot.enabled(e)||ot.isDebugging,log:(e,t,o,...i)=>{switch(e){case"error":ot.error(void 0,t,o,...i);break;case"warn":ot.warn(t,o,...i);break;case"info":ot.log(t,o,...i);break;default:ot.debug(t,o,...i)}}};class LoggerContext{constructor(e){this.scope=He(e,void 0),ot.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off")}log(e,...t){"string"==typeof e?ot.log(this.scope,e,...t):ot.log(e,t.shift(),...t)}}class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(xe,e)}dispose(){this.disposables.forEach((e=>e.dispose()))}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:He(e??"",!1),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??nt,this._time=Be(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=Be(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=Be(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,i]=Be(this._time),s=1e3*o+Math.floor(i/1e6),r=e?.message??"";this.logProvider.log(s>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${s}ms]${e?.suffix??""}`)}}var st;function rt(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function at(e,t){return new Promise((o=>{e.addEventListener(t,(function i(s){s.target===e&&(e.removeEventListener(t,i),o())}))}))}(st||(st={})).on=function(e,t,o,i){let s=!1;if("string"==typeof e){const r=function(t){const i=t?.target?.closest(e);null!=i&&o(t,i)};return document.addEventListener(t,r,i??!0),{dispose:()=>{s||(s=!0,document.removeEventListener(t,r,i??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,i??!1),{dispose:()=>{s||(s=!0,e.removeEventListener(t,r,i??!1))}}};const lt=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const i=this.listeners.push(null==t?e:[e,t]),s={dispose:()=>{s.dispose=_Emitter._noop,this._disposed||i()}};return Array.isArray(o)&&o.push(s),s}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};lt._noop=function(){};let ct=lt;const dt={done:!0,value:void 0},pt=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};pt.Undefined=new pt(void 0);let ht=pt;class LinkedList{constructor(){this._first=ht.Undefined,this._last=ht.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ht.Undefined}clear(){this._first=ht.Undefined,this._last=ht.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new ht(e);if(this._first===ht.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(o))}}shift(){if(this._first===ht.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ht.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ht.Undefined&&e.next!==ht.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ht.Undefined&&e.next===ht.Undefined?(this._first=ht.Undefined,this._last=ht.Undefined):e.next===ht.Undefined?(this._last=this._last.prev,this._last.next=ht.Undefined):e.prev===ht.Undefined&&(this._first=this._first.next,this._first.prev=ht.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===ht.Undefined?dt:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==ht.Undefined;t=t.next)e.push(t.element);return e}}var ut=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,mt=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?gt(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&ut(t,o,r),r};let ft;const bt=Ue();function vt(){return`webview:${bt.next()}`}let yt=class{constructor(e){this.appName=e,this._onReceiveMessage=new ct,this._pendingHandlers=new Map,this._api=ft??=acquireVsCodeApi(),this._disposable=st.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=Ge.get(Ve.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const i=function(e,t,...o){return(t?.provider??nt).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(He(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),i?.stop()}if(null==o.completionId)this._onReceiveMessage.fire(o);else{const e=_t(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}sendCommand(e,t){const o=vt();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=vt(),i=new Promise(((t,i)=>{const s=_t(e.response.method,o);let r;function a(){clearTimeout(r),r=void 0,this._pendingHandlers.delete(s)}r=setTimeout((()=>{a.call(this),i(new Error(`Timed out waiting for completion of ${s}`))}),6e4),this._pendingHandlers.set(s,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var wt;function _t(e,t){return`${e}|${t}`}mt([Xe({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],yt.prototype,"onMessageReceived",1),mt([Xe({args:{0:e=>e.method,1:!1}})],yt.prototype,"sendCommand",1),mt([Xe({args:{0:e=>e.method,1:!1,2:!1}})],yt.prototype,"sendRequest",1),mt([Xe({args:{0:e=>`${e.id}, method=${e.method}`}})],yt.prototype,"postMessage",1),yt=mt([(wt=(e,t)=>`${e.appName}(${t})`,e=>{e[Ze]=wt})],yt);var xt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,$t=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?kt(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&xt(t,o,r),r};class GlApp extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{const t=e.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===t||(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}connectedCallback(){super.connectedCallback(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new yt(this.name),this.disposables.push(this._stateProvider=this.createStateProvider(this.state,this._ipc),this._ipc.onReceiveMessage((e=>{if(!0===ke.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"))})),this._ipc,this._telemetry=new TelemetryContext(this._ipc)),this._ipc.sendCommand(we,void 0),this._sendWebviewFocusChangedCommandDebounced=De((e=>{this._ipc.sendCommand(_e,e)}),150),document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}disconnectedCallback(){super.disconnectedCallback(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach((e=>e.dispose()))}render(){return ie`<slot></slot>`}}GlApp.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},$t([fe({type:String})],GlApp.prototype,"name",2),$t([fe({type:String})],GlApp.prototype,"placement",2),$t([Oe({context:"ipc"})],GlApp.prototype,"_ipc",2),$t([Oe({context:"logger"})],GlApp.prototype,"_logger",2),$t([Oe({context:"telemetry"})],GlApp.prototype,"_telemetry",2),$t([fe({type:Object})],GlApp.prototype,"state",2);d`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;const Ct=d`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,Pt=d`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,St=d`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`,Rt=d`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Ct}
	}
	a:hover {
		text-decoration: underline;
	}
`,At=d`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`,Et=d`
	* {
		box-sizing: border-box;
	}

	:not(:defined) {
		visibility: hidden;
	}

	[hidden] {
		display: none !important;
	}

	/* roll into shared focus style */
	:focus-visible {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	b {
		font-weight: 600;
	}

	p {
		margin-top: 0;
	}

	ul {
		margin-top: 0;
		padding-left: 1.2em;
	}
`,Ot=d`
	.home {
		padding: 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		overflow: hidden;
	}
	.home__header {
		flex: none;
		padding: 0 2rem;
		position: relative;
	}
	.home__main {
		flex: 1;
		overflow: auto;
		padding: 0.8rem 2rem;
	}
	.home__main > *:last-child {
		margin-bottom: 0;
	}
	.home__nav {
		flex: none;
	}
	.home__footer {
		flex: none;
	}

	gl-home-account-content {
		margin-bottom: 0;
	}

	gl-repo-alerts:not([has-alerts]) {
		display: none;
	}
`,Tt=d`
	.inline-nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.inline-nav__group {
		display: flex;
		flex-direction: row;
	}
	.inline-nav__link {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2.2rem;
		height: 2.2rem;
		color: inherit;
		border-radius: 0.3rem;
	}
	.inline-nav__link .code-icon {
		line-height: 1.6rem;
	}
	.inline-nav__link:hover {
		color: inherit;
		text-decoration: none;
	}
	:host-context(.vscode-dark) .inline-nav__link:hover {
		background-color: var(--color-background--lighten-10);
	}
	:host-context(.vscode-light) .inline-nav__link:hover {
		background-color: var(--color-background--darken-10);
	}
	@media (max-width: 370px) {
		.inline-nav__link--text > :last-child {
			display: none;
		}
	}
	@media (min-width: 371px) {
		.inline-nav__link--text {
			flex: none;
			padding-left: 0.3rem;
			padding-right: 0.3rem;
			gap: 0.2rem;
			min-width: 2.2rem;
			width: fit-content;
		}
		.inline-nav__link--text + .inline-nav__link--text {
			margin-left: 0.2rem;
		}
	}

	.promo-banner {
		text-align: center;
		margin-bottom: 1rem;
	}
	.promo-banner--eyebrow {
		color: var(--color-foreground--50);
		margin-bottom: 0.2rem;
	}
	.promo-banner:not([has-promo]) {
		display: none;
	}
`,Dt=d`
	.button-container {
		margin: 1rem auto 0;
		text-align: left;
		max-width: 30rem;
		transition: max-width 0.2s ease-out;
	}

	@media (min-width: 640px) {
		.button-container {
			max-width: 100%;
		}
	}
	.button-container--trio > gl-button:first-child {
		margin-bottom: 0.4rem;
	}

	.button-group {
		display: inline-flex;
		gap: 0.4rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}
	.button-group gl-button {
		margin-top: 0;
	}
	.button-group gl-button:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.button-group gl-button:not(:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`,Lt=d`
	.alert {
		position: relative;
		padding: 0.8rem 1.2rem;
		line-height: 1.2;
		margin-bottom: 1.2rem;
		background-color: var(--color-alert-neutralBackground);
		border-left: 0.3rem solid var(--color-alert-neutralBorder);
		color: var(--color-alert-foreground);
	}
	.alert__title {
		font-size: 1.4rem;
		margin: 0;
	}
	.alert__description {
		font-size: 1.2rem;
		margin: 0.4rem 0 0;
	}
	.alert__description > :first-child {
		margin-top: 0;
	}
	.alert__description > :last-child {
		margin-bottom: 0;
	}
	.alert__close {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		color: inherit;
		opacity: 0.64;
	}
	.alert__close:hover {
		color: inherit;
		opacity: 1;
	}
	.alert.is-collapsed {
		cursor: pointer;
	}
	.alert.is-collapsed:hover {
		background-color: var(--color-alert-neutralHoverBackground);
	}
	.alert.is-collapsed .alert__description,
	.alert.is-collapsed .alert__close gl-tooltip:first-child,
	.alert:not(.is-collapsed) .alert__close gl-tooltip:last-child {
		display: none;
	}
	.alert--info {
		background-color: var(--color-alert-infoBackground);
		border-left-color: var(--color-alert-infoBorder);
	}
	.alert--warning {
		background-color: var(--color-alert-warningBackground);
		border-left-color: var(--color-alert-warningBorder);
	}
	.alert--danger {
		background-color: var(--color-alert-errorBackground);
		border-left-color: var(--color-alert-errorBorder);
	}
`,Ft=d`
	.nav-list {
		margin-left: -2rem;
		margin-right: -2rem;
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		align-items: stretch;
		margin-bottom: 1.6rem;
	}
	.nav-list__item {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		padding: 0.4rem 2rem;
	}
	.nav-list__item:hover,
	.nav-list__item:focus-within {
		background-color: var(--vscode-list-hoverBackground);
		color: var(--vscode-list-hoverForeground);
	}
	.nav-list__item:has(:first-child:focus) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.nav-list__item:has(:active) {
		background-color: var(--vscode-list-activeSelectionBackground);
		color: var(--vscode-list-activeSelectionForeground);
	}
	.nav-list__item:has(.is-disabled) {
		cursor: not-allowed;
	}
	.nav-list__link {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		color: inherit;
	}
	.nav-list__link:hover,
	.nav-list__link:focus {
		color: inherit;
		text-decoration: none;
	}
	.nav-list__link:focus {
		outline: none;
	}
	.nav-list__link.is-disabled,
	.nav-list__link.is-disabled:hover {
		opacity: 0.5;
		pointer-events: none;
		text-decoration: none;
	}
	.nav-list__icon {
		flex: none;
		opacity: 0.5;
	}
	.nav-list__label {
		flex: 1;
		font-weight: 600;
	}
	.nav-list__desc {
		color: var(--color-foreground--65);
		font-variant: all-small-caps;
		margin-left: 1rem;
	}
	.nav-list__group {
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}
	.nav-list__group .nav-list__label {
		width: auto;
	}
	.nav-list__access {
		flex: none;
		position: relative;
		left: 1.5rem;
		font-size: x-small;
		outline: none;
		white-space: nowrap;
		--gl-feature-badge-color: color-mix(in srgb, transparent 40%, currentColor);
		--gl-feature-badge-border-color: color-mix(in srgb, transparent 40%, var(--color-foreground--50));
	}
	.nav-list__item:hover .nav-list__label {
		text-decoration: underline;
	}
	.nav-list__item:hover .is-disabled .nav-list__label {
		text-decoration: none;
	}
	.nav-list__item:hover .nav-list__desc {
		color: var(--color-foreground);
	}
	.nav-list__item:focus-within .nav-list__access,
	.nav-list__item:hover .nav-list__access {
		--gl-feature-badge-color: currentColor;
		--gl-feature-badge-border-color: var(--color-foreground--50);
	}
	.nav-list__title {
		padding: 0 2rem;
	}

	.t-eyebrow {
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-foreground--50);
		margin: 0;
	}
	.t-eyebrow.sticky {
		top: -8px;
	}
`,It="state";class HomeStateProvider{constructor(e,t,o){this._ipc=o,this.state=t,this.provider=new context_provider_i(e,{context:It,initialValue:t}),this.disposable=this._ipc.onReceiveMessage((e=>{switch(!0){case Pe.is(e):this.state.repositories=e.params,this.state.timestamp=Date.now(),this.provider.setValue(this.state,!0);break;case Re.is(e):this.state.subscription=e.params.subscription,this.state.avatar=e.params.avatar,this.state.organizationsCount=e.params.organizationsCount,this.state.timestamp=Date.now(),this.provider.setValue(this.state,!0);break;case Ae.is(e):this.state.orgSettings=e.params.orgSettings,this.state.timestamp=Date.now(),this.provider.setValue(this.state,!0);break;case Se.is(e):this.state.hasAnyIntegrationConnected=e.params.hasAnyIntegrationConnected,this.state.timestamp=Date.now(),this.provider.setValue(this.state,!0)}}))}dispose(){this.disposable.dispose()}}function zt(e,t,o){return e?t(e):o?.(e)}var Wt=(e=>(e.Community="community",e.CommunityWithAccount="community-with-account",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(Wt||{}),Bt=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Community=0]="Community",e[e.ProPreview=1]="ProPreview",e[e.ProPreviewExpired=2]="ProPreviewExpired",e[e.ProTrial=3]="ProTrial",e[e.ProTrialExpired=4]="ProTrialExpired",e[e.ProTrialReactivationEligible=5]="ProTrialReactivationEligible",e[e.Paid=6]="Paid",e))(Bt||{});const Ut=[{key:"launchpad-extended",code:"GLLAUNCHPAD24",states:[Bt.Community,Bt.ProPreview,Bt.ProPreviewExpired,Bt.ProTrial,Bt.ProTrialExpired,Bt.ProTrialReactivationEligible],startsOn:new Date("2024-09-27T06:59:00.000Z").getTime(),expiresOn:new Date("2024-10-14T06:59:00.000Z").getTime(),command:{tooltip:"Launchpad sale: Save 75% or more on GitLens Pro"},quickpick:{detail:"$(rocket) Launchpad sale: Save 75% or more on GitLens Pro"}},{key:"devexdays",code:"DEVEXDAYS24",states:[Bt.Community,Bt.ProPreview,Bt.ProPreviewExpired,Bt.ProTrial,Bt.ProTrialExpired,Bt.ProTrialReactivationEligible],startsOn:new Date("2024-10-13T06:59:00.000Z").getTime(),expiresOn:new Date("2024-11-05T06:59:00.000Z").getTime(),command:{tooltip:"Limited-Time sale: Save up to 80% off GitLens Pro"},locations:["account","badge","gate"],quickpick:{detail:"$(star-full) Limited-Time sale: Save up to 80% off GitLens Pro"}},{key:"pro50",states:[Bt.Community,Bt.ProPreview,Bt.ProPreviewExpired,Bt.ProTrial,Bt.ProTrialExpired,Bt.ProTrialReactivationEligible],command:{tooltip:"Limited-Time sale: Save 33% or more on your 1st seat of Pro. See your special price"},quickpick:{detail:"$(star-full) Limited-Time sale: Save 33% or more on your 1st seat of Pro"}}];function Vt(e,t,o){if(null!=e)for(const i of Ut)if((null==o||o===i.key)&&Gt(i,e)){if(null==t||null==i.locations||i.locations.includes(t))return i;break}}function Gt(e,t){const o=Date.now();return(null==e.states||e.states.includes(t))&&(null==e.expiresOn||e.expiresOn>o)&&(null==e.startsOn||e.startsOn<o)}function Mt(e){switch(e){case Wt.CommunityWithAccount:return"GitLens Free";case Wt.Pro:return"GitLens Pro";case Wt.Teams:return"GitLens Teams";case Wt.Enterprise:return"GitLens Enterprise";case Wt.Community:default:return"GitLens"}}Wt.Community,Wt.CommunityWithAccount,Wt.Pro,Wt.Teams,Wt.Enterprise;function jt(e,t){return Ht(e.plan.effective.expiresOn,t)}function Ht(e,t){return null!=e?function(e,t,o,i){const s=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),r=i??Math.floor;switch(o){case"days":return r(s/864e5);case"hours":return r(s/36e5);case"minutes":return r(s/6e4);case"seconds":return r(s/1e3);default:return s}}(Date.now(),new Date(e),t,Math.round):void 0}function Nt(e){return(t=e.plan.actual.id)!==Wt.Community&&t!==Wt.CommunityWithAccount;var t}var qt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,Qt=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Kt(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&qt(t,o,r),r};let Jt=class extends lit_element_r{constructor(){super(...arguments),this.open=!1}get headerId(){return`gl-accordion-header-${this.id??Math.random().toString(36).substring(2,9)}`}render(){return ie`
			<details ?open=${this.open} @toggle=${this._handleToggle} role="region" aria-labelledby=${this.headerId}>
				<summary part="header" class="header" id=${this.headerId} role="button" aria-expanded=${this.open}>
					<slot class="label" name="header"></slot>
					<code-icon class="icon" icon=${this.open?"chevron-down":"chevron-right"}></code-icon>
				</summary>
				<div part="content" class="content">
					<slot></slot>
				</div>
			</details>
		`}_handleToggle(e){const t=e.target;this.open=t.open,this.dispatchEvent(new CustomEvent("gl-toggle",{detail:{open:this.open},bubbles:!0,composed:!0}))}};Jt.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Jt.styles=d`
		:host {
			display: block;
			font-family: var(--vscode-font-family);
			font-size: var(--vscode-font-size);
			font-weight: var(--vscode-font-weight);
			background-color: var(--vscode-editor-background);
			color: var(--vscode-foreground);
		}

		/*
		details {
			border: 1px solid var(--vscode-panel-border);
			border-radius: 4px;
			overflow: hidden;
		}
		*/

		.header {
			padding: 8px 12px;
			background-color: var(--vscode-sideBar-background);
			cursor: pointer;
			user-select: none;
			list-style: none;
			outline: none;
			display: flex;
			align-items: center;
			gap: 0.6rem;
		}

		.header::-webkit-details-marker {
			display: none;
		}

		.label {
			flex: 1;
			display: block;
		}

		.icon {
			flex: none;
			width: 20px;
			color: var(--vscode-foreground);
			opacity: 0.6;
		}

		.header:hover {
			background-color: var(--vscode-list-hoverBackground);
		}

		.header:focus {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		.content {
			padding: 12px;
			background-color: var(--vscode-editor-background);
		}
	`,Qt([fe({type:Boolean})],Jt.prototype,"open",2),Jt=Qt([ue("gl-accordion")],Jt);var Yt=Object.defineProperty,Zt=Object.defineProperties,Xt=Object.getOwnPropertyDescriptor,eo=Object.getOwnPropertyDescriptors,to=Object.getOwnPropertySymbols,oo=Object.prototype.hasOwnProperty,io=Object.prototype.propertyIsEnumerable,no=(e,t,o)=>t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,so=(e,t)=>{for(var o in t||(t={}))oo.call(t,o)&&no(e,o,t[o]);if(to)for(var o of to(t))io.call(t,o)&&no(e,o,t[o]);return e},ro=(e,t)=>Zt(e,eo(t)),ao=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Xt(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Yt(t,o,r),r},lo=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)},co=new Map,po=new WeakMap;function ho(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function uo(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function go(e,t){co.set(e,ho(t))}function mo(e,t,o){const i=po.get(e);if(null==i?void 0:i[t])return uo(i[t],o.dir);const s=co.get(t);return s?uo(s,o.dir):{keyframes:[],options:{duration:0}}}var fo,bo=d`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,vo=d`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,yo=d`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,wo=class extends lit_element_r{constructor(){super(),((e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)})(this,fo,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,so({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const i=customElements.get(e);if(!i){try{customElements.define(e,t,o)}catch(i){customElements.define(e,class extends t{},o)}return}let s=" (unknown version)",r=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in i&&i.version&&(r=" v"+i.version)}attributeChangedCallback(e,t,o){var i,s,r;lo(i=this,s=fo,"read from private field"),(r?r.call(i):s.get(i))||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,o,i)=>{lo(e,t,"write to private field"),i?i.call(e,o):t.set(e,o)})(this,fo,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)}))}};fo=new WeakMap,wo.version="2.17.1",wo.dependencies={},ao([fe()],wo.prototype,"dir",2),ao([fe()],wo.prototype,"lang",2);const _o=Math.min,xo=Math.max,ko=Math.round,$o=Math.floor,Co=e=>({x:e,y:e}),Po={left:"right",right:"left",bottom:"top",top:"bottom"},So={start:"end",end:"start"};function Ro(e,t,o){return xo(e,_o(t,o))}function Ao(e,t){return"function"==typeof e?e(t):e}function Eo(e){return e.split("-")[0]}function Oo(e){return e.split("-")[1]}function To(e){return"x"===e?"y":"x"}function Do(e){return"y"===e?"height":"width"}function Lo(e){return["top","bottom"].includes(Eo(e))?"y":"x"}function Fo(e){return To(Lo(e))}function Io(e){return e.replace(/start|end/g,(e=>So[e]))}function zo(e){return e.replace(/left|right|bottom|top/g,(e=>Po[e]))}function Wo(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Bo(e){const{x:t,y:o,width:i,height:s}=e;return{width:i,height:s,top:o,left:t,right:t+i,bottom:o+s,x:t,y:o}}function Uo(e,t,o){let{reference:i,floating:s}=e;const r=Lo(t),a=Fo(t),l=Do(a),c=Eo(t),d="y"===r,p=i.x+i.width/2-s.width/2,h=i.y+i.height/2-s.height/2,u=i[l]/2-s[l]/2;let g;switch(c){case"top":g={x:p,y:i.y-s.height};break;case"bottom":g={x:p,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:h};break;case"left":g={x:i.x-s.width,y:h};break;default:g={x:i.x,y:i.y}}switch(Oo(t)){case"start":g[a]-=u*(o&&d?-1:1);break;case"end":g[a]+=u*(o&&d?-1:1)}return g}async function Vo(e,t){var o;void 0===t&&(t={});const{x:i,y:s,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:u=!1,padding:g=0}=Ao(t,e),m=Wo(g),f=l[u?"floating"===h?"reference":"floating":h],v=Bo(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(f)))||o?f:f.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:d,rootBoundary:p,strategy:c})),y="floating"===h?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),_=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},x=Bo(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-x.top+m.top)/_.y,bottom:(x.bottom-v.bottom+m.bottom)/_.y,left:(v.left-x.left+m.left)/_.x,right:(x.right-v.right+m.right)/_.x}}function Go(){return"undefined"!=typeof window}function Mo(e){return No(e)?(e.nodeName||"").toLowerCase():"#document"}function jo(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ho(e){var t;return null==(t=(No(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function No(e){return!!Go()&&(e instanceof Node||e instanceof jo(e).Node)}function qo(e){return!!Go()&&(e instanceof Element||e instanceof jo(e).Element)}function Ko(e){return!!Go()&&(e instanceof HTMLElement||e instanceof jo(e).HTMLElement)}function Qo(e){return!(!Go()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof jo(e).ShadowRoot)}function Jo(e){const{overflow:t,overflowX:o,overflowY:i,display:s}=oi(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(s)}function Yo(e){return["table","td","th"].includes(Mo(e))}function Zo(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Xo(e){const t=ei(),o=qo(e)?oi(e):e;return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function ei(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ti(e){return["html","body","#document"].includes(Mo(e))}function oi(e){return jo(e).getComputedStyle(e)}function ii(e){return qo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ni(e){if("html"===Mo(e))return e;const t=e.assignedSlot||e.parentNode||Qo(e)&&e.host||Ho(e);return Qo(t)?t.host:t}function si(e){const t=ni(e);return ti(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ko(t)&&Jo(t)?t:si(t)}function ri(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);const s=si(e),r=s===(null==(i=e.ownerDocument)?void 0:i.body),a=jo(s);if(r){const e=ai(a);return t.concat(a,a.visualViewport||[],Jo(s)?s:[],e&&o?ri(e):[])}return t.concat(s,ri(s,[],o))}function ai(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function li(e){const t=oi(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=Ko(e),r=s?e.offsetWidth:o,a=s?e.offsetHeight:i,l=ko(o)!==r||ko(i)!==a;return l&&(o=r,i=a),{width:o,height:i,$:l}}function ci(e){return qo(e)?e:e.contextElement}function di(e){const t=ci(e);if(!Ko(t))return Co(1);const o=t.getBoundingClientRect(),{width:i,height:s,$:r}=li(t);let a=(r?ko(o.width):o.width)/i,l=(r?ko(o.height):o.height)/s;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const pi=Co(0);function hi(e){const t=jo(e);return ei()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:pi}function ui(e,t,o,i){void 0===t&&(t=!1),void 0===o&&(o=!1);const s=e.getBoundingClientRect(),r=ci(e);let a=Co(1);t&&(i?qo(i)&&(a=di(i)):a=di(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==jo(e))&&t}(r,o,i)?hi(r):Co(0);let c=(s.left+l.x)/a.x,d=(s.top+l.y)/a.y,p=s.width/a.x,h=s.height/a.y;if(r){const e=jo(r),t=i&&qo(i)?jo(i):i;let o=e,s=ai(o);for(;s&&i&&t!==o;){const e=di(s),t=s.getBoundingClientRect(),i=oi(s),r=t.left+(s.clientLeft+parseFloat(i.paddingLeft))*e.x,a=t.top+(s.clientTop+parseFloat(i.paddingTop))*e.y;c*=e.x,d*=e.y,p*=e.x,h*=e.y,c+=r,d+=a,o=jo(s),s=ai(o)}}return Bo({width:p,height:h,x:c,y:d})}function gi(e,t){const o=ii(e).scrollLeft;return t?t.left+o:ui(Ho(e)).left+o}function mi(e,t,o){let i;if("viewport"===t)i=function(e,t){const o=jo(e),i=Ho(e),s=o.visualViewport;let r=i.clientWidth,a=i.clientHeight,l=0,c=0;if(s){r=s.width,a=s.height;const e=ei();(!e||e&&"fixed"===t)&&(l=s.offsetLeft,c=s.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,o);else if("document"===t)i=function(e){const t=Ho(e),o=ii(e),i=e.ownerDocument.body,s=xo(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=xo(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+gi(e);const l=-o.scrollTop;return"rtl"===oi(i).direction&&(a+=xo(t.clientWidth,i.clientWidth)-s),{width:s,height:r,x:a,y:l}}(Ho(e));else if(qo(t))i=function(e,t){const o=ui(e,!0,"fixed"===t),i=o.top+e.clientTop,s=o.left+e.clientLeft,r=Ko(e)?di(e):Co(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:s*r.x,y:i*r.y}}(t,o);else{const o=hi(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Bo(i)}function fi(e,t){const o=ni(e);return!(o===t||!qo(o)||ti(o))&&("fixed"===oi(o).position||fi(o,t))}function bi(e,t,o){const i=Ko(t),s=Ho(t),r="fixed"===o,a=ui(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=Co(0);if(i||!i&&!r)if(("body"!==Mo(t)||Jo(s))&&(l=ii(t)),i){const e=ui(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else s&&(c.x=gi(s));let d=0,p=0;if(s&&!i&&!r){const e=s.getBoundingClientRect();p=e.top+l.scrollTop,d=e.left+l.scrollLeft-gi(s,e)}return{x:a.left+l.scrollLeft-c.x-d,y:a.top+l.scrollTop-c.y-p,width:a.width,height:a.height}}function vi(e){return"static"===oi(e).position}function yi(e,t){if(!Ko(e)||"fixed"===oi(e).position)return null;if(t)return t(e);let o=e.offsetParent;return Ho(e)===o&&(o=o.ownerDocument.body),o}function wi(e,t){const o=jo(e);if(Zo(e))return o;if(!Ko(e)){let t=ni(e);for(;t&&!ti(t);){if(qo(t)&&!vi(t))return t;t=ni(t)}return o}let i=yi(e,t);for(;i&&Yo(i)&&vi(i);)i=yi(i,t);return i&&ti(i)&&vi(i)&&!Xo(i)?o:i||function(e){let t=ni(e);for(;Ko(t)&&!ti(t);){if(Xo(t))return t;if(Zo(t))return null;t=ni(t)}return null}(e)||o}const _i={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:i,strategy:s}=e;const r="fixed"===s,a=Ho(i),l=!!t&&Zo(t.floating);if(i===a||l&&r)return o;let c={scrollLeft:0,scrollTop:0},d=Co(1);const p=Co(0),h=Ko(i);if((h||!h&&!r)&&(("body"!==Mo(i)||Jo(a))&&(c=ii(i)),Ko(i))){const e=ui(i);d=di(i),p.x=e.x+i.clientLeft,p.y=e.y+i.clientTop}return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-c.scrollLeft*d.x+p.x,y:o.y*d.y-c.scrollTop*d.y+p.y}},getDocumentElement:Ho,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:s}=e;const r=[..."clippingAncestors"===o?Zo(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let i=ri(e,[],!1).filter((e=>qo(e)&&"body"!==Mo(e))),s=null;const r="fixed"===oi(e).position;let a=r?ni(e):e;for(;qo(a)&&!ti(a);){const t=oi(a),o=Xo(a);o||"fixed"!==t.position||(s=null),(r?!o&&!s:!o&&"static"===t.position&&s&&["absolute","fixed"].includes(s.position)||Jo(a)&&!o&&fi(e,a))?i=i.filter((e=>e!==a)):s=t,a=ni(a)}return t.set(e,i),i}(t,this._c):[].concat(o),i],a=r[0],l=r.reduce(((e,o)=>{const i=mi(t,o,s);return e.top=xo(i.top,e.top),e.right=_o(i.right,e.right),e.bottom=_o(i.bottom,e.bottom),e.left=xo(i.left,e.left),e}),mi(t,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:wi,getElementRects:async function(e){const t=this.getOffsetParent||wi,o=this.getDimensions,i=await o(e.floating);return{reference:bi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=li(e);return{width:t,height:o}},getScale:di,isElement:qo,isRTL:function(e){return"rtl"===oi(e).direction}};function xi(e,t,o,i){void 0===i&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=i,d=ci(e),p=s||r?[...d?ri(d):[],...ri(t)]:[];p.forEach((e=>{s&&e.addEventListener("scroll",o,{passive:!0}),r&&e.addEventListener("resize",o)}));const h=d&&l?function(e,t){let o,i=null;const s=Ho(e);function r(){var e;clearTimeout(o),null==(e=i)||e.disconnect(),i=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),r();const{left:d,top:p,width:h,height:u}=e.getBoundingClientRect();if(l||t(),!h||!u)return;const g={rootMargin:-$o(p)+"px "+-$o(s.clientWidth-(d+h))+"px "+-$o(s.clientHeight-(p+u))+"px "+-$o(d)+"px",threshold:xo(0,_o(1,c))||1};let m=!0;function f(e){const t=e[0].intersectionRatio;if(t!==c){if(!m)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}m=!1}try{i=new IntersectionObserver(f,{...g,root:s.ownerDocument})}catch(e){i=new IntersectionObserver(f,g)}i.observe(e)}(!0),r}(d,o):null;let u,g=-1,m=null;a&&(m=new ResizeObserver((e=>{let[i]=e;i&&i.target===d&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=m)||e.observe(t)}))),o()})),d&&!c&&m.observe(d),m.observe(t));let f=c?ui(e):null;return c&&function t(){const i=ui(e);!f||i.x===f.x&&i.y===f.y&&i.width===f.width&&i.height===f.height||o();f=i,u=requestAnimationFrame(t)}(),o(),()=>{var e;p.forEach((e=>{s&&e.removeEventListener("scroll",o),r&&e.removeEventListener("resize",o)})),null==h||h(),null==(e=m)||e.disconnect(),m=null,c&&cancelAnimationFrame(u)}}const ki=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:s,y:r,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:o,platform:i,elements:s}=e,r=await(null==i.isRTL?void 0:i.isRTL(s.floating)),a=Eo(o),l=Oo(o),c="y"===Lo(o),d=["left","top"].includes(a)?-1:1,p=r&&c?-1:1,h=Ao(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:m}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*p,y:u*d}:{x:u*d,y:g*p}}(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:s+c.x,y:r+c.y,data:{...c,placement:a}}}}},$i=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:s}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=Ao(e,t),d={x:o,y:i},p=await Vo(t,c),h=Lo(Eo(s)),u=To(h);let g=d[u],m=d[h];if(r){const e="y"===u?"bottom":"right";g=Ro(g+p["y"===u?"top":"left"],g,g-p[e])}if(a){const e="y"===h?"bottom":"right";m=Ro(m+p["y"===h?"top":"left"],m,m-p[e])}const f=l.fn({...t,[u]:g,[h]:m});return{...f,data:{x:f.x-o,y:f.y-i,enabled:{[u]:r,[h]:a}}}}}},Ci=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:s,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...v}=Ao(e,t);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const y=Eo(s),w=Lo(l),_=Eo(l)===l,x=await(null==c.isRTL?void 0:c.isRTL(d.floating)),$=u||(_||!f?[zo(l)]:function(e){const t=zo(e);return[Io(e),t,Io(t)]}(l)),C="none"!==m;!u&&C&&$.push(...function(e,t,o,i){const s=Oo(e);let r=function(e,t,o){const i=["left","right"],s=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?s:i:t?i:s;case"left":case"right":return t?r:a;default:return[]}}(Eo(e),"start"===o,i);return s&&(r=r.map((e=>e+"-"+s)),t&&(r=r.concat(r.map(Io)))),r}(l,f,m,x));const P=[l,...$],S=await Vo(t,v),A=[];let E=(null==(i=r.flip)?void 0:i.overflows)||[];if(p&&A.push(S[y]),h){const e=function(e,t,o){void 0===o&&(o=!1);const i=Oo(e),s=Fo(e),r=Do(s);let a="x"===s?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=zo(a)),[a,zo(a)]}(s,a,x);A.push(S[e[0]],S[e[1]])}if(E=[...E,{placement:s,overflows:A}],!A.every((e=>e<=0))){var O,T;const e=((null==(O=r.flip)?void 0:O.index)||0)+1,t=P[e];if(t)return{data:{index:e,overflows:E},reset:{placement:t}};let o=null==(T=E.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:T.placement;if(!o)switch(g){case"bestFit":{var D;const e=null==(D=E.filter((e=>{if(C){const t=Lo(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:D[0];e&&(o=e);break}case"initialPlacement":o=l}if(s!==o)return{reset:{placement:o}}}return{}}}},Pi=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,i;const{placement:s,rects:r,platform:a,elements:l}=t,{apply:c=()=>{},...d}=Ao(e,t),p=await Vo(t,d),h=Eo(s),u=Oo(s),g="y"===Lo(s),{width:m,height:f}=r.floating;let v,y;"top"===h||"bottom"===h?(v=h,y=u===(await(null==a.isRTL?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(y=h,v="end"===u?"top":"bottom");const w=f-p.top-p.bottom,_=m-p.left-p.right,x=_o(f-p[v],w),$=_o(m-p[y],_),C=!t.middlewareData.shift;let P=x,S=$;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(S=_),null!=(i=t.middlewareData.shift)&&i.enabled.y&&(P=w),C&&!u){const e=xo(p.left,0),t=xo(p.right,0),o=xo(p.top,0),i=xo(p.bottom,0);g?S=m-2*(0!==e||0!==t?e+t:xo(p.left,p.right)):P=f-2*(0!==o||0!==i?o+i:xo(p.top,p.bottom))}await c({...t,availableWidth:S,availableHeight:P});const A=await a.getDimensions(l.floating);return m!==A.width||f!==A.height?{reset:{rects:!0}}:{}}}},Si=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:s,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:p=0}=Ao(e,t)||{};if(null==d)return{};const h=Wo(p),u={x:o,y:i},g=Fo(s),m=Do(g),f=await a.getDimensions(d),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",_=v?"clientHeight":"clientWidth",x=r.reference[m]+r.reference[g]-u[g]-r.floating[m],$=u[g]-r.reference[g],C=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let P=C?C[_]:0;P&&await(null==a.isElement?void 0:a.isElement(C))||(P=l.floating[_]||r.floating[m]);const S=x/2-$/2,A=P/2-f[m]/2-1,E=_o(h[y],A),O=_o(h[w],A),T=E,D=P-f[m]-O,F=P/2-f[m]/2+S,W=Ro(T,F,D),B=!c.arrow&&null!=Oo(s)&&F!==W&&r.reference[m]/2-(F<T?E:O)-f[m]/2<0,U=B?F<T?F-T:F-D:0;return{[g]:u[g]+U,data:{[g]:W,centerOffset:F-W-U,...B&&{alignmentOffset:U}},reset:B}}}),Ri=(e,t,o)=>{const i=new Map,s={platform:_i,...o},r={...s.platform,_c:i};return(async(e,t,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:p,y:h}=Uo(d,i,c),u=i,g={},m=0;for(let o=0;o<l.length;o++){const{name:r,fn:f}=l[o],{x:v,y,data:w,reset:_}=await f({x:p,y:h,initialPlacement:i,placement:u,strategy:s,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});p=null!=v?v:p,h=null!=y?y:h,g={...g,[r]:{...g[r],...w}},_&&m<=50&&(m++,"object"==typeof _&&(_.placement&&(u=_.placement),_.rects&&(d=!0===_.rects?await a.getElementRects({reference:e,floating:t,strategy:s}):_.rects),({x:p,y:h}=Uo(d,u,c))),o=-1)}return{x:p,y:h,placement:u,strategy:s,middlewareData:g}})(e,t,{...s,platform:r})},Ai=1;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Ei=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==Ai||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return ne}});function Oi(e){return Di(e)}function Ti(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Di(e){for(let t=e;t;t=Ti(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=Ti(e);t;t=Ti(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var Li=class extends wo{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,i=0,s=0,r=0,a=0,l=0,c=0,d=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,i=e.bottom,s=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):(o=t.left,i=t.bottom,s=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):e.left<t.left?(o=e.right,i=e.top,s=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom):(o=t.right,i=t.top,s=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=xi(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[ki({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Pi({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ci({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push($i({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Pi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Si({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>_i.getOffsetParent(e,Oi):_i.getOffsetParent;Ri(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:ro(so({},_i),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:i})=>{const s=this.matches(":dir(rtl)"),r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let i="",a="",l="",c="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?o:"",c=s?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":o,c=s?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",i="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:l,left:c,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return ie`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Ei({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Ei({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ie`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function Fi(e,t){return new Promise((o=>{e.addEventListener(t,(function i(s){s.target===e&&(e.removeEventListener(t,i),o())}))}))}function Ii(e,t,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,ro(so({},o),{duration:Wi()?0:o.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})}))}function zi(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function Wi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Bi(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}Li.styles=[yo,vo],ao([ye(".popup")],Li.prototype,"popup",2),ao([ye(".popup__arrow")],Li.prototype,"arrowEl",2),ao([fe()],Li.prototype,"anchor",2),ao([fe({type:Boolean,reflect:!0})],Li.prototype,"active",2),ao([fe({reflect:!0})],Li.prototype,"placement",2),ao([fe({reflect:!0})],Li.prototype,"strategy",2),ao([fe({type:Number})],Li.prototype,"distance",2),ao([fe({type:Number})],Li.prototype,"skidding",2),ao([fe({type:Boolean})],Li.prototype,"arrow",2),ao([fe({attribute:"arrow-placement"})],Li.prototype,"arrowPlacement",2),ao([fe({attribute:"arrow-padding",type:Number})],Li.prototype,"arrowPadding",2),ao([fe({type:Boolean})],Li.prototype,"flip",2),ao([fe({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],Li.prototype,"flipFallbackPlacements",2),ao([fe({attribute:"flip-fallback-strategy"})],Li.prototype,"flipFallbackStrategy",2),ao([fe({type:Object})],Li.prototype,"flipBoundary",2),ao([fe({attribute:"flip-padding",type:Number})],Li.prototype,"flipPadding",2),ao([fe({type:Boolean})],Li.prototype,"shift",2),ao([fe({type:Object})],Li.prototype,"shiftBoundary",2),ao([fe({attribute:"shift-padding",type:Number})],Li.prototype,"shiftPadding",2),ao([fe({attribute:"auto-size"})],Li.prototype,"autoSize",2),ao([fe()],Li.prototype,"sync",2),ao([fe({type:Object})],Li.prototype,"autoSizeBoundary",2),ao([fe({attribute:"auto-size-padding",type:Number})],Li.prototype,"autoSizePadding",2),ao([fe({attribute:"hover-bridge",type:Boolean})],Li.prototype,"hoverBridge",2);const Ui=new Set,Vi=new Map;let Gi,Mi="ltr",ji="en";const Hi="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Hi){const e=new MutationObserver(qi);Mi=document.documentElement.dir||"ltr",ji=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ni(...e){e.map((e=>{const t=e.$code.toLowerCase();Vi.has(t)?Vi.set(t,Object.assign(Object.assign({},Vi.get(t)),e)):Vi.set(t,e),Gi||(Gi=e)})),qi()}function qi(){Hi&&(Mi=document.documentElement.dir||"ltr",ji=document.documentElement.lang||navigator.language),[...Ui.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ui.add(this.host)}hostDisconnected(){Ui.delete(this.host)}dir(){return`${this.host.dir||Mi}`.toLowerCase()}lang(){return`${this.host.lang||ji}`.toLowerCase()}getTranslationData(e){var t,o;const i=new Intl.Locale(e.replace(/_/g,"-")),s=null==i?void 0:i.language.toLowerCase(),r=null!==(o=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:s,region:r,primary:Vi.get(`${s}-${r}`),secondary:Vi.get(s)}}exists(e,t){var o;const{primary:i,secondary:s}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||s&&s[e]||t.includeFallback&&Gi&&Gi[e])}term(e,...t){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let s;if(o&&o[e])s=o[e];else if(i&&i[e])s=i[e];else{if(!Gi||!Gi[e])return String(e);s=Gi[e]}return"function"==typeof s?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var Ki={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ni(Ki);var Qi=Ki,Ji=class extends LocalizeController{};function Yi(e,t){const o=so({waitUntilFirstUpdate:!1},t);return(t,i)=>{const{update:s}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const s=t;if(e.has(s)){const t=e.get(s),r=this[s];t!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](t,r))}})),s.call(this,e)}}}Ni(Qi);var Zi=class extends wo{constructor(){super(),this.localize=new Ji(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=zi(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=zi(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Bi(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=mo(this,"tooltip.show",{dir:this.localize.dir()});await Ii(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Bi(this.body);const{keyframes:e,options:o}=mo(this,"tooltip.hide",{dir:this.localize.dir()});await Ii(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Fi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Fi(this,"sl-after-hide")}render(){return ie`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Ei({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Zi.styles=[yo,bo],Zi.dependencies={"sl-popup":Li},ao([ye("slot:not([name])")],Zi.prototype,"defaultSlot",2),ao([ye(".tooltip__body")],Zi.prototype,"body",2),ao([ye("sl-popup")],Zi.prototype,"popup",2),ao([fe()],Zi.prototype,"content",2),ao([fe()],Zi.prototype,"placement",2),ao([fe({type:Boolean,reflect:!0})],Zi.prototype,"disabled",2),ao([fe({type:Number})],Zi.prototype,"distance",2),ao([fe({type:Boolean,reflect:!0})],Zi.prototype,"open",2),ao([fe({type:Number})],Zi.prototype,"skidding",2),ao([fe()],Zi.prototype,"trigger",2),ao([fe({type:Boolean})],Zi.prototype,"hoist",2),ao([Yi("open",{waitUntilFirstUpdate:!0})],Zi.prototype,"handleOpenChange",1),ao([Yi(["content","distance","hoist","placement","skidding"])],Zi.prototype,"handleOptionsChange",1),ao([Yi("disabled")],Zi.prototype,"handleDisabledChange",1),go("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),go("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Zi.define("sl-tooltip");var Xi=Object.defineProperty,en=Object.getOwnPropertyDescriptor,tn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?en(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Xi(t,o,r),r};go("tooltip.show",null),go("tooltip.hide",null);let on=class extends lit_element_r{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return ie`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??se}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};on.styles=d`
		sl-tooltip {
			--max-width: 320px;
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}
	`,tn([fe()],on.prototype,"content",2),tn([fe({reflect:!0})],on.prototype,"placement",2),tn([fe({type:Boolean})],on.prototype,"disabled",2),tn([fe({type:Number})],on.prototype,"distance",2),tn([fe({type:Boolean})],on.prototype,"hoist",2),on=tn([ue("gl-tooltip")],on);var nn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,rn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?sn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&nn(t,o,r),r};let an=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?ie`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?ie`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ie`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ie`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};an.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},an.styles=[St,d`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);

				color: inherit;
				text-decoration: none;

				width: max-content;
				height: 100%;
				cursor: pointer;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-block;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${Pt}
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			gl-tooltip {
				height: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],rn([ye(".control")],an.prototype,"control",2),rn([fe({reflect:!0})],an.prototype,"appearance",2),rn([fe({type:Boolean,reflect:!0})],an.prototype,"disabled",2),rn([fe({reflect:!0})],an.prototype,"density",2),rn([fe({type:Boolean,reflect:!0})],an.prototype,"full",2),rn([fe()],an.prototype,"href",2),rn([fe({reflect:!0})],an.prototype,"role",1),rn([fe()],an.prototype,"tooltip",2),an=rn([ue("gl-button")],an);var ln=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,dn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?cn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&ln(t,o,r),r};let pn=class extends lit_element_r{constructor(){super(...arguments),this.editor=!1}render(){return ie`<div class="group"><slot></slot></div>`}};pn.styles=[St,d`
			:host {
				display: block;
				max-width: 30rem;
				margin-right: auto;
				margin-left: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			@media (min-width: 640px) {
				:host(:not([editor])) {
					max-width: 100%;
				}
			}

			.group {
				display: inline-flex;
				gap: 0.4rem;
				width: 100%;
				max-width: 30rem;
			}
		`],dn([fe({type:Boolean})],pn.prototype,"editor",2),pn=dn([ue("button-container")],pn);var hn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,gn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?un(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&hn(t,o,r),r};const mn=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let fn=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};fn.styles=d`
		:host {
			--code-icon-size: 16px;
			--code-icon-v-align: text-bottom;

			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${c(Object.entries(mn).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,gn([fe({reflect:!0})],fn.prototype,"icon",2),gn([fe({reflect:!0})],fn.prototype,"modifier",2),gn([fe({type:Number})],fn.prototype,"size",2),gn([fe({reflect:!0})],fn.prototype,"flip",2),gn([fe({reflect:!0})],fn.prototype,"rotate",2),fn=gn([ue("code-icon")],fn);var bn=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,yn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?vn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&bn(t,o,r),r};let wn=class extends lit_element_r{constructor(){super(...arguments),this.type="info"}get hasPromo(){return null!=this.promo}render(){if(!this.promo)return;const e=this.renderPromo(this.promo);return e?"link"===this.type?ie`<a
				class="link"
				href="${this.promo.command??"command:gitlens.plus.upgrade"}"
				title="${(e=>e??se)(this.promo.command?.tooltip)}"
				>${e}</a
			>`:ie`<p class="promo">${e}</p>`:void 0}renderPromo(e){switch(e.key){case"pro50":return ie`<span class="content${"link"===this.type?se:" muted"}"
					>Limited-Time sale: <b>Save 33% or more</b> on your 1st seat of Pro</span
				>`;case"launchpad-extended":return ie`<span class="content${"link"===this.type?se:" muted"}"
					>Launchpad sale: <b>Save 75% or more</b> on GitLens Pro</span
				>`;case"devexdays":return ie`<span class="content${"link"===this.type?se:" muted"}"
					>Limited-time sale: <b>Save up to 80%</b> on GitLen Pro</span
				>`}}};wn.styles=[d`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],yn([fe({type:Object})],wn.prototype,"promo",2),yn([fe({reflect:!0,type:String})],wn.prototype,"type",2),yn([fe({reflect:!0,type:Boolean,attribute:"has-promo"})],wn.prototype,"hasPromo",1),wn=yn([ue("gl-promo")],wn);var _n=Object.defineProperty,xn=Object.getOwnPropertyDescriptor,kn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?xn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&_n(t,o,r),r};let $n=class extends lit_element_r{get daysRemaining(){return null==this._state.subscription?0:jt(this._state.subscription,"days")??0}get hasAccount(){return null!=(e=this.state)&&e!==Bt.Community&&e!==Bt.ProPreviewExpired&&e!==Bt.ProPreview;var e}get isReactivatedTrial(){return this.state===Bt.ProTrial&&(this._state.subscription?.plan.effective.trialReactivationCount??0)>0}get planId(){return this._state.subscription?.plan.actual.id??Wt.Pro}get planName(){return function(e,t){switch(e){case Bt.Community:case Bt.ProPreviewExpired:return Mt(Wt.Community);case Bt.ProPreview:return`${Mt(Wt.Pro)} (Preview)`;case Bt.ProTrial:return`${Mt(Wt.Pro)} (Trial)`;case Bt.ProTrialExpired:case Bt.ProTrialReactivationEligible:return Mt(Wt.CommunityWithAccount);case Bt.VerificationRequired:return`${Mt(t??Wt.Pro)} (Unverified)`;default:return Mt(t??Wt.Pro)}}(this.state,this.planId)}get state(){return this._state.subscription?.state}render(){return ie`<gl-accordion id="accordion">
			<div class="header" slot="header">
				${this.hasAccount&&this._state.avatar?ie`<img class="header__media" src=${this._state.avatar} />`:ie`<code-icon class="header__media" icon="gl-gitlens" size="30"></code-icon>`}
				<span class="header__title">${this.planName}</span>
				${zt(this.state===Bt.ProTrialReactivationEligible,(()=>ie`
						<gl-button
							appearance="secondary"
							tight
							href="command:gitlens.plus.reactivateProTrial"
							tooltip="Reactivate your Pro trial for another ${Ye("day",7)}"
							>Reactivate Pro Trial</gl-button
						>
					`))}
				${zt(this.hasAccount,(()=>ie`
						<span class="header__actions">
							<gl-button
								appearance="toolbar"
								href="command:gitlens.views.home.account.resync"
								tooltip="Synchronize Account Status"
								aria-label="Synchronize Account Status"
								><code-icon icon="sync"></code-icon
							></gl-button>
							<gl-button
								appearance="toolbar"
								href="command:gitlens.plus.logout"
								tooltip="Sign Out"
								aria-label="Sign Out"
								><code-icon icon="sign-out"></code-icon
							></gl-button>
						</span>
					`))}
			</div>
			${this.renderOrganization()}${this.renderAccountState()}
			<slot></slot>
		</gl-accordion>`}renderOrganization(){const e=this._state.subscription?.activeOrganization?.name??"";return this.hasAccount&&e?ie`
			<div class="org">
				<div class="org__media">
					<code-icon icon="organization" size="22"></code-icon>
				</div>
				<div class="org__details">
					<p class="org__title">${e}</p>
				</div>
				${zt(this._state.organizationsCount>1,(()=>ie`<div class="org__signout">
							<gl-button
								appearance="toolbar"
								href="command:gitlens.gk.switchOrganization"
								aria-label="Switch Active Organization"
								><span class="org__badge">+${this._state.organizationsCount-1}</span
								><code-icon icon="arrow-swap"></code-icon
								><span slot="tooltip"
									>Switch Active Organization
									<hr />
									You are in
									${Ye("organization",this._state.organizationsCount-1,{infix:" other "})}</span
								></gl-button
							>
						</div>`))}
			</div>
		`:se}renderAccountState(){const e=Vt(this.state,"account");switch(this.state){case Bt.Paid:return ie`
					<div class="account">
						<button-container>
							<gl-button appearance="secondary" full href="command:gitlens.plus.manage"
								>Manage Account</gl-button
							>
							<gl-button
								appearance="secondary"
								full
								href="command:gitlens.plus.cloudIntegrations.manage?%7B%22source%22%3A%22account%22%7D"
								>Integrations</gl-button
							>
						</button-container>
						<p>
							Your ${Mt(this.planId)} plan provides full access to all Pro features
							and the <a href="${Ke.platform}">GitKraken DevEx platform</a>, unleashing powerful Git
							visualization &amp; productivity capabilities everywhere you work: IDE, desktop, browser,
							and terminal.
						</p>
					</div>
				`;case Bt.VerificationRequired:return ie`
					<div class="account">
						<p>You must verify your email before you can access Pro features.</p>
						<button-container>
							<gl-button full href="command:gitlens.plus.resendVerification">Resend Email</gl-button>
							<gl-button appearance="secondary" href="command:gitlens.plus.validate"
								><code-icon size="20" icon="refresh"></code-icon>
							</gl-button>
						</button-container>
					</div>
				`;case Bt.ProTrial:{const t=this.daysRemaining;return ie`
					<div class="account">
						${this.isReactivatedTrial?ie`<p>
									<code-icon icon="megaphone"></code-icon>
									See
									<a href="${Ke.releaseNotes}">what's new</a>
									in GitLens.
							  </p>`:se}
						<p>
							You have
							<strong>${t<1?"<1 day":Ye("day",t,{infix:" more "})} left</strong>
							in your Pro trial. Once your trial ends, you will only be able to use Pro features on
							publicly-hosted repos.
						</p>
						<button-container>
							<gl-button full href="command:gitlens.plus.upgrade">Upgrade to Pro</gl-button>
						</button-container>
						${this.renderPromo(e)} ${this.renderIncludesDevEx()}
					</div>
				`}case Bt.ProTrialExpired:return ie`
					<div class="account">
						<p>Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.</p>
						<button-container>
							<gl-button full href="command:gitlens.plus.upgrade">Upgrade to Pro</gl-button>
						</button-container>
						${this.renderPromo(e)} ${this.renderIncludesDevEx()}
					</div>
				`;case Bt.ProTrialReactivationEligible:return ie`
					<div class="account">
						<p>
							Reactivate your Pro trial and experience all the new Pro features — free for another
							${Ye("day",7)}!
						</p>
						<button-container>
							<gl-button
								full
								href="command:gitlens.plus.reactivateProTrial"
								tooltip="Reactivate your Pro trial for another ${Ye("day",7)}"
								>Reactivate Pro Trial</gl-button
							>
						</button-container>
						${this.renderIncludesDevEx()}
					</div>
				`;default:return ie`
					<div class="account">
						<p>
							Sign up for access to Pro features and the
							<a href="${Ke.platform}">GitKraken DevEx platform</a>, or
							<a href="command:gitlens.plus.login">sign in</a>.
						</p>
						<button-container>
							<gl-button full href="command:gitlens.plus.signUp">Sign Up</gl-button>
						</button-container>
						<p>Signing up starts your free ${7}-day Pro trial.</p>
						${this.renderIncludesDevEx()}
					</div>
				`}}renderIncludesDevEx(){return ie`
			<p>
				Includes access to the <a href="${Ke.platform}">GitKraken DevEx platform</a>, unleashing powerful Git
				visualization &amp; productivity capabilities everywhere you work: IDE, desktop, browser, and terminal.
			</p>
		`}renderPromo(e){return ie`<gl-promo .promo=${e}></gl-promo>`}focus(){this.accordionEl.focus()}show(){this.accordionEl.open=!0,this.accordionEl.focus()}};$n.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},$n.styles=[St,Rt,d`
			:host {
				display: block;
				margin-bottom: 1.3rem;
			}

			:host > * {
				margin-bottom: 0;
			}

			button-container {
				margin-bottom: 1.3rem;
			}

			.header {
				display: flex;
				align-items: center;
				gap: 0.6rem;
			}

			.header__media {
				flex: none;
			}

			.header__actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			img.header__media {
				width: 3rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
			}

			.header__title {
				flex: 1;
				font-size: 1.5rem;
				font-weight: 600;
				margin: 0;
			}

			.org {
				position: relative;
				display: flex;
				flex-direction: row;
				gap: 0 0.8rem;
				align-items: center;
				margin-bottom: 1.3rem;
			}

			.org__media {
				flex: none;
				width: 3.4rem;
				display: flex;
				align-items: center;
				justify-content: center;
				color: var(--color-foreground--65);
			}

			.org__image {
				width: 100%;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
			}

			.org__details {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.org__title {
				font-size: 1.3rem;
				font-weight: 600;
				margin: 0;
			}

			.org__access {
				position: relative;
				margin: 0;
				color: var(--color-foreground--65);
			}

			.org__signout {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			.org__badge {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 2.4rem;
				height: 2.4rem;
				line-height: 2.4rem;
				font-size: 1rem;
				font-weight: 600;
				color: var(--color-foreground--65);
				background-color: var(--vscode-toolbar-hoverBackground);
				border-radius: 50%;
				margin-right: 0.6rem;
			}

			.account > :first-child {
				margin-block-start: 0;
			}
			.account > :last-child {
				margin-block-end: 0;
			}

			hr {
				border: none;
				border-top: 1px solid var(--color-foreground--25);
			}
		`],kn([ye("#accordion")],$n.prototype,"accordionEl",2),kn([Te({context:It,subscribe:!0}),be()],$n.prototype,"_state",2),$n=kn([ue("gl-home-account-content")],$n);var Cn=(e=>(e.ActionPrefix="gitlens.action.",e.AddAuthors="gitlens.addAuthors",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.PastePatchFromClipboard="gitlens.pastePatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusConnectCloudIntegrations="gitlens.plus.cloudIntegrations.connect",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.PlusSimulateSubscription="gitlens.plus.simulateSubscription",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowInTimeline="gitlens.showInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLaunchpadView="gitlens.showLaunchpadView",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWelcomePage="gitlens.showWelcomePage",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(Cn||{});Li.define("sl-popup");var Pn=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,Rn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Sn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Pn(t,o,r),r};let An=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{e.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=rt(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus())return;const o=rt(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,at(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,at(this,"gl-popover-after-hide")}render(){return ie`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}};An.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},An.styles=d`
		:host {
			--hide-delay: 0ms;
			--show-delay: 500ms;

			display: contents;
		}

		.popover {
			--arrow-size: var(--sl-tooltip-arrow-size);
			--arrow-color: var(--sl-tooltip-background-color);
		}

		.popover::part(popup) {
			z-index: var(--sl-z-index-tooltip);
		}

		.popover::part(arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		.popover[placement^='top']::part(popup) {
			transform-origin: bottom;
		}

		.popover[placement^='bottom']::part(popup) {
			transform-origin: top;
		}

		.popover[placement^='left']::part(popup) {
			transform-origin: right;
		}

		.popover[placement^='right']::part(popup) {
			transform-origin: left;
		}

		.popover[data-current-placement^='top']::part(arrow) {
			border-top-width: 0;
			border-left-width: 0;
			clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
		}

		.popover[data-current-placement^='bottom']::part(arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
			clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
		}

		.popover[data-current-placement^='left']::part(arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
			clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
		}

		.popover[data-current-placement^='right']::part(arrow) {
			border-top-width: 0;
			border-right-width: 0;
			clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
		}

		.popover__body {
			display: block;
			width: fit-content;
			border: 1px solid var(--gl-tooltip-border-color);
			border-radius: var(--sl-tooltip-border-radius);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
			background-color: var(--sl-tooltip-background-color);
			font-family: var(--sl-tooltip-font-family);
			font-size: var(--sl-tooltip-font-size);
			font-weight: var(--sl-tooltip-font-weight);
			line-height: var(--sl-tooltip-line-height);
			text-align: start;
			white-space: normal;
			color: var(--sl-tooltip-color);
			padding: var(--sl-tooltip-padding);
			user-select: none;
			-webkit-user-select: none;
			max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
			/* max-height: var(--auto-size-available-height);
			overflow: auto; */
			pointer-events: all;
		}

		.popover[data-current-placement^='top'] .popover__body,
		.popover[data-current-placement^='bottom'] .popover__body {
			width: max-content;
		}

		/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
	`,Rn([ye("#popover")],An.prototype,"body",2),Rn([ye("sl-popup")],An.prototype,"popup",2),Rn([fe({reflect:!0})],An.prototype,"placement",2),Rn([fe({type:Object})],An.prototype,"anchor",2),Rn([fe({reflect:!0,type:Boolean})],An.prototype,"disabled",2),Rn([fe({type:Number})],An.prototype,"distance",2),Rn([fe({reflect:!0,type:Boolean})],An.prototype,"open",2),Rn([fe({reflect:!0,type:Boolean})],An.prototype,"arrow",2),Rn([fe({type:Number})],An.prototype,"skidding",2),Rn([fe()],An.prototype,"trigger",2),Rn([fe({type:Boolean})],An.prototype,"hoist",2),Rn([We("open",{afterFirstUpdate:!0})],An.prototype,"handleOpenChange",1),Rn([We(["distance","hoist","placement","skidding"])],An.prototype,"handleOptionsChange",1),Rn([We("disabled")],An.prototype,"handleDisabledChange",1),An=Rn([ue("gl-popover")],An);var En=Object.defineProperty,On=Object.getOwnPropertyDescriptor,Tn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?On(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&En(t,o,r),r};let Dn=class extends lit_element_r{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:jt(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return ie`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===Bt.VerificationRequired)return ie`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(Nt(this.subscription)||this.cloud&&null!=this.subscription.account)return ie`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(t===Bt.ProPreview||t===Bt.ProTrial))return ie`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t;return this.cloud?ie`${e}<span class="badge-icon">☁️</span>`:e}renderPopoverHeader(){const e=ie`<span class="popup-title"
			>${this.preview?"Preview feature":"Pro feature"}${this.cloud?" ☁️":""}</span
		>`;return this.state===Bt.Paid?ie`<div class="popup-header">${e}</div>`:this.cloud?this.preview?ie`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require a paid plan in the future</span
					>
				</div>`:ie`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires a paid plan</span>
			</div>`:this.preview?ie`<div class="popup-header">
				${e}<span class="popup-subtitle">May require a paid plan in the future</span>
			</div>`:ie`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires a paid plan for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return se;let e;switch(this.state){case Bt.Paid:e=ie`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${Ln(Cn.ShowAccountView,void 0)}"
							>${Mt(this.subscription?.plan.actual.id??Wt.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case Bt.VerificationRequired:e=ie`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Ln(Cn.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${Ln(Cn.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case Bt.ProTrial:{const t=this.daysRemaining;e=ie`<p>
						You have
						<strong>${t<1?"<1 day":Ye("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case Bt.ProTrialExpired:e=ie`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ie`<p>Please upgrade for full access to Pro features:</p>`)}`;break;case Bt.ProTrialReactivationEligible:e=ie`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${Ye("day",7)}!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Ln(Cn.PlusReactivateProTrial,this.source)}"
							tooltip="Reactivate your Pro trial for another ${Ye("day",7)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===Bt.ProPreview){const t=this.daysRemaining;e=ie`<p>
							You have
							<strong>${t<1?"<1 day":Ye("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=ie`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return ie`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return ie`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${Ln(Cn.PlusSignUp,this.source)}"
				>Start ${7}-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${Ln(Cn.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){const t=Vt(this.state,"badge");return ie`<div class="actions">
			${e??se}
			<gl-button
				appearance="primary"
				density="tight"
				href="${Ln(Cn.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo(t)}
		</div>`}renderPromo(e){return ie`<gl-promo .promo=${e}></gl-promo>`}};function Ln(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}Dn.styles=[St,Rt,d`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus {
				${c(Ct)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],Tn([fe({type:Boolean})],Dn.prototype,"cloud",2),Tn([fe({reflect:!0})],Dn.prototype,"placement",2),Tn([fe({type:Boolean})],Dn.prototype,"preview",2),Tn([fe({type:Object})],Dn.prototype,"source",2),Tn([fe({attribute:!1})],Dn.prototype,"subscription",2),Dn=Tn([ue("gl-feature-badge")],Dn);var Fn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,zn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?In(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Fn(t,o,r),r};let Wn=class extends GlElement{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}get orgAllowsDrafts(){return this._state.orgSettings.drafts}get blockRepoFeatures(){if(!this._state)return!0;const{repositories:{openCount:e,hasUnsafe:t,trusted:o}}=this._state;return!o||0===e||t}onRepoFeatureClicked(e){return!this.blockRepoFeatures||(e.preventDefault(),e.stopPropagation(),!1)}render(){return ie`
			${zt(this.blockRepoFeatures,(()=>ie`
					<p>
						<code-icon icon="question"></code-icon> Features which need a repository are currently
						unavailable
					</p>
				`))}
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Setup</h2>
				<div class="nav-list__item">
					<a class="nav-list__link" href="command:gitlens.showSettingsPage" aria-label="Open GitLens Settings"
						><code-icon class="nav-list__icon" icon="gear"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open GitLens Settings">
							<span>Open GitLens Settings</span></gl-tooltip
						>
					</a>
				</div>
				${zt(!this._state.hasAnyIntegrationConnected,(()=>ie`
						<div class="nav-list__item" data-integrations="none">
							<a
								class="nav-list__link"
								href="command:gitlens.plus.cloudIntegrations.connect?%7B%22source%22%3A%22home%22%7D"
								aria-label="Connect an Integration on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="gl-unplug"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Connect an Integration on GitKraken.dev"
									><span>Connect an Integration</span></gl-tooltip
								>
							</a>
						</div>
					`),(()=>ie`
						<div class="nav-list__item" data-integrations="connected">
							<a
								class="nav-list__link"
								href="command:gitlens.plus.cloudIntegrations.manage?%7B%22source%22%3A%22home%22%7D"
								aria-label="Manage Integrations on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="settings"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Manage Integrations on GitKraken.dev"
									><span>Manage Integrations</span></gl-tooltip
								>
							</a>
						</div>
					`))}
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showSettingsPage!autolinks"
						aria-label="Open Autolinks Settings"
						><code-icon class="nav-list__icon" icon="link"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Autolinks Settings"
							><span>Configure Autolinks</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Popular</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showGraph"
						aria-label="Show Commit Graph"
						data-requires="repo"
						@click=${e=>this.onRepoFeatureClicked(e)}
					>
						<code-icon class="nav-list__icon" icon="gl-graph"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commit Graph">
							<span>Commit Graph</span>
						</gl-tooltip>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showLaunchpad?%7B%22source%22%3A%22home%22%7D"
						aria-label="Open Launchpad"
						><code-icon class="nav-list__icon" icon="rocket"></code-icon
						><gl-tooltip hoist class="nav-list__group" content="Open Launchpad"
							><span class="nav-list__label">Launchpad</span
							><span class="nav-list__desc">New!</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitsView"
						aria-label="Show Commits view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commits-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commits view">
							<span>Commits</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitDetailsView"
						aria-label="Show Inspect view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commit-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Inspect view">
							<span>Inspect</span></gl-tooltip
						>
					</a>
				</div>
				${zt(this.orgAllowsDrafts,(()=>ie`
						<div class="nav-list__item">
							<a
								class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
								href="command:gitlens.openWalkthrough?%7B%22step%22%3A%22code-collab%22,%22source%22%3A%22home%22%7D"
								data-requires="repo"
								data-org-requires="drafts"
								aria-label="Open Code Suggest walkthrough"
								><code-icon class="nav-list__icon" icon="gl-code-suggestion"></code-icon
								><gl-tooltip hoist class="nav-list__group" content="Open Code Suggest walkthrough"
									><span class="nav-list__label">Code Suggest</span
									><span class="nav-list__desc">New!</span></gl-tooltip
								>
							</a>
							<gl-feature-badge
								.source=${this.badgeSource}
								.subscription=${this._state.subscription}
								placement="left"
								class="nav-list__access"
								preview
							></gl-feature-badge>
						</div>
						<div class="nav-list__item">
							<a
								class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
								href="command:gitlens.showDraftsView"
								data-requires="repo"
								data-org-requires="drafts"
								aria-label="Show Cloud Patches view"
								><code-icon class="nav-list__icon" icon="gl-cloud-patch"></code-icon
								><gl-tooltip hoist class="nav-list__group" content="Show Cloud Patches view"
									><span class="nav-list__label">Cloud Patches</span
									><span class="nav-list__desc">New!</span></gl-tooltip
								>
							</a>
							<gl-feature-badge
								placement="left"
								class="nav-list__access"
								cloud
								preview
							></gl-feature-badge>
						</div>
					`))}
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showFileHistoryView"
						aria-label="Show File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-history-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show File History view">
							<span>File History</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showTimelineView"
						aria-label="Show Visual File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="graph-scatter"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Visual File History view">
							<span>Visual File History</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showStashesView"
						aria-label="Show Stashes view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-stashes-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Stashes view">
							<span>Stashes</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showSearchAndCompareView"
						aria-label="Show Search &amp; Compare view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-search-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Search &amp; Compare view">
							<span>Search &amp; Compare</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorkspacesView"
						aria-label="Show GitKraken Workspaces view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-workspaces-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitKraken Workspaces view">
							<span>GK Workspaces</span></gl-tooltip
						>
					</a>
					<gl-feature-badge placement="left" class="nav-list__access" cloud preview></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorktreesView"
						aria-label="Show Worktrees view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-worktrees-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Worktrees view">
							<span>Worktrees</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Activity Bar</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:workbench.view.extension.gitlens"
						aria-label="Show GitLens Side Bar"
						><code-icon class="nav-list__icon" icon="gl-gitlens"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Side Bar"
							><span>GitLens</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.extension.gitlensInspect"
						aria-label="Show GitLens Inspect Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-gitlens-inspect"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Inspect Side Bar"
							><span>GitLens Inspect</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.scm"
						aria-label="Show GitLens Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="source-control"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Source Control Side Bar"
							><span>Source Control</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h3 class="nav-list__title t-eyebrow sticky">Commands</h3>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"command:workbench.action.quickOpen?%22>GitLens%3A%22"}
						aria-label="Show GitLens Commands"
						><code-icon class="nav-list__icon" icon="symbol-event"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Commands"
							><span>Commands</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.gitCommands"
						aria-label="Open Git Command Palette"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="symbol-color"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Git Command Palette"
							><span>Git Command Palette</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Companion Tools</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken Browser Extension"
						><code-icon class="nav-list__icon" icon="extensions"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken Browser Extension"
							><span>GitKraken Browser Extension</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken CLI"
						><code-icon class="nav-list__icon" icon="terminal"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken CLI"
							><span>GitKraken CLI</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.dev?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try GitKraken.dev"
						><code-icon class="nav-list__icon" icon="globe"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try GitKraken.dev"
							><span>GitKraken.dev</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
		`}};Wn.styles=[Rt,Et,Ft,d``],zn([fe({type:Object})],Wn.prototype,"badgeSource",2),zn([Te({context:It,subscribe:!0}),be()],Wn.prototype,"_state",2),Wn=zn([ue("gl-feature-nav")],Wn);var Bn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,Vn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Un(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Bn(t,o,r),r};let Gn=class extends lit_element_r{render(){return ie`
			<gl-promo
				.promo=${Vt(this._state.subscription.state,"home")}
				class="promo-banner promo-banner--eyebrow"
				id="promo"
				type="link"
			></gl-promo>
			<nav class="inline-nav" id="links" aria-label="Help and Resources">
				<div class="inline-nav__group">
					<gl-tooltip hoist>
						<a
							class="inline-nav__link inline-nav__link--text"
							href="https://help.gitkraken.com/gitlens/gitlens-release-notes-current/"
							aria-label="What's New"
							><code-icon icon="megaphone"></code-icon><span>What's New</span></a
						>
						<span slot="content">What's New</span>
					</gl-tooltip>
					<gl-tooltip hoist>
						<a
							class="inline-nav__link inline-nav__link--text"
							href="https://help.gitkraken.com/gitlens/gitlens-home/"
							aria-label="Help Center"
							><code-icon icon="question"></code-icon><span>Help</span></a
						>
						<span slot="content">Help Center</span>
					</gl-tooltip>
					<gl-tooltip hoist>
						<a
							class="inline-nav__link inline-nav__link--text"
							href="https://github.com/gitkraken/vscode-gitlens/issues"
							aria-label="Feedback"
							><code-icon icon="feedback"></code-icon><span>Feedback</span></a
						>
						<span slot="content">Feedback</span>
					</gl-tooltip>
				</div>
				<div class="inline-nav__group">
					<gl-tooltip hoist>
						<a
							class="inline-nav__link"
							href="https://github.com/gitkraken/vscode-gitlens/discussions"
							aria-label="GitHub Discussions"
							><code-icon icon="comment-discussion"></code-icon
						></a>
						<span slot="content">GitHub Discussions</span>
					</gl-tooltip>
					<gl-tooltip hoist>
						<a
							class="inline-nav__link"
							href="https://github.com/gitkraken/vscode-gitlens"
							aria-label="GitHub Repo"
							><code-icon icon="github"></code-icon
						></a>
						<span slot="content">GitHub Repo</span>
					</gl-tooltip>
					<gl-tooltip hoist>
						<a class="inline-nav__link" href="https://twitter.com/gitlens" aria-label="@gitlens on Twitter"
							><code-icon icon="twitter"></code-icon
						></a>
						<span slot="content">@gitlens on Twitter</span>
					</gl-tooltip>
					<gl-tooltip hoist>
						<a
							class="inline-nav__link"
							href=${"https://gitkraken.com/gitlens?utm_source=gitlens-extension&utm_medium=in-app-links&utm_campaign=gitlens-logo-links"}
							aria-label="GitLens Website"
							><code-icon icon="globe"></code-icon
						></a>
						<span slot="content">GitLens Website</span>
					</gl-tooltip>
				</div>
			</nav>
		`}};Gn.styles=[Rt,Et,Tt,d`
			:host {
				display: block;
			}
		`],Vn([Te({context:It,subscribe:!0}),be()],Gn.prototype,"_state",2),Gn=Vn([ue("gl-home-nav")],Gn);var Mn=Object.defineProperty,jn=Object.getOwnPropertyDescriptor,Hn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?jn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Mn(t,o,r),r};let Nn=class extends GlElement{get hasAlerts(){return this.alertVisibility.header}get alertVisibility(){const e={header:!1,untrusted:!1,noRepo:!1,unsafeRepo:!1};return null==this._state||(this._state.repositories.trusted?0===this._state.repositories.openCount?(e.header=!0,e.noRepo=!0):this._state.repositories.hasUnsafe&&(e.header=!0,e.unsafeRepo=!0):(e.header=!0,e.untrusted=!0)),e}render(){if(null!=this._state&&this.alertVisibility.header)return ie`
			${zt(this.alertVisibility.noRepo,(()=>ie`
					<div id="no-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">No repository detected</h1>
						<div class="alert__description">
							<p>
								To use GitLens, open a folder containing a git repository or clone from a URL from the
								Explorer.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.explorer"
									>Open a Folder or Repository</gl-button
								>
							</p>
							<p class="mb-0">
								If you have opened a folder with a repository, please let us know by
								<a class="one-line" href="https://github.com/gitkraken/vscode-gitlens/issues/new/choose"
									>creating an Issue</a
								>.
							</p>
						</div>
					</div>
				`))}
			${zt(this.alertVisibility.unsafeRepo,(()=>ie`
					<div id="unsafe-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">Unsafe repository</h1>
						<div class="alert__description">
							<p>
								Unable to open any repositories as Git blocked them as potentially unsafe, due to the
								folder(s) not being owned by the current user.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.scm"
									>Manage in Source Control</gl-button
								>
							</p>
						</div>
					</div>
				`))}
			${zt(this.alertVisibility.untrusted,(()=>ie`
					<div id="untrusted-alert" class="alert alert--info mb-0" aria-hidden="true">
						<h1 class="alert__title">Untrusted workspace</h1>
						<div class="alert__description">
							<p>Unable to open repositories in Restricted Mode.</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.trust.manage"
									>Manage Workspace Trust</gl-button
								>
							</p>
						</div>
					</div>
				`))}
		`}};Nn.styles=[Rt,Et,Lt,d`
			.alert {
				margin-bottom: 0;
			}

			.centered {
				text-align: center;
			}

			.one-line {
				white-space: nowrap;
			}

			gl-button.is-basic {
				max-width: 300px;
				width: 100%;
			}
			gl-button.is-basic + gl-button.is-basic {
				margin-top: 1rem;
			}
		`],Hn([fe({type:Boolean,reflect:!0,attribute:"has-alerts"})],Nn.prototype,"hasAlerts",1),Hn([Te({context:It,subscribe:!0}),be()],Nn.prototype,"_state",2),Nn=Hn([ue("gl-repo-alerts")],Nn);var qn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Qn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Kn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&qn(t,o,r),r};let Jn=class extends lit_element_r{onSectionExpandClicked(e,t=!1){t&&e.stopImmediatePropagation();const o=e.target.closest("[data-section-expand]"),i=o?.dataset.sectionExpand;"walkthrough"===i&&(t?this.updateCollapsedSections(!this._state.walkthroughCollapsed):this.updateCollapsedSections(!1))}updateCollapsedSections(e=this._state.walkthroughCollapsed){this._state.walkthroughCollapsed=e,this.requestUpdate(),this._ipc.sendCommand(Ce,{section:"walkthrough",collapsed:e})}render(){return ie`
			<div
				id="section-walkthrough"
				data-section-expand="walkthrough"
				class="alert${this._state.walkthroughCollapsed?" is-collapsed":""}"
				@click=${e=>this.onSectionExpandClicked(e)}
			>
				<h1 class="alert__title">Get Started with GitLens</h1>
				<div class="alert__description">
					<p>Explore all of the powerful features in GitLens</p>
					<p class="button-container button-container--trio">
						<gl-button
							appearance="secondary"
							full
							href="command:gitlens.showWelcomePage"
							aria-label="Open Welcome"
							>Start Here (Welcome)</gl-button
						>
						<span class="button-group button-group--single">
							<gl-button appearance="secondary" full href="command:gitlens.getStarted?%22home%22"
								>Walkthrough</gl-button
							>
							<gl-button
								appearance="secondary"
								full
								href=${"https://youtu.be/oJdlGtsbc3U?utm_source=inapp&utm_medium=home_banner&utm_id=GitLens+tutorial"}
								aria-label="Watch the GitLens Tutorial video"
								tooltip="Watch the GitLens Tutorial video"
								><code-icon icon="vm-running" slot="prefix"></code-icon>Tutorial</gl-button
							>
						</span>
					</p>
				</div>
				<a
					href="#"
					class="alert__close"
					data-section-toggle="walkthrough"
					@click=${e=>this.onSectionExpandClicked(e,!0)}
				>
					<gl-tooltip hoist>
						<code-icon icon="chevron-down" aria-label="Collapse walkthrough section"></code-icon>
						<span slot="content">Collapse</span>
					</gl-tooltip>
					<gl-tooltip hoist>
						<code-icon icon="chevron-right" aria-label="Expand walkthrough section"></code-icon>
						<span slot="content">Expand</span>
					</gl-tooltip>
				</a>
			</div>
		`}};Jn.styles=[Lt,Et,Dt],Qn([Te({context:It,subscribe:!0}),be()],Jn.prototype,"_state",2),Qn([Te({context:"ipc",subscribe:!0}),be()],Jn.prototype,"_ipc",2),Jn=Qn([ue("gl-onboarding")],Jn);var Yn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Xn=(e,t,o,i)=>{for(var s,r=i>1?void 0:i?Zn(t,o):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i?s(t,o,r):s(r))||r);return i&&r&&Yn(t,o,r),r};let es=class extends GlApp{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}createStateProvider(e,t){return new HomeStateProvider(this,e,t)}connectedCallback(){super.connectedCallback(),this.disposable=this._ipc.onReceiveMessage((e=>{if(!0===Ee.is(e))this.accountContentEl.show()}))}disconnectedCallback(){super.disconnectedCallback(),this.disposable?.dispose()}render(){return ie`
			<div class="home scrollable">
				<gl-home-nav class="home__nav"></gl-home-nav>
				<gl-repo-alerts class="home__header"></gl-repo-alerts>
				<main class="home__main scrollable" id="main">
					<gl-onboarding></gl-onboarding>
					<gl-feature-nav .badgeSource=${this.badgeSource}></gl-feature-nav>
				</main>

				<footer class="home__footer">
					<gl-home-account-content id="account-content"> </gl-home-account-content>
				</footer>
			</div>
		`}};es.styles=[Et,At,Ot],Xn([ye("#account-content")],es.prototype,"accountContentEl",2),es=Xn([ue("gl-home-app")],es);var ts=i.K;export{ts as GlHomeApp};