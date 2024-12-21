(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6503:function(e,t,o){Promise.resolve().then(o.bind(o,2317))},2317:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return C}});var i=o(7437),r=o(2265),a=o(5293),n=o(535),l=o(1994),s=o(3335);function c(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return(0,s.m6)((0,l.W)(t))}let d=(0,n.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=r.forwardRef((e,t)=>{let{className:o,variant:r,size:n,asChild:l=!1,...s}=e,u=l?a.g7:"button";return(0,i.jsx)(u,{className:c(d({variant:r,size:n,className:o})),ref:t,...s})});u.displayName="Button";var h=o(8293),p=o(1548),m=o(5274),g=o(1533),f=o(2451),x=o(407),y=o(401),b=o(8930),v=o(7500);function w(e){let{prompt:t}=e;return(0,i.jsx)(v.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{type:"spring",stiffness:200,damping:20},className:"max-w-2xl w-full text-center relative",children:(0,i.jsx)("h2",{className:"text-3xl font-light text-blue-800 mb-8",children:t.prompt})},t.prompt)}var j=o(2489);function k(e){let{reflectionPrompts:t,prospectingPrompts:o,isOpen:r,onClose:a,onSelectPrompt:n,showProspecting:l,promptState:s}=e;return(0,i.jsxs)(v.E.div,{initial:{x:-320},animate:{x:r?0:-320},transition:{duration:.3,ease:"easeInOut"},className:"fixed left-0 top-0 bottom-0 w-80 bg-white shadow-lg overflow-y-auto z-10",children:[(0,i.jsxs)("div",{className:"sticky top-0 bg-white z-20 p-4 flex justify-between items-center border-b",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold text-blue-800",children:l?"Envision":"Reflect"}),(0,i.jsx)(u,{variant:"ghost",size:"icon",onClick:a,children:(0,i.jsx)(j.Z,{})})]}),(0,i.jsx)("div",{className:"p-4",children:Object.entries(l?o:t).map(e=>{let[t,o]=e;return(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsx)("h3",{className:"text-lg font-medium text-blue-600 mb-2",children:t}),(0,i.jsx)("ul",{className:"space-y-2",children:o.map((e,t)=>{var o,r;let a=l?null===(o=s.prospecting[e])||void 0===o?void 0:o.completed:null===(r=s.reflecting[e])||void 0===r?void 0:r.completed;return(0,i.jsx)("li",{className:"text-gray-700 hover:bg-blue-50 p-2 rounded transition-colors duration-200 cursor-pointer ".concat(a?"line-through":""),onClick:()=>n(e),children:e},t)})})]},t)})})]})}var N=o(8614);let z=r.forwardRef((e,t)=>{let{className:o,...r}=e;return(0,i.jsx)("textarea",{className:c("flex min-h-[60px] w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",o),ref:t,...r})});z.displayName="Textarea";var S=e=>{let{promptState:t,setShowSummary:o}=e,[a,n]=(0,r.useState)([]);return(0,r.useEffect)(()=>{n([...Object.values(t.reflecting).filter(e=>e.completed).map(e=>({prompt:e,type:"reflecting"})),...Object.values(t.prospecting).filter(e=>e.completed).map(e=>({prompt:e,type:"prospecting"}))])},[t]),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 to-green-50 p-4",children:[(0,i.jsx)("h1",{className:"text-3xl font-bold text-blue-600 mb-8",children:"2024"}),a.length>0?(0,i.jsx)("div",{className:"w-full max-w-4xl space-y-4 max-h-screen overflow-y-auto",children:a.map((e,t)=>{let{prompt:o,type:r}=e;return(0,i.jsxs)(v.E.div,{className:"bg-white p-4 rounded-lg shadow-md ".concat("reflecting"===r?"border-blue-600":"border-green-600"),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2 ".concat("reflecting"===r?"text-blue-700":"text-green-700"),children:o.prompt}),(0,i.jsx)("p",{className:"text-gray-700",children:o.response})]},t)})}):(0,i.jsx)("p",{className:"text-gray-500",children:"No completed prompts yet."}),(0,i.jsx)(u,{variant:"outline",size:"sm",className:"mt-8",onClick:()=>o(!1),children:"Go Back"})]})};let E={"Health & Well-being":["How has your physical health changed?","What new healthy habits have you adopted?","Are you enjoying life?","What made you feel stress this year?","Are you taking any medications?"],"Money & Finances":["What financial goals did you achieve?","How has your relationship with money evolved?"],"Work & Career":["What was your biggest professional accomplishment?","How has your work-life balance changed?"],"Social Life & Relationships":["Which relationships grew stronger?","How have you become a better friend/partner/family member?","Are you & your partner aware of each others' needs and desires?"],"Education & Development":["What new skills did you learn?","How have you grown intellectually?"],"Location & Tangibles":["How has your living situation changed or improved?","What meaningful objects did you acquire or let go of?","Do you have material sufficiency?","Does your home support your goals and values?"],"Adventure & Creativity":["What new experiences did you have?","How have you expressed your creativity?","When did you feel connected to your inner child?"],"Values & Purpose":["How have your values been clarified or changed?","In what ways did you live out your purpose?","Do you have a sense of purpose and direction in life?","Are you living in alignment with your values?","What do you truly value?"],"State of the Self":["What did you learn about yourself?","What personal challenges have you overcome?","What is holding you back from achieving your full potential?","Where did you not try hard enough?","What do you want out of life?"]},W={"Health & Well-being":["How will you improve your physical health?","What new healthy habits will you adopt?"],"Money & Finances":["What are your financial goals?","How do you want your relationship with money to evolve?"],"Work & Career":["What are you hoping to achieve professionally?","How will you show up at work?"],"Social Life & Relationships":["How will you be a better friend, partner, or family member?"],"Education & Development":["What new skills do you want to learn?"],"Location & Tangibles":["Where do you want to live?"],"Adventure & Creativity":["How will you connect with your creativity?","How will you explore?"],"Values & Purpose":["How will you live out your values?"],"State of the Self":["What do you want to be like?","If you only had one year to live, what would you do differently?","What would be awesome and fulfilling?"]};function C(){let[e,t]=(0,r.useState)({prompt:"",completed:!1,response:""}),[o,a]=(0,r.useState)(!1),[n,l]=(0,r.useState)(!1),[s,c]=(0,r.useState)(E),[d,j]=(0,r.useState)({reflecting:{},prospecting:{}}),[C,O]=(0,r.useState)(0),[H,L]=(0,r.useState)(!1),[P,R]=(0,r.useState)(null),[Z,A]=(0,r.useState)(!1);(0,r.useEffect)(()=>{try{let e=localStorage.getItem("reflectionPromptStates"),t=localStorage.getItem("prospectingPromptStates"),o=e?JSON.parse(e):{},i=t?JSON.parse(t):{},r=o&&"object"==typeof o,a=i&&"object"==typeof i;(r||a)&&j({reflecting:r?o:{},prospecting:a?i:{}})}catch(e){console.error("Error loading prompt states:",e)}},[]),(0,r.useEffect)(()=>{d.reflecting&&Object.keys(d.reflecting).length>0&&localStorage.setItem("reflectionPromptStates",JSON.stringify(d.reflecting)),d.prospecting&&Object.keys(d.prospecting).length>0&&localStorage.setItem("prospectingPromptStates",JSON.stringify(d.prospecting))},[d]),(0,r.useEffect)(()=>{var e,o;let i=Object.values(s).flat()[C],r=n?"prospecting":"reflecting";t({prompt:i,completed:(null===(e=d[r][i])||void 0===e?void 0:e.completed)||!1,response:(null===(o=d[r][i])||void 0===o?void 0:o.response)||""})},[s,C,d,n]),(0,r.useEffect)(()=>{let e=e=>{let t=Object.values(s).flat();if("Enter"===e.key&&(e.metaKey||e.ctrlKey)){_();return}switch(e.key){case"ArrowLeft":C>0&&M("prev");break;case"ArrowRight":C<t.length-1&&M("next")}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[C,e.completed,s,e]),(0,r.useEffect)(()=>{O(0),c(n?W:E)},[n]);let M=e=>{let t=Object.values(s).flat(),o="next"===e?C+1:C-1;o<0?o=0:o>=t.length&&(o=t.length-1),O(o)},_=()=>{let t=n?"prospecting":"reflecting";j(o=>({...o,[t]:{...o[t],[e.prompt]:{...e,completed:!0}}})),O(C+1)},I=t=>{let o=n?"prospecting":"reflecting";j(i=>({...i,[o]:{...i[o],[e.prompt]:{...e,response:t}}}))},T=()=>{j({reflecting:{},prospecting:{}})},D=()=>{let e=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),o=document.createElement("a");o.href=t,o.download="promptStates.json",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)},J=function(e,t){for(let[o,i]of Object.entries(e))if(i.includes(t))return o;return"Health & Well-being"}(s,e.prompt),U=Object.values(s).flat();return(0,i.jsxs)("div",{className:"flex h-screen ".concat(n?"bg-gradient-to-br from-purple-50 to-green-50":"bg-gradient-to-br from-blue-50 to-green-50"),children:[(0,i.jsx)(k,{reflectionPrompts:E,prospectingPrompts:W,isOpen:o,onClose:()=>a(!1),onSelectPrompt:e=>{let t=Object.values(s).flat().indexOf(e);-1!==t&&O(t),a(!1),A(!1)},showProspecting:n,promptState:d}),(0,i.jsxs)("main",{className:"flex-grow flex flex-col items-center justify-center p-4 relative transition-all duration-300 ease-in-out",style:{marginLeft:o?"320px":"0"},children:[(0,i.jsx)(u,{variant:"ghost",size:"icon",className:"absolute top-4 left-4 text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200",onClick:()=>a(!o),children:(0,i.jsx)(h.Z,{})}),!Z&&(0,i.jsx)("div",{className:"text-2xl font-bold text-blue-600 mb-4",children:n?"Next Year":"This Year"}),(0,i.jsxs)(v.E.button,{className:"absolute top-4 right-16 text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200 inline-flex items-center gap-2 rounded-md px-3 py-2",onClick:()=>{l(!n)},whileHover:{scale:1.05},whileTap:{scale:.95},initial:!1,animate:{backgroundColor:n?"rgb(239 246 255)":"rgb(243 244 246)"},transition:{type:"spring",stiffness:300,damping:20},children:[(0,i.jsx)(v.E.div,{initial:!1,animate:{rotate:360},transition:{duration:.3},children:n?(0,i.jsx)(m.Z,{className:"w-4 h-4"}):(0,i.jsx)(p.Z,{className:"w-4 h-4"})}),(0,i.jsx)("span",{children:n?"This Year":"Next Year"})]}),(0,i.jsxs)("div",{className:"absolute top-4 right-4",children:[(0,i.jsx)(v.E.button,{className:"text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200 p-2 rounded-lg",onClick:()=>L(!H),whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,i.jsx)(g.Z,{})}),H&&(0,i.jsx)("div",{className:"absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer",onClick:()=>{T(),L(!1)},children:"Start Over"}),(0,i.jsx)("li",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer",onClick:()=>{D(),L(!1)},children:"Export"}),(0,i.jsx)("li",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer",onClick:()=>A(!Z),children:"Summary"})]})})]}),Z?(0,i.jsx)(S,{promptState:d,setShowSummary:A}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-sm text-blue-600 mb-4",children:J}),(0,i.jsxs)("div",{className:"flex items-center justify-center gap-4 mb-4",children:[(0,i.jsx)(u,{variant:"outline",size:"icon",onClick:()=>a(!0),children:(0,i.jsx)(g.Z,{className:"w-4 h-4"})}),(0,i.jsx)(u,{variant:"outline",size:"icon",onClick:()=>M("prev"),disabled:0===C,className:0===C?"opacity-50 cursor-not-allowed":"",children:(0,i.jsx)(f.Z,{className:"w-4 h-4"})}),(0,i.jsx)(u,{variant:"outline",size:"icon",onClick:()=>M("next"),disabled:C===U.length-1,className:C===U.length-1?"opacity-50 cursor-not-allowed":"",children:(0,i.jsx)(x.Z,{className:"w-4 h-4"})}),(0,i.jsxs)(u,{variant:"outline",size:"sm",className:"".concat(e.completed?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"," hover:bg-opacity-80"),onClick:_,disabled:e.completed,onMouseEnter:()=>R("complete"),onMouseLeave:()=>R(null),children:[(0,i.jsx)(y.Z,{className:"w-4 h-4"}),(0,i.jsx)(N.M,{children:"complete"===P&&(0,i.jsx)(v.E.span,{initial:{width:0,opacity:0},animate:{width:"auto",opacity:1},exit:{width:0,opacity:0},className:"ml-2 overflow-hidden whitespace-nowrap",children:e.completed?"Completed":"Mark Completed"})})]}),(0,i.jsxs)(u,{variant:"outline",size:"sm",className:"bg-red-100 text-red-700 hover:bg-opacity-80",onClick:()=>{let t=n?"prospecting":"reflecting";j(o=>{let i={...o};return delete i[t][e.prompt],i}),M("next")},onMouseEnter:()=>R("delete"),onMouseLeave:()=>R(null),children:[(0,i.jsx)(b.Z,{className:"w-4 h-4"}),(0,i.jsx)(N.M,{children:"delete"===P&&(0,i.jsx)(v.E.span,{initial:{width:0,opacity:0},animate:{width:"auto",opacity:1},exit:{width:0,opacity:0},className:"ml-2 overflow-hidden whitespace-nowrap",children:"Delete"})})]})]}),(0,i.jsx)(w,{prompt:e,onNext:()=>M("next")}),(0,i.jsx)(z,{className:"max-w-2xl w-full",placeholder:"Jot down your thoughts here...",value:e.response,onChange:e=>I(e.target.value),rows:3})]})]})]})}}},function(e){e.O(0,[265,971,117,744],function(){return e(e.s=6503)}),_N_E=e.O()}]);