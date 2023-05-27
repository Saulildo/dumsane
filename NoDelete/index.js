(function(r){"use strict";const{React:l,ReactNative:d}=vendetta.metro.common,{plugin:{storage:s},storage:{useProxy:m},ui:{components:{Forms:c}}}=vendetta;"timestamps"in s||(s.timestamps=!1);const{FormRow:u,FormSection:h,FormSwitch:f}=c;function g(o){return m(s),l.createElement(d.ScrollView,{style:{flex:1}},[{label:"Show the time of deletion",default:!1,id:"timestamps"},{label:"Use AM/PM",default:!1,id:"ew"},{label:"The plugin does not keep the messages you've deleted"}].map(function(e){return l.createElement(u,{label:e.label,trailing:"id"in e?l.createElement(f,{value:s[e.id]??e.default,onValueChange:function(t){return s[e.id]=t}}):void 0})}))}let a=[];const p={settings:g,onLoad(){try{const{plugin:{storage:o}}=vendetta,e=vendetta.metro.findByStoreName("UserStore").getCurrentUser().id==="744276454946242723";this.onUnload=vendetta.patcher.before("dispatch",vendetta.metro.common.FluxDispatcher,function(t){const[n]=t;if(n.type==="MESSAGE_DELETE"){if(a.includes(n.id))return delete a[a.indexOf(n.id)],t;a.push(n.id);let i="This message was deleted";return o.timestamps&&(i+=` (${vendetta.metro.common.moment().format(o.ew?"hh:mm:ss.SS a":"HH:mm:ss.SS")})`),(e||window?.debugpls)&&console.log("[NoDelete \u203A before]",t),t[0]={type:"MESSAGE_EDIT_FAILED_AUTOMOD",messageData:{type:1,message:{channelId:n.channelId,messageId:n.id}},errorResponseBody:{code:2e5,message:i}},(e||window?.debugpls)&&console.log("[NoDelete] \u203A after",t),t}})}catch(o){console.error(o),alert(o.stack)}}};return r.default=p,Object.defineProperty(r,"__esModule",{value:!0}),r})({});
