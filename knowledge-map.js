(()=> {
const KEY="myLearningOS.v2";
const S=[
{id:"Biology",icon:"🧬",t:["What is life?","Cells: the basic unit","DNA and heredity","Evolution by natural selection"]},
{id:"History",icon:"🏛️",t:["How do historians study the past?","Prehistory and archaeology","Agriculture and civilization","Empires and exchange"]},
{id:"Physics",icon:"⚛️",t:["What does physics study?","Motion and speed","Energy","Gravity and orbits"]},
{id:"Chemistry",icon:"🧪",t:["What is matter made of?","Atoms and elements","Chemical bonds","Chemical reactions"]},
{id:"Economics",icon:"📈",t:["What is economics?","Supply and demand","Incentives","Trade and specialization"]},
{id:"Business",icon:"💼",t:["What is a business?","Revenue, costs and profit","Understanding customers","Testing a business idea"]},
{id:"Philosophy",icon:"💭",t:["What is philosophy?","How do we know?","Ethics and choices","Arguments and reasoning"]},
{id:"Technology",icon:"💻",t:["What is technology?","How does the internet work?","What is an algorithm?","What is artificial intelligence?"]}
];
const L=[
["Biology","Chemistry","Living things rely on chemical reactions, and cells use molecules to function."],["Biology","History","Fossils and ancient environments connect the history of life with Earth's past."],["Biology","Philosophy","Biology provides evidence that informs questions about life, knowledge and scientific reasoning."],["Physics","Chemistry","Atomic structure, energy and chemical bonds rely on physical principles."],["Physics","Technology","Engineering applies ideas about forces, energy and materials to build useful things."],["History","Technology","Inventions change societies, while societies shape which technologies are developed."],["History","Economics","Trade, resources and incentives help explain historical events and social change."],["History","Philosophy","Ideas and ethical arguments influence laws, institutions and historical decisions."],["Business","Economics","Businesses make decisions within markets shaped by supply, demand and incentives."],["Business","Technology","Digital tools help businesses test ideas, reach customers and improve services."],["Technology","Philosophy","AI and digital systems raise questions about evidence, responsibility and decision-making."],["Chemistry","History","Materials, metals and chemical discoveries have shaped technology and human societies."]
];
const esc=v=>String(v??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
const state=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch{return {}}};
const validDone=id=>{const raw=state().completed?.[id];return Array.isArray(raw)?[...new Set(raw.filter(i=>Number.isInteger(i)&&i>=0&&i<4))]:[]};
const count=id=>validDone(id).length;
const courseStatus=id=>count(id)===0?"Not started":count(id)===4?"Lessons complete":"In progress";
const dueReviews=()=>{const s=state(),now=Date.now();return Object.values(s.review||{}).filter(r=>r&&S.some(x=>x.id===r.subject)&&Number.isFinite(Date.parse(r.nextReview))&&Date.parse(r.nextReview)<=now)};
let selected="Biology",filter="Explore",query="";
const app=document.getElementById("app");
function render(){
 const due=dueReviews();
 let visible=S.filter(s=>(s.id+" "+s.t.join(" ")).toLowerCase().includes(query.toLowerCase()));
 if(filter==="Review"){const ids=new Set(due.map(r=>r.subject));visible=visible.filter(s=>ids.has(s.id))}
 if(filter==="My Progress")visible=visible.filter(s=>count(s.id)>0);
 if(!visible.some(s=>s.id===selected)&&visible.length)selected=visible[0].id;
 const a=S.find(s=>s.id===selected)||S[0],rels=L.filter(l=>l[0]===a.id||l[1]===a.id).slice(0,4);
 const totalDone=S.reduce((n,s)=>n+count(s.id),0),totalLessons=S.length*4;
 const complete=S.filter(s=>count(s.id)===4).length,dueFor=due.filter(r=>r.subject===a.id);
 const pos=[{x:170,y:115},{x:630,y:115},{x:170,y:385},{x:630,y:385}];
 const lines=rels.map((l,i)=>'<line class="ku-link-line" x1="400" y1="250" x2="'+pos[i].x+'" y2="'+pos[i].y+'"/>').join("");
 const outer=rels.map((l,i)=>{const id=l[0]===a.id?l[1]:l[0],o=S.find(s=>s.id===id),p=pos[i];return '<g class="ku-node" transform="translate('+p.x+' '+p.y+')"><rect x="-95" y="-37" width="190" height="74" rx="16"/><text class="ku-node-icon" y="-10">'+o.icon+'</text><text class="ku-node-name" y="11">'+esc(id)+'</text><text class="ku-node-progress" y="25">'+count(id)+'/4 lessons</text></g>'}).join("");
 const center='<g class="ku-focus-node" transform="translate(400 250)"><rect x="-105" y="-48" width="210" height="96" rx="21"/><text class="ku-node-icon" y="-18">'+a.icon+'</text><text class="ku-focus-name" y="7">'+esc(a.id)+'</text><text class="ku-focus-progress" y="27">'+count(a.id)+'/4 lessons · '+courseStatus(a.id)+'</text></g>';
 const descriptions=rels.map(l=>{const id=l[0]===a.id?l[1]:l[0];return '<button class="ku-connection" data-subject="'+id+'"><span class="ku-connection-arrow">↔</span><span class="ku-connection-copy"><strong>'+esc(id)+'</strong><small>'+esc(l[2])+'</small></span><b>›</b></button>'}).join("");
 app.innerHTML='<div class="topbar"><a class="brand" href="/">🧠 My Learning OS</a><nav class="nav"><a href="/">Home</a><a href="/search.html">Search</a><a href="/projects.html">Projects</a><a href="/review.html">Review</a><a class="active" href="/knowledge.html">Knowledge Map</a><a href="/tutor.html">Tutor</a></nav></div>'+
 '<nav class="mobile-nav" aria-label="Quick navigation"><a href="/"><span>⌂</span><small>Home</small></a><a href="/#learning-areas"><span>▦</span><small>Learn</small></a><a href="/projects.html"><span>◫</span><small>Projects</small></a><a href="/review.html"><span>↻</span><small>Review</small></a><details class="mobile-more"><summary><span>•••</span><small>More</small></summary><div class="mobile-more-menu"><a href="/search.html">🔎 Search</a><a href="/knowledge.html">🗺️ Knowledge Map</a><a href="/tutor.html">👩‍🏫 Tutor</a></div></details></nav>'+
 '<main class="ku-page"><header class="ku-heading"><span class="eyebrow">YOUR PERSONAL LEARNING SPACE</span><h1>Knowledge Universe</h1><p>A calmer map of what you’re learning and how ideas fit together.</p></header>'+
 '<section class="ku-stats"><div><strong>'+totalDone+' / '+totalLessons+'</strong><span>lessons completed</span></div><div><strong>'+complete+' / '+S.length+'</strong><span>courses completed</span></div><div><strong>'+due.length+'</strong><span>reviews due</span></div></section>'+
 '<section class="ku-panel"><div class="ku-panel-head"><div><h2>Connection map</h2><p>One subject at a time. Choose a connection to refocus the map.</p></div><button class="ku-reset" data-reset>Reset map</button></div>'+
 '<div class="ku-map-viewport"><svg viewBox="0 0 800 500" role="img" aria-label="Map centered on '+esc(a.id)+' and its related subjects">'+lines+outer+center+'</svg></div><p class="ku-map-caption">Showing '+rels.length+' direct connections for <strong>'+esc(a.id)+'</strong>.</p><div class="ku-map-legend"><span><i class="lesson-dot"></i> Lesson progress</span><span>Progress comes from completed lessons saved on this device.</span></div></section>'+
 '<section class="ku-panel"><div class="ku-panel-head"><div><h2>Find a subject</h2><p>Search, browse, or focus on lessons you need to revisit.</p></div></div><label class="ku-search"><span>⌕</span><input id="ku-search" type="search" value="'+esc(query)+'" placeholder="Search subjects or lessons…" aria-label="Search subjects or lessons"></label>'+
 '<div class="ku-filters"><button data-filter="Explore" class="'+(filter==="Explore"?"active":"")+'">All subjects</button><button data-filter="Review" class="'+(filter==="Review"?"active":"")+'">Due for review ('+due.length+')</button><button data-filter="My Progress" class="'+(filter==="My Progress"?"active":"")+'">Started learning</button></div>'+
 '<div class="ku-subject-list">'+(visible.length?visible.map(s=>'<button class="ku-subject-row '+(s.id===selected?"active":"")+'" data-subject="'+s.id+'"><span class="ku-subject-icon">'+s.icon+'</span><span class="ku-subject-copy"><strong>'+esc(s.id)+'</strong><small>'+count(s.id)+'/4 lessons · '+courseStatus(s.id)+(due.some(r=>r.subject===s.id)?" · Review due":"")+'</small><span class="ku-progress"><i style="width:'+(count(s.id)*25)+'%"></i></span></span><b>›</b></button>').join(""):'<p class="ku-empty">'+(filter==="Review"?"Nothing is due for review right now.":"No subjects match. Try All subjects or clear your search.")+'</p>')+'</div></section>'+
 '<section class="ku-panel ku-detail"><div class="ku-detail-top"><span class="ku-detail-icon">'+a.icon+'</span><span class="ku-status-pill">'+courseStatus(a.id)+'</span></div><h2>'+esc(a.id)+'</h2><p class="ku-detail-intro">'+count(a.id)+' of 4 lessons completed. '+(dueFor.length?dueFor.length+' lesson review(s) due.':"Progress updates when you mark lessons complete in the lesson page.")+'</p><div class="ku-progress ku-detail-bar"><i style="width:'+(count(a.id)*25)+'%"></i></div>'+
 '<div class="ku-topic-list">'+a.t.map((t,i)=>'<a class="ku-topic '+(validDone(a.id).includes(i)?"done":"")+'" href="/subjects/'+a.id.toLowerCase()+'/#lesson-'+i+'"><span class="ku-topic-check">'+(validDone(a.id).includes(i)?"✓":i+1)+'</span><span><strong>'+esc(t)+'</strong><small>'+(validDone(a.id).includes(i)?"Completed":"Open lesson")+(due.some(r=>r.subject===a.id&&r.index===i)?" · Review due":"")+'</small></span><b>↗</b></a>').join("")+'</div><div class="ku-connections"><h3>Why these subjects connect</h3>'+descriptions+'</div><p class="ku-footnote">“Lessons complete” means all four lessons are marked complete. Quiz completion is tracked separately; answers are not automatically graded by this map.</p></section></main>';
 app.querySelectorAll("[data-subject]").forEach(el=>el.addEventListener("click",()=>{selected=el.dataset.subject;render();app.querySelector(".ku-panel").scrollIntoView({behavior:"smooth",block:"start"})}));
 app.querySelectorAll("[data-filter]").forEach(el=>el.addEventListener("click",()=>{filter=el.dataset.filter;render()}));
 app.querySelector("#ku-search").addEventListener("input",e=>{query=e.target.value;render();const q=app.querySelector("#ku-search");q.focus();q.setSelectionRange(query.length,query.length)});
 app.querySelector("[data-reset]").addEventListener("click",()=>{selected="Biology";filter="Explore";query="";render()});
}
render();
})();