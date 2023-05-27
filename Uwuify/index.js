(function(){"use strict";function b(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function v(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(t,r,e){return r&&v(t.prototype,r),e&&v(t,e),t}let h=function(){function t(r){b(this,t),Object.defineProperty(this,"seeder",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.seeder=this.xmur3(r)}return x(t,[{key:"random",value:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;if(r>e)throw new Error("The minimum value must be below the maximum value");if(r===e)throw new Error("The minimum value cannot equal the maximum value");return this.denormalize(this.sfc32(),r,e)}},{key:"randomInt",value:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Math.round(this.random(r,e))}},{key:"denormalize",value:function(r,e,n){return r*(n-e)+e}},{key:"xmur3",value:function(r){let e=1779033703^r.length;for(let n=0;n<r.length;n++)e=Math.imul(e^r.charCodeAt(n),3432918353),e=e<<13|e>>>19;return function(){return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^=e>>>16)>>>0}}},{key:"sfc32",value:function(){let r=this.seeder(),e=this.seeder(),n=this.seeder(),i=this.seeder();r>>>=0,e>>>=0,n>>>=0,i>>>=0;let a=r+e|0;return r=e^e>>>9,e=n+(n<<3)|0,n=n<<21|n>>>11,i=i+1|0,a=a+i|0,n=n+a|0,(a>>>0)/4294967296}}]),t}();function C(t){return/^\p{L}/u.test(t)}function P(t){return t===t.toUpperCase()}function _(t){let r=0,e=0;for(const n of t)C(n)&&(P(n)&&e++,r++);return e/r}function g(){return function(t,r){let e=t[r],n=0;Object.defineProperty(t,r,{get:function(){return e},set:function(i){if(typeof i=="object"&&(n=Object.values(i).reduce(function(a,s){return a+s})),i<0||n<0||i>1||n>1)throw new Error(`${r} modifier value must be a number between 0 and 1`);e=i},enumerable:!0,configurable:!0})}}function M(t){if(!t||/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(t)||/%[^0-9a-f]/i.test(t)||/%[0-9a-f](:?[^0-9a-f]|$)/i.test(t))return!1;const r=t.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);if(!r)return!1;const[,e,n,i]=r;if(!(e&&e.length&&i.length>=0))return!1;if(n&&n.length){if(!(i.length===0||/^\//.test(i)))return!1}else if(/^\/\//.test(i))return!1;return!!/^[a-z][a-z0-9\+\-\.]*$/.test(e.toLowerCase())}function A(t){return t.charAt(0)==="@"}var w=function(t,r,e,n){var i=arguments.length,a=i<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,e):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,r,e,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(i<3?s(a):i>3?s(r,e,a):s(r,e))||a);return i>3&&a&&Object.defineProperty(r,e,a),a};const u={SPACES:{faces:.05,actions:.075,stutters:.1},WORDS:1,EXCLAMATIONS:1};let l=function(){function t(){let{spaces:r=u.SPACES,words:e=u.WORDS,exclamations:n=u.EXCLAMATIONS}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{spaces:u.SPACES,words:u.WORDS,exclamations:u.EXCLAMATIONS};b(this,t),Object.defineProperty(this,"faces",{enumerable:!0,configurable:!0,writable:!0,value:["(\u30FB`\u03C9\xB4\u30FB)",";;w;;","OwO","UwU",">w<","^w^","\xDAw\xDA","^-^",":3","x3",";3",":3c"]}),Object.defineProperty(this,"exclamations",{enumerable:!0,configurable:!0,writable:!0,value:["!?","?!!","?!?1","!!11","?!?!"]}),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:["*blushes*","*whispers to self*","*cries*","*screams*","*sweats*","*twerks*","*runs away*","*screeches*","*walks away*","*looks at you*","*starts twerking*","*huggles tightly*","*boops your nose*"]}),Object.defineProperty(this,"uwuMap",{enumerable:!0,configurable:!0,writable:!0,value:[[/(?:r|l)/g,"w"],[/(?:R|L)/g,"W"],[/n([aeiou])/g,"ny$1"],[/N([aeiou])/g,"Ny$1"],[/N([AEIOU])/g,"Ny$1"],[/ove/g,"uv"]]}),Object.defineProperty(this,"_spacesModifier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_wordsModifier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_exclamationsModifier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this._spacesModifier=r??u.SPACES,this._wordsModifier=e??u.WORDS,this._exclamationsModifier=n??u.EXCLAMATIONS}return x(t,[{key:"uwuifyWords",value:function(r){var e=this;return r.split(" ").map(function(n){if(A(n)||M(n))return n;const i=new h(n);for(const[a,s]of e.uwuMap)i.random()>e._wordsModifier||(n=n.replace(a,s));return n}).join(" ")}},{key:"uwuifySpaces",value:function(r){var e=this;const n=r.split(" "),i=this._spacesModifier.faces,a=this._spacesModifier.actions+i,s=this._spacesModifier.stutters+a;return n.map(function(o,O){const d=new h(o),y=d.random(),[f]=o;if(y<=i&&e.faces)o+=" "+e.faces[d.randomInt(0,e.faces.length-1)],E();else if(y<=a&&e.actions)o+=" "+e.actions[d.randomInt(0,e.actions.length-1)],E();else if(y<=s&&!M(o)){const p=d.randomInt(0,2);return(f+"-").repeat(p)+o}function E(){if(f===f.toUpperCase()&&!(_(o)>.5))if(O===0)o=f.toLowerCase()+o.slice(1);else{const p=n[O-1],L=p[p.length-1];if(!new RegExp("[.!?\\-]").test(L))return;o=f.toLowerCase()+o.slice(1)}}return o}).join(" ")}},{key:"uwuifyExclamations",value:function(r){var e=this;const n=r.split(" "),i=new RegExp("[?!]+$");return n.map(function(a){const s=new h(a);return!i.test(a)||s.random()>e._exclamationsModifier||(a=a.replace(i,""),a+=e.exclamations[s.randomInt(0,e.exclamations.length-1)]),a}).join(" ")}},{key:"uwuifySentence",value:function(r){let e=r;return e=this.uwuifyWords(e),e=this.uwuifyExclamations(e),e=this.uwuifySpaces(e),e}}]),t}();w([g()],l.prototype,"_spacesModifier",void 0),w([g()],l.prototype,"_wordsModifier",void 0),w([g()],l.prototype,"_exclamationsModifier",void 0);const{React:m,ReactNative:j}=vendetta.metro.common,{plugin:{storage:c},storage:{useProxy:k},ui:{components:{Forms:R}}}=vendetta,{FormRow:N,FormSection:$,FormSwitch:I}=R,U=vendetta.metro.findByProps("ButtonColors","ButtonLooks","ButtonSizes").default;function T(t,r){let{patches:e,reloadUwuifier:n,startMessageTransfoworming:i}=r;return k(c),m.createElement(j.ScrollView,{style:{flex:1}},[{label:"faces",default:!0,id:"cfg.spaces.faces"},{label:"actions",default:!0,id:"cfg.spaces.actions"},{label:"stutters",default:!0,id:"cfg.spaces.stutters"},{label:"words",default:!0,id:"cfg.words"},{label:"exclamations",default:!1,id:"cfg.exclamations"},{label:"Strength sliders will come when i figure out how to make em"},{id:"reload",style:{height:5,margin:8},name:"Reload uwuifier",onPress:function(){n(c),vendetta.ui.toasts.showToast("Reloaded uwuifier",vendetta.ui.assets.getAssetIDByName("check"))}}].map(function(a){return a?.id==="reload"?m.createElement(U,{style:a.style,text:a.name??"Unnamed",color:"brand",size:"small",disabled:!1,onPress:a.onPress??function(){}}):("id"in a&&!(a.id in c)&&(c[a.id]=a.default),m.createElement(N,{label:a?.label??a?.id??"no name",trailing:"id"in a?m.createElement(I,{value:c[a.id]??a.default,onValueChange:function(s){c[a.id]=s,cfg?.onValueChange?.(s)}}):void 0}))}))}function D(t,r,e){if(!t.name||!t?.description)throw new Error(`No name(${t?.name}) or description(${t?.description}) in the passed command. (command name: ${t?.name})`);return t.displayName=r?.names?.[e]??t.name,t.displayDescription=r?.names?.[e]??t.description,t.options&&(t.options=t.options.map(function(n,i){if(!n?.name||!n?.description)throw new Error(`No name(${n?.name}) or description(${n?.description} in the option with index ${i}`);n.displayName=r?.options?.[i]?.names?.[e]??n.name,n.displayDescription=r?.options?.[i]?.descriptions?.[e]??n.description})),t}let S=new l;reloadUwuifier})();
