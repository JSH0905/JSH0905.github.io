(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{824:function(e,s,l){Promise.resolve().then(l.bind(l,9500))},9500:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return A}});var a=l(3827),t=l(4090),i=l(5259),c=l(9152),d=l(7267),r=l(5636),n=l(4655),x=l(2504),o=l(703),m=l(8792),h=l(6082),j=l(7166);let p=[{id:"about",label:"자기소개"},{id:"mainProjects",label:"주요 프로젝트"},{id:"sideProjects",label:"사이드 프로젝트"},{id:"skills",label:"기술 스택"},{id:"certificates",label:"자격증"},{id:"awards",label:"수상 경력"},{id:"education",label:"학력 / 교육"},{id:"language",label:"어학"}];function u(){let[e,s]=(0,t.useState)(!1),[l,i]=(0,t.useState)(!1);(0,t.useEffect)(()=>{let e=()=>{i(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let c=()=>{s(!1)};return(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsx)("button",{onClick:()=>{s(!e)},className:"fixed z-50 p-2 bg-white rounded-md shadow-md top-4 left-4",children:e?(0,a.jsx)(h.Z,{size:24}):(0,a.jsx)(j.Z,{size:24})}),(0,a.jsx)("nav",{className:"".concat(l?e?"fixed":"hidden":"fixed"," w-64 h-screen p-6 border-r bg-white z-40"),children:(0,a.jsxs)("div",{className:"sticky space-y-4 top-6",children:[(0,a.jsx)("h3",{className:"mb-6 text-lg font-semibold",children:"목차"}),(0,a.jsx)("ul",{className:"space-y-2",children:p.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.id),className:"block p-2 text-gray-600 transition-colors rounded hover:text-blue-600 hover:bg-gray-50",onClick:l?c:void 0,children:e.label})},e.id))})]})})]})}var f=e=>{let{title:s,headCount:l,memberRole:t,period:i,role:c,features:d,achievements:r,skills:n,repositories:x,onShowDetail:h}=e;return(0,a.jsxs)("div",{className:"p-6 space-y-4 rounded-lg shadow-sm bg-gray-50",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between",children:[(0,a.jsxs)("div",{className:"flex-col items-center space-y-1",children:[(0,a.jsx)("h3",{className:"text-xl font-bold text-blue-800",children:s}),(0,a.jsxs)("p",{className:"text-sm text-gray-600",children:["팀원 수 : ",l,"명(",t,")"]})]}),(0,a.jsx)("span",{className:"text-sm text-gray-500",children:i})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("h4",{className:"font-semibold text-gray-700",children:["\uD83E\uDDD1\uD83C\uDFFB‍\uD83D\uDCBB 담당 역할 : ",c]})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-semibold text-gray-700",children:"\uD83D\uDD0D 구현 기능"}),(0,a.jsx)("ul",{className:"pl-5 space-y-2 text-gray-600 list-disc",children:d.map((e,s)=>(0,a.jsx)("li",{children:e},s))})]}),r&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-semibold text-gray-700",children:"\uD83D\uDCC8 성과"}),(0,a.jsx)("ul",{className:"pl-5 space-y-2 text-gray-600 list-disc",children:r.map((e,s)=>(0,a.jsx)("li",{children:e},s))})]}),(0,a.jsxs)("div",{className:"flex flex-wrap items-center gap-4 pt-8",children:[(0,a.jsx)("div",{className:"pl-2",children:(0,a.jsx)("p",{children:"[README 및 소스코드]"})}),(x||[]).map((e,s)=>(0,a.jsxs)(m.default,{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-gray-600 hover:text-blue-600",children:[(0,a.jsx)(o.default,{src:"assets/github-mark.svg",alt:"GitHub",width:16,height:16,className:"w-4 h-4"})," ",e.name]},s))]}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:n.map((e,s)=>(0,a.jsx)("span",{className:"px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full",children:e},s))})})]})]})},g=e=>{let{title:s,icon:l,skills:t}=e;return(0,a.jsxs)("div",{className:"p-4 border rounded-lg",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-3",children:[l,(0,a.jsx)("h3",{className:"font-semibold",children:s})]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map((e,s)=>(0,a.jsx)("span",{className:"px-3 py-1 bg-gray-100 rounded-full text-sm",children:e},s))})]})},b=e=>{let{school:s,major:l,period:t,grade:i}=e;return(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:s}),(0,a.jsx)("p",{className:"text-gray-600",children:l}),(0,a.jsxs)("p",{className:"pt-3 text-gray-600",children:["전체 평점 : ",i," / 4.5"]})]}),(0,a.jsx)("span",{className:"text-gray-500",children:t})]})},N=e=>{let{name:s,date:l}=e;return(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("span",{className:"font-semibold",children:s}),(0,a.jsx)("span",{className:"text-gray-500",children:l})]})},v=e=>{let{title:s,organizer:l,date:t,description:i,sub_description:c}=e;return(0,a.jsxs)("div",{className:"p-4 rounded-lg bg-gray-50",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between mb-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold text-blue-800",children:s}),l&&(0,a.jsxs)("p",{className:"text-gray-600",children:["수여 기관: ",l]})]}),(0,a.jsx)("span",{className:"text-gray-500",children:t})]}),(0,a.jsxs)("div",{className:"flex-col items-center gap-2",children:[(0,a.jsxs)("p",{className:"text-gray-600",children:["출품작 : ",i]}),c&&(0,a.jsx)(m.default,{href:c,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 pt-3 text-sm text-gray-600 hover:text-blue-600",children:"관련 기사"})]})]})},y=l(9102),w=l.n(y),k=l(314),S=l(9234);let D=[{id:"architecture",title:"시스템 설계"},{id:"database",title:"DB 설계"},{id:"design",title:"디자인"},{id:"backend",title:"백엔드 기능"}];var C=e=>{var s,l,i,c,d,r,n,x,m,j,p;let{project:u,onClose:f}=e,[g,b]=(0,t.useState)(0);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"jsx-e89170ede354f9dc relative",children:[(0,a.jsx)("div",{style:{zIndex:9999,position:"fixed",top:0,left:0,right:0,bottom:0},className:"jsx-e89170ede354f9dc fixed inset-0 bg-black bg-opacity-50",children:(0,a.jsx)("div",{className:"jsx-e89170ede354f9dc fixed inset-0 flex items-center justify-center",children:(0,a.jsxs)("div",{className:"jsx-e89170ede354f9dc bg-white w-full max-w-4xl mx-4 rounded-lg shadow-lg overflow-hidden",children:[(0,a.jsxs)("div",{className:"jsx-e89170ede354f9dc p-4 border-b flex justify-between items-center",children:[(0,a.jsx)("h2",{className:"jsx-e89170ede354f9dc text-xl font-bold",children:u.title}),(0,a.jsx)("button",{onClick:f,className:"jsx-e89170ede354f9dc p-2 hover:bg-gray-100 rounded-full",children:(0,a.jsx)(h.Z,{className:"w-6 h-6"})})]}),(0,a.jsx)("div",{className:"jsx-e89170ede354f9dc flex-1 overflow-y-auto p-6",children:(0,a.jsxs)("div",{className:"jsx-e89170ede354f9dc relative",children:[(0,a.jsx)("button",{onClick:()=>{b(e=>(e-1+D.length)%D.length)},className:"jsx-e89170ede354f9dc absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors",children:(0,a.jsx)(k.Z,{className:"w-6 h-6"})}),(0,a.jsx)("button",{onClick:()=>{b(e=>(e+1)%D.length)},className:"jsx-e89170ede354f9dc absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors",children:(0,a.jsx)(S.Z,{className:"w-6 h-6"})}),(0,a.jsxs)("div",{className:"jsx-e89170ede354f9dc px-16 min-h-[60vh]",children:[(0,a.jsx)("h3",{className:"jsx-e89170ede354f9dc text-xl font-semibold mb-6",children:D[g].title}),(0,a.jsxs)("div",{className:"jsx-e89170ede354f9dc space-y-6",children:[0===g&&(0,a.jsxs)("div",{className:"jsx-e89170ede354f9dc space-y-4",children:[(0,a.jsx)("div",{className:"jsx-e89170ede354f9dc relative w-full aspect-[16/9] max-w-3xl mx-auto",children:(0,a.jsx)(o.default,{src:(null===(s=u.architecture)||void 0===s?void 0:s.image)||"/placeholder-architecture.png",alt:"Architecture Diagram",fill:!0,className:"object-contain",priority:!0})}),(0,a.jsx)("p",{className:"jsx-e89170ede354f9dc text-gray-700",children:null===(l=u.architecture)||void 0===l?void 0:l.description}),(0,a.jsx)("ul",{className:"jsx-e89170ede354f9dc list-disc pl-5 space-y-2",children:null===(i=u.architecture)||void 0===i?void 0:i.items.map((e,s)=>(0,a.jsx)("li",{className:"jsx-e89170ede354f9dc text-gray-700",children:e},s))})]}),1===g&&(0,a.jsxs)("div",{className:"jsx-e89170ede354f9dc space-y-4",children:[(0,a.jsx)("div",{className:"jsx-e89170ede354f9dc relative w-full aspect-[16/9] max-w-3xl mx-auto",children:(0,a.jsx)(o.default,{src:(null===(c=u.database)||void 0===c?void 0:c.image)||"/placeholder-database.png",alt:"Database Schema",fill:!0,className:"object-contain",priority:!0})}),(0,a.jsx)("p",{className:"jsx-e89170ede354f9dc text-gray-700",children:null===(d=u.database)||void 0===d?void 0:d.description}),(0,a.jsx)("ul",{className:"jsx-e89170ede354f9dc list-disc pl-5 space-y-2",children:null===(r=u.database)||void 0===r?void 0:r.items.map((e,s)=>(0,a.jsx)("li",{className:"jsx-e89170ede354f9dc text-gray-700",children:e},s))})]}),2===g&&(0,a.jsxs)("div",{className:"jsx-e89170ede354f9dc space-y-4",children:[(0,a.jsx)("div",{className:"jsx-e89170ede354f9dc relative w-full aspect-[16/9] max-w-3xl mx-auto",children:(0,a.jsx)(o.default,{src:(null===(n=u.design)||void 0===n?void 0:n.image)||"/placeholder-design.png",alt:"Design Preview",fill:!0,className:"object-contain",priority:!0})}),(0,a.jsx)("p",{className:"jsx-e89170ede354f9dc text-gray-700",children:null===(x=u.design)||void 0===x?void 0:x.description}),(0,a.jsx)("ul",{className:"jsx-e89170ede354f9dc list-disc pl-5 space-y-2",children:null===(m=u.design)||void 0===m?void 0:m.items.map((e,s)=>(0,a.jsx)("li",{className:"jsx-e89170ede354f9dc text-gray-700",children:e},s))})]}),3===g&&(0,a.jsxs)("div",{className:"jsx-e89170ede354f9dc space-y-4",children:[(0,a.jsx)("p",{className:"jsx-e89170ede354f9dc text-gray-700",children:null===(j=u.backend)||void 0===j?void 0:j.description}),(0,a.jsx)("ul",{className:"jsx-e89170ede354f9dc list-disc pl-5 space-y-2",children:null===(p=u.backend)||void 0===p?void 0:p.items.map((e,s)=>(0,a.jsx)("li",{className:"jsx-e89170ede354f9dc text-gray-700",children:e},s))})]})]})]}),(0,a.jsx)("div",{className:"jsx-e89170ede354f9dc flex justify-center gap-2 mt-8",children:D.map((e,s)=>(0,a.jsx)("button",{onClick:()=>b(s),className:"jsx-e89170ede354f9dc "+"w-3 h-3 rounded-full transition-colors ".concat(g===s?"bg-blue-600":"bg-gray-300")},e.id))})]})})]})})}),(0,a.jsx)(w(),{id:"e89170ede354f9dc",children:"body{overflow:hidden}"})]})})},T=()=>{let e=new Date().getFullYear();return(0,a.jsx)("footer",{className:"w-full py-6 mt-12 bg-gray-100 border-t",children:(0,a.jsx)("div",{className:"container max-w-4xl px-4 mx-auto text-center",children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-2",children:[(0,a.jsxs)("p",{className:"text-sm text-gray-600",children:["\xa9 ",e," 정성훈 포트폴리오"]}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"본 포트폴리오는 상업적 목적으로 사용되지 않으며, 개인 역량 소개를 위해 제작되었습니다."}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"모든 프로젝트 정보 및 콘텐츠는 교육 및 참고 목적으로만 제공됩니다."})]})})})};let M={title:"환자와 보호자를 위한 원격 헬스케어 시비스 [만수무강]",architecture:{title:"시스템 설계",image:"assets/mansumugang_architecture.png",description:"시스템 아키텍처 설명...",items:["Spring Boot 기반의 RESTful API 서버","Redis를 활용한 실시간 채팅 시스템","AWS 인프라 구성 및 CI/CD 파이프라인"]},database:{title:"DB 설계",image:"/db-schema.png",description:"데이터베이스 설계 설명...",items:["User, Chat, Server 등 주요 엔티티 관계","Redis 캐싱 전략","데이터 정규화 및 인덱싱 전략"]},design:{title:"디자인",image:"/design-mockup.png",description:"UI/UX 디자인 설명...",items:["반응형 웹 디자인","사용자 친화적 인터페이스","접근성 고려한 디자인"]},backend:{title:"백엔드 기능",description:"주요 백엔드 기능 설명...",items:["실시간 채팅 시스템","사용자 인증/인가","서버 상태 모니터링"]}};function A(){let[e,s]=(0,t.useState)(null);return(0,a.jsxs)("div",{className:"flex flex-col min-h-screen bg-white",children:[(0,a.jsxs)("div",{className:"flex flex-1",children:[(0,a.jsx)(u,{}),(0,a.jsx)("main",{className:"flex items-center justify-center flex-1 w-full p-4 md:p-8 md:ml-64",children:(0,a.jsxs)("div",{className:"w-full max-w-4xl space-y-12",children:[(0,a.jsx)("header",{className:"space-y-8",children:(0,a.jsxs)("div",{className:"flex flex-col gap-8 md:flex-row md:items-start",children:[(0,a.jsx)("div",{className:"relative flex-shrink-0 w-40 mx-auto overflow-hidden rounded-lg h-52 md:mx-0",children:(0,a.jsx)(o.default,{src:"assets/profileImage.jpg",alt:"Profile",fill:!0,className:"object-cover",priority:!0})}),(0,a.jsx)("div",{className:"flex-grow mt-4 space-y-4 md:mt-0",children:(0,a.jsxs)("div",{className:"flex-col justify-between",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h1",{className:"text-4xl font-bold text-center md:text-left",children:"정성훈"})}),(0,a.jsxs)("div",{className:"mt-16 space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 text-gray-600",children:[(0,a.jsx)(i.Z,{className:"w-4 h-4"}),(0,a.jsx)("span",{children:"2000tjdgns@naver.com"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-gray-600",children:[(0,a.jsx)(c.Z,{className:"w-4 h-4"}),(0,a.jsx)("span",{children:"010-6209-6156"})]}),(0,a.jsxs)(m.default,{href:"https://github.com/JSH0905",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-gray-600 hover:text-blue-600",children:[(0,a.jsx)(o.default,{src:"assets/github-mark.svg",alt:"GitHub",width:16,height:16,className:"w-4 h-4"}),(0,a.jsx)("span",{children:"GitHub"})]})]})]})})]})}),(0,a.jsxs)("section",{id:"about",className:"space-y-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-2xl font-bold border-b",children:"저는 이런 사람입니다!"}),(0,a.jsxs)("div",{className:"space-y-6 prose text-gray-600 max-w-none",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-lg text-black",children:"[오류를 즐기는 개발자]"}),(0,a.jsxs)("p",{children:["개발을 하면 종종 처음보는 기술들이나 예상치 못한 오류에 막힐 때가 있습니다. ",(0,a.jsx)("br",{}),"그럴때마다 다양한 정보를 수집하고, 다른 사람이 작성한 코드를 작성한 코드를 그대로 가져다 쓰는 것이 아닌 코드를 분석하고 동작 원리를 파악하려고 시도합니다. 때로는 그 과정이 고통스럽지만 차근차근 하나씩 공부하며 제 코드에 알맞게 적용하고 결국 문제를 해결하면 그것만한 쾌감이 없다고 생각합니다."]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-lg text-black",children:"[소통을 중요시하는 개발자]"}),(0,a.jsxs)("p",{children:["서비스의 효율적인 개발을 위해서는 요구사항이 정확히 정립되어야 하며 개발 진행 상황에 대해서 팀원들이 서로 정확히 인지하고 있어야 한다고 생각하고 그 열쇠가 소통이라고 생각합니다.",(0,a.jsx)("br",{}),"프로젝트를 몇 차례 진행하며 소통이 잘되었을 때와 그렇지 않았을 때 모두를 경험함으로써 개발에 있어서 팀원과의 소통이 얼마나 중요한지 깨달을 수 있었습니다."]})]})]})]}),(0,a.jsxs)("section",{id:"mainProjects",className:"space-y-8",children:[(0,a.jsx)("h2",{className:"pb-2 text-2xl font-bold border-b",children:"주요 프로젝트"}),(0,a.jsx)("div",{className:"space-y-12",children:(0,a.jsx)(f,{title:"마인크래프트 사설서버 및 공식 홈페이지 [거북이 놀이터]",headCount:"3",memberRole:"게임 개발 2명, 홈페이지 풀스택 개발 1명",period:"2025.01 - 2025.02",role:"풀스택 개발",features:["OAuth 2.0을 이용한 간편 회원가입 및 간편 로그인 기능","Spring Security, JWT, Redis를 이용한 사용자 인증 시스템","사용자 정보 조회 기능","인게임에서의 활동을 공유하는 커뮤니티 기능","인게임 데이터 및 커뮤니티 활동 데이터를 이용한 랭킹 시스템","출석 체크 및 출석 보상 기능","운영진을 제외한 서비스 이용자 수 집계 기능","Github Actions, Nginx, Docker, AWS의 EC2, S3, CodeDeploy를 이용한 blue-green 전략의 무중단 배포 구현","AWS의 Elastic Load Balancer, Route 53을 이용한 HTTPS 연결 설정"],skills:["Next.js","Spring Boot","Spring Security","MySQL","Redis","Docker","AWS","Github Actions","OAuth 2.0","JWT"],repositories:[{url:"https://github.com/Team-Turtle-Minecraft",name:"거북이 놀이터"},{url:"https://github.com/Team-MansuMugang",name:"거북이 놀이터 프론트엔드 "},{url:"https://github.com/Team-Turtle-Minecraft/Turtule-Playground-Backend",name:"거북이 놀이터 백엔드"}]})}),(0,a.jsx)("div",{className:"space-y-12",children:(0,a.jsx)(f,{title:"환자와 보호자를 위한 원격 헬스케어 서비스 [만수무강]",headCount:"5",memberRole:"프론트엔드 개발 2명, 백엔드 개발 2명, 안드로이드 개발 1명",period:"2024.07 - 2024.09",role:"백엔드 담당",features:["회원가입, 로그인, 회원 정보 관리 등의 회원 기능","Spring Security, JWT, Redis를 이용한 사용자 인증 시스템","보호자 회원의 환자 관리 기능","환자의 위치 정보 관리 시스템","Open AI의 Whisper AI를 이용한 음성메모 기능","보호자 회원 간 정보 공유 및 공감을 위한 커뮤니티 기능","Firebase Cloud Messaging을 이용한 푸시 알림 기능"],skills:["Spring Boot","Spring Security","Redis","MySQL","Docker","Open AI","FCM","OpenFeign"],repositories:[{url:"https://github.com/Team-MansuMugang",name:"만수무강"},{url:"https://github.com/Team-MansuMugang/mansumugang-backend",name:"만수무강 백엔드"}],projectDetail:M,onShowDetail:()=>s(M)})}),(0,a.jsx)("div",{className:"space-y-12",children:(0,a.jsx)(f,{title:"경주 내 음식점 추천 및 검색 서비스[오늘 뭐 먹노?]",headCount:"3",memberRole:"프론트엔드 개발 1명, 백엔드 개발 2명",period:"2023.10 - 2023.12",role:"팀장, 백엔드 담당",features:["회원가입, 로그인 등의 회원 기능","카테고리별 음식점 랜덤 추천 기능","음식점 이름 검색, 카테고리 필터링을 이용한 음식점 검색 기능","Kakao 지도 API를 이용한 음식점 상세 보기 기능"],skills:["Node.js","MSSQL","Python"],repositories:[{url:"https://github.com/JSH0905/Today-Restaurant",name:"오늘 뭐 먹노?"}]})})]}),(0,a.jsxs)("section",{id:"skills",className:"space-y-6",children:[(0,a.jsx)("h2",{className:"pb-2 text-2xl font-bold border-b",children:"기술 스택"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,a.jsx)(g,{title:"Backend",icon:(0,a.jsx)(d.Z,{className:"w-5 h-5 text-blue-600"}),skills:["Java","Spring Boot"]}),(0,a.jsx)(g,{title:"Database",icon:(0,a.jsx)(r.Z,{className:"w-5 h-5 text-green-600"}),skills:["MySQL","MSSQL","Redis"]}),(0,a.jsx)(g,{title:"DevOps / Cloud",icon:(0,a.jsx)(n.Z,{className:"w-5 h-5 text-purple-600"}),skills:["AWS EC2","S3","Route53","ELB","CodeDeploy","Docker","FCM"]}),(0,a.jsx)(g,{title:"Tools",icon:(0,a.jsx)(x.Z,{className:"w-5 h-5 text-orange-600"}),skills:["Git","Github","Figma","Notion","Swagger"]})]})]}),(0,a.jsxs)("section",{id:"certificates",className:"space-y-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-2xl font-bold border-b",children:"자격증"}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(N,{name:"SQL 개발자(SQLD)",date:"2024.12"}),(0,a.jsx)(N,{name:"정보처리기사",date:"2024.09"})]})]}),(0,a.jsxs)("section",{id:"awards",className:"space-y-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-2xl font-bold border-b",children:"수상 경력"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)(v,{title:"2024 경주 지역문제 해결 해커톤(대상)",organizer:"경북ICT융합산업진흥협회",date:"2024.12",description:"경주시 정책 소통 플랫폼 - 함께, 경주",sub_description:"https://www.veritas-a.com/news/articleView.html?idxno=534327#google_vignette"}),(0,a.jsx)(v,{title:"교내 우수 논문상",date:"2023.08",description:"만수무강"})]})]}),(0,a.jsxs)("section",{id:"education",className:"space-y-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-2xl font-bold border-b",children:"학력 / 교육"}),(0,a.jsx)("div",{className:"space-y-4",children:(0,a.jsx)(b,{school:"동국대학교 WISE 캠퍼스",major:"컴퓨터공학과",grade:"3.84",period:"2019.03 - 2025.02"})})]}),(0,a.jsxs)("section",{id:"language",className:"space-y-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-2xl font-bold border-b",children:"어학"}),(0,a.jsx)("div",{className:"space-y-2",children:(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("span",{className:"font-semibold",children:"TOEIC"}),(0,a.jsx)("span",{className:"text-gray-500",children:"760"})]})})]}),e&&(0,a.jsx)(C,{project:e,onClose:()=>s(null)})]})})]}),(0,a.jsx)("div",{className:"left-0 right-0 z-50 w-full",children:(0,a.jsx)(T,{})})]})}}},function(e){e.O(0,[150,971,69,744],function(){return e(e.s=824)}),_N_E=e.O()}]);