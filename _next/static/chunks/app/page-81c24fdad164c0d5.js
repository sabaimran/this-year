(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6503:function(e,t,i){Promise.resolve().then(i.bind(i,2402))},2402:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var n=i(7437),r=i(2265),a=i(5293),o=i(535),s=i(1994),l=i(3335);let c=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:i,variant:r,size:o,asChild:d=!1,...h}=e,u=d?a.g7:"button";return(0,n.jsx)(u,{className:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,l.m6)((0,s.W)(t))}(c({variant:r,size:o,className:i})),ref:t,...h})});d.displayName="Button";var h=i(8293),u=i(9415),b=i(7168);function x(e){let{prompt:t,onNext:i}=e;return(0,n.jsxs)(u.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},className:"max-w-2xl w-full text-center relative",children:[(0,n.jsx)("h2",{className:"text-3xl font-light text-blue-800 mb-8",children:t}),(0,n.jsx)(d,{onClick:i,variant:"ghost",size:"icon",className:"absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200",children:(0,n.jsx)(b.Z,{className:"h-6 w-6"})})]})}var v=i(2489);function f(e){let{prompts:t,isOpen:i,onClose:r,onSelectPrompt:a}=e;return(0,n.jsxs)(u.E.div,{initial:{x:-320},animate:{x:i?0:-320},transition:{duration:.3,ease:"easeInOut"},className:"fixed left-0 top-0 bottom-0 w-80 bg-white shadow-lg overflow-y-auto z-10",children:[(0,n.jsxs)("div",{className:"sticky top-0 bg-white z-20 p-4 flex justify-between items-center border-b",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold text-blue-800",children:"All Prompts"}),(0,n.jsx)(d,{variant:"ghost",size:"icon",onClick:r,children:(0,n.jsx)(v.Z,{})})]}),(0,n.jsx)("div",{className:"p-4",children:Object.entries(t).map(e=>{let[t,i]=e;return(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("h3",{className:"text-lg font-medium text-blue-600 mb-2",children:t}),(0,n.jsx)("ul",{className:"space-y-2",children:i.map((e,t)=>(0,n.jsx)("li",{className:"text-gray-700 hover:bg-blue-50 p-2 rounded transition-colors duration-200 cursor-pointer",onClick:()=>a(e),children:e},t))})]},t)})})]})}function m(e,t){let i;let n=Object.values(e).flat();do i=n[Math.floor(Math.random()*n.length)];while(i===t&&n.length>1);return i}let g={"Health & Well-being":["How has your physical health changed this year?","What new healthy habits have you adopted?"],"Money & Finances":["What financial goals did you achieve this year?","How has your relationship with money evolved?"],"Work & Career":["What was your biggest professional accomplishment?","How has your work-life balance improved?"],"Social Life & Relationships":["Which relationships grew stronger this year?","How have you become a better friend/partner/family member?"],"Education & Development":["What new skills did you learn this year?","How have you grown intellectually?"],"Location & Tangibles":["How has your living situation changed or improved?","What meaningful objects did you acquire or let go of?"],"Adventure & Creativity":["What new experiences did you have this year?","How have you expressed your creativity?"],"Values & Purpose":["How have your values been clarified or changed?","In what ways did you live out your purpose?"],"State of the Self":["How has your self-awareness grown?","What personal challenges have you overcome?"]};function p(){let[e,t]=(0,r.useState)(""),[i,a]=(0,r.useState)(!1);(0,r.useEffect)(()=>{t(m(g))},[]);let o=function(e,t){for(let[i,n]of Object.entries(e))if(n.includes(t))return i;return"'Uncategorized'"}(g,e);return(0,n.jsxs)("div",{className:"flex h-screen bg-gradient-to-br from-blue-50 to-green-50",children:[(0,n.jsx)(f,{prompts:g,isOpen:i,onClose:()=>a(!1),onSelectPrompt:e=>{t(e),a(!1)}}),(0,n.jsxs)("main",{className:"flex-grow flex flex-col items-center justify-center p-4 relative transition-all duration-300 ease-in-out",style:{marginLeft:i?"320px":"0"},children:[(0,n.jsx)(d,{variant:"ghost",size:"icon",className:"absolute top-4 left-4 text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200",onClick:()=>a(!i),children:(0,n.jsx)(h.Z,{})}),(0,n.jsx)("div",{className:"text-sm text-blue-600 mb-4",children:o}),(0,n.jsx)(x,{prompt:e,onNext:()=>{t(m(g,e))}})]})]})}}},function(e){e.O(0,[776,971,117,744],function(){return e(e.s=6503)}),_N_E=e.O()}]);