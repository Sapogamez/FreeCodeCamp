var e={47:(e,t,o)=>{const n=o(602),r=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,a=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,l=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/uy,c=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,d=/\p{M}+/gu,h={limit:1/0,ellipsis:""},p=(e,t={},o={})=>{const u=t.limit??1/0,f=t.ellipsis??"",g=t?.ellipsisWidth??(f?p(f,h,o).width:0),m=o.ansiWidth??0,b=o.controlWidth??0,v=o.ambiguousWidth??1,y=o.emojiWidth??2,w=o.fullWidthWidth??2,x=o.regularWidth??1,_=o.wideWidth??2;let k=0,C=0,A=e.length,S=0,E=!1,P=A,O=Math.max(0,u-g),R=0,M=0,T=0,D=0;e:for(;;){if(M>R||C>=A&&C>k){const t=e.slice(R,M)||e.slice(k,C);S=0;for(const e of t.replaceAll(d,"")){const t=e.codePointAt(0)||0;if(D=(0,n.isFullWidth)(t)?w:(0,n.isWide)(t)?_:v!==x&&(0,n.isAmbiguous)(t)?v:x,T+D>O&&(P=Math.min(P,Math.max(R,k)+S)),T+D>u){E=!0;break e}S+=e.length,T+=D}R=M=0}if(C>=A)break;if(c.lastIndex=C,c.test(e)){if(S=c.lastIndex-C,D=S*x,T+D>O&&(P=Math.min(P,C+Math.floor((O-T)/x))),T+D>u){E=!0;break}T+=D,R=k,M=C,C=k=c.lastIndex}else if(r.lastIndex=C,r.test(e)){if(T+m>O&&(P=Math.min(P,C)),T+m>u){E=!0;break}T+=m,R=k,M=C,C=k=r.lastIndex}else if(a.lastIndex=C,a.test(e)){if(S=a.lastIndex-C,D=S*b,T+D>O&&(P=Math.min(P,C+Math.floor((O-T)/b))),T+D>u){E=!0;break}T+=D,R=k,M=C,C=k=a.lastIndex}else if(l.lastIndex=C,l.test(e)){if(T+y>O&&(P=Math.min(P,C)),T+y>u){E=!0;break}T+=y,R=k,M=C,C=k=l.lastIndex}else C+=1}return{width:E?O:T,index:E?P:A,truncated:E,ellipsed:E&&u>=g}}},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0;t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109;t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510;t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),void 0!==o&&Object.defineProperty(o,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var n={};o.d(n,{I:()=>PatchDetailsApp,w:()=>Gs});class IpcCall{constructor(e,t,o=!1,n=!1){this.scope=e,this.reset=o,this.pack=n,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcRequest extends IpcCall{constructor(e,t,o,n){super(e,t,o,n),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}}class IpcNotification extends IpcCall{}const r=new IpcCommand("core","webview/ready"),a=new IpcCommand("core","webview/focus/changed"),l=new IpcCommand("core","command/execute"),c=(new IpcCommand("core","configuration/update"),new IpcCommand("core","telemetry/sendEvent")),d=(new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const h="patchDetails",p=new IpcCommand(h,"apply"),u=new IpcCommand(h,"archive"),f=new IpcCommand(h,"create"),g=(new IpcCommand(h,"openInGraph"),new IpcCommand(h,"checked")),m=new IpcCommand(h,"selectRepo"),b=new IpcCommand(h,"selectBase"),v=new IpcCommand(h,"file/actions/execute"),y=new IpcCommand(h,"file/open"),w=new IpcCommand(h,"file/openOnRemote"),x=new IpcCommand(h,"file/compareWorking"),_=new IpcCommand(h,"file/comparePrevious"),k=new IpcCommand(h,"preferences/update"),C=new IpcCommand(h,"switchMode"),A=new IpcCommand(h,"cloud/copyLink"),S=new IpcCommand(h,"local/createPatch"),E=new IpcCommand(h,"create/repository/check"),P=new IpcCommand(h,"update/create/metadata"),O=new IpcCommand(h,"update/draft/metadata"),R=new IpcCommand(h,"update/draft/permissions"),M=new IpcCommand(h,"update/users"),T=new IpcCommand(h,"update/userSelection"),D=new IpcRequest(h,"explain"),L=new IpcRequest(h,"generate"),I=new IpcNotification(h,"didChange",!0),B=new IpcNotification(h,"create/didChange"),U=new IpcNotification(h,"draft/didChange"),N=new IpcNotification(h,"preferences/didChange"),j=new IpcNotification(h,"draft/didChangeRepository");new IpcNotification(h,"org/settings/didChange");function H(e,t,o){let n,r,a,l,c;function d(e){const o=e-(r??0);return null==r||o>=t||o<0}function h(){const e=Date.now();if(d(e))p();else{c=setTimeout(h,t-(e-(r??0)))}}function p(){return c=void 0,n?function(){const t=n,o=a;return n=a=void 0,l=e.apply(o,t),l}():(n=void 0,a=void 0,l)}function u(...e){const p=Date.now(),u=d(p);return n=null!=o&&n?o(n,e):e,a=this,r=p,u&&null==c?(c=setTimeout(h,t),l):(null==c&&(c=setTimeout(h,t)),l)}return u.cancel=function(){null!=c&&clearTimeout(c),n=void 0,r=void 0,a=void 0,c=void 0},u.flush=function(){return null==c?l:(clearTimeout(c),p())},u.pending=function(){return null!=c},u}const F=/\(([\s\S]*)\)/,V=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,q=/\s?=.*$/;class context_request_event_s extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const o=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)o.has(e)||(o.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function W(e){const t=.001*performance.now();let o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],n-=e[1],n<0&&(o--,n+=1e9)),[o,n]}function G(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const K=G(),Y=new Map;function Z(e){Y.delete(e)}function X(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function J(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const o=t?K.current:void 0,n=K.next();return{scopeId:n,prevScopeId:o,prefix:`${X(n)} ${e}`}}Error;function ee(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;o(47);var te=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(te||{});Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const ie="utm_source=gitlens-extension&utm_medium=in-app-links",oe=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${ie}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${ie}`,graph:`https://gitkraken.com/solutions/commit-graph?${ie}`,launchpad:`https://gitkraken.com/solutions/launchpad?${ie}`,platform:`https://gitkraken.com/devex?${ie}`,pricing:`https://gitkraken.com/gitlens/pricing?${ie}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${ie}`,security:`https://help.gitkraken.com/gitlens/security?${ie}`,workspaces:`https://gitkraken.com/solutions/workspaces?${ie}`,cli:`https://gitkraken.com/cli?${ie}`,browserExtension:`https://gitkraken.com/browser-extension?${ie}`,desktop:`https://gitkraken.com/git-client?${ie}`,releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:`https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?${ie}`}),{fromCharCode:ne}=String;new TextEncoder;function re(e){const[t,o]=W(e);return 1e3*t+Math.floor(o/1e6)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);const se=Symbol("logInstanceNameFn");function ae(e){return function(e,t=!1){let o,n,r,a,l,c=0,d=!1,h=!1,p=!0;null!=e&&({args:o,if:n,enter:r,exit:a,prefix:l,logThreshold:c=0,scoped:d=!0,singleLine:h=!1,timed:p=!0}=e);c>0&&(h=!0,p=!0);p&&(d=!0);const u=de.isDebugging,f=t?de.debug:de.log,g=u?"debug":"info";return(e,t,m)=>{let b,v;if("function"==typeof m.value?(b=m.value,v="value"):"function"==typeof m.get&&(b=m.get,v="get"),null==b||null==v)throw new Error("Not supported");const y=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(V,"")||t,t=t.slice(0,t.indexOf("{"));let o=t.indexOf("("),n=t.indexOf(")");o=o>=0?o+1:0,n=n>0?n:t.indexOf("="),t=t.slice(o,n),t=`(${t})`;const r=F.exec(t);return null!=r?r[1].split(",").map((e=>e.trim().replace(q,""))):[]}(b):[];m[v]=function(...e){if(!u&&!de.enabled(g)||null!=n&&!n.apply(this,e))return b.apply(this,e);const m=K.current,v=K.next(),w=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const n=o.indexOf("_");o=-1===n?o:o.substring(n+1),null!=t?.[se]&&(o=t[se](e,o));return o}(this):void 0;let x,_=w?d?`${X(v,m)} ${w}.${t}`:`${w}.${t}`:t;null!=l&&(_=l({id:v,instance:this,instanceName:w??"",name:t,prefix:_},...e)),d&&(x=function(e,t){return t={prevScopeId:K.current,...t},Y.set(e,t),t}(v,{scopeId:v,prevScopeId:m,prefix:_}));const k=null!=r?r(...e):"";let C;if(!1===o||0===e.length)C="",h||f.call(de,`${_}${k}`);else{let t;C="";let n,r,a,l=-1;for(a of e){if(n=y[++l],t=o?.[l],null!=t){if("boolean"==typeof t)continue;if(C.length>0&&(C+=", "),"string"==typeof t){C+=t;continue}r=String(t(a))}else C.length>0&&(C+=", "),r=de.toLoggable(a);C+=n?`${n}=${r}`:r}h||f.call(de,C?`${_}${k}(${C})`:`${_}${k}`)}if(h||p||null!=a){const t=p?W():void 0,o=e=>{const o=void 0!==t?` [${re(t)}ms]`:"";h?de.error(e,C?`${_}${k}(${C})`:`${_}${k}`,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`):de.error(e,_,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`),d&&Z(v)};let n;try{n=b.apply(this,e)}catch(e){throw o(e),e}const r=e=>{let o,n,r,l;if(null!=t?(o=re(t),o>500?(n=de.warn,r=` [*${o}ms] (slow)`):(n=f,r=` [${o}ms]`)):(r="",n=f),null!=a)if("function"==typeof a)try{l=a(e)}catch(e){l=`@log.exit error: ${e}`}else!0===a&&(l=`returned ${de.toLoggable(e)}`);else x?.exitFailed?(l=x.exitFailed,n=de.error):l="completed";h?(0===c||o>c)&&n.call(de,C?`${_}${k}(${C}) ${l}${x?.exitDetails||""}${r}`:`${_}${k} ${l}${x?.exitDetails||""}${r}`):n.call(de,C?`${_}(${C}) ${l}${x?.exitDetails||""}${r}`:`${_} ${l}${x?.exitDetails||""}${r}`),d&&Z(v)};return null!=n&&ee(n)?n.then(r,o):r(n),n}return b.apply(this,e)}}}(e,!0)}const le=new Set(["accessToken","password","token"]),ce=function(e,t){return le.has(e)?`<${t}>`:t},de=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=he(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=he(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(t??=this.provider.sanitize??ce,Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function he(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const pe={enabled:e=>de.enabled(e)||de.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":de.error(void 0,t,o,...n);break;case"warn":de.warn(t,o,...n);break;case"info":de.log(t,o,...n);break;default:de.debug(t,o,...n)}}};class LoggerContext{constructor(e){this.scope=J(e,void 0),de.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off")}log(e,...t){"string"==typeof e?de.log(this.scope,e,...t):de.log(e,t.shift(),...t)}}class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(c,e)}dispose(){this.disposables.forEach((e=>e.dispose()))}}var ue;(ue||(ue={})).on=function(e,t,o,n){let r=!1;if("string"==typeof e){const a=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,a,n??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,a,n??!0))}}}const a=function(e){o(e,this)};return e.addEventListener(t,a,n??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,a,n??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:J(e??"",!1),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??pe,this._time=W(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=W(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=W(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,n]=W(this._time),r=1e3*o+Math.floor(n/1e6),a=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${r}ms]${e?.suffix??""}`)}}const fe=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const n=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=_Emitter._noop,this._disposed||n()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};fe._noop=function(){};let ge=fe;const me={done:!0,value:void 0},be=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};be.Undefined=new be(void 0);let ve=be;class LinkedList{constructor(){this._first=ve.Undefined,this._last=ve.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ve.Undefined}clear(){this._first=ve.Undefined,this._last=ve.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new ve(e);if(this._first===ve.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===ve.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ve.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ve.Undefined&&e.next!==ve.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ve.Undefined&&e.next===ve.Undefined?(this._first=ve.Undefined,this._last=ve.Undefined):e.next===ve.Undefined?(this._last=this._last.prev,this._last.next=ve.Undefined):e.prev===ve.Undefined&&(this._first=this._first.next,this._first.prev=ve.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===ve.Undefined?me:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==ve.Undefined;t=t.next)e.push(t.element);return e}}var ye=Object.defineProperty,we=Object.getOwnPropertyDescriptor,_e=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?we(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&ye(t,o,a),a};let ke;function Ce(){return ke??=acquireVsCodeApi()}const Ae=G();function Ee(){return`webview:${Ae.next()}`}let Pe=class{constructor(e){this.appName=e,this._onReceiveMessage=new ge,this._pendingHandlers=new Map,this._api=Ce(),this._disposable=ue.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=Y.get(K.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const n=function(e,t,...o){return(t?.provider??pe).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(J(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),n?.stop()}if(null==o.completionId)this._onReceiveMessage.fire(o);else{const e=Re(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}sendCommand(e,t){const o=Ee();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=Ee(),n=new Promise(((t,n)=>{const r=Re(e.response.method,o);let a;function l(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(r)}a=setTimeout((()=>{l.call(this),n(new Error(`Timed out waiting for completion of ${r}`))}),6e4),this._pendingHandlers.set(r,(e=>{l.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),n}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var Oe;function Re(e,t){return`${e}|${t}`}_e([ae({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],Pe.prototype,"onMessageReceived",1),_e([ae({args:{0:e=>e.method,1:!1}})],Pe.prototype,"sendCommand",1),_e([ae({args:{0:e=>e.method,1:!1,2:!1}})],Pe.prototype,"sendRequest",1),_e([ae({args:{0:e=>`${e.id}, method=${e.method}`}})],Pe.prototype,"postMessage",1),Pe=_e([(Oe=(e,t)=>`${e.appName}(${t})`,e=>{e[se]=Oe})],Pe);const Me="gl-telemetry-fired";function Te(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=Te(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Te(Math.max(Math.min(1,t),0),3),this.l=Te(Math.max(Math.min(1,o),0),3),this.a=Te(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=e.a,a=Math.max(t,o,n),l=Math.min(t,o,n);let c=0,d=0;const h=(l+a)/2,p=a-l;if(p>0){switch(d=Math.min(h<=.5?p/(2*h):p/(2-2*h),1),a){case t:c=(o-n)/p+(o<n?6:0);break;case o:c=(n-t)/p+2;break;case n:c=(t-o)/p+4}c*=60,c=Math.round(c)}return new HSLA(c,d,h,r)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:r}=e;let a,l,c;if(0===o)a=l=c=n;else{const e=n<.5?n*(1+o):n+o-n*o,r=2*n-e;a=HSLA._hue2rgb(r,e,t+1/3),l=HSLA._hue2rgb(r,e,t),c=HSLA._hue2rgb(r,e,t-1/3)}return new RGBA(Math.round(255*a),Math.round(255*l),Math.round(255*c),r)}}class HSVA{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Te(Math.max(Math.min(1,t),0),3),this.v=Te(Math.max(Math.min(1,o),0),3),this.a=Te(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=Math.max(t,o,n),a=r-Math.min(t,o,n),l=0===r?0:a/r;let c;return c=0===a?0:r===t?((o-n)/a%6+6)%6:r===o?(n-t)/a+2:(t-o)/a+4,new HSVA(Math.round(60*c),l,r,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:r}=e,a=n*o,l=a*(1-Math.abs(t/60%2-1)),c=n-a;let[d,h,p]=[0,0,0];return t<60?(d=a,h=l):t<120?(d=l,h=a):t<180?(h=a,p=l):t<240?(h=l,p=a):t<300?(d=l,p=a):t<=360&&(d=a,p=l),d=Math.round(255*(d+c)),h=Math.round(255*(h+c)),p=Math.round(255*(p+c)),new RGBA(d,h,p,r)}}function De(e,t){return t.getPropertyValue(e).trim()}const Ie=class _Color{static from(e){return e instanceof _Color?e:Ve(e)||_Color.red}static fromCssVariable(e,t){return Ve(De(e,t))||_Color.red}static fromHex(e){return qe(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return Te(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new Ue(new RGBA(0,0,0,e.rgba.a));if(1===t)return new Ue(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const r=(e,o)=>{const a=e.mix(o,.5),l=a.getRelativeLuminance();return Math.abs(t-l)<1e-7||!n--?a:l>t?r(e,a):r(a,o)},a=(o>t?r(Ue.black,e):r(e,Ue.white)).rgba;return new Ue(new RGBA(a.r,a.g,a.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:n,a:r}=this.rgba;return new _Color(new RGBA(t,o,n,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,n=t.a,r=o+n*(1-o);if(r<1e-6)return _Color.transparent;const a=this.rgba.r*o/r+t.r*n*(1-o)/r,l=this.rgba.g*o/r+t.g*n*(1-o)/r,c=this.rgba.b*o/r+t.b*n*(1-o)/r;return new _Color(new RGBA(a,l,c,r))}mix(e,t){return function(e,t,o){const n=e.rgba,r=t.rgba;return new Ue(new RGBA(n.r+o*(r.r-n.r),n.g+o*(r.g-n.g),n.b+o*(r.b-n.b),n.a+o*(r.a-n.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:n,a:r}=this.rgba;return new _Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-o),e.rgba.b-r*(e.rgba.b-n),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return je(e);return ze(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(r-n)/r,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};Ie.white=new Ie(new RGBA(255,255,255,1)),Ie.black=new Ie(new RGBA(0,0,0,1)),Ie.red=new Ie(new RGBA(255,0,0,1)),Ie.blue=new Ie(new RGBA(0,0,255,1)),Ie.green=new Ie(new RGBA(0,255,0,1)),Ie.cyan=new Ie(new RGBA(0,255,255,1)),Ie.lightgrey=new Ie(new RGBA(211,211,211,1)),Ie.transparent=new Ie(new RGBA(0,0,0,0));let Ue=Ie;function ze(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function Ne(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function je(e){return`#${Ne(e.rgba.r)}${Ne(e.rgba.g)}${Ne(e.rgba.b)}`}const Fe=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function Ve(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===te.Hash)return qe(e);const t=Fe.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new Ue(new RGBA(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new Ue(new HSLA(n[0],n[1],n[2],n[3]))}return Ue.red}function qe(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==te.Hash)return null;switch(t){case 7:{const t=16*We(e.charCodeAt(1))+We(e.charCodeAt(2)),o=16*We(e.charCodeAt(3))+We(e.charCodeAt(4)),n=16*We(e.charCodeAt(5))+We(e.charCodeAt(6));return new Ue(new RGBA(t,o,n,1))}case 9:{const t=16*We(e.charCodeAt(1))+We(e.charCodeAt(2)),o=16*We(e.charCodeAt(3))+We(e.charCodeAt(4)),n=16*We(e.charCodeAt(5))+We(e.charCodeAt(6)),r=16*We(e.charCodeAt(7))+We(e.charCodeAt(8));return new Ue(new RGBA(t,o,n,r/255))}case 4:{const t=We(e.charCodeAt(1)),o=We(e.charCodeAt(2)),n=We(e.charCodeAt(3));return new Ue(new RGBA(16*t+t,16*o+o,16*n+n))}case 5:{const t=We(e.charCodeAt(1)),o=We(e.charCodeAt(2)),n=We(e.charCodeAt(3)),r=We(e.charCodeAt(4));return new Ue(new RGBA(16*t+t,16*o+o,16*n+n,(16*r+r)/255))}default:return null}}function We(e){switch(e){case te.Digit0:return 0;case te.Digit1:return 1;case te.Digit2:return 2;case te.Digit3:return 3;case te.Digit4:return 4;case te.Digit5:return 5;case te.Digit6:return 6;case te.Digit7:return 7;case te.Digit8:return 8;case te.Digit9:return 9;case te.a:case te.A:return 10;case te.b:case te.B:return 11;case te.c:case te.C:return 12;case te.d:case te.D:return 13;case te.e:case te.E:return 14;case te.f:case te.F:return 15}return 0}const Ke=new ge,Ye=Ke.event;function Ze(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,r=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),a=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),l=De("--vscode-editor-background",o);let c=De("--vscode-editor-foreground",o);return c||(c=De("--vscode-foreground",o)),{colors:{background:l,foreground:c},computedStyle:o,isLightTheme:r,isHighContrastTheme:a,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],o=Ze();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(Ye(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=Ce(),this._hostIpc=new Pe(this.appName),t.push(this._hostIpc),this._telemetry=new TelemetryContext(this._hostIpc),t.push(this._telemetry),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Ke.fire(Ze(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===d.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(r,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(ue.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0}))),t.push(ue.on(window,Me,(e=>{this._telemetry.sendEvent(e.detail)}))),this.log("opened")}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=H((e=>{this.sendCommand(a,e)}),150);this.bindDisposables.push(ue.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),ue.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}var Xe={408:(e,t)=>{var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),g=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function y(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||m}function w(){}function x(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=y.prototype;var _=x.prototype=new w;_.constructor=x,b(_,y.prototype),_.isPureReactComponent=!0;var k=Array.isArray,C=Object.prototype.hasOwnProperty,A={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,a={},l=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,r)&&!S.hasOwnProperty(r)&&(a[r]=t[r]);var d=arguments.length-2;if(1===d)a.children=n;else if(1<d){for(var h=Array(d),p=0;p<d;p++)h[p]=arguments[p+2];a.children=h}if(e&&e.defaultProps)for(r in d=e.defaultProps)void 0===a[r]&&(a[r]=d[r]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:A.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function M(e,t,r,a,l){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var d=!1;if(null===e)d=!0;else switch(c){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case o:case n:d=!0}}if(d)return l=l(d=e),e=""===a?"."+R(d,0):a,k(l)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),M(l,t,r,"",(function(e){return e}))):null!=l&&(P(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||d&&d.key===l.key?"":(""+l.key).replace(O,"$&/")+"/")+e)),t.push(l)),1;if(d=0,a=""===a?".":a+":",k(e))for(var h=0;h<e.length;h++){var p=a+R(c=e[h],h);d+=M(c,t,r,p,l)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),h=0;!(c=e.next()).done;)d+=M(c=c.value,t,r,p=a+R(c,h++),l);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return d}function T(e,t,o){if(null==e)return e;var n=[],r=0;return M(e,n,"","",(function(e){return t.call(o,e,r++)})),n}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},I={transition:null},B={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:I,ReactCurrentOwner:A};t.Children={map:T,forEach:function(e,t,o){T(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=l,t.PureComponent=x,t.StrictMode=a,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=A.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(h in t)C.call(t,h)&&!S.hasOwnProperty(h)&&(r[h]=void 0===t[h]&&void 0!==d?d[h]:t[h])}var h=arguments.length-2;if(1===h)r.children=n;else if(1<h){d=Array(h);for(var p=0;p<h;p++)d[p]=arguments[p+2];r.children=d}return{$$typeof:o,type:e.type,key:a,ref:l,props:r,_owner:c}},t.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,o){return L.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,o){return L.current.useReducer(e,t,o)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return L.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return L.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},Qe={};function tt(e){var t=Qe[e];if(void 0!==t)return t.exports;var o=Qe[e]={exports:{}};return Xe[e](o,o.exports,tt),o.exports}tt.d=(e,t)=>{for(var o in t)tt.o(t,o)&&!tt.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},tt.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var lt={};(()=>{tt.d(lt,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>Lt,ud:()=>zt,wt:()=>Nt,ne:()=>Ht,Ku:()=>qt,FU:()=>Kt,XO:()=>di,Ze:()=>hi,K$:()=>pi,cX:()=>wi,Js:()=>xi,J9:()=>_i,si:()=>si,sg:()=>$i,hW:()=>Ci,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>Ai,WV:()=>le,h4:()=>ae,kZ:()=>se});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new s(n,e,o)},a=(o,n)=>{if(t)o.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of n){const n=document.createElement("style"),r=e.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},l=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,g=globalThis,m=g.trustedTypes,b=m?m.emptyScript:"",v=g.reactiveElementPolyfillSupport,y=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},x=(e,t)=>!c(e,t),_={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&d(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const a=n?.call(this);r.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:w).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=n,this[n]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,r){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??x)(n?r:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,v?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.0.0");const k=globalThis,C=k.trustedTypes,A=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,P="?"+E,O=`<${P}>`,R=document,M=()=>R.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,L="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,U=/>/g,N=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,H=/"/g,F=/^(?:script|style|textarea|title)$/i,V=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),q=V(1),W=(V(2),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),K=new WeakMap,Y=R.createTreeWalker(R,129);function Z(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}class Q{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let r=0,a=0;const l=e.length-1,c=this.parts,[d,h]=((e,t)=>{const o=e.length-1,n=[];let r,a=2===t?"<svg>":"",l=I;for(let t=0;t<o;t++){const o=e[t];let c,d,h=-1,p=0;for(;p<o.length&&(l.lastIndex=p,d=l.exec(o),null!==d);)p=l.lastIndex,l===I?"!--"===d[1]?l=B:void 0!==d[1]?l=U:void 0!==d[2]?(F.test(d[2])&&(r=RegExp("</"+d[2],"g")),l=N):void 0!==d[3]&&(l=N):l===N?">"===d[0]?(l=r??I,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?N:'"'===d[3]?H:j):l===H||l===j?l=N:l===B||l===U?l=I:(l=N,r=void 0);const u=l===N&&e[t+1].startsWith("/>")?" ":"";a+=l===I?o+O:h>=0?(n.push(c),o.slice(0,h)+S+o.slice(h)+E+u):o+E+(-2===h?t:u)}return[Z(e,a+(e[o]||"<?>")+(2===t?"</svg>":"")),n]})(e,t);if(this.el=Q.createElement(d,o),Y.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Y.nextNode())&&c.length<l;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(S)){const t=h[a++],o=n.getAttribute(e).split(E),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:l[2],strings:o,ctor:"."===l[1]?it:"?"===l[1]?rt:"@"===l[1]?st:nt}),n.removeAttribute(e)}else e.startsWith(E)&&(c.push({type:6,index:r}),n.removeAttribute(e));if(F.test(n.tagName)){const e=n.textContent.split(E),t=e.length-1;if(t>0){n.textContent=C?C.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],M()),Y.nextNode(),c.push({type:2,index:++r});n.append(e[t],M())}}}else if(8===n.nodeType)if(n.data===P)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(E,e+1));)c.push({type:7,index:r}),e+=E.length-1}r++}}static createElement(e,t){const o=R.createElement("template");return o.innerHTML=e,o}}function X(e,t,o=e,n){if(t===W)return t;let r=void 0!==n?o._$Co?.[n]:o._$Cl;const a=T(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(t=X(e,r._$AS(e,t.values),r,n)),t}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??R).importNode(t,!0);Y.currentNode=n;let r=Y.nextNode(),a=0,l=0,c=o[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new ot(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new at(r,this,e)),this._$AV.push(t),c=o[++l]}a!==c?.index&&(r=Y.nextNode(),a++)}return Y.currentNode=R,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),T(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==G&&T(this._$AH)?this._$AA.nextSibling.data=e:this.$(R.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(Z(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new et(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Q(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const r of e)n===t.length?t.push(o=new ot(this.k(M()),this.k(M()),this,this.options)):o=t[n],o._$AI(r),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=G}_$AI(e,t=this,o,n){const r=this.strings;let a=!1;if(void 0===r)e=X(this,e,t,0),a=!T(e)||e!==this._$AH&&e!==W,a&&(this._$AH=e);else{const n=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=X(this,n[o+l],t,l),c===W&&(c=this._$AH[l]),a||=!T(c)||c!==this._$AH[l],c===G?e=G:e!==G&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!n&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class st extends nt{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??G)===W)return;const o=this._$AH,n=e===G&&o!==G||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==G&&(o===G||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const J=k.litHtmlPolyfillSupport;J?.(Q,ot),(k.litHtmlVersions??=[]).push("3.0.0");class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let r=n._$litPart$;if(void 0===r){const e=o?.renderBefore??null;n._$litPart$=r=new ot(t.insertBefore(M(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const ee=globalThis.litElementPolyfillSupport;ee?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");const te={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:x},ie=(e=te,t,o)=>{const{kind:n,metadata:r}=o;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,r,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const r=this[n];t.call(this,o),this.requestUpdate(n,r,e)}}throw Error("Unsupported decorator location: "+n)};function oe(e){return(t,o)=>"object"==typeof o?ie(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const ne=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function re(e,t){return(o,n,r)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:l}="object"==typeof n?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ne(o,n,{get(){if(t){let t=e.call(this);return void 0===t&&(t=a(this),l.call(this,t)),t}return a(this)}})}return ne(o,n,{get(){return a(this)}})}}class gt extends ct{}const se=r`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,ae=r``,le=r`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,ce=Math.min,de=Math.max,he=Math.round,pe=(Math.floor,e=>({x:e,y:e})),ue={left:"right",right:"left",bottom:"top",top:"bottom"},fe={start:"end",end:"start"};function ge(e,t,o){return de(e,ce(t,o))}function me(e,t){return"function"==typeof e?e(t):e}function be(e){return e.split("-")[0]}function ve(e){return e.split("-")[1]}function ye(e){return"x"===e?"y":"x"}function we(e){return"y"===e?"height":"width"}function _e(e){return["top","bottom"].includes(be(e))?"y":"x"}function ke(e){return ye(_e(e))}function Ce(e){return e.replace(/start|end/g,(e=>fe[e]))}function Ae(e){return e.replace(/left|right|bottom|top/g,(e=>ue[e]))}function Ee(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Pe(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Oe(e,t,o){let{reference:n,floating:r}=e;const a=_e(t),l=ke(t),c=we(l),d=be(t),h="y"===a,p=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2,f=n[c]/2-r[c]/2;let g;switch(d){case"top":g={x:p,y:n.y-r.height};break;case"bottom":g={x:p,y:n.y+n.height};break;case"right":g={x:n.x+n.width,y:u};break;case"left":g={x:n.x-r.width,y:u};break;default:g={x:n.x,y:n.y}}switch(ve(t)){case"start":g[l]-=f*(o&&h?-1:1);break;case"end":g[l]+=f*(o&&h?-1:1)}return g}async function Re(e,t){var o;void 0===t&&(t={});const{x:n,y:r,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:f=!1,padding:g=0}=me(t,e),m=Ee(g),b=c[f?"floating"===u?"reference":"floating":u],v=Pe(await a.getClippingRect({element:null==(o=await(null==a.isElement?void 0:a.isElement(b)))||o?b:b.contextElement||await(null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{...l.floating,x:n,y:r}:l.reference,w=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),x=await(null==a.isElement?void 0:a.isElement(w))&&await(null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},_=Pe(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-_.top+m.top)/x.y,bottom:(_.bottom-v.bottom+m.bottom)/x.y,left:(v.left-_.left+m.left)/x.x,right:(_.right-v.right+m.right)/x.x}}const Me=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:r,middlewareData:a,rects:l,initialPlacement:c,platform:d,elements:h}=t,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...v}=me(e,t);if(null!=(o=a.arrow)&&o.alignmentOffset)return{};const y=be(r),w=be(c)===c,x=await(null==d.isRTL?void 0:d.isRTL(h.floating)),_=f||(w||!b?[Ae(c)]:function(e){const t=Ae(e);return[Ce(e),t,Ce(t)]}(c));f||"none"===m||_.push(...function(e,t,o,n){const r=ve(e);let a=function(e,t,o){const n=["left","right"],r=["right","left"],a=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:n:t?n:r;case"left":case"right":return t?a:l;default:return[]}}(be(e),"start"===o,n);return r&&(a=a.map((e=>e+"-"+r)),t&&(a=a.concat(a.map(Ce)))),a}(c,b,m,x));const k=[c,..._],C=await Re(t,v),A=[];let S=(null==(n=a.flip)?void 0:n.overflows)||[];if(p&&A.push(C[y]),u){const e=function(e,t,o){void 0===o&&(o=!1);const n=ve(e),r=ke(e),a=we(r);let l="x"===r?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=Ae(l)),[l,Ae(l)]}(r,l,x);A.push(C[e[0]],C[e[1]])}if(S=[...S,{placement:r,overflows:A}],!A.every((e=>e<=0))){var E,P;const e=((null==(E=a.flip)?void 0:E.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let o=null==(P=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:P.placement;if(!o)switch(g){case"bestFit":{var O;const e=null==(O=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:O[0];e&&(o=e);break}case"initialPlacement":o=c}if(r!==o)return{reset:{placement:o}}}return{}}}},Te=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:n}=t,r=await async function(e,t){const{placement:o,platform:n,elements:r}=e,a=await(null==n.isRTL?void 0:n.isRTL(r.floating)),l=be(o),c=ve(o),d="y"===_e(o),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=me(t,e);let{mainAxis:f,crossAxis:g,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&"number"==typeof m&&(g="end"===c?-1*m:m),d?{x:g*p,y:f*h}:{x:f*h,y:g*p}}(t,e);return{x:o+r.x,y:n+r.y,data:r}}}};function De(e){return ze(e)?(e.nodeName||"").toLowerCase():"#document"}function Ie(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ue(e){var t;return null==(t=(ze(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function ze(e){return e instanceof Node||e instanceof Ie(e).Node}function Ne(e){return e instanceof Element||e instanceof Ie(e).Element}function je(e){return e instanceof HTMLElement||e instanceof Ie(e).HTMLElement}function Fe(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Ie(e).ShadowRoot)}function Ve(e){const{overflow:t,overflowX:o,overflowY:n,display:r}=Ze(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(r)}function qe(e){return["table","td","th"].includes(De(e))}function We(e){const t=Ke(),o=Ze(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ke(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ye(e){return["html","body","#document"].includes(De(e))}function Ze(e){return Ie(e).getComputedStyle(e)}function Xe(e){return Ne(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Qe(e){if("html"===De(e))return e;const t=e.assignedSlot||e.parentNode||Fe(e)&&e.host||Ue(e);return Fe(t)?t.host:t}function dt(e){const t=Qe(e);return Ye(t)?e.ownerDocument?e.ownerDocument.body:e.body:je(t)&&Ve(t)?t:dt(t)}function ht(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=dt(e),a=r===(null==(n=e.ownerDocument)?void 0:n.body),l=Ie(r);return a?t.concat(l,l.visualViewport||[],Ve(r)?r:[],l.frameElement&&o?ht(l.frameElement):[]):t.concat(r,ht(r,[],o))}function pt(e){const t=Ze(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=je(e),a=r?e.offsetWidth:o,l=r?e.offsetHeight:n,c=he(o)!==a||he(n)!==l;return c&&(o=a,n=l),{width:o,height:n,$:c}}function ut(e){return Ne(e)?e:e.contextElement}function ft(e){const t=ut(e);if(!je(t))return pe(1);const o=t.getBoundingClientRect(),{width:n,height:r,$:a}=pt(t);let l=(a?he(o.width):o.width)/n,c=(a?he(o.height):o.height)/r;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const mt=pe(0);function bt(e){const t=Ie(e);return Ke()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:mt}function vt(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),a=ut(e);let l=pe(1);t&&(n?Ne(n)&&(l=ft(n)):l=ft(e));const c=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Ie(e))&&t}(a,o,n)?bt(a):pe(0);let d=(r.left+c.x)/l.x,h=(r.top+c.y)/l.y,p=r.width/l.x,u=r.height/l.y;if(a){const e=Ie(a),t=n&&Ne(n)?Ie(n):n;let o=e.frameElement;for(;o&&n&&t!==e;){const e=ft(o),t=o.getBoundingClientRect(),n=Ze(o),r=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;d*=e.x,h*=e.y,p*=e.x,u*=e.y,d+=r,h+=a,o=Ie(o).frameElement}}return Pe({width:p,height:u,x:d,y:h})}function yt(e){return vt(Ue(e)).left+Xe(e).scrollLeft}function wt(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=Ie(e),n=Ue(e),r=o.visualViewport;let a=n.clientWidth,l=n.clientHeight,c=0,d=0;if(r){a=r.width,l=r.height;const e=Ke();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,d=r.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,o);else if("document"===t)n=function(e){const t=Ue(e),o=Xe(e),n=e.ownerDocument.body,r=de(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),a=de(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-o.scrollLeft+yt(e);const c=-o.scrollTop;return"rtl"===Ze(n).direction&&(l+=de(t.clientWidth,n.clientWidth)-r),{width:r,height:a,x:l,y:c}}(Ue(e));else if(Ne(t))n=function(e,t){const o=vt(e,!0,"fixed"===t),n=o.top+e.clientTop,r=o.left+e.clientLeft,a=je(e)?ft(e):pe(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:r*a.x,y:n*a.y}}(t,o);else{const o=bt(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return Pe(n)}function xt(e,t){const o=Qe(e);return!(o===t||!Ne(o)||Ye(o))&&("fixed"===Ze(o).position||xt(o,t))}function _t(e,t,o){const n=je(t),r=Ue(t),a="fixed"===o,l=vt(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const d=pe(0);if(n||!n&&!a)if(("body"!==De(t)||Ve(r))&&(c=Xe(t)),n){const e=vt(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else r&&(d.x=yt(r));return{x:l.left+c.scrollLeft-d.x,y:l.top+c.scrollTop-d.y,width:l.width,height:l.height}}function kt(e,t){return je(e)&&"fixed"!==Ze(e).position?t?t(e):e.offsetParent:null}function $t(e,t){const o=Ie(e);if(!je(e))return o;let n=kt(e,t);for(;n&&qe(n)&&"static"===Ze(n).position;)n=kt(n,t);return n&&("html"===De(n)||"body"===De(n)&&"static"===Ze(n).position&&!We(n))?o:n||function(e){let t=Qe(e);for(;je(t)&&!Ye(t);){if(We(t))return t;t=Qe(t)}return null}(e)||o}const Ct={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:n}=e;const r=je(o),a=Ue(o);if(o===a)return t;let l={scrollLeft:0,scrollTop:0},c=pe(1);const d=pe(0);if((r||!r&&"fixed"!==n)&&(("body"!==De(o)||Ve(a))&&(l=Xe(o)),je(o))){const e=vt(o);c=ft(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+d.x,y:t.y*c.y-l.scrollTop*c.y+d.y}},getDocumentElement:Ue,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:r}=e;const a=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let n=ht(e,[],!1).filter((e=>Ne(e)&&"body"!==De(e))),r=null;const a="fixed"===Ze(e).position;let l=a?Qe(e):e;for(;Ne(l)&&!Ye(l);){const t=Ze(l),o=We(l);o||"fixed"!==t.position||(r=null),(a?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||Ve(l)&&!o&&xt(e,l))?n=n.filter((e=>e!==l)):r=t,l=Qe(l)}return t.set(e,n),n}(t,this._c):[].concat(o),n],l=a[0],c=a.reduce(((e,o)=>{const n=wt(t,o,r);return e.top=de(n.top,e.top),e.right=ce(n.right,e.right),e.bottom=ce(n.bottom,e.bottom),e.left=de(n.left,e.left),e}),wt(t,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:$t,getElementRects:async function(e){let{reference:t,floating:o,strategy:n}=e;const r=this.getOffsetParent||$t,a=this.getDimensions;return{reference:_t(t,await r(o),n),floating:{x:0,y:0,...await a(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return pt(e)},getScale:ft,isElement:Ne,isRTL:function(e){return"rtl"===Ze(e).direction}},At=r`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var St=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[le,se,At]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Te(6),Me(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r}=e,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...d}=me(t,e),h={x:o,y:n},p=await Re(e,d),u=_e(be(r)),f=ye(u);let g=h[f],m=h[u];if(a){const e="y"===f?"bottom":"right";g=ge(g+p["y"===f?"top":"left"],g,g-p[e])}if(l){const e="y"===u?"bottom":"right";m=ge(m+p["y"===u?"top":"left"],m,m-p[e])}const b=c.fn({...e,[f]:g,[u]:m});return{...b,data:{x:b.x-o,y:b.y-n}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:r,rects:a,platform:l,elements:c,middlewareData:d}=t,{element:h,padding:p=0}=me(e,t)||{};if(null==h)return{};const u=Ee(p),f={x:o,y:n},g=ke(r),m=we(g),b=await l.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",x=v?"clientHeight":"clientWidth",_=a.reference[m]+a.reference[g]-f[g]-a.floating[m],k=f[g]-a.reference[g],C=await(null==l.getOffsetParent?void 0:l.getOffsetParent(h));let A=C?C[x]:0;A&&await(null==l.isElement?void 0:l.isElement(C))||(A=c.floating[x]||a.floating[m]);const S=_/2-k/2,E=A/2-b[m]/2-1,P=ce(u[y],E),O=ce(u[w],E),R=P,M=A-b[m]-O,T=A/2-b[m]/2+S,D=ge(R,T,M),L=!d.arrow&&null!=ve(r)&&T!=D&&a.reference[m]/2-(T<R?P:O)-b[m]/2<0,I=L?T<R?T-R:T-M:0;return{[g]:f[g]+I,data:{[g]:D,centerOffset:T-D-I,...L&&{alignmentOffset:I}},reset:L}}}))({element:this.arrowEl})),await((e,t,o)=>{const n=new Map,r={platform:Ct,...o},a={...r.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:a=[],platform:l}=o,c=a.filter(Boolean),d=await(null==l.isRTL?void 0:l.isRTL(t));let h=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:p,y:u}=Oe(h,n,d),f=n,g={},m=0;for(let o=0;o<c.length;o++){const{name:a,fn:b}=c[o],{x:v,y,data:w,reset:x}=await b({x:p,y:u,initialPlacement:n,placement:f,strategy:r,middlewareData:g,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,g={...g,[a]:{...g[a],...w}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(f=x.placement),x.rects&&(h=!0===x.rects?await l.getElementRects({reference:e,floating:t,strategy:r}):x.rects),({x:p,y:u}=Oe(h,f,d))),o=-1)}return{x:p,y:u,placement:f,strategy:r,middlewareData:g}})(e,t,{...r,platform:a})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:n})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=n.arrow?.x,t=n.arrow?.y,r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[r]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?q`<div part="arrow" class="arrow"></div>`:""}render(){return q`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}St([oe({type:Boolean})],xe.prototype,"arrow",void 0),St([oe({type:Boolean})],xe.prototype,"hover",void 0),St([oe()],xe.prototype,"placement",void 0),St([oe({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),St([oe({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),St([re('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),St([re(".popover")],xe.prototype,"popoverEl",void 0),St([re(".arrow")],xe.prototype,"arrowEl",void 0),St([oe({state:!0,attribute:!1})],xe.prototype,"open",void 0);const Et=r`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[le,se,Et]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return q`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([oe({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);const Pt=r`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=Pt}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return q`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([oe({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);const Ot=new Set(["children","localName","ref","style","className"]),Rt=new WeakMap,Mt=(e,t,o,n,r)=>{const a=r?.[t];void 0===a||o===n?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,o)=>{let n=Rt.get(e);void 0===n&&Rt.set(e,n=new Map);let r=n.get(t);void 0!==o?void 0===r?(n.set(t,r={handleEvent:o}),e.addEventListener(t,r)):r.handleEvent=o:void 0!==r&&(n.delete(t),e.removeEventListener(t,r))})(e,a,o)},Tt=({react:e,tagName:t,elementClass:o,events:n,displayName:r})=>{const a=new Set(Object.keys(n??{})),l=e.forwardRef(((r,l)=>{const c=e.useRef(null),d=e.useRef(null),h={},p={};for(const[e,t]of Object.entries(r))Ot.has(e)?h["className"===e?"class":e]=t:a.has(e)||e in o.prototype?p[e]=t:h[e]=t;return e.useLayoutEffect((()=>{if(null!==d.current){for(const e in p)Mt(d.current,e,r[e],c.current?c.current[e]:void 0,n);c.current=r}})),e.useLayoutEffect((()=>{d.current?.removeAttribute("defer-hydration")}),[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e=>{d.current=e,"function"==typeof l?l(e):null!==l&&(l.current=e)}})}));return l.displayName=r??o.name,l};var Dt=tt(294);const Lt=Tt({react:Dt,tagName:Se.elementName,elementClass:Se}),It=r`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,Bt=r`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Ut=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class He extends gt{static{this.styles=[le,It]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?q`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:q`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Ut([oe()],He.prototype,"src",void 0),Ut([oe()],He.prototype,"indicator",void 0);class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[le,Bt]}render(){return q`<slot class="avatar-group" part="base"></slot>`}}const zt=Tt({react:Dt,tagName:He.elementName,elementClass:He}),Nt=Tt({react:Dt,tagName:Le.elementName,elementClass:Le}),jt=r`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=jt}static{this.elementName="gk-badge"}render(){return q`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([oe()],Be.prototype,"variant",void 0);const Ht=Tt({react:Dt,tagName:Be.elementName,elementClass:Be}),Ft=r`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var Vt=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Ft}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return q`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}Vt([oe({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),Vt([oe({reflect:!0})],Ge.prototype,"type",void 0),Vt([oe()],Ge.prototype,"variant",void 0);const qt=Tt({react:Dt,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),Wt=r`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Gt=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[le,se,Wt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return q`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>q`<span class="complexity-indicator__box"></span>`))}</div>`}}Gt([oe({type:Number})],Je.prototype,"level",void 0),Gt([oe()],Je.prototype,"label",void 0);const Kt=Tt({react:Dt,tagName:Je.elementName,elementClass:Je}),Yt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Zt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Xt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Jt;const Qt=new Map;let ei,ti,ii;new Map;const oi=["th","st","nd","rd"];function ni(e){const t=e%100;return`${e}${oi[(t-20)%10]??oi[t]??oi[0]}`}var ri=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[le]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(e){const t=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,o,n,r]of Xt){const a=Math.abs(t);if(a>=o||1e3===o)return null==Jt&&(null!=ii?Jt=ii.resolvedOptions().locale:null!=ti?Jt=ti.resolvedOptions().locale:(ii=new Intl.RelativeTimeFormat(ei,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Jt=ii.resolvedOptions().locale)),"en"===Jt||Jt?.startsWith("en-")?`${Math.round(a/n)}${r}`:(null==ii&&(ii=new Intl.RelativeTimeFormat(ei,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),ii.format(Math.round(t/n),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return q`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,n=!0){const r=`${o??""}:${t=t??void 0}`;let a=Qt.get(r);if(null==a){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Zt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Yt))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let l;l=null==o?ei:"system"===o?void 0:[o],a=new Intl.DateTimeFormat(l,e),n&&Qt.set(r,a)}if(null==t||Zt.test(t))return a.format(e);function l(e){const t=`${o??""}:time:${e}`;let r=Qt.get(t);if(null==r){const a={localeMatcher:"best fit",timeStyle:e};let l;l=null==o?ei:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(l,a),n&&Qt.set(t,r)}return r}const c=a.formatToParts(e);return t.replace(Yt,((t,o,n,r,a,d,h,p,u,f,g,m,b,v,y)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in y){const o=y[t];if(null==o)continue;const n=c.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return ni(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=l("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??n)?.value??""}`}return n?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}ri([oe({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],po.prototype,"date",void 0),ri([oe()],po.prototype,"format",void 0);const si=Tt({react:Dt,tagName:po.elementName,elementClass:po}),ai=r`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,li=r`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,ci=r`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class yo extends gt{static{this.styles=[le,ci]}static{this.elementName="gk-focus-item"}render(){return q`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class vo extends gt{static{this.styles=[le,li]}static{this.elementName="gk-focus-row"}render(){return q`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class bo extends gt{static{this.styles=[le,li,ci,ai]}static{this.elementName="gk-focus-container"}render(){return q`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const di=Tt({react:Dt,tagName:yo.elementName,elementClass:yo}),hi=Tt({react:Dt,tagName:vo.elementName,elementClass:vo}),pi=Tt({react:Dt,tagName:bo.elementName,elementClass:bo});class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ui=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.it)e in t||(o.remove(e),this.it.delete(e));for(const e in t){const n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return W}}),fi=e=>e??G,gi=r`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var mi=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[le,se,gi]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return q`<div class="field"><label class="${ui({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${ui({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${fi(this.autocomplete)}" autocorrect="${fi(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${fi(this.name)}" part="input" placeholder="${fi(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}mi([oe()],Ro.prototype,"autocomplete",void 0),mi([oe()],Ro.prototype,"autocorrect",void 0),mi([oe({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),mi([oe()],Ro.prototype,"label",void 0),mi([oe({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),mi([oe()],Ro.prototype,"name",void 0),mi([oe()],Ro.prototype,"placeholder",void 0),mi([oe({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),mi([oe({reflect:!0})],Ro.prototype,"type",void 0),mi([oe()],Ro.prototype,"value",void 0);const bi=r`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,vi=r`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,yi=r`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[le,bi]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let n=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?n=(n-1+o)%o:"ArrowDown"===e.key?n=(n+1)%o:"Home"===e.key?n=0:"End"===e.key&&(n=o-1),this._setCurrentItem(t[n]),t[n].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return q`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([function(e){return(t,o)=>{const{slot:n,selector:r}=e??{},a="slot"+(n?`[name=${n}]`:":not([name])");return ne(t,o,{get(){const t=this.renderRoot?.querySelector(a),o=t?.assignedElements(e)??[];return void 0===r?o:o.filter((e=>e.matches(r)))}})}}({flatten:!0})],Mo.prototype,"slotChildren",void 0);class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[le,vi]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return q`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([oe({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);class Ho extends gt{static{this.styles=[le,yi]}static{this.elementName="gk-menu-label"}render(){return q`<slot class="menu-label" part="base"></slot>`}}const wi=Tt({react:Dt,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),xi=Tt({react:Dt,tagName:Do.elementName,elementClass:Do}),_i=Tt({react:Dt,tagName:Ho.elementName,elementClass:Ho}),ki=r`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Bo extends gt{static{this.styles=[le,ki]}static{this.elementName="gk-tag"}render(){return q`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);a>3&&l&&Object.defineProperty(t,o,l)}([oe()],Bo.prototype,"variant",void 0);const $i=Tt({react:Dt,tagName:Bo.elementName,elementClass:Bo}),Ci=Tt({react:Dt,tagName:$e.elementName,elementClass:$e});function Ai(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Ai(...e.components))}))}})();var dt=lt.qE,ht=lt.Ct,pt=lt.zx,ut=lt.v2,ft=lt.sN,mt=lt.J2,bt=lt.fW;const vt=globalThis,yt=vt.ShadowRoot&&(void 0===vt.ShadyCSS||vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wt=Symbol(),xt=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(yt&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=xt.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&xt.set(t,e))}return e}toString(){return this.cssText}}const _t=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,wt),kt=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new css_tag_n(o,e,wt)},$t=yt?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return _t(t)})(e):e,{is:Ct,defineProperty:At,getOwnPropertyDescriptor:St,getOwnPropertyNames:Et,getOwnPropertySymbols:Pt,getPrototypeOf:Ot}=Object,Rt=globalThis,Mt=Rt.trustedTypes,Tt=Mt?Mt.emptyScript:"",Dt=Rt.reactiveElementPolyfillSupport,Lt=(e,t)=>e,It={toAttribute(e,t){switch(t){case Boolean:e=e?Tt:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},Bt=(e,t)=>!Ct(e,t),Ut={attribute:!0,type:String,converter:It,reflect:!1,hasChanged:Bt};Symbol.metadata??=Symbol("metadata"),Rt.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ut){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&At(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=St(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const a=n?.call(this);r.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ut}static _$Ei(){if(this.hasOwnProperty(Lt("elementProperties")))return;const e=Ot(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Lt("properties"))){const e=this.properties,t=[...Et(e),...Pt(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift($t(e))}else void 0!==e&&t.push($t(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(yt)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),n=vt.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:It).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:It;this._$Em=n,this[n]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Bt)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[Lt("elementProperties")]=new Map,reactive_element_b[Lt("finalized")]=new Map,Dt?.({ReactiveElement:reactive_element_b}),(Rt.reactiveElementVersions??=[]).push("2.0.4");const zt=globalThis,Nt=zt.trustedTypes,jt=Nt?Nt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ht="$lit$",Ft=`lit$${Math.random().toFixed(9).slice(2)}$`,Vt="?"+Ft,qt=`<${Vt}>`,Wt=document,Gt=()=>Wt.createComment(""),Kt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Yt=Array.isArray,Zt=e=>Yt(e)||"function"==typeof e?.[Symbol.iterator],Xt="[ \t\n\f\r]",Jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qt=/-->/g,ei=/>/g,ti=RegExp(`>|${Xt}(?:([^\\s"'>=/]+)(${Xt}*=${Xt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ii=/'/g,oi=/"/g,ni=/^(?:script|style|textarea|title)$/i,ri=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),si=ri(1),ai=(ri(2),ri(3),Symbol.for("lit-noChange")),li=Symbol.for("lit-nothing"),ci=new WeakMap,di=Wt.createTreeWalker(Wt,129);function hi(e,t){if(!Yt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==jt?jt.createHTML(t):t}const pi=(e,t)=>{const o=e.length-1,n=[];let r,a=2===t?"<svg>":3===t?"<math>":"",l=Jt;for(let t=0;t<o;t++){const o=e[t];let c,d,h=-1,p=0;for(;p<o.length&&(l.lastIndex=p,d=l.exec(o),null!==d);)p=l.lastIndex,l===Jt?"!--"===d[1]?l=Qt:void 0!==d[1]?l=ei:void 0!==d[2]?(ni.test(d[2])&&(r=RegExp("</"+d[2],"g")),l=ti):void 0!==d[3]&&(l=ti):l===ti?">"===d[0]?(l=r??Jt,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,c=d[1],l=void 0===d[3]?ti:'"'===d[3]?oi:ii):l===oi||l===ii?l=ti:l===Qt||l===ei?l=Jt:(l=ti,r=void 0);const u=l===ti&&e[t+1].startsWith("/>")?" ":"";a+=l===Jt?o+qt:h>=0?(n.push(c),o.slice(0,h)+Ht+o.slice(h)+Ft+u):o+Ft+(-2===h?t:u)}return[hi(e,a+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class lit_html_N{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let r=0,a=0;const l=e.length-1,c=this.parts,[d,h]=pi(e,t);if(this.el=lit_html_N.createElement(d,o),di.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=di.nextNode())&&c.length<l;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(Ht)){const t=h[a++],o=n.getAttribute(e).split(Ft),l=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:l[2],strings:o,ctor:"."===l[1]?lit_html_H:"?"===l[1]?lit_html_I:"@"===l[1]?lit_html_L:lit_html_k}),n.removeAttribute(e)}else e.startsWith(Ft)&&(c.push({type:6,index:r}),n.removeAttribute(e));if(ni.test(n.tagName)){const e=n.textContent.split(Ft),t=e.length-1;if(t>0){n.textContent=Nt?Nt.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],Gt()),di.nextNode(),c.push({type:2,index:++r});n.append(e[t],Gt())}}}else if(8===n.nodeType)if(n.data===Vt)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(Ft,e+1));)c.push({type:7,index:r}),e+=Ft.length-1}r++}}static createElement(e,t){const o=Wt.createElement("template");return o.innerHTML=e,o}}function ui(e,t,o=e,n){if(t===ai)return t;let r=void 0!==n?o._$Co?.[n]:o._$Cl;const a=Kt(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(t=ui(e,r._$AS(e,t.values),r,n)),t}class lit_html_M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??Wt).importNode(t,!0);di.currentNode=n;let r=di.nextNode(),a=0,l=0,c=o[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new lit_html_R(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new z(r,this,e)),this._$AV.push(t),c=o[++l]}a!==c?.index&&(r=di.nextNode(),a++)}return di.currentNode=Wt,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class lit_html_R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=li,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ui(this,e,t),Kt(e)?e===li||null==e||""===e?(this._$AH!==li&&this._$AR(),this._$AH=li):e!==this._$AH&&e!==ai&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Zt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==li&&Kt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Wt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=lit_html_N.createElement(hi(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new lit_html_M(n,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=ci.get(e.strings);return void 0===t&&ci.set(e.strings,t=new lit_html_N(e)),t}k(e){Yt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const r of e)n===t.length?t.push(o=new lit_html_R(this.O(Gt()),this.O(Gt()),this,this.options)):o=t[n],o._$AI(r),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class lit_html_k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=li,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=li}_$AI(e,t=this,o,n){const r=this.strings;let a=!1;if(void 0===r)e=ui(this,e,t,0),a=!Kt(e)||e!==this._$AH&&e!==ai,a&&(this._$AH=e);else{const n=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=ui(this,n[o+l],t,l),c===ai&&(c=this._$AH[l]),a||=!Kt(c)||c!==this._$AH[l],c===li?e=li:e!==li&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!n&&this.j(e)}j(e){e===li?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lit_html_H extends lit_html_k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===li?void 0:e}}class lit_html_I extends lit_html_k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==li)}}class lit_html_L extends lit_html_k{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=ui(this,e,t,0)??li)===ai)return;const o=this._$AH,n=e===li&&o!==li||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==li&&(o===li||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ui(this,e)}}const fi={M:Ht,P:Ft,A:Vt,C:1,L:pi,R:lit_html_M,D:Zt,V:ui,I:lit_html_R,H:lit_html_k,N:lit_html_I,U:lit_html_L,B:lit_html_H,F:z},gi=zt.litHtmlPolyfillSupport;gi?.(lit_html_N,lit_html_R),(zt.litHtmlVersions??=[]).push("3.2.1");class lit_element_r extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let r=n._$litPart$;if(void 0===r){const e=o?.renderBefore??null;n._$litPart$=r=new lit_html_R(t.insertBefore(Gt(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ai}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const mi=globalThis.litElementPolyfillSupport;mi?.({LitElement:lit_element_r});(globalThis.litElementVersions??=[]).push("4.1.1");const bi=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},vi={attribute:!0,type:String,converter:It,reflect:!1,hasChanged:Bt},yi=(e=vi,t,o)=>{const{kind:n,metadata:r}=o;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,r,e)},init(t){return void 0!==t&&this.P(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const r=this[n];t.call(this,o),this.requestUpdate(n,r,e)}}throw Error("Unsupported decorator location: "+n)};function wi(e){return(t,o)=>"object"==typeof o?yi(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function xi(e){return wi({...e,state:!0,attribute:!1})}const _i=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ki(e,t){return(o,n,r)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof n?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return _i(o,n,{get(){let o=e.call(this);return void 0===o&&(o=a(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return _i(o,n,{get(){return a(this)}})}}function $i(e){return(t,o)=>{const{slot:n,selector:r}=e??{},a="slot"+(n?`[name=${n}]`:":not([name])");return _i(t,o,{get(){const t=this.renderRoot?.querySelector(a),o=t?.assignedElements(e)??[];return void 0===r?o:o.filter((e=>e.matches(r)))}})}}function Ci(e,t,o){return e?t(e):o?.(e)}const Ai=new WeakMap;class GlElement extends lit_element_r{emit(e,t,o){const n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(n),n}update(e){const t=Ai.get(this.constructor);if(null!=t)for(const{keys:o,method:n,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&n.call(this,t)}super.update(e)}}function*Si(e,t){if(void 0!==e){let o=0;for(const n of e)yield t(n,o++)}}const Ei=1,Pi=2,Oi=e=>(...t)=>({_$litDirective$:e,values:t});class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:Ri}=fi,Mi=()=>document.createComment(""),Ti=(e,t,o)=>{const n=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=n.insertBefore(Mi(),r),a=n.insertBefore(Mi(),r);o=new Ri(t,a,e,e.options)}else{const t=o._$AB.nextSibling,a=o._$AM,l=a!==e;if(l){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==r||l){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,r),e=t}}}return o},Di=(e,t,o=e)=>(e._$AI(t,o),e),Li={},Ii=e=>{e._$AP?.(!1,!0);let t=e._$AA;const o=e._$AB.nextSibling;for(;t!==o;){const e=t.nextSibling;t.remove(),t=e}},Bi=(e,t,o)=>{const n=new Map;for(let r=t;r<=o;r++)n.set(e[r],r);return n},Ui=Oi(class extends directive_i{constructor(e){if(super(e),e.type!==Pi)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const r=[],a=[];let l=0;for(const t of e)r[l]=n?n(t,l):l,a[l]=o(t,l),l++;return{values:a,keys:r}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){const r=(e=>e._$AH)(e),{values:a,keys:l}=this.dt(t,o,n);if(!Array.isArray(r))return this.ut=l,a;const c=this.ut??=[],d=[];let h,p,u=0,f=r.length-1,g=0,m=a.length-1;for(;u<=f&&g<=m;)if(null===r[u])u++;else if(null===r[f])f--;else if(c[u]===l[g])d[g]=Di(r[u],a[g]),u++,g++;else if(c[f]===l[m])d[m]=Di(r[f],a[m]),f--,m--;else if(c[u]===l[m])d[m]=Di(r[u],a[m]),Ti(e,d[m+1],r[u]),u++,m--;else if(c[f]===l[g])d[g]=Di(r[f],a[g]),Ti(e,r[u],r[f]),f--,g++;else if(void 0===h&&(h=Bi(l,g,m),p=Bi(c,u,f)),h.has(c[u]))if(h.has(c[f])){const t=p.get(l[g]),o=void 0!==t?r[t]:null;if(null===o){const t=Ti(e,r[u]);Di(t,a[g]),d[g]=t}else d[g]=Di(o,a[g]),Ti(e,r[u],o),r[t]=null;g++}else Ii(r[f]),f--;else Ii(r[u]),u++;for(;g<=m;){const t=Ti(e,d[m+1]);Di(t,a[g]),d[g++]=t}for(;u<=f;){const e=r[u++];null!==e&&Ii(e)}return this.ut=l,((e,t=Li)=>{e._$AH=t})(e,d),ai}});class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=li,e.type!==Pi)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===li||null==e)return this._t=void 0,this.it=e;if(e===ai)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const zi=Oi(unsafe_html_e);function Ni(e,t,o,n=!1,r){const a={name:"",relativePath:"",children:new Map,descendants:[]};let l=e.reduce(((e,n)=>{let r=e,a="";for(const e of t(n)){a=o(a,e),void 0===r.children&&(r.children=new Map);let t=r.children.get(e);void 0===t&&(t={name:e,relativePath:a,parent:r,children:void 0,descendants:void 0},r.children.set(e,t)),void 0===r.descendants&&(r.descendants=[]),r.descendants.push(n),r=t}return r.value=n,e}),a);return n&&(l=ji(l,o,!0,r)),l}function ji(e,t,o=!0,n){if(void 0===e.children)return e;const r=[...e.children.values()];for(const e of r)ji(e,t,!1,n);if(!o&&1===r.length){const o=r[0];(void 0===o.value||n?.(o.value))&&(e.name=t(e.name,o.name),e.relativePath=o.relativePath,e.children=o.children,e.descendants=o.descendants,e.value=o.value)}return e}function Hi(e,t){if(null==e)return 0;let o=0;for(const n of e)o+=t(n);return o}var Fi=Object.defineProperty,Vi=Object.defineProperties,qi=Object.getOwnPropertyDescriptor,Wi=Object.getOwnPropertyDescriptors,Gi=Object.getOwnPropertySymbols,Ki=Object.prototype.hasOwnProperty,Yi=Object.prototype.propertyIsEnumerable,Zi=(e,t,o)=>t in e?Fi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Xi=(e,t)=>{for(var o in t||(t={}))Ki.call(t,o)&&Zi(e,o,t[o]);if(Gi)for(var o of Gi(t))Yi.call(t,o)&&Zi(e,o,t[o]);return e},Ji=(e,t)=>Vi(e,Wi(t)),Qi=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?qi(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Fi(t,o,a),a},eo=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)},to=new Map,io=new WeakMap;function oo(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function no(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function ro(e,t){to.set(e,oo(t))}function so(e,t,o){const n=io.get(e);if(null==n?void 0:n[t])return no(n[t],o.dir);const r=to.get(t);return r?no(r,o.dir):{keyframes:[],options:{duration:0}}}var ao,lo=kt`
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
`,co=kt`
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
`,ho=kt`
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
`,uo=class extends lit_element_r{constructor(){super(),((e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)})(this,ao,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,Xi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const n=customElements.get(e);if(!n){try{customElements.define(e,t,o)}catch(n){customElements.define(e,class extends t{},o)}return}let r=" (unknown version)",a=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in n&&n.version&&(a=" v"+n.version)}attributeChangedCallback(e,t,o){var n,r,a;eo(n=this,r=ao,"read from private field"),(a?a.call(n):r.get(n))||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,o,n)=>{eo(e,t,"write to private field"),n?n.call(e,o):t.set(e,o)})(this,ao,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)}))}};ao=new WeakMap,uo.version="2.17.1",uo.dependencies={},Qi([wi()],uo.prototype,"dir",2),Qi([wi()],uo.prototype,"lang",2);const fo=Math.min,go=Math.max,mo=Math.round,wo=Math.floor,xo=e=>({x:e,y:e}),_o={left:"right",right:"left",bottom:"top",top:"bottom"},ko={start:"end",end:"start"};function Co(e,t,o){return go(e,fo(t,o))}function Ao(e,t){return"function"==typeof e?e(t):e}function So(e){return e.split("-")[0]}function Eo(e){return e.split("-")[1]}function Po(e){return"x"===e?"y":"x"}function Oo(e){return"y"===e?"height":"width"}function To(e){return["top","bottom"].includes(So(e))?"y":"x"}function Lo(e){return Po(To(e))}function Io(e){return e.replace(/start|end/g,(e=>ko[e]))}function Uo(e){return e.replace(/left|right|bottom|top/g,(e=>_o[e]))}function zo(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function No(e){const{x:t,y:o,width:n,height:r}=e;return{width:n,height:r,top:o,left:t,right:t+n,bottom:o+r,x:t,y:o}}function jo(e,t,o){let{reference:n,floating:r}=e;const a=To(t),l=Lo(t),c=Oo(l),d=So(t),h="y"===a,p=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2,f=n[c]/2-r[c]/2;let g;switch(d){case"top":g={x:p,y:n.y-r.height};break;case"bottom":g={x:p,y:n.y+n.height};break;case"right":g={x:n.x+n.width,y:u};break;case"left":g={x:n.x-r.width,y:u};break;default:g={x:n.x,y:n.y}}switch(Eo(t)){case"start":g[l]-=f*(o&&h?-1:1);break;case"end":g[l]+=f*(o&&h?-1:1)}return g}async function Fo(e,t){var o;void 0===t&&(t={});const{x:n,y:r,platform:a,rects:l,elements:c,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:f=!1,padding:g=0}=Ao(t,e),m=zo(g),b=c[f?"floating"===u?"reference":"floating":u],v=No(await a.getClippingRect({element:null==(o=await(null==a.isElement?void 0:a.isElement(b)))||o?b:b.contextElement||await(null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:p,strategy:d})),y="floating"===u?{x:n,y:r,width:l.floating.width,height:l.floating.height}:l.reference,w=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),x=await(null==a.isElement?void 0:a.isElement(w))&&await(null==a.getScale?void 0:a.getScale(w))||{x:1,y:1},_=No(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:w,strategy:d}):y);return{top:(v.top-_.top+m.top)/x.y,bottom:(_.bottom-v.bottom+m.bottom)/x.y,left:(v.left-_.left+m.left)/x.x,right:(_.right-v.right+m.right)/x.x}}function Vo(){return"undefined"!=typeof window}function qo(e){return Ko(e)?(e.nodeName||"").toLowerCase():"#document"}function Wo(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Go(e){var t;return null==(t=(Ko(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Ko(e){return!!Vo()&&(e instanceof Node||e instanceof Wo(e).Node)}function Yo(e){return!!Vo()&&(e instanceof Element||e instanceof Wo(e).Element)}function Zo(e){return!!Vo()&&(e instanceof HTMLElement||e instanceof Wo(e).HTMLElement)}function Xo(e){return!(!Vo()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof Wo(e).ShadowRoot)}function Jo(e){const{overflow:t,overflowX:o,overflowY:n,display:r}=rn(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(r)}function Qo(e){return["table","td","th"].includes(qo(e))}function en(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function tn(e){const t=on(),o=Yo(e)?rn(e):e;return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function on(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function nn(e){return["html","body","#document"].includes(qo(e))}function rn(e){return Wo(e).getComputedStyle(e)}function sn(e){return Yo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function an(e){if("html"===qo(e))return e;const t=e.assignedSlot||e.parentNode||Xo(e)&&e.host||Go(e);return Xo(t)?t.host:t}function ln(e){const t=an(e);return nn(t)?e.ownerDocument?e.ownerDocument.body:e.body:Zo(t)&&Jo(t)?t:ln(t)}function cn(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=ln(e),a=r===(null==(n=e.ownerDocument)?void 0:n.body),l=Wo(r);if(a){const e=dn(l);return t.concat(l,l.visualViewport||[],Jo(r)?r:[],e&&o?cn(e):[])}return t.concat(r,cn(r,[],o))}function dn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function hn(e){const t=rn(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=Zo(e),a=r?e.offsetWidth:o,l=r?e.offsetHeight:n,c=mo(o)!==a||mo(n)!==l;return c&&(o=a,n=l),{width:o,height:n,$:c}}function pn(e){return Yo(e)?e:e.contextElement}function un(e){const t=pn(e);if(!Zo(t))return xo(1);const o=t.getBoundingClientRect(),{width:n,height:r,$:a}=hn(t);let l=(a?mo(o.width):o.width)/n,c=(a?mo(o.height):o.height)/r;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}const fn=xo(0);function gn(e){const t=Wo(e);return on()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:fn}function mn(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),a=pn(e);let l=xo(1);t&&(n?Yo(n)&&(l=un(n)):l=un(e));const c=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Wo(e))&&t}(a,o,n)?gn(a):xo(0);let d=(r.left+c.x)/l.x,h=(r.top+c.y)/l.y,p=r.width/l.x,u=r.height/l.y;if(a){const e=Wo(a),t=n&&Yo(n)?Wo(n):n;let o=e,r=dn(o);for(;r&&n&&t!==o;){const e=un(r),t=r.getBoundingClientRect(),n=rn(r),a=t.left+(r.clientLeft+parseFloat(n.paddingLeft))*e.x,l=t.top+(r.clientTop+parseFloat(n.paddingTop))*e.y;d*=e.x,h*=e.y,p*=e.x,u*=e.y,d+=a,h+=l,o=Wo(r),r=dn(o)}}return No({width:p,height:u,x:d,y:h})}function bn(e,t){const o=sn(e).scrollLeft;return t?t.left+o:mn(Go(e)).left+o}function vn(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=Wo(e),n=Go(e),r=o.visualViewport;let a=n.clientWidth,l=n.clientHeight,c=0,d=0;if(r){a=r.width,l=r.height;const e=on();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,d=r.offsetTop)}return{width:a,height:l,x:c,y:d}}(e,o);else if("document"===t)n=function(e){const t=Go(e),o=sn(e),n=e.ownerDocument.body,r=go(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),a=go(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-o.scrollLeft+bn(e);const c=-o.scrollTop;return"rtl"===rn(n).direction&&(l+=go(t.clientWidth,n.clientWidth)-r),{width:r,height:a,x:l,y:c}}(Go(e));else if(Yo(t))n=function(e,t){const o=mn(e,!0,"fixed"===t),n=o.top+e.clientTop,r=o.left+e.clientLeft,a=Zo(e)?un(e):xo(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:r*a.x,y:n*a.y}}(t,o);else{const o=gn(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return No(n)}function yn(e,t){const o=an(e);return!(o===t||!Yo(o)||nn(o))&&("fixed"===rn(o).position||yn(o,t))}function wn(e,t,o){const n=Zo(t),r=Go(t),a="fixed"===o,l=mn(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const d=xo(0);if(n||!n&&!a)if(("body"!==qo(t)||Jo(r))&&(c=sn(t)),n){const e=mn(t,!0,a,t);d.x=e.x+t.clientLeft,d.y=e.y+t.clientTop}else r&&(d.x=bn(r));let h=0,p=0;if(r&&!n&&!a){const e=r.getBoundingClientRect();p=e.top+c.scrollTop,h=e.left+c.scrollLeft-bn(r,e)}return{x:l.left+c.scrollLeft-d.x-h,y:l.top+c.scrollTop-d.y-p,width:l.width,height:l.height}}function xn(e){return"static"===rn(e).position}function _n(e,t){if(!Zo(e)||"fixed"===rn(e).position)return null;if(t)return t(e);let o=e.offsetParent;return Go(e)===o&&(o=o.ownerDocument.body),o}function kn(e,t){const o=Wo(e);if(en(e))return o;if(!Zo(e)){let t=an(e);for(;t&&!nn(t);){if(Yo(t)&&!xn(t))return t;t=an(t)}return o}let n=_n(e,t);for(;n&&Qo(n)&&xn(n);)n=_n(n,t);return n&&nn(n)&&xn(n)&&!tn(n)?o:n||function(e){let t=an(e);for(;Zo(t)&&!nn(t);){if(tn(t))return t;if(en(t))return null;t=an(t)}return null}(e)||o}const $n={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:n,strategy:r}=e;const a="fixed"===r,l=Go(n),c=!!t&&en(t.floating);if(n===l||c&&a)return o;let d={scrollLeft:0,scrollTop:0},h=xo(1);const p=xo(0),u=Zo(n);if((u||!u&&!a)&&(("body"!==qo(n)||Jo(l))&&(d=sn(n)),Zo(n))){const e=mn(n);h=un(n),p.x=e.x+n.clientLeft,p.y=e.y+n.clientTop}return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-d.scrollLeft*h.x+p.x,y:o.y*h.y-d.scrollTop*h.y+p.y}},getDocumentElement:Go,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:r}=e;const a=[..."clippingAncestors"===o?en(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let n=cn(e,[],!1).filter((e=>Yo(e)&&"body"!==qo(e))),r=null;const a="fixed"===rn(e).position;let l=a?an(e):e;for(;Yo(l)&&!nn(l);){const t=rn(l),o=tn(l);o||"fixed"!==t.position||(r=null),(a?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||Jo(l)&&!o&&yn(e,l))?n=n.filter((e=>e!==l)):r=t,l=an(l)}return t.set(e,n),n}(t,this._c):[].concat(o),n],l=a[0],c=a.reduce(((e,o)=>{const n=vn(t,o,r);return e.top=go(n.top,e.top),e.right=fo(n.right,e.right),e.bottom=fo(n.bottom,e.bottom),e.left=go(n.left,e.left),e}),vn(t,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:kn,getElementRects:async function(e){const t=this.getOffsetParent||kn,o=this.getDimensions,n=await o(e.floating);return{reference:wn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=hn(e);return{width:t,height:o}},getScale:un,isElement:Yo,isRTL:function(e){return"rtl"===rn(e).direction}};function Cn(e,t,o,n){void 0===n&&(n={});const{ancestorScroll:r=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:d=!1}=n,h=pn(e),p=r||a?[...h?cn(h):[],...cn(t)]:[];p.forEach((e=>{r&&e.addEventListener("scroll",o,{passive:!0}),a&&e.addEventListener("resize",o)}));const u=h&&c?function(e,t){let o,n=null;const r=Go(e);function a(){var e;clearTimeout(o),null==(e=n)||e.disconnect(),n=null}return function l(c,d){void 0===c&&(c=!1),void 0===d&&(d=1),a();const{left:h,top:p,width:u,height:f}=e.getBoundingClientRect();if(c||t(),!u||!f)return;const g={rootMargin:-wo(p)+"px "+-wo(r.clientWidth-(h+u))+"px "+-wo(r.clientHeight-(p+f))+"px "+-wo(h)+"px",threshold:go(0,fo(1,d))||1};let m=!0;function b(e){const t=e[0].intersectionRatio;if(t!==d){if(!m)return l();t?l(!1,t):o=setTimeout((()=>{l(!1,1e-7)}),1e3)}m=!1}try{n=new IntersectionObserver(b,{...g,root:r.ownerDocument})}catch(e){n=new IntersectionObserver(b,g)}n.observe(e)}(!0),a}(h,o):null;let f,g=-1,m=null;l&&(m=new ResizeObserver((e=>{let[n]=e;n&&n.target===h&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=m)||e.observe(t)}))),o()})),h&&!d&&m.observe(h),m.observe(t));let b=d?mn(e):null;return d&&function t(){const n=mn(e);!b||n.x===b.x&&n.y===b.y&&n.width===b.width&&n.height===b.height||o();b=n,f=requestAnimationFrame(t)}(),o(),()=>{var e;p.forEach((e=>{r&&e.removeEventListener("scroll",o),a&&e.removeEventListener("resize",o)})),null==u||u(),null==(e=m)||e.disconnect(),m=null,d&&cancelAnimationFrame(f)}}const An=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:r,y:a,placement:l,middlewareData:c}=t,d=await async function(e,t){const{placement:o,platform:n,elements:r}=e,a=await(null==n.isRTL?void 0:n.isRTL(r.floating)),l=So(o),c=Eo(o),d="y"===To(o),h=["left","top"].includes(l)?-1:1,p=a&&d?-1:1,u=Ao(t,e);let{mainAxis:f,crossAxis:g,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&"number"==typeof m&&(g="end"===c?-1*m:m),d?{x:g*p,y:f*h}:{x:f*h,y:g*p}}(t,e);return l===(null==(o=c.offset)?void 0:o.placement)&&null!=(n=c.arrow)&&n.alignmentOffset?{}:{x:r+d.x,y:a+d.y,data:{...d,placement:l}}}}},Sn=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:r}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...d}=Ao(e,t),h={x:o,y:n},p=await Fo(t,d),u=To(So(r)),f=Po(u);let g=h[f],m=h[u];if(a){const e="y"===f?"bottom":"right";g=Co(g+p["y"===f?"top":"left"],g,g-p[e])}if(l){const e="y"===u?"bottom":"right";m=Co(m+p["y"===u?"top":"left"],m,m-p[e])}const b=c.fn({...t,[f]:g,[u]:m});return{...b,data:{x:b.x-o,y:b.y-n,enabled:{[f]:a,[u]:l}}}}}},En=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:r,middlewareData:a,rects:l,initialPlacement:c,platform:d,elements:h}=t,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...v}=Ao(e,t);if(null!=(o=a.arrow)&&o.alignmentOffset)return{};const y=So(r),w=To(c),x=So(c)===c,_=await(null==d.isRTL?void 0:d.isRTL(h.floating)),k=f||(x||!b?[Uo(c)]:function(e){const t=Uo(e);return[Io(e),t,Io(t)]}(c)),C="none"!==m;!f&&C&&k.push(...function(e,t,o,n){const r=Eo(e);let a=function(e,t,o){const n=["left","right"],r=["right","left"],a=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:n:t?n:r;case"left":case"right":return t?a:l;default:return[]}}(So(e),"start"===o,n);return r&&(a=a.map((e=>e+"-"+r)),t&&(a=a.concat(a.map(Io)))),a}(c,b,m,_));const A=[c,...k],S=await Fo(t,v),E=[];let P=(null==(n=a.flip)?void 0:n.overflows)||[];if(p&&E.push(S[y]),u){const e=function(e,t,o){void 0===o&&(o=!1);const n=Eo(e),r=Lo(e),a=Oo(r);let l="x"===r?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=Uo(l)),[l,Uo(l)]}(r,l,_);E.push(S[e[0]],S[e[1]])}if(P=[...P,{placement:r,overflows:E}],!E.every((e=>e<=0))){var O,R;const e=((null==(O=a.flip)?void 0:O.index)||0)+1,t=A[e];if(t)return{data:{index:e,overflows:P},reset:{placement:t}};let o=null==(R=P.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:R.placement;if(!o)switch(g){case"bestFit":{var M;const e=null==(M=P.filter((e=>{if(C){const t=To(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:M[0];e&&(o=e);break}case"initialPlacement":o=c}if(r!==o)return{reset:{placement:o}}}return{}}}},Pn=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,n;const{placement:r,rects:a,platform:l,elements:c}=t,{apply:d=()=>{},...h}=Ao(e,t),p=await Fo(t,h),u=So(r),f=Eo(r),g="y"===To(r),{width:m,height:b}=a.floating;let v,y;"top"===u||"bottom"===u?(v=u,y=f===(await(null==l.isRTL?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(y=u,v="end"===f?"top":"bottom");const w=b-p.top-p.bottom,x=m-p.left-p.right,_=fo(b-p[v],w),k=fo(m-p[y],x),C=!t.middlewareData.shift;let A=_,S=k;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(S=x),null!=(n=t.middlewareData.shift)&&n.enabled.y&&(A=w),C&&!f){const e=go(p.left,0),t=go(p.right,0),o=go(p.top,0),n=go(p.bottom,0);g?S=m-2*(0!==e||0!==t?e+t:go(p.left,p.right)):A=b-2*(0!==o||0!==n?o+n:go(p.top,p.bottom))}await d({...t,availableWidth:S,availableHeight:A});const E=await l.getDimensions(c.floating);return m!==E.width||b!==E.height?{reset:{rects:!0}}:{}}}},On=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:r,rects:a,platform:l,elements:c,middlewareData:d}=t,{element:h,padding:p=0}=Ao(e,t)||{};if(null==h)return{};const u=zo(p),f={x:o,y:n},g=Lo(r),m=Oo(g),b=await l.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",x=v?"clientHeight":"clientWidth",_=a.reference[m]+a.reference[g]-f[g]-a.floating[m],k=f[g]-a.reference[g],C=await(null==l.getOffsetParent?void 0:l.getOffsetParent(h));let A=C?C[x]:0;A&&await(null==l.isElement?void 0:l.isElement(C))||(A=c.floating[x]||a.floating[m]);const S=_/2-k/2,E=A/2-b[m]/2-1,P=fo(u[y],E),O=fo(u[w],E),R=P,M=A-b[m]-O,T=A/2-b[m]/2+S,D=Co(R,T,M),L=!d.arrow&&null!=Eo(r)&&T!==D&&a.reference[m]/2-(T<R?P:O)-b[m]/2<0,I=L?T<R?T-R:T-M:0;return{[g]:f[g]+I,data:{[g]:D,centerOffset:T-D-I,...L&&{alignmentOffset:I}},reset:L}}}),Rn=(e,t,o)=>{const n=new Map,r={platform:$n,...o},a={...r.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:a=[],platform:l}=o,c=a.filter(Boolean),d=await(null==l.isRTL?void 0:l.isRTL(t));let h=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:p,y:u}=jo(h,n,d),f=n,g={},m=0;for(let o=0;o<c.length;o++){const{name:a,fn:b}=c[o],{x:v,y,data:w,reset:x}=await b({x:p,y:u,initialPlacement:n,placement:f,strategy:r,middlewareData:g,rects:h,platform:l,elements:{reference:e,floating:t}});p=null!=v?v:p,u=null!=y?y:u,g={...g,[a]:{...g[a],...w}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(f=x.placement),x.rects&&(h=!0===x.rects?await l.getElementRects({reference:e,floating:t,strategy:r}):x.rects),({x:p,y:u}=jo(h,f,d))),o=-1)}return{x:p,y:u,placement:f,strategy:r,middlewareData:g}})(e,t,{...r,platform:a})},Mn=Oi(class extends directive_i{constructor(e){if(super(e),e.type!==Ei||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return ai}});function Tn(e){return Ln(e)}function Dn(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ln(e){for(let t=e;t;t=Dn(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=Dn(e);t;t=Dn(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var In=class extends uo{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,n=0,r=0,a=0,l=0,c=0,d=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,n=e.bottom,r=e.right,a=e.bottom,l=t.left,c=t.top,d=t.right,h=t.top):(o=t.left,n=t.bottom,r=t.right,a=t.bottom,l=e.left,c=e.top,d=e.right,h=e.top):e.left<t.left?(o=e.right,n=e.top,r=t.left,a=t.top,l=e.right,c=e.bottom,d=t.left,h=t.bottom):(o=t.right,n=t.top,r=e.left,a=e.top,l=t.right,c=t.bottom,d=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=Cn(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[An({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Pn({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(En({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Sn({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Pn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(On({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>$n.getOffsetParent(e,Tn):$n.getOffsetParent;Rn(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ji(Xi({},$n),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:n})=>{const r=this.matches(":dir(rtl)"),a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let n="",l="",c="",d="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",l=r?o:"",d=r?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";l=r?"":o,d=r?o:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(d="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",n="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(d="number"==typeof e?`${e}px`:"",n="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:n,right:l,bottom:c,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return si`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Mn({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Mn({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?si`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function Bn(e,t){return new Promise((o=>{e.addEventListener(t,(function n(r){r.target===e&&(e.removeEventListener(t,n),o())}))}))}function Un(e,t,o){return new Promise((n=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,Ji(Xi({},o),{duration:Nn()?0:o.duration}));r.addEventListener("cancel",n,{once:!0}),r.addEventListener("finish",n,{once:!0})}))}function zn(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function Nn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function jn(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}In.styles=[ho,co],Qi([ki(".popup")],In.prototype,"popup",2),Qi([ki(".popup__arrow")],In.prototype,"arrowEl",2),Qi([wi()],In.prototype,"anchor",2),Qi([wi({type:Boolean,reflect:!0})],In.prototype,"active",2),Qi([wi({reflect:!0})],In.prototype,"placement",2),Qi([wi({reflect:!0})],In.prototype,"strategy",2),Qi([wi({type:Number})],In.prototype,"distance",2),Qi([wi({type:Number})],In.prototype,"skidding",2),Qi([wi({type:Boolean})],In.prototype,"arrow",2),Qi([wi({attribute:"arrow-placement"})],In.prototype,"arrowPlacement",2),Qi([wi({attribute:"arrow-padding",type:Number})],In.prototype,"arrowPadding",2),Qi([wi({type:Boolean})],In.prototype,"flip",2),Qi([wi({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],In.prototype,"flipFallbackPlacements",2),Qi([wi({attribute:"flip-fallback-strategy"})],In.prototype,"flipFallbackStrategy",2),Qi([wi({type:Object})],In.prototype,"flipBoundary",2),Qi([wi({attribute:"flip-padding",type:Number})],In.prototype,"flipPadding",2),Qi([wi({type:Boolean})],In.prototype,"shift",2),Qi([wi({type:Object})],In.prototype,"shiftBoundary",2),Qi([wi({attribute:"shift-padding",type:Number})],In.prototype,"shiftPadding",2),Qi([wi({attribute:"auto-size"})],In.prototype,"autoSize",2),Qi([wi()],In.prototype,"sync",2),Qi([wi({type:Object})],In.prototype,"autoSizeBoundary",2),Qi([wi({attribute:"auto-size-padding",type:Number})],In.prototype,"autoSizePadding",2),Qi([wi({attribute:"hover-bridge",type:Boolean})],In.prototype,"hoverBridge",2);const Hn=new Set,Fn=new Map;let Vn,qn="ltr",Wn="en";const Gn="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Gn){const e=new MutationObserver(Yn);qn=document.documentElement.dir||"ltr",Wn=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Kn(...e){e.map((e=>{const t=e.$code.toLowerCase();Fn.has(t)?Fn.set(t,Object.assign(Object.assign({},Fn.get(t)),e)):Fn.set(t,e),Vn||(Vn=e)})),Yn()}function Yn(){Gn&&(qn=document.documentElement.dir||"ltr",Wn=document.documentElement.lang||navigator.language),[...Hn.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Hn.add(this.host)}hostDisconnected(){Hn.delete(this.host)}dir(){return`${this.host.dir||qn}`.toLowerCase()}lang(){return`${this.host.lang||Wn}`.toLowerCase()}getTranslationData(e){var t,o;const n=new Intl.Locale(e.replace(/_/g,"-")),r=null==n?void 0:n.language.toLowerCase(),a=null!==(o=null===(t=null==n?void 0:n.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:n,language:r,region:a,primary:Fn.get(`${r}-${a}`),secondary:Fn.get(r)}}exists(e,t){var o;const{primary:n,secondary:r}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Vn&&Vn[e])}term(e,...t){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let r;if(o&&o[e])r=o[e];else if(n&&n[e])r=n[e];else{if(!Vn||!Vn[e])return String(e);r=Vn[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var Zn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Kn(Zn);var Xn=Zn,Jn=class extends LocalizeController{};function Qn(e,t){const o=Xi({waitUntilFirstUpdate:!1},t);return(t,n)=>{const{update:r}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),a=this[r];t!==a&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[n](t,a))}})),r.call(this,e)}}}Kn(Xn);var er=class extends uo{constructor(){super(),this.localize=new Jn(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=zn(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=zn(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await jn(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=so(this,"tooltip.show",{dir:this.localize.dir()});await Un(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await jn(this.body);const{keyframes:e,options:o}=so(this,"tooltip.hide",{dir:this.localize.dir()});await Un(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Bn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Bn(this,"sl-after-hide")}render(){return si`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Mn({tooltip:!0,"tooltip--open":this.open})}
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
    `}};er.styles=[ho,lo],er.dependencies={"sl-popup":In},Qi([ki("slot:not([name])")],er.prototype,"defaultSlot",2),Qi([ki(".tooltip__body")],er.prototype,"body",2),Qi([ki("sl-popup")],er.prototype,"popup",2),Qi([wi()],er.prototype,"content",2),Qi([wi()],er.prototype,"placement",2),Qi([wi({type:Boolean,reflect:!0})],er.prototype,"disabled",2),Qi([wi({type:Number})],er.prototype,"distance",2),Qi([wi({type:Boolean,reflect:!0})],er.prototype,"open",2),Qi([wi({type:Number})],er.prototype,"skidding",2),Qi([wi()],er.prototype,"trigger",2),Qi([wi({type:Boolean})],er.prototype,"hoist",2),Qi([Qn("open",{waitUntilFirstUpdate:!0})],er.prototype,"handleOpenChange",1),Qi([Qn(["content","distance","hoist","placement","skidding"])],er.prototype,"handleOptionsChange",1),Qi([Qn("disabled")],er.prototype,"handleDisabledChange",1),ro("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),ro("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});er.define("sl-tooltip");var tr=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,or=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?ir(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&tr(t,o,a),a};ro("tooltip.show",null),ro("tooltip.hide",null);let nr=class extends lit_element_r{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return si`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??li}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};nr.styles=kt`
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
	`,or([wi()],nr.prototype,"content",2),or([wi({reflect:!0})],nr.prototype,"placement",2),or([wi({type:Boolean})],nr.prototype,"disabled",2),or([wi({type:Number})],nr.prototype,"distance",2),or([wi({type:Boolean})],nr.prototype,"hoist",2),nr=or([bi("gl-tooltip")],nr);var rr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,ar=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?sr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&rr(t,o,a),a};const lr=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let cr=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};cr.styles=kt`
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

		${_t(Object.entries(lr).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

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
	`,ar([wi({reflect:!0})],cr.prototype,"icon",2),ar([wi({reflect:!0})],cr.prototype,"modifier",2),ar([wi({type:Number})],cr.prototype,"size",2),ar([wi({reflect:!0})],cr.prototype,"flip",2),ar([wi({reflect:!0})],cr.prototype,"rotate",2),cr=ar([bi("code-icon")],cr);var dr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,pr=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?hr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&dr(t,o,a),a};let ur=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.disabled=!1}render(){return si`
			<gl-tooltip hoist content="${this.label??li}">
				<a
					role="${this.href?li:"button"}"
					type="${this.href?li:"button"}"
					aria-label="${this.label??li}"
					?disabled=${this.disabled}
					href=${this.href??li}
				>
					<code-icon icon="${this.icon}"></code-icon>
				</a>
			</gl-tooltip>
		`}};ur.styles=kt`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
		}
	`,pr([wi()],ur.prototype,"href",2),pr([wi()],ur.prototype,"label",2),pr([wi()],ur.prototype,"icon",2),pr([wi({type:Boolean})],ur.prototype,"disabled",2),ur=pr([bi("action-item")],ur);var fr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,mr=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?gr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&fr(t,o,a),a};const br={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let vr=class extends lit_element_r{get statusName(){return this.status?br[this.status]:""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return si`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return si`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return si`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return si`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return si`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return si`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return si`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return si`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return si`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};vr.styles=[kt`
			:host-context(.vscode-high-contrast),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],mr([wi()],vr.prototype,"status",2),mr([xi()],vr.prototype,"statusName",1),vr=mr([bi("gl-git-status")],vr);kt`
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
`;const yr=kt`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,wr=kt`
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
`,xr=(kt`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${kt`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`}
	}
	a:hover {
		text-decoration: underline;
	}
`,kt`
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
`),_r=[wr,kt``],kr=[wr,kt`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			/* padding-right: var(--gitlens-scrollbar-gutter-width); */
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--gitlens-tree-foreground, var(--vscode-foreground));

			content-visibility: auto;
			contain-intrinsic-size: auto 2.2rem;
			cursor: pointer;
		}

		:host(:hover),
		:host(:focus-within) {
			content-visibility: visible;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}

		/* FIXME: remove, this is for debugging
		.item:focus {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}
 		*/
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			display: inline-block;
			margin-right: 0.6rem;
			height: 2.2rem;
			line-height: 2.2rem;
			vertical-align: text-bottom;
		}

		.text {
			line-height: 1.6rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
			pointer-events: none;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			// overflow: hidden;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}
	`];var $r=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Ar=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Cr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&$r(t,o,a),a};let Sr=class extends lit_element_r{disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return si`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;const e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),o=this.handleSelected.bind(this),n=this.treeItems.map((n=>(n.addEventListener("keydown",e,!1),n.addEventListener("gl-tree-item-select",t,!1),n.addEventListener("gl-tree-item-selected",o,!1),{dispose:function(){n?.removeEventListener("keydown",e,!1),n?.removeEventListener("gl-tree-item-select",t,!1),n?.removeEventListener("gl-tree-item-selected",o,!1)}})));this._slotSubscriptionsDisposer=()=>{n?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target)return;const t=e.target;if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;function t(e){const t=e.level;let o=e.previousElementSibling;for(;o;){if(o.level<t)return o;o=o.previousElementSibling}}const o=e.target,n=o.level;let r=o.nextElementSibling;for(;r&&n!==r.level;){const o=t(r);r.parentExpanded=!1!==o?.expanded,r.expanded=e.detail.node.expanded,r=r.nextElementSibling}}};Sr.styles=_r,Ar([wi({reflect:!0})],Sr.prototype,"guides",2),Ar([$i({flatten:!0})],Sr.prototype,"treeItems",2),Sr=Ar([bi("gl-tree")],Sr);var Er=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,Or=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Pr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Er(t,o,a),a};let Rr=class extends lit_element_r{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return si`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;const t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,n=this.actionNodes.map(((e,n)=>(e.setAttribute("aria-posinset",`${n+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===n?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}})));this._slotSubscriptionsDisposer=()=>{n?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10);let n=null;if("ArrowLeft"===e.key){const e=1===o?this.actionNodes.length-1:o-2;n=this.actionNodes[e]}else if("ArrowRight"===e.key){const e=o===this.actionNodes.length?0:o;n=this.actionNodes[e]}null!=n&&n!==t&&(t.setAttribute("tabindex","-1"),n.setAttribute("tabindex","0"),n.focus())}};Rr.styles=kt`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,Or([$i({flatten:!0})],Rr.prototype,"actionNodes",2),Rr=Or([bi("action-nav")],Rr);var Mr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Dr=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Tr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Mr(t,o,a),a};let Lr=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClickBound=this.onComponentClick.bind(this)}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onComponentClickBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onComponentClickBound)}onComponentClick(e){this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){const e=this.level-1;if(e<1&&!this.branch)return li;const t=[];if(e>0)for(let o=0;o<e;o++)t.push(si`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(si`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?si`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:li}renderActions(){return si`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return si`<slot name="decorations" class="decorations"></slot>`}render(){return si`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${Ci(this.showIcon,(()=>si`<slot name="icon" class="icon"></slot>`))}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame((()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})}))}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.emit("gl-tree-item-checked",{node:this,checked:this.checked})}};Lr.styles=kr,Dr([wi({type:Boolean})],Lr.prototype,"branch",2),Dr([wi({type:Boolean})],Lr.prototype,"expanded",2),Dr([wi({type:String})],Lr.prototype,"path",2),Dr([wi({type:String,attribute:"parent-path"})],Lr.prototype,"parentPath",2),Dr([wi({type:Boolean,attribute:"parent-expanded"})],Lr.prototype,"parentExpanded",2),Dr([wi({type:Number})],Lr.prototype,"level",2),Dr([wi({type:Number})],Lr.prototype,"size",2),Dr([wi({type:Number})],Lr.prototype,"position",2),Dr([wi({type:Boolean})],Lr.prototype,"checkable",2),Dr([wi({type:Boolean})],Lr.prototype,"checked",2),Dr([wi({type:Boolean})],Lr.prototype,"disableCheck",2),Dr([wi({type:Boolean})],Lr.prototype,"showIcon",2),Dr([xi()],Lr.prototype,"selected",2),Dr([xi()],Lr.prototype,"focused",2),Dr([ki("#button")],Lr.prototype,"buttonEl",2),Lr=Dr([bi("gl-tree-item")],Lr);var Ir=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Ur=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Br(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Ir(t,o,a),a};let zr=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0}set model(e){if(this._model===e)return;let t;if(this._model=e,null!=this._model){const e=this._model.length;t=this._model.reduce(((t,o,n)=>(t.push(...Nr(o,e,n+1)),t)),[])}this.treeItems=t}get model(){return this._model}renderIcon(e){return null==e?li:"string"==typeof e?si`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?li:si`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){const t=e.actions;return null==t||0===t.length?li:t.map((t=>si`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${o=>this.onTreeItemActionClicked(o,e,t)}
				@dblclick=${o=>this.onTreeItemActionDblClicked(o,e,t)}
			></action-item>`))}renderDecorations(e){const t=e.decorations;return null==t||0===t.length?li:t.map((e=>"icon"===e.type?si`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?si`<span slot="decorations">${e.label}</span>`:void 0))}renderTreeItem(e){return si`<gl-tree-item
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${Ci(null!=e.description,(()=>si`<span slot="description">${e.description}</span>`))}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map((e=>this.renderTreeItem(e)))}render(){return si`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,o){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onTreeItemActionDblClicked(e,t,o){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:o,dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};function Nr(e,t=1,o=1){const n={size:t,position:o};for(const[t,o]of Object.entries(e))null!=o&&"children"!==t&&(n[t]=o);const r=[n];if(null!=e.children&&e.children.length>0){const t=e.children.length;for(let o=0;o<t;o++)r.push(...Nr(e.children[o],t,o+1))}return r}zr.styles=kt`
		:host {
			display: contents;
		}
	`,Ur([xi()],zr.prototype,"treeItems",2),Ur([wi({reflect:!0})],zr.prototype,"guides",2),Ur([wi({type:Array,attribute:!1})],zr.prototype,"model",1),zr=Ur([bi("gl-tree-generator")],zr);var jr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Fr=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Hr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&jr(t,o,a),a};let Vr=class extends lit_element_r{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return si`<div class="skeleton" style=${e}></div>`}};Vr.styles=kt`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,Fr([wi({type:Number})],Vr.prototype,"lines",2),Vr=Fr([bi("skeleton-loader")],Vr);class GlTreeBase extends GlElement{renderLoading(){return si`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return li;let t="tree",o="list-tree",n="View as Tree";switch(e){case"auto":t="list",o="gl-list-auto",n="View as List";break;case"list":t="tree",o="list-flat",n="View as Tree";break;case"tree":t="auto",o="list-tree",n="View as Auto"}return si`<action-item data-switch-value="${t}" label="${n}" icon="${o}"></action-item>`}renderTreeView(e,t="none"){return si`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,o=!1,n=2){const r=[];if(t){const t=Ni(e,(e=>e.path.split("/")),((...e)=>e.join("/")),o);if(null!=t.children)for(const e of t.children.values()){const t=this.walkFileTree(e,{level:n});r.push(t)}}else for(const t of e){const e=this.fileToTreeModel(t,{level:n,branch:!1},!0);r.push(e)}return r}walkFileTree(e,t={level:1}){let o;if(void 0===t.level&&(t.level=1),o=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){const n=[];for(const o of e.children.values()){const e=this.walkFileTree(o,{...t,level:t.level+1});n.push(e)}n.length>0&&(o.branch=!0,o.children=n)}return o}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}getRepoActions(e,t,o){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,o,n){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"repo",label:e,description:n,context:[t],actions:this.getRepoActions(e,t,o),...o}}getFileActions(e,t){return[]}fileToTreeModel(e,t,o=!1,n="/"){const r=e.path.lastIndexOf(n),a=-1!==r?e.path.substring(r+1):e.path,l=o&&-1!==r?e.path.substring(0,r):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:a,description:!0===o?l:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}}const qr=kt`
	.badge {
		display: inline-flex;
		font-size: var(--gl-badge-font-size, x-small);
		font-variant: all-small-caps;
		font-weight: 600;
		color: var(--gl-badge-color, var(--color-foreground--50));
		border: currentColor 1px solid;
		border-radius: 1rem;
		padding: 0 0.8rem 0.1rem;
		white-space: nowrap;
	}
`;var Wr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor;let Kr=class extends lit_element_r{render(){return si`<slot class="badge" part="base"></slot>`}};Kr.styles=[qr],Kr=((e,t,o,n)=>{for(var r,a=n>1?void 0:n?Gr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Wr(t,o,a),a})([bi("gl-badge")],Kr);var Yr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Xr=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Zr(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Yr(t,o,a),a};let Jr=class extends lit_element_r{constructor(){super(...arguments),this.editor=!1}render(){return si`<div class="group"><slot></slot></div>`}};Jr.styles=[wr,kt`
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
		`],Xr([wi({type:Boolean})],Jr.prototype,"editor",2),Jr=Xr([bi("button-container")],Jr);var Qr=Object.defineProperty,es=Object.getOwnPropertyDescriptor,ts=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?es(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Qr(t,o,a),a};let is=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?si`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?si`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?si`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:si`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};is.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},is.styles=[wr,kt`
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
				${yr}
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
		`],ts([ki(".control")],is.prototype,"control",2),ts([wi({reflect:!0})],is.prototype,"appearance",2),ts([wi({type:Boolean,reflect:!0})],is.prototype,"disabled",2),ts([wi({reflect:!0})],is.prototype,"density",2),ts([wi({type:Boolean,reflect:!0})],is.prototype,"full",2),ts([wi()],is.prototype,"href",2),ts([wi({reflect:!0})],is.prototype,"role",1),ts([wi()],is.prototype,"tooltip",2),is=ts([bi("gl-button")],is);const os=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))}),ns=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,rs=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,ss=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let as;const ls=new Map;let cs,ds,hs;function ps(e,t,o,n=!0){const r=`${o??""}:${t=t??void 0}`;let a=ls.get(r);if(null==a){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=rs.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(ns))if(null!=t)for(const[e,n]of Object.entries(t))if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}return o}(t);let l;l=null==o?cs:"system"===o?void 0:[o],a=new Intl.DateTimeFormat(l,e),n&&ls.set(r,a)}if(null==t||rs.test(t))return a.format(e);function l(e){const t=`${o??""}:time:${e}`;let r=ls.get(t);if(null==r){const a={localeMatcher:"best fit",timeStyle:e};let l;l=null==o?cs:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(l,a),n&&ls.set(t,r)}return r}const c=a.formatToParts(e);return t.replace(ns,((t,o,n,r,a,d,h,p,u,f,g,m,b,v,y)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(y)){if(null==o)continue;const n=c.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return fs(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=l("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}const us=["th","st","nd","rd"];function fs(e){const t=e%100;return`${e}${us[(t-20)%10]??us[t]??us[0]}`}var gs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,bs=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?ms(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&gs(t,o,a),a};let vs=class extends lit_element_r{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date}render(){const e=ps(this.date,this.format??"MMMM Do, YYYY h:mma");return si`<gl-tooltip content="${e}"
			><time datetime="${this.date.toISOString()}"
				>${"relative"===this.dateStyle?function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,r,a]of ss){const l=Math.abs(o);if(l>=n||1e3===n)return t?(null==as&&(null!=hs?as=hs.resolvedOptions().locale:null!=ds?as=ds.resolvedOptions().locale:(hs=new Intl.RelativeTimeFormat(cs,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),as=hs.resolvedOptions().locale)),"en"===as||as?.startsWith("en-")?`${Math.round(l/r)}${a}`:(null==hs&&(hs=new Intl.RelativeTimeFormat(cs,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),hs.format(Math.round(o/r),e))):(null==ds&&(ds=new Intl.RelativeTimeFormat(cs,{localeMatcher:"best fit",numeric:"auto",style:"long"})),ds.format(Math.round(o/r),e))}return""}(this.date):e}</time
			></gl-tooltip
		>`}};bs([wi()],vs.prototype,"format",2),bs([wi({attribute:"date-style"})],vs.prototype,"dateStyle",2),bs([wi({converter:os(),reflect:!0})],vs.prototype,"date",2),vs=bs([bi("formatted-date")],vs);var ys=Object.defineProperty,ws=Object.getOwnPropertyDescriptor,xs=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?ws(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&ys(t,o,a),a};let _s=class extends lit_element_r{constructor(){super(...arguments),this.name="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.dateStyle="relative",this.committer=!1}renderAvatar(){return this.showAvatar&&this.avatarUrl?.length?si`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:si`<code-icon icon="person" size="18"></code-icon>`}render(){return si`
			<gl-tooltip>
				${Ci(null!=this.url,(()=>si`<a class="author" href="${this.url}"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></a
						>`),(()=>si`<span class="author"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></span
						>`))}
				<div class="author-hover" slot="content">
					${this.avatarUrl?.length?si`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:li}
					<span>${this.name}</span>
				</div>
			</gl-tooltip>
			<span class="date">
				${this.actionLabel}
				<formatted-date
					.date=${this.date}
					.format=${this.dateFormat}
					.dateStyle=${this.dateStyle}
				></formatted-date>
			</span>
		`}};_s.styles=kt`
		:host,
		.author {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0 0.6rem;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.author-hover {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.6rem;
			margin: 0.6rem 0.2rem 0.2rem 0.2rem;
		}

		.author-hover img {
			max-width: 64px;
		}

		.avatar {
			width: 1.8rem;
		}

		.thumb {
			width: 100%;
			height: auto;
			vertical-align: middle;
			border-radius: 0.4rem;
		}

		.name {
			flex: 1;
			font-size: 1.3rem;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.date {
			flex: none;
			margin-inline-start: auto;
			font-size: 1.3rem;
			color: var(--color-foreground--50);
		}
	`,xs([wi()],_s.prototype,"name",2),xs([wi()],_s.prototype,"url",2),xs([wi({converter:os(),reflect:!0})],_s.prototype,"date",2),xs([wi()],_s.prototype,"avatarUrl",2),xs([wi({type:Boolean,attribute:"show-avatar",reflect:!0})],_s.prototype,"showAvatar",2),xs([wi()],_s.prototype,"dateFormat",2),xs([wi()],_s.prototype,"dateStyle",2),xs([wi({type:Boolean})],_s.prototype,"committer",2),xs([wi()],_s.prototype,"actionLabel",2),_s=xs([bi("commit-identity")],_s);var ks=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,Cs=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?$s(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&ks(t,o,a),a};let As=class extends lit_element_r{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return si`<div class="progress-bar"></div>`}};As.styles=kt`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,Cs([wi({reflect:!0})],As.prototype,"mode",2),Cs([wi({type:Boolean})],As.prototype,"active",2),Cs([wi()],As.prototype,"position",2),As=Cs([bi("progress-indicator")],As);var Ss=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,Ps=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Es(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Ss(t,o,a),a};let Os=class extends lit_element_r{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?si`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:si`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return si`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};Os.styles=[xr,kt`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
				min-height: 23px;
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],Ps([wi({type:Boolean,reflect:!0})],Os.prototype,"collapsable",2),Ps([wi({type:Boolean,reflect:!0})],Os.prototype,"expanded",2),Ps([wi({type:Boolean,reflect:!0})],Os.prototype,"loading",2),Os=Ps([bi("webview-pane")],Os);var Rs=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,Ts=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Ms(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Rs(t,o,a),a};let Ds=class extends GlTreeBase{constructor(){super(),this.explainBusy=!1,this.selectedPatches=[],this._copiedLink=!1,bt(dt,pt,mt,ut,ft)}get cloudDraft(){if("cloud"===this.state.draft?.draftType)return this.state.draft}get isCodeSuggestion(){return"suggested_pr_change"===this.cloudDraft?.type}get canSubmit(){return this.selectedPatches.length>0}updated(e){if(e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="ai-explanation"]')?.scrollIntoView()),e.has("state")){const e=this.state?.draft?.patches;if(e?.length){this.selectedPatches=e.map((e=>e.id));for(const t of e){const e=this.selectedPatches.indexOf(t.id);t.repository.located?-1===e&&this.selectedPatches.push(t.id):e>-1&&this.selectedPatches.splice(e,1)}}else this.selectedPatches=[]}}renderEmptyContent(){return si`
			<div class="section section--empty" id="empty">
				<button-container>
					<gl-button full href="command:gitlens.openPatch">Open Patch...</gl-button>
				</button-container>
			</div>
		`}renderPatchMessage(){if(null==this.state?.draft?.title)return;let e=this.cloudDraft?.description;return null!=e?(e=e.trim(),si`
			<div class="message-block">
				<p class="message-block__text scrollable" data-region="message">
					<span>${zi(e)}</span>
				</p>
			</div>
		`):void 0}renderExplainAi(){if(!1!==this.state?.orgSettings.ai)return si`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this patch.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<gl-button
								full
								class="button--busy"
								data-action="ai-explain"
								aria-busy="${(e=>e??li)(this.explainBusy?"true":void 0)}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
								><code-icon icon="loading" modifier="spin" slot="prefix"></code-icon>Explain
								Changes</gl-button
							>
						</span>
					</p>
					${Ci(this.explain,(()=>si`
							<div
								class="ai-content${this.explain?.error?" has-error":""}"
								data-region="ai-explanation"
							>
								${Ci(this.explain?.error,(()=>si`<p class="ai-content__summary scrollable">
											${this.explain.error.message??"Error retrieving content"}
										</p>`))}
								${Ci(this.explain?.summary,(()=>si`<p class="ai-content__summary scrollable">${this.explain.summary}</p>`))}
							</div>
						`))}
				</div>
			</webview-pane>
		`}renderChangedFiles(){const e=this.state?.preferences?.files?.layout??"auto";return si`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<!-- <span slot="subtitle" data-region="stats">\${this.renderCommitStats()}</span> -->
				<action-nav slot="actions">${this.renderLayoutAction(e)}</action-nav>

				${Ci(null!=this.validityMessage,(()=>si`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`))}
				<div class="change-list" data-region="files">
					${Ci(null==this.state?.draft?.patches,(()=>this.renderLoading()),(()=>this.renderTreeView(this.treeModel,this.state?.preferences?.indentGuides)))}
				</div>
			</webview-pane>
		`}get treeModel(){if(null==this.state?.draft?.patches)return[];const{draft:{patches:e}}=this.state,t=this.state?.preferences?.files?.layout??"auto";let o=!1;const n=Hi(e,(e=>e?.files?.length??0));o="auto"===t?n>(this.state.preferences?.files?.threshold??5):"tree"===t;const r=e?.map((e=>this.draftPatchToTreeModel(e,o,this.state.preferences?.files?.compact,{checkable:!0,checked:this.selectedPatches.includes(e.id)})));return r}renderUserSelection(e,t){if("delete"===e.change)return;const o=e.pendingRole??e.user.role,n=new Map([["owner","owner"],["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),r=n.get(o);return si`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member?.name??e.member?.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					${Ci("owner"!==o&&("owner"===t||"admin"===t),(()=>si`
							<gk-popover>
								<gk-button slot="trigger"
									>${r} <code-icon icon="chevron-down"></code-icon
								></gk-button>
								<gk-menu>
									${Si(n,(([t,n])=>"owner"===t?void 0:si`<gk-menu-item
													@click=${o=>this.onChangeSelectionRole(o,e,t)}
											  >
													<code-icon
														icon="check"
														class="user-selection__check ${o===t?"is-active":""}"
													></code-icon>
													${n}
											  </gk-menu-item>`))}
								</gk-menu>
							</gk-popover>
						`),(()=>si`${r}`))}
				</div>
			</div>
		`}renderUserSelectionList(e,t=!1){if(!e.userSelections?.length)return;let o=e.userSelections;return!1===t&&(o=o.filter((e=>"owner"!==e.user?.role))),si`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${Ui(o,(e=>e.member?.id??e.user?.id),(t=>this.renderUserSelection(t,e.role)))}
				</div>
			</div>
		`}renderPatchPermissions(){const e=this.cloudDraft;if(null!=e){if("admin"===e.role||"owner"===e.role){const t=e.userSelections?.some((e=>void 0!==e.change));let o;switch(e.visibility){case"private":o="organization";break;case"invite_only":o="lock";break;default:o="globe"}return si`
				${Ci(!0!==this.isCodeSuggestion,(()=>si` <div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${o}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===e.visibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===e.visibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===e.visibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>`))}
				${this.renderUserSelectionList(e)}
				${Ci(t,(()=>si`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${this.onUpdatePatch}
									>Update Patch</gl-button
								>
							</span>
						</p>
					`))}
			`}return si`
			${Ci(!0!==this.isCodeSuggestion,(()=>si` <div class="message-input">
						<div class="message-input__control message-input__control--text">
							${Ci("public"===e.visibility,(()=>si`<code-icon icon="globe"></code-icon> Anyone with the link`))}
							${Ci("private"===e.visibility,(()=>si`<code-icon icon="organization"></code-icon> Members of my Org with the link`))}
							${Ci("invite_only"===e.visibility,(()=>si`<code-icon icon="lock"></code-icon> Collaborators only`))}
						</div>
					</div>`))}
			${this.renderUserSelectionList(e,!0)}
		`}}renderCodeSuggectionActions(){if(this.isCodeSuggestion&&null!=this.cloudDraft&&!this.cloudDraft.isArchived&&"viewer"!==this.cloudDraft.role)return si`
			<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("accepted")}
						>Accept</gl-button
					>
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("rejected")}
						>Reject</gl-button
					>
				</span>
			</p>
		`}renderPatches(){return si`
			<div class="section section--action">
				${this.renderPatchPermissions()}
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full @click=${this.onApplyPatch}>Apply Patch</gl-button>
						<gk-popover placement="top">
							<gl-button
								slot="trigger"
								density="compact"
								aria-label="Apply Patch Options..."
								title="Apply Patch Options..."
								><code-icon icon="chevron-down"></code-icon
							></gl-button>
							<gk-menu class="mine-menu" @select=${this.onSelectApplyOption}>
								<gk-menu-item data-value="branch">Apply to a Branch</gk-menu-item>
								<!-- <gk-menu-item data-value="worktree">Apply to new worktree</gk-menu-item> -->
							</gk-menu>
						</gk-popover>
					</span>
				</p>
				${this.renderCodeSuggectionActions()}
			</div>
		`}renderActionbar(){const e=this.state?.draft;if(null!=e)return"local"===e.draftType?si`
				<div class="top-details__actionbar">
					<div class="top-details__actionbar-group"></div>
					<div class="top-details__actionbar-group">
						<a
							class="commit-action"
							href="#"
							aria-label="Share Patch"
							title="Share Patch"
							@click=${this.onShareLocalPatch}
							>Share</a
						>
					</div>
				</div>
			`:si`
			<div class="top-details__actionbar">
				<div class="top-details__actionbar-group"></div>
				<div class="top-details__actionbar-group">
					<a class="commit-action" href="#" @click=${this.onCopyCloudLink}>
						<code-icon icon="${this._copiedLink?"check":"link"}"></code-icon>
						<span class="top-details__sha">Copy Link</span></a
					>
					${Ci(null!=this.cloudDraft?.gkDevLink,(()=>si`
							<a class="commit-action" href=${this.cloudDraft.gkDevLink} title="Open on gitkraken.dev">
								<code-icon icon="globe"></code-icon>
							</a>
						`))}
				</div>
			</div>
		`}renderDraftInfo(){if(null==this.state.draft?.title)return li;let e;if(this.cloudDraft?.isArchived){const t=this.cloudDraft.archivedReason??"archived";e=si`<gl-badge class="title__badge">${t}</gl-badge>`}return si`
			<h1 class="title">${this.state.draft?.title} ${e}</h1>
			${this.renderPatchMessage()}
		`}render(){return null==this.state?.draft?si` <div class="commit-detail-panel scrollable">${this.renderEmptyContent()}</div>`:si`
			<div class="pane-groups">
				<div class="pane-groups__group-fixed">
					<div class="section">${this.renderActionbar()}${this.renderDraftInfo()}</div>
				</div>
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">
					${this.renderExplainAi()}${this.renderPatches()}
				</div>
			</div>
		`}createRenderRoot(){return this}onInviteUsers(e){this.emit("gl-patch-details-invite-users")}onChangeSelectionRole(e,t,o){this.emit("gl-patch-details-update-selection",{selection:t,role:o});const n=e.target?.closest("gk-popover");n?.hidePopover()}onVisibilityChange(e){const t=this.state.draft;t.visibility=e.target.value,this.emit("gl-patch-details-update-metadata",{visibility:t.visibility})}onUpdatePatch(e){this.emit("gl-patch-details-update-permissions")}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key)return e.preventDefault(),void e.stopPropagation();this.explainBusy=!0}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"apply-patch":this.onApplyPatch();break;case"change-patch-base":this.onChangePatchBase();break;case"show-patch-in-graph":this.onShowInGraph();break;case"file-open":this.onOpenFile(e);break;case"file-compare-working":this.onCompareWorking(e)}}fireFileEvent(e,t,o){const n=new CustomEvent(e,{detail:{...t,showOptions:o}});this.dispatchEvent(n)}onCompareWorking(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-compare-working",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onTreeItemChecked(e){if(!e.detail.context)return;const[t]=e.detail.context,o=this.state.draft?.patches?.find((e=>e.gkRepositoryId===t));if(!o)return;const n=this.selectedPatches.indexOf(o?.id);e.detail.checked?-1===n&&(this.selectedPatches.push(o.id),this.validityMessage=void 0):n>-1&&this.selectedPatches.splice(n,1);const r=new CustomEvent("gl-patch-checked",{detail:{patch:o,checked:e.detail.checked}});this.dispatchEvent(r)}onTreeItemSelected(e){const{node:t,context:o}=e.detail;if(!0===t.branch||null==o)return;const[n]=o;this.emit("gl-patch-file-compare-previous",{...n})}onApplyPatch(e,t="current"){!1!==this.canSubmit?(this.validityMessage=void 0,this.emit("gl-patch-apply-patch",{draft:this.state.draft,target:t,selectedPatches:this.selectedPatches})):this.validityMessage="Please select changes to apply"}onArchiveDraft(e){this.emit("gl-draft-archive",{reason:e})}onSelectApplyOption(e){if(!1===this.canSubmit)return void(this.validityMessage="Please select changes to apply");const t=e.detail?.target;null!=t?.dataset?.value&&this.onApplyPatch(void 0,t.dataset.value)}onChangePatchBase(e){const t=new CustomEvent("change-patch-base",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onSelectPatchRepo(e){const t=new CustomEvent("select-patch-repo",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onShowInGraph(e){this.emit("gl-patch-details-graph-show-patch",{draft:this.state.draft})}onCopyCloudLink(){this.emit("gl-patch-details-copy-cloud-link",{draft:this.state.draft}),this._copiedLink=!0,setTimeout((()=>this._copiedLink=!1),1e3)}onShareLocalPatch(){this.emit("gl-patch-details-share-local-patch",{draft:this.state.draft})}draftPatchToTreeModel(e,t=!1,o=!0,n){const r=this.repoToTreeModel(e.repository.name,e.gkRepositoryId,n,e.repository.located?void 0:"missing");if(!e.files?.length)return r;const a=[];if(t){const t=Ni(e.files,(e=>e.path.split("/")),((...e)=>e.join("/")),o);if(null!=t.children)for(const e of t.children.values()){const t=this.walkFileTree(e,{level:2});a.push(t)}}else for(const t of e.files){const e=this.fileToTreeModel(t,{level:2,branch:!1},!0);a.push(e)}return a.length>0&&(r.branch=!0,r.children=a),r}getFileActions(e,t){return[{icon:"go-to-file",label:"Open file",action:"file-open"},{icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}]}};Ts([wi({type:Object})],Ds.prototype,"state",2),Ts([xi()],Ds.prototype,"explainBusy",2),Ts([wi({type:Object})],Ds.prototype,"explain",2),Ts([xi()],Ds.prototype,"selectedPatches",2),Ts([xi()],Ds.prototype,"validityMessage",2),Ts([xi()],Ds.prototype,"_copiedLink",2),Ds=Ts([bi("gl-draft-details")],Ds);var Ls=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,Bs=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Is(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Ls(t,o,a),a};let Us=class extends lit_element_r{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return si`
			${Ci(null!=this.added,(()=>si`<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
						><span class="label">+${this.added}</span></span
					>`))}
			${Ci(null!=this.modified,(()=>si`<span
						class="stat modified"
						title="${this.modified} modified"
						aria-label="${this.modified} modified"
						><span class="label">~${this.modified}</span></span
					>`))}
			${Ci(null!=this.removed,(()=>si`<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
						><span class="label">-${this.removed}</span></span
					>`))}
		`}};Us.styles=kt`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.stat code-icon {
			margin-right: 0.25rem;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.deleted {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
		}
	`,Bs([wi({type:Number})],Us.prototype,"added",2),Bs([wi({type:Number})],Us.prototype,"modified",2),Bs([wi({type:Number})],Us.prototype,"removed",2),Us=Bs([bi("commit-stats")],Us);var zs=Object.defineProperty,Ns=Object.getOwnPropertyDescriptor,js=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Ns(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&zs(t,o,a),a};let Hs=class extends GlTreeBase{constructor(){super(),this.review=!1,this.generateBusy=!1,this.creationBusy=!1,this.onDebounceTitleInput=H(this.onTitleInput,500),this.onDebounceDescriptionInput=H(this.onDescriptionInput,500),bt(dt,pt,ut,ft,mt)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some((e=>"wip"===e?.type))}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter((([,e])=>!1!==e.checked))}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return Hi(this.createChanges,(e=>e.files?.length??0))}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(e){e.has("state")&&(this.creationBusy=!1),e.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame((()=>{this.titleInput.focus()}))}renderUserSelection(e){const t=e.pendingRole,o=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),n=o.get(t);return si`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member.name??e.member.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					<gk-popover>
						<gk-button slot="trigger">${n} <code-icon icon="chevron-down"></code-icon></gk-button>
						<gk-menu>
							${Si(o,(([o,n])=>si`<gk-menu-item
										@click=${t=>this.onChangeSelectionRole(t,e,o)}
									>
										<code-icon
											icon="check"
											class="user-selection__check ${t===o?"is-active":""}"
										></code-icon>
										${n}
									</gk-menu-item>`))}
						</gk-menu>
					</gk-popover>
				</div>
			</div>
		`}renderUserSelectionList(){if(null!=this.state?.create?.userSelections&&0!==this.state?.create?.userSelections.length)return si`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${Ui(this.state.create.userSelections,(e=>e.member.id),(e=>this.renderUserSelection(e)))}
				</div>
			</div>
		`}renderForm(){let e;switch(this.draftVisibility){case"private":e="organization";break;case"invite_only":e="lock";break;default:e="globe"}const t=this.review?"Code Suggestion":"Cloud Patch",o=this.review?"Code Suggestions":"Cloud Patches";return si`
			<div class="section section--action">
				${Ci(null!=this.state?.create?.creationError,(()=>si` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`))}
				${Ci(!1===this.review,(()=>si`
						<div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${e}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===this.draftVisibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===this.draftVisibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===this.draftVisibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>
						${this.renderUserSelectionList()}
					`))}
				<div class="message-input message-input--with-menu">
					<input
						id="title"
						type="text"
						class="message-input__control"
						placeholder="Title (required)"
						maxlength="100"
						.value=${this.create.title??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceTitleInput(e)}
					/>
					${Ci(!0===this.state?.orgSettings.ai,(()=>si`<div class="message-input__menu">
								<gl-button
									id="generate-ai"
									appearance="toolbar"
									density="compact"
									tooltip="Generate Title and Description..."
									@click=${e=>this.onGenerateTitleClick(e)}
									?disabled=${this.generateBusy}
									><code-icon
										icon=${this.generateBusy?"loading":"sparkle"}
										modifier="${this.generateBusy?"spin":""}"
									></code-icon
								></gl-button>
							</div>`))}
				</div>

				${Ci(null!=this.generate?.error,(()=>si`
						<div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.generate.error.message??"Error retrieving content"}</p>
						</div>
					`))}
				<div class="message-input">
					<textarea
						id="desc"
						class="message-input__control"
						placeholder="Description (optional)"
						maxlength="10000"
						.value=${this.create.description??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceDescriptionInput(e)}
					></textarea>
				</div>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button ?disabled=${this.creationBusy} full @click=${e=>this.onCreateAll(e)}
							>Create ${t}</gl-button
						>
					</span>
				</p>
				${Ci(!0===this.review,(()=>si`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`))}
				${Ci(!1===this.state?.orgSettings.byob,(()=>si`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${oe.cloudPatches}"
								title="Learn more about ${o}"
								aria-label="Learn more about ${o}"
								>${o}</a
							>
							are
							<a
								href="https://help.gitkraken.com/gitlens/security"
								title="Learn more about GitKraken security"
								aria-label="Learn more about GitKraken security"
								>securely stored</a
							>
							by GitKraken.
						</p>`),(()=>si`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${oe.cloudPatches}"
								title="Learn more about ${o}"
								aria-label="Learn more about ${o}"
								>${t}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`))}
			</div>
		`}render(){return si`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return si`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${Ci(null!=this.validityMessage,(()=>si`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`))}
				<div class="change-list" data-region="files">
					${Ci(null==this.create.changes,(()=>this.renderLoading()),(()=>this.renderTreeViewWithModel()))}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;const[t,o]=e.detail.context;let n=e.detail.checked;"unstaged"===o&&(n=!!e.detail.checked||"staged");const r=this.getChangeForRepo(t);null!=r&&r.checked!==n&&(r.checked=n,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:t,checked:n}))}onTreeItemSelected(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);const e=[],t=this.createChanges.length>1,o=this.isTree(this.filesModified??0),n=this.isCompact;if(t)for(const t of this.createChanges){const r=this.getTreeForChange(t,!0,o,n);null!=r&&e.push(...r)}else{const t=this.createChanges[0],r=this.getTreeForChange(t,!1,o,n);null!=r&&e.push(...r)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,o=!1,n=!0){if(null==e.files||0===e.files.length)return;const r=[];if("wip"===e.type){const a=[],l=[];for(const t of e.files)t.staged?a.push(t):l.push(t);0===a.length||0===l.length?r.push(...this.renderFiles(e.files,o,n,t?2:1)):(l.length&&r.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(l,o,n,t?3:2)}),a.length&&r.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(a,o,n,t?3:2)}))}else r.push(...this.renderFiles(e.files,o,n));if(!t)return r;const a=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return a.children=r,[a]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit)return 0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),void(null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0);this.validityMessage=void 0,this.titleInput.setCustomValidity("");const e=this.selectedChanges.reduce(((e,[t,o])=>(e[t]=o,e)),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch(),this.state?.create&&(this.creationBusy=!0)}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(e){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(e){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(e,t,o){this.emit("gl-patch-create-update-selection",{selection:t,role:o});const n=e.target?.closest("gk-popover");n?.hidePopover()}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(e){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-unstage":this.onUnstageFile(e)}}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onStageFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-stage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onUnstageFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-unstage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(e,t){const o={icon:"go-to-file",label:"Open file",action:"file-open"};return this.review?[o]:!0===e.staged?[o,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[o,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getRepoActions(e,t,o){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};js([wi({type:Object})],Hs.prototype,"state",2),js([wi({type:Boolean})],Hs.prototype,"review",2),js([wi({type:Object})],Hs.prototype,"generate",2),js([xi()],Hs.prototype,"generateBusy",2),js([xi()],Hs.prototype,"creationBusy",2),js([ki("#title")],Hs.prototype,"titleInput",2),js([ki("#desc")],Hs.prototype,"descInput",2),js([ki("#generate-ai")],Hs.prototype,"generateAiButton",2),js([xi()],Hs.prototype,"validityMessage",2),Hs=js([bi("gl-patch-create")],Hs);var Fs=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,qs=(e,t,o,n)=>{for(var r,a=n>1?void 0:n?Vs(t,o):t,l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n?r(t,o,a):r(a))||a);return n&&a&&Fs(t,o,a),a};let Ws=class extends GlElement{constructor(){super(),this.indentPreference=16,bt(ht,mt,ut,ft)}get wipChangesCount(){return null==this.state?.create?0:Object.values(this.state.create.changes).reduce(((e,t)=>e+=t.files?.length??0),0)}get wipChangeState(){if(null==this.state?.create)return;const e=Object.values(this.state.create.changes).reduce(((e,t)=>(null!=t.files&&(e.files+=t.files.length,e.on.add(t.repository.uri)),e)),{files:0,on:new Set});return{count:e.files,branches:Array.from(e.on).join(", ")}}get mode(){return this.state?.mode??"view"}updateDocumentProperties(){const e=this.state?.preferences?.indent;if(e===this.indentPreference)return;this.indentPreference=e??16;document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`)}updated(e){e.has("state")&&this.updateDocumentProperties()}render(){return si`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					${Ci("view"===this.mode,(()=>si`<gl-draft-details .state=${this.state} .explain=${this.explain}></gl-draft-details>`),(()=>si`<gl-patch-create .state=${this.state} .generate=${this.generate}></gl-patch-create>`))}
				</main>
			</div>
		`}createRenderRoot(){return this}};qs([wi({type:Object})],Ws.prototype,"state",2),qs([wi({type:Object})],Ws.prototype,"explain",2),qs([wi({type:Object})],Ws.prototype,"generate",2),qs([wi({attribute:!1,type:Object})],Ws.prototype,"app",2),Ws=qs([bi("gl-patch-details-app")],Ws);const Gs="0000000000000000000000000000000000000000";class PatchDetailsApp extends App{constructor(){super("PatchDetailsApp"),this.debouncedAttachState=H(this.attachState.bind(this),100)}onInitialize(){this.debouncedAttachState()}onBind(){return[ue.on("[data-switch-value]","click",(e=>this.onToggleFilesLayout(e))),ue.on('[data-action="ai-explain"]',"click",(e=>this.onAIExplain(e))),ue.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAIModel(e))),ue.on('[data-action="mode"]',"click",(e=>this.onModeClicked(e))),ue.on("gl-draft-details","gl-patch-apply-patch",(e=>this.onApplyPatch(e.detail))),ue.on("gl-draft-details","gl-draft-archive",(e=>this.onArchiveDraft(e.detail.reason))),ue.on("gl-patch-details-app","change-patch-base",(e=>this.onChangePatchBase(e.detail))),ue.on("gl-patch-details-app","select-patch-repo",(e=>this.onSelectPatchRepo(e.detail))),ue.on("gl-patch-details-app","gl-patch-details-graph-show-patch",(e=>this.onShowPatchInGraph(e.detail))),ue.on("gl-patch-details-app","gl-patch-create-patch",(e=>this.onCreatePatch(e.detail))),ue.on("gl-patch-details-app","gl-patch-share-local-patch",(()=>this.onShareLocalPatch())),ue.on("gl-draft-details","gl-patch-details-copy-cloud-link",(()=>this.onCopyCloudLink())),ue.on("gl-patch-create","gl-patch-create-invite-users",(()=>this.onInviteUsers())),ue.on("gl-draft-details","gl-patch-details-invite-users",(()=>this.onInviteUsers())),ue.on("gl-patch-create","gl-patch-create-update-selection",(e=>this.onUpdateUserSelection(e.detail))),ue.on("gl-draft-details","gl-patch-details-update-selection",(e=>this.onUpdateUserSelection(e.detail))),ue.on("gl-patch-create","gl-patch-create-repo-checked",(e=>this.onCreateCheckRepo(e.detail))),ue.on("gl-patch-create","gl-patch-generate-title",(e=>this.onCreateGenerateTitle(e.detail))),ue.on("gl-patch-create","gl-patch-create-update-metadata",(e=>this.onCreateUpdateMetadata(e.detail))),ue.on("gl-draft-details","gl-patch-details-update-metadata",(e=>this.onDraftUpdateMetadata(e.detail))),ue.on("gl-draft-details","gl-patch-details-update-permissions",(()=>this.onDraftUpdatePermissions())),ue.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),ue.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),ue.on("gl-patch-create,gl-draft-details","gl-patch-file-open",(e=>this.onOpenFile(e.detail))),ue.on("gl-draft-details","gl-patch-checked",(e=>this.onPatchChecked(e.detail)))]}onMessageReceived(e){switch(!0){case I.is(e):e.params.state,this.state=e.params.state,this.setState(this.state),this.debouncedAttachState();break;case B.is(e):case U.is(e):case N.is(e):this.state={...this.state,...e.params},this.setState(this.state),this.debouncedAttachState(!0);break;case j.is(e):{const t=this.state.draft,o=t.patches,n=o.findIndex((t=>t.id===e.params.patch.id));o.splice(n,1,e.params.patch),this.state={...this.state,draft:t},this.setState(this.state),this.debouncedAttachState(!0);break}default:super.onMessageReceived?.(e)}}onPatchChecked(e){this.sendCommand(g,e)}onCreateCheckRepo(e){this.sendCommand(E,e)}onCreateUpdateMetadata(e){this.sendCommand(P,e)}async onCreateGenerateTitle(e){try{const e=await this.sendRequest(L,void 0);e.error?this.component.generate={error:{message:e.error.message??"Error retrieving content"}}:e.title||e.description?(this.component.generate={title:e.title,description:e.description},this.state={...this.state,create:{...this.state.create,title:e.title??this.state.create?.title,description:e.description??this.state.create?.description}},this.setState(this.state),this.debouncedAttachState()):this.component.generate=void 0}catch(e){this.component.generate={error:{message:"Error retrieving content"}}}}onDraftUpdateMetadata(e){this.sendCommand(O,e)}onDraftUpdatePermissions(){this.sendCommand(R,void 0)}onShowPatchInGraph(e){}onCreatePatch(e){this.sendCommand(f,e)}onShareLocalPatch(){this.sendCommand(S,void 0)}onCopyCloudLink(){this.sendCommand(A,void 0)}onModeClicked(e){const t=e.target?.dataset.actionValue??void 0;t!==this.state.mode&&this.sendCommand(C,{mode:t})}onApplyPatch(e){null!=e.selectedPatches&&0!==e.selectedPatches.length&&this.sendCommand(p,{details:e.draft,target:e.target??"current",selected:e.selectedPatches})}onArchiveDraft(e){this.sendCommand(u,{reason:e})}onChangePatchBase(e){this.sendCommand(b,void 0)}onSelectPatchRepo(e){this.sendCommand(m,void 0)}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(l,{command:t})}onSwitchAIModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onAIExplain(e){try{const e=await this.sendRequest(D,void 0);e.error?this.component.explain={error:{message:e.error.message??"Error retrieving content"}}:e.summary?this.component.explain={summary:e.summary}:this.component.explain=void 0}catch(e){this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){const t=e.target?.dataset.switchValue??void 0;if(t===this.state.preferences.files?.layout)return;const o={...this.state.preferences.files,layout:t??"auto",compact:this.state.preferences.files?.compact??!0,threshold:this.state.preferences.files?.threshold??5,icon:this.state.preferences.files?.icon??"type"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this.debouncedAttachState(),this.sendCommand(k,{files:o})}onInviteUsers(){this.sendCommand(M,void 0)}onUpdateUserSelection(e){this.sendCommand(T,e)}onOpenFileOnRemote(e){this.sendCommand(w,e)}onOpenFile(e){this.sendCommand(y,e)}onCompareFileWithWorking(e){this.sendCommand(x,e)}onCompareFileWithPrevious(e){this.sendCommand(_,e)}onFileMoreActions(e){this.sendCommand(v,e)}get component(){return null==this._component&&(this._component=document.getElementById("app"),this._component.app=this),this._component}attachState(e){this.component.state=this.state}}new PatchDetailsApp;var Ks=n.I,Ys=n.w;export{Ks as PatchDetailsApp,Ys as uncommittedSha};