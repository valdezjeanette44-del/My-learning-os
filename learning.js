const qs=[
 {icon:'⚛️',subject:'Physics',q:'Why does a ball thrown upward eventually fall back down?',clue:'Think about the force that pulls objects toward Earth.',lesson:0},
 {icon:'🧪',subject:'Chemistry',q:'What makes a chemical reaction different from melting ice?',clue:'Ask whether a new substance is formed.',lesson:0},
 {icon:'🌱',subject:'Biology',q:'How do plants make the food they need to grow?',clue:'Think about sunlight, water, and carbon dioxide.',lesson:0},
 {icon:'💼',subject:'Business',q:'Why might a business test an idea before investing lots of money?',clue:'Think about reducing risk and learning from customers.',lesson:0},
 {icon:'📈',subject:'Economics',q:'What do you give up when you choose one option over another?',clue:'Economists call this the cost of the next-best alternative.',lesson:0},
 {icon:'🏛️',subject:'History',q:'Why do historians compare more than one source about an event?',clue:'Sources can be incomplete or show different perspectives.',lesson:0},
 {icon:'💭',subject:'Philosophy',q:'What makes a reason good evidence for a belief?',clue:'Consider whether the reason supports the claim and can be questioned.',lesson:0},
 {icon:'💻',subject:'Technology',q:'How does an app turn a tap on the screen into an action?',clue:'Think about interface controls and the code responding to events.',lesson:0},
 {icon:'🌌',subject:'Astronomy',q:'Why do stars look tiny even though many are larger than the Sun?',clue:'Think about how distance changes the apparent size of an object.',category:'Beyond the curriculum'},
 {icon:'🐙',subject:'Animal behaviour',q:'How might an octopus solve a problem without a human-like brain?',clue:'Look at how its nervous system is distributed through its body.',category:'Beyond the curriculum'},
 {icon:'🎨',subject:'Design',q:'Why can the same colour look different beside two different colours?',clue:'Our eyes and brains compare colours with their surroundings.',category:'Beyond the curriculum'},
 {icon:'🌦️',subject:'Climate',q:'How can a city make a very hot day safer for people?',clue:'Consider shade, water, buildings, and who may be most exposed.',category:'Beyond the curriculum'},
 {icon:'🗣️',subject:'Language',q:'How do new words become part of a language?',clue:'Think about how people use, share, and understand words over time.',category:'Beyond the curriculum'},
 {icon:'🪸',subject:'Ocean life',q:'What could happen to a reef if the water stays unusually warm?',clue:'Consider the relationship between coral and the tiny algae living with it.',category:'Beyond the curriculum'}
];
const SUBJECTS={"Physics":{"icon":"⚛️","desc":"Matter, energy, space, time, forces and the laws that describe nature.","lessons":[["What does physics study?","Physics looks for patterns in nature and describes them using observations, experiments and mathematical models.","A force is a push or pull that can change an object's motion. Gravity is a force between masses.","What forces act on a ball after you throw it upward?","Think about gravity and air resistance."],["Motion and speed","Motion describes how an object's position changes over time.","Speed tells us how much distance an object covers per unit of time. Velocity also includes direction.","How is speed different from velocity?","Velocity includes direction."],["Energy","Energy is the capacity to cause change.","Kinetic energy is associated with motion; potential energy depends on position or arrangement. Energy can be transferred and transformed.","Where does the energy of a falling object go?","It can become kinetic energy and later other forms such as heat or sound."],["Gravity and orbits","Gravity affects falling objects and the motion of planets, moons and satellites.","An orbit is continuous free-fall around a massive body, with gravity continually changing the object's direction.","Why doesn't the Moon simply fall straight into Earth?","It is falling toward Earth while its sideways motion carries it around Earth."]]},"Chemistry":{"icon":"🧪","desc":"Atoms, molecules, reactions and how matter changes.","lessons":[["What is matter made of?","Chemistry studies the composition, structure, properties and transformations of matter.","Atoms are building blocks of ordinary matter. Atoms can join through chemical bonds to form molecules.","How is melting ice different from burning wood?","Melting is a physical change; burning involves chemical reactions that form new substances."],["Atoms and elements","An element is a substance made of atoms with the same number of protons.","The periodic table organizes elements by atomic number and recurring properties.","What makes carbon different from oxygen?","Their atoms have different numbers of protons and therefore are different elements."],["Chemical bonds","Atoms can interact and form bonds that make stable structures.","Ionic bonding involves attraction between charged ions; covalent bonding involves sharing electrons.","Why do atoms form bonds?","Bonding can produce arrangements with lower energy and greater stability."],["Chemical reactions","Chemical reactions rearrange atoms into new combinations.","Reactants become products while the number of each kind of atom is conserved.","What does it mean to balance a chemical equation?","It means representing the same number of each type of atom on both sides."]]},"Biology":{"icon":"🧬","desc":"Life, evolution, cells, organisms and ecosystems.","lessons":[["What is life?","Biology is the scientific study of living things and their interactions.","Known living organisms are made of one or more cells. They use energy, respond to surroundings and populations can evolve.","What makes a plant a living thing?","Think about how it uses energy, grows, and responds to sunlight and water."],["Cells: the basic unit","Cells are organized structures surrounded by membranes and contain genetic information.","Prokaryotic cells lack a nucleus; eukaryotic cells have a nucleus and membrane-bound organelles.","Why do cells need membranes?","Membranes separate the cell from its environment and regulate exchange."],["DNA and heredity","DNA stores biological information used in cells.","Genes are DNA sequences that contribute to traits through their effects on molecules and development.","How can DNA influence a trait?","A gene can provide instructions for a functional RNA or protein, affecting cellular processes."],["Evolution by natural selection","Evolution is change in inherited characteristics of populations over generations.","Natural selection occurs when heritable variation affects survival or reproduction, changing trait frequencies over time.","How can evolution create complex adaptations without a plan?","Small inherited differences can be filtered by selection across many generations."]]},"History":{"icon":"🏛️","desc":"People, civilizations, institutions and ideas changing through time.","lessons":[["How do historians study the past?","History investigates past human lives using evidence and careful interpretation.","Sources include letters, laws, objects, buildings, images and oral accounts. Historians ask who created a source, when, why and with what limitations.","How might two sources describe the same event differently?","They may reflect different experiences, purposes, audiences or available information."],["Prehistory and archaeology","Prehistory refers to periods before written records in a particular context.","Archaeologists study material evidence such as tools, bones, buildings and sediments to reconstruct past lives.","What can a stone tool tell us?","It can provide clues about technology, activities and sometimes the environment of its makers."],["Agriculture and civilization","The domestication of plants and animals changed how many communities obtained food.","Farming could support larger settled populations, but it also brought new forms of labor, inequality and disease.","Why did agriculture change human societies so deeply?","It changed food production, settlement, population size, work and social organization."],["Empires and exchange","Empires connected large populations through political power, trade, migration and cultural exchange.","Expansion could spread languages, technologies and religions while also involving coercion, conflict and inequality.","How did trade routes help spread ideas and inventions between regions?","Think about what travellers carried besides goods, and how contact let people share knowledge."]]},"Economics":{"icon":"📈","desc":"Markets, incentives, resources and how people make choices.","lessons":[["What is economics?","Economics studies how people and societies make choices when resources are limited.","Because resources are scarce, choosing one use often means giving up another. This is opportunity cost.","What is opportunity cost?","It is the value of the next-best alternative you give up when making a choice."],["Supply and demand","Markets coordinate exchanges between buyers and sellers.","Demand describes how much buyers are willing and able to purchase at different prices; supply describes what sellers are willing and able to offer.","Why can a shortage push prices upward?","When demand exceeds available supply, buyers may compete for fewer units."],["Incentives","An incentive is something that changes the expected benefits or costs of an action.","Prices, rules, rewards and social consequences can all influence behavior.","Why do incentives sometimes have unintended effects?","People respond to the incentives they actually face, which may differ from the designer's intention."],["Trade and specialization","Trade allows people and societies to exchange goods and services.","Specialization can increase productivity when people focus on activities where they have comparative advantages.","Why can two countries both gain from trade?","They can specialize according to comparative advantage and exchange for other goods."]]},"Business":{"icon":"💼","desc":"Customers, value, money, marketing and how businesses solve real problems.","lessons":[["What is a business?","A business helps people solve a problem or meet a need by offering something useful.","A bakery sells bread, but the value is helping people get fresh food conveniently. A business needs customers who value the offer enough to pay for it.","What problem does a business solve for its customers?","Think about what the customer needs and why the offer is useful."],["Revenue, costs and profit","Revenue is the money a business receives from sales. Costs are what it spends. Profit is what remains after costs.","If a shop sells a bag for €30 and it costs €18 to buy and deliver it, €12 remains before other expenses such as advertising and tax.","Why can a business have high revenue but little profit?","Because its costs may also be high. Profit depends on revenue minus costs."],["Understanding customers","A customer is more likely to buy when an offer solves a real problem and feels worth the price.","A traveller may choose a toiletry bag because it keeps bottles upright, saves space, and makes packing easier.","How could you discover whether people really want a product?","Ask potential customers about their needs and observe what they already buy or struggle with."],["Testing a business idea","A small test helps you learn what customers want before spending too much money.","Before ordering 100 bags, a seller could show a sample to potential buyers, ask for feedback, or test a simple product page.","Why is testing an idea safer than guessing?","Testing gives evidence about demand before you commit more money."]]},"Technology":{"icon":"💻","desc":"Digital tools, systems, data and the ideas behind how technology works.","lessons":[["What is technology?","Technology is the use of knowledge and tools to solve problems or make tasks easier.","A map app combines GPS data, maps, and software to help you find a route instead of navigating entirely by memory.","How does technology help people solve a problem?","It combines tools or knowledge to make a task easier, faster, safer, or more reliable."],["How does the internet work?","The internet is a network of connected computers that send data to one another using shared rules.","When you open a website, your device sends requests through networks to a server, which sends back the files your browser displays.","Why do websites need servers?","A server stores or processes information and sends the requested data to your device."],["What is an algorithm?","An algorithm is a set of steps for solving a problem or completing a task.","A recipe is like an algorithm: follow ordered instructions and use the ingredients to produce a result.","Why does the order of steps matter in an algorithm?","Some steps depend on earlier steps, so changing the order can change or break the result."],["What is artificial intelligence?","Artificial intelligence is technology designed to perform tasks that usually require abilities such as recognizing patterns or generating language.","A photo app may recognize a face by finding patterns in an image; a language model predicts likely text based on patterns learned during training.","Why can an AI answer sound confident and still be wrong?","AI can generate plausible patterns without always checking whether every detail matches reality, so important claims need verification."]]},"Philosophy":{"icon":"💭","desc":"Knowledge, reality, ethics, meaning and how we reason.","lessons":[["What is philosophy?","Philosophy examines fundamental questions through careful reasoning, concepts and arguments.","Philosophers ask what we can know, what is real, what is right and how good arguments work.","What makes a philosophical question different from a factual question?","It often asks about concepts, assumptions, reasons or principles rather than only a measurable fact."],["How do we know?","Epistemology studies knowledge, belief and justification.","A claim can be true by luck without being well justified, so philosophers examine evidence and reasons.","Can a belief be true but unjustified?","Yes. A person can accidentally believe something true without having good evidence for it."],["Ethics and choices","Ethics examines questions about right action, values and obligations.","Different ethical theories emphasize consequences, duties, virtues or relationships.","Why can two people disagree morally even when they share a goal?","They may disagree about which principles or consequences should guide the choice."],["Arguments and reasoning","An argument gives reasons intended to support a conclusion.","Good reasoning requires clear premises and attention to whether the conclusion actually follows.","What is the difference between an opinion and an argument?","An argument provides reasons that can be examined; an opinion may simply state a view."]]}};
const KEY="myLearningOS.v2";
// These indices are permanent storage/URL slots, never presentation positions.
const BIOLOGY_LESSON_IDENTITIES=Object.freeze([
 Object.freeze({id:'biology-life',legacyIndex:0}),
 Object.freeze({id:'biology-cells',legacyIndex:1}),
 Object.freeze({id:'biology-dna-heredity',legacyIndex:2}),
 Object.freeze({id:'biology-natural-selection',legacyIndex:3})
]);
const BIOLOGY_DISPLAY_ORDER=Object.freeze(BIOLOGY_LESSON_IDENTITIES.map(entry=>entry.id));
// Keep the legacy content slots fixed; future display reordering uses IDs above.
Object.freeze(SUBJECTS.Biology.lessons);
const CHEMISTRY_LESSON_IDENTITIES=Object.freeze(['chemistry-matter','chemistry-atoms-elements','chemistry-bonds','chemistry-reactions'].map((id,legacyIndex)=>Object.freeze({id,legacyIndex})));
const CHEMISTRY_DISPLAY_ORDER=Object.freeze(CHEMISTRY_LESSON_IDENTITIES.map(entry=>entry.id));
Object.freeze(SUBJECTS.Chemistry?.lessons);
function resolveSubjectLesson(name,reference){
 const subject=SUBJECTS[name];if(!subject)return null;
 const identities=name==='Biology'?BIOLOGY_LESSON_IDENTITIES:name==='Chemistry'?CHEMISTRY_LESSON_IDENTITIES:null;
 const identity=identities?.find(entry=>entry.id===reference||entry.legacyIndex===reference);
 const index=identity?identity.legacyIndex:reference;
 if(identities&&!identity)return null;
 if(!Number.isInteger(index)||!subject.lessons[index])return null;
 return {id:identity?identity.id:null,legacyIndex:index,lesson:subject.lessons[index],key:name+'-'+index,href:'/subjects/'+name.toLowerCase()+'/#lesson-'+index};
}
function subjectLessonEntries(name,displayOrder){
 const order=displayOrder||(name==='Biology'?BIOLOGY_DISPLAY_ORDER:name==='Chemistry'?CHEMISTRY_DISPLAY_ORDER:SUBJECTS[name]?.lessons.map((lesson,index)=>index)||[]);
 return order.map(reference=>resolveSubjectLesson(name,reference)).filter(Boolean);
}
function resolveLessonRecords(snapshot,name,reference){
 const entry=resolveSubjectLesson(name,reference);if(!entry)return null;
 const i=entry.legacyIndex;
 return {...entry,completed:(snapshot.completed?.[name]||[]).includes(i),answer:snapshot.answers?.[name]?.[i],selfCheck:snapshot.selfChecks?.[name]?.[i],quiz:snapshot.quizResults?.[entry.key],review:snapshot.review?.[entry.key]};
}
const STORAGE_RECOVERY_KEY=KEY+'.beforeRestore';
function validateLearningData(data){
 const record=value=>Boolean(value)&&typeof value==='object'&&!Array.isArray(value);
 if(!record(data))throw new Error('The saved learning record is not a valid object.');
 const maps=['completed','notes','scores','answers','selfChecks','quizAnswers','quizResults','review','reviewCompletions','activity','projects','tutorChats'];
 for(const key of maps)if(Object.hasOwn(data,key)&&!record(data[key]))throw new Error('The saved '+key+' field has an unsupported format.');
 if(data.completed&&!Object.values(data.completed).every(items=>Array.isArray(items)&&items.every(i=>Number.isInteger(i)&&i>=0)))throw new Error('Saved lesson completion has an unsupported format.');
 if(data.notes&&!Object.values(data.notes).every(note=>typeof note==='string'))throw new Error('Saved original notes have an unsupported format.');
 if(Object.hasOwn(data,'learningLog')&&!Array.isArray(data.learningLog))throw new Error('Saved learning history has an unsupported format.');
 if(Object.hasOwn(data,'noteLibrary')&&(!Array.isArray(data.noteLibrary)||!data.noteLibrary.every(note=>record(note)&&['id','title','category','content'].every(key=>typeof note[key]==='string'))))throw new Error('This record has an invalid structured Notes library.');
 return {...data,completed:data.completed||{},notes:data.notes||{},scores:data.scores||{}};
}
function showLearningDataWarning(message){
 if(typeof document==='undefined'||!document.createElement)return;
 let box=document.getElementById('learningDataWarning');
 if(!box){box=document.createElement('aside');box.id='learningDataWarning';box.setAttribute('role','alert');box.style.cssText='position:sticky;top:0;z-index:1000;padding:16px;background:#fff4da;color:#352c1e;border-bottom:2px solid #b38336;font:16px/1.5 system-ui';const text=document.createElement('p');text.id='learningDataWarningText';box.appendChild(text);const download=document.createElement('button');download.textContent='Download original data';download.onclick=downloadOriginalLearningData;box.appendChild(download);document.body.prepend(box);}
 document.getElementById('learningDataWarningText').textContent=message;
}
function readLearningData(){
 const raw=localStorage.getItem(KEY);
 return raw===null?validateLearningData({}):validateLearningData(JSON.parse(raw));
}
function state(){
 try{return readLearningData();}
 catch(error){showLearningDataWarning('Your saved data could not be read safely. The original record is unchanged and saving is blocked. Download it before restoring a valid backup.');return {completed:{},notes:{},scores:{}};}
}
function saveState(s){
 try{
  const current=readLearningData();
  validateLearningData(s);
  const next=validateLearningData({...current,...s});
  localStorage.setItem(KEY,JSON.stringify(next));
  const box=typeof document!=='undefined'&&document.getElementById('learningDataWarning');if(box)box.remove();
 }catch(error){showLearningDataWarning('Your changes were not saved. Keep this page open and copy your unsaved text. Storage may be full, unavailable, or contain a damaged record. Your saved record has not been replaced.');throw error;}
}
function downloadLearningFile(text,filename,type='application/json'){
 const blob=new Blob([text],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function downloadOriginalLearningData(){
 try{const raw=localStorage.getItem(KEY);if(raw===null)throw new Error('There is no saved learning record in this browser.');downloadLearningFile(raw,'my-learning-os-original-data.txt','text/plain');}
 catch(error){showLearningDataWarning('The original record could not be downloaded. Keep this page open; browser storage may be unavailable.');}
}
function downloadPreRestoreData(){
 try{
  const snapshot=JSON.parse(localStorage.getItem(STORAGE_RECOVERY_KEY)||'null');if(!snapshot||typeof snapshot.raw!=='string')throw new Error('No pre-restore copy is available in this browser.');
  let data;try{data=validateLearningData(JSON.parse(snapshot.raw));}catch{downloadLearningFile(snapshot.raw,'my-learning-os-before-restore-original.txt','text/plain');return;}
  data={...data,noteLibrary:data.noteLibrary||[]};downloadLearningFile(JSON.stringify({app:'My Learning OS',version:2,exportedAt:snapshot.savedAt,dataFields:Object.keys(data),data},null,2),'my-learning-os-before-restore.json');
 }
 catch(error){showLearningDataWarning(error.message);}
}
function esc(v){return String(v??'').replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[m]))}
function subjectProgress(name){const s=state(),n=SUBJECTS[name].lessons.length;return Math.round(((s.completed[name]||[]).length/n)*100)}
function totalStats(){const s=state();let lessons=0,total=0,scores=0;Object.keys(SUBJECTS).forEach(k=>{total+=SUBJECTS[k].lessons.length;lessons+=(s.completed[k]||[]).length;if(s.scores[k])scores++});return{lessons,total,scores}}
function nav(){return '<div class="topbar"><a class="brand" href="/">🧠 My Learning OS</a><nav class="nav" aria-label="Main navigation"><a href="/">Home</a><a href="/notes.html">My Notes</a><a href="/search.html">Search</a><a href="/projects.html" onclick="saveProjectsScroll()">Projects</a><a href="/review.html">Review</a><a href="/knowledge.html">Knowledge Map</a><a href="/tutor.html">Tutor</a></nav></div><nav class="mobile-nav" aria-label="Quick navigation"><a href="/" aria-label="Home"><span>⌂</span><small>Home</small></a><a href="/projects.html" aria-label="Projects" onclick="saveProjectsScroll()"><span>◫</span><small>Projects</small></a><a href="/review.html" aria-label="Review"><span>↻</span><small>Review</small></a><a href="/notes.html" aria-label="My Notes"><span>✎</span><small>Notes</small></a><details class="mobile-more"><summary><span>•••</span><small>More</small></summary><div class="mobile-more-menu"><a href="/search.html">🔎 Search</a><a href="/knowledge.html">🗺️ Knowledge Map</a><a href="/tutor.html">👩‍🏫 Tutor</a></div></details></nav>'}
function renderSubject(name,preserveInputs=false){
 // Keep unfinished work in DOM memory only; completion/Review must not save drafts.
 const retained=preserveInputs?Array.from(document.querySelectorAll('.lesson-mcq[id], #cells-oxygen-practice, #cells-discover-practice, #matter-practice, #puddle-practice, #atoms-prediction, #atoms-comparison, #bonds-prediction, #bonds-interpretation, #reactions-prediction, #reactions-balance, #quiz, textarea[id], .lesson-hint[id], .feedback[id], .simple-explanation[id]')):[];
 const selections=retained.filter(el=>el.tagName==='TEXTAREA').map(el=>({el,start:el.selectionStart,end:el.selectionEnd,direction:el.selectionDirection,scrollTop:el.scrollTop}));
 const disclosures=preserveInputs?Array.from(document.querySelectorAll('details')).map(el=>el.open):[];
 const focused=preserveInputs?document.activeElement:null,focusId=focused?.id,focusLesson=focused?.closest('.lesson')?.id,focusHandler=focused?.getAttribute('onclick');
 const d=SUBJECTS[name],s=state(),done=s.completed[name]||[],p=subjectProgress(name);
 document.title=name+' | My Learning OS';
 ensureQuizStyles();
 document.getElementById('app').innerHTML=nav()+`<main class="hero"><a class="back" href="/">← Back to Learning Areas</a><h1>${d.icon} ${name}</h1><p class="muted">${d.desc}</p></main>
 <section class="panel"><div class="stats"><div class="stat"><strong>${done.length}</strong><span>lessons done</span></div><div class="stat"><strong>${d.lessons.length}</strong><span>lessons</span></div><div class="stat"><strong>${p}%</strong><span>progress</span></div><div class="stat"><strong>${s.scores[name]?.score||0}%</strong><span>quiz</span></div></div><div class="bar" style="margin-top:16px"><div style="width:${p}%"></div></div></section>
 <section class="panel course-panel${name==='Biology'?' biology-lesson-panels':''}"><div class="course-heading"><div><h2>Your lessons</h2><p class="muted">Open one lesson at a time. You can go at your own pace.</p></div><span class="course-count">${done.length}/${d.lessons.length}</span></div><div id="lessons">${subjectLessonEntries(name).map(entry=>lessonHTML(name,entry.lesson,entry.legacyIndex,done.includes(entry.legacyIndex))).join('')}</div></section>
 <section class="panel"><h2>My notes</h2><textarea class="note" id="note" placeholder="Write what you understood, a question, or a connection...">${esc(s.notes[name]||'')}</textarea><div class="lesson-actions"><button onclick="saveNote()">Save notes</button><span id="saved" class="muted"></span></div><p class="notes-return"><a href="#lessons">← Return to ${esc(name)} lessons</a></p></section>
 <section class="panel"><h2 id="subject-reflection-title">Quick quiz</h2><p id="subject-reflection-description">Answer in your own words, then reveal the model answer.</p><div id="quiz"></div></section>
 <details class="home-details"><summary>🛟 Back up my learning data</summary><div class="home-notes"><p class="muted">Save a copy of your completed lessons, notes, quiz answers, reviews, and project progress. Keep the backup somewhere safe.</p><div class="lesson-actions"><button onclick="exportLearningBackup()">Download backup</button><button class="button secondary" onclick="document.getElementById('learningBackupFile').click()">Restore backup</button><button class="button secondary" onclick="downloadPreRestoreData()">Download pre-restore copy</button></div><input id="learningBackupFile" type="file" accept=".json,application/json" style="display:none" onchange="importLearningBackup(this)"><p class="muted" style="font-size:.8rem">Restoring replaces included fields and keeps fields missing from older backups. A local pre-restore copy is kept; download it before your next restore.</p><p id="backupStatus" class="muted" role="status"></p></div></details>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
 newQuestion();
 renderQuiz(name);
 if(name==='Biology'||name==='Chemistry'){
  const hero=document.querySelector('#app > main.hero'),stats=document.querySelector('#app > section.panel');
  hero.outerHTML=subjectJourneyHTML(name,s);
  stats.remove();
  document.querySelector('.course-heading h2').textContent='Your continuous learning journey';
  document.querySelector('.course-heading p').textContent='Four core lessons. Growing challenge, with every lesson open to explore.';
  if(name==='Chemistry')document.querySelector('.course-count').textContent=subjectLessonEntries(name).filter(entry=>done.includes(entry.legacyIndex)).length+'/'+d.lessons.length;
  if(name==='Biology'){
  const quizHeading=document.querySelector('#quiz').previousElementSibling.previousElementSibling;
  quizHeading.textContent='Subject reflection';
  document.getElementById('subject-reflection-description').textContent='Compare your explanation with the model answer. This self-marked activity is separate from scored lesson practice.';
  prepareBiologyDashboardTools();
  if(typeof location!=='undefined'&&['#note','#quiz','#quizAnswer','#subject-reflection-title','#biology-backup-controls','#biology-image-credits'].includes(location.hash))syncBiologyLessonHash();
  }
 }
 const nextLesson=getNextLesson(),cont=document.getElementById("continueLearning");
 if(cont) cont.innerHTML=nextLesson?'<p class="muted">'+esc(nextLesson.name)+' · Lesson '+(nextLesson.i+1)+'</p><h3>'+esc(nextLesson.lesson[0])+'</h3><p class="muted">'+esc(nextLesson.lesson[1])+'</p><a class="button" href="/subjects/'+nextLesson.name.toLowerCase()+'/#lesson-'+nextLesson.i+'">Continue →</a>':'<p>🎉 You have completed every lesson currently in the course.</p>';
 for(const el of retained){const replacement=document.getElementById(el.id);if(replacement&&replacement!==el)replacement.replaceWith(el);}
 selections.forEach(({el,start,end,direction,scrollTop})=>{el.setSelectionRange(start,end,direction);el.scrollTop=scrollTop;});
 if(preserveInputs){
  document.querySelectorAll('details').forEach((el,index)=>{el.open=disclosures[index]??false;});
  const lesson=focusLesson&&document.getElementById(focusLesson);
  let target=document.contains(focused)?focused:focusId&&document.getElementById(focusId);
  if(!target&&lesson&&focusHandler)target=Array.from(lesson.querySelectorAll('button')).find(el=>el.getAttribute('onclick')===focusHandler);
  if((!target||target.disabled)&&lesson)target=lesson.querySelector('.lesson-summary');
  target?.focus({preventScroll:true});
 }
}
function prepareBiologyDashboardTools(){
 // Move existing panels, never recreate editors, Save controls or their children.
 if(document.getElementById('biology-original-note'))return;
 const note=document.getElementById('note'),reflection=document.getElementById('quiz');
 const notePanel=note?.closest?.('section.panel'),reflectionPanel=reflection?.closest?.('section.panel');
 const backup=document.getElementById('learningBackupFile')?.closest?.('details');
 if(!notePanel||!reflectionPanel||!backup)return;
 const tools=document.createElement('section');tools.className='biology-dashboard-tools';tools.setAttribute('aria-label','Biology notes, reflection, backups and image credits');
 notePanel.before(tools);
 for(const [panel,id,label] of [[notePanel,'biology-original-note','Original Biology note'],[reflectionPanel,'biology-reflection','Subject reflection']]){
  const disclosure=document.createElement('details'),summary=document.createElement('summary');
  disclosure.className='biology-tools-disclosure';disclosure.id=id;summary.textContent=label;
  disclosure.appendChild(summary);disclosure.appendChild(panel);tools.appendChild(disclosure);
 }
 const noteHeading=notePanel.querySelector('h2');noteHeading.id='biology-original-note-title';note.setAttribute('aria-labelledby',noteHeading.id);
 backup.classList.add('biology-tools-disclosure');backup.id='biology-backup-controls';backup.querySelector('summary').textContent='Backup and restore';tools.appendChild(backup);
 const credits=document.createElement('details');credits.className='biology-tools-disclosure biology-image-credits';credits.id='biology-image-credits';
 credits.innerHTML='<summary>Image credits and licences</summary><div class="biology-credit-content"><p>Hero: <a href="https://www.pexels.com/photo/orange-butterfly-on-a-fern-plant-2640323/">Todd Trapani / Pexels</a> · <a href="https://www.pexels.com/license/">Pexels licence</a>.</p><p>Seedling: <a href="https://unsplash.com/photos/a-small-green-plant-sprouts-from-the-ground---DI97TZcAA">taehyeon kim / Unsplash</a>. DNA visualization: <a href="https://unsplash.com/photos/glowing-dna-double-helix-structure-Iy7QyzOs1bo">Sangharsh Lohakare / Unsplash</a> · <a href="https://unsplash.com/license">Unsplash licence</a>.</p><p>Cells: <a href="https://commons.wikimedia.org/wiki/File:Plagiomnium_affine_laminazellen.jpeg">Kristian Peters; current file modified by René Esposito</a> · <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>. Cropped and resized; colours unchanged. These adapted cell images remain available under CC BY-SA 3.0.</p><p>Finch: <a href="https://commons.wikimedia.org/wiki/File:Darwin%27s_Finch_on_Cactus.jpg">Victor Gleim</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. Cropped and resized; colours unchanged. These adapted finch images remain available under CC BY-SA 4.0.</p><p>Photography illustrates the subject; teaching diagrams remain inside the lessons. <a href="/assets/biology/photography/CREDITS.md">Full source, modification and image licence record</a>.</p></div>';
 tools.appendChild(credits);
}
function revealBiologyDashboardTool(id){
 if(!/^\/subjects\/biology\/(?:index\.html)?$/.test(location.pathname))return;
 const target=document.getElementById(id),disclosure=target?.closest?.('details.biology-tools-disclosure');
 if(!disclosure)return;
 disclosure.open=true;
 const focusTarget=target.tagName==='DETAILS'?target.querySelector('summary'):target;
 focusTarget?.setAttribute('tabindex',focusTarget.tagName==='TEXTAREA'?'0':'-1');
 focusTarget?.focus({preventScroll:true});target.scrollIntoView({behavior:'auto',block:'start'});
}
function subjectJourneyHTML(name,s){
 const chemistry=name==='Chemistry';
 const d=SUBJECTS[name],entries=subjectLessonEntries(name),records=entries.map(entry=>resolveLessonRecords(s,name,entry.id??entry.legacyIndex));
 const completed=new Set(records.filter(record=>record.completed).map(record=>record.legacyIndex));
 const nextEntry=records.find(record=>!record.completed),next=nextEntry?nextEntry.legacyIndex:-1;
 const notes=(s.noteLibrary||[]).filter(n=>!n.archivedAt&&(n.category===name||n.category==='Subject · '+name));
 if(name==='Biology'){
  const todayKey=localReviewDayKey(new Date());
  const completedToday=new Set((s.reviewCompletions||{})[todayKey]||[]),readyIds=new Set();
  Object.values(s.review||{}).forEach(item=>{
   if(item?.subject!==name||!Number.isInteger(item.index)||!d.lessons[item.index]||!item.nextReview)return;
   const date=new Date(item.nextReview);
   if(!Number.isNaN(date.getTime())&&localReviewDayKey(date)<=todayKey&&!completedToday.has('lesson:'+name+':'+item.index))readyIds.add('lesson:'+name+':'+item.index);
  });
  Object.values(s.quizResults||{}).forEach(item=>{
   if(item?.subject!==name||!Number.isInteger(item.index)||!d.lessons[item.index]||!item.nextReviewAt)return;
   const date=new Date(item.nextReviewAt);
   if(!Number.isNaN(date.getTime())&&localReviewDayKey(date)<=todayKey&&!completedToday.has('quiz:'+name+':'+item.index))readyIds.add('quiz:'+name+':'+item.index);
  });
  const art={
   'biology-life':{key:'seedling',alt:'A two-leaf seedling emerging from dark soil.'},
   'biology-cells':{key:'cells',alt:'Microscopic moss leaf cells with green chloroplasts and visible cell boundaries.'},
   'biology-dna-heredity':{key:'dna',alt:'An illustrative three-dimensional DNA double helix, not microscope photography.'},
   'biology-natural-selection':{key:'finch',alt:'A Galápagos finch perched on a cactus, photographed by Victor Gleim.'}
  };
  const photograph=(image,className='')=>`<img class="${className}" src="/assets/biology/photography/${image.key}-320.jpg" srcset="/assets/biology/photography/${image.key}-320.jpg 320w, /assets/biology/photography/${image.key}-640.jpg 640w" sizes="(max-width:650px) 96px, (max-width:1100px) 170px, 220px" alt="${image.alt}" width="640" height="480" loading="lazy" decoding="async">`;
  const lessonCards=entries.map((entry,position)=>{
   const index=entry.legacyIndex,id=entry.id||resolveSubjectLesson(name,index)?.id,isComplete=completed.has(index),isNext=index===next;
   const status=isComplete?'Completed':isNext?(completed.size?'Continue learning':'Start here'):'Open lesson';
   return `<article class="biology-lesson-card${isComplete?' is-complete':''}"><a href="#lesson-${index}" onclick="openLesson(${index})" aria-label="Lesson ${position+1}: ${esc(entry.lesson[0])}. ${status}.">${photograph(art[id])}<span class="biology-lesson-copy"><small>Lesson ${position+1}</small><strong>${esc(entry.lesson[0])}</strong><span class="biology-lesson-status">${isComplete?'<span aria-hidden="true">✓</span> ':''}${status}</span></span><span class="biology-lesson-arrow" aria-hidden="true">→</span></a></article>`;
  }).join('');
  const nextImage=nextEntry&&art[nextEntry.id];
  return `<main class="hero subject-journey biology-dashboard" id="subject-overview">
 <a class="back biology-breadcrumb" href="/">Learning Areas <span aria-hidden="true">/</span> <strong>Biology</strong></a>
 <section class="biology-hero" aria-labelledby="biology-dashboard-title"><picture><source media="(max-width:650px)" srcset="/assets/biology/photography/hero-mobile-480.jpg 480w, /assets/biology/photography/hero-mobile-800.jpg 800w" sizes="70vw"><img src="/assets/biology/photography/hero-wide-600.jpg" srcset="/assets/biology/photography/hero-wide-600.jpg 600w, /assets/biology/photography/hero-wide-1200.jpg 1200w" sizes="(max-width:1100px) 50vw, 600px" alt="Orange-and-black butterfly with open wings resting among fern fronds. Photograph by Todd Trapani." width="1200" height="520" fetchpriority="high" decoding="async"></picture><div class="biology-hero-copy"><h1 id="biology-dashboard-title">Biology</h1><p>Discover how life begins, functions, changes and evolves.</p></div></section>
 <section class="biology-priority-grid" aria-label="Continue learning and review"><article class="biology-feature biology-continue" aria-labelledby="biology-continue-title"><h2 id="biology-continue-title">${next<0?'Core lessons completed':completed.size?'Continue learning':'Start your journey'}</h2>${next<0?`<p>Return to any lesson, review an idea or explore the Plant Evolution project.</p><a class="button" href="/review.html">Open Review →</a>`:`<div class="biology-next">${photograph(nextImage,'biology-next-image')}<div><h3>${esc(d.lessons[next][0])}</h3><p>Lesson ${next+1} of ${d.lessons.length}</p><a class="button" href="#lesson-${next}" onclick="openLesson(${next})">${completed.size?'Continue lesson':'Start lesson 1'} →</a></div></div>`}</article><article class="biology-feature biology-review" aria-labelledby="biology-review-title"><h2 id="biology-review-title">Ready to review</h2><div class="biology-review-content"><p class="biology-review-count"><span aria-hidden="true">✓</span><strong>${readyIds.size} ${readyIds.size===1?'item':'items'} to revisit</strong></p><a class="button secondary" href="/review.html">Open review →</a></div>${readyIds.size?'':'<p class="biology-review-empty">No Biology reviews are due today.</p>'}</article></section>
 <section class="biology-dashboard-section" aria-labelledby="biology-lessons-title"><div class="biology-section-heading"><h2 id="biology-lessons-title">Your learning journey</h2><span>${completed.size} of ${d.lessons.length} core lessons completed</span></div><div class="biology-lesson-grid">${lessonCards}</div><p class="biology-saved-note">Completion records learning activity, not proven mastery. Quizzes stay inside each lesson.</p></section>
 <section class="biology-dashboard-section" aria-labelledby="biology-explore-title"><h2 id="biology-explore-title">Explore further</h2><div class="biology-support-grid"><a class="biology-support-card" href="/projects.html?project=plant-evolution"><span class="biology-support-icon" aria-hidden="true">♧</span><strong>Plant Evolution project</strong><span class="biology-lesson-arrow" aria-hidden="true">→</span></a><article class="biology-support-card biology-library-card"><a href="/notes.html"><span class="biology-support-icon" aria-hidden="true">▤</span><strong>My Notes</strong><span class="biology-support-meta">${notes.length} Biology ${notes.length===1?'note':'notes'}</span></a></article><a class="biology-support-card" href="/knowledge.html"><span class="biology-support-icon" aria-hidden="true">⌘</span><strong>Knowledge Map</strong><span class="biology-lesson-arrow" aria-hidden="true">→</span></a></div></section>
 </main>`;

 }
 return `<main class="hero subject-journey" id="subject-overview">
 <a class="back" href="/">← Back to Learning Areas</a>
 <p class="journey-eyebrow">ONE CONTINUOUS LEARNING JOURNEY</p><h1>${d.icon} ${esc(name)}</h1>
 <p>${chemistry?'Explore matter, atoms, bonds and reactions. Connect explanations to everyday changes.':'Discover life. Understand its systems. Connect ideas through investigation.'}</p>
 <div class="journey-next"><section aria-labelledby="journey-next-title"><h2 id="journey-next-title">${next<0?'Core lessons completed':completed.size?'Continue learning':'Start your journey'}</h2>
 <p>${completed.size} of ${d.lessons.length} core lessons completed</p>
 ${next<0?`<p>Return to any lesson, review an idea or investigate the ${chemistry?'application':'project'}.</p><a class="button" href="/review.html">Open Review →</a>`:`<h3>${esc(d.lessons[next][0])}</h3><a class="button" href="#lesson-${next}" onclick="${chemistry?'openChemistryJourneyLesson':'openLesson'}(${next})">${completed.size?'Continue lesson':'Start lesson 1'} →</a>`}
 <p class="muted">Completion records your learning activity, not a mastery score.</p></section>
 <section><h2>Remember and connect</h2><p>Return to your scheduled lesson and practice reviews.</p><a href="/review.html">View review schedule →</a><p><a href="/tutor.html">Ask your tutor →</a> <small>Select ${esc(name)} in the Tutor.</small></p></section></div>
 <nav class="journey-links" aria-label="${esc(name)} journey">${entries.map((entry,position)=>`<a href="#lesson-${entry.legacyIndex}" onclick="${chemistry?'openChemistryJourneyLesson':'openLesson'}(${entry.legacyIndex})"><span>${completed.has(entry.legacyIndex)?'✓':position+1}</span> ${esc(entry.lesson[0])}</a>`).join('')}</nav>
 <div class="journey-connections"><section><h2>Apply your learning</h2>${chemistry?'<p>How can you distinguish melting ice from a chemical reaction? Use changes in substance identity as evidence.</p><a href="#lesson-3" onclick="openChemistryJourneyLesson(3)">Explore chemical reactions →</a>':'<p>Investigate connections between cells, heredity and adaptation.</p><a href="/projects.html?project=plant-evolution">Explore Plant Evolution →</a>'}</section>
 <section><h2>Connect and explore</h2><p>${chemistry?'How do atoms, bonds and reactions connect Chemistry with Biology and Physics?':'How does chemistry help us understand living systems?'}</p><a href="/knowledge.html">Explore the Knowledge Map →</a></section>
 <section><h2>Your ${esc(name)} notes</h2><p>${notes.length?notes.length+' '+esc(name)+' '+(notes.length===1?'note':'notes')+' in your library.':'Capture a question or discovery in your Notes Library.'}</p><a href="/notes.html">Open My Notes →</a><p><a href="#note">Your original ${esc(name)} note ↓</a></p></section></div>
 <p class="muted">Saved in this browser when you save or complete an activity. Backup controls are below the lessons.</p>
 </main>`;
}
function openChemistryJourneyLesson(index){
 const entry=resolveSubjectLesson('Chemistry',index);if(!entry)return;
 openLesson(entry.legacyIndex);
 requestAnimationFrame(()=>requestAnimationFrame(()=>document.getElementById('lesson-'+entry.legacyIndex)?.querySelector('.lesson-summary')?.focus({preventScroll:true})));
}
function lessonHelp(title){
 const data={
 "What does physics study?":["Think about the forces acting on the ball and the direction each force pulls.","Gravity pulls the ball downward. The throw gives it upward motion, but gravity slows it until it starts falling. Air resistance may also affect the motion."],
 "Motion and speed":["Compare how far something travels with how long it takes; remember that velocity includes direction.","Speed is distance divided by time. Velocity also states the direction of motion, so two objects can have the same speed but different velocities."],
 "Energy":["Think about the energy the object has while moving and what happens when it hits something.","As an object falls, gravitational potential energy changes into kinetic energy. When it hits something, energy may transfer into sound, heat, deformation, and movement."],
 "Gravity and orbits":["Imagine the Moon moving sideways while gravity pulls it toward Earth.","The Moon is continually falling toward Earth, but its sideways motion carries it around the planet. Gravity changes its direction and keeps it in orbit."],
 "What is matter made of?":["Think about tiny particles and the difference between changing shape and making a new substance.","Ordinary matter is made of atoms. Atoms can bond into molecules; physical changes rearrange or separate particles, while chemical changes create new combinations."],
 "Atoms and elements":["Focus on the particle inside an atom's nucleus that defines its element.","Carbon atoms have six protons and oxygen atoms have eight. The proton number, called atomic number, determines the element."],
 "Chemical bonds":["Think about electrical attraction and what happens to the energy of atoms when they bond.","Atoms form bonds through interactions involving electrons and nuclei. Bond formation can lower the system's energy, making the bonded arrangement more stable under those conditions."],
 "Chemical reactions":["Count each kind of atom before and after the reaction.","A balanced equation has the same number of each type of atom on both sides because chemical reactions rearrange atoms rather than create or destroy them."],
 "What is life?":["Think about what the plant does to stay alive, obtain energy, grow, and respond to its environment.","A plant is living because it is made of cells, uses energy, grows, maintains internal processes, and responds to its environment, such as growing toward light."],
 "Cells: the basic unit":["Think of a cell membrane as a boundary that controls exchange with the surroundings.","Cell membranes separate the inside of a cell from its environment and selectively control what enters and leaves, helping maintain conditions needed for life."],
 "DNA and heredity":["Think about how instructions in DNA affect the molecules a cell makes.","DNA contains genes that can provide instructions for functional RNA or proteins. These molecules influence cell processes and development, helping shape traits."],
 "Evolution by natural selection":["Think about inherited differences and which individuals leave more offspring over generations.","When individuals have inherited variations that affect reproductive success, the traits associated with greater success can become more common over generations. This is natural selection."],
 "How do historians study the past?":["Ask who created each source, why they created it, and what evidence could support or challenge it.","Two sources can differ because their creators had different experiences, purposes, audiences, or information. Historians compare sources to build an explanation supported by evidence."],
 "Prehistory and archaeology":["Think about what tools, bones, and their location reveal about everyday activities.","A stone tool can reveal clues about the technology and tasks of its makers. Its age, location, wear, and nearby remains help archaeologists interpret how it was used."],
 "Agriculture and civilization":["Consider what happens when people can grow and store more food than they immediately need.","Farming could create food surpluses that supported larger settlements and specialized jobs. It also changed work and social structures and could bring inequality and disease."],
 "Empires and exchange":["Think about what travellers carried besides goods, and what happened when cultures met.","Trade routes helped spread ideas and inventions because travellers, merchants, and communities exchanged knowledge as well as goods. These contacts could also spread disease and unequal power."],
 "What is economics?":["Think about the best alternative you give up when choosing one option.","Opportunity cost is the value of the next-best alternative forgone. Choosing to spend money or time on one thing means it cannot be used for that alternative."],
 "Supply and demand":["Imagine many buyers want an item but sellers have only a few available.","When demand is greater than available supply, buyers may compete for limited units, putting upward pressure on prices. More supply or lower demand can ease that pressure."],
 "Incentives":["Think about how a reward or cost might change the choices someone makes.","An incentive changes the expected benefit or cost of an action. People may respond by changing their behavior, though the result can differ from what the designer intended."],
 "Trade and specialization":["Think about how focusing on different tasks can let people produce more together.","Specialization can improve productivity when people focus on tasks with lower opportunity costs, then trade for other goods. Both sides can benefit if the terms of trade work for them."],
 "What is a business?":["Think about the customer's need, what the business offers, and why someone would pay for it.","A business creates value by solving a customer problem or meeting a need. It can continue operating when customers value the offer and revenue can cover its costs."],
 "Revenue, costs and profit":["Subtract all costs from sales revenue; remember that sales alone do not show profit.","Profit equals revenue minus costs. A business can have high sales but little profit if product, delivery, advertising, and other costs consume most of the revenue."],
 "Understanding customers":["Ask what customers struggle with and look for evidence in their real behavior.","Businesses can learn what customers value by asking focused questions, observing problems, and checking buying behavior. This reduces guesswork when choosing product features."],
 "Testing a business idea":["Think about how to gather evidence from a few potential customers before buying lots of stock.","A small test, such as showing a sample or testing a product page, provides evidence about interest before a large investment. Feedback can guide improvements or prevent a costly mistake."],
 "What is technology?":["Identify the problem the tool solves and how its parts work together.","Technology combines tools, knowledge, and processes to achieve a useful result. A map app combines location data, maps, and route calculations to help someone reach a destination."],
 "How does the internet work?":["Think about what your browser requests and which computer sends the website files back.","A browser requests website data from a server. Networks carry that data to your device, and the browser interprets the returned files to display the page."],
 "What is an algorithm?":["Think about a recipe: why would doing steps in the wrong order change the result?","An algorithm is a clear sequence of steps. Order matters when one step depends on the result of an earlier step, so changing the order can change or break the outcome."],
 "What is artificial intelligence?":["Remember that AI learns patterns from examples, but a pattern can be incomplete or misleading.","AI models learn patterns from training data and use them to generate predictions or outputs. They can produce plausible but false information, so important claims should be checked."],
 "What is philosophy?":["Think about how a philosophical question asks for reasons, definitions, or principles rather than only a measurement.","Philosophy examines fundamental questions by clarifying concepts, identifying assumptions, and testing arguments. Different answers can be compared by the quality of their reasons."],
 "How do we know?":["Ask what evidence supports the belief and whether independent sources confirm it.","A belief is better justified when strong evidence and reasons support it. A claim can be true by luck without being well justified, so we should examine how we know."],
 "Ethics and choices":["Think about who is affected by the decision and which values may conflict.","Ethical choices can involve competing duties, consequences, and ideas of fairness. Considering who is affected and explaining the principles behind a decision helps make the reasoning clearer."],
 "Arguments and reasoning":["Separate the conclusion from the reasons offered to support it.","An argument gives reasons intended to support a conclusion. A strong argument has relevant evidence and premises that genuinely support the conclusion; confidence alone is not enough."]
 };
 const pair=data[title]||["Identify the main idea, then ask what causes the result in the example.","A good answer states the main idea and explains the cause-and-effect connection in your own words."];
 return {hint:pair[0],answer:pair[1]};
}
const QUIZ_MISCONCEPTIONS={
 Physics:{
  "What does physics study?":["Physics studies only planets and stars, not everyday objects.","Physics relies on opinions rather than observations or experiments.","Physics describes events but never looks for patterns or mathematical models."],
  "Motion and speed":["Speed includes direction, while velocity only measures distance per time.","An object moving at constant speed must also be moving in a straight line.","An object is at rest whenever no force acts on it, even if it is already moving."],
  "Energy":["Energy is used up and disappears whenever an object stops moving.","Only moving objects can have energy.","Potential energy and kinetic energy are exactly the same thing."],
  "Gravity and orbits":["The Moon stays in orbit because gravity does not reach it.","An orbit means an object is not affected by gravity.","The Moon would orbit Earth in the same way even if it had no sideways motion."]
 },
 Chemistry:{
  "What is matter made of?":["Melting creates a completely new substance every time.","Atoms disappear when a material changes state.","All molecules contain atoms of different elements."],
  "Atoms and elements":["An element is defined by its number of neutrons.","Atoms of the same element always have different numbers of protons.","The periodic table is arranged only by the size of atoms."],
  "Chemical bonds":["Ionic bonds form when atoms share electrons equally.","Covalent bonds happen only when electrons are transferred completely.","Atoms bond because they are trying to become living things."],
  "Chemical reactions":["Atoms are destroyed and new atoms appear during ordinary chemical reactions.","The number of each type of atom can change when an equation is balanced.","Reactants and products are always the same substances."]
 },
 Biology:{
  "What is life?":["Plants are not alive because they do not move from place to place.","Living things do not need energy if they remain in one place.","Every living organism must be made of many cells."],
  "Cells: the basic unit":["All cells have a nucleus.","A cell membrane lets every substance pass freely in and out.","Prokaryotic cells contain a nucleus, but eukaryotic cells do not."],
  "DNA and heredity":["DNA directly determines every trait without environmental or developmental effects.","Every gene codes for one protein and nothing else.","Traits are inherited because organisms choose which DNA to pass on."],
  "Evolution by natural selection":["Individuals evolve because they need a trait during their lifetime.","Natural selection gives organisms traits because they are trying to adapt.","Evolution always moves toward greater complexity."]
 },
 History:{
  "How do historians study the past?":["A written source is always more reliable than an object or oral account.","A source tells the whole truth regardless of who created it.","Historians should use only sources that agree with each other."],
  "Prehistory and archaeology":["Archaeologists can know exactly what a person thought from a tool alone.","Prehistory means that no evidence from the period exists.","A stone tool's location and wear tell archaeologists nothing useful."],
  "Agriculture and civilization":["Farming immediately made every community healthier and more equal.","Agriculture changed food production but had no effect on settlement size.","Civilizations appeared only because people stopped trading."],
  "Empires and exchange":["Trade routes carried goods but never ideas or diseases.","Empires affected all people in the same way and involved no coercion.","Cultural exchange always happened peacefully and equally."]
 },
 Economics:{
  "What is economics?":["Scarcity means a society has absolutely no resources.","Opportunity cost is the money price only, never time or another choice.","A choice has no opportunity cost if it feels enjoyable."],
  "Supply and demand":["When demand rises, prices must always fall.","Supply means how much buyers want to purchase at each price.","A shortage means sellers have more units available than buyers want."],
  "Incentives":["People respond only to money and never to rules or social consequences.","An incentive always produces the exact behavior its designer intended.","Changing the cost of an action cannot affect anyone's choices."],
  "Trade and specialization":["Both sides can benefit from trade only if they produce the same goods.","Comparative advantage means being best at producing everything.","Specialization always reduces productivity and makes trade unnecessary."]
 },
 Business:{
  "What is a business?":["A business creates value only when it sells the most expensive product.","Customer needs are unimportant if the owner likes the product.","Revenue alone guarantees that a business is profitable."],
  "Revenue, costs and profit":["Profit is the total amount of money received from sales.","A business with high revenue must have high profit.","Delivery, advertising and other operating expenses do not affect profit."],
  "Understanding customers":["The best way to learn customer needs is to assume everyone wants what the seller likes.","Compliments from friends prove that a product will sell well.","A business should avoid observing how customers currently solve a problem."],
  "Testing a business idea":["Ordering the largest possible stock is the best first test of demand.","A product page cannot provide useful evidence until thousands of people see it.","Customer feedback should be ignored if it challenges the original idea."]
 },
 Technology:{
  "What is technology?":["Technology refers only to electronic devices and computers.","A tool is useful even if it does not help with a task or problem.","Technology works without knowledge, design or processes."],
  "How does the internet work?":["A website is stored entirely inside the phone of every person who visits it.","Servers are unnecessary because browsers create every website themselves.","Data travels across the internet without shared protocols or addressing."],
  "What is an algorithm?":["An algorithm is a random set of actions with no defined goal.","The order of steps never matters in a procedure.","An algorithm must always be written in a programming language."],
  "What is artificial intelligence?":["AI understands every answer exactly as a human does.","A confident AI answer is automatically true.","AI can work only when every possible answer has been manually written in advance."]
 },
 Philosophy:{
  "What is philosophy?":["Philosophy accepts claims without examining reasons or assumptions.","Philosophy asks only questions that can be answered with a measurement.","A philosophical argument is strong simply because many people agree with it."],
  "How do we know?":["A belief is justified whenever it happens to be true, even by luck.","Evidence is unnecessary if a person feels certain.","Two people cannot have different levels of justification for the same belief."],
  "Ethics and choices":["Ethics is only about obeying laws, never about values or duties.","A good outcome means the decision was necessarily fair to everyone.","People who share a goal must always agree on the right action."],
  "Arguments and reasoning":["An opinion becomes a strong argument when it is stated confidently.","A conclusion is supported even if the reasons are unrelated to it.","If the conclusion is popular, the premises do not need checking."]
 }
};
const QUIZ_AUDIT_BANK={
Physics:{
"What does physics study?":["A ball is thrown upward. What mainly causes it to slow down?","Gravity pulls downward; air resistance may also affect the ball.","The upward force from your hand continues acting after contact ends.","The ball temporarily has no forces acting on it.","The ball's mass gradually decreases."],
"Motion and speed":["Two cyclists travel at 10 km/h, one north and one south. What is true?","They have the same speed but different velocities because their directions differ.","They have different speeds because they travel in opposite directions.","They have identical velocities because their speed is equal.","Neither cyclist is moving because their speeds match."],
"Energy":["A book falls from a shelf. What happens to its gravitational potential energy?","It decreases as energy is transferred into kinetic energy, with some potentially dissipated.","It increases because the book moves faster.","It disappears and is not transferred into another form.","It stays constant because the book's mass does not change."],
"Gravity and orbits":["If a satellite lost its sideways speed near Earth, what would gravity tend to do?","It would fall toward Earth rather than continue its usual orbit.","It would remain in the same circular orbit.","It would move straight away because gravity pushes outward.","It would stop experiencing gravity."]
},
Chemistry:{
"What is matter made of?":["Ice melts into liquid water. What has happened?","It is a physical change: the particles remain water molecules but move differently.","Water molecules have changed into a new element.","The atoms have been destroyed and replaced.","Melting is necessarily a chemical reaction."],
"Atoms and elements":["An atom has six protons. Which element is it?","Carbon, because an element is defined by its number of protons.","Oxygen, because all non-metals are oxygen.","Any element, because proton number does not identify it.","Carbon only if it also has six neutrons."],
"Chemical bonds":["Two atoms share a pair of electrons. What kind of bond is this?","A covalent bond, in which atoms share electron pairs.","An ionic bond defined by full electron transfer.","A nuclear bond that changes the elements.","No bond, because sharing electrons prevents attraction."],
"Chemical reactions":["An equation has four oxygen atoms on the left but only two on the right. What should happen?","Adjust coefficients until each type of atom is balanced on both sides.","Delete extra oxygen atoms from the reactants.","Change oxygen atoms into another element.","Leave it unbalanced because atom counts do not matter."]
},
Biology:{
"What is life?":["A young plant grows toward a sunny window. What does this demonstrate?","It is a living organism responding to its environment while growing.","Plants are not alive because only animals respond to stimuli.","The plant moves only if it changes location as a whole.","It proves plants obtain all energy directly from soil."],
"Cells: the basic unit":["A cell needs nutrients but must keep harmful substances out. Which structure regulates exchange?","The cell membrane selectively controls what enters and leaves.","The nucleus acts as a freely open outer wall.","The cell wall controls all molecular traffic in every cell.","DNA physically pumps all substances across the boundary."],
"DNA and heredity":["A gene affects a protein used to make pigment. How could it influence appearance?","By influencing a cellular process that contributes to pigment production.","By directly choosing appearance regardless of cells.","By changing the number of protons in the organism's atoms.","By guaranteeing the same appearance in every environment."],
"Evolution by natural selection":["Some beetles are better camouflaged and leave more offspring. What may happen over generations?","If camouflage is heritable, it may become more common in the population.","Every beetle changes color because it needs to survive.","The population stops evolving once camouflage appears.","The least successful beetles always pass on more traits."]
},
History:{
"How do historians study the past?":["Two sources describe a battle differently. What should a historian do?","Compare perspectives, purposes and other evidence before drawing a conclusion.","Assume the account by a soldier must be correct.","Discard both sources because disagreement makes evidence useless.","Choose whichever account sounds more dramatic."],
"Prehistory and archaeology":["A stone tool is found beside animal bones and a hearth. What is the best conclusion?","The context provides clues about activities, but interpretations need evidence.","It proves exactly what every person believed.","It has no historical value because it is not written.","It proves the tool had only one possible use."],
"Agriculture and civilization":["A village begins producing surplus grain. What change might follow?","Some people may take specialized jobs because not everyone must produce food full time.","Everyone must move away immediately.","Surplus food guarantees equal wealth for every household.","Trade and social organization become impossible."],
"Empires and exchange":["What might travel along trade routes besides goods?","Ideas, technologies, languages and sometimes diseases can travel with people.","Nothing, because only objects cross cultural boundaries.","Only rulers' ideas spread, with no local influence.","Knowledge never changes when people meet."]
},
Economics:{
"What is economics?":["You study on Saturday instead of taking a paid shift. What is an opportunity cost?","The value of the next-best alternative you gave up, such as those wages.","Every possible activity you could ever do, added together.","Only the money spent on study materials.","Nothing, because studying is useful."],
"Supply and demand":["Many people want a product, but shops have very few units. What pressure may result?","Buyers may compete for limited units, putting upward pressure on price.","Prices must fall because more people are interested.","Supply automatically increases immediately.","Demand becomes zero because the product is scarce."],
"Incentives":["A city charges for parking in crowded areas. Why might behavior change?","The added cost may encourage some drivers to choose other transport or locations.","Prices have no effect on choices.","Every driver must respond in exactly the same way.","The charge automatically creates more parking spaces."],
"Trade and specialization":["Countries specialize according to lower opportunity cost. What concept explains potential gains?","Comparative advantage: specialize according to opportunity cost and trade.","Absolute advantage means one country must produce everything.","Trade benefits only the country with the largest population.","Opportunity cost is irrelevant to specialization."]
},
Business:{
"What is a business?":["Travellers struggle to organize toiletries. What is a useful starting point for a business idea?","Offer a solution that helps travellers and test whether they value it.","Choose a product without investigating the problem.","Assume everyone will buy any item with a luxury label.","Set a high price first and ignore usefulness."],
"Revenue, costs and profit":["You sell a bag for €30 and product plus delivery cost €18. What remains before other costs?","€12 before additional expenses such as advertising, fees and taxes.","€30, because costs are not subtracted.","€18, because that is the profit.","€48, because revenue and costs are added."],
"Understanding customers":["What is a strong early way to investigate demand for a travel pouch?","Ask target customers about needs and observe their buying or packing habits.","Ask only close friends whether they like the color.","Order a large stock before talking to anyone.","Treat social media likes as proof of paid demand."],
"Testing a business idea":["You have a small budget for a new product. Which test reduces risk?","Show a sample or simple product page to potential customers before scaling.","Spend the whole budget on stock immediately.","Assume no sales proves no market after one view.","Ignore costs and test only the logo."]
},
Technology:{
"What is technology?":["A map app combines location data, maps and software. What does this illustrate?","Technology combines tools and knowledge to help solve a practical problem.","Technology must be a physical machine, so apps do not count.","The app works without data or instructions.","Technology always replaces human judgment completely."],
"How does the internet work?":["You open a website and your browser requests its page. What typically happens next?","A server or service sends requested data through networks for the browser to display.","The page appears without any data being sent or received.","Your phone physically travels to the server.","The browser downloads the entire internet first."],
"What is an algorithm?":["A recipe says to preheat the oven before baking. Why might order matter?","Some steps depend on earlier steps, so changing order can affect the result.","Instructions always work in any order.","A recipe cannot be an algorithm because it is not code.","Order matters only when steps are alphabetical."],
"What is artificial intelligence?":["An AI gives a confident but incorrect historical date. What is sensible?","Verify the claim against reliable sources because plausible answers can be wrong.","Accept it because confidence guarantees accuracy.","Assume every other answer from the AI is false.","Use it without checking if it sounds fluent."]
},
Philosophy:{
"What is philosophy?":["Two people disagree about fairness. What philosophical approach could help?","Clarify the concept, examine assumptions and compare the reasons for each view.","Count votes and treat the majority as automatically correct.","End the discussion because concepts cannot be examined.","Assume both claims are equally justified without evaluation."],
"How do we know?":["You guess a hidden number correctly but had no clues. Was the belief well justified?","No. It happened to be true, but you lacked evidence or good reasons.","Yes, because truth alone always proves good reasoning.","Yes, because confidence is the same as evidence.","No, because a lucky guess cannot ever be true."],
"Ethics and choices":["Two people want to reduce poverty but disagree about a policy's fairness. Why might they differ?","They may weigh consequences, duties, rights or fairness principles differently.","One must not care about poverty at all.","Ethical reasoning cannot consider more than one value.","The law automatically settles every moral question."],
"Arguments and reasoning":["Someone says a policy works because it worked once in one town. What should you ask?","Ask whether one example is sufficient and whether other factors explain the outcome.","Accept it because one example proves a universal rule.","Reject it only because it is an opinion.","Ignore evidence and focus on the speaker's confidence."]
}};
const QUIZ_TRANSFER_BANK={"Physics":{"What does physics study?":["A cyclist brakes suddenly and slows down. Which question is physics best suited to investigate?","Measure the motion and forces involved, then use evidence to explain how the cyclist slows.","Accept the first explanation someone suggests without testing it.","Assume the bicycle stops because its mass disappears.","Conclude that everyday motion cannot be studied scientifically."],"Motion and speed":["A train travels 120 km in 2 hours. What is its average speed?","60 km/h, found by dividing distance by time.","240 km/h, found by adding distance and time.","2 km/h, because the trip lasted 2 hours.","60 km/h in every direction, because speed includes direction."],"Energy":["A stretched elastic band is released and moves. What energy change best explains this?","Stored elastic potential energy is transferred mainly into kinetic energy, with some sound and heat.","Energy is created from nothing when the band moves.","The band loses all energy before moving.","Kinetic energy changes into mass, so energy is no longer conserved."],"Gravity and orbits":["A spacecraft is moving sideways fast enough to orbit Earth. Why does it not fly away in a straight line?","Gravity continually changes its direction while its sideways motion carries it forward.","Gravity stops acting once it leaves the ground.","Its engine must push it forward every second or it immediately falls.","Earth's gravity pushes it outward."]},"Chemistry":{"What is matter made of?":["A puddle evaporates on a warm day. What best describes the change?","Water molecules spread into the air; evaporation is a physical change, not a new substance.","Water atoms turn into a new element because they move faster.","The water molecules are destroyed by heat.","Evaporation always produces a chemical reaction."],"Atoms and elements":["Two atoms both have 8 protons but different numbers of neutrons. What is true?","They are both oxygen atoms but are different isotopes.","They are different elements because neutron number defines an element.","They must have identical masses because they have the same protons.","One must be a molecule because its neutron number differs."],"Chemical bonds":["Sodium transfers an electron to chlorine, forming charged particles that attract. Which bond is this?","An ionic bond formed by attraction between oppositely charged ions.","A covalent bond because the electron is shared equally.","A metallic bond because the atoms become neutral gases.","A nuclear bond that changes sodium into chlorine."],"Chemical reactions":["A student mixes two substances and sees bubbles. What is the best conclusion?","Bubbles may indicate a reaction, but more evidence is needed to identify what happened.","Bubbles prove every atom has been destroyed.","The mixture must be boiling, so a chemical reaction is impossible.","Any visible change proves a new element formed."]},"Biology":{"What is life?":["A dormant seed shows little visible activity. Which conclusion is best?","Dormancy does not make it nonliving; the seed can resume growth under suitable conditions.","It is not alive because living things must move continuously.","It is alive only after it grows leaves.","It gets all its energy from sunlight while dormant."],"Cells: the basic unit":["A scientist observes a cell with its DNA enclosed inside a nucleus. What can they conclude?","It is a eukaryotic cell; prokaryotic cells do not have a nucleus.","It must be a prokaryotic cell because all cells have a nucleus.","It cannot be alive because its DNA is enclosed.","It must be a plant cell because only plants have nuclei."],"DNA and heredity":["Two siblings have many traits in common but are not identical. Which explanation is best?","They inherit combinations of genetic variants, and development and environment can also affect traits.","They must have exactly the same DNA because they have the same parents.","Their traits are determined only by environment, never genes.","Each sibling chooses which genes become active."],"Evolution by natural selection":["A pesticide kills most insects, but a few with inherited resistance survive and reproduce. What may happen next?","Resistance may become more common over generations because resistant insects leave more offspring.","Every insect develops resistance because it needs it.","The insects that died pass on more resistance than survivors.","The species intentionally changes its genes in response to the pesticide."]},"History":{"How do historians study the past?":["An official inscription praises a victory, while private letters describe heavy losses. What should a historian do?","Consider each source's purpose and audience, then compare them with other evidence.","Trust the inscription because official sources are always neutral.","Trust private letters automatically because private sources cannot be biased.","Ignore both sources because they disagree."],"Prehistory and archaeology":["Two stone tools are found: one near a hearth and animal bones, another in a burial. What is the strongest conclusion?","Their contexts suggest different possible uses, but interpretations should be tested against other evidence.","The tools must have had exactly the same use because both are stone.","The burial proves the tool was used only in a religious ceremony.","Without writing, neither tool can provide historical evidence."],"Agriculture and civilization":["A farming settlement produces more grain than it needs and stores the surplus. What is one plausible consequence?","Some people may specialize in crafts or trade, while storage and ownership can also change social relations.","Surplus guarantees every household becomes equally wealthy.","People must stop exchanging goods because they can grow food.","Farming always eliminates disease and conflict."],"Empires and exchange":["A new crop appears after merchants begin visiting a region. What is the most careful interpretation?","Trade contact may have helped spread the crop, but timing and other evidence are needed.","Merchants definitely invented the crop in that region.","The crop proves all cultural exchange was peaceful.","A crop cannot spread through human movement."]},"Economics":{"What is economics?":["A town uses its only vacant lot for a park instead of shops. What is the opportunity cost?","The value of the best alternative use given up, such as the shops that could have been built there.","The total value of every other project in the town.","Only the money already spent on the park, regardless of alternatives.","Nothing, because parks can benefit the community."],"Supply and demand":["A popular concert has fewer tickets than people who want them. What is likely, all else equal?","Competition among buyers can put upward pressure on ticket prices.","Prices must fall because tickets are limited.","Demand disappears when a product is scarce.","The number of tickets instantly increases to match demand."],"Incentives":["A shop offers a discount for bringing a reusable bag. What behavior might this encourage?","Some customers may bring reusable bags because doing so lowers their cost.","Every customer will change behavior in exactly the same way.","The discount guarantees the shop's total profit rises.","Customers stop responding to prices after seeing a discount."],"Trade and specialization":["A baker is better than a helper at baking and cleaning, but the helper gives up less baking output when cleaning. What may make specialization useful?","The helper may have a comparative advantage in cleaning because its opportunity cost is lower.","The baker must do both tasks because being better at both removes gains from trade.","Comparative advantage compares only wages, not opportunity costs.","Specialization helps only if both people are equally productive."]},"Business":{"What is a business?":["Travellers say their toiletries leak inside their bags. What is a useful first step for a founder?","Investigate how often the problem occurs and test whether travellers value a practical solution.","Order a large quantity immediately because the problem sounds familiar.","Choose packaging before finding out what travellers need.","Assume every traveller will pay any price for a luxury product."],"Revenue, costs and profit":["You sell 10 pouches for €30 each. Each costs €18 including delivery, and advertising costs €40. What remains before other costs?","€80: €300 revenue minus €180 product and delivery costs and €40 advertising.","€300, because revenue is the same as profit.","€120, because advertising does not count as a cost.","€520, because revenue and expenses are added."],"Understanding customers":["Ten people say they like a pouch, but none agrees to buy it at €35. What should you infer?","Positive comments alone do not prove willingness to pay; test price and purchase behavior further.","The product is guaranteed to sell because people liked it.","The only solution is to raise the price further.","Customer feedback is useless and should be ignored."],"Testing a business idea":["You have money for only three sample pouches. What is the most informative next step?","Show samples to target customers, gather specific feedback and test willingness to pay before reordering.","Spend the budget on a large batch before testing.","Change the logo repeatedly without speaking to customers.","Treat one social media like as proof of strong demand."]},"Technology":{"What is technology?":["A paper map and a smartphone map both help someone navigate. What do they have in common?","Both apply knowledge and tools to solve a practical problem, even though one is digital.","Only the smartphone map is technology because technology must use electricity.","The paper map is not technology because it cannot collect live data.","Neither is technology unless it makes decisions without people."],"How does the internet work?":["A website update appears on your phone after you refresh. What likely happened?","Your browser requested current data from a server or service over a network.","Your phone physically connected to the website's computer without a network.","The browser guessed the page without receiving information.","Every website is permanently stored inside your phone before you visit."],"What is an algorithm?":["A navigation app reroutes you after a road closes. Which part is algorithmic?","A defined sequence of steps uses updated information to calculate a new route.","The app chooses a route randomly without rules or input.","A route is an algorithm only if a person performs every step by hand.","Changing the input can never change an algorithm's output."],"What is artificial intelligence?":["An AI summarizes a document but invents a sentence that is not in it. What should you do?","Check the summary against the original because fluent output can still contain errors.","Trust the sentence because language models cannot invent details.","Assume the entire document is false because one sentence is wrong.","Use the summary without checking if it sounds convincing."]},"Philosophy":{"What is philosophy?":["Two people disagree about whether a rule is fair. What is a useful next step?","Define what they mean by fairness and examine the reasons and assumptions behind each position.","Choose the view of the more confident speaker.","Assume disagreement means there is no better or worse reasoning.","Count the votes and treat the majority as proof."],"How do we know?":["You believe a train is delayed because an official service notice confirms it. What supports the belief?","Relevant evidence from the service notice, assuming it is reliable and current.","Your certainty alone, regardless of the notice's reliability.","The fact that the delay would be convenient.","A notice from an unrelated day proves the train is delayed now."],"Ethics and choices":["A policy helps many people but imposes a serious burden on a small group. What ethical issue should be considered?","How benefits, harms, rights and fairness are distributed, not only the total benefit.","Only whether the policy is legal, since law answers every moral question.","Whether the largest group approves, regardless of the burden on others.","Nothing, because good intentions guarantee fair outcomes."],"Arguments and reasoning":["Someone claims all online courses are effective because one friend learned a lot from one course. What is the main weakness?","One example is not enough to support a broad claim; more varied evidence is needed.","The argument is strong because personal experience proves every case.","The conclusion is false solely because it is an opinion.","The claim needs no evidence if the friend is trustworthy."]}};
const QUIZ_QUESTION_STEMS={Physics:{"What does physics study?":"A cyclist brakes on a wet road. What would a physicist measure to explain the change in motion?","Motion and speed":"Two runners cover the same distance in different times. Which measurement lets you compare their average speeds?","Energy":"A ball rolls down a ramp. Which energy change best explains its increasing speed?","Gravity and orbits":"A satellite moves sideways while gravity pulls it toward Earth. What explains its orbit?"},Chemistry:{"What is matter made of?":"Ice melts in a glass. What happens to the particles during this change?","Atoms and elements":"Two atoms have the same number of protons but different numbers of neutrons. How are they related?","Chemical bonds":"Two non-metal atoms share electron pairs. What does this tell you about their bond?","Chemical reactions":"A student balances a reaction equation. What must remain equal on both sides?"},Biology:{"What is life?":"A seed appears inactive for months, then germinates when conditions improve. What does this show?","Cells: the basic unit":"A cell takes in nutrients while keeping its internal conditions stable. Which structure helps regulate this exchange?","DNA and heredity":"A gene affects a protein involved in pigment production. How could this influence a trait?","Evolution by natural selection":"A few insects survive a pesticide because of inherited resistance. What may happen over generations?"},History:{"How do historians study the past?":"Two accounts of the same event disagree. What is the most reliable next step for a historian?","Prehistory and archaeology":"A stone tool is found beside a hearth and animal bones. What can the find reasonably suggest?","Agriculture and civilization":"A farming community begins storing surplus grain. What social change could this make possible?","Empires and exchange":"A new technology appears after a region's trade links expand. What is the careful historical conclusion?"},Economics:{"What is economics?":"You spend Saturday studying instead of taking a paid shift. What is the key trade-off?","Supply and demand":"More buyers want a product than shops have available. What pressure may occur, all else equal?","Incentives":"A city introduces a parking charge in a crowded area. Why might some drivers change their behavior?","Trade and specialization":"Two people differ in how much output they give up when switching tasks. What should guide specialization?"},Business:{"What is a business?":"Travellers complain that toiletries leak inside their luggage. What should a founder do first?","Revenue, costs and profit":"A shop sells more units but also spends more on delivery and advertising. What determines whether profit rises?","Understanding customers":"Friends praise your product idea, but no strangers have bought it. What evidence should you gather next?","Testing a business idea":"You have a limited budget for a new product. Which test can reduce the risk before buying stock?"},Technology:{"What is technology?":"A map app combines location data, maps and software to suggest a route. What makes it useful technology?","How does the internet work?":"You open a website and your phone receives its page files. What role does the server play?","What is an algorithm?":"A recipe produces the wrong result when steps are done out of order. What does this demonstrate?","What is artificial intelligence?":"An AI gives a confident answer that contains a false detail. What is the safest conclusion?"},Philosophy:{"What is philosophy?":"Two people disagree about what makes an action fair. What would a philosophical approach examine?","How do we know?":"Someone guesses a fact correctly but has no evidence. Does being correct alone mean they knew it?","Ethics and choices":"A decision helps many people but unfairly harms one person. What kind of ethical question arises?","Arguments and reasoning":"A speaker makes a confident claim but gives unrelated reasons. What should you evaluate?"}};
const QUIZ_MISCONCEPTION_STEMS={Physics:{"What does physics study?":"Which claim misunderstands the scope or methods of physics?","Motion and speed":"Which claim confuses speed with velocity or motion?","Energy":"Which claim misunderstands energy transfer or conservation?","Gravity and orbits":"Which claim misunderstands gravity or orbital motion?"},Chemistry:{"What is matter made of?":"Which claim confuses a physical change with a chemical change?","Atoms and elements":"Which claim confuses atomic number with another property?","Chemical bonds":"Which claim confuses ionic and covalent bonding?","Chemical reactions":"Which claim violates conservation of atoms in a chemical reaction?"},Biology:{"What is life?":"Which claim misunderstands what makes an organism living?","Cells: the basic unit":"Which claim misunderstands cell structures or their functions?","DNA and heredity":"Which claim oversimplifies how genes influence traits?","Evolution by natural selection":"Which claim misunderstands how natural selection changes populations?"},History:{"How do historians study the past?":"Which claim treats historical sources too uncritically?","Prehistory and archaeology":"Which claim overstates what archaeological evidence can prove?","Agriculture and civilization":"Which claim oversimplifies the effects of agriculture?","Empires and exchange":"Which claim oversimplifies cultural exchange under empires?"},Economics:{"What is economics?":"Which claim misunderstands scarcity or opportunity cost?","Supply and demand":"Which claim misunderstands how supply and demand affect prices?","Incentives":"Which claim assumes incentives always have the same effect?","Trade and specialization":"Which claim confuses comparative advantage with absolute advantage?"},Business:{"What is a business?":"Which claim confuses a product idea with proven customer value?","Revenue, costs and profit":"Which claim confuses revenue with profit?","Understanding customers":"Which claim relies on assumptions instead of customer evidence?","Testing a business idea":"Which claim increases business risk without testing demand?"},Technology:{"What is technology?":"Which claim defines technology too narrowly?","How does the internet work?":"Which claim misunderstands how browsers and servers exchange data?","What is an algorithm?":"Which claim misunderstands the role of ordered steps?","What is artificial intelligence?":"Which claim overestimates the reliability or understanding of AI?"},Philosophy:{"What is philosophy?":"Which claim avoids the reasoning and examination philosophy requires?","How do we know?":"Which claim confuses truth with justified knowledge?","Ethics and choices":"Which claim oversimplifies ethical decision-making?","Arguments and reasoning":"Which claim mistakes confidence or popularity for a good argument?"}};
const QUIZ_TOPIC_LABELS={
 Physics:{"What does physics study?":"physics","Motion and speed":"motion and speed","Energy":"energy","Gravity and orbits":"gravity and orbits"},
 Chemistry:{"What is matter made of?":"matter and particles","Atoms and elements":"atoms and elements","Chemical bonds":"chemical bonds","Chemical reactions":"chemical reactions"},
 Biology:{"What is life?":"living things","Cells: the basic unit":"cells","DNA and heredity":"DNA and heredity","Evolution by natural selection":"evolution by natural selection"},
 History:{"How do historians study the past?":"historical evidence","Prehistory and archaeology":"prehistory and archaeology","Agriculture and civilization":"agriculture and civilization","Empires and exchange":"empires and cultural exchange"},
 Economics:{"What is economics?":"economics","Supply and demand":"supply and demand","Incentives":"incentives","Trade and specialization":"trade and specialization"},
 Business:{"What is a business?":"business value","Revenue, costs and profit":"revenue, costs and profit","Understanding customers":"understanding customers","Testing a business idea":"testing a business idea"},
 Technology:{"What is technology?":"technology","How does the internet work?":"the internet","What is an algorithm?":"algorithms","What is artificial intelligence?":"artificial intelligence"},
 Philosophy:{"What is philosophy?":"philosophy","How do we know?":"knowledge and justification","Ethics and choices":"ethics","Arguments and reasoning":"arguments and reasoning"}
};
const QUIZ_CONCEPT_NOTES={
 Physics:{
  "What does physics study?":"Physics tests explanations against observations and experiments; models help describe patterns and predict what may happen.",
  "Motion and speed":"Average speed is distance divided by time. Velocity also includes direction, so two objects can have equal speeds but different velocities.",
  "Energy":"Energy is transferred or transformed rather than created from nothing. Moving objects have kinetic energy; position or arrangement can store potential energy.",
  "Gravity and orbits":"An orbit is continuous free-fall: gravity bends an object's path while its sideways motion keeps it from falling straight down."
 },
 Chemistry:{
  "What is matter made of?":"A physical change alters a substance's state or form, but not its chemical identity. In a chemical reaction, atoms are rearranged into new substances.",
  "Atoms and elements":"An element is identified by proton number. Atoms of the same element can have different numbers of neutrons; these forms are called isotopes.",
  "Chemical bonds":"Covalent bonds involve shared electron pairs. Ionic bonds involve attraction between positively and negatively charged ions.",
  "Chemical reactions":"Ordinary chemical reactions rearrange atoms; they do not create or destroy them. Balanced equations use coefficients to show equal numbers of each atom on both sides."
 },
 Biology:{
  "What is life?":"Living things use energy and respond to their surroundings. A seed can be alive during dormancy even when visible activity is very low.",
  "Cells: the basic unit":"The cell membrane is selectively permeable, helping control exchange with the surroundings. Eukaryotic cells have a nucleus; prokaryotic cells do not.",
  "DNA and heredity":"Genes influence traits through their effects on RNA, proteins and cellular processes. Traits can also be shaped by development and environment.",
  "Evolution by natural selection":"Natural selection acts on heritable variation in populations. Individuals do not evolve a needed trait on purpose; trait frequencies can change over generations."
 },
 History:{
  "How do historians study the past?":"Sources have perspectives and limitations. Comparing different kinds of evidence helps historians build a better-supported interpretation.",
  "Prehistory and archaeology":"Archaeologists use objects and their context to infer past activities, but one find rarely proves a single certain explanation.",
  "Agriculture and civilization":"Farming and food storage could support settled communities and specialized work, but outcomes varied and could include inequality, disease and conflict.",
  "Empires and exchange":"Trade and empire could spread goods, technologies, languages and beliefs, but exchange also involved power differences, coercion and conflict."
 },
 Economics:{
  "What is economics?":"Scarcity means choices have trade-offs. Opportunity cost is the value of the next-best alternative given up, including time or income.",
  "Supply and demand":"When demand exceeds available supply, buyers may compete for limited goods and push prices upward, all else equal. Real markets can have other influences too.",
  "Incentives":"Incentives change the expected costs or benefits of choices, but people respond differently and outcomes may not match the designer's intentions.",
  "Trade and specialization":"Comparative advantage depends on lower opportunity cost, not simply who is best at everything. Specialization and exchange can let both sides gain."
 },
 Business:{
  "What is a business?":"A business needs to create value customers actually want and are willing to pay for. A promising idea should be tested rather than assumed.",
  "Revenue, costs and profit":"Revenue is sales income; profit is what remains after costs. Product, delivery, advertising, platform fees, returns and taxes can all affect the final result.",
  "Understanding customers":"Compliments and likes are weaker evidence than observed behavior and willingness to pay. Ask target customers about real problems and test the offer.",
  "Testing a business idea":"Small tests can reveal demand before a large investment. Samples, specific customer feedback and a realistic price test reduce—but do not eliminate—risk."
 },
 Technology:{
  "What is technology?":"Technology includes physical tools and digital systems. What matters is how knowledge, tools and processes help people solve a problem.",
  "How does the internet work?":"A browser sends requests over networks and receives data from servers or services. Shared protocols help devices exchange that data.",
  "What is an algorithm?":"An algorithm is an ordered set of steps. The order and input matter because a change can lead to a different result.",
  "What is artificial intelligence?":"AI can produce useful patterns and language, but fluent output is not proof of truth or human-like understanding. Verify important claims."
 },
 Philosophy:{
  "What is philosophy?":"Philosophy clarifies concepts, examines assumptions and evaluates reasons. Confidence or popularity alone does not make a claim well supported.",
  "How do we know?":"A true belief is not automatically knowledge if it is only a lucky guess. Evidence and justification matter, and evidence itself should be assessed for reliability.",
  "Ethics and choices":"Ethical decisions may involve consequences, duties, rights, virtues and fairness. A good analysis considers who benefits and who may be harmed.",
  "Arguments and reasoning":"A strong argument needs relevant reasons that support its conclusion. One example, a confident tone or a popular opinion may not be enough."
 }
};
const QUIZ_DISTRACTOR_FEEDBACK = {
  "Physics|What does physics study?|remember|Physics studies only planets and stars, not everyday objects.": "Physics studies matter, energy, motion, forces, and many other natural phenomena—from falling balls to stars. It is not limited to astronomy.",
  "Physics|What does physics study?|remember|Physics relies on opinions rather than observations or experiments.": "Scientific explanations in physics are tested against observations and experiments. Opinions alone cannot establish whether a model accurately describes nature.",
  "Physics|What does physics study?|remember|Physics describes events but never looks for patterns or mathematical models.": "Physics does more than record events: scientists look for patterns in observations and use models, often mathematical ones, to explain and predict how nature behaves.",
  "Physics|What does physics study?|understand|The ball temporarily has no forces acting on it.": "The ball remains under Earth’s gravity while it rises. Air resistance may also act against its motion, so losing contact with the hand does not mean all forces disappear.",
  "Physics|What does physics study?|understand|The ball's mass gradually decreases.": "Throwing a ball upward does not normally reduce its mass. Its upward motion slows because gravity accelerates it downward; air resistance can also affect the motion.",
  "Physics|What does physics study?|understand|The upward force from your hand continues acting after contact ends.": "The hand can push the ball only while it is in contact with it. After release, gravity continues to act, and air resistance may also act; the hand no longer provides an upward push.",
  "Physics|What does physics study?|apply|Accept the first explanation someone suggests without testing it.": "A first explanation is only a hypothesis. A physicist tests it against observations or measurements—for example, measuring the cyclist’s speed before and after braking—to see whether it fits the evidence.",
  "Physics|What does physics study?|apply|Assume the bicycle stops because its mass disappears.": "A bicycle slowing down does not mean its mass disappears. Friction in the brakes, tires, and road transfers some of its kinetic energy into thermal energy, with possible sound as well.",
  "Physics|What does physics study?|apply|Conclude that everyday motion cannot be studied scientifically.": "Everyday motion can be studied scientifically. Measuring the cyclist’s speed, braking distance, road conditions, and forces can help explain why the bicycle slows down.",
  "Physics|Motion and speed|remember|An object is at rest whenever no force acts on it, even if it is already moving.": "An object can keep moving at constant velocity when the net force is zero. Zero net force means no acceleration; it does not automatically mean the object is at rest.",
  "Physics|Motion and speed|remember|Speed includes direction, while velocity only measures distance per time.": "The definitions are reversed: speed is distance travelled per unit time and has no direction. Velocity describes displacement per unit time and includes direction.",
  "Physics|Motion and speed|remember|An object moving at constant speed must also be moving in a straight line.": "An object can move at constant speed along a curved path. Its direction then changes, so its velocity changes even though its speed stays the same.",
  "Physics|Motion and speed|understand|They have different speeds because they travel in opposite directions.": "Both cyclists travel at 10 km/h, so their speeds are equal. Direction does not change speed, but north and south are different directions, so their velocities differ.",
  "Physics|Motion and speed|understand|They have identical velocities because their speed is equal.": "Equal speed alone does not mean equal velocity. Velocity includes direction, so cyclists moving north and south have different velocities even at 10 km/h.",
  "Physics|Motion and speed|understand|Neither cyclist is moving because their speeds match.": "Matching speeds do not make the cyclists stationary. Each is moving at 10 km/h; they are travelling in opposite directions.",
  "Physics|Motion and speed|apply|60 km/h in every direction, because speed includes direction.": "The average speed is 60 km/h, calculated as 120 km ÷ 2 h. Speed has magnitude only; a direction would be part of velocity, not speed.",
  "Physics|Motion and speed|apply|240 km/h, found by adding distance and time.": "Average speed is found by dividing distance by time, not adding them: 120 km ÷ 2 h = 60 km/h.",
  "Physics|Motion and speed|apply|2 km/h, because the trip lasted 2 hours.": "Two hours is the travel time, not the speed. Divide the 120 km distance by 2 hours to get an average speed of 60 km/h.",
  "Physics|Energy|remember|Only moving objects can have energy.": "An object can have potential energy even when it is still. If an object stops, its kinetic energy becomes zero, but energy may have been transferred to the surroundings as heat or sound; the energy has not simply vanished.",
  "Physics|Energy|remember|Potential energy and kinetic energy are exactly the same thing.": "Kinetic energy is the energy of motion. Potential energy is stored because of position or arrangement, such as a raised book or a stretched elastic band.",
  "Physics|Energy|remember|Energy is used up and disappears whenever an object stops moving.": "When an object stops, its kinetic energy decreases to zero, but the energy is transferred to other forms or to the surroundings—for example, as heat or sound. Energy is conserved; it does not simply disappear.",
  "Physics|Energy|understand|It increases because the book moves faster.": "As the book falls, its height above the ground decreases, so its gravitational potential energy decreases. Its speed increases, so its kinetic energy increases. The book's mass staying the same does not mean its gravitational potential energy stays constant, because height changes.",
  "Physics|Energy|understand|It disappears and is not transferred into another form.": "Energy is not destroyed or created from nothing in this ordinary process. It is transferred between objects or transformed into other forms; identify which form or transfer the scenario describes.",
  "Physics|Energy|understand|It stays constant because the book's mass does not change.": "As the book falls, its height above the ground decreases, so its gravitational potential energy decreases. Its speed increases, so its kinetic energy increases. The book's mass staying the same does not mean its gravitational potential energy stays constant, because height changes.",
  "Physics|Energy|apply|The band loses all energy before moving.": "The stretched band stores elastic potential energy before release. As it snaps back, that stored energy becomes mainly kinetic energy, with some transferred to the surroundings as sound and heat. It does not lose all its energy before moving.",
  "Physics|Energy|apply|Kinetic energy changes into mass, so energy is no longer conserved.": "The band does not turn kinetic energy into mass in this situation. When released, stored elastic potential energy becomes mainly kinetic energy as the band moves; some energy is transferred to the surroundings as sound and heat. Total energy is conserved.",
  "Physics|Energy|apply|Energy is created from nothing when the band moves.": "The stretched band stores elastic potential energy before release. As it snaps back, that stored energy becomes mainly kinetic energy, with some transferred to the surroundings as sound and heat. It does not lose all its energy before moving.",
  "Physics|Gravity and orbits|remember|The Moon stays in orbit because gravity does not reach it.": "Earth’s gravity reaches the Moon and continually pulls it toward Earth. The Moon’s sideways motion means it keeps falling around Earth rather than straight down.",
  "Physics|Gravity and orbits|remember|An orbit means an object is not affected by gravity.": "An orbit depends on gravity, not the absence of it. Gravity continually changes the satellite’s direction, bending its forward motion into a curved path.",
  "Physics|Gravity and orbits|remember|The Moon would orbit Earth in the same way even if it had no sideways motion.": "Sideways motion is essential to the Moon’s orbit. Without that tangential motion, gravity would make it fall more directly toward Earth rather than continue around it.",
  "Physics|Gravity and orbits|understand|It would stop experiencing gravity.": "Losing sideways speed would not switch gravity off. Earth’s gravity would still pull the satellite toward Earth, causing it to fall rather than maintain its usual orbit.",
  "Physics|Gravity and orbits|understand|It would remain in the same circular orbit.": "The usual orbit requires sideways motion as well as gravity. If the satellite lost that sideways speed, its path would change and it would fall toward Earth instead of staying in the same orbit.",
  "Physics|Gravity and orbits|understand|It would move straight away because gravity pushes outward.": "Gravity acts attractively toward Earth; it does not push the satellite outward. The satellite’s forward motion and inward gravitational pull combine to create its curved orbit.",
  "Physics|Gravity and orbits|apply|Gravity stops acting once it leaves the ground.": "Gravity acts at a distance and does not stop at the ground or at the edge of the atmosphere. Earth’s gravity continues to affect a spacecraft in orbit.",
  "Physics|Gravity and orbits|apply|Its engine must push it forward every second or it immediately falls.": "An orbiting spacecraft does not need its engine to keep pushing it forward every second. Its existing sideways velocity carries it forward while gravity continually bends its path; engines are used for changes in orbit or to counter drag when needed.",
  "Physics|Gravity and orbits|apply|Earth's gravity pushes it outward.": "Earth’s gravity pulls the spacecraft inward, toward Earth’s centre. The spacecraft’s sideways motion keeps it moving around Earth, while gravity changes its direction.",
  "Chemistry|What is matter made of?|remember|Melting creates a completely new substance every time.": "Melting is a physical change: the substance changes state, but its particles retain their chemical identity. Chemical reactions, by contrast, produce different substances.",
  "Chemistry|What is matter made of?|remember|Atoms disappear when a material changes state.": "During a change of state, atoms do not disappear. For example, when ice melts, the water molecules are still present; their arrangement and movement change as solid ice becomes liquid water.",
  "Chemistry|What is matter made of?|remember|All molecules contain atoms of different elements.": "A molecule can contain atoms of one element, as in oxygen gas (O₂), or more than one element, as in water (H₂O). Different elements are not required in every molecule.",
  "Chemistry|What is matter made of?|understand|Melting is necessarily a chemical reaction.": "When ice melts, its particles remain water molecules; they become less ordered and can move past one another. That is a physical change, not a new chemical substance.",
  "Chemistry|What is matter made of?|understand|Water molecules have changed into a new element.": "A change of state does not turn water into a new element. The water molecules still contain hydrogen and oxygen; a physical change alters their arrangement or movement, not the identity of the elements.",
  "Chemistry|What is matter made of?|understand|The atoms have been destroyed and replaced.": "Melting ice does not destroy or replace atoms. The water molecules remain H₂O; only their arrangement and movement change as solid ice becomes liquid water.",
  "Chemistry|What is matter made of?|apply|Water atoms turn into a new element because they move faster.": "Heating can make particles move faster, but it does not change one element into another. An element changes only if the number of protons in its nuclei changes; evaporation simply allows water molecules to enter the vapor state.",
  "Chemistry|What is matter made of?|apply|The water molecules are destroyed by heat.": "During evaporation, water molecules escape from the liquid into the air. The H₂O molecules are not destroyed; they move farther apart in the gas state.",
  "Chemistry|What is matter made of?|apply|Evaporation always produces a chemical reaction.": "Evaporation is a physical change: liquid water becomes water vapor, but the particles remain H₂O. No new substance is formed, so evaporation itself is not a chemical reaction.",
  "Chemistry|Atoms and elements|remember|An element is defined by its number of neutrons.": "Neutron number can vary between isotopes of the same element. An element is identified by its number of protons in the nucleus.",
  "Chemistry|Atoms and elements|remember|Atoms of the same element always have different numbers of protons.": "Atoms of the same element have the same number of protons. If their proton numbers differed, they would be atoms of different elements.",
  "Chemistry|Atoms and elements|remember|The periodic table is arranged only by the size of atoms.": "The periodic table is ordered by atomic number, which is the number of protons. Atomic size varies across the table, but it is not the basis for its ordering.",
  "Chemistry|Atoms and elements|understand|Any element, because proton number does not identify it.": "The proton number identifies the element. Atoms with different numbers of protons are different elements, even if they have similar properties in some ways.",
  "Chemistry|Atoms and elements|understand|Carbon only if it also has six neutrons.": "Carbon is defined by having six protons, not by having six neutrons. Carbon isotopes can have different numbers of neutrons and are still carbon.",
  "Chemistry|Atoms and elements|understand|Oxygen, because all non-metals are oxygen.": "Oxygen is only one non-metal. Elements such as carbon, nitrogen and sulfur are also non-metals, and each is identified by its own proton number.",
  "Chemistry|Atoms and elements|apply|They are different elements because neutron number defines an element.": "Atoms with the same number of protons are the same element. A difference in neutron number makes them different isotopes, not different elements.",
  "Chemistry|Atoms and elements|apply|They must have identical masses because they have the same protons.": "Atoms of the same element can have different masses if they contain different numbers of neutrons. These oxygen atoms are isotopes, so their proton counts match but their masses can differ.",
  "Chemistry|Atoms and elements|apply|One must be a molecule because its neutron number differs.": "A molecule is made of two or more atoms chemically bonded together; a different neutron count alone does not make an atom a molecule. It may instead indicate an isotope.",
  "Chemistry|Chemical bonds|remember|Atoms bond because they are trying to become living things.": "Atoms do not form bonds because they are alive or have intentions. Bonding happens through electrical interactions between electrons and nuclei, and some arrangements have lower energy than separate atoms.",
  "Chemistry|Chemical bonds|remember|Ionic bonds form when atoms share electrons equally.": "Equal sharing of electron pairs describes a nonpolar covalent bond, not an ionic bond. Ionic bonding is the attraction between positively and negatively charged ions.",
  "Chemistry|Chemical bonds|remember|Covalent bonds happen only when electrons are transferred completely.": "Covalent bonds involve atoms sharing electron pairs. Complete electron transfer can form ions that attract in ionic bonding; it is not how covalent bonds are defined.",
  "Chemistry|Chemical bonds|understand|An ionic bond defined by full electron transfer.": "Electron transfer can create positively and negatively charged ions, but the ionic bond itself is the electrostatic attraction between those oppositely charged ions.",
  "Chemistry|Chemical bonds|understand|A nuclear bond that changes the elements.": "Chemical bonds involve electrons and the attraction between atoms or ions. Changing one element into another requires changing the number of protons in the nucleus, which is a nuclear change, not ordinary chemical bonding.",
  "Chemistry|Chemical bonds|understand|No bond, because sharing electrons prevents attraction.": "Sharing electrons can create a covalent bond because the shared electron density is attracted to both nuclei, helping hold the atoms together.",
  "Chemistry|Chemical bonds|apply|A nuclear bond that changes sodium into chlorine.": "Sodium transferring an electron to chlorine does not change either element. It forms sodium and chloride ions, whose opposite charges attract to create an ionic bond.",
  "Chemistry|Chemical bonds|apply|A covalent bond because the electron is shared equally.": "Sodium transfers an electron to chlorine rather than sharing it equally. This forms positive sodium ions and negative chloride ions, and their opposite charges attract in an ionic bond.",
  "Chemistry|Chemical bonds|apply|A metallic bond because the atoms become neutral gases.": "Sodium and chlorine form charged ions in this example, not neutral gaseous atoms in a metal lattice. Their opposite charges attract, producing ionic bonding.",
  "Chemistry|Chemical reactions|remember|The number of each type of atom can change when an equation is balanced.": "Balancing changes the coefficients in front of chemical formulas, not the atoms themselves. The number of each type of atom must be equal on both sides of the equation.",
  "Chemistry|Chemical reactions|remember|Reactants and products are always the same substances.": "Reactants are the starting substances, while products are the substances formed. In a chemical reaction, atoms rearrange into new combinations, so the products can have different chemical identities from the reactants.",
  "Chemistry|Chemical reactions|remember|Atoms are destroyed and new atoms appear during ordinary chemical reactions.": "In ordinary chemical reactions, atoms are conserved and rearranged into new combinations. A balanced equation therefore has the same number of each type of atom on both sides; coefficients show the required proportions.",
  "Chemistry|Chemical reactions|understand|Delete extra oxygen atoms from the reactants.": "A balanced equation must keep the same number of each type of atom on both sides. Adjust coefficients in front of formulas; do not delete atoms from the reactants.",
  "Chemistry|Chemical reactions|understand|Change oxygen atoms into another element.": "Balancing an equation does not turn oxygen into another element. Keep each element unchanged and adjust coefficients so each type of atom has equal counts on both sides.",
  "Chemistry|Chemical reactions|understand|Leave it unbalanced because atom counts do not matter.": "Atom counts matter: each type of atom must be balanced on both sides, with the same number of that atom on each side. Adjusting coefficients changes how many molecules or formula units are represented without changing chemical formulas or turning one element into another.",
  "Chemistry|Chemical reactions|apply|The mixture must be boiling, so a chemical reaction is impossible.": "Bubbles can be a sign that a gas is forming during a chemical reaction, but bubbles alone do not prove exactly what happened. Look for additional evidence before deciding what caused them.",
  "Chemistry|Chemical reactions|apply|Any visible change proves a new element formed.": "A visible change does not automatically mean a new element formed. Bubbles may indicate gas production, but you need more evidence to identify the process and products.",
  "Chemistry|Chemical reactions|apply|Bubbles prove every atom has been destroyed.": "Bubbles do not mean atoms have been destroyed. In ordinary chemical reactions, atoms are rearranged; use additional evidence to work out whether a gas formed and what reaction occurred.",
  "Biology|What is life?|remember|Living things do not need energy if they remain in one place.": "Living organisms need energy even when they do not move from place to place. A resting or dormant organism still carries out essential processes, though activity may be greatly reduced.",
  "Biology|What is life?|remember|Every living organism must be made of many cells.": "Some living organisms, such as bacteria, consist of a single cell. Being multicellular is not a requirement for life.",
  "Biology|What is life?|remember|Plants are not alive because they do not move from place to place.": "Movement from place to place is not required for life. Plants grow and respond to stimuli, such as light, even though they remain rooted in one spot.",
  "Biology|What is life?|understand|Plants are not alive because only animals respond to stimuli.": "Plants also respond to stimuli—for example, shoots can grow toward light. Responses to the environment are not limited to animals.",
  "Biology|What is life?|understand|The plant moves only if it changes location as a whole.": "A plant can move or change direction through growth, such as a shoot bending toward light, without the whole organism changing location.",
  "Biology|What is life?|understand|It proves plants obtain all energy directly from soil.": "Soil supplies water and minerals, but most plants capture light energy for photosynthesis and make sugars from carbon dioxide and water.",
  "Biology|What is life?|apply|It is alive only after it grows leaves.": "A viable seed is already living while dormant. Leaves appear later during germination; visible growth is not the moment life begins.",
  "Biology|What is life?|apply|It gets all its energy from sunlight while dormant.": "A dormant seed has very low metabolic activity and uses stored reserves when needed; it is not photosynthesizing like a leafy plant.",
  "Biology|What is life?|apply|It is not alive because living things must move continuously.": "Living things do not need to move continuously. Dormant seeds can remain alive with very low activity and germinate when conditions become suitable.",
  "Biology|Cells: the basic unit|remember|All cells have a nucleus.": "Eukaryotic cells have a nucleus, but prokaryotic cells such as bacteria lack one. A nucleus is therefore not present in every cell.",
  "Biology|Cells: the basic unit|remember|A cell membrane lets every substance pass freely in and out.": "The cell membrane is selectively permeable: it regulates the movement of substances rather than allowing everything to cross freely.",
  "Biology|Cells: the basic unit|remember|Prokaryotic cells contain a nucleus, but eukaryotic cells do not.": "This reverses the distinction. Eukaryotic cells have a membrane-bound nucleus; prokaryotic cells do not.",
  "Biology|Cells: the basic unit|understand|DNA physically pumps all substances across the boundary.": "DNA stores genetic information; it does not act as a pump at the cell boundary. The cell membrane and its transport proteins regulate movement.",
  "Biology|Cells: the basic unit|understand|The nucleus acts as a freely open outer wall.": "The nucleus contains much of a eukaryotic cell's DNA. The cell membrane, not the nucleus, forms the cell's outer boundary and regulates exchange.",
  "Biology|Cells: the basic unit|understand|The cell wall controls all molecular traffic in every cell.": "Not all cells have a cell wall, and the plasma membrane regulates exchange across the cell boundary. A wall mainly provides support and protection in organisms that have one.",
  "Biology|Cells: the basic unit|apply|It must be a prokaryotic cell because all cells have a nucleus.": "A cell with a nucleus is eukaryotic. Prokaryotes, including bacteria, do not have a membrane-bound nucleus.",
  "Biology|Cells: the basic unit|apply|It cannot be alive because its DNA is enclosed.": "Many living cells enclose their DNA inside a nucleus. This is a characteristic of eukaryotic cells, not evidence that a cell is nonliving.",
  "Biology|Cells: the basic unit|apply|It must be a plant cell because only plants have nuclei.": "Animal, plant, fungal, and many other eukaryotic cells have nuclei. A nucleus alone does not identify a cell as a plant cell.",
  "Biology|DNA and heredity|remember|DNA directly determines every trait without environmental or developmental effects.": "Genes influence traits through cellular processes, but development and environment can also affect how traits appear. DNA is important without being the only influence on every trait.",
  "Biology|DNA and heredity|remember|Every gene codes for one protein and nothing else.": "Not every gene directly codes for a protein; some genes produce functional RNA, and gene products can be processed in different ways. The relationship is more varied than one gene always making one protein.",
  "Biology|DNA and heredity|remember|Traits are inherited because organisms choose which DNA to pass on.": "Inheritance is not a conscious choice. Offspring receive genetic material through reproduction, with combinations shaped by how reproductive cells form and combine.",
  "Biology|DNA and heredity|understand|By changing the number of protons in the organism's atoms.": "Genes can affect pigment by influencing proteins and cellular pathways involved in making or distributing pigment. Changing an atom's proton count would change the element, not serve as the ordinary mechanism of inherited pigmentation.",
  "Biology|DNA and heredity|understand|By guaranteeing the same appearance in every environment.": "Genes influence traits but do not guarantee identical appearances in all environments. Conditions such as nutrition, light, and development can affect how traits are expressed.",
  "Biology|DNA and heredity|understand|By directly choosing appearance regardless of cells.": "Genes affect traits through molecular and cellular processes; they do not make conscious choices or bypass cells.",
  "Biology|DNA and heredity|apply|They must have exactly the same DNA because they have the same parents.": "Siblings inherit different combinations of genetic variants from the same parents, except in special cases such as identical twins. Shared parents do not mean identical DNA.",
  "Biology|DNA and heredity|apply|Their traits are determined only by environment, never genes.": "Many traits reflect both genetic influences and environmental or developmental factors. It is inaccurate to exclude genes entirely.",
  "Biology|DNA and heredity|apply|Each sibling chooses which genes become active.": "Gene activity is regulated by biological mechanisms and can be influenced by development and environment; siblings do not consciously choose it.",
  "Biology|Evolution by natural selection|remember|Evolution always moves toward greater complexity.": "Evolution has no predetermined goal. Depending on conditions, inherited traits can become simpler, more complex, or remain similar across generations.",
  "Biology|Evolution by natural selection|remember|Individuals evolve because they need a trait during their lifetime.": "Natural selection changes the frequency of heritable traits in populations over generations. Individuals may acclimate during life, but they do not evolve a needed inherited trait on purpose.",
  "Biology|Evolution by natural selection|remember|Natural selection gives organisms traits because they are trying to adapt.": "Natural selection is not intentional. Individuals already vary, and heritable traits linked to greater reproductive success can become more common over generations.",
  "Biology|Evolution by natural selection|understand|Every beetle changes color because it needs to survive.": "Individual beetles do not necessarily change color because they need to. If color differences are heritable, better-camouflaged beetles may survive and reproduce more, making that color more common in later generations.",
  "Biology|Evolution by natural selection|understand|The population stops evolving once camouflage appears.": "Camouflage does not stop evolution. If conditions or inherited variation change, selection and other evolutionary processes can continue to alter the population.",
  "Biology|Evolution by natural selection|understand|The least successful beetles always pass on more traits.": "Organisms that leave fewer offspring generally pass their variants to fewer descendants. Selection depends on reproductive success in a particular environment, not on being least successful.",
  "Biology|Evolution by natural selection|apply|The species intentionally changes its genes in response to the pesticide.": "Pesticides do not make a species intentionally rewrite its genes. Resistant variants may already exist or arise by mutation, and survivors can leave more offspring, increasing resistance over generations.",
  "Biology|Evolution by natural selection|apply|Every insect develops resistance because it needs it.": "Exposure does not make every insect resistant. If some insects have heritable resistance, they may survive and reproduce more, so resistance can become more common over generations.",
  "Biology|Evolution by natural selection|apply|The insects that died pass on more resistance than survivors.": "Insects that die before reproducing generally pass on fewer genes than survivors that reproduce. Resistance can spread when resistant insects leave more offspring.",
  "History|How do historians study the past?|remember|Historians should use only sources that agree with each other.": "Disagreement between sources is a reason to investigate their context, not automatically discard one. Comparing conflicting accounts can reveal different perspectives and help test claims.",
  "History|How do historians study the past?|remember|A written source is always more reliable than an object or oral account.": "Reliability depends on the question and the source's context, purpose, and limitations—not simply whether it is written. Objects and oral accounts can provide valuable evidence too.",
  "History|How do historians study the past?|remember|A source tells the whole truth regardless of who created it.": "Every source reflects what its creator could observe and chose to record. Historians consider authorship, purpose, audience, and omissions, then compare other evidence.",
  "History|How do historians study the past?|understand|Assume the account by a soldier must be correct.": "A soldier may have direct experience but also a limited viewpoint or reason to present events a certain way. Compare the account with other evidence before accepting it.",
  "History|How do historians study the past?|understand|Discard both sources because disagreement makes evidence useless.": "Conflicting sources can still be useful. Historians compare what each person could know, their purpose, and independent evidence to assess the claims.",
  "History|How do historians study the past?|understand|Choose whichever account sounds more dramatic.": "A dramatic story is not necessarily accurate. Assess the source's context and corroboration rather than its emotional impact.",
  "History|How do historians study the past?|apply|Ignore both sources because they disagree.": "Disagreement does not make both sources worthless. Check their dates, authors, purposes, and supporting evidence to understand why their accounts differ.",
  "History|How do historians study the past?|apply|Trust the inscription because official sources are always neutral.": "Official inscriptions can be selective or intended to praise a ruler or institution. Their claims should be compared with other evidence.",
  "History|How do historians study the past?|apply|Trust private letters automatically because private sources cannot be biased.": "Private letters can reveal personal perspectives, but writers still have biases and limited knowledge. Consider the writer's purpose and compare with other evidence.",
  "History|Prehistory and archaeology|remember|Prehistory means that no evidence from the period exists.": "Prehistory refers to a period before written records in a particular society or context. Archaeological remains and environmental evidence can still tell us about it.",
  "History|Prehistory and archaeology|remember|A stone tool's location and wear tell archaeologists nothing useful.": "A tool's location and wear patterns can offer clues about how it was made or used. Archaeologists interpret those clues alongside the surrounding context.",
  "History|Prehistory and archaeology|remember|Archaeologists can know exactly what a person thought from a tool alone.": "A tool can suggest activities or skills, but it cannot reveal a person's exact thoughts by itself. Interpretations need context and supporting evidence.",
  "History|Prehistory and archaeology|understand|It proves exactly what every person believed.": "An archaeological find can support an interpretation, but it rarely establishes what every individual believed. Claims should be limited to what the evidence supports.",
  "History|Prehistory and archaeology|understand|It has no historical value because it is not written.": "Objects and their archaeological context are evidence, especially for periods without written records. Written documents are only one type of historical source.",
  "History|Prehistory and archaeology|understand|It proves the tool had only one possible use.": "A tool may have served several purposes. Shape, wear, material, and find context help assess possible uses, but one explanation should not be assumed without evidence.",
  "History|Prehistory and archaeology|apply|The burial proves the tool was used only in a religious ceremony.": "A burial context may suggest symbolic or ritual significance, but it does not prove the tool had only one use. Compare other finds and traces of wear.",
  "History|Prehistory and archaeology|apply|Without writing, neither tool can provide historical evidence.": "Archaeologists use objects, bones, structures, and environmental traces to study periods without writing. Written sources are not the only historical evidence.",
  "History|Prehistory and archaeology|apply|The tools must have had exactly the same use because both are stone.": "Tools made from the same material can serve different purposes. Shape, wear, and where each was found help distinguish possible uses.",
  "History|Agriculture and civilization|remember|Farming immediately made every community healthier and more equal.": "Farming could support settled communities and food surpluses, but its effects varied. Some communities experienced heavier workloads, new diseases, or greater social inequality.",
  "History|Agriculture and civilization|remember|Agriculture changed food production but had no effect on settlement size.": "Reliable food production and storage could support larger, more permanent settlements, although outcomes varied by region and period.",
  "History|Agriculture and civilization|remember|Civilizations appeared only because people stopped trading.": "Trade continued to matter in many early civilizations, moving resources and ideas between communities. Farming was one important change, not a reason trade stopped.",
  "History|Agriculture and civilization|understand|Trade and social organization become impossible.": "Food surpluses can allow some people to specialize in crafts, trade, administration, or other work rather than growing food full time.",
  "History|Agriculture and civilization|understand|Everyone must move away immediately.": "Agriculture often encouraged more permanent settlements; it did not require everyone to move away. Settlement patterns differed by environment and community.",
  "History|Agriculture and civilization|understand|Surplus food guarantees equal wealth for every household.": "A surplus does not guarantee equal ownership or wealth. Control over land, stored food, and resources could create or deepen inequalities.",
  "History|Agriculture and civilization|apply|Surplus guarantees every household becomes equally wealthy.": "Surplus food can support specialization and exchange, but who controls land and stored food affects how benefits are distributed. Equality is not guaranteed.",
  "History|Agriculture and civilization|apply|People must stop exchanging goods because they can grow food.": "Growing food does not remove the need or desire to trade. Communities may exchange surplus crops, tools, materials, and specialized goods.",
  "History|Agriculture and civilization|apply|Farming always eliminates disease and conflict.": "Farming did not eliminate disease or conflict. Dense settlements and contact with domesticated animals could introduce new health risks, while competition over resources could persist.",
  "History|Empires and exchange|remember|Trade routes carried goods but never ideas or diseases.": "Trade routes connected people as well as goods. Travelers and merchants could spread technologies, beliefs, artistic practices, and diseases along with merchandise.",
  "History|Empires and exchange|remember|Empires affected all people in the same way and involved no coercion.": "Imperial rule affected groups differently and could involve taxation, unequal status, forced labor, or violence as well as trade and infrastructure.",
  "History|Empires and exchange|remember|Cultural exchange always happened peacefully and equally.": "Cultural exchange can occur through cooperation, migration, trade, conquest, or coercion. Its benefits and costs are not necessarily shared equally.",
  "History|Empires and exchange|understand|Only rulers' ideas spread, with no local influence.": "Cultural influence was not always one-way. Local communities could adopt, adapt, resist, or combine outside ideas with their own practices, so rulers were not the only source of change.",
  "History|Empires and exchange|understand|Knowledge never changes when people meet.": "Contact between communities can change what people know and do. Trade, migration, and conquest may transfer skills, technologies, beliefs, and languages, though the effects vary by context.",
  "History|Empires and exchange|understand|Nothing, because only objects cross cultural boundaries.": "People can carry more than physical goods across cultural boundaries: they may also share languages, beliefs, techniques, stories, and customs. Exchange can influence both sides, not just the objects traded.",
  "History|Empires and exchange|apply|Merchants definitely invented the crop in that region.": "Trade can help move a crop into a new region, but that does not show merchants invented it there. To establish where it originated, historians would need evidence such as the crop's earlier presence, dating, and archaeological finds.",
  "History|Empires and exchange|apply|The crop proves all cultural exchange was peaceful.": "A crop spreading between regions can show contact or exchange, but it cannot prove that every interaction was peaceful. Trade and migration sometimes occurred alongside conquest, coercion, or unequal power.",
  "History|Empires and exchange|apply|A crop cannot spread through human movement.": "People can carry seeds or cultivate crops in new places as they travel, migrate, or trade. Evidence of a crop in another region may indicate movement or exchange, although the route and timing need further evidence.",
  "Economics|What is economics?|remember|Scarcity means a society has absolutely no resources.": "Scarcity means resources are limited relative to people's wants. A society can have resources and still face choices about how to use them.",
  "Economics|What is economics?|remember|Opportunity cost is the money price only, never time or another choice.": "Opportunity cost is the value of the next-best alternative given up. It can include time, income, or another opportunity—not just the money price.",
  "Economics|What is economics?|remember|A choice has no opportunity cost if it feels enjoyable.": "Even an enjoyable choice uses limited time or resources. Its opportunity cost is the next-best alternative you give up, regardless of how much you enjoy the choice.",
  "Economics|What is economics?|understand|Only the money spent on study materials.": "The cost of studying can include income you give up while studying, not just money spent on books or supplies. Opportunity cost is the value of the next-best alternative forgone, such as wages.",
  "Economics|What is economics?|understand|Nothing, because studying is useful.": "Studying may be valuable, but you still give up the paid shift you could have worked. The wages you would have earned are an opportunity cost because they are the next-best alternative forgone.",
  "Economics|What is economics?|understand|Every possible activity you could ever do, added together.": "Opportunity cost focuses on the next-best alternative you give up, not the combined value of every activity you could possibly choose.",
  "Economics|What is economics?|apply|The total value of every other project in the town.": "Opportunity cost is the value of the best alternative use forgone, not the total value of every other possible project. Compare the park with the strongest realistic alternative, such as shops that could have been built on the land.",
  "Economics|What is economics?|apply|Only the money already spent on the park, regardless of alternatives.": "Money already spent on the park is a direct expense, not the opportunity cost asked for here. The opportunity cost is the value of the best alternative the town gives up by using the lot for a park, such as the shops it could have built there.",
  "Economics|What is economics?|apply|Nothing, because parks can benefit the community.": "A park may benefit the community, but choosing it still means giving up the best alternative use of the land. Opportunity cost compares those forgone benefits with the park's benefits.",
  "Economics|Supply and demand|remember|A shortage means sellers have more units available than buyers want.": "A shortage occurs when buyers want to purchase more than sellers are offering at the current price. More units available than buyers want describes a surplus, not a shortage.",
  "Economics|Supply and demand|remember|When demand rises, prices must always fall.": "When demand rises while supply and other conditions stay the same, prices generally face upward pressure—not downward pressure. The exact outcome can depend on other market changes.",
  "Economics|Supply and demand|remember|Supply means how much buyers want to purchase at each price.": "Demand describes how much buyers are willing and able to buy at different prices, while supply describes how much sellers are willing and able to offer; they measure different sides of the market.",
  "Economics|Supply and demand|understand|Prices must fall because more people are interested.": "If more buyers want a product while supply stays the same, competition for the limited quantity can push prices upward. Prices do not automatically fall just because interest rises.",
  "Economics|Supply and demand|understand|Supply automatically increases immediately.": "Higher demand does not instantly create more products. Sellers may need time and resources to increase supply, and the amount supplied depends on their ability to respond.",
  "Economics|Supply and demand|understand|Demand becomes zero because the product is scarce.": "Scarcity means the available quantity is limited relative to what people want; it does not mean nobody wants the product. Demand can remain high even when supply is limited.",
  "Economics|Supply and demand|apply|The number of tickets instantly increases to match demand.": "A shortage of tickets does not make more tickets appear instantly. If demand exceeds the available supply, buyers may compete for the limited tickets, putting upward pressure on prices.",
  "Economics|Supply and demand|apply|Prices must fall because tickets are limited.": "Limited ticket supply does not mean prices must fall. When more people want tickets than are available, buyers may compete for them, putting upward pressure on prices.",
  "Economics|Supply and demand|apply|Demand disappears when a product is scarce.": "Scarcity does not make demand disappear. People may still want the product very much; scarcity means there are fewer units available than people want at the current price.",
  "Economics|Incentives|remember|An incentive always produces the exact behavior its designer intended.": "An incentive can influence behavior, but it cannot guarantee the intended response. People may react differently because their needs, resources and alternatives differ.",
  "Economics|Incentives|remember|Changing the cost of an action cannot affect anyone's choices.": "Changing the cost can change the trade-off and influence a person's decision. For example, a higher parking fee may lead some drivers to use another option.",
  "Economics|Incentives|remember|People respond only to money and never to rules or social consequences.": "Incentives are not limited to money. Rules, penalties, recognition and social consequences can also change the expected costs or benefits of an action.",
  "Economics|Incentives|understand|Prices have no effect on choices.": "A price changes the cost of an option, so it can influence what people choose. The effect varies: some people change behavior, while others may keep the same choice.",
  "Economics|Incentives|understand|Every driver must respond in exactly the same way.": "People have different budgets, schedules and alternatives, so the same parking charge will not affect every driver identically. Some may switch transport; others may still pay.",
  "Economics|Incentives|understand|The charge automatically creates more parking spaces.": "A parking charge changes the cost of parking; it does not physically create new spaces. It may reduce demand for the existing spaces or encourage some drivers to choose alternatives.",
  "Economics|Incentives|apply|The discount guarantees the shop's total profit rises.": "A discount for bringing a reusable bag may encourage some customers to bring one because it lowers their cost. However, the shop earns less per discounted sale, so higher total profit is not guaranteed; it depends on how sales and costs change.",
  "Economics|Incentives|apply|Customers stop responding to prices after seeing a discount.": "A discount changes the price incentive; it does not mean customers stop responding to prices. Some may buy because the item costs less, while others may not change their behavior.",
  "Economics|Incentives|apply|Every customer will change behavior in exactly the same way.": "Customers differ in habits and circumstances, so an incentive will not change everyone's behavior identically. Some may bring reusable bags to avoid a charge, while others may not.",
  "Economics|Trade and specialization|remember|Both sides can benefit from trade only if they produce the same goods.": "Trading partners do not need to produce the same goods. They can specialize in different goods or tasks based on opportunity cost and exchange to benefit both sides.",
  "Economics|Trade and specialization|remember|Comparative advantage means being best at producing everything.": "Comparative advantage means having a lower opportunity cost in producing a good or doing a task. Being the most productive at everything is not required for gains from specialization and trade.",
  "Economics|Trade and specialization|remember|Specialization always reduces productivity and makes trade unnecessary.": "Specialization can improve productivity when people or countries focus on what they produce at a lower opportunity cost and trade with others, allowing both sides to benefit.",
  "Economics|Trade and specialization|understand|Opportunity cost is irrelevant to specialization.": "Opportunity cost is central to comparative advantage: people benefit from specializing in the activity where they give up less of their next-best alternative, then trading.",
  "Economics|Trade and specialization|understand|Absolute advantage means one country must produce everything.": "Absolute advantage means producing a good with fewer resources; comparative advantage instead depends on opportunity cost, which is why specialization and trade can benefit both sides.",
  "Economics|Trade and specialization|understand|Trade benefits only the country with the largest population.": "A country's population size alone does not determine whether trade benefits it. Gains depend on factors such as opportunity costs and the terms of exchange, and both partners can benefit.",
  "Economics|Trade and specialization|apply|The baker must do both tasks because being better at both removes gains from trade.": "Even if the baker is more productive at both tasks, the helper may give up less baking output when cleaning, so comparative advantage can still make specialization worthwhile.",
  "Economics|Trade and specialization|apply|Comparative advantage compares only wages, not opportunity costs.": "Comparative advantage is determined by opportunity cost—the next-best output given up—not simply by wages or who earns more.",
  "Economics|Trade and specialization|apply|Specialization helps only if both people are equally productive.": "People do not need to be equally productive for specialization to help. What matters is relative opportunity cost: each can focus on the task where they give up less.",
  "Business|What is a business?|remember|A business creates value only when it sells the most expensive product.": "Value comes from meeting a customer need, not from charging the highest price. A useful offer must make sense to customers and support the business's costs.",
  "Business|What is a business?|remember|Customer needs are unimportant if the owner likes the product.": "An owner may like an idea, but a business needs to solve a real customer problem. Research and testing help check whether people actually want the product.",
  "Business|What is a business?|remember|Revenue alone guarantees that a business is profitable.": "Revenue is money earned from sales; profit is what remains after costs are deducted. High revenue can still lead to a loss if costs are higher.",
  "Business|What is a business?|understand|Set a high price first and ignore usefulness.": "A high price alone does not create value. First understand the customer's problem, then test whether the solution is useful and whether customers will pay a sustainable price.",
  "Business|What is a business?|understand|Choose a product without investigating the problem.": "Choosing a product before understanding the problem risks creating something customers do not need. Identify the travel problem and check whether target customers value the proposed solution.",
  "Business|What is a business?|understand|Assume everyone will buy any item with a luxury label.": "A luxury label does not guarantee demand: customers differ in needs and budgets. Test interest with the intended customer group instead of assuming everyone will buy.",
  "Business|What is a business?|apply|Order a large quantity immediately because the problem sounds familiar.": "A familiar problem is only an initial hypothesis, not proof of demand. Check how often target customers experience it and test a small offer before committing money to large stock.",
  "Business|What is a business?|apply|Choose packaging before finding out what travellers need.": "Packaging should support the solution customers need. Research travellers' problems first; otherwise you may polish a product that does not solve the right problem.",
  "Business|What is a business?|apply|Assume every traveller will pay any price for a luxury product.": "Customers still compare usefulness, quality, alternatives, and price—even for luxury products. Test willingness to pay with target customers.",
  "Business|Revenue, costs and profit|remember|Profit is the total amount of money received from sales.": "Money received from sales is revenue. Profit is what remains after subtracting relevant costs, so the two figures are not interchangeable.",
  "Business|Revenue, costs and profit|remember|A business with high revenue must have high profit.": "High revenue can still produce low profit or a loss when costs are high. Profit depends on the difference between revenue and costs, not revenue alone.",
  "Business|Revenue, costs and profit|remember|Delivery, advertising and other operating expenses do not affect profit.": "Delivery and advertising can be business expenses. When included in relevant costs, they reduce the profit left from sales.",
  "Business|Revenue, costs and profit|understand|€18, because that is the profit.": "This choice does not follow the stated revenue-minus-costs calculation. Subtract the costs given in the question from the revenue, then compare the result with the options.",
  "Business|Revenue, costs and profit|understand|€48, because revenue and costs are added.": "Profit is not revenue plus costs. Costs are deducted from revenue; adding them overstates what the business keeps.",
  "Business|Revenue, costs and profit|understand|€30, because costs are not subtracted.": "Costs must be deducted to find profit. Leaving them out gives an incomplete result, not the amount remaining after expenses.",
  "Business|Revenue, costs and profit|apply|€300, because revenue is the same as profit.": "Revenue is sales income before expenses. Profit is what remains after the business subtracts its relevant costs.",
  "Business|Revenue, costs and profit|apply|€120, because advertising does not count as a cost.": "Advertising is a business expense when calculating profit. Excluding it makes estimated profit too high; include the relevant advertising cost.",
  "Business|Revenue, costs and profit|apply|€520, because revenue and expenses are added.": "Adding expenses to revenue does not calculate profit. Subtract the total relevant expenses from revenue to find what remains.",
  "Business|Understanding customers|remember|A business should avoid observing how customers currently solve a problem.": "Observing current behavior can reveal unmet needs, frustrations, and workarounds. Avoiding observation removes evidence about the problem customers face.",
  "Business|Understanding customers|remember|The best way to learn customer needs is to assume everyone wants what the seller likes.": "The seller's preferences may differ from customers' needs. Interviews, observation, and small tests provide evidence instead of relying on assumptions.",
  "Business|Understanding customers|remember|Compliments from friends prove that a product will sell well.": "Friends may be supportive, but compliments are not the same as purchases. Check feedback from target customers and test willingness to pay.",
  "Business|Understanding customers|understand|Ask only close friends whether they like the color.": "Close friends may not represent the target market, and liking a color does not establish need. Ask target customers about their problems and buying behavior.",
  "Business|Understanding customers|understand|Order a large stock before talking to anyone.": "Buying stock before researching customers increases financial risk. Ask target customers about their needs before deciding what, if anything, to order.",
  "Business|Understanding customers|understand|Treat social media likes as proof of paid demand.": "A like is a low-commitment signal, not a sale. Look for stronger evidence such as qualified price inquiries, sign-ups, preorders where appropriate, or completed purchases.",
  "Business|Understanding customers|apply|Customer feedback is useless and should be ignored.": "Feedback can reveal confusion, unmet needs, or objections. Evaluate it critically and look for patterns rather than dismissing it automatically.",
  "Business|Understanding customers|apply|The product is guaranteed to sell because people liked it.": "Positive reactions show interest, but do not guarantee purchases. Check whether target customers will pay the proposed price and whether the product meets their needs.",
  "Business|Understanding customers|apply|The only solution is to raise the price further.": "Raising the price is not automatically the best response. First find out whether customers see enough value at the current price; test willingness to pay and compare feedback from target customers before changing the price.",
  "Business|Testing a business idea|remember|A product page cannot provide useful evidence until thousands of people see it.": "A small test can reveal early signals, such as questions, sign-ups, and whether visitors understand the offer. A small sample limits certainty but can inform the next test.",
  "Business|Testing a business idea|remember|Customer feedback should be ignored if it challenges the original idea.": "Feedback that challenges the idea may expose a weakness or an assumption to test. Compare feedback from target customers and use evidence to decide whether to revise the idea.",
  "Business|Testing a business idea|remember|Ordering the largest possible stock is the best first test of demand.": "Large stock purchases commit money before demand is known. A small, low-cost test can provide evidence while limiting financial risk.",
  "Business|Testing a business idea|understand|Spend the whole budget on stock immediately.": "Spending the entire budget before testing leaves little room to learn or respond. Show a sample or simple product page to target customers first.",
  "Business|Testing a business idea|understand|Assume no sales proves no market after one view.": "One view is too little evidence to conclude that no market exists. Check whether the right people saw the offer, whether it was clear, and gather more evidence.",
  "Business|Testing a business idea|understand|Ignore costs and test only the logo.": "A logo test does not establish whether customers want the product or whether selling it is viable. Test the problem, offer, willingness to pay, and relevant costs.",
  "Business|Testing a business idea|apply|Change the logo repeatedly without speaking to customers.": "Changing visual details without customer evidence may not address the real uncertainty. Speak with target customers and use their specific responses to guide changes.",
  "Business|Testing a business idea|apply|Treat one social media like as proof of strong demand.": "One like is weak evidence because it does not show willingness to pay. Test a clearer offer and track stronger signals such as qualified inquiries or purchases.",
  "Business|Testing a business idea|apply|Spend the budget on a large batch before testing.": "A large batch raises the cost of being wrong. Test samples or a simple product page with target customers, learn from responses, and scale only when evidence supports it.",
  "Technology|What is technology?|remember|A tool is useful even if it does not help with a task or problem.": "A tool that serves no task or problem is not an example of technology's practical purpose here. Technology applies knowledge and tools to achieve a useful result.",
  "Technology|What is technology?|remember|Technology works without knowledge, design or processes.": "Technology usually depends on knowledge and some process of design or use. A device does not become useful merely by existing without any intended method or purpose.",
  "Technology|What is technology?|remember|Technology refers only to electronic devices and computers.": "Technology is broader than electronics: a paper map, wheel, or hand tool can apply knowledge to solve a practical problem.",
  "Technology|What is technology?|understand|Technology must be a physical machine, so apps do not count.": "An app is a digital tool: technology can include software and processes, not only physical machines.",
  "Technology|What is technology?|understand|The app works without data or instructions.": "An app follows instructions and often processes data to provide a function. Without its relevant code or inputs, it cannot perform that task as described.",
  "Technology|What is technology?|understand|Technology always replaces human judgment completely.": "Many technologies support people rather than replace their judgment. A map app can suggest a route, while a person still chooses whether it suits their needs.",
  "Technology|What is technology?|apply|The paper map is not technology because it cannot collect live data.": "A paper map is still technology: it uses organized geographic information to help people navigate. Live updates are a feature of some digital maps, not a requirement for being technology.",
  "Technology|What is technology?|apply|Neither is technology unless it makes decisions without people.": "Technology does not need to make independent decisions. Both a paper map and a smartphone map are tools people can use to navigate.",
  "Technology|What is technology?|apply|Only the smartphone map is technology because technology must use electricity.": "Electricity is not required for something to be technology. A paper map applies information and design to help solve a navigation problem.",
  "Technology|How does the internet work?|remember|A website is stored entirely inside the phone of every person who visits it.": "A phone may store cached files, but it does not normally hold the entire website for every visitor. The browser requests needed resources from servers or other network services.",
  "Technology|How does the internet work?|remember|Servers are unnecessary because browsers create every website themselves.": "A browser displays and runs website resources, but many resources are delivered by servers. The browser does not independently create every site's content.",
  "Technology|How does the internet work?|remember|Data travels across the internet without shared protocols or addressing.": "Devices need shared communication rules and addressing to route data to the right destination. Without these, networked systems could not reliably exchange information.",
  "Technology|How does the internet work?|understand|The browser downloads the entire internet first.": "A browser requests the resources needed for a particular page; it does not download the whole internet before showing it.",
  "Technology|How does the internet work?|understand|The page appears without any data being sent or received.": "For a page that requires network resources, the browser must request and receive data. A previously cached page may use stored data, but that is not the same as no data ever being received.",
  "Technology|How does the internet work?|understand|Your phone physically travels to the server.": "The phone stays where it is. Data is transmitted through network equipment and links between the device and the server.",
  "Technology|How does the internet work?|apply|Your phone physically connected to the website's computer without a network.": "The browser communicates with the service through network connections. The phone does not need a direct physical cable to the website's server.",
  "Technology|How does the internet work?|apply|The browser guessed the page without receiving information.": "The browser needs page resources or previously stored cached copies to display the site; it cannot reliably reconstruct arbitrary current content by guessing.",
  "Technology|How does the internet work?|apply|Every website is permanently stored inside your phone before you visit.": "A phone may cache some website resources, but most sites are not permanently stored in full on every visitor's device. The browser fetches resources as needed.",
  "Technology|What is an algorithm?|remember|An algorithm is a random set of actions with no defined goal.": "An algorithm is a planned sequence of steps for a task or problem. Random actions with no goal do not provide a reliable procedure for reaching a result.",
  "Technology|What is an algorithm?|remember|The order of steps never matters in a procedure.": "Step order matters whenever one step depends on an earlier result. For example, you must gather ingredients before mixing them; changing the sequence can prevent the procedure from working.",
  "Technology|What is an algorithm?|remember|An algorithm must always be written in a programming language.": "An algorithm can be described in ordinary language, a flowchart, or code. Programming is one way to express instructions, but the step-by-step method can exist without being written in a programming language.",
  "Technology|What is an algorithm?|understand|A recipe cannot be an algorithm because it is not code.": "A recipe is an algorithm when it gives an ordered set of instructions to produce a result. It does not need to be code; the important feature is the clear sequence of steps.",
  "Technology|What is an algorithm?|understand|Order matters only when steps are alphabetical.": "Order matters when a step relies on something done earlier, not just when sorting alphabetically. For example, entering a password before submitting a login form is part of the required sequence.",
  "Technology|What is an algorithm?|understand|Instructions always work in any order.": "Many procedures have dependencies between steps, so rearranging them can change the outcome or make the procedure fail. Only steps that are independent can safely be reordered.",
  "Technology|What is an algorithm?|apply|The app chooses a route randomly without rules or input.": "A route-planning app uses rules and information such as the start point, destination, and road conditions to calculate a route. Randomly choosing without using inputs would not reliably find a suitable path.",
  "Technology|What is an algorithm?|apply|A route is an algorithm only if a person performs every step by hand.": "A computer can execute an algorithm automatically. The steps still form an algorithm even when software performs the calculations instead of a person doing them by hand.",
  "Technology|What is an algorithm?|apply|Changing the input can never change an algorithm's output.": "An algorithm can produce a different result when its input changes. A route planner may choose another route if the destination changes or traffic information is updated.",
  "Technology|What is artificial intelligence?|remember|AI can work only when every possible answer has been manually written in advance.": "Many AI systems use models that learn patterns from data and generate outputs for new inputs; developers do not have to write every possible answer in advance. Their outputs can still be mistaken.",
  "Technology|What is artificial intelligence?|remember|AI understands every answer exactly as a human does.": "AI can generate fluent responses and recognize patterns, but that does not establish that it understands meaning in the same way a person does. Its output still needs to be evaluated for accuracy and context.",
  "Technology|What is artificial intelligence?|remember|A confident AI answer is automatically true.": "AI can state an incorrect answer in a confident tone. Confidence in the wording is not evidence, so check important claims against reliable sources or original material.",
  "Technology|What is artificial intelligence?|understand|Accept it because confidence guarantees accuracy.": "A confident-sounding answer can still contain errors. Check the claim against trustworthy sources, especially before using it for an important decision.",
  "Technology|What is artificial intelligence?|understand|Assume every other answer from the AI is false.": "One incorrect AI answer does not prove that every other answer is false. Evaluate each claim on its own evidence and verify it rather than trusting or rejecting everything automatically.",
  "Technology|What is artificial intelligence?|understand|Use it without checking if it sounds fluent.": "Fluent language can make an answer sound convincing even when details are wrong. Check important facts against reliable sources before relying on the response.",
  "Technology|What is artificial intelligence?|apply|Use the summary without checking if it sounds convincing.": "A summary can sound polished while omitting or misstating important details. Compare it with the original document to confirm that the main points are accurate and represented in context.",
  "Technology|What is artificial intelligence?|apply|Trust the sentence because language models cannot invent details.": "Language models can generate details that sound plausible but are unsupported or incorrect. Verify specific claims against the source or another reliable reference.",
  "Technology|What is artificial intelligence?|apply|Assume the entire document is false because one sentence is wrong.": "Finding one error means that part needs correction, but it does not automatically make the entire document false. Check the remaining claims individually against the original and reliable evidence.",
  "Philosophy|What is philosophy?|remember|A philosophical argument is strong simply because many people agree with it.": "Popularity tells us how widely a claim is accepted, not whether its reasons are sound. A philosophical argument needs reasons that support its conclusion.",
  "Philosophy|What is philosophy?|remember|Philosophy accepts claims without examining reasons or assumptions.": "Examining reasons and hidden assumptions is central to philosophical inquiry; accepting a claim without scrutiny skips that work.",
  "Philosophy|What is philosophy?|remember|Philosophy asks only questions that can be answered with a measurement.": "Some philosophical questions concern meaning, values, or what counts as knowledge. Measurement can help with some questions, but it is not the only method.",
  "Philosophy|What is philosophy?|understand|Count votes and treat the majority as automatically correct.": "A majority vote can settle a group decision, but it does not by itself show which view is best justified. Compare the arguments and assumptions.",
  "Philosophy|What is philosophy?|understand|End the discussion because concepts cannot be examined.": "Concepts can be clarified by asking what people mean and testing examples. Ending the discussion avoids the very analysis philosophy uses.",
  "Philosophy|What is philosophy?|understand|Assume both claims are equally justified without evaluation.": "Disagreement does not make two arguments equally strong. Evaluate each position's reasons, assumptions, and consistency.",
  "Philosophy|What is philosophy?|apply|Count the votes and treat the majority as proof.": "Popularity is not proof of fairness. First clarify what fairness means, then examine the reasons supporting each position.",
  "Philosophy|What is philosophy?|apply|Choose the view of the more confident speaker.": "Confidence and speaking style do not establish that a claim is justified. Assess the reasons each speaker gives.",
  "Philosophy|What is philosophy?|apply|Assume disagreement means there is no better or worse reasoning.": "People can disagree while one argument is better supported or more consistent. Compare the reasons rather than treating disagreement as the end of inquiry.",
  "Philosophy|How do we know?|remember|Evidence is unnecessary if a person feels certain.": "Feeling certain is a mental state, not evidence for the claim. Knowledge claims need adequate justification, and the evidence should be reliable.",
  "Philosophy|How do we know?|remember|Two people cannot have different levels of justification for the same belief.": "People can hold the same belief for different reasons. One may have stronger evidence or more reliable sources than the other.",
  "Philosophy|How do we know?|remember|A belief is justified whenever it happens to be true, even by luck.": "A lucky true guess lacks the supporting reasons normally required for justified knowledge. Truth and justification are different questions.",
  "Philosophy|How do we know?|understand|Yes, because truth alone always proves good reasoning.": "A guess can turn out true by chance. The outcome alone does not show that the person had evidence or a good method.",
  "Philosophy|How do we know?|understand|Yes, because confidence is the same as evidence.": "Confidence describes how sure someone feels; evidence is information that supports a claim. They are not interchangeable.",
  "Philosophy|How do we know?|understand|No, because a lucky guess cannot ever be true.": "A lucky guess can be true—the issue is that the person did not have good grounds for believing it. Truth and justification must be assessed separately.",
  "Philosophy|How do we know?|apply|The fact that the delay would be convenient.": "Convenience does not show that a train is delayed. Look for current, relevant evidence such as an up-to-date service notice.",
  "Philosophy|How do we know?|apply|A notice from an unrelated day proves the train is delayed now.": "A notice from another day may be outdated and does not establish the current situation. Evidence must be relevant to the time in question.",
  "Philosophy|How do we know?|apply|Your certainty alone, regardless of the notice's reliability.": "Certainty alone is not evidence, and even a notice must be checked for reliability and freshness.",
  "Philosophy|Ethics and choices|remember|Ethics is only about obeying laws, never about values or duties.": "Law and ethics can overlap, but they are not identical. Ethics also examines values, duties, rights, consequences, and what makes an action morally justified.",
  "Philosophy|Ethics and choices|remember|A good outcome means the decision was necessarily fair to everyone.": "A positive overall result does not guarantee fairness. To judge fairness, consider how benefits and burdens are distributed and whether anyone’s rights or needs are overlooked.",
  "Philosophy|Ethics and choices|remember|People who share a goal must always agree on the right action.": "People can agree on a goal but disagree about the best action because they prioritize duties, consequences, rights, or fairness differently.",
  "Philosophy|Ethics and choices|understand|The law automatically settles every moral question.": "Legality tells you what the law permits or prohibits, but a legal action can still raise moral concerns about harm, rights, or fairness.",
  "Philosophy|Ethics and choices|understand|One must not care about poverty at all.": "Ethical disagreement does not mean poverty is irrelevant. People may agree it matters while disagreeing about which policy is most effective or fair.",
  "Philosophy|Ethics and choices|understand|Ethical reasoning cannot consider more than one value.": "Ethical decisions often involve several values at once, such as reducing harm, respecting rights, treating people fairly, and honoring duties. Reasoning compares these considerations rather than ignoring all but one.",
  "Philosophy|Ethics and choices|apply|Only whether the policy is legal, since law answers every moral question.": "A policy’s legality does not show by itself whether its effects are fair. Also examine who benefits, who bears the costs, and whether rights are respected.",
  "Philosophy|Ethics and choices|apply|Whether the largest group approves, regardless of the burden on others.": "Majority approval does not automatically make a policy fair. Consider whether a smaller group is unfairly burdened and whether its rights and needs are protected.",
  "Philosophy|Ethics and choices|apply|Nothing, because good intentions guarantee fair outcomes.": "Good intentions do not guarantee a fair result. Ethical evaluation should also consider the actual effects of the decision and how its benefits and burdens are shared.",
  "Philosophy|Arguments and reasoning|remember|An opinion becomes a strong argument when it is stated confidently.": "A confident tone does not supply evidence or connect reasons to a conclusion. An argument is strong when its reasons are relevant and provide good support for what it claims.",
  "Philosophy|Arguments and reasoning|remember|A conclusion is supported even if the reasons are unrelated to it.": "Reasons support a conclusion only when they are relevant to it. Information that does not bear on the claim cannot establish that the claim is true or well justified.",
  "Philosophy|Arguments and reasoning|remember|If the conclusion is popular, the premises do not need checking.": "A popular conclusion can still rest on weak or false premises. Check whether the supporting statements are credible and whether they actually justify the conclusion.",
  "Philosophy|Arguments and reasoning|understand|Reject it only because it is an opinion.": "An opinion is not automatically false or unreasonable. Evaluate the reasons and evidence offered for it rather than dismissing it solely because it is an opinion.",
  "Philosophy|Arguments and reasoning|understand|Ignore evidence and focus on the speaker's confidence.": "A speaker’s confidence does not show that a claim is true. Examine the evidence and ask whether it supports the conclusion, regardless of how certain the speaker sounds.",
  "Philosophy|Arguments and reasoning|understand|Accept it because one example proves a universal rule.": "One example can show that something happened once, but it usually cannot establish that a rule applies to every case. A broad claim needs evidence from a wider range of cases.",
  "Philosophy|Arguments and reasoning|apply|The argument is strong because personal experience proves every case.": "Personal experience can be useful evidence about one situation, but it cannot by itself prove that the same outcome occurs in every case. Check whether broader, varied evidence supports the general claim.",
  "Philosophy|Arguments and reasoning|apply|The conclusion is false solely because it is an opinion.": "Calling something an opinion does not prove it false. Assess the reasons and evidence behind the conclusion before deciding whether it is well supported.",
  "Philosophy|Arguments and reasoning|apply|The claim needs no evidence if the friend is trustworthy.": "Trusting a friend may be a reason to listen, but it does not replace checking a claim’s evidence. Reliable people can be mistaken, so the claim still needs support."
};

function lessonQuizDistractorReason(name,title,skill,wrongText,correctText,conceptText){
 const wrong=String(wrongText||"").toLowerCase(),topic=String(title||"").toLowerCase(),correct=String(correctText||"").trim(),concept=String(conceptText||"").trim(),context=topic+" "+wrong+" "+correct;
 if(/only moving objects can have energy/.test(wrong))return "An object can have potential energy even when it is still. If an object stops, its kinetic energy becomes zero, but energy may have been transferred to the surroundings as heat or sound; the energy has not simply vanished.";
 if(/potential energy and kinetic energy are exactly the same/.test(wrong))return "Kinetic energy is the energy of motion. Potential energy is stored because of position or arrangement, such as a raised book or a stretched elastic band.";
 if(/book|gravitational potential|falls from a shelf/.test(context)&&/increases because the book moves faster|mass does not change|stays constant/.test(wrong))return "As the book falls, its height above the ground decreases, so its gravitational potential energy decreases. Its speed increases, so its kinetic energy increases. The book's mass staying the same does not mean its gravitational potential energy stays constant, because height changes.";
 if(/book|gravitational potential|falls from a shelf/.test(context)&&/disappear|vanish|used up|created from nothing|no longer conserved/.test(wrong))return "As the book falls, its height decreases and its gravitational potential energy is transferred mainly into kinetic energy as it speeds up. Some energy may be transferred to the surroundings by air resistance; it does not disappear.";
 if(/elastic|stretched band/.test(context)){
  if(/changes into mass|into mass|no longer conserved/.test(wrong))return "The band does not turn kinetic energy into mass in this situation. When released, stored elastic potential energy becomes mainly kinetic energy as the band moves; some energy is transferred to the surroundings as sound and heat. Total energy is conserved.";
  if(/disappear|vanish|loses all energy|used up|created from nothing/.test(wrong))return "The stretched band stores elastic potential energy before release. As it snaps back, that stored energy becomes mainly kinetic energy, with some transferred to the surroundings as sound and heat. It does not lose all its energy before moving.";
  if(/kinetic|potential|sound|heat/.test(wrong))return "When the band is released, stored elastic potential energy changes mainly into kinetic energy. Some energy is transferred to the surroundings as sound and heat.";
 }
 if(/stops moving|whenever an object stops/.test(wrong))return "When an object stops, its kinetic energy decreases to zero, but the energy is transferred to other forms or to the surroundings—for example, as heat or sound. Energy is conserved; it does not simply disappear.";
 if(/disappear|disappears|vanish|vanishes|used up|created from nothing|no longer conserved/.test(wrong))return "Energy is not destroyed or created from nothing in this ordinary process. It is transferred between objects or transformed into other forms; identify which form or transfer the scenario describes.";
 if(/\b(only|always|never|exactly the same|all .*same)\b/.test(wrong))return "This statement is too absolute. Compare it with the specific conditions in the question: "+correct;
 if(/\b(speed|velocity|direction|km\/h|distance divided by time)\b/.test(wrong+" "+correct+" "+topic))return "Speed tells how fast something moves; velocity also includes direction. Use the quantity that matches what the question asks.";
 if(/\b(potential energy|kinetic energy|falls from a shelf|elastic)\b/.test(context))return "Potential energy can be stored because of position or arrangement; kinetic energy is energy of motion. In this situation, track how the object's position or motion changes.";
 if(/\b(atom|element|molecule|proton|neutron|electron|ion|bond)\b/.test(context))return "Focus on what defines the particle or bond in this question, rather than treating different atomic or chemical terms as interchangeable.";
 if(/\b(force|gravity|orbit|motion|acceleration|friction)\b/.test(context))return "Use the forces and motion described in the scenario. An explanation should match the evidence and physical relationship in the correct answer.";
 if(/\b(percent|percentage|revenue|profit|cost|price|demand|supply|market)\b/.test(context))return "Check which quantity is being measured and how it relates to the others; the chosen option mixes up that relationship.";
 return "Your choice, “"+String(wrongText||"").trim()+"”, does not fit the key concept for "+title+". "+(concept||"Compare the conditions in the question with the correct answer.")+" The correct answer is: "+correct+".";
}
function lessonQuizQuestions(name,i,variant=0){
 const l=SUBJECTS[name].lessons[i],title=l[0],data=QUIZ_AUDIT_BANK[name]?.[title],mis=QUIZ_MISCONCEPTIONS[name]?.[title]||[];
 if(!data)throw new Error("Missing audited quiz for "+name+" / "+title);
 const fact1=String(l[1]||"").trim(),fact2=String(l[2]||"").trim(),scenario=data[0],scenarioAnswer=data[1],wrongScenario=data.slice(2),transfer=QUIZ_TRANSFER_BANK[name]?.[title];
 if(!transfer)throw new Error("Missing distinct transfer question for "+name+" / "+title);
 const cleanTitle=title.replace(/[?.!]+/g,""),misconceptionStem=QUIZ_MISCONCEPTION_STEMS[name]?.[title];
 if(!misconceptionStem)throw new Error("Missing lesson-specific misconception stem for "+name+" / "+title);
 const specs=[
  {skill:"remember",q:"Which statement about "+(QUIZ_TOPIC_LABELS[name]?.[title]||cleanTitle.toLowerCase())+" is correct?",correct:fact1,wrong:mis,why:QUIZ_CONCEPT_NOTES[name]?.[title]||fact2},
  {skill:"understand",q:scenario,correct:scenarioAnswer,wrong:wrongScenario,why:scenarioAnswer},
  {skill:"apply",q:transfer[0],correct:transfer[1],wrong:transfer.slice(2,5),why:transfer[1]}
 ];
 function uniqueChoices(arr,correct){return arr.map(x=>String(x||"").trim()).filter((x,j,a)=>x&&x!==correct&&a.indexOf(x)===j)}
 return specs.map((spec,qi)=>{const wrong=uniqueChoices(spec.wrong||[],spec.correct);if(wrong.length!==3)throw new Error("Quiz bank must provide exactly three distinct, lesson-specific distractors: "+name+" / "+title+" / "+spec.skill+" (found "+wrong.length+")");const orderedWrong=variant===1?wrong.slice(1).concat(wrong[0]):wrong;const options=[{text:spec.correct,correct:true},...orderedWrong.map(text=>({text,correct:false,reason:QUIZ_DISTRACTOR_FEEDBACK[`${name}|${title}|${spec.skill}|${text}`]||lessonQuizDistractorReason(name,title,spec.skill,text,spec.correct,spec.skill==="understand"?scenarioAnswer:spec.skill==="apply"?transfer[1]:spec.why)}))];const shift=(i*3+qi*2+Object.keys(SUBJECTS).indexOf(name)+(variant?1:0))%4;return {skill:spec.skill,q:spec.q,options:options.slice(shift).concat(options.slice(0,shift)),explain:spec.why}});
}
function lessonQuizHTML(name,i){
 const key=name+'-'+i,results=state().quizResults||{},saved=results[key],questions=lessonQuizQuestions(name,i,window.quizRetryVariant?.[key]||0),comparableSaved=saved&&saved.total===questions.length?saved:null;
 return `<section class="lesson-mcq" id="mcq-${i}">
  <div class="mcq-heading"><div><span class="lesson-label">KNOWLEDGE CHECK</span><h3>Test your understanding</h3><p>3 questions · Remember, understand and apply.</p></div><span class="mcq-score">${comparableSaved?'Best: '+saved.best+'/'+saved.total:questions.length+' questions'}</span></div>
  <form onsubmit="submitLessonQuiz(event,'${name}',${i})">
   ${questions.map((q,qi)=>`<fieldset class="mcq-question" id="mcq-question-${i}-${qi}"><legend>${qi+1}. ${esc(q.q)}</legend>${q.options.map((o,oi)=>`<label class="mcq-option"><input type="radio" name="mcq-${i}-${qi}" value="${oi}" data-correct="${o.correct ? 'true' : 'false'}" data-answer="${esc(o.text)}" data-reason="${esc(o.reason||'')}"><span>${esc(o.text)}</span></label>`).join('')}<p class="mcq-feedback" id="mcq-feedback-${i}-${qi}" hidden></p></fieldset>`).join('')}
   <div class="lesson-actions"><button type="submit"${(name==='Biology'||name==='Chemistry'&&(i===0||i===1||i===2||i===3))?` id="mcq-submit-${i}"`:''}>Check my score</button><button class="button${(name==='Biology'||name==='Chemistry'&&(i===0||i===1||i===2||i===3))?'':' secondary'}" type="button" onclick="retryMissedLessonQuiz('${name}',${i})" id="mcq-retry-missed-${i}" hidden>Retry missed questions</button><button class="button secondary" type="button" onclick="${(name==='Biology'||name==='Chemistry'&&(i===0||i===1||i===2||i===3))?'restartBiologyQuiz':'resetLessonQuiz'}(${i})">${name==='Biology'||name==='Chemistry'&&(i===0||i===1||i===2||i===3)?'Restart entire quiz':'Try again'}</button></div>
  </form>
  <div class="mcq-result" id="mcq-result-${i}" role="status">${comparableSaved?'Last score: '+saved.correct+'/'+saved.total+' ('+Math.round(saved.correct/saved.total*100)+'%) · Best: '+saved.best+'/'+saved.total+' · Attempts: '+saved.attempts:''}</div>
 </section>`;
}
function lessonQuizFeedbackText(question,isCorrect,selectedIndex){
 const right=question.options.findIndex(option=>option.correct);
 const clean=value=>String(value||"").replace(/[.!?]+$/,"").trim();
 const normalize=value=>String(value||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
 const repeatsAnswer=(value,answer)=>{const a=normalize(answer),v=normalize(value);return !v||v===a||(a.length>=28&&v.includes(a))||(v.length>=28&&a.includes(v))};
 const correctAnswer=clean(question.options[right]?.text||"");
 const explanation=clean(question.explain||correctAnswer);
 if(isCorrect)return "✓ Correct. "+(repeatsAnswer(explanation,correctAnswer)?correctAnswer:explanation)+".";
 const selectedOption=Number.isInteger(selectedIndex)?question.options[selectedIndex]:null;
 const selectedText=clean(selectedOption?.text||"");
 const rawReason=clean(selectedOption?.reason||"");
 const selectedReason=clean(rawReason.replace(/^You chose '[^']*'\.\s*/i,"").replace(/^The key idea is:\s*/i,""));
 const usefulExtra=[selectedReason,explanation].find(value=>value&&!repeatsAnswer(value,correctAnswer)&&normalize(value)!==normalize(selectedText));
 const firstExtra=usefulExtra?clean(usefulExtra):"";
 const conciseExtra=firstExtra; // Preserve the full option-specific explanation so important reasoning is not hidden.
 if(!selectedOption)return "✗ Not quite. Correct answer: "+correctAnswer+"."+(conciseExtra?" "+conciseExtra+".":"");
 return "✗ Not quite. You selected: "+selectedText+". Correct answer: "+correctAnswer+"."+(conciseExtra?" "+conciseExtra+".":"");
}
function submitLessonQuiz(event,name,i){
 event.preventDefault();
 const quizKey=name+'-'+i,savedBefore=state().quizResults?.[quizKey],retrySet=new Set(savedBefore?.missed||[]),baseQuestions=lessonQuizQuestions(name,i),alternateQuestions=lessonQuizQuestions(name,i,1),questions=baseQuestions.map((q,qi)=>window.quizRetryVariant?.[quizKey]===1&&retrySet.has(qi)?alternateQuestions[qi]:q),answers=[],missing=[];
 questions.forEach((q,qi)=>{const selected=document.querySelector('input[name="mcq-'+i+'-'+qi+'"]:checked');if(!selected)missing.push(qi+1);answers.push(selected?Number(selected.value):null)});
 const result=document.getElementById('mcq-result-'+i);
 if(missing.length){result.textContent='Please answer question'+(missing.length>1?'s ':' ')+missing.join(', ')+ ' before checking your score.';return}
 let correct=0,missed=[];
 questions.forEach((q,qi)=>{
  const chosen=answers[qi],selected=document.querySelector('input[name="mcq-'+i+'-'+qi+'"]:checked'),isCorrect=selected?.dataset?.correct!==undefined?selected.dataset.correct==='true':q.options[chosen].correct;if(isCorrect)correct++;else missed.push(qi);
  const feedback=document.getElementById('mcq-feedback-'+i+'-'+qi);
  feedback.hidden=false;feedback.className='mcq-feedback '+(isCorrect?'correct':'incorrect');
  const displayedOptions=Array.from(document.querySelectorAll('input[name="mcq-'+i+'-'+qi+'"]')).map(input=>({text:input.dataset?.answer||input.parentElement?.querySelector('span')?.textContent||'',correct:input.dataset?.correct==='true',reason:input.dataset?.reason||''}));const feedbackQuestion=displayedOptions.some(option=>option.correct)?{...q,options:displayedOptions}:q;feedback.textContent=lessonQuizFeedbackText(feedbackQuestion,isCorrect,chosen);
 });
 const s=state();s.quizResults=s.quizResults||{};const key=name+'-'+i,previous=s.quizResults[key]||{attempts:0,best:0};
 const skillNames=questions.map(q=>q.skill||'understanding');const missedSkills=missed.map(qi=>skillNames[qi]);const comparableBest=previous.total===questions.length?(previous.best||0):0;const best=Math.max(comparableBest,correct);const mastered=correct===questions.length;const reviewDays=mastered?7:1;s.quizResults[key]={...previous,subject:name,index:i,correct,total:questions.length,best,attempts:(previous.attempts||0)+1,lastAnswers:answers,lastScore:correct,missed,missedSkills,mastered,conceptsToReview:[...new Set(missedSkills)],nextReviewAt:new Date(Date.now()+reviewDays*86400000).toISOString(),updatedAt:new Date().toISOString()};
 if(typeof location!=='undefined'&&String(location.search||'').includes('review=quiz')){const day=localReviewDayKey(new Date()),id='quiz:'+name+':'+i;s.reviewCompletions=s.reviewCompletions||{};s.reviewCompletions[day]=s.reviewCompletions[day]||[];if(!s.reviewCompletions[day].includes(id))s.reviewCompletions[day].push(id);}
 saveState(s);
 result.textContent='You got '+correct+' out of '+questions.length+' correct ('+Math.round(correct/questions.length*100)+'%). Best: '+s.quizResults[key].best+'/'+questions.length+' · Attempts: '+s.quizResults[key].attempts+'. Your score is saved on this device.';
 const score=document.querySelector('#mcq-'+i+' .mcq-score');if(score)score.textContent='Best: '+s.quizResults[key].best+'/'+questions.length;
 const retry=document.getElementById('mcq-retry-missed-'+i);if(retry)retry.hidden=missed.length===0;
 if((name==='Biology'||name==='Chemistry'&&(i===0||i===1||i===2||i===3))){const submit=document.getElementById('mcq-submit-'+i);if(submit)submit.hidden=true;}
}
function retryMissedLessonQuiz(name,i){
 const s=state(),key=name+'-'+i,saved=s.quizResults?.[key],missed=saved?.missed||[];
 if(!missed.length){if((name==='Biology'||name==='Chemistry'&&(i===0||i===1||i===2||i===3)))restartBiologyQuiz(i);else resetLessonQuiz(i);return}
 window.quizRetryVariant=window.quizRetryVariant||{};window.quizRetryVariant[key]=1;
 const alternate=lessonQuizQuestions(name,i,1);
 missed.forEach(qi=>{
  const field=document.getElementById('mcq-question-'+i+'-'+qi),q=alternate[qi];
  if(field&&q){field.innerHTML='<legend>'+(qi+1)+'. '+esc(q.q)+'</legend>'+q.options.map((o,oi)=>'<label class="mcq-option"><input type="radio" name="mcq-'+i+'-'+qi+'" value="'+oi+'" data-correct="'+(o.correct?'true':'false')+'" data-answer="'+esc(o.text)+'" data-reason="'+esc(o.reason||'')+'"><span>'+esc(o.text)+'</span></label>').join('')+'<p class="mcq-feedback" id="mcq-feedback-'+i+'-'+qi+'" hidden></p>';}
 });
 const retry=document.getElementById('mcq-retry-missed-'+i);if(retry)retry.hidden=true;
 const result=document.getElementById('mcq-result-'+i);if(result)result.textContent='Retry only the questions you missed, then check your score again.';
 if((name==='Biology'||name==='Chemistry'&&(i===0||i===1||i===2||i===3))){const submit=document.getElementById('mcq-submit-'+i);if(submit)submit.hidden=false;scrollBiologyQuizQuestion(i,missed[0]);}
 else{const first=document.getElementById('mcq-question-'+i+'-'+missed[0]);if(first)first.scrollIntoView({behavior:'smooth',block:'center'});}
}
function resetLessonQuiz(i){
 document.querySelectorAll('#mcq-'+i+' input[type="radio"]').forEach(input=>input.checked=false);
 document.querySelectorAll('#mcq-'+i+' .mcq-feedback').forEach(el=>{el.hidden=true;el.textContent='';});
 const retry=document.getElementById('mcq-retry-missed-'+i);if(retry)retry.hidden=true;
 const result=document.getElementById('mcq-result-'+i);if(result)result.textContent='Choose an answer for each question, then check your score.';
}
// Teaching additions stay separate from SUBJECTS and the historical quiz banks.
function chemistryReactionsIntroduction(){
 return `<section class="reactions-learning" aria-labelledby="reactions-opening">
 <a href="#subject-overview">← Back to Chemistry overview</a>
 <header><p>CHEMISTRY · LESSON 4 OF 4</p><h3 id="reactions-opening">Chemical reactions</h3><p class="reactions-callout">When a reaction makes new substances, where do their atoms come from—and why might the reaction need a start?</p></header>
 <nav aria-label="Reactions lesson sections"><button type="button" onclick="scrollReactionsSection('visualize')">Visualize</button><button type="button" onclick="scrollReactionsSection('energy')">Energy</button><button type="button" onclick="scrollReactionsSection('apply')">Apply</button><button type="button" onclick="scrollReactionsSection('explain')">Explain</button></nav>
 <section class="reactions-callout"><h4>What you will understand</h4><ul><li>Identify reactants and products and explain how atoms rearrange.</li><li>Balance atom counts using coefficients, without changing formulas.</li><li>Distinguish activation energy from the overall energy change.</li></ul></section>
 <section id="reactions-prediction" class="reactions-callout" aria-labelledby="reactions-predict-title"><h4 id="reactions-predict-title">Predict: what do bubbles tell us?</h4><label for="reactions-prediction-choice">Two substances are mixed and bubbles appear. Does that alone prove a chemical reaction?</label><select id="reactions-prediction-choice" onchange="clearReactionsPrediction()"><option value="">Choose your prediction</option><option value="proof">Yes, bubbles always prove new substances formed</option><option value="evidence">No, more evidence is needed</option><option value="unsure">I am not sure yet</option></select><p>Temporary, ungraded practice. Nothing here is saved. Keep your prediction in mind as you explore.</p><p id="reactions-prediction-feedback" role="status" aria-live="polite"></p></section>
 <h4>New substances, existing atoms</h4><p><strong>Reactants</strong> are the starting substances; <strong>products</strong> are the substances formed. In ordinary chemical reactions, atoms rearrange as bonds change. The elements do not turn into other elements, and atoms are not created or destroyed.</p><p>Lesson 3 explained bonds. In a reaction, some bonds break and others form; the resulting substances can have different properties. An equation records the overall change, not every intermediate step.</p>
 <h4 id="reactions-visualize" tabindex="-1">Follow the atoms</h4><div class="reactions-pair"><div><p>Hydrogen and oxygen can react to form water: <strong>2H₂ + O₂ → 2H₂O</strong>. Two hydrogen molecules and one oxygen molecule give two water molecules.</p><p>Count each element: <strong>4 hydrogen atoms and 2 oxygen atoms on each side</strong>. Molecule numbers can change while atom counts stay the same.</p><p>A <strong>coefficient</strong> multiplies a whole formula: 2H₂O means two water molecules. A <strong>subscript</strong> specifies atoms within a formula: H₂O has two hydrogens per oxygen. Changing H₂O to H₂O₂ makes a different substance, not a balanced water equation.</p></div><figure><img src="/assets/chemistry/reaction-atom-balance.svg" width="320" height="340" alt="Two hydrogen molecules and one oxygen molecule form two bent water molecules. Both sides contain four H atoms and two O atoms." aria-describedby="reactions-atom-note"><figcaption id="reactions-atom-note">H = hydrogen; O = oxygen. Shapes and spacing are schematic, not to scale. This is overall atom bookkeeping, not a literal single-step mechanism or instructions for an experiment.</figcaption></figure></div>
 <section id="reactions-balance" class="reactions-callout" aria-labelledby="reactions-apply"><h4 id="reactions-apply" tabindex="-1">Apply: balance the water equation</h4><p>Temporary, ungraded practice. Choose the smallest whole-number coefficients. Keep H₂, O₂ and H₂O unchanged.</p><div class="reactions-coefficients"><label>H₂ coefficient<select id="reactions-hydrogen" onchange="clearReactionsBalance()"><option value="">Choose</option><option>1</option><option>2</option><option>3</option><option>4</option></select></label><label>O₂ coefficient<select id="reactions-oxygen" onchange="clearReactionsBalance()"><option value="">Choose</option><option>1</option><option>2</option><option>3</option><option>4</option></select></label><label>H₂O coefficient<select id="reactions-water" onchange="clearReactionsBalance()"><option value="">Choose</option><option>1</option><option>2</option><option>3</option><option>4</option></select></label></div><button type="button" onclick="checkReactionsBalance()">Check atom counts</button><p id="reactions-balance-feedback" role="status" aria-live="polite"></p></section>
 <h4 id="reactions-energy" tabindex="-1">A start is different from an overall change</h4><div class="reactions-pair"><div><p><strong>Breaking bonds requires energy; forming bonds releases energy.</strong> The overall energy change depends on the complete process, including the substances and their states—not just one broken bond.</p><p>An <strong>energy-releasing</strong> reaction transfers energy to its surroundings overall; an <strong>energy-absorbing</strong> reaction takes energy in overall. Energy is transferred, not created.</p><p><strong>Activation energy</strong> is the barrier along a reaction pathway. Even a reaction that releases energy overall can need an initial input to begin at an appreciable rate. This barrier is different from the energy difference between reactants and products.</p></div><figure><img src="/assets/chemistry/reaction-energy.svg" width="320" height="300" alt="Illustrative energy-releasing reaction: an activation barrier rises above reactants, while products end lower. The activation rise differs from the overall fall." aria-describedby="reactions-energy-note"><figcaption id="reactions-energy-note">A = activation energy, from reactants to the peak. B = overall energy change, from reactants to products. Illustrative energy profile, not measured data for water formation. Reaction progress is not elapsed time; the curve is schematic. Other reactions have products higher than reactants and absorb energy overall.</figcaption></figure></div>
 <h4>Same bubbles, different explanations</h4><p>Boiling water produces bubbles of water vapour: H₂O molecules remain H₂O. Vinegar reacting with baking soda produces new substances, including carbon dioxide gas. That gas can escape into the air.</p><p><strong>Bubbles are a clue, not proof on their own.</strong> Use knowledge of the starting substances and additional evidence about the gas and products. Visible change does not prove a new element formed. In an open container, escaping gas can reduce the measured mass without destroying atoms; account for all material entering or leaving.</p>
 <section class="reactions-callout" aria-labelledby="reactions-return"><h4 id="reactions-return">Return to your prediction</h4><p>Would you keep or change your prediction? Explain how boiling and a reacting mixture could both make bubbles.</p><button type="button" class="secondary" onclick="scrollReactionsSection('prediction')">Reconsider my prediction</button><details><summary>Reveal the bubbles explanation</summary><p>Bubbles may indicate a reaction, but more evidence is needed. Boiling changes water’s state; vinegar and baking soda can produce CO₂. Compare your prediction with this distinction. Neither process destroys atoms.</p></details></section>
 <h4>Chemistry of Life: reactions working together</h4><p>During <strong>aerobic cellular respiration</strong>, cells transform glucose and oxygen into carbon dioxide and water through many enzyme-controlled steps. Some of the released energy supports ATP production, which helps power cellular work; some is transferred as heat. Cells do not create energy, and respiration is not one giant reaction or simply breathing.</p><p>Enzymes are biological catalysts: they help reactions proceed through pathways with lower activation barriers. They do not change the overall energy difference between the same reactants and products.</p>
 <details><summary>Explore deeper: Why reactions happen at different speeds</summary><p>Temperature, concentration and contact between reacting substances can affect rates. Collisions need suitable conditions and orientation. A catalyst provides an alternative pathway and is regenerated overall; it does not make an energy-absorbing reaction release energy by changing its endpoints.</p></details>
 <details><summary>Explore deeper: How cells manage reaction pathways</summary><p>Cells couple energy-releasing processes to processes that require energy. ATP participates in this coupling. Breaking an ATP bond alone costs energy; the overall hydrolysis process and interactions of its products can release usable free energy under cellular conditions. You do not need the individual pathway steps here.</p></details>
 <details><summary>Scientific sources</summary><p><a href="https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations">OpenStax: Balancing equations</a> · <a href="https://openstax.org/books/chemistry-2e/pages/12-5-collision-theory">Activation energy</a> · <a href="https://openstax.org/books/chemistry-2e/pages/12-7-catalysis">Catalysis</a> · <a href="https://openstax.org/books/biology-2e/pages/6-1-energy-and-metabolism">Energy and metabolism</a></p></details></section>`;
}
function chemistryReactionsSummary(){return `<section class="reactions-callout"><h4 id="reactions-explain" tabindex="-1">Remember and continue</h4><ul><li>Reactants become products by rearranging conserved atoms.</li><li>Balance coefficients, not chemical formulas.</li><li>Activation energy and overall energy change answer different questions.</li><li>Bubbles need interpretation using additional evidence.</li></ul><p>You have reached the fourth core lesson. Return to your journey or revisit your scheduled learning.</p><p><a href="#subject-overview">Chemistry overview →</a> · <a href="/review.html">Review schedule →</a></p><p><a href="/notes.html">Notes Library</a> · <a href="#note">Original Chemistry note</a></p><p>Save answers and notes explicitly. Completion records activity, not proven mastery.</p></section>`;}
function scrollReactionsSection(section){
 const id={visualize:'reactions-visualize',energy:'reactions-energy',apply:'reactions-apply',explain:'reactions-explain',prediction:'reactions-prediction-choice'}[section];if(!id)return;
 const target=document.getElementById(id);if(!target)return;target.focus({preventScroll:true});target.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'center'});
}
function clearReactionsPrediction(){
 const choice=document.getElementById('reactions-prediction-choice');document.getElementById('reactions-prediction-feedback').textContent=choice.value?'Prediction selected. Reconsider it after comparing the examples.':'';
}
function clearReactionsBalance(){document.getElementById('reactions-balance-feedback').textContent='';}
function checkReactionsBalance(){
 const values=['hydrogen','oxygen','water'].map(part=>Number(document.getElementById('reactions-'+part).value)),feedback=document.getElementById('reactions-balance-feedback');
 if(values.some(value=>!Number.isInteger(value)||value<1||value>4)){feedback.textContent='Choose all three coefficients before checking.';return;}
 const [h,o,w]=values,balanced=2*h===2*w&&2*o===w;
 const counts='Hydrogen: '+(2*h)+' left, '+(2*w)+' right. Oxygen: '+(2*o)+' left, '+w+' right. ';
 feedback.textContent=counts+(balanced?(h===2&&o===1&&w===2?'Balanced: 2H₂ + O₂ → 2H₂O. The smallest whole-number ratio is 2:1:2.':'These counts balance, but divide the coefficients to get the smallest whole-number ratio, 2:1:2.'):'Not balanced yet. Change coefficients to match each element’s count; do not change the formulas.');
}
function scrollBiologyQuizQuestion(i,questionIndex){
 const target=document.getElementById('mcq-question-'+i+'-'+questionIndex);if(!target)return;
 target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
 target.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'start'});
}
function restartBiologyQuiz(i){
 resetLessonQuiz(i);
 const submit=document.getElementById('mcq-submit-'+i);if(submit)submit.hidden=false;
 scrollBiologyQuizQuestion(i,0);
}
function cellsLessonIntroduction(){
 return `<section class="cells-learning" aria-labelledby="cells-opening">
 <a href="#subject-overview">← Back to Biology overview</a>
 <header class="cells-header"><p class="cells-eyebrow">BIOLOGY · LESSON 2 OF 4</p></header>
 <section class="cells-discover" aria-labelledby="cells-discover-title"><h3 id="cells-opening"><span id="cells-discover-title">Discover — A World Too Small to See</span></h3><p><strong>Your body contains trillions of cells. How can something so small keep you alive?</strong></p>
 <p>In What is life?, you met cells as the places where living processes happen. Look closely at a moss leaf: a green surface becomes a world of individual cells. Plant cells and human cells differ, but both support essential processes of life.</p>
 <figure><img src="/assets/biology/photography/cells-640.jpg" srcset="/assets/biology/photography/cells-320.jpg 320w, /assets/biology/photography/cells-640.jpg 640w" sizes="(max-width: 600px) 100vw, 640px" width="640" height="480" loading="lazy" alt="Microscope view of a moss leaf: repeated cells outlined by cell walls, with many small green chloroplasts inside." aria-describedby="cells-microscopy-caption"><figcaption id="cells-microscopy-caption">Moss leaf cells under a microscope. Cell walls outline individual cells, while green chloroplasts carry out photosynthesis.</figcaption></figure>
 <details class="cells-sources"><summary>Microscopy source and image licence</summary><p>Specimen: <em>Plagiomnium affine</em> moss leaf. The visible walls are not the cell membranes. No calibrated scale is supplied here.</p><p><a href="https://commons.wikimedia.org/wiki/File:Plagiomnium_affine_laminazellen.jpeg">Kristian Peters; current file modified by René Esposito</a>. <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>. Cropped and resized; colours unchanged. This adapted image remains under CC BY-SA 3.0. <a href="/assets/biology/photography/CREDITS.md">Full provenance and modification record</a>.</p></details>
 <section id="cells-discover-practice" class="cells-connection" aria-labelledby="cells-observation-title"><h4 id="cells-observation-title">Look closer — what do you notice?</h4><p>This is temporary, ungraded observation. Nothing here is saved.</p><fieldset><legend>What does the image suggest about how this leaf is organized?</legend>
 <label><input type="radio" name="cells-discover-choice" value="one" onchange="clearCellsObservation()"> A. The whole leaf is one enormous cell.</label><br>
 <label><input type="radio" name="cells-discover-choice" value="many" onchange="clearCellsObservation()"> B. The leaf contains many smaller cells arranged together.</label><br>
 <label><input type="radio" name="cells-discover-choice" value="alive" onchange="clearCellsObservation()"> C. The green areas prove that every part of every cell is alive.</label><br>
 <label><input type="radio" name="cells-discover-choice" value="boundaries" onchange="clearCellsObservation()"> D. Cells have no identifiable boundaries.</label></fieldset>
 <button type="button" class="button secondary" onclick="revealCellsObservation()">Reveal the observation</button><p id="cells-discover-feedback" role="status" aria-live="polite"></p></section>
 <p>Cells are the basic structural and functional units of living organisms. Some organisms consist of one cell; others contain enormous numbers working together. Their organization supports the processes necessary for life.</p>
 <h4>From observation to understanding</h4><p>A microscope reveals shapes and arrangements, but not everything happening inside. How does a cell maintain the conditions it needs to survive? Begin with the cell membrane, which helps regulate what enters and leaves.</p>
 <a class="button cells-discover-next" href="#cells-understand" onclick="scrollCellsSection('understand');return false">Continue: Understand how cells work →</a></section>
 <nav class="cells-section-nav" aria-label="Cells lesson sections"><button type="button" onclick="scrollCellsSection('understand')">Understand</button><button type="button" onclick="scrollCellsSection('compare')">Compare cells</button><button type="button" onclick="scrollCellsSection('practice')">Practice</button><button type="button" onclick="scrollCellsSection('reflect')">Reflect</button></nav>
 <section class="cells-goals"><h4>What you will understand</h4><ul><li>Explain how a membrane regulates exchange and helps a cell survive.</li><li>Compare cells with and without a membrane-bound nucleus.</li></ul></section>
 <div class="cells-pair"><div><h4 id="cells-understand" tabindex="-1">A boundary that regulates exchange</h4><p>A cell is an organized unit surrounded by a <strong>cell membrane</strong>. This boundary separates its interior from its surroundings, helping maintain conditions for the chemical reactions that keep it alive.</p>
 <p>The membrane is <strong>selectively permeable</strong>: some substances cross more easily than others. Their size, charge and the membrane’s transport proteins affect passage. The membrane does not decide what is useful; harmful substances can cross too.</p>
 </div><div><figure><picture><source media="(max-width: 600px)" srcset="/assets/biology/membrane-exchange-mobile.svg"><img src="/assets/biology/membrane-exchange.svg" alt="Membrane cross-section showing oxygen diffusing through the lipid layer and an ion passing through a protein channel." aria-describedby="cells-exchange-description" width="720" height="380"></picture><figcaption>Simplified membrane exchange; not to scale.</figcaption></figure>
 <div id="cells-exchange-description" class="cells-diagram-key"><p><strong>Key idea: substances cross membranes in different ways.</strong></p><ul><li><strong>Oxygen:</strong> crosses the lipid layer directly.</li><li><strong>Charged ion:</strong> passes through a suitable open protein channel.</li><li><strong>Arrows:</strong> show assumed net inward movement. Oxygen is more concentrated outside; concentration and electrical forces favor ion entry.</li></ul><p>Molecules move both ways. The arrows do not show a pump or a universal direction of transport. The shaded band represents the lipid bilayer, simplified and not to scale.</p></div></div></div>
 <details class="cells-deeper"><summary>Explore deeper: How substances cross membranes</summary><p>Optional explanation — the core lesson and practice do not require this detail.</p><p>In <strong>passive transport</strong>, a substance moves down its concentration or electrochemical gradient without the cell directly spending energy on that movement. Oxygen, for example, has a net movement from higher toward lower concentration across a permeable membrane. A suitable channel can allow an ion across; it does not admit every substance.</p>
 <p>An <strong>electrochemical gradient</strong> combines a difference in concentration with the electrical pull on a charged particle across the membrane. Both influence the direction an ion tends to move.</p><p><strong>Active transport</strong> uses energy to move substances against a gradient. <strong>ATP (adenosine triphosphate)</strong> can supply energy through chemical reactions. Some pumps use ATP directly; other transporters use energy stored in a gradient. The diagram’s channel represents passive movement, not an ATP-powered pump.</p></details>
 <div class="cells-pair"><div><h4 id="cells-compare" tabindex="-1">Two kinds of cellular organization</h4><p><strong>Prokaryotic cells</strong>, such as bacteria, lack a membrane-bound nucleus. <strong>Eukaryotic cells</strong>, such as typical animal cells, have a nucleus and other membrane-bound compartments.</p><p>Both examples contain a membrane, <strong>cytoplasm</strong> (the cell contents outside the nucleus, if present), DNA and ribosomes that make proteins. <strong>No nucleus does not mean no DNA.</strong> This distinction prepares you to explore DNA and heredity next.</p>
 </div><div><figure><picture><source media="(max-width: 600px)" srcset="/assets/biology/cell-comparison-mobile.svg"><img src="/assets/biology/cell-comparison.svg" alt="Typical bacterium and animal cell compared: both have a membrane, cytoplasm, DNA and ribosomes; the animal cell encloses DNA in a nucleus." aria-describedby="cells-comparison-description" width="720" height="400"></picture><figcaption>Typical cells, simplified and not to scale. Specialized cells can differ.</figcaption></figure>
 <p id="cells-comparison-description">In the bacterium, DNA is not enclosed in a nucleus. In the animal cell, a nucleus encloses most DNA. The bacterial cell wall shown lies outside its membrane; a wall is not a membrane and is not present in every prokaryote. These are typical examples; specialized cells can differ.</p></div></div>
 <details class="cells-deeper"><summary>Explore deeper: How cells can differ</summary><p>Optional explanation — no extra assessment or completion step.</p><p>Bacteria and Archaea are prokaryotes. Animals, plants, fungi and protists are eukaryotes. Plant cells have a membrane as well as a wall; a wall does not replace the membrane’s role in exchange.</p><p>Specialized cells can differ from the typical diagram. For example, mature human red blood cells have lost their nucleus. The comparison describes typical cellular organization, not a checklist that every specialized cell must match.</p></details>
 <section id="cells-oxygen-practice" class="cells-connection" aria-labelledby="cells-oxygen-title"><h4 id="cells-oxygen-title">Try an idea: oxygen and a cell</h4><p>Many body cells use oxygen to help release usable energy from nutrients. Imagine oxygen is more concentrated outside a cell than inside, and its membrane permits oxygen to pass. Consider the net movement expected from this difference, without adding other influences.</p><p><strong>Temporary, ungraded practice.</strong> Nothing here is saved.</p>
 <fieldset><legend>Predict: which way would oxygen move overall?</legend><label><input type="radio" name="cells-oxygen-choice" value="inward" onchange="clearCellsOxygenFeedback()"> Net movement into the cell</label><br><label><input type="radio" name="cells-oxygen-choice" value="outward" onchange="clearCellsOxygenFeedback()"> Net movement out of the cell</label><br><label><input type="radio" name="cells-oxygen-choice" value="none" onchange="clearCellsOxygenFeedback()"> No net movement while concentrations differ</label></fieldset>
 <p>What about the concentration difference supports your choice?</p><button type="button" class="button secondary" onclick="reconsiderCellsOxygen()">Reconsider my prediction</button>
 <div id="cells-oxygen-reconsider" hidden><h4 id="cells-oxygen-reconsider-title" tabindex="-1">Keep or change your prediction?</h4><p>Picture individual molecules moving both ways. Would more cross inward or outward under these conditions? You can change your choice above before revealing the explanation.</p><button type="button" class="button secondary" onclick="explainCellsOxygen()">Reveal the scientific explanation</button></div><p id="cells-oxygen-feedback" role="status" aria-live="polite"></p></section>
 <details class="cells-sources"><summary>Sources for this explanation</summary><ul><li><a href="https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells">OpenStax Biology 2e: Prokaryotic Cells</a></li><li><a href="https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells">Eukaryotic Cells</a></li><li><a href="https://openstax.org/books/biology-2e/pages/5-2-passive-transport">Passive Transport</a> and <a href="https://openstax.org/books/biology-2e/pages/5-3-active-transport">Active Transport</a></li></ul></details>
 </section>`;
}
function clearCellsObservation(){
 const feedback=document.getElementById('cells-discover-feedback');if(feedback)feedback.textContent='';
}
function revealCellsObservation(){
 const choice=document.querySelector('input[name="cells-discover-choice"]:checked'),feedback=document.getElementById('cells-discover-feedback');
 if(!choice){feedback.textContent='Choose an observation first. It is fine to be unsure; this is not graded.';return;}
 feedback.textContent=choice.value==='many'?'Exactly. The image shows many cells forming a larger leaf. Their visible walls help us recognize individual cells.':'Look at the repeating compartments and their boundaries. Rather than one enormous cell, this leaf consists of many cells arranged together. The image alone cannot establish that every visible structure is alive.';
}
function clearCellsOxygenFeedback(){
 const feedback=document.getElementById('cells-oxygen-feedback');if(feedback)feedback.textContent='';
}
function reconsiderCellsOxygen(){
 const choice=document.querySelector('input[name="cells-oxygen-choice"]:checked'),feedback=document.getElementById('cells-oxygen-feedback');
 if(!choice){feedback.textContent='Choose a prediction first. It is fine to be unsure; this practice is not graded.';return;}
 feedback.textContent='';document.getElementById('cells-oxygen-reconsider').hidden=false;
 document.getElementById('cells-oxygen-reconsider-title').focus({preventScroll:true});
}
function explainCellsOxygen(){
 const choice=document.querySelector('input[name="cells-oxygen-choice"]:checked'),feedback=document.getElementById('cells-oxygen-feedback');
 if(!choice){feedback.textContent='Choose a prediction first, then reconsider it before revealing the explanation.';return;}
 if(document.getElementById('cells-oxygen-reconsider').hidden)return;
 feedback.textContent=(choice.value==='inward'?'Your prediction fits these conditions. ':'A useful chance to revise your prediction. ')+
 'Oxygen molecules can cross in both directions. With a higher oxygen concentration outside and a membrane that permits passage, more move inward than outward overall: net movement is into the cell. The membrane does not choose a direction or know what the cell needs. If the concentration difference disappears, molecules still move but there is no net movement due to that difference.';
}
function cellsLessonSummary(){
 const next=resolveSubjectLesson('Biology','biology-dna-heredity');
 return `<section class="cells-summary"><h4 id="cells-reflect" tabindex="-1">Remember and continue</h4><ul><li>Membranes regulate exchange; they are selectively permeable.</li><li>Typical prokaryotic and eukaryotic cells share basic structures, but differ in how their contents are organized.</li><li>A nucleus is not required for a cell to contain DNA.</li></ul><p>Completion records your activity, not proven mastery. Use the completion button below when you are ready.</p><p><a href="${next.href}" onclick="openLesson(${next.legacyIndex})">Next: DNA and heredity →</a></p><p><a href="/notes.html">Open Notes Library →</a> · <a href="#note">Your original Biology note</a></p><p>Notes require an explicit Save. Before leaving, save any answer or note you want to keep.</p></section>`;
}
function scrollCellsSection(section){
 const targets={understand:'cells-understand',compare:'cells-compare',practice:'mcq-1',reflect:'cells-reflect'};
 const id=Object.hasOwn(targets,section)?targets[section]:null,target=id&&document.getElementById(id);if(!target)return;
 target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
 target.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'start'});
}
function dnaLessonIntroduction(){
 return `<section class="cells-learning dna-learning" aria-labelledby="dna-opening">
 <a href="#subject-overview">← Back to Biology overview</a>
 <header class="cells-header"><p class="cells-eyebrow">BIOLOGY · LESSON 3 OF 4</p><h3 id="dna-opening">DNA and heredity</h3><p>How can inherited DNA influence a trait?</p></header>
 <nav class="cells-section-nav" aria-label="DNA lesson sections"><button type="button" onclick="scrollDnaSection('understand')">Understand</button><button type="button" onclick="scrollDnaSection('pathway')">Follow the pathway</button><button type="button" onclick="scrollDnaSection('practice')">Practice</button><button type="button" onclick="scrollDnaSection('reflect')">Reflect</button></nav>
 <section class="cells-goals"><h4>What you will understand</h4><ul><li>Explain how a gene can influence a trait through molecules and cell processes.</li><li>Explain why inherited DNA is not the only influence on many traits.</li></ul></section>
 <h4 id="dna-understand" tabindex="-1">From information to a working cell</h4><p>In the Cells lesson, you saw that cells contain DNA, whether or not they have a nucleus. <strong>DNA</strong> is a molecule that stores biological information. A <strong>gene</strong> is a stretch of DNA whose information can be used to make a functional RNA molecule or a protein through an RNA intermediate.</p>
 <p><strong>RNA</strong> is another kind of molecule. For a protein-coding gene, an RNA copy carries information used to build a protein. Proteins do many jobs: some help chemical reactions happen, while others support structures or carry signals. These activities can influence a <strong>trait</strong>, an observable characteristic. Some genes instead produce RNA that works without being translated into protein.</p>
 <h4 id="dna-pathway" tabindex="-1">Follow one possible pathway</h4><figure class="dna-pathway"><img src="/assets/biology/gene-to-trait.svg" alt="One protein-coding gene example: a gene in DNA provides information for RNA, then a protein that affects pigment production and contributes to coat colour. Other genes, development and environment can also influence traits." aria-describedby="dna-pathway-description" width="360" height="540"><figcaption>Simplified example, not a rule for every gene or trait.</figcaption></figure>
 <div id="dna-pathway-description" class="cells-diagram-key"><ul><li><strong>Information:</strong> DNA is used to make RNA; for a protein-coding gene, RNA is used to build a protein.</li><li><strong>Function:</strong> that protein can affect a cellular process, such as pigment production.</li><li><strong>Outcome:</strong> the process contributes to a trait. DNA does not turn into a trait, and one gene need not determine the whole outcome.</li></ul></div>
 <aside class="cells-connection"><h4>Why it matters: a puppy’s coat</h4><p>A puppy may inherit coat-colour variants from its parents because DNA is passed on during reproduction. A <strong>variant</strong> is a difference in DNA sequence. A variant affecting a pigment-related protein or when it is made can influence the pigment produced or distributed in hair.</p><p>This is one possible route, not a prediction of a particular puppy’s colour. Coat colour can involve several genes. More generally, traits can also depend on development and environment, so DNA is influential without being a complete script for appearance.</p></aside>
 <p><strong>Heredity</strong> is the passing of genetic information from parents to offspring. Siblings can receive different combinations of variants. Inheritance and gene activity are biological processes, not choices made by an organism.</p>
 <details class="cells-deeper"><summary>Explore deeper: Genes and their products</summary><p>Optional explanation — the core lesson and practice stand on their own.</p><p>Making RNA from DNA information is called <strong>transcription</strong>. For protein-coding genes, using RNA information to build a protein is called <strong>translation</strong>. Some RNA molecules have other functions, such as helping regulate gene activity. A gene does not always correspond to exactly one final protein product.</p><p>Cells regulate when, where and how much gene product they make. Different cell types can use different parts of much the same genetic information. The pathway diagram shows one example, not every kind of regulation.</p></details>
 <details class="cells-deeper"><summary>Explore deeper: Why relatives can differ</summary><p>Optional explanation — no additional assessment or completion step.</p><p>In sexual reproduction, reproductive cells carry different combinations of inherited variants. This helps explain why siblings with the same parents often differ; identical twins are a special case with very similar inherited DNA.</p><p>Many traits reflect contributions from multiple genes along with development and environment. Sharing a variant does not guarantee identical outcomes. Conversely, similar appearance alone does not establish identical DNA.</p></details>
 <details class="cells-sources"><summary>Sources for this explanation</summary><ul><li><a href="https://www.genome.gov/genetics-glossary/Gene">NHGRI: Gene</a></li><li><a href="https://www.genome.gov/genetics-glossary/Gene-Expression">NHGRI: Gene expression</a></li><li><a href="https://www.genome.gov/genetics-glossary/Phenotype">NHGRI: Phenotype</a></li></ul></details>
 </section>`;
}
function dnaLessonSummary(){
 const next=resolveSubjectLesson('Biology','biology-natural-selection');
 return `<section class="cells-summary dna-summary"><h4 id="dna-reflect" tabindex="-1">Remember and continue</h4><ul><li>Genes influence traits through functional molecules and cellular processes.</li><li>Not every gene encodes a protein, and not every trait has one determining gene.</li><li>Inherited variation, development and environment can all contribute to differences.</li></ul><p>Next, explore how inherited differences can affect survival and reproduction across generations.</p><p><a href="${next.href}" onclick="openLesson(${next.legacyIndex})">Next: Evolution by natural selection →</a></p><p><a href="/notes.html">Open Notes Library →</a> · <a href="#note">Your original Biology note</a></p><p>Checking your answer explicitly saves it; notes require Save. Completion records learning activity, not proven mastery.</p></section>`;
}
function scrollDnaSection(section){
 const targets={understand:'dna-understand',pathway:'dna-pathway',practice:'mcq-2',reflect:'dna-reflect'};
 const id=Object.hasOwn(targets,section)?targets[section]:null,target=id&&document.getElementById(id);if(!target)return;
 target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
 target.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'start'});
}
function selectionLessonIntroduction(){
 return `<section class="cells-learning selection-learning" aria-labelledby="selection-opening">
 <a href="#subject-overview">← Back to Biology overview</a>
 <header class="cells-header"><p class="cells-eyebrow">BIOLOGY · LESSON 4 OF 4</p><h3 id="selection-opening">Evolution by natural selection</h3><p>How can inherited differences become more common without anyone planning the change?</p></header>
 <nav class="cells-section-nav" aria-label="Natural selection lesson sections"><button type="button" onclick="scrollSelectionSection('understand')">Understand</button><button type="button" onclick="scrollSelectionSection('example')">Beetle example</button><button type="button" onclick="scrollSelectionSection('practice')">Practice</button><button type="button" onclick="scrollSelectionSection('reflect')">Reflect</button></nav>
 <section class="cells-goals"><h4>What you will understand</h4><ul><li>Distinguish differences between individuals from heritable variation.</li><li>Explain how environmental pressures can affect reproductive success.</li><li>Explain population change over generations without a plan or goal.</li></ul></section>
 <h4 id="selection-understand" tabindex="-1">Start with inherited differences</h4><p>In DNA and heredity, you saw how inherited DNA variants can influence traits through molecules and cell processes. A <strong>population</strong> is a group of organisms of the same species living in an area. Individuals in it differ: this is <strong>variation</strong>. Some differences are <strong>heritable</strong>, meaning they can be passed from parents to offspring. Not every difference is inherited; environment and development matter too.</p>
 <p>A <strong>selection pressure</strong> is an environmental factor, such as a predator, that affects survival or reproduction. It does not choose deliberately. A trait that helps in one environment may not help in another.</p>
 <p><strong>Reproductive success</strong> means contribution to later generations through offspring. Living longer is not enough by itself: inherited differences spread through reproduction. When individuals with a heritable trait leave more offspring on average, that trait may become more common in later generations. Individuals experience differences in survival and reproduction; <strong>populations evolve across generations</strong>.</p>
 <h4 id="selection-example" tabindex="-1">Camouflage: follow the generations</h4><p>Imagine beetles on dark ground with birds hunting them. Darker beetles may be harder to spot, so they may survive and leave more offspring. <strong>Assume the colour differences are heritable</strong> and, for this simplified example, offspring resemble their parents in colour. If darker parents contribute more descendants, a later generation can contain a larger proportion of darker beetles.</p>
 <figure class="selection-diagram"><img src="/assets/biology/natural-selection.svg" alt="Hypothetical beetle example: an initial generation has four darker striped and four lighter dotted beetles. Under predation on dark ground, darker parents contribute six offspring and lighter parents two. The next generation contains six darker and two lighter new individuals." aria-describedby="selection-diagram-description" width="360" height="620"><figcaption>Simplified hypothetical example, not measured data or a guaranteed outcome.</figcaption></figure>
 <div id="selection-diagram-description" class="cells-diagram-key"><ul><li><strong>Variation:</strong> the starting generation contains both colours.</li><li><strong>Reproduction:</strong> in this illustration, darker parents contribute six offspring and lighter parents two.</li><li><strong>Change:</strong> darker beetles make up six of eight in the later generation, compared with four of eight before.</li></ul><p>These are <strong>new descendants</strong>, not the original beetles changing colour. Numbers are illustrative. We assume inherited colour and simplified reproduction; real inheritance can be more complex. Outcomes depend on conditions and chance, and both types can still reproduce. Stripe and dot patterns identify the diagram categories; they are not additional biological traits.</p></div>
 <aside class="cells-connection"><h4>How can complexity arise without a plan?</h4><p>If inherited differences affect reproductive success repeatedly, their effects can accumulate across many generations. New variation can provide further possibilities for selection. Successive changes in existing structures and processes can contribute to complex adaptations, without anticipating a future goal. Selection does not guarantee improvement or increasing complexity.</p><p>Natural selection is <strong>one mechanism of evolution</strong>. It acts on available heritable variation; it does not supply a needed trait on request.</p></aside>
 <details class="cells-deeper"><summary>Explore deeper: Where inherited variation comes from</summary><p>Optional explanation — the core lesson and practice stand on their own.</p><p><strong>Mutations</strong> are changes in DNA that can introduce new variants. In sexual reproduction, inherited variants are also reshuffled into new combinations. Whether a new difference can be inherited depends on how it arises and is passed on.</p><p>Mutations do not arise because an organism anticipates what it will need. Their effects can be helpful, harmful or have little effect in a particular setting. Selection changes how variants are represented through differential reproductive success.</p></details>
 <details class="cells-deeper"><summary>Explore deeper: Selection has limits</summary><p>Optional explanation — no extra assessment or completion step.</p><p>Selection works with existing variation and biological constraints. A trait can involve trade-offs: an advantage in one setting can be a disadvantage in another. Environments change, so there is no permanently perfect organism or inevitable march toward complexity.</p><p>Chance also matters. <strong>Genetic drift</strong> is change in variant frequencies through chance sampling across generations. <strong>Gene flow</strong> moves variants between populations through reproduction involving migrants. Not every evolutionary change is caused by natural selection.</p></details>
 <details class="cells-sources"><summary>Sources for this explanation</summary><ul><li><a href="https://openstax.org/books/biology-2e/pages/19-3-adaptive-evolution">OpenStax Biology 2e: Adaptive evolution</a></li><li><a href="https://openstax.org/books/biology-2e/pages/19-2-population-genetics">Population genetics</a></li></ul></details>
 </section>`;
}
function selectionLessonSummary(){
 return `<section class="cells-summary selection-summary"><h4 id="selection-reflect" tabindex="-1">Remember and connect</h4><ul><li>Heritable variation connects differences to later generations.</li><li>Environmental conditions can affect how many offspring individuals leave.</li><li>Repeated differences in reproduction can change populations without foresight. Natural selection is one mechanism of evolution.</li></ul><p><a href="#subject-overview">Return to Biology overview →</a></p><p><a href="/projects.html?project=plant-evolution">Explore the Plant Evolution project →</a></p><p><a href="/review.html">View your review schedule →</a> · <a href="/notes.html">Open Notes Library →</a> · <a href="#note">Your original Biology note</a></p><p>Checking your answer explicitly saves it; notes require Save. Completion records learning activity, not proven mastery. Use the existing reflection and completion controls below when ready.</p></section>`;
}
function scrollSelectionSection(section){
 const targets={understand:'selection-understand',example:'selection-example',practice:'mcq-3',reflect:'selection-reflect'};
 const id=Object.hasOwn(targets,section)?targets[section]:null,target=id&&document.getElementById(id);if(!target)return;
 target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
 target.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'start'});
}
function lifeLessonIntroduction(){
 return `<section class="cells-learning life-learning" aria-labelledby="life-opening">
 <a href="#subject-overview">← Back to Biology overview</a>
 <header class="cells-header"><p class="cells-eyebrow">BIOLOGY · LESSON 1 OF 4</p><h3 id="life-opening">What is life?</h3><p>How can a seed be alive when it looks as still as a pebble?</p></header>
 <nav class="cells-section-nav" aria-label="Life lesson sections"><button type="button" onclick="scrollLifeSection('understand')">Understand</button><button type="button" onclick="scrollLifeSection('example')">Seed to seedling</button><button type="button" onclick="scrollLifeSection('practice')">Practice</button><button type="button" onclick="scrollLifeSection('reflect')">Reflect</button></nav>
 <section class="cells-goals"><h4>What you will understand</h4><ul><li>Recognize evidence of life through cells, energy use and responses.</li><li>Explain why visible movement or growth alone does not determine whether something is alive.</li><li>Explain how a viable dormant seed remains alive and why cells are our next topic.</li></ul></section>
 <h4 id="life-understand" tabindex="-1">Look for connected evidence</h4><p><strong>Biology</strong> is the scientific study of living things and their interactions. A plant and a pebble can both stay in one place, but the plant has an organized living system within it. We look for connected evidence of that system, rather than relying on movement alone.</p>
 <p>Known living organisms are made of <strong>cells</strong>, small organized units in which life processes occur. Some organisms, such as bacteria, consist of one cell. Others, such as plants and animals, contain many cooperating cells. An organism does not have to be large or multicellular to be alive.</p>
 <p>Living systems use energy and carry out chemical reactions that maintain and build their structures. They regulate internal conditions, such as the balance of water, so their processes can continue. A living thing can depend on other organisms and its surroundings; being alive does not mean being self-sufficient.</p>
 <h4 id="life-example" tabindex="-1">From a quiet seed to a growing plant</h4><p>A <strong>viable</strong> seed contains a living embryo, the young plant, with stored reserves available to support growth. A viable <strong>dormant</strong> seed remains alive while showing little visible activity; dormancy can prevent immediate germination even when basic growing conditions seem suitable. <strong>Germination</strong> is the start of the embryo’s growth into a seedling.</p>
 <p>When the seed’s relevant requirements are met, early growth can draw on stored reserves. Green tissues can later capture light to make sugars from carbon dioxide and water. The plant uses sugars as fuel and building material; soil supplies water and minerals, not all the plant’s energy.</p>
 <figure class="life-diagram"><img src="/assets/biology/life-and-seed.svg" alt="A viable seed contains a living embryo and stored reserves. Once germination requirements are met, the embryo grows using reserves. A growing green seedling can capture light to make sugars. An enlarged cell inset shows that the plant consists of cells." aria-describedby="life-diagram-description" width="360" height="640"><figcaption>Simplified, not to scale. A possible sequence for a viable seed, not a guarantee that every seed will germinate.</figcaption></figure>
 <div id="life-diagram-description" class="cells-diagram-key"><ul><li><strong>Seed:</strong> living embryo and reserves inside a protective covering; not every part of a seed is living tissue.</li><li><strong>Germinating seed:</strong> growth begins when the necessary requirements are satisfied, drawing on stored reserves.</li><li><strong>Seedling:</strong> green tissues can use light to make sugars. The enlarged inset represents one of its many cells.</li></ul><p>Not every seed is viable. A <strong>dead seed</strong> has lost the capacity to resume its living processes and develop a seedling. A viable dormant seed retains that capacity, though it may need particular cues before germinating. Failure to germinate immediately does not establish death; appearance alone cannot reliably tell you which seed is viable.</p></div>
 <aside class="cells-connection"><h4>A plant by the window</h4><p>A young shoot may change its growth direction toward light. This is a <strong>response</strong> to its surroundings, even though the whole plant stays rooted. Together with its cells, energy use and internal activity, that response helps explain why the plant is living.</p><p>Growth or motion alone is not proof of life: crystals can grow and a pebble can roll. Nor must an individual visibly grow, reproduce or perform every process independently at every moment. Reproduction belongs in a life-cycle context, and evolution describes populations across generations. A quiet seed is a useful reminder to consider the whole pattern.</p></aside>
 <details class="cells-deeper"><summary>Explore deeper: Life can be quiet</summary><p>Optional explanation — the core lesson and quiz stand on their own.</p><p>During dormancy, activity can be greatly reduced. Stored reserves can support the embryo as growth resumes. Different species require different combinations of water, temperature, oxygen or other cues; some seeds need dormancy-breaking conditions before they can germinate.</p><p>A viable seed may also wait simply because external conditions are unsuitable, without being physiologically dormant. Neither visible stillness nor one unsuccessful germination attempt is a reliable test of death.</p></details>
 <details class="cells-deeper"><summary>Explore deeper: Where definitions become difficult</summary><p>Optional explanation — no extra assessment or completion step.</p><p><strong>Viruses</strong> are noncellular biological entities that depend on host cells to replicate. They have genetic material and evolve, but do not carry out an independent cell’s full set of processes. Whether to call them living depends on how life is defined; their classification is not universally settled.</p><p>This boundary case does not erase the useful patterns we observe in cellular organisms. It shows why a scientific definition needs context rather than a single sign such as movement.</p></details>
 <details class="cells-sources"><summary>Sources for this explanation</summary><ul><li><a href="https://openstax.org/books/biology-2e/pages/1-2-themes-and-concepts-of-biology">OpenStax Biology 2e: Themes and concepts of biology</a></li><li><a href="https://www.forestresearch.gov.uk/tools-and-resources/fthr/seeds-pretreatment-information/seed-pretreatment-seed-dormancy-characteristics/">Forest Research: Seed dormancy characteristics</a></li><li><a href="https://openstax.org/books/biology-2e/pages/21-1-viral-evolution-morphology-and-classification">OpenStax: Viruses</a></li></ul></details>
 </section>`;
}
function lifeLessonSummary(){
 const next=resolveSubjectLesson('Biology','biology-cells');
 return `<section class="cells-summary life-summary"><h4 id="life-reflect" tabindex="-1">Remember and continue</h4><ul><li>Look for connected evidence: cells, energy use, internal activity and responses.</li><li>Visible movement or growth alone cannot establish whether something is alive.</li><li>A viable dormant seed can remain alive without obvious activity; not every seed is viable.</li></ul><p>Next, explore the cells in which living processes happen.</p><p><a href="${next.href}" onclick="openLesson(${next.legacyIndex})">Next: Cells: the basic unit →</a></p><p><a href="/notes.html">Open Notes Library →</a> · <a href="/review.html">View your review schedule →</a> · <a href="#note">Your original Biology note</a></p><p>Checking your answer explicitly saves it; notes require Save. Completion records learning activity, not proven mastery.</p></section>`;
}
function scrollLifeSection(section){
 const targets={understand:'life-understand',example:'life-example',practice:'mcq-0',reflect:'life-reflect'};
 const id=Object.hasOwn(targets,section)?targets[section]:null,target=id&&document.getElementById(id);if(!target)return;
 target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
 target.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'start'});
}
function chemistryBondsIntroduction(){return "<section class=\"bonds-learning\" aria-labelledby=\"bonds-opening\"><a href=\"#subject-overview\">← Back to Chemistry overview</a><header><p>CHEMISTRY · LESSON 3 OF 4</p><h3 id=\"bonds-opening\">Chemical bonds</h3><p class=\"bonds-callout\">Water and table salt both contain bonded particles—why are their structures so different?</p></header>\n<nav aria-label=\"Bonds lesson sections\"><button type=\"button\" onclick=\"scrollBondsSection('visualize')\">Visualize</button><button type=\"button\" onclick=\"scrollBondsSection('compare')\">Compare</button><button type=\"button\" onclick=\"scrollBondsSection('apply')\">Apply</button><button type=\"button\" onclick=\"scrollBondsSection('explain')\">Explain</button></nav>\n<section class=\"bonds-callout\"><h4>What you will understand</h4><ul><li>Explain bonding using electrical interactions and energy.</li><li>Distinguish shared electrons from attraction between opposite ions.</li><li>Connect molecules and ionic lattices to familiar properties.</li></ul></section>\n<section id=\"bonds-prediction\" class=\"bonds-callout\" aria-labelledby=\"bonds-predict-title\"><h4 id=\"bonds-predict-title\">Predict: when water boils</h4><label for=\"bonds-prediction-choice\">What ordinarily happens to the O–H bonds inside water molecules?</label><select id=\"bonds-prediction-choice\" onchange=\"clearBondsFeedback('prediction')\"><option value=\"\">Choose your prediction</option><option value=\"intact\">They stay intact as molecules separate</option><option value=\"break\">They break, separating hydrogen from oxygen</option><option value=\"unsure\">I am not sure yet</option></select><p>Temporary, ungraded practice. Nothing here is saved. Reconsider your prediction after exploring.</p><details><summary>Reconsider and reveal the explanation</summary><p>Would you keep your prediction? Ordinary boiling separates intact H₂O molecules: it overcomes attractions between molecules, not the covalent O–H bonds within them.</p></details><p id=\"bonds-prediction-feedback\" role=\"status\" aria-live=\"polite\"></p></section>\n<h4>Why a bond can form</h4><p>Lesson 2 introduced charged particles. Negative electrons attract positive nuclei; like charges repel. A bond can form when these interactions produce a lower-energy arrangement than the separated particles.</p><p>At a suitable separation, attraction and repulsion balance. Atoms have no intentions: they do not bond because they “want” a full shell. Whether a bonded substance forms depends on the conditions and the complete process.</p><p><strong>Forming a bond releases energy; breaking it requires energy.</strong> A reaction’s overall energy change depends on all bonds broken and formed, not just one step.</p>\n<h4 id=\"bonds-visualize\" tabindex=\"-1\">Shared electrons hold a molecule together</h4><div class=\"bonds-pair\"><div><p>In a <strong>covalent bond</strong>, atoms share electrons. Valence electrons are the outer electrons involved in bonding. The shared electron pair is attracted to both nuclei, helping hold the atoms together.</p><p>One water molecule has two O–H bonds. Each bond shares a pair of electrons; oxygen also has two lone pairs that are not shared in these bonds. Sharing is unequal in water: oxygen attracts the shared electrons more strongly.</p></div><figure><img src=\"/assets/chemistry/covalent-water.svg\" width=\"320\" height=\"240\" alt=\"Bent water molecule: oxygen shares one electron pair with each of two hydrogens and has two lone pairs.\" aria-describedby=\"bonds-water-key\"><figcaption id=\"bonds-water-key\">O = oxygen; H = hydrogen. Eight dots show valence electrons: two bonding pairs and two lone pairs. Lines mark O–H bonds, not paths followed by electrons.</figcaption></figure></div>\n<h4 id=\"bonds-compare\" tabindex=\"-1\">Ions attract throughout a crystal</h4><div class=\"bonds-pair bonds-ionic\"><figure><img src=\"/assets/chemistry/ionic-structure.svg\" width=\"320\" height=\"480\" alt=\"Electron-count example: sodium loses one electron and chlorine gains it. A repeating slice then shows alternating positive sodium and negative chloride ions.\" aria-describedby=\"bonds-ionic-key bonds-model-note\"></figure><div><p>A sodium atom losing one electron becomes <strong>Na⁺</strong>; a chlorine atom gaining it becomes <strong>Cl⁻</strong>, a chloride ion. Their proton counts and element identities stay unchanged.</p><p><strong>Ionic bonding is electrostatic attraction between oppositely charged ions.</strong> Electron transfer can create the ions; transfer itself is not the bond.</p><p>Solid sodium chloride is an extended, three-dimensional <strong>ionic lattice</strong>. Each ion interacts with surrounding ions; there are no separate NaCl molecules. NaCl records a 1:1 ratio of sodium to chloride ions.</p><p id=\"bonds-ionic-key\">The upper panel tracks one electron using counts, not the complete sodium–chlorine reaction. Chlorine gas is Cl₂. Forming isolated ions has energy costs as well as gains; attraction in the lattice contributes to the overall energy balance.</p></div></div>\n<h4>Structure helps explain properties</h4><p>Water contains discrete molecules. Boiling usually separates them without breaking their internal bonds. Salt’s lattice holds its ions in place: solid salt conducts poorly, while molten salt or a salt solution conducts because ions can move.</p><p>Not every covalent substance consists of separate molecules: some, such as diamond, form extended networks. These two examples are a comparison, not a rule predicting every material’s properties.</p>\n<p id=\"bonds-model-note\" class=\"bonds-model-note\"><strong>Model key:</strong> dots show valence electrons schematically, not fixed locations; sizes and distances are not to scale. The lattice panel is a two-dimensional slice of a three-dimensional structure, not a full crystal or a set of paired molecules.</p>\n<section id=\"bonds-interpretation\" class=\"bonds-callout\" aria-labelledby=\"bonds-apply\"><h4 id=\"bonds-apply\" tabindex=\"-1\">Apply: interpret the particles</h4><p>Temporary, ungraded practice. Nothing here is saved.</p><label for=\"bonds-case\">Choose a situation</label><select id=\"bonds-case\" onchange=\"clearBondsFeedback('interpretation')\"><option value=\"sharing\">An O–H bond inside a water molecule</option><option value=\"ionic\">Na⁺ and Cl⁻ held in solid salt</option><option value=\"separation\">Water boiling into vapour</option></select><fieldset><legend>What best explains this situation?</legend><label><input type=\"radio\" name=\"bonds-interpretation-answer\" value=\"sharing\" onchange=\"clearBondsFeedback('interpretation')\"> Shared electrons attracted to both nuclei</label><label><input type=\"radio\" name=\"bonds-interpretation-answer\" value=\"ionic\" onchange=\"clearBondsFeedback('interpretation')\"> Electrostatic attraction between opposite ions</label><label><input type=\"radio\" name=\"bonds-interpretation-answer\" value=\"separation\" onchange=\"clearBondsFeedback('interpretation')\"> Separation of intact molecules</label></fieldset><button type=\"button\" onclick=\"checkBondsInterpretation()\">Check my interpretation</button><p id=\"bonds-interpretation-feedback\" role=\"status\" aria-live=\"polite\"></p></section>\n<h4>Return to your prediction</h4><p>Explain what changes during boiling and what remains intact before opening the prediction explanation.</p><button type=\"button\" class=\"secondary\" onclick=\"scrollBondsSection('prediction')\">Revisit my prediction</button>\n<details><summary>Explore deeper: Why sharing can be unequal</summary><p>Electronegativity describes how strongly an atom attracts shared electrons. Unequal sharing makes water’s O–H bonds polar; partial charges are not the same as the full charges on Na⁺ and Cl⁻.</p></details><details><summary>Explore deeper: Why bonding rules have exceptions</summary><p>The octet rule is a useful pattern for many main-group compounds, not a universal cause of bonding. Hydrogen commonly shares two electrons; other atoms can have fewer or more than eight around them. Energy and electronic structure provide the deeper explanation.</p></details><details><summary>Scientific sources</summary><p><a href=\"https://openstax.org/books/chemistry-2e/pages/7-1-ionic-bonding\">OpenStax: Ionic Bonding</a> · <a href=\"https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding\">Covalent Bonding</a> · <a href=\"https://openstax.org/books/chemistry-2e/pages/10-5-the-solid-state-of-matter\">Solid Structures</a></p></details></section>";}
function chemistryBondsSummary(){return "<section class=\"bonds-callout\"><h4 id=\"bonds-explain\" tabindex=\"-1\">Remember and continue</h4><ul><li>Bonding reflects electrical interactions and energy, not intention.</li><li>Covalent bonds share electrons; ionic bonding attracts opposite ions.</li><li>Water has discrete molecules; solid salt has an extended ionic lattice.</li></ul><p>Next, explore how chemical reactions rearrange atoms and bonds.</p><a href=\"#lesson-3\" onclick=\"openLesson(3)\">Next: Chemical reactions →</a><p><a href=\"/notes.html\">Notes Library</a> · <a href=\"#note\">Original Chemistry note</a> · <a href=\"/review.html\">Review schedule</a></p><p>Save answers and notes explicitly. Completion records activity, not proven mastery.</p></section>";}
function scrollBondsSection(section){
 const id={visualize:'bonds-visualize',compare:'bonds-compare',apply:'bonds-apply',explain:'bonds-explain',prediction:'bonds-prediction-choice'}[section];if(!id)return;
 const target=document.getElementById(id);if(!target)return;target.focus({preventScroll:true});target.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'center'});
}
function clearBondsFeedback(kind){const target=document.getElementById('bonds-'+kind+'-feedback');if(target)target.textContent='';}
function checkBondsInterpretation(){
 const example=document.getElementById('bonds-case').value,chosen=document.querySelector('input[name="bonds-interpretation-answer"]:checked'),feedback=document.getElementById('bonds-interpretation-feedback');
 const reasons={sharing:'Shared electrons are attracted to both nuclei in the covalent O–H bond.',ionic:'Oppositely charged ions attract throughout the lattice. Electron transfer forms ions; it is not the ionic bond itself.',separation:'Boiling ordinarily separates intact H₂O molecules without breaking their internal O–H bonds.'};
 feedback.textContent=!chosen?'Choose an explanation first.':(chosen.value===example?'That fits. ':'Reconsider. ')+reasons[example];
}
function chemistryAtomsIntroduction(){return "<section class=\"atoms-learning\" aria-labelledby=\"atoms-opening\">\n<a href=\"#subject-overview\">← Back to Chemistry overview</a><header><p>CHEMISTRY · LESSON 2 OF 4</p><h3 id=\"atoms-opening\">Atoms and elements</h3><p class=\"atoms-callout\">If two atoms have different numbers of neutrons, must they be different elements?</p></header>\n<nav aria-label=\"Atoms lesson sections\"><button type=\"button\" onclick=\"scrollAtomsSection('explore')\">Explore</button><button type=\"button\" onclick=\"scrollAtomsSection('visualize')\">Visualize</button><button type=\"button\" onclick=\"scrollAtomsSection('apply')\">Apply</button><button type=\"button\" onclick=\"scrollAtomsSection('explain')\">Explain</button></nav>\n<section class=\"atoms-callout\"><h4>What you will understand</h4><ul><li>Locate protons, neutrons and electrons and describe their charges.</li><li>Use proton number to identify elements and neutron number to distinguish isotopes.</li><li>Explain how gaining or losing electrons forms an ion without changing the element.</li></ul></section>\n<section id=\"atoms-prediction\" class=\"atoms-callout\" aria-labelledby=\"atoms-predict-title\"><h4 id=\"atoms-predict-title\">Predict before exploring</h4><label for=\"atoms-prediction-choice\">Different neutron counts: different elements?</label><select id=\"atoms-prediction-choice\" onchange=\"clearAtomsFeedback('prediction')\"><option value=\"\">Choose your prediction</option><option value=\"yes\">Yes, they must be different elements</option><option value=\"no\">Not necessarily; compare their protons</option><option value=\"unsure\">I am not sure yet</option></select><p>Temporary, ungraded practice; nothing here is saved. Keep your prediction in mind.</p><details><summary>Reconsider and reveal the explanation</summary><p>First, reconsider your choice after studying the comparisons below. Same proton count means the same element; different neutron counts make different isotopes of that element.</p></details><p id=\"atoms-prediction-feedback\" role=\"status\" aria-live=\"polite\"></p></section>\n<h4 id=\"atoms-explore\" tabindex=\"-1\">Inside an atom</h4><div class=\"atoms-pair\"><div><p>A tiny <strong>nucleus</strong> holds positive <strong>protons</strong> and, in most atoms, uncharged <strong>neutrons</strong>. Most of the mass is here.</p><p>Negative <strong>electrons</strong> occupy the much larger region around the nucleus.</p><p><strong>Neutral means balanced charge:</strong> equal proton and electron counts cancel. Neutrons add mass without charge. Common hydrogen-1 has one proton and no neutron.</p></div><figure><img src=\"/assets/chemistry/atom-structure.svg\" width=\"320\" height=\"240\" alt=\"Schematic atom: protons and neutrons in a small central nucleus, with electrons in the surrounding region.\" aria-describedby=\"atoms-model-note\"><figcaption>Proton: positive (+). Neutron: neutral (0). Electron: negative (−). Electrons are outside the nucleus, not on fixed planetary tracks.</figcaption></figure></div>\n<h4 id=\"atoms-visualize\" tabindex=\"-1\">Which particle defines the element?</h4><p><strong>Different proton numbers → different elements.</strong> Carbon has six protons; oxygen has eight. Proton number is <strong>atomic number</strong>; the periodic table follows this number, not atom size.</p>\n<div class=\"atoms-pair atoms-count-comparison\"><figure><img src=\"/assets/chemistry/element-isotope-ion.svg\" width=\"320\" height=\"480\" alt=\"Particle-count comparison: carbon 6 protons versus oxygen 8; oxygen-16 and oxygen-18 share 8 protons but have 8 versus 10 neutrons; sodium and sodium ion share 11 protons but have 11 versus 10 electrons.\" aria-describedby=\"atoms-comparison-text atoms-model-note\"></figure><div id=\"atoms-comparison-text\"><h4>Keep protons; compare neutrons</h4><p>Oxygen-16 has 8 protons and 8 neutrons. Oxygen-18 has 8 protons and 10 neutrons.</p><p>Same element, different <strong>isotopes</strong>: changing neutrons changes mass, not element identity. <strong>Mass number</strong> counts protons plus neutrons.</p><h4>Keep protons; compare electrons</h4><p>Neutral sodium: 11 protons and 11 electrons. Lose one electron: 11 protons and 10 electrons, giving <strong>Na⁺</strong>.</p><p>This is an <strong>ion</strong>—a charged particle. Losing electrons gives positive charge; gaining them gives negative charge. The element stays sodium.</p></div></div>\n<p id=\"atoms-model-note\" class=\"atoms-model-note\"><strong>Model key:</strong> p⁺ = proton, n⁰ = neutron, e⁻ = electron; × gives a count. These are count comparisons, not reactions. Colours and sizes are not to scale. The electron cloud is a possible-location model, not a solid shell or fixed orbit. Only the stated examples are shown; other charge states need not be stable.</p>\n<section id=\"atoms-comparison\" class=\"atoms-callout\" aria-labelledby=\"atoms-apply\"><h4 id=\"atoms-apply\" tabindex=\"-1\">Apply: what is different?</h4><p>Temporary, ungraded practice. Nothing here is saved.</p><label for=\"atoms-case\">Choose a comparison</label><select id=\"atoms-case\" onchange=\"clearAtomsFeedback('comparison')\"><option value=\"element\">Carbon (6 protons) versus oxygen (8 protons)</option><option value=\"isotope\">Oxygen-16 (8p, 8n) versus oxygen-18 (8p, 10n)</option><option value=\"ion\">Sodium (11p, 11e) versus sodium ion (11p, 10e)</option></select><fieldset><legend>Which difference do these counts show?</legend><label><input type=\"radio\" name=\"atoms-comparison-answer\" value=\"element\" onchange=\"clearAtomsFeedback('comparison')\"> Different elements</label><label><input type=\"radio\" name=\"atoms-comparison-answer\" value=\"isotope\" onchange=\"clearAtomsFeedback('comparison')\"> Different isotopes of the same element</label><label><input type=\"radio\" name=\"atoms-comparison-answer\" value=\"ion\" onchange=\"clearAtomsFeedback('comparison')\"> Neutral atom versus ion of the same element</label></fieldset><button type=\"button\" onclick=\"checkAtomsComparison()\">Check my comparison</button><p id=\"atoms-comparison-feedback\" role=\"status\" aria-live=\"polite\"></p></section>\n<h4>Return to your prediction</h4><p>Would you keep or change your prediction now? Explain which count matters before revealing the answer.</p><button type=\"button\" class=\"secondary\" onclick=\"scrollAtomsSection('prediction')\">Revisit my prediction</button>\n<details><summary>Explore deeper: Reading isotope notation</summary><p>In oxygen-18, 18 is the mass number: 8 protons plus 10 neutrons. A periodic-table decimal atomic mass is usually an average reflecting isotopic composition, not the neutron count of one atom.</p></details><details><summary>Explore deeper: What an electron cloud represents</summary><p>Electrons are described by quantum states and probability distributions. A cloud sketches where an electron may be detected; it is not a solid surface or a photograph. You do not need orbital calculations for this lesson.</p></details>\n<details><summary>Scientific sources</summary><p><a href=\"https://openstax.org/books/chemistry-2e/pages/2-3-atomic-structure-and-symbolism\">OpenStax: Atomic Structure and Symbolism</a> · <a href=\"https://openstax.org/books/chemistry-2e/pages/2-5-the-periodic-table\">The Periodic Table</a></p></details></section>";}
function chemistryAtomsSummary(){return "<section class=\"atoms-callout\"><h4 id=\"atoms-explain\" tabindex=\"-1\">Remember and continue</h4><ul><li>Protons identify the element.</li><li>Different neutron counts distinguish isotopes of that element.</li><li>Gaining or losing electrons changes charge, not the element.</li></ul><p>Next: how electron interactions help atoms form bonds.</p><a href=\"#lesson-2\" onclick=\"openLesson(2)\">Next: Chemical bonds →</a><p><a href=\"/notes.html\">Notes Library</a> · <a href=\"#note\">Original Chemistry note</a> · <a href=\"/review.html\">Review schedule</a></p><p>Save answers and notes explicitly. Completion records activity, not proven mastery.</p></section>";}
function scrollAtomsSection(section){
 const id={explore:'atoms-explore',visualize:'atoms-visualize',apply:'atoms-apply',explain:'atoms-explain',prediction:'atoms-prediction-choice'}[section];if(!id)return;
 const target=document.getElementById(id);if(!target)return;target.focus({preventScroll:true});target.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'center'});
}
function clearAtomsFeedback(kind){
 const target=document.getElementById('atoms-'+kind+'-feedback');if(target)target.textContent='';
}
function checkAtomsComparison(){
 const example=document.getElementById('atoms-case').value,chosen=document.querySelector('input[name="atoms-comparison-answer"]:checked'),feedback=document.getElementById('atoms-comparison-feedback');
 const reasons={element:'Different proton numbers identify carbon and oxygen as different elements.',isotope:'Both have eight protons, so both are oxygen; the neutron difference makes them isotopes with different masses.',ion:'The proton count stays eleven. Losing an electron leaves a positive sodium ion, not a different element.'};
 feedback.textContent=!chosen?'Choose a description first.':(chosen.value===example?'That fits. ':'Reconsider. ')+reasons[example];
}
function chemistryMatterIntroduction(){return "<section class=\"matter-learning\" aria-labelledby=\"matter-opening\"><header><p>CHEMISTRY · LESSON 1 OF 4</p><h3 id=\"matter-opening\">What is matter made of?</h3><p class=\"matter-opening-question\">When a puddle disappears, has its matter disappeared too?</p></header>\n<nav aria-label=\"Matter lesson sections\"><button type=\"button\" onclick=\"scrollMatterSection('understand')\">Understand</button><button type=\"button\" onclick=\"scrollMatterSection('particles')\">Water particles</button><button type=\"button\" onclick=\"scrollMatterSection('practice')\">Practice</button><button type=\"button\" onclick=\"scrollMatterSection('reflect')\">Reflect</button></nav>\n<section class=\"matter-callout\"><h4>What you will understand</h4><ul><li>Describe matter using atoms and molecules.</li><li>Compare particles in solid, liquid and gas.</li><li>Distinguish physical changes from chemical changes.</li></ul></section>\n<section id=\"puddle-practice\" class=\"matter-callout\" aria-labelledby=\"puddle-title\"><h4 id=\"puddle-title\">Make a prediction</h4><label for=\"puddle-choice\">Where might the puddle’s water go?</label><select id=\"puddle-choice\" onchange=\"clearPuddleFeedback()\"><option value=\"\">Choose an explanation</option><option value=\"air\">Into the air, still as water molecules</option><option value=\"gone\">Its molecules stop existing</option><option value=\"atoms\">Its molecules split into hydrogen and oxygen</option></select><p>Temporary, ungraded practice. Nothing here is saved. Keep your prediction in mind as you explore.</p><button type=\"button\" onclick=\"checkPuddlePrediction()\">Check my prediction</button><p id=\"puddle-feedback\" role=\"status\" aria-live=\"polite\"></p></section>\n<h4 id=\"matter-understand\" tabindex=\"-1\">Meet the particles</h4><p>Matter has mass and occupies space: air and water are matter; light is not matter. Chemistry studies matter’s composition, structure, properties and transformations.</p><p>Ordinary matter is made of atoms; some bond into molecules. Not all substances consist of separate molecules.</p>\n<figure class=\"matter-molecule\"><img src=\"/assets/chemistry/water-molecule.svg\" width=\"360\" height=\"190\" alt=\"One bent water molecule: a central oxygen atom O bonded to two hydrogen atoms H.\" aria-describedby=\"molecule-key\"><figcaption id=\"molecule-key\">O = oxygen; H = hydrogen. Each bent group is one H₂O molecule; the solid lines are bonds joining its atoms.</figcaption></figure>\n<h4 id=\"matter-particles\" tabindex=\"-1\">Same molecules, different arrangements</h4><p class=\"matter-comparison-key\"><strong>Stays the same:</strong> every bent group is H₂O—one oxygen bonded to two hydrogens.<br><strong>Changes:</strong> how these molecules are arranged, spaced and moving.</p>\n<div class=\"matter-state-cards\"><figure><img src=\"/assets/chemistry/water-ice.svg\" width=\"360\" height=\"200\" alt=\"Selected intact water molecules in an ordered open arrangement in ice.\"><figcaption><strong>Ice · solid</strong><br>Arrangement: open and ordered.<br>Movement: molecules vibrate around positions.</figcaption></figure><figure><img src=\"/assets/chemistry/water-liquid.svg\" width=\"360\" height=\"200\" alt=\"Selected intact water molecules close together in an irregular liquid arrangement.\"><figcaption><strong>Liquid water</strong><br>Arrangement: close and irregular.<br>Movement: molecules move past one another.</figcaption></figure><figure><img src=\"/assets/chemistry/water-vapour.svg\" width=\"360\" height=\"200\" alt=\"Selected intact water molecules widely separated in water vapour.\"><figcaption><strong>Water vapour · gas</strong><br>Spacing: much farther apart.<br>Movement: molecules travel through available space. Vapour is invisible; visible mist is droplets.</figcaption></figure></div>\n<aside class=\"matter-key-idea\" aria-labelledby=\"matter-key-title\"><h4 id=\"matter-key-title\">Key idea</h4><p>During melting and evaporation, the molecules remain H₂O. Their arrangement and movement change.</p></aside><p id=\"matter-diagram-description\" class=\"matter-model-note\"><strong>About the model:</strong> selected molecules, not equal-volume samples. Colours, sizes and spacing are schematic, not to scale; still drawings represent moving molecules. Molecules do not grow or split during melting or evaporation. Attractions between molecules differ from the bonds within them. Ice is less dense than liquid water.</p>\n<h4>Return to the puddle</h4><p>Think back to your prediction. Where is the water now, and what has stayed the same? Reconsider before revealing the explanation.</p><button type=\"button\" class=\"secondary\" onclick=\"revisitPuddlePrediction()\">Revisit my prediction</button><details class=\"matter-puddle-explanation\"><summary>Reveal the puddle explanation</summary><p>Evaporation carries intact H₂O molecules into the air, without destroying them. The water becomes invisible vapour, not a new substance. Compare this with your prediction.</p></details>\n<h4>Same substance or new substances?</h4><p>Melting ice and evaporation are <strong>physical changes</strong>: the substance remains water, without destroying its molecules. Burning wood involves <strong>chemical changes</strong>, forming new substances such as gases and ash. Appearance alone is not proof: melting changes appearance too.</p>\n<section id=\"matter-practice\" class=\"matter-callout\" aria-labelledby=\"matter-practice-title\"><h4 id=\"matter-practice-title\">Try the distinction</h4><p>Ungraded practice. Nothing here is saved.</p><label for=\"matter-case\">Choose an example</label><select id=\"matter-case\" onchange=\"clearMatterPracticeFeedback()\"><option value=\"melting\">Ice melting</option><option value=\"evaporation\">A puddle evaporating</option><option value=\"burning\">Wood burning</option></select><fieldset><legend>Which description fits?</legend><label><input type=\"radio\" name=\"matter-classification\" onchange=\"clearMatterPracticeFeedback()\" value=\"same\"> Same substance; physical change</label><label><input type=\"radio\" name=\"matter-classification\" onchange=\"clearMatterPracticeFeedback()\" value=\"new\"> New substances; chemical change</label></fieldset><button type=\"button\" onclick=\"checkMatterPractice()\">Check explanation</button><p id=\"matter-practice-feedback\" role=\"status\" aria-live=\"polite\"></p></section>\n<details><summary>Explore deeper: Why evaporation can happen below boiling</summary><p>Some surface molecules have enough energy to escape the liquid. Evaporation occurs below boiling; boiling forms vapour bubbles within the liquid and depends on pressure.</p></details><details><summary>Explore deeper: Pure substances and mixtures</summary><p>A pure substance has definite chemical composition. Mixtures, such as air or salt water, contain multiple substances. Separating a mixture can be a physical process.</p></details><details><summary>Sources for this explanation</summary><p><a href=\"https://openstax.org/books/chemistry-2e/pages/1-2-phases-and-classification-of-matter\">OpenStax: Matter</a> · <a href=\"https://openstax.org/books/biology-2e/pages/2-2-water\">Water</a></p></details></section>";}
function chemistryMatterSummary(){return "<section class=\"matter-summary\"><h4 id=\"matter-reflect\" tabindex=\"-1\">Remember and continue</h4><ul><li>Ordinary matter is made of atoms; some atoms join into molecules.</li><li>States differ in particle arrangement and movement.</li><li>Physical changes preserve substance identity; chemical changes form new substances.</li></ul><p>Next, find out what makes one element different from another.</p><p><a href=\"#lesson-1\" onclick=\"openLesson(1)\">Next: Atoms and elements →</a></p><p><a href=\"/notes.html\">Notes Library</a> · <a href=\"#note\">Original Chemistry note</a> · <a href=\"/review.html\">Review schedule</a></p><p>Save answers and notes explicitly before leaving. Completion records activity, not proven mastery.</p></section>";}
function clearPuddleFeedback(){document.getElementById('puddle-feedback').textContent='';}
function checkPuddlePrediction(){
 const choice=document.getElementById('puddle-choice').value,feedback=document.getElementById('puddle-feedback');
 feedback.textContent=!choice?'Choose an explanation first.':choice==='air'?'Yes. Evaporation carries intact H₂O molecules into the air as invisible water vapour.':'Reconsider: water molecules neither disappear nor split into hydrogen and oxygen during evaporation. They enter the air intact as invisible water vapour.';
}
function revisitPuddlePrediction(){
 const target=document.getElementById('puddle-choice');target.focus({preventScroll:true});target.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'center'});
}
function clearMatterPracticeFeedback(){
 document.getElementById('matter-practice-feedback').textContent='';
}
function checkMatterPractice(){
 const example=document.getElementById('matter-case').value,choice=document.querySelector('input[name="matter-classification"]:checked'),feedback=document.getElementById('matter-practice-feedback');
 if(!choice){feedback.textContent='Choose a description, then check your explanation.';return;}
 const chemical=example==='burning',correct=choice.value===(chemical?'new':'same');
 feedback.textContent=(correct?'That fits. ':'Reconsider the substance identity. ')+(chemical?'Burning wood forms new substances through chemical reactions.':'The particles remain water molecules; their arrangement and movement change.');
}
function scrollMatterSection(section){
 const targets={understand:'matter-understand',particles:'matter-particles',practice:'matter-practice',reflect:'matter-reflect'},target=Object.hasOwn(targets,section)&&document.getElementById(targets[section]);if(!target)return;
 target.setAttribute('tabindex','-1');target.focus({preventScroll:true});target.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'start'});
}
function lessonHTML(name,l,i,isDone){
 const enhancedMatter=name==='Chemistry'&&i===0;
 const enhancedAtoms=name==='Chemistry'&&i===1;
 const enhancedBonds=name==='Chemistry'&&i===2;
 const enhancedReactions=name==='Chemistry'&&i===3;
 const enhancedCells=name==='Biology'&&resolveSubjectLesson(name,i)?.id==='biology-cells';
 const enhancedDna=name==='Biology'&&resolveSubjectLesson(name,i)?.id==='biology-dna-heredity';
 const enhancedSelection=name==='Biology'&&resolveSubjectLesson(name,i)?.id==='biology-natural-selection';
 const enhancedLife=name==='Biology'&&resolveSubjectLesson(name,i)?.id==='biology-life';
 const teaching=teacherContent(name,l);
 const r=state().review?.[name+'-'+i],due=r&&new Date(r.nextReview)<=new Date();
 const scheduled=r&&!due;
 return `<article class="lesson ${enhancedReactions?'chemistry-reactions-enhanced ':enhancedMatter?'chemistry-matter-enhanced ':enhancedAtoms?'chemistry-atoms-enhanced ':enhancedBonds?'chemistry-bonds-enhanced ':''}${enhancedCells||enhancedDna||enhancedSelection||enhancedLife?'cells-enhanced':''}${enhancedDna?' dna-enhanced':''}${enhancedSelection?' selection-enhanced':''}${enhancedLife?' life-enhanced':''} ${isDone?'lesson-done':''}" id="lesson-${i}">
 <button class="lesson-summary" type="button" aria-expanded="false" onclick="openLesson(${i})">
  <span class="lesson-number">${isDone?'✓':i+1}</span>
  <span class="lesson-summary-copy"><strong>${esc(l[0])}</strong><small>${esc(l[1])}</small></span>
  <span class="lesson-chevron">+</span>
 </button>
 <div class="lesson-body">
  ${enhancedReactions?chemistryReactionsIntroduction():enhancedBonds?chemistryBondsIntroduction():enhancedAtoms?chemistryAtomsIntroduction():enhancedMatter?chemistryMatterIntroduction():enhancedCells?cellsLessonIntroduction():enhancedDna?dnaLessonIntroduction():enhancedSelection?selectionLessonIntroduction():enhancedLife?lifeLessonIntroduction():`<div class="teacher-card teacher-simple"><span class="lesson-label">IN SIMPLE WORDS</span><p>${esc(teaching.simple)}</p></div><div class="teacher-card teacher-example"><span class="lesson-label">A REAL-WORLD EXAMPLE</span><p>${esc(teaching.example)}</p></div><div class="teacher-why"><span class="lesson-label">WHY IT WORKS</span><p>${esc(whyItWorks(name,l))}</p></div>`}
  <div class="question"><span class="lesson-label">THINK ABOUT IT</span><p${enhancedReactions?' id="reactions-question"':enhancedMatter?' id="matter-question"':enhancedAtoms?' id="atoms-question"':enhancedBonds?' id="bonds-question"':''}${enhancedDna?' id="dna-question"':enhancedSelection?' id="selection-question"':enhancedLife?' id="life-question"':''}>${esc(l[3])}</p>
   <button class="hint-toggle button secondary" onclick="toggleHint(${i})">💡 Need a hint?</button><p id="hint-${i}" class="lesson-hint" hidden>${esc(l[4])}</p>
   ${enhancedMatter||enhancedAtoms||enhancedBonds||enhancedReactions?'<p>Checking explicitly saves your answer. Keyword feedback cannot reliably judge reasoning or mastery; compare with the example answer.</p>':''}
   ${enhancedCells?`<label for="answer-${i}">Explain why a membrane matters for a cell’s survival.</label><p class="muted">Checking explicitly saves your answer. Feedback matches keywords; it cannot reliably judge your reasoning or mastery. Compare with the example answer.</p>`:''}
   ${enhancedDna?`<p class="muted">Checking explicitly saves your answer. Feedback matches keywords; it cannot reliably judge reasoning or mastery. Compare with the example answer.</p>`:''}
   ${enhancedSelection?`<p class="muted">Checking explicitly saves your answer. Feedback matches keywords; it cannot reliably judge reasoning or mastery. Compare with the example answer.</p>`:''}
   ${enhancedLife?`<p class="muted">Checking explicitly saves your answer. Feedback matches keywords; it cannot reliably judge reasoning or mastery. Compare with the example answer.</p>`:''}
   <textarea class="answer" id="answer-${i}"${enhancedReactions?' aria-labelledby="reactions-question"':enhancedMatter?' aria-labelledby="matter-question"':enhancedAtoms?' aria-labelledby="atoms-question"':enhancedBonds?' aria-labelledby="bonds-question"':''}${enhancedDna?' aria-labelledby="dna-question"':enhancedSelection?' aria-labelledby="selection-question"':enhancedLife?' aria-labelledby="life-question"':''} placeholder="Try explaining your answer in your own words…">${esc((state().answers?.[name]?.[i])||'')}</textarea>
   <div class="lesson-actions"><button onclick="checkAnswer('${name}',${i})">Check my answer</button><button class="button secondary" onclick="showModelAnswer('${name}',${i})">Show example answer</button></div>
   <div id="feedback-${i}" class="feedback" ${enhancedMatter||enhancedAtoms||enhancedBonds||enhancedReactions||enhancedCells||enhancedDna||enhancedSelection||enhancedLife?'role="status"':''} hidden></div>
  </div>
  ${lessonQuizHTML(name,i)}
  <button class="text-action" onclick="toggleExplanation(${i})">Explain this more simply</button>
  <p id="explain-${i}" class="simple-explanation" hidden><strong>In simple words</strong><br>${esc(l[1])}<br><br><strong>Try this example</strong><br>${esc(l[2])}<br><br><strong>Why it matters</strong><br>Connect the idea to something you can observe in everyday life. Then explain it in your own words.</p>
  ${enhancedReactions?chemistryReactionsSummary():enhancedBonds?chemistryBondsSummary():enhancedAtoms?chemistryAtomsSummary():enhancedMatter?chemistryMatterSummary():enhancedCells?cellsLessonSummary():enhancedDna?dnaLessonSummary():enhancedSelection?selectionLessonSummary():enhancedLife?lifeLessonSummary():''}
  <section class="self-check"><span class="lesson-label">CAN I EXPLAIN IT?</span><p>Without looking at the example answer, could you explain the main idea to a friend?</p><div class="lesson-actions"><button class="button secondary" onclick="setSelfCheck('${name}',${i},true)">✓ I can explain it</button><button class="button secondary" onclick="setSelfCheck('${name}',${i},false)">↻ I need another try</button></div><p id="self-check-${i}" class="self-check-status">${esc(state().selfChecks?.[name]?.[i]===true?'✓ You marked this as understood.':state().selfChecks?.[name]?.[i]===false?'Keep practising. You can come back to this later.':'')}</p></section>
  <div class="lesson-actions lesson-finish"><button onclick="completeLesson('${name}',${i})" ${isDone?'disabled':''}>${isDone?'✓ Lesson completed':'Mark lesson complete'}</button></div>
  ${scheduled?`<div id="review-status-${i}" class="review-scheduled"><strong>🧠 Review scheduled</strong><br>Next review: <strong>${formatDate(r.nextReview)}</strong>.<br><span class="muted">This concept will return for review so you can strengthen your memory.</span></div>`:''}
  ${due?`<div class="review-prompt"><strong>🧠 This concept is due for review.</strong><div class="lesson-actions"><button onclick="finishReview('${name}',${i},true)">✓ I remembered it</button><button class="button secondary" onclick="finishReview('${name}',${i},false)">↻ I need more practice</button></div></div>`:''}
 </div>
 </article>`;
}
function ensureQuizStyles(){
 if(document.getElementById('lesson-mcq-styles'))return;
 const style=document.createElement('style');style.id='lesson-mcq-styles';style.textContent=`
 .lesson-mcq{margin:18px 0;padding:16px;border:1px solid var(--garden-line,#e5ddd2);border-radius:16px;background:#fffdf9}
 .mcq-heading{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:14px}
 .mcq-heading h3{margin:4px 0;font-size:1.12rem}
 .mcq-heading p{margin:4px 0;color:#766b60;font-size:.84rem}
 .mcq-score{flex-shrink:0;font-size:.75rem;font-weight:750;color:var(--garden-clay,#a96f4c);background:#f5e8da;border-radius:99px;padding:6px 9px}
 .mcq-question{border:0;border-top:1px solid #eee4d8;padding:13px 0;margin:0;min-width:0}
 .mcq-question legend{font-weight:750;padding:0 0 8px;white-space:normal}
 .mcq-option{display:flex;align-items:flex-start;gap:9px;padding:10px 11px;margin:7px 0;border:1px solid #e8dfd5;border-radius:11px;background:#fff;cursor:pointer;font-size:.9rem;line-height:1.4}
 .mcq-option input{margin-top:4px;accent-color:var(--garden-clay,#b96f47);flex-shrink:0}
 .mcq-option:has(input:checked){border-color:var(--garden-clay,#b96f47);background:#fbf1e7}
 .mcq-feedback{font-size:.82rem;line-height:1.45;padding:10px;border-radius:10px;margin:8px 0 0}
 .mcq-feedback.correct{background:#edf7ef;color:#245c39}
 .mcq-feedback.incorrect{background:#fff0eb;color:#8b3526}
 .mcq-result{font-weight:750;margin-top:12px;font-size:.9rem;color:#5d5146}
 @media(max-width:420px){.lesson-mcq{padding:12px}.mcq-heading{gap:6px}.mcq-heading h3{font-size:1rem}.mcq-score{font-size:.68rem;padding:5px 7px}.mcq-option{font-size:.85rem;padding:9px}}
 `;document.head.appendChild(style);
}
function toggleHint(i){const e=document.getElementById('hint-'+i);if(e)e.hidden=!e.hidden;}
function checkAnswer(name,i){
 const l=SUBJECTS[name].lessons[i],input=document.getElementById('answer-'+i),box=document.getElementById('feedback-'+i);
 const answer=(input.value||'').trim();
 if(!answer){box.hidden=false;box.innerHTML='<strong>✍️ Start with your idea.</strong><br>Write one or two sentences. It does not need to be perfect.';return}
 saveAnswer(name,i,answer);
 const normalized=answer.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
 const words=normalized.split(/\s+/).filter(Boolean);
 const cues={"What does physics study?":["gravity","force","pull","motion","energy"],"Motion and speed":["distance","time","direction","speed","velocity"],"Energy":["energy","kinetic","heat","sound","transfer"],"Gravity and orbits":["gravity","sideways","orbit","forward","fall"],"What is matter made of?":["atom","molecule","particle","substance"],"Atoms and elements":["proton","carbon","oxygen","element","atom"],"Chemical bonds":["atom","electron","bond","stable","energy"],"Chemical reactions":["atom","balance","reactant","product","rearrange"],"What is life?":["energy","grow","respond","living","cell","plant"],"Cells: the basic unit":["membrane","inside","outside","control","cell"],"DNA and heredity":["dna","gene","protein","trait","instruction"],"Evolution by natural selection":["inherited","variation","survive","reproduce","generation","offspring"],"How do historians study the past?":["source","perspective","evidence","compare","bias"],"Prehistory and archaeology":["tool","artifact","evidence","past","archaeologist"],"Agriculture and civilization":["food","farm","surplus","settlement","society"],"Empires and exchange":["trade","route","ideas","goods","invention","exchange"],"What is economics?":["alternative","choice","give up","opportunity cost","value","limited"],"Supply and demand":["supply","demand","shortage","price","buyers"],"Incentives":["reward","cost","behavior","choice","consequence"],"Trade and specialization":["specialize","comparative advantage","trade","exchange","produce"],"What is a business?":["customer","problem","need","value","offer","useful"],"Revenue, costs and profit":["revenue","cost","profit","sales","expense"],"Understanding customers":["customer","need","research","buy","feedback"],"Testing a business idea":["test","evidence","customer","risk","feedback"],"What is technology?":["tool","solve","problem","process","useful"],"How does the internet work?":["server","request","data","network","browser"],"What is an algorithm?":["steps","order","input","output","result"],"What is artificial intelligence?":["pattern","training","prediction","generate","verify"],"What is philosophy?":["reason","concept","assumption","principle","question"],"How do we know?":["evidence","justified","belief","source","reason"],"Ethics and choices":["principle","consequence","fairness","choice","people"],"Arguments and reasoning":["reason","evidence","conclusion","argument","opinion"]};
 const aliases={"customer":["customer","customers","buyer","buyers"],"offer":["offer","offering","product","service"],"problem":["problem","problems","solve","solves"],"need":["need","needs","require","requires"],"value":["value","useful","helpful"],"trade":["trade","trading","traders","exchange"],"idea":["idea","ideas","knowledge"],"tool":["tool","tools","technology"],"steps":["step","steps","order","sequence"],"evidence":["evidence","source","sources","proof"],"atom":["atom","atoms"],"cell":["cell","cells"],"energy":["energy","energies"],"cost":["cost","costs","expense","expenses"],"revenue":["revenue","sales","income"],"profit":["profit","profits","remaining"],"inherited":["inherited","inherit","heredity"],"reproduce":["reproduce","offspring","generation"],"reason":["reason","reasons","because","explain"],"pattern":["pattern","patterns"],"price":["price","prices","cost"],"supply":["supply","available","availability"],"demand":["demand","buyers","want"],"motion":["motion","move","movement"],"gravity":["gravity","gravitational"],"force":["force","forces","push","pull"]};
 const matched=(cues[l[0]]||[]).filter(term=>(aliases[term]||[term]).some(alias=>normalized.includes(alias)));
 const help=lessonHelp(l[0]);
 let heading='',feedback='';
 if(l[0]==="What is a business?"){
  const customer=matched.includes("customer"),problem=matched.includes("problem"),offer=matched.includes("offer")||matched.includes("value");
  if(customer&&(problem||matched.includes("need"))&&offer){
   heading='✅ Correct — you understood the main idea.';
   feedback='You connected the customer’s problem with a useful offer. To deepen your answer, add a specific example of a need the product meets.';
  }else if(customer||problem||matched.includes("need")||matched.includes("useful")||matched.includes("offer")){
   heading='🌿 You are on the right track.';
   feedback='You identified part of the idea. Make the connection clearer: what does the customer need, and how does the product or service help?';
  }else{
   heading='🌱 Let’s start with the customer.';
   feedback='What is the customer trying to do? Name one useful product or service that could help them.';
  }
 }else if(words.length<5){
  heading='🌱 Good start.';
  feedback='Add one detail about how or why it happens. A concrete example can help make your thinking clearer.';
 }else if(matched.length>=3){
  heading='✅ You included several key ideas.';
  feedback='You mentioned '+esc(matched.slice(0,3).join(', '))+'. Your next step is to connect those ideas with a clear cause-and-effect explanation.';
 }else if(matched.length>=1){
  heading='🌿 You have part of the idea.';
  feedback='You mentioned '+esc(matched.slice(0,2).join(' and '))+'. To strengthen your answer, explain the main reason behind it or give an example.';
 }else{
  heading='🌱 Let’s try a different angle.';
  feedback='Answer the question in your first sentence, then add a reason or everyday example. Tap “Need a hint?” if you want a clue.';
 }
 box.hidden=false;
 box.innerHTML='<strong>'+heading+'</strong><p>'+feedback+'</p><p class="muted">You can compare your answer with the example above using <strong>Show example answer</strong>. Your wording does not need to be identical.</p>';
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
 el.scrollIntoView({behavior:(document.body?.dataset?.subject==='Biology'||document.body?.dataset?.subject==='Chemistry'&&(i===0||i===1||i===2||i===3))&&typeof window!=='undefined'&&window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'start'});
}
function prepareBiologyOverviewFocus(){
 if(!/^\/subjects\/biology\/(?:index\.html)?$/.test(location.pathname))return;
 const app=document.getElementById('app');if(!app||app.dataset.biologyFocusReady)return;
 app.dataset.biologyFocusReady='true';let pointer=null;
 const clearPending=()=>{pointer=null;syncBiologyLessonHash.pointerReturn=null;};
 const clearFocus=()=>{clearPending();document.getElementById('biology-dashboard-title')?.removeAttribute('data-biology-pointer-return');};
 const returnLink=target=>target?.closest?.('a[href="#subject-overview"],a[href="#lessons"]');
 app.addEventListener('pointerdown',event=>{
  clearPending();const link=returnLink(event.target);
  if(event.isTrusted&&event.isPrimary&&event.button===0){
   const heading=event.target?.closest?.('#biology-dashboard-title');
   heading?.setAttribute('data-biology-pointer-return','');
   if(link)pointer={link,time:event.timeStamp};
  }
 });
 app.addEventListener('pointercancel',clearPending);
 app.addEventListener('keydown',clearFocus,true);
 app.addEventListener('focusout',event=>{if(event.target.id==='biology-dashboard-title')clearFocus();});
 app.addEventListener('click',event=>{
  const link=returnLink(event.target),gesture=pointer;pointer=null;syncBiologyLessonHash.pointerReturn=null;
  if(event.isTrusted&&!event.defaultPrevented&&!event.ctrlKey&&!event.metaKey&&!event.altKey&&!event.shiftKey&&gesture&&link&&gesture.link===link&&event.timeStamp-gesture.time<1500&&event.timeStamp>=gesture.time){
   syncBiologyLessonHash.pointerReturn={hash:link.getAttribute('href'),time:Date.now()};
  }
 });
}
function syncBiologyLessonHash(){
 if(!/^\/subjects\/biology\/(?:index\.html)?$/.test(location.pathname))return;
 // Reveal quiet tools for legacy/direct anchors without replacing their input nodes.
 if(['#note','#quiz','#quizAnswer','#subject-reflection-title','#biology-backup-controls','#biology-image-credits'].includes(location.hash)){
  revealBiologyDashboardTool(location.hash.slice(1));
  return;
 }
 const pointerReturn=syncBiologyLessonHash.pointerReturn;syncBiologyLessonHash.pointerReturn=null;
 // Overview navigation hides panels in place, retaining all unfinished DOM state.
 if(['','#subject-overview','#lessons'].includes(location.hash)){
  const active=Array.from(document.querySelectorAll('#lessons > .lesson.active'));
  active.forEach(el=>{el.classList.remove('active');el.querySelector('.lesson-summary')?.setAttribute('aria-expanded','false');const chevron=el.querySelector('.lesson-chevron');if(chevron)chevron.textContent='+';});
  if(active.length){const overview=document.getElementById('subject-overview'),heading=overview?.querySelector('h1');heading?.toggleAttribute?.('data-biology-pointer-return',!!pointerReturn&&pointerReturn.hash===location.hash&&Date.now()-pointerReturn.time<1500);heading?.setAttribute('tabindex','-1');heading?.focus({preventScroll:true});overview?.scrollIntoView({behavior:'auto',block:'start'});}
  return;
 }
 const match=location.hash.match(/^#lesson-(\d+)$/);if(!match)return;
 const lesson=resolveSubjectLesson('Biology',Number(match[1]));if(!lesson)return;
 const target=document.getElementById('lesson-'+lesson.legacyIndex);if(!target)return;
 if(!target.classList.contains('active'))openLesson(lesson.legacyIndex);
 target.querySelector('.lesson-summary')?.focus({preventScroll:true});
 if(new URLSearchParams(location.search).get('review')==='quiz'){
  const quiz=document.getElementById('mcq-'+lesson.legacyIndex);if(quiz)quiz.scrollIntoView({behavior:document.body?.dataset?.subject==='Biology'&&typeof window!=='undefined'&&window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'start'});
 }
}
function syncChemistryLessonHash(){
 if(!/^\/subjects\/chemistry\/(?:index\.html)?$/.test(location.pathname))return;
 const match=location.hash.match(/^#lesson-(\d+)$/),entry=match&&resolveSubjectLesson('Chemistry',Number(match[1]));if(!entry)return;
 const target=document.getElementById('lesson-'+entry.legacyIndex);if(target&&!target.classList.contains('active'))openLesson(entry.legacyIndex);
 if(new URLSearchParams(location.search).get('review')==='quiz')document.getElementById('mcq-'+entry.legacyIndex)?.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'start'});
}
function showModelAnswer(name,i){const l=SUBJECTS[name].lessons[i],box=document.getElementById('feedback-'+i);box.hidden=false;box.innerHTML='<strong>Example answer:</strong> '+esc(lessonHelp(l[0]).answer)+'<br><br><strong>Why it works:</strong> '+esc(whyItWorks(name,l))}
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
 const previous=s.review[key];
 s.review[key]={...(previous&&typeof previous==='object'&&!Array.isArray(previous)?previous:{}),subject:name,index:i,learnedAt:now.toISOString(),nextReview:addDays(now,1).toISOString(),interval:1,stage:0};
 s.activity=s.activity||{};
 s.activity[dateKey(now)]=true;
 saveState(s);
 renderSubject(name,true);
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
function showAnswer(name){const d=SUBJECTS[name],q=d.lessons[d.lessons.length-1],box=document.getElementById('model');box.hidden=false;box.innerHTML='<strong>Example answer:</strong> '+esc(lessonHelp(q[0]).answer)+'<p><strong>Why this makes sense:</strong> '+esc(q[1]+' '+q[2])+'</p><p class="muted">Try explaining the idea in your own words before marking the quiz complete.</p>'}
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
 const st=totalStats(),pct=Math.round(st.lessons/st.total*100),s=state(),reviewDue=getDueReviews().length,streak=getStreak(),next=getNextLesson();
 const exploredSubjects=Object.keys(SUBJECTS).filter(name=>(s.completed?.[name]||[]).length>0).length;
 const projectsInProgress=Object.keys(PROJECTS).filter(id=>projectProgress(id)>0&&projectProgress(id)<100).length;
 const projectIds=['plant-evolution','human-evolution'].filter(id=>PROJECTS[id]);
 document.title='My Learning OS';
 if(!document.getElementById('calm-dashboard-styles')){
  const style=document.createElement('style');style.id='calm-dashboard-styles';style.textContent=`
   .topbar{margin-bottom:8px}
   .home-welcome{margin:0 0 9px;padding:0 1px}
   .home-welcome>small{font-size:.65rem;letter-spacing:.1em;font-weight:800;color:var(--garden-clay,#a96f4c)}
   .home-welcome h1{font-family:Georgia,"Times New Roman",serif;font-size:clamp(1.7rem,4.8vw,2.05rem);font-weight:400;line-height:1.1;margin:3px 0}
   .home-welcome p{margin:3px 0 0;color:#776d62;font-size:.88rem}
   .home-overview{margin:9px 0 20px;padding:13px;background:#fffdf9;border:1px solid var(--garden-line,#e7dfd4);border-radius:16px}
   .home-overview-heading{font-size:.82rem;font-weight:800;color:var(--garden-clay,#a96f4c);margin:0 0 10px}
   .home-overview-main{display:grid;grid-template-columns:88px minmax(0,1fr);gap:12px;align-items:center}
   .home-progress-ring{width:82px;height:82px;border-radius:50%;display:grid;place-items:center;position:relative;background:conic-gradient(var(--garden-clay,#bd704d) var(--progress),#eee6da 0)}
   .home-progress-ring:before{content:"";position:absolute;inset:7px;border-radius:50%;background:#fffdf9}
   .home-progress-ring strong{position:relative;font-family:Georgia,serif;font-size:1.25rem;font-weight:400;color:#302a25}
   .home-overview-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
   .home-overview-stat{min-width:0;padding:8px 9px;border:1px solid var(--garden-line,#e7dfd4);border-radius:11px;background:#fff}
   .home-overview-stat strong{display:block;font-size:1rem;line-height:1.2;color:#302a25}
   .home-overview-stat span{display:block;margin-top:3px;font-size:.67rem;line-height:1.25;color:#776d62}
   .home-overview-foot{display:flex;justify-content:space-between;gap:8px;margin-top:10px;padding-top:9px;border-top:1px solid #eee6da;color:#776d62;font-size:.7rem}
   .home-overview-foot a{color:var(--garden-clay,#a96f4c);font-weight:750;text-decoration:none}
   .home-section{margin:22px 0 26px}
   .home-section-heading{margin-bottom:10px}
   .home-section-heading h2{font-size:1.35rem}
   .home-subject-grid{gap:9px}
   .home-subject,.home-project{box-shadow:none}
   .home-weekly{display:none!important}
   @media(max-width:420px){.home-overview{padding:11px}.home-overview-main{grid-template-columns:74px minmax(0,1fr);gap:9px}.home-progress-ring{width:70px;height:70px}.home-progress-ring:before{inset:6px}.home-progress-ring strong{font-size:1.1rem}.home-overview-stat{padding:7px}.home-overview-stat strong{font-size:.92rem}.home-overview-stat span{font-size:.62rem}.home-overview-foot{font-size:.66rem}}
  `;document.head.appendChild(style);
 }
 document.getElementById('app').innerHTML=nav()+`
 <section class="home-welcome">
  <small>MY LEARNING SPACE</small>
  <h1>Welcome back.</h1>
  <p>One small step at a time.</p>
 </section>
 ${next?`<a class="continue-card" href="/subjects/${next.name.toLowerCase()}/#lesson-${next.i}" aria-label="Continue ${next.name}, lesson ${next.i+1}: ${esc(next.lesson[0])}">
  <span class="continue-icon">${next.icon}</span>
  <span class="continue-copy">
   <small>YOUR NEXT STEP</small>
   <strong>Continue learning</strong>
   <span class="continue-lesson">${next.name} · Lesson ${next.i+1}: ${esc(next.lesson[0])}</span>
   <span class="continue-meta">Lesson ${next.i+1} of ${SUBJECTS[next.name].lessons.length} · ${subjectProgress(next.name)}% subject progress</span>
   <span class="continue-progress" aria-hidden="true"><span style="width:${subjectProgress(next.name)}%"></span></span>
  </span>
  <b>Continue <span aria-hidden="true">→</span></b>
 </a>`:'<section class="continue-card all-done"><span class="continue-icon">🎉</span><span class="continue-copy"><small>GREAT WORK</small><strong>All lessons completed</strong><span>Choose a subject to revisit or explore a project.</span></span><b>Explore →</b></section>'}
 <section class="home-overview" aria-label="Learning progress overview">
  <div class="home-overview-heading">Your progress at a glance</div>
  <div class="home-overview-main">
   <div class="home-progress-ring" role="img" aria-label="${pct}% overall lesson progress" style="--progress:${pct}%"><strong>${pct}%</strong></div>
   <div class="home-overview-stats">
    <div class="home-overview-stat"><strong>${st.lessons}/${st.total}</strong><span>Lessons completed</span></div>
    <div class="home-overview-stat"><strong>${exploredSubjects}/${Object.keys(SUBJECTS).length}</strong><span>Subjects explored</span></div>
    <div class="home-overview-stat"><strong>${projectsInProgress}</strong><span>Projects in progress</span></div>
    <a class="home-overview-stat" href="/review.html" style="text-decoration:none"><strong>${reviewDue}</strong><span>Lessons to review →</span></a>
   </div>
  </div>
  <div class="home-overview-foot"><span>🔥 ${streak} day learning streak</span><a href="/review.html">Open review →</a></div>
 </section>
 <section class="home-section" id="learning-areas">
  <div class="home-section-heading"><div><small class="muted">CHOOSE WHAT TO EXPLORE</small><h2>Learning areas</h2></div></div>
  <div class="subject-filter-list" role="group" aria-label="Filter learning areas">
   <button class="subject-filter is-active" type="button" data-subject-filter="All" aria-pressed="true" aria-controls="learning-subject-grid">All</button>
   <button class="subject-filter" type="button" data-subject-filter="Science" aria-pressed="false" aria-controls="learning-subject-grid">Science</button>
   <button class="subject-filter" type="button" data-subject-filter="Humanities" aria-pressed="false" aria-controls="learning-subject-grid">Humanities</button>
   <button class="subject-filter" type="button" data-subject-filter="Technology" aria-pressed="false" aria-controls="learning-subject-grid">Technology</button>
   <button class="subject-filter" type="button" data-subject-filter="Business & Economics" aria-pressed="false" aria-controls="learning-subject-grid">Business &amp; Economics</button>
  </div>
  <p class="subject-filter-status" id="learning-filter-status" aria-live="polite">Showing all ${Object.keys(SUBJECTS).length} subjects</p>
  <div class="home-subject-grid" id="learning-subject-grid">${Object.entries(SUBJECTS).map(([n,d])=>{const category=['Physics','Chemistry','Biology'].includes(n)?'Science':['History','Philosophy'].includes(n)?'Humanities':['Economics','Business'].includes(n)?'Business & Economics':'Technology';return `<a class="home-subject" data-subject-category="${category}" href="/subjects/${n.toLowerCase()}/" onclick="sessionStorage.setItem('myLearningOS.homeScroll',String(window.scrollY))"><span>${d.icon}</span><strong>${n}</strong><small>${subjectProgress(n)}% complete</small><div class="bar"><div style="width:${subjectProgress(n)}%"></div></div></a>`}).join('')}</div>
 </section>
 <section class="home-section">
  <div class="home-section-heading"><div><small class="muted">LEARN BY DOING</small><h2>My projects</h2></div><a href="/projects.html">View all →</a></div>
  <div class="home-projects">${projectIds.map(id=>{const d=PROJECTS[id],p=projectState(id),done=(p.completed||[]).length,progress=projectProgress(id),featured=id==='plant-evolution'||id==='human-evolution';return `<a class="home-project${featured?' home-project-featured':''}" href="/projects.html?project=${id}">${featured?`<span class="home-project-cover-frame"><img class="home-project-cover" src="/assets/projects/${id}-cover.png" alt="" aria-hidden="true" width="1632" height="1024" loading="lazy" decoding="async"></span>`:`<span class="home-project-icon">${d.icon}</span>`}<span class="home-project-info"><strong>${d.title}</strong><small>${done}/${d.steps.length} steps · ${progress}%</small><span class="home-project-bar" role="progressbar" aria-label="${d.title} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></span></span>${featured?'':'<b>›'}</a>`}).join('')}</div>
 </section>
 <details class="home-details" id="curiosity-lab"><summary>✨ Curiosity Lab</summary><div class="curiosity-panel"><p class="muted">Discover a question, follow your own thinking, and save what you learn.</p><section class="curiosity-card daily-curiosity"><div class="curiosity-kicker">QUESTION OF THE DAY · <span id="dailyQuestionDate"></span></div><div class="curiosity-meta" id="dailyQuestionMeta"></div><div class="curiosity-question" id="dailyQuestionBox">Loading a question…</div><div class="curiosity-clue" id="dailyQuestionClue"></div><div class="curiosity-actions"><button class="button secondary" type="button" onclick="showDailyCuriosityClue()">💡 Give me a clue</button><a id="dailyQuestionLesson" class="button secondary" href="#">Explore topic →</a></div><label class="reflection-label" for="dailyReflection">Your thoughts</label><textarea class="note reflection-input" id="dailyReflection" placeholder="What do you think? What would you like to find out?"></textarea><button class="button" type="button" onclick="openCuriosityNoteDraft('daily')">Save as note</button></section><section class="curiosity-card exploration-curiosity"><div class="curiosity-kicker">EXPLORE ANOTHER QUESTION</div><div class="curiosity-meta" id="curiosityMeta"></div><div class="curiosity-question" id="questionBox">Choose a question to begin.</div><div class="curiosity-clue" id="curiosityClue"></div><div class="curiosity-actions"><button class="button secondary" type="button" onclick="showCuriosityClue()">💡 Give me a clue</button><button class="button secondary" type="button" onclick="newQuestion()">↻ Explore another</button><a id="curiosityLesson" class="button secondary" href="#">Explore topic →</a></div><label class="reflection-label" for="exploreReflection">Your thoughts</label><textarea class="note reflection-input" id="exploreReflection" placeholder="What stands out to you about this question?"></textarea><button class="button" type="button" onclick="openCuriosityNoteDraft('explore')">Save as note</button></section><div id="curiosityNoteDraft" class="note-draft-card" hidden></div><p class="notes-return"><a href="/notes.html">Visit your Notes library →</a></p></div></details>
 <details class="home-details" id="home-notes"><summary>📝 My notes</summary><div class="home-notes"><p class="muted">Your original Home note stays here, unchanged. Create and organize structured notes in your library.</p><textarea class="note" id="homeNote" placeholder="An idea I want to remember…">${esc(state().notes.home||'')}</textarea><div class="lesson-actions"><button onclick="saveHomeNote()">Save Home note</button><a class="button secondary" href="/notes.html">Open Notes library</a></div><p class="notes-return"><a href="#learning-areas">Browse learning areas →</a><span aria-hidden="true"> · </span><a href="/review.html">Review saved learning →</a></p></div></details>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
 const savedHomeScroll=sessionStorage.getItem('myLearningOS.homeScroll');if(savedHomeScroll!==null){sessionStorage.removeItem('myLearningOS.homeScroll');requestAnimationFrame(()=>window.scrollTo(0,Number(savedHomeScroll)||0));}
 document.querySelectorAll('[data-subject-filter]').forEach(button=>button.addEventListener('click',()=>applySubjectFilter(button.dataset.subjectFilter)));
 renderDailyQuestion();newQuestion();
}
function applySubjectFilter(category){
 const cards=[...document.querySelectorAll('#learning-subject-grid .home-subject')];
 const filters=[...document.querySelectorAll('[data-subject-filter]')];
 if(!cards.length||!filters.some(button=>button.dataset.subjectFilter===category))return;
 let visible=0;
 cards.forEach(card=>{const show=category==='All'||card.dataset.subjectCategory===category;card.hidden=!show;if(show)visible++;});
 filters.forEach(button=>{const active=button.dataset.subjectFilter===category;button.classList.toggle('is-active',active);button.setAttribute('aria-pressed',String(active));});
 const status=document.getElementById('learning-filter-status');
 if(status)status.textContent=category==='All'?`Showing all ${visible} subjects`:`Showing ${visible} ${category} ${visible===1?'subject':'subjects'}`;
}
function questionCategory(item){return item.category||item.subject}
function questionTopic(item){return item.topic||item.subject}
function localDayKey(date=new Date()){return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0')}
function dailyQuestionForDate(date=new Date()){
 const dayNumber=Math.floor(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())/86400000);
 return qs[((dayNumber%qs.length)+qs.length)%qs.length];
}
function setQuestionView(item,ids){
 const meta=document.getElementById(ids.meta),q=document.getElementById(ids.question),clue=document.getElementById(ids.clue),link=document.getElementById(ids.link);
 if(!q)return;
 if(meta)meta.textContent=item.icon+' '+(item.topic||item.subject)+' · '+(item.category||item.subject);
 q.textContent=item.q;
 if(clue){clue.textContent='';clue.classList.remove('visible');}
 if(link){if(typeof item.lesson==='number'){link.href='/subjects/'+item.subject.toLowerCase()+'/#lesson-'+item.lesson;link.textContent='Explore topic →';link.hidden=false;}else{link.href='/search.html';link.textContent='Search this topic →';}}
}
let dailyQuestionItem=null;
function renderDailyQuestion(){
 const item=dailyQuestionForDate(),date=document.getElementById('dailyQuestionDate');
 dailyQuestionItem=item;
 if(date)date.textContent=new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'});
 setQuestionView(item,{meta:'dailyQuestionMeta',question:'dailyQuestionBox',clue:'dailyQuestionClue',link:'dailyQuestionLesson'});
 scheduleDailyQuestionRefresh();
}
function scheduleDailyQuestionRefresh(){
 if(typeof window==='undefined'||!window.setTimeout)return;
 const now=new Date(),tomorrow=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
 window.setTimeout(()=>{const reflection=document.getElementById('dailyReflection'),previousText=reflection?.value.trim()||'',previousItem=dailyQuestionItem;renderDailyQuestion();if(previousText&&previousItem){openCuriosityNoteDraftFor(previousItem,previousText);reflection.value='';}},tomorrow-now+100);
}
function newQuestion(){
 let item=qs[Math.floor(Math.random()*qs.length)];
 const meta=document.getElementById('curiosityMeta'),q=document.getElementById('questionBox'),clue=document.getElementById('curiosityClue'),link=document.getElementById('curiosityLesson');
 if(!q)return;
 const dailyQuestion=document.getElementById('dailyQuestionBox')?.textContent,currentQuestion=q.textContent;
 if(item.q===currentQuestion||item.q===dailyQuestion){const start=qs.indexOf(item);for(let offset=1;offset<=qs.length;offset++){const next=qs[(start+offset)%qs.length];if(next.q!==currentQuestion&&next.q!==dailyQuestion){item=next;break;}}}
 if(meta)meta.textContent=item.icon+' '+(item.topic||item.subject)+' · '+(item.category||item.subject);
 q.textContent=item.q;
 if(clue){clue.textContent='';clue.classList.remove('visible');}
 if(link){if(typeof item.lesson==='number'){link.href='/subjects/'+item.subject.toLowerCase()+'/#lesson-'+item.lesson;link.textContent='Explore topic →';link.hidden=false;}else{link.href='/search.html';link.textContent='Search this topic →';}}
}
function captureIdea(){
 const isSubject=Boolean(document.body?.dataset?.subject),details=isSubject?null:document.querySelector('#home-notes');
 if(details)details.open=true;
 const note=document.getElementById(isSubject?'note':'homeNote');
 if(note){note.focus();note.scrollIntoView?.({behavior:'smooth',block:'center'});}
}
function showCuriosityClue(){
 const clue=document.getElementById('curiosityClue');
 if(!clue)return;
 const q=document.getElementById('questionBox'),item=qs.find(x=>x.q===q?.textContent);
 if(item){clue.textContent='💡 '+item.clue;clue.classList.add('visible');}
}
function showDailyCuriosityClue(){const clue=document.getElementById('dailyQuestionClue'),item=dailyQuestionForDate();if(clue){clue.textContent='💡 '+item.clue;clue.classList.add('visible');}}
let curiosityNoteDraft=null;
function openCuriosityNoteDraft(which){
 const daily=which==='daily',item=daily?dailyQuestionForDate():qs.find(x=>x.q===document.getElementById('questionBox')?.textContent);
 if(!item)return;
 const reflection=document.getElementById(daily?'dailyReflection':'exploreReflection')?.value.trim()||'';
 openCuriosityNoteDraftFor(item,reflection);
}
function openCuriosityNoteDraftFor(item,reflection=''){
 if(!item)return;
 curiosityNoteDraft={title:'A question about '+questionTopic(item),category:questionCategory(item),topic:questionTopic(item),question:item.q,description:'My reflection on '+questionTopic(item),content:'Question: '+item.q+'\n\nMy reflection:\n'+reflection,source:'curiosity'};
 const host=document.getElementById('curiosityNoteDraft');if(!host)return;
 host.hidden=false;host.innerHTML=`<h3>Shape your note</h3><p class="muted">Your draft is not saved yet. Review it, then choose Save note.</p><label>Title<input id="curiosityDraftTitle" value="${esc(curiosityNoteDraft.title)}"></label><label>Category<input id="curiosityDraftCategory" value="${esc(curiosityNoteDraft.category)}"></label><label>Short description<input id="curiosityDraftDescription" value="${esc(curiosityNoteDraft.description)}"></label><label>Your note<textarea id="curiosityDraftContent" class="note">${esc(curiosityNoteDraft.content)}</textarea></label><div class="lesson-actions"><button type="button" onclick="saveCuriosityNoteDraft()">Save note</button><button class="button secondary" type="button" onclick="cancelCuriosityNoteDraft()">Cancel</button></div>`;
 host.scrollIntoView?.({behavior:'smooth',block:'center'});
}
function saveCuriosityNoteDraft(){
 if(!curiosityNoteDraft)return;
 const s=state();s.noteLibrary=Array.isArray(s.noteLibrary)?s.noteLibrary:[];
 const note={...curiosityNoteDraft,id:createNoteId(),title:document.getElementById('curiosityDraftTitle').value.trim()||'Untitled note',category:document.getElementById('curiosityDraftCategory').value.trim()||'Uncategorized',description:document.getElementById('curiosityDraftDescription').value.trim(),content:document.getElementById('curiosityDraftContent').value,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),archivedAt:null};
 s.noteLibrary.push(note);saveState(s);curiosityNoteDraft=null;const host=document.getElementById('curiosityNoteDraft');if(host){host.hidden=true;host.innerHTML='<p class="saved-note-message">Saved to My Notes. <a href="/notes.html">Open library →</a></p>';host.hidden=false;}
}
function cancelCuriosityNoteDraft(){curiosityNoteDraft=null;const host=document.getElementById('curiosityNoteDraft');if(host){host.hidden=true;host.innerHTML='';}}
function createNoteId(){return 'note-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,9)}
function saveHomeNote(){const s=state();s.notes.home=document.getElementById('homeNote').value;saveState(s)}
let noteEditorDraft=null;
function legacyNoteEntries(s=state()){
 return Object.entries(s.notes||{}).filter(([,content])=>typeof content==='string'&&content.trim()).map(([key,content])=>({id:'legacy-'+key,title:key==='home'?'Home note':key+' note',category:key==='home'?'Home':'Subject · '+key,description:content.trim().replace(/\s+/g,' ').slice(0,150),content,legacyKey:key}));
}
function renderNotes(){
 const s=state(),notes=Array.isArray(s.noteLibrary)?s.noteLibrary:[],legacy=legacyNoteEntries(s),categories=[...new Set([...notes.map(n=>n.category||'Uncategorized'),...legacy.map(n=>n.category)])].sort();
 document.title='My Notes | My Learning OS';
 const editor=noteEditorDraft?`<section class="note-editor panel"><h2>${noteEditorDraft.id?'Edit note':'Create a note'}</h2><label>Title<input id="noteTitle" maxlength="120" value="${esc(noteEditorDraft.title||'')}"></label><label>Category<input id="noteCategory" maxlength="80" value="${esc(noteEditorDraft.category||'')}" placeholder="For example: Biology"></label><label>Short description<input id="noteDescription" maxlength="240" value="${esc(noteEditorDraft.description||'')}" placeholder="A short reminder of what this note contains"></label><label>Note content<textarea id="noteContent" class="note">${esc(noteEditorDraft.content||'')}</textarea></label><div class="lesson-actions"><button type="button" onclick="saveNoteEditor()">Save note</button><button class="button secondary" type="button" onclick="cancelNoteEditor()">Cancel</button></div></section>`:'';
 const cards=notes.map(n=>`<article class="library-note-card" data-note-card data-category="${esc(n.category||'Uncategorized')}" data-search="${esc([n.title,n.category,n.description,n.content,n.topic,n.question].filter(Boolean).join(' ').toLowerCase())}"><div class="library-note-heading"><div><span class="note-category">${esc(n.category||'Uncategorized')}${n.archivedAt?' · Archived':''}</span><h3>${esc(n.title||'Untitled note')}</h3></div><span class="note-date">${esc((n.updatedAt||n.createdAt||'').slice(0,10))}</span></div><p class="note-description">${esc(n.description||'')}</p>${n.topic?`<p class="note-source">From Curiosity Lab · ${esc(n.topic)}</p>`:''}<details class="note-content"><summary>Revisit this note</summary><pre>${esc(n.content||'')}</pre>${n.question?`<p><strong>Question:</strong> ${esc(n.question)}</p>`:''}</details><div class="lesson-actions"><button class="button secondary" type="button" onclick="editLibraryNote('${esc(n.id)}')">Edit</button>${n.archivedAt?`<button class="button secondary" type="button" onclick="restoreLibraryNote('${esc(n.id)}')">Restore</button>`:`<button class="button secondary" type="button" onclick="archiveLibraryNote('${esc(n.id)}')">Archive</button>`}</div></article>`).join('');
 const virtual=legacy.map(n=>`<article class="library-note-card legacy-note-card" data-note-card data-category="${esc(n.category)}" data-search="${esc([n.title,n.category,n.description,n.content].join(' ').toLowerCase())}"><div class="library-note-heading"><div><span class="note-category">Existing note · read only</span><h3>${esc(n.title)}</h3></div></div><p class="note-description">${esc(n.description)}${n.content.trim().length>150?'…':''}</p><details class="note-content"><summary>View original note</summary><pre>${esc(n.content)}</pre></details><div class="lesson-actions"><button class="button secondary" type="button" onclick="copyLegacyNote('${esc(n.legacyKey)}')">Copy into library</button></div></article>`).join('');
 document.getElementById('app').innerHTML=nav()+`<main class="notes-page"><header class="notes-hero"><small>YOUR PERSONAL KNOWLEDGE LIBRARY</small><h1>My Notes</h1><p>Capture discoveries, organize your thinking, and return to ideas when you need them.</p></header><div class="notes-toolbar"><label class="notes-search-label">Search notes<input id="noteSearch" type="search" placeholder="Search titles, topics, or content" oninput="filterNotes()"></label><label>Category<select id="noteCategoryFilter" onchange="filterNotes()"><option value="All">All categories</option>${categories.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('')}</select></label><label class="archive-toggle"><input id="showArchivedNotes" type="checkbox" onchange="filterNotes()"> Show archived</label><button type="button" onclick="startNewLibraryNote()">＋ New note</button></div>${editor}<section class="notes-library-section"><div class="notes-section-heading"><div><h2>Saved discoveries</h2><p class="muted">Your structured notes are editable and searchable.</p></div></div><div class="notes-library-grid" id="structuredNotes">${cards||'<p class="empty notes-empty">No structured notes yet. Create one, or save a reflection from Curiosity Lab.</p>'}</div></section><section class="notes-library-section"><div class="notes-section-heading"><div><h2>Existing notes</h2><p class="muted">These original Home and subject notes are shown as read-only copies. Copy one to edit it here.</p></div></div><div class="notes-library-grid" id="legacyNotes">${virtual||'<p class="empty notes-empty">There are no existing Home or subject notes yet.</p>'}</div></section></main><footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
 filterNotes();
}
function filterNotes(){
 const query=(document.getElementById('noteSearch')?.value||'').trim().toLowerCase(),category=document.getElementById('noteCategoryFilter')?.value||'All',showArchived=Boolean(document.getElementById('showArchivedNotes')?.checked);
 document.querySelectorAll('[data-note-card]').forEach(card=>{const isArchived=card.querySelector('.note-category')?.textContent.includes('Archived')||false;const show=(category==='All'||card.dataset.category===category)&&(!query||(card.dataset.search||'').includes(query))&&(card.classList.contains('legacy-note-card')||showArchived||!isArchived);card.hidden=!show;});
}
function startNewLibraryNote(){noteEditorDraft={title:'',category:'',description:'',content:''};renderNotes();document.getElementById('noteTitle')?.focus();}
function editLibraryNote(id){const n=(state().noteLibrary||[]).find(item=>item.id===id);if(!n)return;noteEditorDraft={...n};renderNotes();document.getElementById('noteTitle')?.focus();}
function cancelNoteEditor(){noteEditorDraft=null;renderNotes();}
function saveNoteEditor(){
 if(!noteEditorDraft)return;const title=document.getElementById('noteTitle').value.trim(),category=document.getElementById('noteCategory').value.trim(),description=document.getElementById('noteDescription').value.trim(),content=document.getElementById('noteContent').value;
 if(!title||!content.trim()){alert('Add a title and some note content before saving.');return;}
 const s=state();s.noteLibrary=Array.isArray(s.noteLibrary)?s.noteLibrary:[];const now=new Date().toISOString();
 if(noteEditorDraft.id){const index=s.noteLibrary.findIndex(n=>n.id===noteEditorDraft.id);if(index>=0)s.noteLibrary[index]={...s.noteLibrary[index],title,category:category||'Uncategorized',description,content,updatedAt:now};}
 else s.noteLibrary.push({id:createNoteId(),title,category:category||'Uncategorized',description,content,createdAt:now,updatedAt:now,archivedAt:null});
 saveState(s);noteEditorDraft=null;renderNotes();
}
function archiveLibraryNote(id){const s=state(),n=(s.noteLibrary||[]).find(item=>item.id===id);if(!n)return;n.archivedAt=new Date().toISOString();n.updatedAt=n.archivedAt;saveState(s);renderNotes();}
function restoreLibraryNote(id){const s=state(),n=(s.noteLibrary||[]).find(item=>item.id===id);if(!n)return;n.archivedAt=null;n.updatedAt=new Date().toISOString();saveState(s);renderNotes();document.getElementById('showArchivedNotes').checked=true;filterNotes();}
function copyLegacyNote(key){const s=state(),content=s.notes?.[key];if(typeof content!=='string'||!content.trim())return;s.noteLibrary=Array.isArray(s.noteLibrary)?s.noteLibrary:[];const title=key==='home'?'Home note':key+' note',now=new Date().toISOString();s.noteLibrary.push({id:createNoteId(),title,category:key==='home'?'Home':'Subject · '+key,description:content.trim().replace(/\s+/g,' ').slice(0,150),content,createdAt:now,updatedAt:now,archivedAt:null,source:'legacy-copy',legacyKey:key});saveState(s);renderNotes();}
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
 saveState(s);renderProjectDetail(id,i,true);
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
 document.getElementById('app').innerHTML=nav()+`<section class="hero"><a class="back" href="/" onclick="saveProjectsScroll()">← Back to Home</a><h1>🔬 My Projects</h1><p class="muted">Long-term investigations where you connect ideas across subjects.</p></section>
 <div class="project-grid">${ids.map(id=>{const d=PROJECTS[id],pct=projectProgress(id),p=projectState(id);return `<a class="project-card" href="/projects.html?project=${id}" onclick="saveProjectsScroll()"><div class="project-card-icon">${d.icon}</div><small>PROJECT</small><h2>${d.title}</h2><p class="muted">${d.subtitle}</p><div class="bar"><div style="width:${pct}%"></div></div><strong>${p.completed.length}/${d.steps.length} milestones · ${pct}%</strong></a>`}).join('')}</div>`;
 restoreProjectsScroll();
}
function renderProjectDetail(id,openIndex=0,preserveScroll=false){
 const previousScrollY=preserveScroll?window.scrollY:0;
 const d=PROJECTS[id];if(!d){renderProjects();return}
 const p=projectState(id),pct=projectProgress(id);
 document.title=d.title+' | My Learning OS';
 document.getElementById('app').innerHTML=nav()+`<section class="hero project-page-heading"><a class="back" href="/projects.html" onclick="saveProjectsScroll()">← All Projects</a><h1>${d.icon} ${d.title}</h1><p class="muted">${d.subtitle}</p></section>
 <section class="project-hero project-hero-compact"><div class="project-icon">${d.icon}</div><div><small>YOUR PROJECT</small><h2>${d.title}</h2><p>${d.description}</p></div></section>
 <section class="panel project-progress-panel"><div class="project-progress-head"><div><h2>Progress</h2><p class="muted">${p.completed.length} of ${d.steps.length} steps complete</p></div><strong>${pct}%</strong></div><div class="bar"><div style="width:${pct}%"></div></div></section>
 <section class="panel project-path-panel"><div class="project-path-heading"><div><h2>Project steps</h2><p class="muted">Open one step at a time. Work at your own pace.</p></div><span class="step-count">${d.steps.length} steps</span></div><div class="project-steps">${d.steps.map((x,i)=>`<article class="project-step-card ${p.completed.includes(i)?'done':''} ${openIndex===i?'is-open':''}">
 <button class="project-step-toggle" aria-expanded="${openIndex===i}" onclick="renderProjectDetail('${id}',${openIndex===i?-1:i},true)"><span class="project-check">${p.completed.includes(i)?'✓':i+1}</span><span class="project-step-title"><strong>${i+1}. ${x[0]}</strong><small>${p.completed.includes(i)?'Completed':'Tap to open this step'}</small></span><span class="project-step-chevron">${openIndex===i?'−':'+'}</span></button>
 ${openIndex===i?`<div class="project-step-content"><p>${x[1]}</p><div class="project-question"><strong>Think about it</strong><p>${x[2]}</p></div><button class="project-complete-button ${p.completed.includes(i)?'is-complete':''}" onclick="toggleProjectStep('${id}',${i})">${p.completed.includes(i)?'✓ Mark as not complete':'Mark step complete ✓'}</button></div>`:''}
 </article>`).join('')}</div></section>
 <section class="panel project-discoveries"><h2>🧠 My discoveries</h2><p class="muted">Save your ideas and questions here.</p><textarea class="note project-notes" id="projectNotes" placeholder="What did you discover? What questions do you still have?">${esc(p.notes||'')}</textarea><div class="lesson-actions"><button onclick="saveProjectNotes('${id}')">Save my discoveries</button><span id="projectSaved" class="muted"></span></div></section>`;
 if(preserveScroll)requestAnimationFrame(()=>window.scrollTo(0,previousScrollY));
 else restoreProjectsScroll(id);
}
function renderMap(){
 const subjects=[
  {name:'Physics',icon:'⚛️',tags:'matter & energy',desc:'Explains matter, energy, forces, and motion.'},
  {name:'Chemistry',icon:'🧪',tags:'atoms & reactions',desc:'Explains how atoms and molecules interact.'},
  {name:'Biology',icon:'🧬',tags:'life & evolution',desc:'Explores living things, cells, DNA, and evolution.'},
  {name:'History',icon:'🏛️',tags:'people & change',desc:'Explores how people and societies change over time.'},
  {name:'Economics',icon:'📈',tags:'choices & trade',desc:'Studies choices and how resources are used.'},
  {name:'Philosophy',icon:'💭',tags:'ideas & reasoning',desc:'Asks how we know things and how we should live.'},
  {name:'Business',icon:'💼',tags:'people & value',desc:'Uses ideas to solve customer problems.'},
  {name:'Technology',icon:'💻',tags:'tools & solutions',desc:'Uses knowledge and tools to solve problems.'}
 ];
 const connections=[
  {a:'Chemistry',b:'Biology',title:'Chemistry makes life possible',detail:'Living things are made of molecules. Chemical reactions help cells grow, use energy, and stay alive.',example:'Plants use light energy to make sugar.'},
  {a:'Biology',b:'History',title:'Evolution shaped humans',detail:'Evolution shaped human abilities; history shows how people used language, tools, and cooperation.',example:'People shared knowledge and built communities.'},
  {a:'Physics',b:'Technology',title:'Science becomes useful tools',detail:'Engineers use ideas about energy, electricity, and motion to build reliable tools.',example:'Phones use circuits and radio waves.'},
  {a:'Business',b:'Technology',title:'Tools help customers',detail:'Businesses use technology to make products and services easier to access.',example:'An online shop lets people order from home.'}
 ];
 const subjectCards=subjects.map(s=>{const saved=state(),pct=subjectProgress(s.name),done=(saved.completed[s.name]||[]).length,total=SUBJECTS[s.name].lessons.length,status=done>=total?'Mastered':done>0?'Learning':'Not started';return '<button class="knowledge-node" aria-label="'+s.name+', '+status+', '+pct+' percent complete" onclick="showKnowledgeSubject(&quot;'+s.name+'&quot;)"><span class="knowledge-node-icon">'+s.icon+'</span><strong>'+s.name+'</strong><small>'+s.tags+'</small><span class="knowledge-progress"><span class="knowledge-progress-bar"><span style="width:'+pct+'%"></span></span><span class="knowledge-progress-label">'+pct+'% · '+status+'</span></span></button>'}).join('');
 const connectionCards=connections.map((x,i)=>'<button class="knowledge-connection" onclick="showKnowledgeConnection(['+[0,1,4,6][i]+'])"><span class="knowledge-connection-label">'+esc(x.a)+' ↔ '+esc(x.b)+'</span><strong>'+esc(x.title)+'</strong></button>').join('');
 document.getElementById('app').innerHTML=nav()+
 '<main class="knowledge-one-screen"><header class="knowledge-mini-header"><span>🧠</span><div><h1>Knowledge Map</h1><p>One mind · eight subjects · connected ideas</p></div></header>'+
 '<section class="knowledge-map-panel knowledge-one-panel"><div class="knowledge-hub"><span class="knowledge-hub-icon">🧠</span><strong>MY LEARNING</strong></div><div class="knowledge-map-connector" aria-hidden="true"></div><div class="knowledge-network">'+subjectCards+'</div>'+
 '<div class="knowledge-connections-heading">HOW IDEAS CONNECT</div><div class="knowledge-connections">'+connectionCards+'</div>'+
 '<div id="knowledgeDetail" class="knowledge-detail knowledge-tiny-detail" aria-live="polite"><strong>Tap any subject or connection</strong></div>'+
 '<div id="knowledgeConnectionDetail" class="knowledge-connection-detail knowledge-tiny-connection-detail" aria-live="polite" hidden></div></section>'+
 '<p class="knowledge-map-footer">Explore one idea at a time.</p></main>';
}
function showKnowledgeSubject(name){
 const subjects={Physics:['⚛️','Physics','Physics explains how matter and energy behave, from a falling ball to the movement of planets.'],Chemistry:['🧪','Chemistry','Chemistry shows how atoms and molecules interact to create the materials that make up our world.'],Biology:['🧬','Biology','Biology explores living things, how life works, and how populations change over generations.'],History:['🏛️','History','History uses evidence to understand how people and societies changed over time.'],Economics:['📈','Economics','Economics studies how people make choices with limited resources and how those choices shape markets and societies.'],Philosophy:['💭','Philosophy','Philosophy asks how we know what is true, how we should reason, and how we should live.'],Business:['💼','Business','Business applies ideas about people, resources, technology, and value to solve problems for customers.'],Technology:['💻','Technology','Technology combines knowledge and tools to solve problems and make tasks easier.']};
 const s=subjects[name],box=document.getElementById('knowledgeDetail');if(!s||!box)return;
 box.innerHTML='<span class="knowledge-detail-icon">'+s[0]+'</span><div><strong>'+esc(s[1])+'</strong><p>'+esc(s[2])+'</p><a href="/?subject='+encodeURIComponent(name)+'#learning-areas">Explore this subject’s lessons ↗</a></div>';
}
function showKnowledgeConnection(index){
 const connections=[
  {a:'Chemistry',b:'Biology',title:'How chemistry makes life possible',detail:'Living things are made of molecules. Chemical bonds and reactions let cells build structures, release energy, and carry out the processes needed for life.',example:'Plants use chemical reactions during photosynthesis to make sugars from water and carbon dioxide using light energy.'},
  {a:'Biology',b:'History',title:'How evolution shaped humans',detail:'Human bodies and abilities developed through evolution. Human history shows how people used language, cooperation, tools, and culture to change how they live.',example:'Our ability to learn and cooperate helped people share knowledge and build communities.'},
  {a:'Psychology',b:'Economics',title:'How behavior influences choices',detail:'People do not always make decisions by calculating money alone. Habits, emotions, trust, and the way choices are presented can influence what people buy and save.',example:'A limited-time offer can make a shopper feel urgency and change a purchasing decision.'},
  {a:'Economics',b:'History',title:'How choices shape societies',detail:'Resources, trade, incentives, and unequal access to wealth can influence institutions and historical change. Historical events can also reshape economies.',example:'Trade routes spread goods and ideas while changing the fortunes of cities and empires.'},
  {a:'Physics',b:'Technology',title:'How science becomes useful tools',detail:'Physics describes forces, energy, electricity, and motion. Engineers apply these principles to design tools and systems that work reliably.',example:'A phone uses electrical circuits and radio waves to send information.'},
  {a:'Philosophy',b:'Science',title:'How we decide what to believe',detail:'Philosophy helps us examine evidence, reasoning, assumptions, and uncertainty. Science uses observations and tests to check explanations of the natural world.',example:'Instead of accepting a claim immediately, ask what evidence would support it and what result could prove it wrong.'},
  {a:'Business',b:'Technology',title:'How tools help solve customer problems',detail:'Businesses use technology to make products, deliver services, communicate, and understand customer needs. The tool matters when it makes a real task easier or better.',example:'An online store uses a website and payment system so customers can order a travel pouch from home.'},
  {a:'Chemistry',b:'Physics',title:'How matter behaves',detail:'Physics explains energy and forces; chemistry explores how atoms interact and rearrange. Together they help explain why materials have different properties and how reactions happen.',example:'Temperature changes how quickly particles move and can affect the rate of a chemical reaction.'},
  {a:'Biology',b:'Economics',title:'How human needs influence resources',detail:'People need food, water, shelter, and health. Biology helps explain these needs, while economics studies how people and societies allocate resources to meet them.',example:'Understanding nutrition helps explain why food access matters for health and public policy.'},
  {a:'Philosophy',b:'Business',title:'How values guide decisions',detail:'Business decisions affect customers, workers, and communities. Ethical reasoning helps people consider fairness, honesty, safety, and consequences—not only profit.',example:'A company may choose a safer material even if it costs more because customer well-being matters.'}
 ];
 const x=connections[index],box=document.getElementById('knowledgeConnectionDetail');if(!x||!box)return;
 box.innerHTML='<span class="knowledge-detail-pill">'+esc(x.a)+' + '+esc(x.b)+'</span><h3>'+esc(x.title)+'</h3><p>'+esc(x.detail)+'</p><div class="knowledge-example"><strong>🌍 Real-world example</strong><p>'+esc(x.example)+'</p></div>';
}
function localReviewDayKey(date){
 const d=new Date(date);
 return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function getQuizReviewItems(){
 const s=state(),items=[];
 Object.entries(s.quizResults||{}).forEach(([key,result])=>{
  if(!result?.nextReviewAt||!result.subject||!Number.isInteger(result.index))return;
  const subject=SUBJECTS[result.subject],lesson=subject?.lessons[result.index];
  if(!lesson)return;
  const nextReviewAt=new Date(result.nextReviewAt);
  if(Number.isNaN(nextReviewAt.getTime()))return;
  items.push({key,subject:result.subject,index:result.index,lesson,result,nextReviewAt,due:nextReviewAt<=new Date()});
 });
 return items.sort((a,b)=>a.nextReviewAt-b.nextReviewAt);
}
function renderReview(){
 const s=state(),todayKey=localReviewDayKey(new Date());
 const lessonSchedules=Object.values(s.review||{}).filter(r=>r&&r.nextReview&&SUBJECTS[r.subject]?.lessons[r.index]).map(r=>({type:'lesson',subject:r.subject,index:r.index,lesson:SUBJECTS[r.subject].lessons[r.index],date:new Date(r.nextReview),score:null})).filter(x=>!Number.isNaN(x.date.getTime()));
 const quizSchedules=getQuizReviewItems().map(x=>({type:'quiz',subject:x.subject,index:x.index,lesson:x.lesson,date:x.nextReviewAt,score:(x.result.lastScore??x.result.correct??0)+'/'+(x.result.total??3)}));
 const allItems=[...lessonSchedules,...quizSchedules];
 const uniqueItems=allItems.filter((x,i,a)=>a.findIndex(y=>y.type===x.type&&y.subject===x.subject&&y.index===x.index)===i);
 const completedIds=new Set((s.reviewCompletions||{})[todayKey]||[]);
 const remainingItems=uniqueItems.filter(x=>localReviewDayKey(x.date)>todayKey||!completedIds.has(x.type+':'+x.subject+':'+x.index));
 const overdueItems=remainingItems.filter(x=>localReviewDayKey(x.date)<todayKey).sort((a,b)=>a.date-b.date);
 const dueTodayItems=remainingItems.filter(x=>localReviewDayKey(x.date)===todayKey).sort((a,b)=>a.date-b.date);
 const upcomingItems=remainingItems.filter(x=>localReviewDayKey(x.date)>todayKey).sort((a,b)=>a.date-b.date);
 const dueItems=[...overdueItems,...dueTodayItems];
 const nextItem=dueItems[0]||upcomingItems[0];
 const reviewHref=x=>'/subjects/'+x.subject.toLowerCase()+'/?review='+(x.type==='quiz'?'quiz':'lesson')+'#lesson-'+x.index;
 const nextHref=nextItem?reviewHref(nextItem):'/#learning-areas';
 const reviewRow=x=>'<article class="memory-review-row"><div class="memory-review-icon" aria-hidden="true">'+SUBJECTS[x.subject].icon+'</div><div class="memory-review-copy"><small>'+esc(x.subject)+' · '+(x.type==='quiz'?'Quiz review':'Lesson review')+'</small><h3>'+esc(x.lesson[0])+'</h3><p>Next review · '+formatDate(x.date.toISOString())+(x.score?' · Last score '+esc(String(x.score)):'')+'</p></div><a class="memory-review-link" href="'+reviewHref(x)+'">Open →</a></article>';
 const scheduledCount=uniqueItems.length;
 const dueCount=dueItems.length;
 const completedToday=completedIds.size;
 const progressTotal=completedToday+dueCount;
 const progressLabel=progressTotal?completedToday+' / '+progressTotal:'All caught up';
 const progressPercent=progressTotal?Math.round(completedToday/progressTotal*100):0;
 const estimatedMinutes=dueCount*2;
 document.getElementById('app').innerHTML=nav()+`<section class="hero memory-hero"><p class="memory-eyebrow">MY LEARNING OS · MEMORY</p><h1>🧠 Today's review</h1><p class="muted">A little practice today builds lasting knowledge.</p></section>
 <section class="panel memory-dashboard">
  <div class="memory-stats">
   <div class="memory-stat"><strong>${dueTodayItems.length}</strong><span>Due today</span></div>
   <div class="memory-stat"><strong>${scheduledCount}</strong><span>Scheduled</span></div>
   <div class="memory-stat"><strong>${estimatedMinutes} min</strong><span>Est. remaining</span></div>
  </div>
  <section class="memory-start">
   <div class="memory-start-copy"><h2>Ready to strengthen your memory?</h2><p>Review your due concepts across your learning subjects.</p></div>
   <a class="button memory-start-button" href="${nextHref}">Start today's review →</a>
  </section>
  <section class="memory-progress" aria-label="Today's review progress">
   <div class="memory-progress-heading"><h2>Your daily progress</h2><strong>${progressLabel}</strong></div>
   <div class="bar" role="progressbar" aria-label="Reviews completed today" aria-valuemin="0" aria-valuemax="${Math.max(progressTotal,1)}" aria-valuenow="${completedToday}"><div style="width:${progressPercent}%"></div></div>
   <p>${progressTotal?progressPercent+'% complete today':'Your progress will appear as you complete reviews.'}</p>
  </section>
  <section class="memory-priorities-intro"><h2>Review priorities</h2><p>Separate overdue work from today's tasks and future reviews.</p></section>
  ${overdueItems.length?'<section class="memory-coming memory-priority-card"><h2>Overdue <span class="memory-count">'+overdueItems.length+'</span></h2>'+overdueItems.map(reviewRow).join('')+'</section>':''}
  <section class="memory-coming memory-priority-card"><h2>Due today <span class="memory-count">${dueTodayItems.length}</span></h2>${dueTodayItems.map(reviewRow).join('')||'<div class="empty memory-empty-due"><span aria-hidden="true">▦</span><p>No reviews due today. You are all caught up.</p></div>'}</section>
  <section class="memory-coming memory-priority-card"><h2>Coming up <span class="memory-count">${upcomingItems.length}</span></h2>${upcomingItems.slice(0,8).map(reviewRow).join('')||'<div class="empty memory-empty-due"><span aria-hidden="true">▦</span><p>No upcoming reviews yet. Complete a lesson or quiz to schedule your next review.</p></div>'}</section>
 </section>
 <section class="panel memory-how"><h2>How your review grows</h2><p>After a lesson, the first review is scheduled for tomorrow. As you remember concepts successfully, the interval grows: 1 day → 3 days → 7 days → 14 days → 30 days. Quiz reviews adapt to your result.</p></section>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
 requestAnimationFrame(()=>{try{const saved=sessionStorage.getItem('myLearningOS.reviewScroll');if(saved!==null)window.scrollTo(0,Math.max(0,Number(saved)||0));}catch{}});
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
 const completionDay=localReviewDayKey(new Date()),completionId='lesson:'+name+':'+i;
 s.reviewCompletions=s.reviewCompletions||{};s.reviewCompletions[completionDay]=s.reviewCompletions[completionDay]||[];if(!s.reviewCompletions[completionDay].includes(completionId))s.reviewCompletions[completionDay].push(completionId);
 const intervals=[1,3,7,14,30];
 r.interval=known?intervals[Math.min((r.stage||0)+1,intervals.length-1)]:1;
 r.stage=known?Math.min((r.stage||0)+1,intervals.length-1):0;
 r.nextReview=addDays(new Date(),r.interval).toISOString();
 s.activity=s.activity||{};s.activity[dateKey(new Date())]=true;saveState(s);
}
function finishReview(name,i,known){recordReview(name,i,known);renderSubject(name,true);openLesson(i);}


function teacherContent(subject,lesson){
 const title=lesson[0];
 const content={
 "What does physics study?":["Physics helps us explain why things move, fall, heat up, or make sounds.","Throw a ball upward: it slows, pauses briefly, then falls because Earth's gravity pulls it down."],
 "Motion and speed":["Speed tells you how fast something moves; motion means its position changes.","If you walk 100 metres in 2 minutes, your average speed is 50 metres per minute."],
 "Energy":["Energy helps make changes happen, such as moving an object, warming food, or lighting a room.","A rolling ball has motion energy. When it hits a cushion, some energy transfers into sound, heat, and the cushion's movement."],
 "Gravity and orbits":["Gravity is the pull between objects that have mass. It keeps us on the ground and helps guide planets around the Sun.","A satellite moves forward while Earth's gravity continually bends its path, so it keeps falling around Earth instead of straight down."],
 "What is matter made of?":["Everyday things are made of tiny particles, including atoms, that are far too small to see with our eyes.","Water is made of water molecules. Each molecule contains two hydrogen atoms and one oxygen atom."],
 "Atoms and elements":["An atom's element depends on how many protons it has in its centre.","Every carbon atom has six protons. If the number of protons changes, it becomes a different element."],
 "Chemical bonds":["Atoms can join because electrical attractions between their particles hold them together.","In water, oxygen and hydrogen atoms share electrons in bonds, forming a water molecule."],
 "Chemical reactions":["A chemical reaction rearranges atoms, turning starting substances into different substances.","When iron rusts, iron reacts with oxygen and moisture to form rust; the atoms are rearranged into a new material."],
 "What is life?":["Living things carry out processes that keep them alive, use energy, and respond to their surroundings.","A plant uses light to make sugars, grows new leaves, and responds to water and sunlight."],
 "Cells: the basic unit":["Cells are tiny living units that carry out the jobs needed to keep an organism alive.","Your muscle cells use energy to contract, helping you lift a bag or climb stairs."],
 "DNA and heredity":["DNA is like a set of biological instructions that cells use and copy. It helps pass inherited traits between generations.","A puppy may inherit coat-colour variants from its parents because DNA is passed on during reproduction."],
 "Evolution by natural selection":["Evolution happens when inherited traits in a population change across generations. Natural selection is one cause of that change.","If some insects are better camouflaged, birds may eat fewer of them. Those insects may leave more offspring, so camouflage can become more common."],
 "How do historians study the past?":["Historians use clues from the past and compare sources to work out what likely happened.","To understand a historical event, a historian might compare a letter, a newspaper report, and an object from the same period."],
 "Prehistory and archaeology":["Archaeologists study physical traces left behind to learn about people who lived long ago.","Stone tools, food remains, and the place where they were found can reveal how an ancient community lived."],
 "Agriculture and civilization":["Farming allowed many communities to grow food in one place, sometimes supporting larger settlements.","A village that stores grain can feed people through seasons when crops are not ready, allowing some people to do other jobs."],
 "Empires and exchange":["Empires ruled large areas, while trade and migration connected people across regions. These connections spread ideas as well as goods.","Along trade routes, people could exchange spices, cloth, languages, inventions, and religious ideas."],
 "What is economics?":["Economics explores how people make choices when time, money, and resources are limited.","If you spend your evening studying, you have less time for a movie. Choosing one option means giving up another."],
 "Supply and demand":["Demand is how much customers are willing and able to buy; supply is how much sellers are willing and able to offer.","On a hot day, more people may want ice cream. If the supply cannot quickly increase, sellers may run out or prices may rise."],
 "Incentives":["An incentive is something that makes a choice more or less attractive.","A shop offers a loyalty stamp for each purchase; customers may return because collecting stamps brings a reward."],
 "Trade and specialization":["People can save time and produce more by focusing on tasks they do relatively well, then exchanging what they make.","One person prepares ingredients while another cooks. Working in parallel can get dinner ready faster than each person doing every task alone."],
 "What is a business?":["A business offers something people value and tries to earn enough to cover its costs.","A bakery sells bread, but customers also value its freshness, convenient location, and the time it saves them."],
 "Revenue, costs and profit":["Revenue is money coming in from sales. Profit is what remains after the business pays its costs.","If you sell a pouch for €30 and buying and shipping it costs €18, €12 remains before advertising, tax, and other expenses."],
 "Understanding customers":["Businesses need to learn what people actually need, not just guess what they might buy.","Before selling a travel pouch, ask travellers what frustrates them when packing and which features they would pay for."],
 "Testing a business idea":["A small test lets you learn whether an idea works before risking a lot of money.","Show a sample bag to a few potential customers and ask what they would change before ordering a large quantity."],
 "What is technology?":["Technology combines tools and knowledge to solve a problem or make a task easier.","A washing machine uses water, detergent, a motor, and timed cycles to clean clothes with less manual effort."],
 "How does the internet work?":["The internet lets devices send data to one another using shared rules. Websites are delivered from servers to your device.","When you open a website, your phone requests its files from a server, and your browser turns those files into the page you see."],
 "What is an algorithm?":["An algorithm is a clear set of steps that solves a problem or completes a task.","A navigation app compares possible routes step by step and chooses one that fits your settings, such as avoiding toll roads."],
 "What is artificial intelligence?":["AI uses patterns learned from examples to make predictions or create outputs, such as text or image descriptions.","A music app may recommend a song because its system detects patterns in what you and similar listeners enjoy."],
 "What is philosophy?":["Philosophy asks big questions and uses careful reasoning to examine possible answers.","If you ask whether a promise should always be kept, philosophy helps you explore duties, consequences, and exceptions."],
 "How do we know?":["We build confidence in a belief by looking at evidence and asking how strong the reasons are.","Before believing an online claim, check where it came from, whether other reliable sources agree, and what evidence is offered."],
 "Ethics and choices":["Ethics helps us think about what is fair or right and how our choices affect other people.","If you find a lost wallet, you might consider the owner's needs, your responsibility, and the honest action to take."],
 "Arguments and reasoning":["Good reasoning connects evidence and reasons to a conclusion instead of relying only on confidence or emotion.","If someone says a product is best because one friend liked it, ask whether that single experience is enough evidence for everyone."]
 };
 const item=content[title];
 return item?{simple:item[0],example:item[1]}:{simple:lesson[1],example:lesson[2]};
}

function whyItWorks(subject,lesson){
 const title=lesson[0];
 const explanations={
 "What does physics study?":"The ball changes speed and direction because forces act on it. In this example, gravity pulls downward even while the ball is travelling upward, so its upward motion slows and then reverses.",
 "Motion and speed":"Average speed is distance divided by time. If you walk 100 metres in 2 minutes, you cover 50 metres each minute on average; if you cover the same distance in less time, your average speed is higher.",
 "Energy":"When a moving ball hits a cushion, it pushes the cushion and slows down. Some of its energy is transferred into the cushion's movement, sound, and heat, rather than disappearing.",
 "Gravity and orbits":"A satellite is moving forward while Earth's gravity pulls it inward. Because it keeps moving forward as gravity changes its direction, it continually falls around Earth instead of straight to the ground.",
 "What is matter made of?":"Water's properties come from the way its molecules are built and interact. Each water molecule contains two hydrogen atoms bonded to one oxygen atom, so water behaves differently from either element on its own.",
 "Atoms and elements":"The number of protons determines an atom's element: six protons means carbon, while eight means oxygen. Changing the proton number changes the element itself, not just its size or shape.",
 "Chemical bonds":"In a water molecule, the atoms share electrons unevenly, creating attractions that hold the molecule together. Those bonds help explain water's structure and many of its properties.",
 "Chemical reactions":"Rust forms because iron atoms react with oxygen, often with water helping the process. The atoms rearrange into iron oxides, which have different properties from the original iron.",
 "What is life?":"A plant needs energy to grow. It captures light during photosynthesis and uses that energy to make sugars from water and carbon dioxide; those sugars provide building material and fuel for its cells.",
 "Cells: the basic unit":"Muscle cells shorten when proteins inside them slide past one another using energy. Many muscle cells contracting together pull on your bones and let you climb stairs or lift a bag.",
 "DNA and heredity":"DNA is copied and passed on when organisms reproduce. Offspring inherit combinations of DNA variants from their parents, which can influence traits such as coat colour, although environment also matters.",
 "Evolution by natural selection":"If better-camouflaged insects are harder for birds to spot, they may survive and reproduce more often. If camouflage is inherited, that trait can become more common over many generations.",
 "How do historians study the past?":"A letter may show one person's perspective, while an object or another account may show something different. Comparing sources helps historians check claims and build an explanation supported by several kinds of evidence.",
 "Prehistory and archaeology":"An object alone may not tell the whole story. Its age, location, and nearby remains help archaeologists infer how people used it and what life was like at that site.",
 "Agriculture and civilization":"When farming produces more food than a family needs immediately, some food can be stored and shared. That surplus can support people doing other jobs, helping settlements grow, although harvests can still fail.",
 "Empires and exchange":"When traders travel between regions, they carry goods and ideas with them. These connections can spread inventions and beliefs, but also diseases and unequal control over resources.",
 "What is economics?":"Choosing one option uses resources that could have gone toward another. The value of the best alternative you give up is an opportunity cost, which helps explain why even everyday choices involve trade-offs.",
 "Supply and demand":"If many people want ice cream on a hot day but sellers have only a limited amount, buyers compete for the available supply. Prices may rise or stock may run out; increasing supply can reduce that pressure.",
 "Incentives":"A loyalty reward gives customers a reason to return because repeat purchases bring an extra benefit. It may change behaviour, but customers still weigh other factors such as price, convenience, and quality.",
 "Trade and specialization":"When each person focuses on a task they can do efficiently, the group can produce more in the same time. They can then exchange results, as long as the benefits of trading outweigh the costs.",
 "What is a business?":"A business needs customers to value its offer enough to pay for it, and it needs the money received to cover costs. If customers don't buy or costs stay too high, the business cannot sustain itself.",
 "Revenue, costs and profit":"If you sell a pouch for €30 and buying and shipping it cost €18, €12 remains before other expenses. That is why sales revenue is not the same as profit: every cost reduces what is left.",
 "Understanding customers":"Asking travellers what frustrates them about packing can reveal problems a product should solve. Testing those needs against real buying behaviour helps avoid spending money on features people don't value.",
 "Testing a business idea":"Showing a sample to a few likely customers is a small experiment. Their specific feedback can reveal whether the product solves a real problem before you risk money on a large order.",
 "What is technology?":"A washing machine works because its motor moves fabric through water and detergent, while the cycle controls timing and rinsing. These parts work together to loosen dirt and wash it away with less manual effort.",
 "How does the internet work?":"When you open a website, your browser asks a server for the needed files. Networks carry the data to your device, and the browser interprets the files to display text, images, and controls.",
 "What is an algorithm?":"A navigation algorithm compares possible routes using steps and rules, such as distance or avoiding tolls. Applying the same rules to route data makes its choice systematic rather than random.",
 "What is artificial intelligence?":"An AI model learns statistical patterns from training examples and uses them to predict or generate an answer. Because patterns can be incomplete or misleading, a fluent answer can still contain errors.",
 "What is philosophy?":"Testing a belief with counterexamples reveals whether it works in every case. For example, asking whether promises must always be kept helps uncover conflicts between honesty, safety, and responsibility.",
 "How do we know?":"Checking independent sources can reveal whether a claim is supported beyond one person's assertion. Evidence does not remove all uncertainty, but it helps us judge which explanation is best supported.",
 "Ethics and choices":"A choice can help one person while harming another, so considering consequences and fairness can reveal trade-offs. Explaining who is affected and why helps make the decision more thoughtful.",
 "Arguments and reasoning":"A strong conclusion needs reasons that actually support it. If someone says a product is best because one friend liked it, the evidence is too limited to show that it will suit everyone."
 };
 return explanations[title]||"Look closely at this example: identify what causes the change, what happens as a result, and what evidence supports that explanation.";
}

// Preserve independent scroll positions for the Projects dashboard and every project detail page.
function projectScrollStorageKey(){
 const path=location.pathname;
 if(!path.includes('projects.html'))return null;
 const id=new URLSearchParams(location.search).get('project');
 return id?'myLearningOS.projectScroll.'+id:'myLearningOS.projectsScroll';
}
function saveProjectsScroll(){
 const key=projectScrollStorageKey();
 if(!key)return;
 try{sessionStorage.setItem(key,String(window.scrollY));}catch{}
}
function restoreProjectsScroll(id){
 const key=id?'myLearningOS.projectScroll.'+id:'myLearningOS.projectsScroll';
 try{
  const saved=sessionStorage.getItem(key);
  if(saved===null)return;
  requestAnimationFrame(()=>window.scrollTo(0,Math.max(0,Number(saved)||0)));
 }catch{}
}
function saveProjectsScrollOnLeave(){saveProjectsScroll();}
window.addEventListener('pagehide',saveProjectsScrollOnLeave);

// Remember the dashboard's position when navigating away from Home. Do not overwrite it from other pages.
function saveHomeScrollOnLeave(){
 const path=location.pathname;
 if(path==='/'||path==='/index.html'){
  try{sessionStorage.setItem('myLearningOS.homeScroll',String(window.scrollY));}catch{}
 }
}
window.addEventListener('pagehide',saveHomeScrollOnLeave);
function saveReviewScrollOnLeave(){if(location.pathname.includes('review.html')){try{sessionStorage.setItem('myLearningOS.reviewScroll',String(window.scrollY));}catch{}}}
window.addEventListener('pagehide',saveReviewScrollOnLeave);
prepareBiologyOverviewFocus();
// Registered once per page, outside renderSubject (which runs again after saves).
window.addEventListener('hashchange',syncBiologyLessonHash);
window.addEventListener('hashchange',syncChemistryLessonHash);

function boot(){const path=location.pathname;const match=path.match(/subjects\/([^/]+)/);document.body.dataset.subject=match?match[1].replace(/^./,c=>c.toUpperCase()):'';const app=document.getElementById('app');if(!app)return;try{if(path.includes('/subjects/')){renderSubject(document.body.dataset.subject);const params=new URLSearchParams(location.search);if(['Biology','Chemistry'].includes(document.body.dataset.subject)||['quiz','lesson'].includes(params.get('review'))){const lessonMatch=location.hash.match(/^#lesson-(\d+)$/);if(lessonMatch){const lessonIndex=Number(lessonMatch[1]);requestAnimationFrame(()=>requestAnimationFrame(()=>{openLesson(lessonIndex);if(params.get('review')==='quiz'){const quiz=document.getElementById('mcq-'+lessonIndex);if(quiz)quiz.scrollIntoView({behavior:(document.body?.dataset?.subject==='Biology'||document.body?.dataset?.subject==='Chemistry'&&(lessonIndex===0||lessonIndex===1||lessonIndex===2||lessonIndex===3))&&typeof window!=='undefined'&&window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'auto':'smooth',block:'start'});}}));}}}else if(path.includes('notes.html'))renderNotes();else if(path.includes('knowledge.html'))renderMap();else if(path.includes('review.html'))renderReview();else if(path.includes('projects.html')){const id=new URLSearchParams(location.search).get('project');id?renderProjectDetail(id):renderProjects();}else if(path.includes('search.html'))renderSearch();else if(path.includes('tutor.html'))renderTutor();else renderHome()}catch(error){console.error('My Learning OS failed to render:',error);document.title='My Learning OS';app.innerHTML='<main style="max-width:620px;margin:36px auto;padding:22px;font-family:system-ui,sans-serif;color:#222"><h1 style="font-size:1.6rem">Your learning page could not load</h1><p>We hit a loading error. Your saved learning progress has not been deleted.</p><p style="color:#666">Technical detail: '+String(error&&error.message||error).replace(/[&<>\"']/g,function(ch){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","\'":"&#39;"}[ch]})+'</p><a href="/" style="display:inline-block;padding:12px 16px;background:#4f46e5;color:white;text-decoration:none;border-radius:12px">Back to My Learning OS</a></main>'}}
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
function exportLearningBackup(){
 try{
 const current=readLearningData(),data={...current,noteLibrary:current.noteLibrary||[]},backup={app:'My Learning OS',version:2,exportedAt:new Date().toISOString(),dataFields:Object.keys(data),data};
 const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'});
 const url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download='my-learning-os-backup-'+new Date().toISOString().slice(0,10)+'.json';
 document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 const status=document.getElementById('backupStatus');if(status)status.textContent='Backup downloaded. Keep the file somewhere safe.';
 }catch(error){showLearningDataWarning('A normal backup could not be created safely. Download the original data instead; the stored record is unchanged.');throw error;}
}
function importLearningBackup(input){
 const file=input&&input.files&&input.files[0];if(!file)return;
 const status=document.getElementById('backupStatus'),reader=new FileReader();
 reader.onload=()=>{
  try{
   const backup=JSON.parse(String(reader.result||''));
   if(!backup||backup.app!=='My Learning OS'||![1,2].includes(backup.version)||!backup.data||typeof backup.data!=='object'||Array.isArray(backup.data))throw new Error('This does not look like a supported My Learning OS backup.');
   if(!['completed','notes','scores'].every(key=>Object.hasOwn(backup.data,key)))throw new Error('This backup is missing required learning data.');
   validateLearningData(backup.data);
   if(backup.version===2&&!Array.isArray(backup.data.noteLibrary))throw new Error('This version 2 backup has an invalid structured Notes library.');
   if(Object.hasOwn(backup,'dataFields')){
    const fields=backup.dataFields,actual=Object.keys(backup.data);
    if(!Array.isArray(fields)||fields.length!==actual.length||new Set(fields).size!==fields.length||!fields.every(key=>typeof key==='string'&&Object.hasOwn(backup.data,key)))throw new Error('This backup is incomplete: its field list does not match its saved data.');
   }
   const originalRaw=localStorage.getItem(KEY);let current;
   try{current=originalRaw===null?validateLearningData({}):validateLearningData(JSON.parse(originalRaw));}catch{current={};}
   const restoreMessage='Restore this backup? Fields included in it will replace matching saved data. Fields absent from older backups will be kept. '+(backup.version===1?'Your current Notes library will also be kept. ':'')+'A copy of the current record will be kept before restoring.';
   if(!confirm(restoreMessage)){if(status)status.textContent='Restore cancelled. Your current data is unchanged.';return;}
   if(localStorage.getItem(KEY)!==originalRaw)throw new Error('Saved data changed while restore was open. Please review the backup and try again.');
   const restored={...current,...backup.data};
   if(backup.version===1){if(Array.isArray(current.noteLibrary))restored.noteLibrary=current.noteLibrary;else delete restored.noteLibrary;}
   validateLearningData(restored);
   if(originalRaw!==null)localStorage.setItem(STORAGE_RECOVERY_KEY,JSON.stringify({savedAt:new Date().toISOString(),raw:originalRaw}));
   localStorage.setItem(KEY,JSON.stringify(restored));
   if(status)status.textContent='Backup restored. Reloading your learning space…';
   location.reload();
  }catch(error){if(status)status.textContent=error.message||'Could not read that backup. Please choose a valid My Learning OS backup file.';}
  finally{input.value='';}
 };
 reader.onerror=()=>{if(status)status.textContent='Could not read this file. Please try again.';input.value='';};
 reader.readAsText(file);
}
boot();
