"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2040],{5692:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(4848),o=i(8453);i(6540),i(2303);const s={sidebar_position:1,title:"Microphone Streaming Software"},r="Installing Microphone Streaming Software",l={id:"satellite-configuration/android/microphone",title:"Microphone Streaming Software",description:"In order to leverage your tablet as a voice assistant satellite, you'll need to have an application installed that will be responsible for streaming the audio from your microphone on your local network. We'll leverage Stream Assist running on your Home Assistant instance to access those streams and pass the audio into the voice pipeline. We'll cover setting up Stream Assist in a future section.",source:"@site/docs/satellite-configuration/android/microphone.md",sourceDirName:"satellite-configuration/android",slug:"/satellite-configuration/android/microphone",permalink:"/View-Assist/docs/satellite-configuration/android/microphone",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/satellite-configuration/android/microphone.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Microphone Streaming Software"},sidebar:"tutorialSidebar",previous:{title:"Android Configuration",permalink:"/View-Assist/docs/satellite-configuration/android/"},next:{title:"Browser Display Software",permalink:"/View-Assist/docs/satellite-configuration/android/browser"}},a={},c=[{value:"IP Webcam",id:"ip-webcam",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"RtpMic",id:"rtpmic",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Configuration",id:"configuration-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installing-microphone-streaming-software",children:"Installing Microphone Streaming Software"}),"\n",(0,t.jsx)(n.p,{children:"In order to leverage your tablet as a voice assistant satellite, you'll need to have an application installed that will be responsible for streaming the audio from your microphone on your local network. We'll leverage Stream Assist running on your Home Assistant instance to access those streams and pass the audio into the voice pipeline. We'll cover setting up Stream Assist in a future section."}),"\n",(0,t.jsx)(n.p,{children:"The following Android applications have been tested and found to be working. The current recommendation is to use IP Webcam, however the choice is ultimately yours. You only need to install and configure ONE of the following applications."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#ip-webcam",children:"IP Webcam"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#rtpmic",children:"RtpMic"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"ip-webcam",children:"IP Webcam"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/-7cHfqZMa1c",children:(0,t.jsx)(n.img,{src:"https://img.youtube.com/vi/-7cHfqZMa1c/mqdefault.jpg",alt:""})})}),"\n",(0,t.jsxs)(n.p,{children:["Detailed install video: ",(0,t.jsx)(n.a,{href:"https://youtu.be/-7cHfqZMa1c",children:"https://youtu.be/-7cHfqZMa1c"})]}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download and install the app from the ",(0,t.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=com.pas.webcam",children:"Google Play Store"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Find the IPWebcam Icon and tap it to launch."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Scroll down until you see the ",(0,t.jsx)(n.em,{children:"IP Webcam settings"})," section."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Tap on ",(0,t.jsx)(n.strong,{children:"Power management"})," and under ",(0,t.jsx)(n.em,{children:"Misc"})," Turn on ",(0,t.jsx)(n.strong,{children:"Disable notification"})," and ",(0,t.jsx)(n.strong,{children:"Stream on device boot"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Tap back to get back to the main setting screen."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Scroll down until you see the ",(0,t.jsx)(n.em,{children:"Misc"})," section and tap on ",(0,t.jsx)(n.strong,{children:"Audio mode"}),". Choose ",(0,t.jsx)(n.strong,{children:"Audio Only"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["While you can stream both audio and video via IPWebcam, we recommend using the ",(0,t.jsx)(n.strong,{children:"Audio Only"})," mode to reduce bandwidth and minimize video being streamed to your HA instance. Many users also prefer this due to the location of these tablet devices on the interior of their home such as in bedrooms."]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Scroll down under the ",(0,t.jsx)(n.strong,{children:"Service Control"})," heading and tap on ",(0,t.jsx)(n.strong,{children:"Optional Permissions"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Tap ",(0,t.jsx)(n.strong,{children:"Allow streaming in background"})," and accept Android system permissions when prompted."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Tap on ",(0,t.jsx)(n.strong,{children:"Show camera overlay"}),". This will prevent another window from appearing over your dashboard."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Tap back and then tap on ",(0,t.jsx)(n.strong,{children:"Start server"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When prompted, Allow all permissions as requested by Android OS (camera, microphone, etc.)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"rtpmic",children:"RtpMic"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"RtpMic can only be installed via the Google Play store on devices running older versions of Android OS. Users have been successful manually sideloading the application on newer versions but that is beyond this tutorial."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/SkyErx7TE30",children:(0,t.jsx)(n.img,{src:"https://img.youtube.com/vi/SkyErx7TE30/mqdefault.jpg",alt:""})})}),"\n",(0,t.jsxs)(n.p,{children:["Detailed install video:\n",(0,t.jsx)(n.a,{href:"https://youtu.be/SkyErx7TE30",children:"https://youtu.be/SkyErx7TE30"})]}),"\n",(0,t.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download and install the app from the ",(0,t.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=com.rtpmic&hl=en_US&gl=US",children:"Google Play Store"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configuration-1",children:"Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Find the icon on your table and launch RtpMic."}),"\n",(0,t.jsx)(n.li,{children:"Scroll down and start server.  Allow all permissions."}),"\n",(0,t.jsxs)(n.li,{children:["Enter the settings page and set:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You may want to increase gain if your mic detect is low on the meter.  I have set mine to 9 dB for the ThinkSmart device I am using"}),"\n",(0,t.jsx)(n.li,{children:"audio codec to G.711a"}),"\n",(0,t.jsx)(n.li,{children:"target addr to 255.255.255.255"}),"\n",(0,t.jsx)(n.li,{children:"target port to 55555"}),"\n",(0,t.jsx)(n.li,{children:"Auto start streaming"}),"\n",(0,t.jsx)(n.li,{children:"Start at boot"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Allow any permissions Android system may prompt for"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);