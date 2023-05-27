(function(m){"use strict";function g(e,t,o){if(!e.name||!e?.description)throw new Error(`No name(${e?.name}) or description(${e?.description}) in the passed command. (command name: ${e?.name})`);return e.displayName=t?.names?.[o]??e.name,e.displayDescription=t?.names?.[o]??e.description,e.options&&(e.options=e.options.map(function(r,p){if(!r?.name||!r?.description)throw new Error(`No name(${r?.name}) or description(${r?.description} in the option with index ${p}`);r.displayName=t?.options?.[p]?.names?.[o]??r.name,r.displayDescription=t?.options?.[p]?.descriptions?.[o]??r.description})),e}const h={loadingDiscordSpinner:":loading:1105495814073229393",aol:"a:aol:1108834296359301161",linuth:":linuth:1110531631409811547",fuckyoy:":fuckyoy:1108360628302782564",getLoading(){return Math.random()<.01?this?.aol:this.loadingDiscordSpinner},getFail(){return Math.random()<.01?this?.fuckyoy:this.linuth},getSuccess(){return""}},{metro:s,logger:M,commands:b}=vendetta,{vibrate:I}=s.findByProps("vibrate"),f=function(e){return"ios"in e||"android"in e?s.findByProps("View").Platform.select:s.findByProps("View").Platform.select({ios:[e],android:e})},v=function(e){return new Promise(function(t){return setTimeout(t,e)})},l={patches:[],onUnload:function(){this.patches.every(function(e){return e(),!0})}},y=[];async function w(e){typeof e>"u"&&(e={}),"duration"in e||(e.duration=400),"repeat"in e||(e.repeat=1),"gap"in e||(e.gap=0),f({ios:!0})&&duration>400&&(duration=400);const t={id:+Date.now(),aborting:!1};cb1(t);for(let o=0;o<repeat;o++){if(I(f(e.duration),!0),await v(e.duration),t.aborting===!0){t.aborted=!0;break}await v(e.gap)}cb(t)}return l.onLoad=function(){try{let e=function(d,n){n?.author.avatar&&n?.author?.avatarURL&&(r.BOT_AVATARS[n.author.avatar]=n.author.avatarURL,delete n.author.avatarURL);let i=o.createBotMessage(d);return i=s.findByProps("merge").merge(i,n),t.receiveMessage(d.channelId,i),i};const t=s.findByProps("sendMessage","receiveMessage"),o=s.findByProps("createBotMessage"),r=s.findByProps("BOT_AVATARS"),p={abort(){const d={username:"/vibrate abort",avatar:"clyde"},n=new Map(args.map(function(a){return[a.name,a]})).get("id").value,i=y.findIndex(function(a){return a.id===n});if(i===-1){e({channelId:context.channel.id,embeds:{title:`${h.getFail()} Invalid vibration ID`.trim,fields:[{value:vibration.id,name:"Vibration ID"}]}},d);return}y[i].aborting=!0,e({channelId:context.channel.id,embeds:[{title:`${h.getLoading()} Aborting vibration\u2026`,fields:[{value:n,name:"Vibration ID"}]}]},d)},begin(d,n){const i={username:"/vibrate begin",avatar:"clyde"};try{const a=new Map(d.map(function(u){return[u.name,u]})),c={duration:a.get("duration").value,repeat:a.get("repeat")?.value,gap:a.get("gap")?.value};w(c,function(u){e({channelId:n.channel.id,embeds:[{title:"<:vibrating:1095354969965731921> Started vibrating",description:`for ${c.duration}ms`+(c?.repeat?`, ${c.repeat} time${c.repeat===1?"":"s"}`:"")+"."+(c?.gap?`With a gap of ${c?.gap}ms.`:""),fields:[{value:u.id,name:"Vibration ID"}]}]},i)},function(u,$){e({channelId:n.channel.id,embeds:[{title:`<:still:1095977283212296194> ${$?"Abort":"Finish"}ed vibrating`,fields:[{value:u.id,name:"Vibration ID"}]}]},i)})}catch(a){console.error(a),e({channelId:n.channel.id,content:`\`\`\`
${a.stack}\`\`\``,embeds:[{title:`${h.getFailure()} An error ocurred while running the command`.trim(),description:`Send a screenshot of this error and explain how you came to it, here: ${PLUGINS_FORUM_POST_URL}, to hopefully get this error solved!`}]},i)}}};l.patches.push(b.registerCommand(g({execute:p.begin,type:1,inputType:1,applicationId:"-1",name:"vibrate begin",description:"b"+"r".repeat(50),options:[{type:4,required:!0,name:"duration",description:"Duration of one vibration (in milliseconds)",min_value:1,max_value:9999},{type:4,name:"repeat",description:"Number of times to repeat",min_value:1,max_value:9999999},{type:4,name:"gap",description:"Wait between vibrates (only matters if you have more than 1 repeat)"}]}))),l.patches.push(g(b.registerCommand({execute:p.abort,type:1,inputType:1,applicationId:"-1",name:"vibrate abort",description:"b"+"r".repeat(50),options:[{type:4,required:!0,name:"id",description:"Vibration id, that you receive when running /vibrate begin"}]})))}catch(e){alert(e.stack)}},m.default=l,Object.defineProperty(m,"__esModule",{value:!0}),m})({});
