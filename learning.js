const SUBJECTS={"Physics":{"icon":"⚛️","desc":"Matter, energy, space, time, forces and the laws that describe nature.","lessons":[["What does physics study?","Physics looks for patterns in nature and describes them using observations, experiments and mathematical models.","A force is a push or pull that can change an object's motion. Gravity is a force between masses.","What forces act on a ball after you throw it upward?","Think about gravity and air resistance."],["Motion and speed","Motion describes how an object's position changes over time.","Speed tells us how much distance an object covers per unit of time. Velocity also includes direction.","How is speed different from velocity?","Velocity includes direction."],["Energy","Energy is the capacity to cause change.","Kinetic energy is associated with motion; potential energy depends on position or arrangement. Energy can be transferred and transformed.","Where does the energy of a falling object go?","It can become kinetic energy and later other forms such as heat or sound."],["Gravity and orbits","Gravity affects falling objects and the motion of planets, moons and satellites.","An orbit is continuous free-fall around a massive body, with gravity continually changing the object's direction.","Why doesn't the Moon simply fall straight into Earth?","It is falling toward Earth while its sideways motion carries it around Earth."]]},"Chemistry":{"icon":"🧪","desc":"Atoms, molecules, reactions and how matter changes.","lessons":[["What is matter made of?","Chemistry studies the composition, structure, properties and transformations of matter.","Atoms are building blocks of ordinary matter. Atoms can join through chemical bonds to form molecules.","How is melting ice different from burning wood?","Melting is a physical change; burning involves chemical reactions that form new substances."],["Atoms and elements","An element is a substance made of atoms with the same number of protons.","The periodic table organizes elements by atomic number and recurring properties.","What makes carbon different from oxygen?","Their atoms have different numbers of protons and therefore are different elements."],["Chemical bonds","Atoms can interact and form bonds that make stable structures.","Ionic bonding involves attraction between charged ions; covalent bonding involves sharing electrons.","Why do atoms form bonds?","Bonding can produce arrangements with lower energy and greater stability."],["Chemical reactions","Chemical reactions rearrange atoms into new combinations.","Reactants become products while the number of each kind of atom is conserved.","What does it mean to balance a chemical equation?","It means representing the same number of each type of atom on both sides."]]},"Biology":{"icon":"🧬","desc":"Life, evolution, cells, organisms and ecosystems.","lessons":[["What is life?","Biology is the scientific study of living things and their interactions.","Known living organisms are made of one or more cells. They use energy, respond to surroundings and populations can evolve.","Why are cells considered the basic units of life?","Cells are the smallest structures that can carry out the core processes of life."],["Cells: the basic unit","Cells are organized structures surrounded by membranes and contain genetic information.","Prokaryotic cells lack a nucleus; eukaryotic cells have a nucleus and membrane-bound organelles.","Why do cells need membranes?","Membranes separate the cell from its environment and regulate exchange."],["DNA and heredity","DNA stores biological information used in cells.","Genes are DNA sequences that contribute to traits through their effects on molecules and development.","How can DNA influence a trait?","A gene can provide instructions for a functional RNA or protein, affecting cellular processes."],["Evolution by natural selection","Evolution is change in inherited characteristics of populations over generations.","Natural selection occurs when heritable variation affects survival or reproduction, changing trait frequencies over time.","How can evolution create complex adaptations without a plan?","Small inherited differences can be filtered by selection across many generations."]]},"History":{"icon":"🏛️","desc":"People, civilizations, institutions and ideas changing through time.","lessons":[["How do historians study the past?","History investigates past human lives using evidence and careful interpretation.","Sources include letters, laws, objects, buildings, images and oral accounts. Historians ask who created a source, when, why and with what limitations.","How might two sources describe the same event differently?","They may reflect different experiences, purposes, audiences or available information."],["Prehistory and archaeology","Prehistory refers to periods before written records in a particular context.","Archaeologists study material evidence such as tools, bones, buildings and sediments to reconstruct past lives.","What can a stone tool tell us?","It can provide clues about technology, activities and sometimes the environment of its makers."],["Agriculture and civilization","The domestication of plants and animals changed how many communities obtained food.","Farming could support larger settled populations, but it also brought new forms of labor, inequality and disease.","Why did agriculture change human societies so deeply?","It changed food production, settlement, population size, work and social organization."],["Empires and exchange","Empires connected large populations through political power, trade, migration and cultural exchange.","Expansion could spread languages, technologies and religions while also involving coercion, conflict and inequality.","Why do historians study multiple perspectives?","Different groups experienced the same historical process differently."]]},"Economics":{"icon":"📈","desc":"Markets, incentives, resources and how people make choices.","lessons":[["What is economics?","Economics studies how people and societies make choices when resources are limited.","Because resources are scarce, choosing one use often means giving up another. This is opportunity cost.","What is opportunity cost?","It is the value of the next-best alternative you give up when making a choice."],["Supply and demand","Markets coordinate exchanges between buyers and sellers.","Demand describes how much buyers are willing and able to purchase at different prices; supply describes what sellers are willing and able to offer.","Why can a shortage push prices upward?","When demand exceeds available supply, buyers may compete for fewer units."],["Incentives","An incentive is something that changes the expected benefits or costs of an action.","Prices, rules, rewards and social consequences can all influence behavior.","Why do incentives sometimes have unintended effects?","People respond to the incentives they actually face, which may differ from the designer's intention."],["Trade and specialization","Trade allows people and societies to exchange goods and services.","Specialization can increase productivity when people focus on activities where they have comparative advantages.","Why can two countries both gain from trade?","They can specialize according to comparative advantage and exchange for other goods."]]},"Philosophy":{"icon":"💭","desc":"Knowledge, reality, ethics, meaning and how we reason.","lessons":[["What is philosophy?","Philosophy examines fundamental questions through careful reasoning, concepts and arguments.","Philosophers ask what we can know, what is real, what is right and how good arguments work.","What makes a philosophical question different from a factual question?","It often asks about concepts, assumptions, reasons or principles rather than only a measurable fact."],["How do we know?","Epistemology studies knowledge, belief and justification.","A claim can be true by luck without being well justified, so philosophers examine evidence and reasons.","Can a belief be true but unjustified?","Yes. A person can accidentally believe something true without having good evidence for it."],["Ethics and choices","Ethics examines questions about right action, values and obligations.","Different ethical theories emphasize consequences, duties, virtues or relationships.","Why can two people disagree morally even when they share a goal?","They may disagree about which principles or consequences should guide the choice."],["Arguments and reasoning","An argument gives reasons intended to support a conclusion.","Good reasoning requires clear premises and attention to whether the conclusion actually follows.","What is the difference between an opinion and an argument?","An argument provides reasons that can be examined; an opinion may simply state a view."]]}};
const KEY="myLearningOS.v2";
function state(){try{return JSON.parse(localStorage.getItem(KEY))||{completed:{},notes:{},scores:{}}}catch{return{completed:{},notes:{},scores:{}}}}
function saveState(s){localStorage.setItem(KEY,JSON.stringify(s))}
function esc(v){return String(v??'').replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[m]))}
function subjectProgress(name){const s=state(),n=SUBJECTS[name].lessons.length;return Math.round(((s.completed[name]||[]).length/n)*100)}
function totalStats(){const s=state();let lessons=0,total=0,scores=0;Object.keys(SUBJECTS).forEach(k=>{total+=SUBJECTS[k].lessons.length;lessons+=(s.completed[k]||[]).length;if(s.scores[k])scores++});return{lessons,total,scores}}
function nav(){return '<div class="topbar"><a class="brand" href="/">🧠 My Learning OS</a><nav class="nav"><a href="/">Home</a><a href="/knowledge.html">Knowledge Map</a><a href="/review.html">Review</a><a href="/tutor.html">Tutor</a></nav></div>'}
function renderSubject(name){
 const d=SUBJECTS[name],s=state(),done=s.completed[name]||[],p=subjectProgress(name);
 document.title=name+' | My Learning OS';
 document.getElementById('app').innerHTML=nav()+`<main class="hero"><a class="back" href="/">← Back to Learning Areas</a><h1>${d.icon} ${name}</h1><p class="muted">${d.desc}</p></main>
 <section class="panel"><div class="stats"><div class="stat"><strong>${done.length}</strong><span>lessons done</span></div><div class="stat"><strong>${d.lessons.length}</strong><span>lessons</span></div><div class="stat"><strong>${p}%</strong><span>progress</span></div><div class="stat"><strong>${s.scores[name]?.score||0}%</strong><span>quiz</span></div></div><div class="bar" style="margin-top:16px"><div style="width:${p}%"></div></div></section>
 <section class="panel"><h2>Course</h2><p class="muted">Learn → Connect → Question → Understand</p><div id="lessons">${d.lessons.map((l,i)=>lessonHTML(name,l,i,done.includes(i))).join('')}</div></section>
 <section class="panel"><h2>My notes</h2><textarea class="note" id="note" placeholder="Write what you understood, a question, or a connection...">${esc(s.notes[name]||'')}</textarea><div class="lesson-actions"><button onclick="saveNote()">Save notes</button><span id="saved" class="muted"></span></div></section>
 <section class="panel"><h2>Quick quiz</h2><p>Answer in your own words, then reveal the model answer.</p><div id="quiz"></div></section>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
 renderQuiz(name);
}
function lessonHTML(name,l,i,isDone){
 const r=state().review?.[name+'-'+i],due=r&&new Date(r.nextReview)<=new Date();
 const scheduled=r&&!due;
 return `<article class="lesson" id="lesson-${i}"><h3>Lesson ${i+1}: ${l[0]}</h3><p class="muted">${l[1]}</p><div class="lesson-body"><p>${l[2]}</p><div class="question"><strong>🧠 Think about this:</strong><br>${l[3]}<div class="muted" style="margin-top:8px">Hint: ${l[4]}</div><textarea class="answer" id="answer-${i}" placeholder="Write your answer in your own words...">${esc((state().answers?.[name]?.[i])||'')}</textarea><div class="lesson-actions"><button onclick="checkAnswer('${name}',${i})">Check my answer</button><button class="button secondary" onclick="showModelAnswer('${name}',${i})">Show model answer</button></div><div id="feedback-${i}" class="feedback" hidden></div></div><div class="lesson-actions"><button onclick="completeLesson('${name}',${i})" ${isDone?'disabled':''}>${isDone?'✓ Completed':'Mark lesson complete'}</button><button class="button secondary" onclick="toggleExplanation(${i})">Explain another way</button></div>${scheduled?`<div id="review-status-${i}" class="review-scheduled"><strong>🧠 Review scheduled</strong><br>Next review: <strong>${formatDate(r.nextReview)}</strong>.<br><span class="muted">This concept will return for review so you can strengthen your memory.</span></div>`:''}${due?`<div class="review-prompt"><strong>🧠 This concept is due for review.</strong><div class="lesson-actions"><button onclick="finishReview('${name}',${i},true)">✓ I remembered it</button><button class="button secondary" onclick="finishReview('${name}',${i},false)">↻ I need more practice</button></div></div>`:''}<p id="explain-${i}" class="muted" hidden>In simple terms: ${l[2]} Think of it as a relationship between things that you can observe, test or reason about.</p></div><button class="button secondary" onclick="openLesson(${i})">${isDone?'Review lesson':'Open lesson'} →</button></article>`}
function checkAnswer(name,i){
 const d=SUBJECTS[name],l=d.lessons[i],input=document.getElementById('answer-'+i),box=document.getElementById('feedback-'+i);
 const answer=(input.value||'').trim();
 if(!answer){box.hidden=false;box.innerHTML='<strong>✍️ Start with your idea.</strong><br>You do not need a perfect answer. Explain what you think first, then we can improve it together.';return}
 const normalize=t=>t.toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
 const words=normalize(answer).split(' ').filter(Boolean);
 const stop=new Set(['about','after','again','because','before','being','could','does','from','have','into','more','only','other','should','their','there','these','they','this','through','what','when','where','which','while','with','would','your','that','than','then','them','were','will']);
 const answerWords=new Set(words.filter(w=>w.length>4&&!stop.has(w)));
 const modelWords=normalize(l[4]).split(' ').filter(w=>w.length>4&&!stop.has(w));
 const important=[...new Set(modelWords)];
 const matched=important.filter(w=>answerWords.has(w));
 const missing=important.filter(w=>!answerWords.has(w)).slice(0,3);
 let title='',body='';
 if(matched.length>=2){title='✅ You got the main idea.';body='You included: <strong>'+matched.slice(0,4).join(', ')+'</strong>.';}
 else if(matched.length===1){title='🟡 You have part of the idea.';body='You included <strong>'+matched[0]+'</strong>, which is important.';}
 else{title='💡 Good start.';body='Your answer shows you are thinking about the question.';}
 let next='';
 if(missing.length){next='<br><strong>🔧 Add this:</strong> '+missing.join(', ')+'.';}
 else{next='<br><strong>🌟 Next step:</strong> Explain why or how your answer works.';}
 box.hidden=false;
 box.innerHTML='<strong>'+title+'</strong><br>'+body+next+'<br><span class="muted">Now compare with the model answer and rewrite your answer in your own words.</span>';
 saveAnswer(name,i,answer)
}
function openLesson(i){document.querySelectorAll('.lesson').forEach(x=>x.classList.remove('active'));const el=document.getElementById('lesson-'+i);el.classList.add('active');el.scrollIntoView({behavior:'smooth',block:'center'})}
function showModelAnswer(name,i){const l=SUBJECTS[name].lessons[i],box=document.getElementById('feedback-'+i);box.hidden=false;box.innerHTML='<strong>Model answer:</strong> '+esc(l[4])}
function toggleExplanation(i){const e=document.getElementById('explain-'+i);e.hidden=!e.hidden}
function saveAnswer(name,i,answer){const s=state();s.answers=s.answers||{};s.answers[name]=s.answers[name]||{};s.answers[name][i]=answer;saveState(s)}
function completeLesson(name,i){
 const s=state();
 s.completed[name]=s.completed[name]||[];
 if(!s.completed[name].includes(i))s.completed[name].push(i);
 s.review=s.review||{};
 const key=name+'-'+i;
 const now=new Date();
 s.review[key]={subject:name,index:i,learnedAt:now.toISOString(),nextReview:addDays(now,1).toISOString(),interval:1,stage:0};
 s.activity=s.activity||{};
 s.activity[dateKey(now)]=true;
 saveState(s);
 renderSubject(name);
 openLesson(i);
 setTimeout(()=>showReviewScheduled(name,i),50);
}
function showReviewScheduled(name,i){
 const e=document.getElementById('review-status-'+i);
 if(!e)return;
 e.hidden=false;
 e.innerHTML='<strong>🧠 Review scheduled</strong><br>Next review: <strong>tomorrow</strong> · '+formatDate(state().review?.[name+'-'+i]?.nextReview)+'.<br><span class="muted">Your Learning OS will bring this idea back so you can strengthen your memory.</span>';
}
function saveNote(){const name=document.body.dataset.subject,s=state();s.notes[name]=document.getElementById('note').value;saveState(s);document.getElementById('saved').textContent='Saved ✓';setTimeout(()=>document.getElementById('saved').textContent='',1500)}
function renderQuiz(name){const d=SUBJECTS[name],q=d.lessons[d.lessons.length-1];document.getElementById('quiz').innerHTML=`<div class="question"><strong>${q[3]}</strong><textarea class="answer" id="quizAnswer" placeholder="Write your answer..."></textarea><div class="lesson-actions"><button onclick="showAnswer('${name}')">Show model answer</button><button class="button secondary" onclick="markQuiz('${name}')">I understand this</button></div><div id="model" class="feedback"></div></div>`}
function showAnswer(name){const d=SUBJECTS[name],q=d.lessons[d.lessons.length-1];document.getElementById('model').textContent='Model answer: '+q[4]}
function markQuiz(name){const s=state();s.scores[name]={score:100,date:new Date().toISOString()};saveState(s);document.getElementById('model').textContent='Nice — quiz marked complete. Your progress is saved on this device.'}
function renderHome(){
 const st=totalStats(),pct=Math.round(st.lessons/st.total*100),s=state(),today=new Date(),reviewDue=getDueReviews().length,streak=getStreak();
 document.title='My Learning OS';
 document.getElementById('app').innerHTML=nav()+`<section class="hero"><h1>My Learning OS 🧠</h1><p class="muted">Build a connected understanding of the world — one idea at a time.</p></section>
 <section class="panel dark"><small>YOUR CURRENT FOCUS</small><h2>Understanding the World</h2><p class="muted">Learn → connect → question → explain → remember.</p><button class="button light" onclick="newQuestion()">Give me something interesting →</button><p id="homeQuestion" style="margin-bottom:0"></p></section>
 <section class="panel"><h2>My learning</h2><div class="stats"><div class="stat"><strong>${st.lessons}</strong><span>lessons done</span></div><div class="stat"><strong>${st.total}</strong><span>lessons available</span></div><div class="stat"><strong>${st.scores}</strong><span>quizzes done</span></div><div class="stat"><strong>${pct}%</strong><span>course progress</span></div></div><div class="bar" style="margin-top:16px"><div style="width:${pct}%"></div></div></section>
 <section class="dashboard-grid"><div class="panel"><h2>🧠 Review</h2><p class="big-number">${reviewDue}</p><p class="muted">concepts ready to review today</p><a class="button" href="/review.html">Start review →</a></div><div class="panel"><h2>🔥 Learning streak</h2><p class="big-number">${streak} day${streak===1?'':'s'}</p><p class="muted">consecutive study day${streak===1?'':'s'}</p></div></section>
 <h2>Learning Areas</h2><div class="grid">${Object.entries(SUBJECTS).map(([n,d])=>`<a class="card" href="/subjects/${n.toLowerCase()}/"><div class="icon">${d.icon}</div><h3>${n}</h3><p class="muted">${d.desc}</p><div class="bar"><div style="width:${subjectProgress(n)}%"></div></div><small>${subjectProgress(n)}% complete</small></a>`).join('')}</div>
 <section class="panel"><h2>My Notes</h2><p class="muted">Your notes are saved privately in this browser.</p><textarea class="note" id="homeNote" placeholder="Capture an idea or connection...">${esc(state().notes.home||'')}</textarea><div class="lesson-actions"><button onclick="saveHomeNote()">Save notes</button></div></section>
 <section class="panel"><h2>Think about this</h2><div class="question" id="questionBox">Why can simple rules produce complex systems?</div></section>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
}const qs=['Why does evolution not need a conscious plan?','How can chemistry emerge from physics?','Why did agriculture change human societies?','What makes an argument convincing?','Why can markets coordinate millions of decisions?','How can gravity create stable orbits?'];
function newQuestion(){const q=qs[Math.floor(Math.random()*qs.length)];const e=document.getElementById('homeQuestion')||document.getElementById('questionBox');if(e)e.textContent=q}
function saveHomeNote(){const s=state();s.notes.home=document.getElementById('homeNote').value;saveState(s)}
function renderMap(){
 const connections=[
  ['Physics','Chemistry','Matter → atoms → interactions'],
  ['Chemistry','Biology','Molecules → cells → life'],
  ['Biology','History','Humans → populations → societies'],
  ['History','Economics','Resources → trade → institutions'],
  ['Philosophy','Science','Questions → evidence → reasoning'],
  ['Economics','History','Incentives → choices → change']
 ];
 document.getElementById('app').innerHTML=nav()+`<section class="hero"><h1>🗺️ My Knowledge Map</h1><p class="muted">Your subjects are not separate islands. They are connected ways of understanding the same world.</p></section>
 <section class="panel"><h2>Core connections</h2><div class="connection-grid">${connections.map(x=>`<button class="connection" onclick="showConnection('${x[0]}','${x[1]}','${x[2]}')"><strong>${x[0]} ↔ ${x[1]}</strong><span>${x[2]}</span></button>`).join('')}</div><div id="connectionDetail" class="connection-detail"><strong>Choose a connection.</strong><br><span class="muted">Tap one to see how the ideas meet.</span></div></section>
 <section class="panel"><h2>My learning network</h2><div class="map map-modern"><div class="node">⚛️ Physics<br><small>matter · energy · forces</small></div><div class="node">🧪 Chemistry<br><small>atoms · bonds · reactions</small></div><div class="node">🧬 Biology<br><small>cells · DNA · evolution</small></div><div class="node">🏛️ History<br><small>people · societies · change</small></div><div class="node">📈 Economics<br><small>choices · incentives · trade</small></div><div class="node">💭 Philosophy<br><small>knowledge · ethics · reasoning</small></div></div></section>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
}
function showConnection(a,b,detail){const e=document.getElementById('connectionDetail');if(e)e.innerHTML='<strong>'+esc(a)+' ↔ '+esc(b)+'</strong><br>'+esc(detail);}
function renderReview(){
 const due=getDueReviews(),s=state();
 document.getElementById('app').innerHTML=nav()+`<section class="hero"><h1>🧠 Review</h1><p class="muted">Review concepts at increasing intervals so they stay in memory.</p></section>
 <section class="panel"><div class="review-summary"><div><strong>${due.length}</strong><span>due today</span></div><div><strong>${Object.keys(s.review||{}).length}</strong><span>scheduled</span></div><div><strong>${getStreak()}</strong><span>day streak</span></div></div></section>
 <section class="panel"><h2>Today's review</h2>${due.slice(0,8).map(x=>`<div class="review-card"><div><small>${SUBJECTS[x.n].icon} ${x.n} · Lesson ${x.i+1}</small><h3>${esc(x.l[0])}</h3><p class="muted">${esc(x.l[3])}</p></div><a class="button" href="/subjects/${x.n.toLowerCase()}/#lesson-${x.i}">Review →</a></div>`).join('')||'<div class="empty">🎉 Nothing is due right now. Complete another lesson and your next review will be scheduled automatically.</div>'}</section>
 <section class="panel"><h2>How your review grows</h2><p>After a lesson, the first review is scheduled for tomorrow. When you review successfully, the interval grows: 1 day → 3 days → 7 days → 14 days → 30 days.</p></section>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
}
function addDays(date,days){const d=new Date(date);d.setDate(d.getDate()+days);return d}
function dateKey(date){const d=new Date(date);return d.toISOString().slice(0,10)}
function formatDate(value){return new Date(value).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}
function getDueReviews(){
 const s=state(),now=new Date(),items=[];
 Object.values(s.review||{}).forEach(r=>{if(r.nextReview&&new Date(r.nextReview)<=now){const d=SUBJECTS[r.subject];if(d&&d.lessons[r.index])items.push({n:r.subject,i:r.index,l:d.lessons[r.index],review:r})}});
 return items.sort((a,b)=>new Date(a.review.nextReview)-new Date(b.review.nextReview));
}
function getStreak(){
 const a=state().activity||{},d=new Date(),count=0;
 if(!a[dateKey(d)]) d.setDate(d.getDate()-1);
 while(a[dateKey(d)]){count++;d.setDate(d.getDate()-1)}
 return count;
}
function recordReview(name,i,known){
 const s=state(),key=name+'-'+i,r=s.review?.[key];
 if(!r)return;
 const intervals=[1,3,7,14,30];
 r.interval=known?intervals[Math.min((r.stage||0)+1,intervals.length-1)]:1;
 r.stage=known?Math.min((r.stage||0)+1,intervals.length-1):0;
 r.nextReview=addDays(new Date(),r.interval).toISOString();
 s.activity=s.activity||{};s.activity[dateKey(new Date())]=true;saveState(s);
}
function finishReview(name,i,known){recordReview(name,i,known);renderSubject(name);openLesson(i);}
function boot(){const path=location.pathname;document.body.dataset.subject=(path.match(/subjects\/([^/]+)/)||[])[1] ? (path.match(/subjects\/([^/]+)/)[1].replace(/^./,c=>c.toUpperCase())) : '';if(document.getElementById('app')){if(path.includes('/subjects/'))renderSubject(document.body.dataset.subject);else if(path.includes('knowledge.html'))renderMap();else if(path.includes('review.html'))renderReview();else if(path.includes('tutor.html'))renderTutor();else renderHome()}}
function renderTutor(){
 document.getElementById('app').innerHTML=nav()+`<section class="hero"><h1>👩‍🏫 My Tutor</h1><p class="muted">A simple tutor layer that uses the lessons in your Learning OS. A full AI tutor can plug into this interface later without changing your learning data.</p></section>
 <section class="panel"><h2>What do you want help with?</h2><div class="tutor-grid">${Object.entries(SUBJECTS).map(([n,d])=>`<button class="card tutor-choice" onclick="startTutor('${n}')"><span class="icon">${d.icon}</span><strong>${n}</strong><span class="muted">${d.desc}</span></button>`).join('')}</div></section>
 <section class="panel" id="tutorPanel"><h2>Choose a subject</h2><p class="muted">Your tutor will ask you a question, listen to your answer, and point you toward the relevant lesson.</p></section>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
}
function startTutor(name){
 const d=SUBJECTS[name],i=Math.floor(Math.random()*d.lessons.length),l=d.lessons[i],p=document.getElementById('tutorPanel');
 p.innerHTML='<h2>'+d.icon+' '+esc(name)+' tutor</h2><p>'+esc(l[3])+'</p><textarea class="answer" id="tutorAnswer" placeholder="Explain your thinking in your own words..."></textarea><div class="lesson-actions"><button onclick="tutorRespond(\''+name+'\','+i+')">Check my thinking</button><a class="button secondary" href="/subjects/'+name.toLowerCase()+'/#lesson-'+i+'">Open lesson →</a></div><div id="tutorFeedback" class="feedback"></div>';
}
function tutorRespond(name,i){
 const l=SUBJECTS[name].lessons[i],answer=(document.getElementById('tutorAnswer').value||'').trim(),box=document.getElementById('tutorFeedback');
 if(!answer){box.innerHTML='✍️ Start by explaining what you think. There is no need to be perfect.';return}
 const key=l[4].toLowerCase().split(/[^a-z0-9]+/).filter(w=>w.length>5),a=answer.toLowerCase(),hits=key.filter(w=>a.includes(w));
 box.innerHTML=hits.length?'✅ You are connecting with the lesson. Try explaining <strong>why</strong> your idea leads to the result.':'💡 Good starting point. Open the lesson, compare the model answer, then try explaining the idea again in your own words.';
}
boot();