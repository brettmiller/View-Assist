"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6827],{4178:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=i(4848),n=i(8453);const o={title:"Stream Assist Integration",sidebar_position:3},r=void 0,a={id:"viewassist-setup/satellite-configuration/android/streamassist",title:"Stream Assist Integration",description:"Stream Assist integration is used to receive the RTSP stream from the Android device to do wake word detection.  Stream Assist depends on a Home Assistant Assist being configured.",source:"@site/docs/viewassist-setup/satellite-configuration/android/streamassist.md",sourceDirName:"viewassist-setup/satellite-configuration/android",slug:"/viewassist-setup/satellite-configuration/android/streamassist",permalink:"/View-Assist/docs/viewassist-setup/satellite-configuration/android/streamassist",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/viewassist-setup/satellite-configuration/android/streamassist.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Stream Assist Integration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Browser Display Software",permalink:"/View-Assist/docs/viewassist-setup/satellite-configuration/android/browser"},next:{title:"Browser Mod Integration",permalink:"/View-Assist/docs/viewassist-setup/satellite-configuration/android/browsermod"}},d={},l=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Additional Notes",id:"additional-notes",level:3},{value:"Microphone State",id:"microphone-state",level:4}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Stream Assist integration is used to receive the RTSP stream from the Android device to do wake word detection.  Stream Assist depends on a Home Assistant Assist being configured."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://youtu.be/DkRCgv2LzR8",children:(0,t.jsx)(s.img,{src:"https://img.youtube.com/vi/DkRCgv2LzR8/mqdefault.jpg",alt:""})})}),"\n",(0,t.jsxs)(s.p,{children:["Detailed install video:  ",(0,t.jsx)(s.a,{href:"https://youtu.be/DkRCgv2LzR8",children:"https://youtu.be/DkRCgv2LzR8"})]}),"\n",(0,t.jsxs)(s.p,{children:["Stream Assist Github: ",(0,t.jsx)(s.a,{href:"https://github.com/AlexxIT/StreamAssist",children:"https://github.com/AlexxIT/StreamAssist"})]}),"\n",(0,t.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Open HACS (typically in side navigation in your Home Assistant instance)"}),"\n",(0,t.jsx)(s.li,{children:"Go to Integrations"}),"\n",(0,t.jsx)(s.li,{children:"Click the 3 dots (upper top corner)"}),"\n",(0,t.jsx)(s.li,{children:"Choose Custom repositories"}),"\n",(0,t.jsxs)(s.li,{children:["Copy paste ",(0,t.jsx)(s.code,{children:"AlexxIT/StreamAssist"})]}),"\n",(0,t.jsx)(s.li,{children:"Go to Category: Integration"}),"\n",(0,t.jsx)(s.li,{children:"Click Add"}),"\n",(0,t.jsx)(s.li,{children:"Choose Stream Assist"}),"\n",(0,t.jsx)(s.li,{children:"Click Install"}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{title:"Restart Required",type:"danger",children:(0,t.jsxs)(s.p,{children:["You ",(0,t.jsx)(s.strong,{children:"must"})," restart Home Assistant to complete the installation."]})}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Once Home Assistant has restarted, Go to ",(0,t.jsx)(s.strong,{children:"Settings"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Choose ",(0,t.jsx)(s.strong,{children:"Devices and Services"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click ",(0,t.jsx)(s.strong,{children:"+ Add Integration"})," button at bottom right"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Search for ",(0,t.jsx)(s.em,{children:"Stream Assist"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Give the device a name (eg streamassist-livingroom)"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Enter the Stream URL for the microphone software you are using being sure to replace the example IP address with your IP tablet device's IP address"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Example format for RTPMic ",(0,t.jsx)(s.code,{children:"rtp://192.168.0.152:55555"})]}),"\n",(0,t.jsxs)(s.li,{children:["Example format for IPWebcam video and audio ",(0,t.jsx)(s.code,{children:"rtsp://192.168.0.152:8080/h264_ulaw.sdp"})," or ",(0,t.jsx)(s.code,{children:"rtsp://192.168.0.152:8080/pcm_ulaw.sdp"})]}),"\n",(0,t.jsxs)(s.li,{children:["Example format for IPWebcam audio only ",(0,t.jsx)(s.code,{children:"http://192.168.0.152:8080/audio.wav"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The media player device should be set to the device you'd like the audio to play from.  We recommend using the media player provided by Browser Mod."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"You can use any media player you wish and some users leverage the media player provided by Fully Kiosk or other integrations depending on their specific use case."})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["You can choose a sound effect to alert when Assist is expecting a command.  You can find many free sound effects at Pixabay.  Here is one you may like.  Pixabay has tons of free sounds.  The one I chose for testing is: ",(0,t.jsx)(s.a,{href:"https://pixabay.com/sound-effects/system-notification-199277/",children:"https://pixabay.com/sound-effects/system-notification-199277/"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"After uploading to your Home Assistant local media, you can specify using media-source syntax as follows:"}),"\n",(0,t.jsx)(s.p,{children:"Enter this value to add it to your configuration:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"media-source://media_source/local/system-notification-199277.mp3"})}),"\n",(0,t.jsx)(s.p,{children:"Docker users may need to modify their paths like this:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"media-source://media_source/media/system-notification-199277.mp3"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,t.jsxs)(s.p,{children:["For help finding your tablet's IP address, see ",(0,t.jsx)(s.a,{href:"/docs/misc/find-ip",children:"this guide"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Additional installation and configuration can be found here:\n",(0,t.jsx)(s.a,{href:"https://github.com/AlexxIT/StreamAssist?tab=readme-ov-file#installation",children:"https://github.com/AlexxIT/StreamAssist?tab=readme-ov-file#installation"})]}),"\n",(0,t.jsx)(s.h4,{id:"microphone-state",children:"Microphone State"}),"\n",(0,t.jsx)(s.p,{children:"Upon restart, the Microphone for Stream Assist is often in the off state. Before attempting to use, you'll need to make sure it is on for it to recognize voice prompts. As part of the control automation discussed later, we'll make sure this mic is always on."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:i(7244).A+"",width:"1057",height:"719"})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7244:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/sa-micstate-1caf7cc81fe2f6569ea7a8c6e397efad.png"},8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>a});var t=i(6540);const n={},o=t.createContext(n);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);