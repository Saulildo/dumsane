(function(r){"use strict";function s(e,i,a){if(!("description"in e)||!("name"in e))throw new Error("No name or description in the command guh");return e.displayName=i?.names?.[a]??e.name,e.displayDescription=i?.names?.[a]??e.description,e.options&&(e.options=e.options.map(function(o,d){o.displayName=i?.options?.[d]?.names?.[a]??o.name,o.displayDescription=i?.options?.[d]?.descriptions?.[a]??o.description})),e}const{metro:t,logger:c,commands:p}=vendetta;t.findByProps("vibrate");const n={patches:[],onUnload:function(){this.patches.every(function(e){return e(),!0})}};return n.onLoad=function(){t.findByProps("sendMessage","receiveMessage"),t.findByProps("createBotMessage"),t.findByProps("BOT_AVATARS"),n.patches.push(s(p.registerCommand({execute:vibrateExeCute.begin,type:1,inputType:1,applicationId:"-1",name:"vibrate begin",description:"b"+"r".repeat(50),options:[{type:4,required:!0,name:"duration",description:"Duration of one vibration (in milliseconds)",min_value:1,max_value:9999},{type:4,name:"repeat",description:"Number of times to repeat",min_value:1,max_value:9999999},{type:4,name:"gap",description:"Wait between vibrates (only matters if you have more than 1 repeat)"}]}))),n.patches.push(s(p.registerCommand({execute:vibrateExeCute.abort,type:1,inputType:1,applicationId:"-1",name:"vibrate abort",description:"b"+"r".repeat(50),options:[{type:4,required:!0,name:"id",description:"Vibration id, that you receive when running /vibrate begin"}]})))},r.default=n,Object.defineProperty(r,"__esModule",{value:!0}),r})({});
