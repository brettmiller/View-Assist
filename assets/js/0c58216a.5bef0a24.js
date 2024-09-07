"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3315],{6931:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(4848),t=i(8453);const o={title:"Stream Assist",sidebar_position:2},r=void 0,a={id:"homeassistant-configuration/streamassistconfig",title:"Stream Assist",description:"Repo//github.com/AlexxIT/StreamAssist",source:"@site/docs/homeassistant-configuration/streamassistconfig.md",sourceDirName:"homeassistant-configuration",slug:"/homeassistant-configuration/streamassistconfig",permalink:"/View-Assist/docs/homeassistant-configuration/streamassistconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/homeassistant-configuration/streamassistconfig.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Stream Assist",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Browser Mod Config",permalink:"/View-Assist/docs/homeassistant-configuration/browsermodconfig"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Additional Notes",id:"additional-notes",level:3},{value:"Microphone State",id:"microphone-state",level:4}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Repo:"})," ",(0,n.jsx)(s.a,{href:"https://github.com/AlexxIT/StreamAssist",children:"https://github.com/AlexxIT/StreamAssist"})]}),"\n",(0,n.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Open HACS (typically in side navigation in your Home Assistant instance)"}),"\n",(0,n.jsx)(s.li,{children:"Go to Integrations"}),"\n",(0,n.jsx)(s.li,{children:"Click the 3 dots (upper top corner)"}),"\n",(0,n.jsx)(s.li,{children:"Choose Custom repositories"}),"\n",(0,n.jsxs)(s.li,{children:["Copy paste ",(0,n.jsx)(s.code,{children:"AlexxIT/StreamAssist"})]}),"\n",(0,n.jsx)(s.li,{children:"Go to Category: Integration"}),"\n",(0,n.jsx)(s.li,{children:"Click Add"}),"\n",(0,n.jsx)(s.li,{children:"Choose Stream Assist"}),"\n",(0,n.jsx)(s.li,{children:"Click Install"}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{title:"Restart Required",type:"danger",children:(0,n.jsxs)(s.p,{children:["You ",(0,n.jsx)(s.strong,{children:"must"})," restart Home Assistant to complete the installation."]})}),"\n",(0,n.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Once Home Assistant has restarted, Go to ",(0,n.jsx)(s.strong,{children:"Settings"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Choose ",(0,n.jsx)(s.strong,{children:"Devices and Services"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Click ",(0,n.jsx)(s.strong,{children:"+ Add Integration"})," button at bottom right"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Search for ",(0,n.jsx)(s.em,{children:"Stream Assist"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Give the device a name (eg streamassist-livingroom)"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Enter the Stream URL for the microphone software you are using being sure to replace the example IP address with your IP tablet device's IP address"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Example format for RTPMic ",(0,n.jsx)(s.code,{children:"rtp://192.168.0.152:55555"})]}),"\n",(0,n.jsxs)(s.li,{children:["Example format for IPWebcam video and audio ",(0,n.jsx)(s.code,{children:"rtsp://192.168.0.152:8080/h264_ulaw.sdp"})]}),"\n",(0,n.jsxs)(s.li,{children:["Example format for IPWebcam audio only ",(0,n.jsx)(s.code,{children:"http://192.168.0.152:8080/audio.wav"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The media player device should be set to the device you'd like the audio to play from.  We recommend using the media player provided by Browser Mod."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"You can use any media player you wish and some users leverage the media player provided by Fully Kiosk or other integrations depending on their specific use case."})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["You can choose a sound effect to alert when Assist is expecting a command.  You can find many free sound effects at Pixabay.  Here is one you may like.  Pixabay has tons of free sounds.  The one I chose for testing is: ",(0,n.jsx)(s.a,{href:"https://pixabay.com/sound-effects/system-notification-199277/",children:"https://pixabay.com/sound-effects/system-notification-199277/"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"After uploading to your Home Assistant local media, you can specify using media-source syntax as follows:"}),"\n",(0,n.jsx)(s.p,{children:"Enter this value to add it to your configuration:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"media-source://media_source/local/system-notification-199277.mp3"})}),"\n",(0,n.jsx)(s.p,{children:"Docker users may need to modify their paths like this:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"media-source://media_source/media/system-notification-199277.mp3"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,n.jsxs)(s.p,{children:["For help finding your tablet's IP address, see this guide:  ",(0,n.jsx)(s.a,{href:"https://github.com/dinki/View-Assist/wiki/Find-IP-of-Android-device",children:"https://github.com/dinki/View-Assist/wiki/Find-IP-of-Android-device"})]}),"\n",(0,n.jsxs)(s.p,{children:["Additional installation and configuration can be found here:\n",(0,n.jsx)(s.a,{href:"https://github.com/AlexxIT/StreamAssist?tab=readme-ov-file#installation",children:"https://github.com/AlexxIT/StreamAssist?tab=readme-ov-file#installation"})]}),"\n",(0,n.jsx)(s.h4,{id:"microphone-state",children:"Microphone State"}),"\n",(0,n.jsx)(s.p,{children:"Upon restart, the Microphone for Stream Assist is often in the off state. Before attempting to use, you'll need to make sure it is on for it to recognize voice prompts. As part of the control automation discussed later, we'll make sure this mic is always on."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/dinki/View-Assist/assets/2521542/f8355663-1653-41bc-ac25-61f806e9c479",alt:"banner"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>a});var n=i(6540);const t={},o=n.createContext(t);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);