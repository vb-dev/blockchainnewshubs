import{a as p,i as q,b as E,c as A,d as T,e as pa,D as Se,f as y,g as F,h as Q,j as Y,r as $e,k as Da,l as Sa,m as z,s as Wa,n as Va,o as j,p as se,q as ce,u as ee,t as oe,N as Ua,v as wa,w as xa,x as Ha,y as $a,z as _a,C as Ga,A as ma,B as Ya,E as Ge,F as Ye,G as ja,H as Ba,I as Xa,J as je,K as Be,M as Xe,L as Je,O as ze,P as Ke,Q as qe,R as Ja,S as za,T as Ka,U as Qe}from"./@intlify-Be4b8yr0.js";import{d as We,B as fa,X as ae,P as qa,S as Qa,o as Za,b as et,Y as ga,a as K,c as S,Z as at,w as Me,G as ba,s as tt,g as lt,_ as nt}from"./@vue-aKCDW-zX.js";/*!
  * vue-i18n v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const rt="9.13.1";function st(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(z().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(z().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(z().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(z().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(z().__INTLIFY_PROD_DEVTOOLS__=!1)}const va=Ka.__EXTEND_POINT__,x=ma(va);x(),x(),x(),x(),x(),x(),x(),x(),x();const da=Ga.__EXTEND_POINT__,M=ma(da),N={UNEXPECTED_RETURN_TYPE:da,INVALID_ARGUMENT:M(),MUST_BE_CALL_SETUP_TOP:M(),NOT_INSTALLED:M(),NOT_AVAILABLE_IN_LEGACY_MODE:M(),REQUIRED_VALUE:M(),INVALID_VALUE:M(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:M(),NOT_INSTALLED_WITH_PROVIDE:M(),UNEXPECTED_ERROR:M(),NOT_COMPATIBLE_LEGACY_VUE_I18N:M(),BRIDGE_SUPPORT_VUE_2_ONLY:M(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:M(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:M(),__EXTEND_POINT__:M()};function P(e,...s){return Va(e,null,void 0)}const ye=j("__translateVNode"),Ce=j("__datetimeParts"),Ae=j("__numberParts"),Ea=j("__setPluralRules"),Ia=j("__injectWithOption"),pe=j("__dispose");function te(e){if(!A(e))return e;for(const s in e)if(ce(e,s))if(!s.includes("."))A(e[s])&&te(e[s]);else{const t=s.split("."),l=t.length-1;let c=e,a=!1;for(let n=0;n<l;n++){if(t[n]in c||(c[t[n]]={}),!A(c[t[n]])){a=!0;break}c=c[t[n]]}a||(c[t[l]]=e[s],delete e[s]),A(c[t[l]])&&te(c[t[l]])}return e}function ue(e,s){const{messages:t,__i18n:l,messageResolver:c,flatJson:a}=s,n=F(t)?t:y(l)?{}:{[e]:{}};if(y(l)&&l.forEach(i=>{if("locale"in i&&"resource"in i){const{locale:_,resource:m}=i;_?(n[_]=n[_]||{},se(m,n[_])):se(m,n)}else E(i)&&se(JSON.parse(i),n)}),c==null&&a)for(const i in n)ce(n,i)&&te(n[i]);return n}function La(e){return e.type}function Ta(e,s,t){let l=A(s.messages)?s.messages:{};"__i18nGlobal"in t&&(l=ue(e.locale.value,{messages:l,__i18n:t.__i18nGlobal}));const c=Object.keys(l);c.length&&c.forEach(a=>{e.mergeLocaleMessage(a,l[a])});{if(A(s.datetimeFormats)){const a=Object.keys(s.datetimeFormats);a.length&&a.forEach(n=>{e.mergeDateTimeFormat(n,s.datetimeFormats[n])})}if(A(s.numberFormats)){const a=Object.keys(s.numberFormats);a.length&&a.forEach(n=>{e.mergeNumberFormat(n,s.numberFormats[n])})}}}function Ze(e){return lt(nt,null,e,0)}const ea="__INTLIFY_META__",aa=()=>[],ct=()=>!1;let ta=0;function la(e){return(s,t,l,c)=>e(t,l,ae()||void 0,c)}const ot=()=>{const e=ae();let s=null;return e&&(s=La(e)[ea])?{[ea]:s}:null};function Ve(e={},s){const{__root:t,__injectWithOption:l}=e,c=t===void 0,a=e.flatJson,n=oe?K:ga,i=!!e.translateExistCompatible;let _=T(e.inheritLocale)?e.inheritLocale:!0;const m=n(t&&_?t.locale.value:E(e.locale)?e.locale:Se),b=n(t&&_?t.fallbackLocale.value:E(e.fallbackLocale)||y(e.fallbackLocale)||F(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:m.value),v=n(ue(m.value,e)),g=n(F(e.datetimeFormats)?e.datetimeFormats:{[m.value]:{}}),d=n(F(e.numberFormats)?e.numberFormats:{[m.value]:{}});let R=t?t.missingWarn:T(e.missingWarn)||Q(e.missingWarn)?e.missingWarn:!0,h=t?t.fallbackWarn:T(e.fallbackWarn)||Q(e.fallbackWarn)?e.fallbackWarn:!0,W=t?t.fallbackRoot:T(e.fallbackRoot)?e.fallbackRoot:!0,C=!!e.fallbackFormat,B=Y(e.missing)?e.missing:null,V=Y(e.missing)?la(e.missing):null,U=Y(e.postTranslation)?e.postTranslation:null,X=t?t.warnHtmlMessage:T(e.warnHtmlMessage)?e.warnHtmlMessage:!0,H=!!e.escapeParameter;const Z=t?t.modifiers:F(e.modifiers)?e.modifiers:{};let D=e.pluralRules||t&&t.pluralRules,f;f=(()=>{c&&Qe(null);const r={version:rt,locale:m.value,fallbackLocale:b.value,messages:v.value,modifiers:Z,pluralRules:D,missing:V===null?void 0:V,missingWarn:R,fallbackWarn:h,fallbackFormat:C,unresolving:!0,postTranslation:U===null?void 0:U,warnHtmlMessage:X,escapeParameter:H,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};r.datetimeFormats=g.value,r.numberFormats=d.value,r.__datetimeFormatters=F(f)?f.__datetimeFormatters:void 0,r.__numberFormatters=F(f)?f.__numberFormatters:void 0;const o=Ya(r);return c&&Qe(o),o})(),ee(f,m.value,b.value);function ie(){return[m.value,b.value,v.value,g.value,d.value]}const _e=S({get:()=>m.value,set:r=>{m.value=r,f.locale=m.value}}),me=S({get:()=>b.value,set:r=>{b.value=r,f.fallbackLocale=b.value,ee(f,m.value,r)}}),fe=S(()=>v.value),ge=S(()=>g.value),$=S(()=>d.value);function be(){return Y(U)?U:null}function ve(r){U=r,f.postTranslation=r}function de(){return B}function Ee(r){r!==null&&(V=la(r)),B=r,f.missing=V}const w=(r,o,L,O,G,re)=>{ie();let J;try{__INTLIFY_PROD_DEVTOOLS__&&ja(ot()),c||(f.fallbackContext=t?Ba():void 0),J=r(f)}finally{__INTLIFY_PROD_DEVTOOLS__,c||(f.fallbackContext=void 0)}if(L!=="translate exists"&&q(J)&&J===Xa||L==="translate exists"&&!J){const[Aa,yt]=o();return t&&W?O(t):G(Aa)}else{if(re(J))return J;throw P(N.UNEXPECTED_RETURN_TYPE)}};function ne(...r){return w(o=>Reflect.apply(Be,null,[o,...r]),()=>je(...r),"translate",o=>Reflect.apply(o.t,o,[...r]),o=>o,o=>E(o))}function Ie(...r){const[o,L,O]=r;if(O&&!A(O))throw P(N.INVALID_ARGUMENT);return ne(o,L,p({resolvedMessage:!0},O||{}))}function Le(...r){return w(o=>Reflect.apply(ze,null,[o,...r]),()=>Je(...r),"datetime format",o=>Reflect.apply(o.d,o,[...r]),()=>Xe,o=>E(o))}function Te(...r){return w(o=>Reflect.apply(qe,null,[o,...r]),()=>Ke(...r),"number format",o=>Reflect.apply(o.n,o,[...r]),()=>Xe,o=>E(o))}function Oe(r){return r.map(o=>E(o)||q(o)||T(o)?Ze(String(o)):o)}const Fe={normalize:Oe,interpolate:r=>r,type:"vnode"};function Ne(...r){return w(o=>{let L;const O=o;try{O.processor=Fe,L=Reflect.apply(Be,null,[O,...r])}finally{O.processor=null}return L},()=>je(...r),"translate",o=>o[ye](...r),o=>[Ze(o)],o=>y(o))}function Re(...r){return w(o=>Reflect.apply(qe,null,[o,...r]),()=>Ke(...r),"number format",o=>o[Ae](...r),aa,o=>E(o)||y(o))}function ke(...r){return w(o=>Reflect.apply(ze,null,[o,...r]),()=>Je(...r),"datetime format",o=>o[Ce](...r),aa,o=>E(o)||y(o))}function Pe(r){D=r,f.pluralRules=D}function he(r,o){return w(()=>{if(!r)return!1;const L=E(o)?o:m.value,O=He(L),G=f.messageResolver(O,r);return i?G!=null:Ja(G)||za(G)||E(G)},()=>[r],"translate exists",L=>Reflect.apply(L.te,L,[r,o]),ct,L=>T(L))}function u(r){let o=null;const L=_a(f,b.value,m.value);for(let O=0;O<L.length;O++){const G=v.value[L[O]]||{},re=f.messageResolver(G,r);if(re!=null){o=re;break}}return o}function I(r){const o=u(r);return o??(t?t.tm(r)||{}:{})}function He(r){return v.value[r]||{}}function Na(r,o){if(a){const L={[r]:o};for(const O in L)ce(L,O)&&te(L[O]);o=L[r]}v.value[r]=o,f.messages=v.value}function Ra(r,o){v.value[r]=v.value[r]||{};const L={[r]:o};if(a)for(const O in L)ce(L,O)&&te(L[O]);o=L[r],se(o,v.value[r]),f.messages=v.value}function ka(r){return g.value[r]||{}}function Pa(r,o){g.value[r]=o,f.datetimeFormats=g.value,Ge(f,r,o)}function ha(r,o){g.value[r]=p(g.value[r]||{},o),f.datetimeFormats=g.value,Ge(f,r,o)}function Ma(r){return d.value[r]||{}}function ya(r,o){d.value[r]=o,f.numberFormats=d.value,Ye(f,r,o)}function Ca(r,o){d.value[r]=p(d.value[r]||{},o),f.numberFormats=d.value,Ye(f,r,o)}ta++,t&&oe&&(Me(t.locale,r=>{_&&(m.value=r,f.locale=r,ee(f,m.value,b.value))}),Me(t.fallbackLocale,r=>{_&&(b.value=r,f.fallbackLocale=r,ee(f,m.value,b.value))}));const k={id:ta,locale:_e,fallbackLocale:me,get inheritLocale(){return _},set inheritLocale(r){_=r,r&&t&&(m.value=t.locale.value,b.value=t.fallbackLocale.value,ee(f,m.value,b.value))},get availableLocales(){return Object.keys(v.value).sort()},messages:fe,get modifiers(){return Z},get pluralRules(){return D||{}},get isGlobal(){return c},get missingWarn(){return R},set missingWarn(r){R=r,f.missingWarn=R},get fallbackWarn(){return h},set fallbackWarn(r){h=r,f.fallbackWarn=h},get fallbackRoot(){return W},set fallbackRoot(r){W=r},get fallbackFormat(){return C},set fallbackFormat(r){C=r,f.fallbackFormat=C},get warnHtmlMessage(){return X},set warnHtmlMessage(r){X=r,f.warnHtmlMessage=r},get escapeParameter(){return H},set escapeParameter(r){H=r,f.escapeParameter=r},t:ne,getLocaleMessage:He,setLocaleMessage:Na,mergeLocaleMessage:Ra,getPostTranslationHandler:be,setPostTranslationHandler:ve,getMissingHandler:de,setMissingHandler:Ee,[Ea]:Pe};return k.datetimeFormats=ge,k.numberFormats=$,k.rt=Ie,k.te=he,k.tm=I,k.d=Le,k.n=Te,k.getDateTimeFormat=ka,k.setDateTimeFormat=Pa,k.mergeDateTimeFormat=ha,k.getNumberFormat=Ma,k.setNumberFormat=ya,k.mergeNumberFormat=Ca,k[Ia]=l,k[ye]=Ne,k[Ce]=ke,k[Ae]=Re,k}function ut(e){const s=E(e.locale)?e.locale:Se,t=E(e.fallbackLocale)||y(e.fallbackLocale)||F(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s,l=Y(e.missing)?e.missing:void 0,c=T(e.silentTranslationWarn)||Q(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,a=T(e.silentFallbackWarn)||Q(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,n=T(e.fallbackRoot)?e.fallbackRoot:!0,i=!!e.formatFallbackMessages,_=F(e.modifiers)?e.modifiers:{},m=e.pluralizationRules,b=Y(e.postTranslation)?e.postTranslation:void 0,v=E(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,g=!!e.escapeParameterHtml,d=T(e.sync)?e.sync:!0;let R=e.messages;if(F(e.sharedMessages)){const H=e.sharedMessages;R=Object.keys(H).reduce((D,f)=>{const le=D[f]||(D[f]={});return p(le,H[f]),D},R||{})}const{__i18n:h,__root:W,__injectWithOption:C}=e,B=e.datetimeFormats,V=e.numberFormats,U=e.flatJson,X=e.translateExistCompatible;return{locale:s,fallbackLocale:t,messages:R,flatJson:U,datetimeFormats:B,numberFormats:V,missing:l,missingWarn:c,fallbackWarn:a,fallbackRoot:n,fallbackFormat:i,modifiers:_,pluralRules:m,postTranslation:b,warnHtmlMessage:v,escapeParameter:g,messageResolver:e.messageResolver,inheritLocale:d,translateExistCompatible:X,__i18n:h,__root:W,__injectWithOption:C}}function De(e={},s){{const t=Ve(ut(e)),{__extender:l}=e,c={id:t.id,get locale(){return t.locale.value},set locale(a){t.locale.value=a},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(a){t.fallbackLocale.value=a},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(a){},get missing(){return t.getMissingHandler()},set missing(a){t.setMissingHandler(a)},get silentTranslationWarn(){return T(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(a){t.missingWarn=T(a)?!a:a},get silentFallbackWarn(){return T(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(a){t.fallbackWarn=T(a)?!a:a},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(a){t.fallbackFormat=a},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(a){t.setPostTranslationHandler(a)},get sync(){return t.inheritLocale},set sync(a){t.inheritLocale=a},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(a){t.warnHtmlMessage=a!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(a){t.escapeParameter=a},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(a){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...a){const[n,i,_]=a,m={};let b=null,v=null;if(!E(n))throw P(N.INVALID_ARGUMENT);const g=n;return E(i)?m.locale=i:y(i)?b=i:F(i)&&(v=i),y(_)?b=_:F(_)&&(v=_),Reflect.apply(t.t,t,[g,b||v||{},m])},rt(...a){return Reflect.apply(t.rt,t,[...a])},tc(...a){const[n,i,_]=a,m={plural:1};let b=null,v=null;if(!E(n))throw P(N.INVALID_ARGUMENT);const g=n;return E(i)?m.locale=i:q(i)?m.plural=i:y(i)?b=i:F(i)&&(v=i),E(_)?m.locale=_:y(_)?b=_:F(_)&&(v=_),Reflect.apply(t.t,t,[g,b||v||{},m])},te(a,n){return t.te(a,n)},tm(a){return t.tm(a)},getLocaleMessage(a){return t.getLocaleMessage(a)},setLocaleMessage(a,n){t.setLocaleMessage(a,n)},mergeLocaleMessage(a,n){t.mergeLocaleMessage(a,n)},d(...a){return Reflect.apply(t.d,t,[...a])},getDateTimeFormat(a){return t.getDateTimeFormat(a)},setDateTimeFormat(a,n){t.setDateTimeFormat(a,n)},mergeDateTimeFormat(a,n){t.mergeDateTimeFormat(a,n)},n(...a){return Reflect.apply(t.n,t,[...a])},getNumberFormat(a){return t.getNumberFormat(a)},setNumberFormat(a,n){t.setNumberFormat(a,n)},mergeNumberFormat(a,n){t.mergeNumberFormat(a,n)},getChoiceIndex(a,n){return-1}};return c.__extender=l,c}}const Ue={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function it({slots:e},s){return s.length===1&&s[0]==="default"?(e.default?e.default():[]).reduce((l,c)=>[...l,...c.type===ba?c.children:[c]],[]):s.reduce((t,l)=>{const c=e[l];return c&&(t[l]=c()),t},{})}function Oa(e){return ba}const _t=We({name:"i18n-t",props:p({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>q(e)||!isNaN(e)}},Ue),setup(e,s){const{slots:t,attrs:l}=s,c=e.i18n||we({useScope:e.scope,__useComponent:!0});return()=>{const a=Object.keys(t).filter(v=>v!=="_"),n={};e.locale&&(n.locale=e.locale),e.plural!==void 0&&(n.plural=E(e.plural)?+e.plural:e.plural);const i=it(s,a),_=c[ye](e.keypath,i,n),m=p({},l),b=E(e.tag)||A(e.tag)?e.tag:Oa();return fa(b,m,_)}}}),na=_t;function mt(e){return y(e)&&!E(e[0])}function Fa(e,s,t,l){const{slots:c,attrs:a}=s;return()=>{const n={part:!0};let i={};e.locale&&(n.locale=e.locale),E(e.format)?n.key=e.format:A(e.format)&&(E(e.format.key)&&(n.key=e.format.key),i=Object.keys(e.format).reduce((g,d)=>t.includes(d)?p({},g,{[d]:e.format[d]}):g,{}));const _=l(e.value,n,i);let m=[n.key];y(_)?m=_.map((g,d)=>{const R=c[g.type],h=R?R({[g.type]:g.value,index:d,parts:_}):[g.value];return mt(h)&&(h[0].key=`${g.type}-${d}`),h}):E(_)&&(m=[_]);const b=p({},a),v=E(e.tag)||A(e.tag)?e.tag:Oa();return fa(v,b,m)}}const ft=We({name:"i18n-n",props:p({value:{type:Number,required:!0},format:{type:[String,Object]}},Ue),setup(e,s){const t=e.i18n||we({useScope:e.scope,__useComponent:!0});return Fa(e,s,Ua,(...l)=>t[Ae](...l))}}),ra=ft,gt=We({name:"i18n-d",props:p({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ue),setup(e,s){const t=e.i18n||we({useScope:e.scope,__useComponent:!0});return Fa(e,s,wa,(...l)=>t[Ce](...l))}}),sa=gt;function bt(e,s){const t=e;if(e.mode==="composition")return t.__getInstance(s)||e.global;{const l=t.__getInstance(s);return l!=null?l.__composer:e.global.__composer}}function vt(e){const s=n=>{const{instance:i,modifiers:_,value:m}=n;if(!i||!i.$)throw P(N.UNEXPECTED_ERROR);const b=bt(e,i.$),v=ca(m);return[Reflect.apply(b.t,b,[...oa(v)]),b]};return{created:(n,i)=>{const[_,m]=s(i);oe&&e.global===m&&(n.__i18nWatcher=Me(m.locale,()=>{i.instance&&i.instance.$forceUpdate()})),n.__composer=m,n.textContent=_},unmounted:n=>{oe&&n.__i18nWatcher&&(n.__i18nWatcher(),n.__i18nWatcher=void 0,delete n.__i18nWatcher),n.__composer&&(n.__composer=void 0,delete n.__composer)},beforeUpdate:(n,{value:i})=>{if(n.__composer){const _=n.__composer,m=ca(i);n.textContent=Reflect.apply(_.t,_,[...oa(m)])}},getSSRProps:n=>{const[i]=s(n);return{textContent:i}}}}function ca(e){if(E(e))return{path:e};if(F(e)){if(!("path"in e))throw P(N.REQUIRED_VALUE,"path");return e}else throw P(N.INVALID_VALUE)}function oa(e){const{path:s,locale:t,args:l,choice:c,plural:a}=e,n={},i=l||{};return E(t)&&(n.locale=t),q(c)&&(n.plural=c),q(a)&&(n.plural=a),[s,i,n]}function dt(e,s,...t){const l=F(t[0])?t[0]:{},c=!!l.useI18nComponentName;(T(l.globalInstall)?l.globalInstall:!0)&&([c?"i18n":na.name,"I18nT"].forEach(n=>e.component(n,na)),[ra.name,"I18nN"].forEach(n=>e.component(n,ra)),[sa.name,"I18nD"].forEach(n=>e.component(n,sa))),e.directive("t",vt(s))}function Et(e,s,t){return{beforeCreate(){const l=ae();if(!l)throw P(N.UNEXPECTED_ERROR);const c=this.$options;if(c.i18n){const a=c.i18n;if(c.__i18n&&(a.__i18n=c.__i18n),a.__root=s,this===this.$root)this.$i18n=ua(e,a);else{a.__injectWithOption=!0,a.__extender=t.__vueI18nExtend,this.$i18n=De(a);const n=this.$i18n;n.__extender&&(n.__disposer=n.__extender(this.$i18n))}}else if(c.__i18n)if(this===this.$root)this.$i18n=ua(e,c);else{this.$i18n=De({__i18n:c.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:s});const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}else this.$i18n=e;c.__i18nGlobal&&Ta(s,c,c),this.$t=(...a)=>this.$i18n.t(...a),this.$rt=(...a)=>this.$i18n.rt(...a),this.$tc=(...a)=>this.$i18n.tc(...a),this.$te=(a,n)=>this.$i18n.te(a,n),this.$d=(...a)=>this.$i18n.d(...a),this.$n=(...a)=>this.$i18n.n(...a),this.$tm=a=>this.$i18n.tm(a),t.__setInstance(l,this.$i18n)},mounted(){},unmounted(){const l=ae();if(!l)throw P(N.UNEXPECTED_ERROR);const c=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,c.__disposer&&(c.__disposer(),delete c.__disposer,delete c.__extender),t.__deleteInstance(l),delete this.$i18n}}}function ua(e,s){e.locale=s.locale||e.locale,e.fallbackLocale=s.fallbackLocale||e.fallbackLocale,e.missing=s.missing||e.missing,e.silentTranslationWarn=s.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=s.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=s.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=s.postTranslation||e.postTranslation,e.warnHtmlInMessage=s.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=s.escapeParameterHtml||e.escapeParameterHtml,e.sync=s.sync||e.sync,e.__composer[Ea](s.pluralizationRules||e.pluralizationRules);const t=ue(e.locale,{messages:s.messages,__i18n:s.__i18n});return Object.keys(t).forEach(l=>e.mergeLocaleMessage(l,t[l])),s.datetimeFormats&&Object.keys(s.datetimeFormats).forEach(l=>e.mergeDateTimeFormat(l,s.datetimeFormats[l])),s.numberFormats&&Object.keys(s.numberFormats).forEach(l=>e.mergeNumberFormat(l,s.numberFormats[l])),e}const It=j("global-vue-i18n");function pt(e={},s){const t=__VUE_I18N_LEGACY_API__&&T(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,l=T(e.globalInjection)?e.globalInjection:!0,c=__VUE_I18N_LEGACY_API__&&t?!!e.allowComposition:!0,a=new Map,[n,i]=Lt(e,t),_=j("");function m(g){return a.get(g)||null}function b(g,d){a.set(g,d)}function v(g){a.delete(g)}{const g={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},get allowComposition(){return c},async install(d,...R){if(d.__VUE_I18N_SYMBOL__=_,d.provide(d.__VUE_I18N_SYMBOL__,g),F(R[0])){const C=R[0];g.__composerExtend=C.__composerExtend,g.__vueI18nExtend=C.__vueI18nExtend}let h=null;!t&&l&&(h=Mt(d,g.global)),__VUE_I18N_FULL_INSTALL__&&dt(d,g,...R),__VUE_I18N_LEGACY_API__&&t&&d.mixin(Et(i,i.__composer,g));const W=d.unmount;d.unmount=()=>{h&&h(),g.dispose(),W()}},get global(){return i},dispose(){n.stop()},__instances:a,__getInstance:m,__setInstance:b,__deleteInstance:v};return g}}function we(e={}){const s=ae();if(s==null)throw P(N.MUST_BE_CALL_SETUP_TOP);if(!s.isCE&&s.appContext.app!=null&&!s.appContext.app.__VUE_I18N_SYMBOL__)throw P(N.NOT_INSTALLED);const t=Tt(s),l=Ft(t),c=La(s),a=Ot(e,c);if(__VUE_I18N_LEGACY_API__&&t.mode==="legacy"&&!e.__useComponent){if(!t.allowComposition)throw P(N.NOT_AVAILABLE_IN_LEGACY_MODE);return Pt(s,a,l,e)}if(a==="global")return Ta(l,e,c),l;if(a==="parent"){let _=Nt(t,s,e.__useComponent);return _==null&&(_=l),_}const n=t;let i=n.__getInstance(s);if(i==null){const _=p({},e);"__i18n"in c&&(_.__i18n=c.__i18n),l&&(_.__root=l),i=Ve(_),n.__composerExtend&&(i[pe]=n.__composerExtend(i)),kt(n,s,i),n.__setInstance(s,i)}return i}function Lt(e,s,t){const l=qa();{const c=__VUE_I18N_LEGACY_API__&&s?l.run(()=>De(e)):l.run(()=>Ve(e));if(c==null)throw P(N.UNEXPECTED_ERROR);return[l,c]}}function Tt(e){{const s=Qa(e.isCE?It:e.appContext.app.__VUE_I18N_SYMBOL__);if(!s)throw P(e.isCE?N.NOT_INSTALLED_WITH_PROVIDE:N.UNEXPECTED_ERROR);return s}}function Ot(e,s){return pa(e)?"__i18n"in s?"local":"global":e.useScope?e.useScope:"local"}function Ft(e){return e.mode==="composition"?e.global:e.global.__composer}function Nt(e,s,t=!1){let l=null;const c=s.root;let a=Rt(s,t);for(;a!=null;){const n=e;if(e.mode==="composition")l=n.__getInstance(a);else if(__VUE_I18N_LEGACY_API__){const i=n.__getInstance(a);i!=null&&(l=i.__composer,t&&l&&!l[Ia]&&(l=null))}if(l!=null||c===a)break;a=a.parent}return l}function Rt(e,s=!1){return e==null?null:s&&e.vnode.ctx||e.parent}function kt(e,s,t){Za(()=>{},s),et(()=>{const l=t;e.__deleteInstance(s);const c=l[pe];c&&(c(),delete l[pe])},s)}function Pt(e,s,t,l={}){const c=s==="local",a=ga(null);if(c&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw P(N.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const n=T(l.inheritLocale)?l.inheritLocale:!E(l.locale),i=K(!c||n?t.locale.value:E(l.locale)?l.locale:Se),_=K(!c||n?t.fallbackLocale.value:E(l.fallbackLocale)||y(l.fallbackLocale)||F(l.fallbackLocale)||l.fallbackLocale===!1?l.fallbackLocale:i.value),m=K(ue(i.value,l)),b=K(F(l.datetimeFormats)?l.datetimeFormats:{[i.value]:{}}),v=K(F(l.numberFormats)?l.numberFormats:{[i.value]:{}}),g=c?t.missingWarn:T(l.missingWarn)||Q(l.missingWarn)?l.missingWarn:!0,d=c?t.fallbackWarn:T(l.fallbackWarn)||Q(l.fallbackWarn)?l.fallbackWarn:!0,R=c?t.fallbackRoot:T(l.fallbackRoot)?l.fallbackRoot:!0,h=!!l.fallbackFormat,W=Y(l.missing)?l.missing:null,C=Y(l.postTranslation)?l.postTranslation:null,B=c?t.warnHtmlMessage:T(l.warnHtmlMessage)?l.warnHtmlMessage:!0,V=!!l.escapeParameter,U=c?t.modifiers:F(l.modifiers)?l.modifiers:{},X=l.pluralRules||c&&t.pluralRules;function H(){return[i.value,_.value,m.value,b.value,v.value]}const Z=S({get:()=>a.value?a.value.locale.value:i.value,set:u=>{a.value&&(a.value.locale.value=u),i.value=u}}),D=S({get:()=>a.value?a.value.fallbackLocale.value:_.value,set:u=>{a.value&&(a.value.fallbackLocale.value=u),_.value=u}}),f=S(()=>a.value?a.value.messages.value:m.value),le=S(()=>b.value),ie=S(()=>v.value);function _e(){return a.value?a.value.getPostTranslationHandler():C}function me(u){a.value&&a.value.setPostTranslationHandler(u)}function fe(){return a.value?a.value.getMissingHandler():W}function ge(u){a.value&&a.value.setMissingHandler(u)}function $(u){return H(),u()}function be(...u){return a.value?$(()=>Reflect.apply(a.value.t,null,[...u])):$(()=>"")}function ve(...u){return a.value?Reflect.apply(a.value.rt,null,[...u]):""}function de(...u){return a.value?$(()=>Reflect.apply(a.value.d,null,[...u])):$(()=>"")}function Ee(...u){return a.value?$(()=>Reflect.apply(a.value.n,null,[...u])):$(()=>"")}function w(u){return a.value?a.value.tm(u):{}}function ne(u,I){return a.value?a.value.te(u,I):!1}function Ie(u){return a.value?a.value.getLocaleMessage(u):{}}function Le(u,I){a.value&&(a.value.setLocaleMessage(u,I),m.value[u]=I)}function Te(u,I){a.value&&a.value.mergeLocaleMessage(u,I)}function Oe(u){return a.value?a.value.getDateTimeFormat(u):{}}function xe(u,I){a.value&&(a.value.setDateTimeFormat(u,I),b.value[u]=I)}function Fe(u,I){a.value&&a.value.mergeDateTimeFormat(u,I)}function Ne(u){return a.value?a.value.getNumberFormat(u):{}}function Re(u,I){a.value&&(a.value.setNumberFormat(u,I),v.value[u]=I)}function ke(u,I){a.value&&a.value.mergeNumberFormat(u,I)}const Pe={get id(){return a.value?a.value.id:-1},locale:Z,fallbackLocale:D,messages:f,datetimeFormats:le,numberFormats:ie,get inheritLocale(){return a.value?a.value.inheritLocale:n},set inheritLocale(u){a.value&&(a.value.inheritLocale=u)},get availableLocales(){return a.value?a.value.availableLocales:Object.keys(m.value)},get modifiers(){return a.value?a.value.modifiers:U},get pluralRules(){return a.value?a.value.pluralRules:X},get isGlobal(){return a.value?a.value.isGlobal:!1},get missingWarn(){return a.value?a.value.missingWarn:g},set missingWarn(u){a.value&&(a.value.missingWarn=u)},get fallbackWarn(){return a.value?a.value.fallbackWarn:d},set fallbackWarn(u){a.value&&(a.value.missingWarn=u)},get fallbackRoot(){return a.value?a.value.fallbackRoot:R},set fallbackRoot(u){a.value&&(a.value.fallbackRoot=u)},get fallbackFormat(){return a.value?a.value.fallbackFormat:h},set fallbackFormat(u){a.value&&(a.value.fallbackFormat=u)},get warnHtmlMessage(){return a.value?a.value.warnHtmlMessage:B},set warnHtmlMessage(u){a.value&&(a.value.warnHtmlMessage=u)},get escapeParameter(){return a.value?a.value.escapeParameter:V},set escapeParameter(u){a.value&&(a.value.escapeParameter=u)},t:be,getPostTranslationHandler:_e,setPostTranslationHandler:me,getMissingHandler:fe,setMissingHandler:ge,rt:ve,d:de,n:Ee,tm:w,te:ne,getLocaleMessage:Ie,setLocaleMessage:Le,mergeLocaleMessage:Te,getDateTimeFormat:Oe,setDateTimeFormat:xe,mergeDateTimeFormat:Fe,getNumberFormat:Ne,setNumberFormat:Re,mergeNumberFormat:ke};function he(u){u.locale.value=i.value,u.fallbackLocale.value=_.value,Object.keys(m.value).forEach(I=>{u.mergeLocaleMessage(I,m.value[I])}),Object.keys(b.value).forEach(I=>{u.mergeDateTimeFormat(I,b.value[I])}),Object.keys(v.value).forEach(I=>{u.mergeNumberFormat(I,v.value[I])}),u.escapeParameter=V,u.fallbackFormat=h,u.fallbackRoot=R,u.fallbackWarn=d,u.missingWarn=g,u.warnHtmlMessage=B}return at(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw P(N.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const u=a.value=e.proxy.$i18n.__composer;s==="global"?(i.value=u.locale.value,_.value=u.fallbackLocale.value,m.value=u.messages.value,b.value=u.datetimeFormats.value,v.value=u.numberFormats.value):c&&he(u)}),Pe}const ht=["locale","fallbackLocale","availableLocales"],ia=["t","rt","d","n","tm","te"];function Mt(e,s){const t=Object.create(null);return ht.forEach(c=>{const a=Object.getOwnPropertyDescriptor(s,c);if(!a)throw P(N.UNEXPECTED_ERROR);const n=tt(a.value)?{get(){return a.value.value},set(i){a.value.value=i}}:{get(){return a.get&&a.get()}};Object.defineProperty(t,c,n)}),e.config.globalProperties.$i18n=t,ia.forEach(c=>{const a=Object.getOwnPropertyDescriptor(s,c);if(!a||!a.value)throw P(N.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${c}`,a)}),()=>{delete e.config.globalProperties.$i18n,ia.forEach(c=>{delete e.config.globalProperties[`$${c}`]})}}st();__INTLIFY_JIT_COMPILATION__?$e(xa):$e(Ha);Da($a);Sa(_a);if(__INTLIFY_PROD_DEVTOOLS__){const e=z();e.__INTLIFY__=!0,Wa(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}export{pt as c,we as u};
