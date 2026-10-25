(()=> {
const KEY="myLearningOS.v2";
const S=[
{id:"Biology",icon:"🧬",x:450,y:100,t:["What is life?","Cells: the basic unit","DNA and heredity","Evolution by natural selection"]},
{id:"History",icon:"🏛️",x:175,y:190,t:["How do historians study the past?","Prehistory and archaeology","Agriculture and civilization","Empires and exchange"]},
{id:"Physics",icon:"⚛️",x:725,y:190,t:["What does physics study?","Motion and speed","Energy","Gravity and orbits"]},
{id:"Chemistry",icon:"🧪",x:690,y:410,t:["What is matter made of?","Atoms and elements","Chemical bonds","Chemical reactions"]},
{id:"Economics",icon:"📈",x:450,y:500,t:["What is economics?","Supply and demand","Incentives","Trade and specialization"]},
{id:"Business",icon:"💼",x:175,y:410,t:["What is a business?","Revenue, costs and profit","Understanding customers","Testing a business idea"]},
{id:"Philosophy",icon:"💭",x:300,y:305,t:["What is philosophy?","How do we know?","Ethics and choices","Arguments and reasoning"]},
{id:"Technology",icon:"💻",x:600,y:305,t:["What is technology?","How does the internet work?","What is an algorithm?","What is artificial intelligence?"]}
];
// Each connection includes the most relevant lesson index for both subjects.
const L=[
["Biology","Chemistry","Living things are made of molecules, and cells depend on chemical reactions.",1,3],
["Biology","History","Fossils and archaeology help us understand how life and environments changed over time.",3,1],
["Biology","Philosophy","Biology explores what life is; philosophy asks how we know and justify what we believe.",0,1],
["Physics","Chemistry","Atoms, bonds and chemical changes follow physical principles involving energy and matter.",2,1],
["Physics","Technology","Technology applies physics to design tools, machines and systems that work.",2,0],
["History","Technology","New technologies change societies, while historical needs shape which inventions spread.",2,0],
["History","Economics","Trade, resources and incentives help explain how societies and empires developed.",3,3],
["History","Philosophy","Ideas and ethical arguments influence laws, institutions and historical decisions.",3,2],
["Business","Economics","Businesses make choices within markets shaped by supply, demand, costs and incentives.",1,1],
["Business","Technology","Digital tools help businesses test ideas, understand customers and deliver services.",3,1],
["Technology","Philosophy","Artificial intelligence raises questions about evidence, responsibility and ethical choices.",3,2],
["Chemistry","History","Materials and chemical discoveries have influenced trade, technology and human societies.",1,3]
];
const esc=v=>String(v??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
const state=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch{return {}}};
const done=id=>{const raw=state().completed?.[id];return Array.isArray(raw)?[...new Set(raw.filter(i=>Number.isInteger(i)&&i>=0&&i<4))]:[]};
const count=id=>done(id).length;
const status=id=>count(id)===0?"Not started":count(id)===4?"Lessons complete":"Learning";
const dueReviews=()=>{const s=state(),now=Date.now();return Object.values(s.review||{}).filter(r=>r&&S.some(x=>x.id===r.subject)&&Number.isInteger(r.index)&&r.index>=0&&r.index<4&&Number.isFinite(Date.parse(r.nextReview))&&Date.parse(r.nextReview)<=now)};
let selected="Biology",filter="Explore",query="",zoom=window.matchMedia("(max-width:700px)").matches?0.8:1,activeConnection=-1,viewMode="Graph";
const restoreKey="myLearningOS.knowledgeMapPosition";
const app=document.getElementById("app");
function render(){
const st=state(),due=dueReviews();
let visible=S.filter(s=>(s.id+" "+s.t.join(" ")).toLowerCase().includes(query.toLowerCase()));
if(filter==="Review"){const ids=new Set(due.map(r=>r.subject));visible=visible.filter(s=>ids.has(s.id))}
if(filter==="My Progress")visible=visible.filter(s=>count(s.id)>0);
if(!visible.some(s=>s.id===selected)&&visible.length)selected=visible[0].id;
const a=S.find(s=>s.id===selected)||S[0],by=Object.fromEntries(S.map(s=>[s.id,s]));
const dueCount=due.length,totalDone=S.reduce((n,s)=>n+count(s.id),0),totalLessons=S.length*4;
const coursesComplete=S.filter(s=>count(s.id)===4).length;
const active=activeConnection>=0?L[activeConnection]:null;
const lineMarkup=L.map((l,i)=>{
const one=by[l[0]],two=by[l[1]],isActive=i===activeConnection,isRelated=l[0]===selected||l[1]===selected;
return '<g class="ku-link '+(isActive?"is-active ":"")+(isRelated?"is-related":"")+'" data-connection="'+i+'" tabindex="0" role="button" aria-label="Tap to explain the connection between '+l[0]+' and '+l[1]+'" pointer-events="all"><line class="ku-line-visible" x1="'+one.x+'" y1="'+one.y+'" x2="'+two.x+'" y2="'+two.y+'"/><line class="ku-line-hit" x1="'+one.x+'" y1="'+one.y+'" x2="'+two.x+'" y2="'+two.y+'" stroke="transparent" stroke-width="32" stroke-linecap="round" pointer-events="stroke"/></g>';
}).join("");
const nodes=S.map(s=>'<g tabindex="0" role="button" aria-label="Explore '+s.id+'" data-subject="'+s.id+'" class="ku-node '+(count(s.id)===4?"complete":count(s.id)>0?"learning":"new")+' '+(s.id===selected?"selected":"")+'" transform="translate('+s.x+' '+s.y+')"><rect x="-78" y="-35" width="156" height="70" rx="18"/><text class="ku-icon" y="-7">'+s.icon+'</text><text class="ku-name" y="15">'+s.id+'</text><text class="ku-status" y="27">'+status(s.id)+'</text></g>').join("");
const related=L.map((l,i)=>({l,i})).filter(x=>x.l[0]===a.id||x.l[1]===a.id);
const connectionDetail=active?'<div id="ku-connection-detail" class="ku-connection-detail"><div class="ku-connection-detail-top"><span class="ku-connection-symbol">↔</span><div><small>WHY THESE SUBJECTS CONNECT</small><h3>'+esc(active[0])+' + '+esc(active[1])+'</h3></div><button class="ku-close-connection" data-close-connection aria-label="Close connection explanation">×</button></div><p>'+esc(active[2])+'</p><div class="ku-connection-lessons"><a href="/subjects/'+active[0].toLowerCase()+'/#lesson-'+active[3]+'"><span>'+by[active[0]].icon+'</span><span><small>RELATED LESSON · '+active[0]+'</small><strong>'+esc(by[active[0]].t[active[3]])+'</strong></span><b>↗</b></a><a href="/subjects/'+active[1].toLowerCase()+'/#lesson-'+active[4]+'"><span>'+by[active[1]].icon+'</span><span><small>RELATED LESSON · '+active[1]+'</small><strong>'+esc(by[active[1]].t[active[4]])+'</strong></span><b>↗</b></a></div></div>':'';
app.innerHTML='<div class="topbar"><a class="brand" href="/">🧠 My Learning OS</a><nav class="nav"><a href="/">Home</a><a href="/search.html">Search</a><a href="/projects.html">Projects</a><a href="/review.html">Review</a><a class="active" href="/knowledge.html">Knowledge Map</a></nav></div>'+
'<nav class="mobile-nav"><a href="/"><span>⌂</span><small>Home</small></a><a href="/#learning-areas"><span>▦</span><small>Learn</small></a><a href="/projects.html"><span>◫</span><small>Projects</small></a><a href="/review.html"><span>↻</span><small>Review</small></a><details class="mobile-more"><summary><span>•••</span><small>More</small></summary><div class="mobile-more-menu"><a href="/search.html">🔎 Search</a><a href="/knowledge.html">🗺️ Knowledge Map</a><a href="/tutor.html">👩‍🏫 Tutor</a></div></details></nav>'+
'<main class="ku-page"><header class="ku-heading"><span class="eyebrow">YOUR PERSONAL LEARNING SPACE</span><h1>Knowledge Universe</h1><p>Explore what you’re learning and discover how ideas connect.</p></header>'+
'<section class="ku-stats"><div><strong>'+S.length+'</strong><span>subjects</span></div><div><strong>'+totalDone+' / '+totalLessons+'</strong><span>lessons completed</span></div><div><strong>'+coursesComplete+' / '+S.length+'</strong><span>courses completed</span></div></section>'+
'<section class="ku-panel"><div class="ku-panel-head"><div><h2>Your knowledge map</h2><p>Tap a subject or connection line to explore related ideas.</p></div><div class="ku-zoom"><button data-zoom="-1" aria-label="Zoom out">−</button><button data-zoom="1" aria-label="Zoom in">+</button><button data-reset>Reset</button></div></div>'+
'<div class="ku-view-toggle" role="group" aria-label="Choose knowledge view"><button data-view="Graph" class="'+(viewMode==="Graph"?"active":"")+'">✣ Graph view</button><button data-view="List" class="'+(viewMode==="List"?"active":"")+'">☷ List view</button></div><div class="ku-map-viewport" style="display:'+(viewMode==="Graph"?"block":"none")+'"><div class="ku-map-canvas" style="transform:scale('+zoom+')"><svg viewBox="60 35 780 525" aria-label="Interactive map of all eight connected subjects">'+lineMarkup+'<g class="ku-center"><circle cx="450" cy="305" r="44"/><text x="450" y="300">🧠</text><text x="450" y="320">My Knowledge</text></g>'+nodes+'</svg></div></div><div class="ku-list-view" style="display:'+(viewMode==="List"?"grid":"none")+'">'+S.map(s=>'<button class="ku-list-card '+(s.id===selected?"active":"")+'" data-subject="'+s.id+'"><span class="ku-list-card-icon">'+s.icon+'</span><span class="ku-list-card-copy"><strong>'+s.id+'</strong><small>'+count(s.id)+' of 4 lessons · '+status(s.id)+'</small><span class="ku-progress"><i style="width:'+(count(s.id)*25)+'%"></i></span></span><b>›</b></button>').join("")+'</div>'+connectionDetail+'<div class="ku-all-connections"><h3>Explore a connection</h3><p>Choose any link to reveal why the subjects are related.</p><div class="ku-all-connection-grid">'+L.map((l,i)=>'<button class="ku-all-connection" data-connection="'+i+'"><span>'+by[l[0]].icon+' ↔ '+by[l[1]].icon+'</span><strong>'+l[0]+' + '+l[1]+'</strong><small>'+esc(l[2])+'</small></button>').join("")+'</div></div><div class="ku-legend"><span><i class="ku-dot ku-dot-new"></i> Not started</span><span><i class="ku-dot ku-dot-learning"></i> Learning</span><span><i class="ku-dot ku-dot-complete"></i> Lessons complete</span></div></section>'+
'<section class="ku-panel"><div class="ku-panel-head"><div><h2>Explore topics</h2><p>Open a lesson or focus on topics due for review.</p></div></div><label class="ku-search">⌕ <input id="ku-search" type="search" value="'+esc(query)+'" placeholder="Search subjects or topics…" aria-label="Search subjects or topics"></label><div class="ku-filters"><button data-filter="Explore" class="'+(filter==="Explore"?"active":"")+'">All subjects</button><button data-filter="Review" class="'+(filter==="Review"?"active":"")+'">Due for review ('+dueCount+')</button><button data-filter="My Progress" class="'+(filter==="My Progress"?"active":"")+'">Started learning</button></div>'+
'<div class="ku-columns"><div class="ku-subject-list">'+(visible.length?visible.map(s=>'<button class="ku-subject-row '+(s.id===selected?"active":"")+'" data-subject="'+s.id+'"><span class="ku-subject-icon">'+s.icon+'</span><span class="ku-subject-copy"><strong>'+s.id+'</strong><small>'+count(s.id)+'/4 lessons · '+status(s.id)+(due.some(r=>r.subject===s.id)?" · Review due":"")+'</small><span class="ku-progress"><i style="width:'+(count(s.id)*25)+'%"></i></span></span><b>›</b></button>').join(""):'<p>No subjects match. Try All subjects or clear your search.</p>')+'</div>'+
'<div class="ku-detail"><div class="ku-detail-top"><span class="ku-detail-icon">'+a.icon+'</span><span class="ku-status-pill">'+status(a.id)+'</span></div><h3>'+a.id+'</h3><p class="ku-detail-intro">'+count(a.id)+' of 4 lessons completed. '+(due.some(r=>r.subject===a.id)?due.filter(r=>r.subject===a.id).length+' lesson review(s) due.':"Progress updates when you mark lessons complete in the lesson page.")+'</p><div class="ku-progress ku-detail-bar"><i style="width:'+(count(a.id)*25)+'%"></i></div><div class="ku-topic-list">'+a.t.map((t,i)=>'<a class="ku-topic '+(done(a.id).includes(i)?"done":"")+'" href="/subjects/'+a.id.toLowerCase()+'/#lesson-'+i+'"><span class="ku-topic-check">'+(done(a.id).includes(i)?"✓":i+1)+'</span><span><strong>'+esc(t)+'</strong><small>'+(done(a.id).includes(i)?"Lesson completed":"Open lesson")+(due.some(r=>r.subject===a.id&&r.index===i)?" · Review due":"")+'</small></span><b>↗</b></a>').join("")+'</div><div class="ku-connections"><h4>Connected ideas</h4>'+(related.length?related.map(({l,i})=>{const other=l[0]===a.id?l[1]:l[0];return '<button class="ku-connection" data-connection="'+i+'"><strong>↔ '+other+'</strong><small>'+esc(l[2])+'</small><b>›</b></button>'}).join(""):'<p>More connections will appear as the map grows.</p>')+'</div></div></div></section><p class="ku-footnote">Progress reflects lesson completions saved in this browser. “Courses completed” means all four lessons are marked complete; it does not claim mastery. Review labels use your saved review schedule.</p></main>';
function showConnection(i,scroll){const viewport=app.querySelector(".ku-map-viewport"),left=viewport?.scrollLeft||0,top=viewport?.scrollTop||0;activeConnection=i;render();const nextViewport=app.querySelector(".ku-map-viewport");if(nextViewport){nextViewport.scrollLeft=left;nextViewport.scrollTop=top;}if(scroll&&window.matchMedia("(max-width:700px)").matches)app.querySelector("#ku-connection-detail")?.scrollIntoView({behavior:"smooth",block:"nearest"});}
app.querySelectorAll("[data-subject]").forEach(el=>{const go=()=>{selected=el.dataset.subject;activeConnection=-1;render();if(window.matchMedia("(max-width:700px)").matches)app.querySelector(".ku-detail")?.scrollIntoView({behavior:"smooth",block:"start"});};el.addEventListener("click",go);el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();go();}})});
const mapSvg=app.querySelector(".ku-map-canvas svg");
let mapPointerStart=null;
const connectionAtPoint=(clientX,clientY)=>{
 const matrix=mapSvg?.getScreenCTM();if(!matrix)return -1;
 const point=mapSvg.createSVGPoint();point.x=clientX;point.y=clientY;
 const p=point.matrixTransform(matrix.inverse());
 let nearest=-1,best=Infinity;
 L.forEach((line,i)=>{
  const one=by[line[0]],two=by[line[1]],dx=two.x-one.x,dy=two.y-one.y,len2=dx*dx+dy*dy;
  const t=Math.max(0,Math.min(1,((p.x-one.x)*dx+(p.y-one.y)*dy)/len2));
  const dist=Math.hypot(p.x-(one.x+t*dx),p.y-(one.y+t*dy));
  if(dist<best){best=dist;nearest=i;}
 });
 return best<=70?nearest:-1;
};
mapSvg?.addEventListener("pointerdown",e=>{mapPointerStart={x:e.clientX,y:e.clientY};});
mapSvg?.addEventListener("pointerup",e=>{
 const start=mapPointerStart;mapPointerStart=null;
 if(!start||Math.hypot(e.clientX-start.x,e.clientY-start.y)>12)return;
 if(e.target.closest("[data-subject]"))return;
 const marked=e.target.closest("[data-connection]");
 const index=marked&&mapSvg.contains(marked)?Number(marked.dataset.connection):connectionAtPoint(e.clientX,e.clientY);
 if(index>=0)showConnection(index,false);
});
mapSvg?.addEventListener("keydown",e=>{
 const marked=e.target.closest("[data-connection]");
 if(marked&&(e.key==="Enter"||e.key===" ")){e.preventDefault();showConnection(Number(marked.dataset.connection),true);}
});
app.querySelectorAll(".ku-connections [data-connection], .ku-all-connections [data-connection]").forEach(el=>el.addEventListener("click",()=>showConnection(Number(el.dataset.connection),true)));
app.querySelectorAll("[data-view]").forEach(el=>el.addEventListener("click",()=>{viewMode=el.dataset.view;render()}));
app.querySelectorAll("[data-filter]").forEach(el=>el.addEventListener("click",()=>{filter=el.dataset.filter;render()}));
app.querySelector("#ku-search").addEventListener("input",e=>{query=e.target.value;render();const q=app.querySelector("#ku-search");q.focus();q.setSelectionRange(query.length,query.length)});
app.querySelectorAll("[data-zoom]").forEach(el=>el.addEventListener("click",()=>{zoom=Math.max(.7,Math.min(1.3,zoom+Number(el.dataset.zoom)*.1));render()}));
app.querySelector("[data-reset]").addEventListener("click",()=>{zoom=window.matchMedia("(max-width:700px)").matches?0.8:1;query="";filter="Explore";selected="Biology";activeConnection=-1;viewMode="Graph";render()});
app.querySelector("[data-close-connection]")?.addEventListener("click",()=>{activeConnection=-1;render()});
}
app.addEventListener("click",e=>{const link=e.target.closest('a[href^="/subjects/"]');if(!link)return;const viewport=app.querySelector(".ku-map-viewport");try{sessionStorage.setItem(restoreKey,JSON.stringify({pageY:window.scrollY,viewportLeft:viewport?.scrollLeft||0,viewportTop:viewport?.scrollTop||0,zoom,selected,filter,query,activeConnection,viewMode}));}catch{}});
function restoreKnowledgeMapPosition(){let saved;try{saved=sessionStorage.getItem(restoreKey);if(!saved)return;const pos=JSON.parse(saved);if(!pos||typeof pos!=="object")return;selected=S.some(s=>s.id===pos.selected)?pos.selected:selected;filter=["Explore","Review","My Progress"].includes(pos.filter)?pos.filter:filter;query=typeof pos.query==="string"?pos.query:query;zoom=Number.isFinite(pos.zoom)?Math.max(.7,Math.min(1.3,pos.zoom)):zoom;activeConnection=Number.isInteger(pos.activeConnection)?pos.activeConnection:-1;viewMode=["Graph","List"].includes(pos.viewMode)?pos.viewMode:viewMode;render();requestAnimationFrame(()=>requestAnimationFrame(()=>{window.scrollTo(0,Number(pos.pageY)||0);const viewport=app.querySelector(".ku-map-viewport");if(viewport){viewport.scrollLeft=Number(pos.viewportLeft)||0;viewport.scrollTop=Number(pos.viewportTop)||0;}try{sessionStorage.removeItem(restoreKey);}catch{}}));}catch{}}
render();
window.addEventListener("pageshow",restoreKnowledgeMapPosition);

})();