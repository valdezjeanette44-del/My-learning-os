const SUBJECTS={"Physics":{"icon":"⚛️","desc":"Matter, energy, space, time, forces and the laws that describe nature.","lessons":[["What does physics study?","Physics looks for patterns in nature and describes them using observations, experiments and mathematical models.","A force is a push or pull that can change an object's motion. Gravity is a force between masses.","What forces act on a ball after you throw it upward?","Think about gravity and air resistance."],["Motion and speed","Motion describes how an object's position changes over time.","Speed tells us how much distance an object covers per unit of time. Velocity also includes direction.","How is speed different from velocity?","Velocity includes direction."],["Energy","Energy is the capacity to cause change.","Kinetic energy is associated with motion; potential energy depends on position or arrangement. Energy can be transferred and transformed.","Where does the energy of a falling object go?","It can become kinetic energy and later other forms such as heat or sound."],["Gravity and orbits","Gravity affects falling objects and the motion of planets, moons and satellites.","An orbit is continuous free-fall around a massive body, with gravity continually changing the object's direction.","Why doesn't the Moon simply fall straight into Earth?","It is falling toward Earth while its sideways motion carries it around Earth."]]},"Chemistry":{"icon":"🧪","desc":"Atoms, molecules, reactions and how matter changes.","lessons":[["What is matter made of?","Chemistry studies the composition, structure, properties and transformations of matter.","Atoms are building blocks of ordinary matter. Atoms can join through chemical bonds to form molecules.","How is melting ice different from burning wood?","Melting is a physical change; burning involves chemical reactions that form new substances."],["Atoms and elements","An element is a substance made of atoms with the same number of protons.","The periodic table organizes elements by atomic number and recurring properties.","What makes carbon different from oxygen?","Their atoms have different numbers of protons and therefore are different elements."],["Chemical bonds","Atoms can interact and form bonds that make stable structures.","Ionic bonding involves attraction between charged ions; covalent bonding involves sharing electrons.","Why do atoms form bonds?","Bonding can produce arrangements with lower energy and greater stability."],["Chemical reactions","Chemical reactions rearrange atoms into new combinations.","Reactants become products while the number of each kind of atom is conserved.","What does it mean to balance a chemical equation?","It means representing the same number of each type of atom on both sides."]]},"Biology":{"icon":"🧬","desc":"Life, evolution, cells, organisms and ecosystems.","lessons":[["What is life?","Biology is the scientific study of living things and their interactions.","Known living organisms are made of one or more cells. They use energy, respond to surroundings and populations can evolve.","Why are cells considered the basic units of life?","Cells are the smallest structures that can carry out the core processes of life."],["Cells: the basic unit","Cells are organized structures surrounded by membranes and contain genetic information.","Prokaryotic cells lack a nucleus; eukaryotic cells have a nucleus and membrane-bound organelles.","Why do cells need membranes?","Membranes separate the cell from its environment and regulate exchange."],["DNA and heredity","DNA stores biological information used in cells.","Genes are DNA sequences that contribute to traits through their effects on molecules and development.","How can DNA influence a trait?","A gene can provide instructions for a functional RNA or protein, affecting cellular processes."],["Evolution by natural selection","Evolution is change in inherited characteristics of populations over generations.","Natural selection occurs when heritable variation affects survival or reproduction, changing trait frequencies over time.","How can evolution create complex adaptations without a plan?","Small inherited differences can be filtered by selection across many generations."]]},"History":{"icon":"🏛️","desc":"People, civilizations, institutions and ideas changing through time.","lessons":[["How do historians study the past?","History investigates past human lives using evidence and careful interpretation.","Sources include letters, laws, objects, buildings, images and oral accounts. Historians ask who created a source, when, why and with what limitations.","How might two sources describe the same event differently?","They may reflect different experiences, purposes, audiences or available information."],["Prehistory and archaeology","Prehistory refers to periods before written records in a particular context.","Archaeologists study material evidence such as tools, bones, buildings and sediments to reconstruct past lives.","What can a stone tool tell us?","It can provide clues about technology, activities and sometimes the environment of its makers."],["Agriculture and civilization","The domestication of plants and animals changed how many communities obtained food.","Farming could support larger settled populations, but it also brought new forms of labor, inequality and disease.","Why did agriculture change human societies so deeply?","It changed food production, settlement, population size, work and social organization."],["Empires and exchange","Empires connected large populations through political power, trade, migration and cultural exchange.","Expansion could spread languages, technologies and religions while also involving coercion, conflict and inequality.","Why do historians study multiple perspectives?","Different groups experienced the same historical process differently."]]},"Economics":{"icon":"📈","desc":"Markets, incentives, resources and how people make choices.","lessons":[["What is economics?","Economics studies how people and societies make choices when resources are limited.","Because resources are scarce, choosing one use often means giving up another. This is opportunity cost.","What is opportunity cost?","It is the value of the next-best alternative you give up when making a choice."],["Supply and demand","Markets coordinate exchanges between buyers and sellers.","Demand describes how much buyers are willing and able to purchase at different prices; supply describes what sellers are willing and able to offer.","Why can a shortage push prices upward?","When demand exceeds available supply, buyers may compete for fewer units."],["Incentives","An incentive is something that changes the expected benefits or costs of an action.","Prices, rules, rewards and social consequences can all influence behavior.","Why do incentives sometimes have unintended effects?","People respond to the incentives they actually face, which may differ from the designer's intention."],["Trade and specialization","Trade allows people and societies to exchange goods and services.","Specialization can increase productivity when people focus on activities where they have comparative advantages.","Why can two countries both gain from trade?","They can specialize according to comparative advantage and exchange for other goods."]]},"Philosophy":{"icon":"💭","desc":"Knowledge, reality, ethics, meaning and how we reason.","lessons":[["What is philosophy?","Philosophy examines fundamental questions through careful reasoning, concepts and arguments.","Philosophers ask what we can know, what is real, what is right and how good arguments work.","What makes a philosophical question different from a factual question?","It often asks about concepts, assumptions, reasons or principles rather than only a measurable fact."],["How do we know?","Epistemology studies knowledge, belief and justification.","A claim can be true by luck without being well justified, so philosophers examine evidence and reasons.","Can a belief be true but unjustified?","Yes. A person can accidentally believe something true without having good evidence for it."],["Ethics and choices","Ethics examines questions about right action, values and obligations.","Different ethical theories emphasize consequences, duties, virtues or relationships.","Why can two people disagree morally even when they share a goal?","They may disagree about which principles or consequences should guide the choice."],["Arguments and reasoning","An argument gives reasons intended to support a conclusion.","Good reasoning requires clear premises and attention to whether the conclusion actually follows.","What is the difference between an opinion and an argument?","An argument provides reasons that can be examined; an opinion may simply state a view."]]}};
const KEY="myLearningOS.v2";
function state(){try{return JSON.parse(localStorage.getItem(KEY))||{completed:{},notes:{},scores:{}}}catch{return{completed:{},notes:{},scores:{}}}}
function saveState(s){localStorage.setItem(KEY,JSON.stringify(s))}
function esc(v){return String(v??'').replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[m]))}
function subjectProgress(name){const s=state(),n=SUBJECTS[name].lessons.length;return Math.round(((s.completed[name]||[]).length/n)*100)}
function totalStats(){const s=state();let lessons=0,total=0,scores=0;Object.keys(SUBJECTS).forEach(k=>{total+=SUBJECTS[k].lessons.length;lessons+=(s.completed[k]||[]).length;if(s.scores[k])scores++});return{lessons,total,scores}}
function nav(){return '<div class="topbar"><a class="brand" href="/">🧠 My Learning OS</a><nav class="nav" aria-label="Main navigation"><a href="/">Home</a><a href="/search.html">Search</a><a href="/projects.html">Projects</a><a href="/review.html">Review</a><a href="/knowledge.html">Knowledge Map</a><a href="/tutor.html">Tutor</a></nav></div><nav class="mobile-nav" aria-label="Quick navigation"><a href="/" aria-label="Home"><span>⌂</span><small>Home</small></a><a href="/#learning-areas" aria-label="Learning areas"><span>▦</span><small>Learn</small></a><a href="/projects.html" aria-label="Projects"><span>◫</span><small>Projects</small></a><a href="/review.html" aria-label="Review"><span>↻</span><small>Review</small></a><details class="mobile-more"><summary><span>•••</span><small>More</small></summary><div class="mobile-more-menu"><a href="/search.html">🔎 Search</a><a href="/knowledge.html">🗺️ Knowledge Map</a><a href="/tutor.html">👩‍🏫 Tutor</a></div></details></nav>'}
function renderSubject(name){
 const d=SUBJECTS[name],s=state(),done=s.completed[name]||[],p=subjectProgress(name);
 document.title=name+' | My Learning OS';
 document.getElementById('app').innerHTML=nav()+`<main class="hero"><a class="back" href="/">← Back to Learning Areas</a><h1>${d.icon} ${name}</h1><p class="muted">${d.desc}</p></main>
 <section class="panel"><div class="stats"><div class="stat"><strong>${done.length}</strong><span>lessons done</span></div><div class="stat"><strong>${d.lessons.length}</strong><span>lessons</span></div><div class="stat"><strong>${p}%</strong><span>progress</span></div><div class="stat"><strong>${s.scores[name]?.score||0}%</strong><span>quiz</span></div></div><div class="bar" style="margin-top:16px"><div style="width:${p}%"></div></div></section>
 <section class="panel course-panel"><div class="course-heading"><div><h2>Your lessons</h2><p class="muted">Open one lesson at a time. You can go at your own pace.</p></div><span class="course-count">${done.length}/${d.lessons.length}</span></div><div id="lessons">${d.lessons.map((l,i)=>lessonHTML(name,l,i,done.includes(i))).join('')}</div></section>
 <section class="panel"><h2>My notes</h2><textarea class="note" id="note" placeholder="Write what you understood, a question, or a connection...">${esc(s.notes[name]||'')}</textarea><div class="lesson-actions"><button onclick="saveNote()">Save notes</button><span id="saved" class="muted"></span></div></section>
 <section class="panel"><h2>Quick quiz</h2><p>Answer in your own words, then reveal the model answer.</p><div id="quiz"></div></section>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
 newQuestion();
 renderQuiz(name);
 const nextLesson=getNextLesson(),cont=document.getElementById("continueLearning");
 if(cont) cont.innerHTML=nextLesson?'<p class="muted">'+esc(nextLesson.name)+' · Lesson '+(nextLesson.i+1)+'</p><h3>'+esc(nextLesson.lesson[0])+'</h3><p class="muted">'+esc(nextLesson.lesson[1])+'</p><a class="button" href="/subjects/'+nextLesson.name.toLowerCase()+'/#lesson-'+nextLesson.i+'">Continue →</a>':'<p>🎉 You have completed every lesson currently in the course.</p>';
 const goal=document.getElementById("dailyGoalCard"),gc=getDailyCount(),gg=getDailyGoal();
 if(goal) goal.innerHTML='<p><strong>'+gc+'</strong> of <strong>'+gg+'</strong> learning actions</p><div class="bar"><div style="width:'+Math.min(100,Math.round(gc/gg*100))+'%"></div></div><div class="goal-buttons"><button class="button secondary" onclick="setDailyGoal(1)">1</button><button class="button secondary" onclick="setDailyGoal(2)">2</button><button class="button secondary" onclick="setDailyGoal(3)">3</button></div><small class="muted">Choose a small daily goal that feels realistic.</small>';
}
function lessonHTML(name,l,i,isDone){
 const r=state().review?.[name+'-'+i],due=r&&new Date(r.nextReview)<=new Date();
 const scheduled=r&&!due;
 return `<article class="lesson ${isDone?'lesson-done':''}" id="lesson-${i}">
 <button class="lesson-summary" type="button" aria-expanded="false" onclick="openLesson(${i})">
  <span class="lesson-number">${isDone?'✓':i+1}</span>
  <span class="lesson-summary-copy"><strong>${esc(l[0])}</strong><small>${esc(l[1])}</small></span>
  <span class="lesson-chevron">+</span>
 </button>
 <div class="lesson-body">
  <div class="lesson-section"><span class="lesson-label">THE KEY IDEA</span><p>${esc(l[2])}</p></div>
  <div class="question"><span class="lesson-label">THINK ABOUT IT</span><p>${esc(l[3])}</p>
   <button class="hint-toggle button secondary" onclick="toggleHint(${i})">💡 Need a hint?</button><p id="hint-${i}" class="lesson-hint" hidden>${esc(l[4])}</p>
   <textarea class="answer" id="answer-${i}" placeholder="Try explaining your answer in your own words…">${esc((state().answers?.[name]?.[i])||'')}</textarea>
   <div class="lesson-actions"><button onclick="checkAnswer('${name}',${i})">Check my answer</button><button class="button secondary" onclick="showModelAnswer('${name}',${i})">Show example answer</button></div>
   <div id="feedback-${i}" class="feedback" hidden></div>
  </div>
  <button class="text-action" onclick="toggleExplanation(${i})">Explain this more simply</button>
  <p id="explain-${i}" class="simple-explanation" hidden><strong>Start with the basics</strong><br>${esc(l[1])}<br><br><strong>The key idea</strong><br>${esc(l[2])}</p>
  <section class="self-check"><span class="lesson-label">CAN I EXPLAIN IT?</span><p>Without looking at the example answer, could you explain the main idea to a friend?</p><div class="lesson-actions"><button class="button secondary" onclick="setSelfCheck('${name}',${i},true)">✓ I can explain it</button><button class="button secondary" onclick="setSelfCheck('${name}',${i},false)">↻ I need another try</button></div><p id="self-check-${i}" class="self-check-status">${esc(state().selfChecks?.[name]?.[i]===true?'✓ You marked this as understood.':state().selfChecks?.[name]?.[i]===false?'Keep practising. You can come back to this later.':'')}</p></section>
  <div class="lesson-actions lesson-finish"><button onclick="completeLesson('${name}',${i})" ${isDone?'disabled':''}>${isDone?'✓ Lesson completed':'Mark lesson complete'}</button></div>
  ${scheduled?`<div id="review-status-${i}" class="review-scheduled"><strong>🧠 Review scheduled</strong><br>Next review: <strong>${formatDate(r.nextReview)}</strong>.<br><span class="muted">This concept will return for review so you can strengthen your memory.</span></div>`:''}
  ${due?`<div class="review-prompt"><strong>🧠 This concept is due for review.</strong><div class="lesson-actions"><button onclick="finishReview('${name}',${i},true)">✓ I remembered it</button><button class="button secondary" onclick="finishReview('${name}',${i},false)">↻ I need more practice</button></div></div>`:''}
 </div>
 </article>`;
}
function toggleHint(i){const e=document.getElementById('hint-'+i);if(e)e.hidden=!e.hidden;}
function checkAnswer(name,i){
 const l=SUBJECTS[name].lessons[i],input=document.getElementById('answer-'+i),box=document.getElementById('feedback-'+i);
 const answer=(input.value||'').trim();
 if(!answer){box.hidden=false;box.innerHTML='<strong>✍️ Start with your idea.</strong><br>You do not need a perfect answer. Write one or two sentences about what you think, then check them.';return}
 const normalize=t=>t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
 const stop=new Set(['about','after','again','because','before','being','could','does','from','have','into','more','only','other','should','their','there','these','they','this','through','what','when','where','which','while','with','would','your','that','than','then','them','were','will']);
 const answerWords=new Set(normalize(answer).split(' ').filter(w=>w.length>3&&!stop.has(w)));
 const concepts=[...new Set(normalize(l[4]).split(' ').filter(w=>w.length>3&&!stop.has(w)))];
 const matched=concepts.filter(w=>answerWords.has(w));
 const missing=concepts.filter(w=>!answerWords.has(w)).slice(0,3);
 let feedback='';
 if(answer.split(/\s+/).length<7) feedback='<strong>🌱 A first thought</strong><br>Try adding one more sentence to explain how or why.';
 else feedback='<strong>🧠 You have put your thinking into words.</strong><br>Now check whether your explanation includes the central idea.';
 if(matched.length) feedback+='<br><strong>Ideas you mentioned:</strong> '+esc(matched.slice(0,4).join(', '))+'.';
 if(missing.length) feedback+='<br><strong>Ideas to check:</strong> '+esc(missing.join(', '))+'.';
 feedback+='<br><small>This is a simple word-based guide, not a grade of your understanding. Compare the example answer and decide what you would improve.</small>';
 box.hidden=false;box.innerHTML=feedback;
 saveAnswer(name,i,answer);
}
function setSelfCheck(name,i,understood){
 const s=state();s.selfChecks=s.selfChecks||{};s.selfChecks[name]=s.selfChecks[name]||{};s.selfChecks[name][i]=understood;saveState(s);
 const box=document.getElementById('self-check-'+i);
 if(box)box.textContent=understood?'✓ You marked this as understood. Great—try explaining it once without looking.':'That is okay. Review the key idea or example, then try again later.';
}
function openLesson(i){
 document.querySelectorAll('.lesson').forEach(x=>{x.classList.remove('active');const b=x.querySelector('.lesson-summary');if(b)b.setAttribute('aria-expanded','false');const c=x.querySelector('.lesson-chevron');if(c)c.textContent='+';});
 const el=document.getElementById('lesson-'+i);if(!el)return;
 el.classList.add('active');const b=el.querySelector('.lesson-summary');if(b)b.setAttribute('aria-expanded','true');const c=el.querySelector('.lesson-chevron');if(c)c.textContent='−';
 el.scrollIntoView({behavior:'smooth',block:'start'});
}
function showModelAnswer(name,i){const l=SUBJECTS[name].lessons[i],box=document.getElementById('feedback-'+i);box.hidden=false;box.innerHTML='<strong>Model answer:</strong> '+esc(l[4])}
function toggleExplanation(i){const e=document.getElementById('explain-'+i);e.hidden=!e.hidden}
function saveAnswer(name,i,answer){const s=state();s.answers=s.answers||{};s.answers[name]=s.answers[name]||{};s.answers[name][i]=answer;saveState(s)}
function completeLesson(name,i){
 const s=state();
 s.completed[name]=s.completed[name]||[];
 s.learningLog=s.learningLog||[];
 if(!s.completed[name].includes(i))s.learningLog.push({type:'lesson',id:name+'-'+i,at:new Date().toISOString()});
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
function renderQuiz(name){const d=SUBJECTS[name],q=d.lessons[d.lessons.length-1];document.getElementById('quiz').innerHTML=`<div class="question"><strong>${esc(q[3])}</strong><textarea class="answer" id="quizAnswer" placeholder="Write your answer in your own words..."></textarea><div class="lesson-actions"><button onclick="checkQuiz('${name}')">Check my answer</button><button class="button secondary" onclick="showAnswer('${name}')">Show model answer</button><button class="button secondary" onclick="markQuiz('${name}')">I understand this</button></div><div id="model" class="feedback" hidden></div></div>`}
function checkQuiz(name){const d=SUBJECTS[name],q=d.lessons[d.lessons.length-1],input=document.getElementById('quizAnswer'),box=document.getElementById('model'),answer=(input.value||'').trim();if(!answer){box.hidden=false;box.innerHTML='<strong>✍️ Try writing your idea first.</strong><br>There is no need to be perfect. Give it a try, then compare it with the explanation.';return}const s=state();s.quizAnswers=s.quizAnswers||{};s.quizAnswers[name]=answer;saveState(s);box.hidden=false;box.innerHTML='<strong>🧠 Compare your answer</strong><p><strong>Your answer:</strong> '+esc(answer)+'</p><p><strong>Model answer:</strong> '+esc(q[4])+'</p><p><strong>Why this makes sense:</strong> '+esc(q[1]+' '+q[2])+'</p><p class="muted">Look for the key idea in the model answer. If you missed it, try rewriting your answer in your own words.</p>'}
function showAnswer(name){const d=SUBJECTS[name],q=d.lessons[d.lessons.length-1],box=document.getElementById('model');box.hidden=false;box.innerHTML='<strong>Model answer:</strong> '+esc(q[4])+'<p><strong>Why this makes sense:</strong> '+esc(q[1]+' '+q[2])+'</p><p class="muted">Try explaining the idea in your own words before marking the quiz complete.</p>'}
function markQuiz(name){const s=state();s.scores[name]={score:100,date:new Date().toISOString()};saveState(s);const box=document.getElementById('model');box.hidden=false;box.innerHTML='<strong>✓ Quiz marked complete.</strong><br>Your progress is saved on this device. Remember: completion means you reviewed the idea, not that every answer was automatically graded.'}
function getNextLesson(){
 const s=state();
 for(const [name,d] of Object.entries(SUBJECTS)){
  const done=s.completed?.[name]||[];
  const i=d.lessons.findIndex((_,index)=>!done.includes(index));
  if(i>=0)return{name,i,lesson:d.lessons[i],icon:d.icon};
 }
 return null;
}
function getWeeklyStats(){
 const s=state(),cutoff=new Date();cutoff.setDate(cutoff.getDate()-6);cutoff.setHours(0,0,0,0);
 const recent=(s.learningLog||[]).filter(x=>new Date(x.at)>=cutoff);
 const days=new Set(recent.map(x=>dateKey(new Date(x.at))));
 return {lessons:recent.filter(x=>x.type==='lesson').length,projects:new Set(recent.filter(x=>x.type==='project').map(x=>x.id)).size,days:days.size};
}
function renderHome(){
 const st=totalStats(),pct=Math.round(st.lessons/st.total*100),s=state(),reviewDue=getDueReviews().length,streak=getStreak(),next=getNextLesson(),week=getWeeklyStats();
 const projectIds=Object.keys(PROJECTS).sort((a,b)=>{const pa=projectProgress(a),pb=projectProgress(b),rank=x=>x>0&&x<100?0:x===0?1:2;return rank(pa)-rank(pb)||pb-pa;}).slice(0,2);
 document.title='My Learning OS';
 document.getElementById('app').innerHTML=nav()+`
 <section class="hero home-hero"><small class="muted">YOUR PERSONAL LEARNING SPACE</small><h1>What would you like to learn?</h1><p class="muted">Small steps. Clear ideas. Steady progress.</p></section>
 ${next?`<a class="continue-card" href="/subjects/${next.name.toLowerCase()}/#lesson-${next.i}"><span class="continue-icon">${next.icon}</span><span class="continue-copy"><small>YOUR NEXT STEP</small><strong>Continue learning</strong><span>${next.name} · Lesson ${next.i+1}: ${esc(next.lesson[0])}</span></span><b>Continue →</b></a>`:'<section class="continue-card all-done"><span class="continue-icon">🎉</span><span class="continue-copy"><small>AMAZING PROGRESS</small><strong>All lessons completed!</strong><span>Choose a subject to revisit or explore a project.</span></span><b>Explore →</b></section>'}
 <section class="home-focus">
  <div><small>YOUR PROGRESS</small><strong>${pct}%</strong><span>${st.lessons} of ${st.total} lessons completed</span><div class="bar"><div style="width:${pct}%"></div></div></div>
  <a class="home-review" href="/review.html"><span>🧠</span><span><strong>${reviewDue} to review</strong><small>${streak} day learning streak</small></span><b>→</b></a>
 </section>
 <section class="home-weekly"><div class="weekly-heading"><div><small>YOUR LAST 7 DAYS</small><strong>A little progress adds up</strong></div><span>📅</span></div><div class="weekly-stats"><div><strong>${week.lessons}</strong><span>lessons completed</span></div><div><strong>${week.projects}</strong><span>projects progressed</span></div><div><strong>${week.days}/7</strong><span>active days</span></div></div></section>
 <section class="home-section"><div class="home-section-heading"><div><small class="muted">LEARN BY DOING</small><h2>My Projects</h2></div><a href="/projects.html">View all →</a></div>
  <div class="home-projects">${projectIds.map(id=>{const d=PROJECTS[id],p=projectState(id),done=(p.completed||[]).length,progress=projectProgress(id);return `<a class="home-project" href="/projects.html?project=${id}"><span class="home-project-icon">${d.icon}</span><span class="home-project-info"><strong>${d.title}</strong><small>${done}/${d.steps.length} steps · ${progress}%</small><span class="home-project-bar"><span style="width:${progress}%"></span></span></span><b>›</b></a>`}).join('')}</div>
 </section>
 <section class="home-section" id="learning-areas"><div class="home-section-heading"><div><small class="muted">EXPLORE A SUBJECT</small><h2>Learning Areas</h2></div></div>
 <div class="home-subject-grid">${Object.entries(SUBJECTS).map(([n,d])=>`<a class="home-subject" href="/subjects/${n.toLowerCase()}/"><span>${d.icon}</span><strong>${n}</strong><small>${subjectProgress(n)}% complete</small><div class="bar"><div style="width:${subjectProgress(n)}%"></div></div></a>`).join('')}</div></section>
 <details class="home-details"><summary>✨ Curiosity Lab</summary><div class="curiosity-panel"><p class="muted">A quick question to connect ideas and explore something new.</p><div id="curiosityCard" class="curiosity-card"><div class="curiosity-meta" id="curiosityMeta"></div><div class="curiosity-question" id="questionBox">Loading a question…</div><div class="curiosity-clue" id="curiosityClue"></div><div class="curiosity-actions"><button class="button" onclick="showCuriosityClue()">💡 Give me a clue</button><button class="button secondary" onclick="newQuestion()">↻ New question</button><a id="curiosityLesson" class="button secondary" href="#">Explore lesson →</a></div></div></div></details>
 <details class="home-details"><summary>📝 My Notes</summary><div class="home-notes"><p class="muted">Capture an idea or connection. Notes stay in this browser.</p><textarea class="note" id="homeNote" placeholder="An idea I want to remember…">${esc(state().notes.home||'')}</textarea><div class="lesson-actions"><button onclick="saveHomeNote()">Save notes</button></div></div></details>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
 newQuestion();
}
function newQuestion(){
 const item=qs[Math.floor(Math.random()*qs.length)];
 const meta=document.getElementById('curiosityMeta'),q=document.getElementById('questionBox'),clue=document.getElementById('curiosityClue'),link=document.getElementById('curiosityLesson');
 if(!q)return;
 if(meta)meta.textContent=item.icon+' '+item.subject;
 q.textContent=item.q;
 if(clue){clue.textContent='';clue.classList.remove('visible');}
 if(link){link.href='/subjects/'+item.subject.toLowerCase()+'/#lesson-'+item.lesson;}
}
function showCuriosityClue(){
 const clue=document.getElementById('curiosityClue');
 if(!clue)return;
 const q=document.getElementById('questionBox'),item=qs.find(x=>x.q===q?.textContent);
 if(item){clue.textContent='💡 '+item.clue;clue.classList.add('visible');}
}
function saveHomeNote(){const s=state();s.notes.home=document.getElementById('homeNote').value;saveState(s)}
const PROJECTS={
 'plant-evolution':{
  title:'Plant Evolution',icon:'🌱',subtitle:'From aquatic ancestors to flowering plants',
  description:'A journey through the major evolutionary innovations that allowed plants to live, reproduce, and diversify on land.',
  steps:[
   ['Life begins in water','Photosynthetic organisms evolved in aquatic environments.','Why was moving onto land such a major challenge?'],
   ['The move onto land','Early land plants faced drying, gravity, reproduction, and water transport.','What problems would a plant face without internal water transport?'],
   ['Mosses and early land plants','Mosses live on land but remain strongly dependent on water and lack vascular tissue.','Why do mosses still depend heavily on water?'],
   ['Vascular plants','Xylem and phloem transport water and sugars; lignin provides structural support.','How did vascular tissue change plant life on land?'],
   ['Ferns and spores','Ferns are vascular plants that reproduce with spores and still need water for fertilization.','Why are ferns more independent than mosses, but not completely?'],
   ['Seeds change reproduction','Seeds protect embryos and store resources, reducing dependence on free water.','Why was the seed a major evolutionary innovation?'],
   ['Gymnosperms','Conifers and other gymnosperms produce exposed seeds and use pollen.','How did pollen help plants reproduce in drier environments?'],
   ['Flowers and angiosperms','Flowering plants protect seeds inside ovaries and often interact with animals for pollination.','How can flowers improve reproduction?'],
   ['Fruits and seed dispersal','Fruits can attract animals that transport seeds away from the parent plant.','Why is spreading seeds useful?'],
   ['The big picture','Plant evolution can be understood as a series of solutions to life on land.','Can you explain the major innovations in your own words?']
  ]
 },
 'human-evolution':{
  title:'Human Evolution',icon:'🧬',subtitle:'From early hominins to Homo sapiens',
  description:'Explore the long evolutionary story of humans, including early hominins, tools, migration, Neanderthals, and our species.',
  steps:[
   ['What is human evolution?','Human evolution is a branching process, not a straight ladder from ape to human.','Why is the idea of a branching tree more accurate than a ladder?'],
   ['Early hominins','Early hominins evolved upright walking and lived in changing African environments.','Why could bipedalism have been useful?'],
   ['Australopithecus','Australopithecines combined habitual bipedalism with relatively small brains.','What does this show about evolution?'],
   ['Early Homo','Members of Homo had changes in body size, brain size, diet, and tool use.','Why can tools change the challenges an animal faces?'],
   ['Stone tools','Early stone tools show that humans could select, shape, and use materials for specific tasks.','What does a tool tell us about the maker?'],
   ['Homo erectus and migration','Homo erectus and related populations spread beyond Africa into parts of Eurasia.','What challenges would migration into new environments create?'],
   ['Neanderthals','Neanderthals lived across parts of Eurasia and had their own technologies and adaptations.','Why should Neanderthals be understood as close human relatives rather than simple ancestors?'],
   ['Homo sapiens','Our species evolved in Africa and later expanded across much of the world.','What evidence can scientists use to reconstruct these migrations?'],
   ['Interbreeding and Neanderthal DNA','Some populations outside Africa inherited Neanderthal DNA through ancient interbreeding.','What can DNA reveal that fossils alone cannot?'],
   ['The big picture','Human evolution combines anatomy, archaeology, genetics, behavior, and environmental change.','How do different kinds of evidence work together?']
  ]
 },
 'hunter-gatherers-to-civilization':{
  title:'Hunter-Gatherers → Agriculture → Civilization',icon:'🌍',subtitle:'How food production transformed human societies',
  description:'Follow the transition from mobile hunter-gatherer communities to farming, villages, cities, states, and civilizations.',
  steps:[
   ['Hunter-gatherers','For most of human history, people lived by hunting, fishing, gathering, and moving through landscapes.','Why does hunter-gatherer life not simply mean “primitive”?'],
   ['Nomads and mobility','Mobility can be an adaptation to seasonal resources and changing environments.','Why might moving be useful rather than a disadvantage?'],
   ['The end of the Ice Age','Climate and environments changed as the last Ice Age ended.','How could environmental change affect food strategies?'],
   ['Domestication','People gradually changed relationships with plants and animals through cultivation and selective breeding.','How is domestication different from simply eating a wild plant?'],
   ['Agriculture','Farming allowed some communities to produce more food from managed landscapes.','What advantages and costs can agriculture create?'],
   ['Permanent settlements','Stored food and farming could support larger, more permanent communities.','Why can food storage change social organization?'],
   ['Surplus and specialization','Surplus food can allow some people to specialize in crafts, trade, administration, or other work.','How can surplus create new occupations?'],
   ['Cities and states','Large settlements required coordination, institutions, infrastructure, and often political authority.','Why does a city need more organization than a small camp?'],
   ['Writing and administration','Writing developed in several societies and was used for administration, accounting, law, and communication.','Why would record-keeping become useful in large societies?'],
   ['Civilization','Civilization is not a single endpoint but a set of increasingly complex social, economic, and political systems.','How would you explain the transition without saying agriculture simply “caused civilization”?']
  ]
 },
 'roman-empire':{
  title:'Roman Empire',icon:'🏛️',subtitle:'From Roman expansion to imperial transformation',
  description:'Study the Roman world through its republic, expansion, empire, society, culture, and transformation.',
  steps:[
   ['Rome before the empire','Rome developed from a city-state into a republic with institutions shaped by centuries of conflict and adaptation.','What makes a republic different from a monarchy?'],
   ['The Roman Republic','Roman political institutions included magistrates, assemblies, and the Senate, alongside major social inequalities.','Why can political institutions coexist with unequal citizenship?'],
   ['Expansion across the Mediterranean','Military expansion brought Rome into conflict with and influence over neighboring peoples and Mediterranean powers.','How can expansion transform the society doing the expanding?'],
   ['Julius Caesar and civil conflict','Political competition, military power, and social tensions contributed to the late Republic’s civil wars.','Why can concentration of military power create political conflict?'],
   ['Augustus and the Empire','Augustus established a durable imperial system while preserving some republican institutions and traditions.','How can a political system change while keeping older institutions?'],
   ['Daily life and society','Roman society included citizens, non-citizens, enslaved people, elites, workers, families, and diverse local cultures.','Why is there no single “Roman” daily life?'],
   ['Roman engineering and cities','Roads, aqueducts, bridges, baths, buildings, and urban planning supported life across the empire.','How can infrastructure strengthen a large state?'],
   ['Language, law, and culture','Latin, Roman law, institutions, and cultural exchange influenced many regions for centuries.','How can cultural influence survive political change?'],
   ['Christianity and transformation','Christianity spread within the Roman world and eventually became closely connected with imperial power.','How can a religion change as it moves through different societies?'],
   ['The transformation of the Western Empire','The Western Roman imperial system changed through military, political, economic, demographic, and regional transformations.','Why is “fall” an incomplete way to describe this long process?']
  ]
 },
 'universe':{
  title:'How the Universe Works',icon:'🌌',subtitle:'From the Big Bang to galaxies, stars, and cosmic structure',
  description:'Build a conceptual map of the universe: expansion, matter, stars, galaxies, gravity, and cosmic evolution.',
  steps:[
   ['The observable universe','The observable universe is the region whose light has had time to reach us.','Why is the observable universe not necessarily the whole universe?'],
   ['The early universe','The universe began in a hot, dense state and expanded and cooled.','Why does expansion lead to cooling?'],
   ['Cosmic background radiation','The cosmic microwave background is ancient light released when the early universe became transparent.','What can ancient light tell us about the past?'],
   ['Matter and atoms','As the universe cooled, particles and eventually atoms formed, while gravity later amplified density differences.','Why are atoms important for later cosmic structure?'],
   ['Stars are born','Gravity can collapse clouds of gas until conditions allow nuclear fusion in stellar cores.','Why does gravity both build stars and shape their surroundings?'],
   ['Stellar life cycles','Stars change over time depending strongly on their mass, producing different endings and elements.','Why does stellar mass matter so much?'],
   ['Galaxies','Galaxies are vast systems of stars, gas, dust, dark matter, and other components.','How can gravity organize matter on enormous scales?'],
   ['Black holes','Black holes are regions where gravity is so strong that beyond the event horizon, escape is impossible.','Why does a black hole not simply “suck in” everything nearby?'],
   ['Expansion and dark energy','Observations show cosmic expansion is accelerating; dark energy is the name given to the unknown component associated with this behavior.','What does acceleration tell us about the universe?'],
   ['The big picture','Cosmic history links expansion, matter, gravity, stars, galaxies, and the chemistry needed for planets and life.','How do processes at different scales connect?']
  ]
 },
 'gravity-orbits-relativity':{
  title:'Gravity, Orbits & Relativity',icon:'⚛️',subtitle:'How gravity shapes motion, time, and spacetime',
  description:'Build intuition for gravity, orbital motion, escape velocity, and Einstein’s description of spacetime.',
  steps:[
   ['What is gravity?','Gravity is the interaction associated with mass-energy; in Newtonian physics it is described as a force.','How does gravity change motion?'],
   ['Why objects fall','Near Earth, gravity accelerates falling objects toward the ground, while air resistance can change their motion.','Why do objects accelerate as they fall?'],
   ['Orbits','An orbit combines forward motion with gravitational acceleration, producing continuous free fall around a body.','Why does a satellite keep missing Earth?'],
   ['Orbital speed','The speed and distance of an orbit determine its path and period.','What happens to orbital motion when distance changes?'],
   ['Escape velocity','An object must have enough energy to avoid returning under gravity’s influence.','Why does escape velocity depend on the mass and radius of a body?'],
   ['Newton’s universal gravitation','Newton described gravitational attraction quantitatively and connected falling objects with planetary motion.','Why was connecting Earth and sky such a powerful idea?'],
   ['Einstein and spacetime','General relativity describes gravity as the curvature of spacetime produced by mass-energy.','What changes when gravity is understood as geometry?'],
   ['Time dilation','Relativity predicts that time can pass at different rates depending on motion and gravitational field.','Why is time not identical for every observer?'],
   ['Light and gravity','Gravity can bend light and affect its frequency and path.','How can gravity affect something with no rest mass?'],
   ['The big picture','Newton and Einstein provide different but connected descriptions of gravity, each useful in different regimes.','When is Newtonian gravity an excellent approximation, and when is relativity needed?']
  ]
 },
 'human-brain-consciousness':{
  title:'Human Brain & Consciousness',icon:'🧠',subtitle:'How brains process information and give rise to experience',
  description:'Explore neurons, brain systems, perception, memory, learning, and the scientific questions surrounding consciousness.',
  steps:[
   ['What is the brain?','The brain is a biological organ made of interconnected cells that processes information and regulates behavior and body functions.','Why is the brain considered a biological information-processing system?'],
   ['Neurons','Neurons communicate through electrical activity and chemical signals at synapses.','How can a network of cells transmit information?'],
   ['Brain regions and networks','Different brain areas have specialized roles, but most complex functions depend on networks working together.','Why is it misleading to assign every mental ability to one tiny brain region?'],
   ['Sensation and perception','Sensory systems transform physical signals into neural representations that the brain interprets.','Why is perception more than simply receiving information?'],
   ['Memory','Memory involves processes including encoding, storage, consolidation, and retrieval.','Why can remembering be different from simply storing information?'],
   ['Learning and plasticity','Experience can change neural connections and the way brain networks function.','How does neuroplasticity help explain learning?'],
   ['Emotion and decision-making','Emotions and reasoning interact in guiding attention, learning, and choices.','Why are emotion and reasoning not simply opposites?'],
   ['Sleep and the brain','Sleep supports processes important for memory, regulation, and brain function.','Why might a brain need periods of altered activity?'],
   ['What is consciousness?','Consciousness refers broadly to subjective experience and awareness, but its mechanisms remain an active scientific and philosophical research topic.','What evidence could distinguish conscious processing from unconscious processing?'],
   ['The big question','Understanding consciousness may require connecting neuroscience, psychology, computation, philosophy, and careful experiments.','What would a scientific explanation of consciousness need to explain?']
  ]
 }
};function projectState(id='plant-evolution'){
 const s=state();s.projects=s.projects||{};s.projects[id]=s.projects[id]||{completed:[],notes:''};return s.projects[id];
}
function projectProgress(id){
 const p=projectState(id),d=PROJECTS[id];return Math.round(((p.completed||[]).length/d.steps.length)*100);
}
function toggleProjectStep(id,i){
 const s=state(),p=s.projects=s.projects||{},ps=p[id]=p[id]||{completed:[],notes:''};
 const notes=document.getElementById('projectNotes');
 if(notes)ps.notes=notes.value;
 ps.completed=ps.completed||[];
 const at=ps.completed.indexOf(i);
 if(at>=0)ps.completed.splice(at,1);else {ps.completed.push(i);s.learningLog=s.learningLog||[];s.learningLog.push({type:'project',id:id,at:new Date().toISOString()});}
 saveState(s);renderProjectDetail(id,i);
}
function saveProjectNotes(id){
 const el=document.getElementById('projectNotes'),s=state();
 s.projects=s.projects||{};s.projects[id]=s.projects[id]||{completed:[],notes:''};
 s.projects[id].notes=el?el.value:'';
 saveState(s);
 const saved=document.getElementById('projectSaved');if(saved){saved.textContent='✓ Saved';setTimeout(()=>saved.textContent='',1200);}
}
function renderSearch(){
 document.title='Search | My Learning OS';
 document.getElementById('app').innerHTML=nav()+`<section class="hero"><h1>🔍 Search My Learning OS</h1><p class="muted">Find lessons, projects, milestones, and your saved notes.</p><div class="global-search"><input id="globalSearch" class="search-input" placeholder="Try xylem, Neanderthal, gravity..." oninput="runSearch(this.value)" autofocus><button class="button" onclick="runSearch(document.getElementById('globalSearch').value)">Search</button></div></section><section class="panel"><div id="searchSummary" class="muted">Start typing to search.</div><div id="globalResults" class="global-results"></div></section>`;
}
function runSearch(query){
 const q=(query||'').trim().toLowerCase(),box=document.getElementById('globalResults'),summary=document.getElementById('searchSummary');if(!box||!summary)return;
 if(!q){summary.textContent='Start typing to search.';box.innerHTML='';return}
 const out=[];
 Object.entries(SUBJECTS).forEach(([n,d])=>d.lessons.forEach((l,i)=>{if((n+' '+l.join(' ')).toLowerCase().includes(q))out.push({i:'📚',t:l[0],m:n+' · Lesson '+(i+1),x:l[1],h:'/subjects/'+n.toLowerCase()+'/#lesson-'+i})}));
 Object.entries(PROJECTS).forEach(([id,d])=>d.steps.forEach((x,i)=>{if((d.title+' '+x.join(' ')).toLowerCase().includes(q))out.push({i:d.icon,t:x[0],m:d.title+' · Milestone '+(i+1),x:x[1],h:'/projects.html?project='+id})}));
 const s=state();Object.entries(s.notes||{}).forEach(([n,v])=>{if(String(v).toLowerCase().includes(q))out.push({i:'📝',t:n==='home'?'Home notes':n,m:'Your saved note',x:String(v).slice(0,180),h:n==='home'?'/':'/subjects/'+n.toLowerCase()+'/'})});
 summary.textContent=out.length?out.length+' result'+(out.length===1?'':'s'):'No results yet';
 box.innerHTML=out.slice(0,30).map(r=>'<a class="global-result" href="'+r.h+'"><span class="global-result-icon">'+r.i+'</span><span><small>'+esc(r.m)+'</small><strong>'+esc(r.t)+'</strong><p>'+esc(r.x)+'</p></span><b>→</b></a>').join('')||'<div class="empty">Nothing in your Learning OS matches that yet.</div>';
}
function renderProjects(){
 const ids=Object.keys(PROJECTS);
 document.title='Projects | My Learning OS';
 document.getElementById('app').innerHTML=nav()+`<section class="hero"><a class="back" href="/">← Back to Home</a><h1>🔬 My Projects</h1><p class="muted">Long-term investigations where you connect ideas across subjects.</p></section>
 <div class="project-grid">${ids.map(id=>{const d=PROJECTS[id],pct=projectProgress(id),p=projectState(id);return `<a class="project-card" href="/projects.html?project=${id}"><div class="project-card-icon">${d.icon}</div><small>PROJECT</small><h2>${d.title}</h2><p class="muted">${d.subtitle}</p><div class="bar"><div style="width:${pct}%"></div></div><strong>${p.completed.length}/${d.steps.length} milestones · ${pct}%</strong></a>`}).join('')}</div>`;
}
function renderProjectDetail(id,openIndex=0){
 const d=PROJECTS[id];if(!d){renderProjects();return}
 const p=projectState(id),pct=projectProgress(id);
 document.title=d.title+' | My Learning OS';
 document.getElementById('app').innerHTML=nav()+`<section class="hero project-page-heading"><a class="back" href="/projects.html">← All Projects</a><h1>${d.icon} ${d.title}</h1><p class="muted">${d.subtitle}</p></section>
 <section class="project-hero project-hero-compact"><div class="project-icon">${d.icon}</div><div><small>YOUR PROJECT</small><h2>${d.title}</h2><p>${d.description}</p></div></section>
 <section class="panel project-progress-panel"><div class="project-progress-head"><div><h2>Progress</h2><p class="muted">${p.completed.length} of ${d.steps.length} steps complete</p></div><strong>${pct}%</strong></div><div class="bar"><div style="width:${pct}%"></div></div></section>
 <section class="panel project-path-panel"><div class="project-path-heading"><div><h2>Project steps</h2><p class="muted">Open one step at a time. Work at your own pace.</p></div><span class="step-count">${d.steps.length} steps</span></div><div class="project-steps">${d.steps.map((x,i)=>`<article class="project-step-card ${p.completed.includes(i)?'done':''} ${openIndex===i?'is-open':''}">
 <button class="project-step-toggle" aria-expanded="${openIndex===i}" onclick="renderProjectDetail('${id}',${openIndex===i?-1:i})"><span class="project-check">${p.completed.includes(i)?'✓':i+1}</span><span class="project-step-title"><strong>${i+1}. ${x[0]}</strong><small>${p.completed.includes(i)?'Completed':'Tap to open this step'}</small></span><span class="project-step-chevron">${openIndex===i?'−':'+'}</span></button>
 ${openIndex===i?`<div class="project-step-content"><p>${x[1]}</p><div class="project-question"><strong>Think about it</strong><p>${x[2]}</p></div><button class="project-complete-button ${p.completed.includes(i)?'is-complete':''}" onclick="toggleProjectStep('${id}',${i})">${p.completed.includes(i)?'✓ Mark as not complete':'Mark step complete ✓'}</button></div>`:''}
 </article>`).join('')}</div></section>
 <section class="panel project-discoveries"><h2>🧠 My discoveries</h2><p class="muted">Save your ideas and questions here.</p><textarea class="note project-notes" id="projectNotes" placeholder="What did you discover? What questions do you still have?">${esc(p.notes||'')}</textarea><div class="lesson-actions"><button onclick="saveProjectNotes('${id}')">Save my discoveries</button><span id="projectSaved" class="muted"></span></div></section>`;
}
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
 const a=state().activity||{},d=new Date();let count=0;
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
function boot(){const path=location.pathname;document.body.dataset.subject=(path.match(/subjects\/([^/]+)/)||[])[1] ? (path.match(/subjects\/([^/]+)/)[1].replace(/^./,c=>c.toUpperCase())) : '';if(document.getElementById('app')){if(path.includes('/subjects/'))renderSubject(document.body.dataset.subject);else if(path.includes('knowledge.html'))renderMap();else if(path.includes('review.html'))renderReview();else if(path.includes('projects.html')){const id=new URLSearchParams(location.search).get('project');id?renderProjectDetail(id):renderProjects();}else if(path.includes('search.html'))renderSearch();else if(path.includes('tutor.html'))renderTutor();else renderHome()}}
let tutorFocusIndex=-1;
let tutorRequestPending=false;
function renderTutor(){
 document.title='My Tutor | My Learning OS';
 const options=Object.entries(SUBJECTS).map(([n,d])=>'<option value="'+esc(n)+'">'+d.icon+' '+esc(n)+'</option>').join('');
 document.getElementById('app').innerHTML=nav()+`<section class="hero tutor-hero"><span class="tutor-eyebrow">YOUR PERSONAL LEARNING COMPANION</span><h1>Learn through conversation.</h1><p class="muted">Ask anything, explore an idea, or let your tutor guide you through a lesson. Your conversations stay saved on this device.</p></section>
 <section class="panel tutor-workspace">
  <div class="tutor-controls"><label for="tutorSubject">What are we exploring?</label><select id="tutorSubject" onchange="changeTutorSubject()">`+options+`</select><label for="tutorLesson">Focus on a lesson (optional)</label><select id="tutorLesson" onchange="changeTutorFocus()"><option value="-1">Open exploration — any question</option></select></div>
  <div class="tutor-focus-label" id="tutorFocusLabel">Open exploration · ask your own question</div>
  <div class="tutor-prompt-row"><button class="button secondary" onclick="useTutorPrompt('Explain this in simple words, with an everyday example.')">Explain simply</button><button class="button secondary" onclick="useTutorPrompt('Give me a real-life example and explain why it works.')">Real-life example</button><button class="button secondary" onclick="useTutorPrompt('Quiz me with one question at a time. Wait for my answer before explaining.')">Quiz me</button><button class="button secondary" onclick="useTutorPrompt('Connect this idea to another subject I am learning.')">Connect ideas</button></div>
  <div class="tutor-chat-heading"><div><h2>Our conversation</h2><p class="muted">No pressure to get it right. Curiosity comes first.</p></div><button class="text-action" onclick="clearTutorChat()">Clear chat</button></div>
  <div id="tutorMessages" class="tutor-messages" aria-live="polite"></div>
  <div id="tutorStatus" class="tutor-status" role="status"></div>
  <label for="tutorInput" class="tutor-input-label">What would you like to understand?</label><textarea id="tutorInput" class="tutor-input" rows="3" placeholder="Ask a question, tell me what confuses you, or explain your current thinking…" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendTutorMessage()}"></textarea>
  <div class="tutor-send-row"><small class="muted">Enter to send · Shift + Enter for a new line</small><button id="tutorSend" onclick="sendTutorMessage()">Send message ↗</button></div>
  <p class="tutor-privacy-note">Your chat is saved in this browser. AI replies require a connected API service.</p>
 </section>
 <section class="panel tutor-path-panel"><h2>Turn curiosity into progress</h2><div class="tutor-path-grid"><a href="/#learning-areas"><strong>📚 Structured lessons</strong><span>Learn in small steps and save your progress.</span></a><a href="/projects.html"><strong>🔬 Hands-on projects</strong><span>Use what you learn to investigate real questions.</span></a><a href="/review.html"><strong>🧠 Remember more</strong><span>Return to important ideas before you forget them.</span></a></div></section>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
 updateTutorLessonOptions();
 renderTutorMessages(document.getElementById('tutorSubject').value);
}
function updateTutorLessonOptions(){
 const subject=document.getElementById('tutorSubject')?.value||Object.keys(SUBJECTS)[0],select=document.getElementById('tutorLesson');
 if(!select)return;
 const lessons=SUBJECTS[subject].lessons;
 select.innerHTML='<option value="-1">Open exploration — any question</option>'+lessons.map((l,i)=>'<option value="'+i+'">'+(i+1)+'. '+esc(l[0])+'</option>').join('');
 select.value=String(tutorFocusIndex);
 if(select.value!==String(tutorFocusIndex)){tutorFocusIndex=-1;select.value='-1';}
 updateTutorFocusLabel();
}
function updateTutorFocusLabel(){
 const name=document.getElementById('tutorSubject')?.value||Object.keys(SUBJECTS)[0],box=document.getElementById('tutorFocusLabel');
 if(!box)return;
 const l=tutorFocusIndex>=0?SUBJECTS[name].lessons[tutorFocusIndex]:null;
 box.textContent=l?'Learning focus · '+l[0]:'Open exploration · ask your own question';
}
function changeTutorSubject(){
 tutorFocusIndex=-1;updateTutorLessonOptions();
 const name=document.getElementById('tutorSubject').value;
 renderTutorMessages(name);
}
function changeTutorFocus(){
 const select=document.getElementById('tutorLesson');
 tutorFocusIndex=select?parseInt(select.value,10):-1;
 if(Number.isNaN(tutorFocusIndex))tutorFocusIndex=-1;
 updateTutorFocusLabel();
}
function tutorHistory(name){
 const s=state();s.tutorChats=s.tutorChats||{};s.tutorChats[name]=s.tutorChats[name]||[];return s.tutorChats[name];
}
function renderTutorMessages(name){
 const box=document.getElementById('tutorMessages');if(!box)return;
 const messages=tutorHistory(name);
 if(!messages.length){
  const d=SUBJECTS[name];
  box.innerHTML='<div class="tutor-welcome"><span class="tutor-welcome-icon">'+d.icon+'</span><strong>Hi! Let’s get curious about '+esc(name)+'.</strong><p>I can explain an idea in different ways, ask you questions, help you practise, or explore a question you have. What are you curious about today?</p></div>';
 }else{
  box.innerHTML=messages.map(m=>'<div class="tutor-message '+(m.role==='user'?'from-user':'from-tutor')+'"><span class="tutor-message-label">'+(m.role==='user'?'You':'Your tutor')+'</span><div>'+esc(m.content).replace(/\n/g,'<br>')+'</div></div>').join('');
 }
 box.scrollTop=box.scrollHeight;
}
function startTutor(name){
 const select=document.getElementById('tutorSubject');
 if(select&&SUBJECTS[name]){select.value=name;changeTutorSubject();}
}
function useTutorPrompt(prompt){sendTutorMessage(prompt);}
function clearTutorChat(){
 const name=document.getElementById('tutorSubject')?.value;if(!name)return;
 if(!confirm('Clear the saved tutor conversation for '+name+'? Your lessons and notes will not be deleted.'))return;
 const s=state();s.tutorChats=s.tutorChats||{};s.tutorChats[name]=[];saveState(s);renderTutorMessages(name);
 const status=document.getElementById('tutorStatus');if(status)status.textContent='Conversation cleared.';
}
async function sendTutorMessage(suppliedText){
 if(tutorRequestPending)return;
 const input=document.getElementById('tutorInput'),name=document.getElementById('tutorSubject')?.value;
 const message=String(suppliedText!==undefined?suppliedText:(input?.value||'')).trim();
 if(!name||!message)return;
 if(message.length>1500){const status=document.getElementById('tutorStatus');if(status)status.textContent='Please keep each message under 1,500 characters.';return;}
 const s=state();s.tutorChats=s.tutorChats||{};s.tutorChats[name]=s.tutorChats[name]||[];
 s.tutorChats[name].push({role:'user',content:message});saveState(s);
 if(input)input.value='';
 renderTutorMessages(name);
 const status=document.getElementById('tutorStatus'),button=document.getElementById('tutorSend');
 tutorRequestPending=true;if(button){button.disabled=true;button.textContent='Thinking…';}if(status)status.textContent='Your tutor is thinking…';
 const lesson=tutorFocusIndex>=0?SUBJECTS[name].lessons[tutorFocusIndex]:null;
 try{
  const response=await fetch('/api/tutor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({subject:name,lessonTitle:lesson?lesson[0]:'',lessonContext:lesson?[lesson[1],lesson[2],lesson[3],lesson[4]].join('\n'): '',messages:s.tutorChats[name].slice(-12).map(m=>({role:m.role,content:m.content}))})});
  const data=await response.json().catch(()=>({}));
  if(!response.ok)throw new Error(data.message||'Your tutor could not reply just now. Please try again.');
  const latest=state();latest.tutorChats=latest.tutorChats||{};latest.tutorChats[name]=latest.tutorChats[name]||[];
  latest.tutorChats[name].push({role:'assistant',content:data.answer||'I could not create a reply. Please try again.'});saveState(latest);
  renderTutorMessages(name);if(status)status.textContent='';
 }catch(error){
  const friendly=error.message==='Failed to fetch'?'The tutor service is not connected yet. The app needs its secure API setup before AI replies can work.':error.message;
  const latest=state();latest.tutorChats=latest.tutorChats||{};latest.tutorChats[name]=latest.tutorChats[name]||[];
  latest.tutorChats[name].push({role:'assistant',content:'I could not answer just now. '+friendly});saveState(latest);
  renderTutorMessages(name);if(status)status.textContent='You can try sending your question again.';
 }finally{
  tutorRequestPending=false;if(button){button.disabled=false;button.textContent='Send message ↗';}
 }
}
boot();