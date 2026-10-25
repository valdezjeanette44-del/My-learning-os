const qs=[
 {icon:'⚛️',subject:'Physics',q:'Why does a ball thrown upward eventually fall back down?',clue:'Think about the force that pulls objects toward Earth.',lesson:0},
 {icon:'🧪',subject:'Chemistry',q:'What makes a chemical reaction different from melting ice?',clue:'Ask whether a new substance is formed.',lesson:0},
 {icon:'🌱',subject:'Biology',q:'How do plants make the food they need to grow?',clue:'Think about sunlight, water, and carbon dioxide.',lesson:0},
 {icon:'💼',subject:'Business',q:'Why might a business test an idea before investing lots of money?',clue:'Think about reducing risk and learning from customers.',lesson:0},
 {icon:'📈',subject:'Economics',q:'What do you give up when you choose one option over another?',clue:'Economists call this the cost of the next-best alternative.',lesson:0},
 {icon:'🏛️',subject:'History',q:'Why do historians compare more than one source about an event?',clue:'Sources can be incomplete or show different perspectives.',lesson:0},
 {icon:'💭',subject:'Philosophy',q:'What makes a reason good evidence for a belief?',clue:'Consider whether the reason supports the claim and can be questioned.',lesson:0},
 {icon:'💻',subject:'Technology',q:'How does an app turn a tap on the screen into an action?',clue:'Think about interface controls and the code responding to events.',lesson:0}
];
const SUBJECTS={"Physics":{"icon":"⚛️","desc":"Matter, energy, space, time, forces and the laws that describe nature.","lessons":[["What does physics study?","Physics looks for patterns in nature and describes them using observations, experiments and mathematical models.","A force is a push or pull that can change an object's motion. Gravity is a force between masses.","What forces act on a ball after you throw it upward?","Think about gravity and air resistance."],["Motion and speed","Motion describes how an object's position changes over time.","Speed tells us how much distance an object covers per unit of time. Velocity also includes direction.","How is speed different from velocity?","Velocity includes direction."],["Energy","Energy is the capacity to cause change.","Kinetic energy is associated with motion; potential energy depends on position or arrangement. Energy can be transferred and transformed.","Where does the energy of a falling object go?","It can become kinetic energy and later other forms such as heat or sound."],["Gravity and orbits","Gravity affects falling objects and the motion of planets, moons and satellites.","An orbit is continuous free-fall around a massive body, with gravity continually changing the object's direction.","Why doesn't the Moon simply fall straight into Earth?","It is falling toward Earth while its sideways motion carries it around Earth."]]},"Chemistry":{"icon":"🧪","desc":"Atoms, molecules, reactions and how matter changes.","lessons":[["What is matter made of?","Chemistry studies the composition, structure, properties and transformations of matter.","Atoms are building blocks of ordinary matter. Atoms can join through chemical bonds to form molecules.","How is melting ice different from burning wood?","Melting is a physical change; burning involves chemical reactions that form new substances."],["Atoms and elements","An element is a substance made of atoms with the same number of protons.","The periodic table organizes elements by atomic number and recurring properties.","What makes carbon different from oxygen?","Their atoms have different numbers of protons and therefore are different elements."],["Chemical bonds","Atoms can interact and form bonds that make stable structures.","Ionic bonding involves attraction between charged ions; covalent bonding involves sharing electrons.","Why do atoms form bonds?","Bonding can produce arrangements with lower energy and greater stability."],["Chemical reactions","Chemical reactions rearrange atoms into new combinations.","Reactants become products while the number of each kind of atom is conserved.","What does it mean to balance a chemical equation?","It means representing the same number of each type of atom on both sides."]]},"Biology":{"icon":"🧬","desc":"Life, evolution, cells, organisms and ecosystems.","lessons":[["What is life?","Biology is the scientific study of living things and their interactions.","Known living organisms are made of one or more cells. They use energy, respond to surroundings and populations can evolve.","What makes a plant a living thing?","Think about how it uses energy, grows, and responds to sunlight and water."],["Cells: the basic unit","Cells are organized structures surrounded by membranes and contain genetic information.","Prokaryotic cells lack a nucleus; eukaryotic cells have a nucleus and membrane-bound organelles.","Why do cells need membranes?","Membranes separate the cell from its environment and regulate exchange."],["DNA and heredity","DNA stores biological information used in cells.","Genes are DNA sequences that contribute to traits through their effects on molecules and development.","How can DNA influence a trait?","A gene can provide instructions for a functional RNA or protein, affecting cellular processes."],["Evolution by natural selection","Evolution is change in inherited characteristics of populations over generations.","Natural selection occurs when heritable variation affects survival or reproduction, changing trait frequencies over time.","How can evolution create complex adaptations without a plan?","Small inherited differences can be filtered by selection across many generations."]]},"History":{"icon":"🏛️","desc":"People, civilizations, institutions and ideas changing through time.","lessons":[["How do historians study the past?","History investigates past human lives using evidence and careful interpretation.","Sources include letters, laws, objects, buildings, images and oral accounts. Historians ask who created a source, when, why and with what limitations.","How might two sources describe the same event differently?","They may reflect different experiences, purposes, audiences or available information."],["Prehistory and archaeology","Prehistory refers to periods before written records in a particular context.","Archaeologists study material evidence such as tools, bones, buildings and sediments to reconstruct past lives.","What can a stone tool tell us?","It can provide clues about technology, activities and sometimes the environment of its makers."],["Agriculture and civilization","The domestication of plants and animals changed how many communities obtained food.","Farming could support larger settled populations, but it also brought new forms of labor, inequality and disease.","Why did agriculture change human societies so deeply?","It changed food production, settlement, population size, work and social organization."],["Empires and exchange","Empires connected large populations through political power, trade, migration and cultural exchange.","Expansion could spread languages, technologies and religions while also involving coercion, conflict and inequality.","How did trade routes help spread ideas and inventions between regions?","Think about what travellers carried besides goods, and how contact let people share knowledge."]]},"Economics":{"icon":"📈","desc":"Markets, incentives, resources and how people make choices.","lessons":[["What is economics?","Economics studies how people and societies make choices when resources are limited.","Because resources are scarce, choosing one use often means giving up another. This is opportunity cost.","What is opportunity cost?","It is the value of the next-best alternative you give up when making a choice."],["Supply and demand","Markets coordinate exchanges between buyers and sellers.","Demand describes how much buyers are willing and able to purchase at different prices; supply describes what sellers are willing and able to offer.","Why can a shortage push prices upward?","When demand exceeds available supply, buyers may compete for fewer units."],["Incentives","An incentive is something that changes the expected benefits or costs of an action.","Prices, rules, rewards and social consequences can all influence behavior.","Why do incentives sometimes have unintended effects?","People respond to the incentives they actually face, which may differ from the designer's intention."],["Trade and specialization","Trade allows people and societies to exchange goods and services.","Specialization can increase productivity when people focus on activities where they have comparative advantages.","Why can two countries both gain from trade?","They can specialize according to comparative advantage and exchange for other goods."]]},"Business":{"icon":"💼","desc":"Customers, value, money, marketing and how businesses solve real problems.","lessons":[["What is a business?","A business helps people solve a problem or meet a need by offering something useful.","A bakery sells bread, but the value is helping people get fresh food conveniently. A business needs customers who value the offer enough to pay for it.","What problem does a business solve for its customers?","Think about what the customer needs and why the offer is useful."],["Revenue, costs and profit","Revenue is the money a business receives from sales. Costs are what it spends. Profit is what remains after costs.","If a shop sells a bag for €30 and it costs €18 to buy and deliver it, €12 remains before other expenses such as advertising and tax.","Why can a business have high revenue but little profit?","Because its costs may also be high. Profit depends on revenue minus costs."],["Understanding customers","A customer is more likely to buy when an offer solves a real problem and feels worth the price.","A traveller may choose a toiletry bag because it keeps bottles upright, saves space, and makes packing easier.","How could you discover whether people really want a product?","Ask potential customers about their needs and observe what they already buy or struggle with."],["Testing a business idea","A small test helps you learn what customers want before spending too much money.","Before ordering 100 bags, a seller could show a sample to potential buyers, ask for feedback, or test a simple product page.","Why is testing an idea safer than guessing?","Testing gives evidence about demand before you commit more money."]]},"Technology":{"icon":"💻","desc":"Digital tools, systems, data and the ideas behind how technology works.","lessons":[["What is technology?","Technology is the use of knowledge and tools to solve problems or make tasks easier.","A map app combines GPS data, maps, and software to help you find a route instead of navigating entirely by memory.","How does technology help people solve a problem?","It combines tools or knowledge to make a task easier, faster, safer, or more reliable."],["How does the internet work?","The internet is a network of connected computers that send data to one another using shared rules.","When you open a website, your device sends requests through networks to a server, which sends back the files your browser displays.","Why do websites need servers?","A server stores or processes information and sends the requested data to your device."],["What is an algorithm?","An algorithm is a set of steps for solving a problem or completing a task.","A recipe is like an algorithm: follow ordered instructions and use the ingredients to produce a result.","Why does the order of steps matter in an algorithm?","Some steps depend on earlier steps, so changing the order can change or break the result."],["What is artificial intelligence?","Artificial intelligence is technology designed to perform tasks that usually require abilities such as recognizing patterns or generating language.","A photo app may recognize a face by finding patterns in an image; a language model predicts likely text based on patterns learned during training.","Why can an AI answer sound confident and still be wrong?","AI can generate plausible patterns without always checking whether every detail matches reality, so important claims need verification."]]},"Philosophy":{"icon":"💭","desc":"Knowledge, reality, ethics, meaning and how we reason.","lessons":[["What is philosophy?","Philosophy examines fundamental questions through careful reasoning, concepts and arguments.","Philosophers ask what we can know, what is real, what is right and how good arguments work.","What makes a philosophical question different from a factual question?","It often asks about concepts, assumptions, reasons or principles rather than only a measurable fact."],["How do we know?","Epistemology studies knowledge, belief and justification.","A claim can be true by luck without being well justified, so philosophers examine evidence and reasons.","Can a belief be true but unjustified?","Yes. A person can accidentally believe something true without having good evidence for it."],["Ethics and choices","Ethics examines questions about right action, values and obligations.","Different ethical theories emphasize consequences, duties, virtues or relationships.","Why can two people disagree morally even when they share a goal?","They may disagree about which principles or consequences should guide the choice."],["Arguments and reasoning","An argument gives reasons intended to support a conclusion.","Good reasoning requires clear premises and attention to whether the conclusion actually follows.","What is the difference between an opinion and an argument?","An argument provides reasons that can be examined; an opinion may simply state a view."]]}};
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
 ensureQuizStyles();
 document.getElementById('app').innerHTML=nav()+`<main class="hero"><a class="back" href="/">← Back to Learning Areas</a><h1>${d.icon} ${name}</h1><p class="muted">${d.desc}</p></main>
 <section class="panel"><div class="stats"><div class="stat"><strong>${done.length}</strong><span>lessons done</span></div><div class="stat"><strong>${d.lessons.length}</strong><span>lessons</span></div><div class="stat"><strong>${p}%</strong><span>progress</span></div><div class="stat"><strong>${s.scores[name]?.score||0}%</strong><span>quiz</span></div></div><div class="bar" style="margin-top:16px"><div style="width:${p}%"></div></div></section>
 <section class="panel course-panel"><div class="course-heading"><div><h2>Your lessons</h2><p class="muted">Open one lesson at a time. You can go at your own pace.</p></div><span class="course-count">${done.length}/${d.lessons.length}</span></div><div id="lessons">${d.lessons.map((l,i)=>lessonHTML(name,l,i,done.includes(i))).join('')}</div></section>
 <section class="panel"><h2>My notes</h2><textarea class="note" id="note" placeholder="Write what you understood, a question, or a connection...">${esc(s.notes[name]||'')}</textarea><div class="lesson-actions"><button onclick="saveNote()">Save notes</button><span id="saved" class="muted"></span></div></section>
 <section class="panel"><h2>Quick quiz</h2><p>Answer in your own words, then reveal the model answer.</p><div id="quiz"></div></section>
 <details class="home-details"><summary>🛟 Back up my learning data</summary><div class="home-notes"><p class="muted">Save a copy of your completed lessons, notes, quiz answers, reviews, and project progress. Keep the backup somewhere safe.</p><div class="lesson-actions"><button onclick="exportLearningBackup()">Download backup</button><button class="button secondary" onclick="document.getElementById('learningBackupFile').click()">Restore backup</button></div><input id="learningBackupFile" type="file" accept=".json,application/json" style="display:none" onchange="importLearningBackup(this)"><p class="muted" style="font-size:.8rem">Restoring replaces the learning data currently saved in this browser.</p><p id="backupStatus" class="muted" role="status"></p></div></details>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
 newQuestion();
 renderQuiz(name);
 const nextLesson=getNextLesson(),cont=document.getElementById("continueLearning");
 if(cont) cont.innerHTML=nextLesson?'<p class="muted">'+esc(nextLesson.name)+' · Lesson '+(nextLesson.i+1)+'</p><h3>'+esc(nextLesson.lesson[0])+'</h3><p class="muted">'+esc(nextLesson.lesson[1])+'</p><a class="button" href="/subjects/'+nextLesson.name.toLowerCase()+'/#lesson-'+nextLesson.i+'">Continue →</a>':'<p>🎉 You have completed every lesson currently in the course.</p>';
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
 return specs.map((spec,qi)=>{let wrong=uniqueChoices(spec.wrong||[],spec.correct).slice(0,3);for(const fallback of [...mis,...wrongScenario,fact1,fact2,scenarioAnswer]){if(wrong.length>=3)break;if(fallback!==spec.correct&&!wrong.includes(fallback))wrong.push(fallback)}if(wrong.length!==3)throw new Error("Not enough distinct choices: "+name+" / "+title+" / "+spec.skill);if(variant===1)wrong=wrong.slice(1).concat(wrong[0]);const options=[{text:spec.correct,correct:true},...wrong.map(text=>({text,correct:false,reason:spec.skill==="understand"?"This does not explain the situation as well as the correct answer: "+scenarioAnswer:spec.skill==="apply"?"This does not fit the new situation as well as: "+transfer[1]:"This option is less accurate because it conflicts with the key idea: "+fact1}))];const shift=(i*3+qi*2+Object.keys(SUBJECTS).indexOf(name)+(variant?1:0))%4;return {skill:spec.skill,q:spec.q,options:options.slice(shift).concat(options.slice(0,shift)),explain:spec.why}});
}
function lessonQuizHTML(name,i){
 const key=name+'-'+i,results=state().quizResults||{},saved=results[key],questions=lessonQuizQuestions(name,i,window.quizRetryVariant?.[key]||0),comparableSaved=saved&&saved.total===questions.length?saved:null;
 return `<section class="lesson-mcq" id="mcq-${i}">
  <div class="mcq-heading"><div><span class="lesson-label">KNOWLEDGE CHECK</span><h3>Test your understanding</h3><p>3 questions · Remember, understand and apply.</p></div><span class="mcq-score">${comparableSaved?'Best: '+saved.best+'/'+saved.total:questions.length+' questions'}</span></div>
  <form onsubmit="submitLessonQuiz(event,'${name}',${i})">
   ${questions.map((q,qi)=>`<fieldset class="mcq-question" id="mcq-question-${i}-${qi}"><legend>${qi+1}. ${esc(q.q)}</legend>${q.options.map((o,oi)=>`<label class="mcq-option"><input type="radio" name="mcq-${i}-${qi}" value="${oi}"><span>${esc(o.text)}</span></label>`).join('')}<p class="mcq-feedback" id="mcq-feedback-${i}-${qi}" hidden></p></fieldset>`).join('')}
   <div class="lesson-actions"><button type="submit">Check my score</button><button class="button secondary" type="button" onclick="retryMissedLessonQuiz('${name}',${i})" id="mcq-retry-missed-${i}" hidden>Retry missed questions</button><button class="button secondary" type="button" onclick="resetLessonQuiz(${i})">Try again</button></div>
  </form>
  <div class="mcq-result" id="mcq-result-${i}" role="status">${comparableSaved?'Last score: '+saved.correct+'/'+saved.total+' ('+Math.round(saved.correct/saved.total*100)+'%) · Best: '+saved.best+'/'+saved.total+' · Attempts: '+saved.attempts:''}</div>
 </section>`;
}
function lessonQuizFeedbackText(question,isCorrect){
 const right=question.options.findIndex(option=>option.correct);
 const clean=value=>String(value||"").replace(/[.!?]+$/,"").trim();
 const normalize=value=>String(value||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
 const correctAnswer=clean(question.options[right]?.text||"");
 const explanation=clean(question.explain||correctAnswer);
 const normalizedAnswer=normalize(correctAnswer),normalizedExplanation=normalize(explanation);
 const explanationRepeatsAnswer=normalizedAnswer===normalizedExplanation
  ||(normalizedAnswer.length>=28&&normalizedExplanation.includes(normalizedAnswer))
  ||(normalizedExplanation.length>=28&&normalizedAnswer.includes(normalizedExplanation));
 if(isCorrect)return "✓ Correct. "+(explanation||correctAnswer)+".";
 return "✗ Not quite. Correct answer: "+correctAnswer+"."+(explanation&&!explanationRepeatsAnswer?" "+explanation+".":"");
}
function submitLessonQuiz(event,name,i){
 event.preventDefault();
 const quizKey=name+'-'+i,savedBefore=state().quizResults?.[quizKey],retrySet=new Set(savedBefore?.missed||[]),baseQuestions=lessonQuizQuestions(name,i),alternateQuestions=lessonQuizQuestions(name,i,1),questions=baseQuestions.map((q,qi)=>window.quizRetryVariant?.[quizKey]===1&&retrySet.has(qi)?alternateQuestions[qi]:q),answers=[],missing=[];
 questions.forEach((q,qi)=>{const selected=document.querySelector('input[name="mcq-'+i+'-'+qi+'"]:checked');if(!selected)missing.push(qi+1);answers.push(selected?Number(selected.value):null)});
 const result=document.getElementById('mcq-result-'+i);
 if(missing.length){result.textContent='Please answer question'+(missing.length>1?'s ':' ')+missing.join(', ')+ ' before checking your score.';return}
 let correct=0,missed=[];
 questions.forEach((q,qi)=>{
  const chosen=answers[qi],right=q.options.findIndex(o=>o.correct),isCorrect=q.options[chosen].correct;if(isCorrect)correct++;else missed.push(qi);
  const feedback=document.getElementById('mcq-feedback-'+i+'-'+qi);
  feedback.hidden=false;feedback.className='mcq-feedback '+(isCorrect?'correct':'incorrect');
  feedback.textContent=lessonQuizFeedbackText(q,isCorrect);
 });
 const s=state();s.quizResults=s.quizResults||{};const key=name+'-'+i,previous=s.quizResults[key]||{attempts:0,best:0};
 const skillNames=questions.map(q=>q.skill||'understanding');const missedSkills=missed.map(qi=>skillNames[qi]);const comparableBest=previous.total===questions.length?(previous.best||0):0;const best=Math.max(comparableBest,correct);const mastered=correct===questions.length;const reviewDays=mastered?7:1;s.quizResults[key]={...previous,subject:name,index:i,correct,total:questions.length,best,attempts:(previous.attempts||0)+1,lastAnswers:answers,lastScore:correct,missed,missedSkills,mastered,conceptsToReview:[...new Set(missedSkills)],nextReviewAt:new Date(Date.now()+reviewDays*86400000).toISOString(),updatedAt:new Date().toISOString()};
 saveState(s);
 result.textContent='You got '+correct+' out of '+questions.length+' correct ('+Math.round(correct/questions.length*100)+'%). Best: '+s.quizResults[key].best+'/'+questions.length+' · Attempts: '+s.quizResults[key].attempts+'. Your score is saved on this device.';
 const score=document.querySelector('#mcq-'+i+' .mcq-score');if(score)score.textContent='Best: '+s.quizResults[key].best+'/'+questions.length;
 const retry=document.getElementById('mcq-retry-missed-'+i);if(retry)retry.hidden=missed.length===0;
}
function retryMissedLessonQuiz(name,i){
 const s=state(),key=name+'-'+i,saved=s.quizResults?.[key],missed=saved?.missed||[];
 if(!missed.length){resetLessonQuiz(i);return}
 window.quizRetryVariant=window.quizRetryVariant||{};window.quizRetryVariant[key]=1;
 const alternate=lessonQuizQuestions(name,i,1);
 missed.forEach(qi=>{
  const field=document.getElementById('mcq-question-'+i+'-'+qi),q=alternate[qi];
  if(field&&q){field.innerHTML='<legend>'+(qi+1)+'. '+esc(q.q)+'</legend>'+q.options.map((o,oi)=>'<label class="mcq-option"><input type="radio" name="mcq-'+i+'-'+qi+'" value="'+oi+'"><span>'+esc(o.text)+'</span></label>').join('')+'<p class="mcq-feedback" id="mcq-feedback-'+i+'-'+qi+'" hidden></p>';}
 });
 const retry=document.getElementById('mcq-retry-missed-'+i);if(retry)retry.hidden=true;
 const result=document.getElementById('mcq-result-'+i);if(result)result.textContent='Retry only the questions you missed, then check your score again.';
 const first=document.getElementById('mcq-question-'+i+'-'+missed[0]);if(first)first.scrollIntoView({behavior:'smooth',block:'center'});
}
function resetLessonQuiz(i){
 document.querySelectorAll('#mcq-'+i+' input[type="radio"]').forEach(input=>input.checked=false);
 document.querySelectorAll('#mcq-'+i+' .mcq-feedback').forEach(el=>{el.hidden=true;el.textContent='';});
 const retry=document.getElementById('mcq-retry-missed-'+i);if(retry)retry.hidden=true;
 const result=document.getElementById('mcq-result-'+i);if(result)result.textContent='Choose an answer for each question, then check your score.';
}
function lessonHTML(name,l,i,isDone){
 const teaching=teacherContent(name,l);
 const r=state().review?.[name+'-'+i],due=r&&new Date(r.nextReview)<=new Date();
 const scheduled=r&&!due;
 return `<article class="lesson ${isDone?'lesson-done':''}" id="lesson-${i}">
 <button class="lesson-summary" type="button" aria-expanded="false" onclick="openLesson(${i})">
  <span class="lesson-number">${isDone?'✓':i+1}</span>
  <span class="lesson-summary-copy"><strong>${esc(l[0])}</strong><small>${esc(l[1])}</small></span>
  <span class="lesson-chevron">+</span>
 </button>
 <div class="lesson-body">
  <div class="teacher-card teacher-simple"><span class="lesson-label">IN SIMPLE WORDS</span><p>${esc(teaching.simple)}</p></div><div class="teacher-card teacher-example"><span class="lesson-label">A REAL-WORLD EXAMPLE</span><p>${esc(teaching.example)}</p></div><div class="teacher-why"><span class="lesson-label">WHY IT WORKS</span><p>${esc(whyItWorks(name,l))}</p></div>
  <div class="question"><span class="lesson-label">THINK ABOUT IT</span><p>${esc(l[3])}</p>
   <button class="hint-toggle button secondary" onclick="toggleHint(${i})">💡 Need a hint?</button><p id="hint-${i}" class="lesson-hint" hidden>${esc(l[4])}</p>
   <textarea class="answer" id="answer-${i}" placeholder="Try explaining your answer in your own words…">${esc((state().answers?.[name]?.[i])||'')}</textarea>
   <div class="lesson-actions"><button onclick="checkAnswer('${name}',${i})">Check my answer</button><button class="button secondary" onclick="showModelAnswer('${name}',${i})">Show example answer</button></div>
   <div id="feedback-${i}" class="feedback" hidden></div>
  </div>
  ${lessonQuizHTML(name,i)}
  <button class="text-action" onclick="toggleExplanation(${i})">Explain this more simply</button>
  <p id="explain-${i}" class="simple-explanation" hidden><strong>In simple words</strong><br>${esc(l[1])}<br><br><strong>Try this example</strong><br>${esc(l[2])}<br><br><strong>Why it matters</strong><br>Connect the idea to something you can observe in everyday life. Then explain it in your own words.</p>
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
 el.scrollIntoView({behavior:'smooth',block:'start'});
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
 const projectIds=Object.keys(PROJECTS).sort((a,b)=>{const pa=projectProgress(a),pb=projectProgress(b),rank=x=>x>0&&x<100?0:x===0?1:2;return rank(pa)-rank(pb)||pb-pa;}).slice(0,2);
 document.title='My Learning OS';
 if(!document.getElementById('calm-dashboard-styles')){
  const style=document.createElement('style');style.id='calm-dashboard-styles';style.textContent=`
   .topbar{margin-bottom:8px}
   .home-welcome{margin:0 0 9px;padding:0 1px}
   .home-welcome>small{font-size:.65rem;letter-spacing:.1em;font-weight:800;color:var(--garden-clay,#a96f4c)}
   .home-welcome h1{font-family:Georgia,"Times New Roman",serif;font-size:clamp(1.7rem,4.8vw,2.05rem);font-weight:400;line-height:1.1;margin:3px 0}
   .home-welcome p{margin:3px 0 0;color:#776d62;font-size:.88rem}
   .home-overview{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:8px;margin:8px 0 18px}
   .home-progress,.home-overview .home-review{background:#fffdf9;border:1px solid var(--garden-line,#e7dfd4);border-radius:13px;padding:9px;min-width:0}
   .home-progress-top{display:flex;align-items:center;justify-content:space-between;gap:5px;margin-bottom:7px;color:#62584e;font-size:.76rem}
   .home-progress-top strong{font-family:Georgia,serif;font-size:1.2rem;font-weight:400;color:var(--garden-clay,#a96f4c)}
   .home-progress .bar{height:5px;margin-bottom:6px}
   .home-progress>small{font-size:.68rem;color:#776d62}
   .home-overview .home-review{margin:0;box-shadow:none;gap:6px;align-items:center}
   .home-overview .home-review>span:first-child{font-size:1.15rem;flex-shrink:0}
   .home-overview .home-review>span:nth-child(2){min-width:0}
   .home-overview .home-review strong{font-size:.76rem;line-height:1.15;white-space:normal}
   .home-overview .home-review small{font-size:.66rem;line-height:1.2}
   .home-overview .home-review>b{font-size:1.05rem;flex-shrink:0}
   .home-section{margin:22px 0 26px}
   .home-section-heading{margin-bottom:10px}
   .home-section-heading h2{font-size:1.35rem}
   .home-subject-grid{gap:9px}
   .home-subject,.home-project{box-shadow:none}
   .home-weekly{display:none!important}
   @media(max-width:420px){.home-overview{grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:7px}.home-progress,.home-overview .home-review{padding:8px}.home-progress-top{font-size:.7rem}.home-progress-top strong{font-size:1.1rem}.home-progress>small{font-size:.64rem}.home-overview .home-review{gap:5px}.home-overview .home-review>span:first-child{font-size:1.05rem}.home-overview .home-review strong{font-size:.7rem}.home-overview .home-review small{font-size:.62rem}}
  `;document.head.appendChild(style);
 }
 document.getElementById('app').innerHTML=nav()+`
 <section class="home-welcome">
  <small>MY LEARNING SPACE</small>
  <h1>Welcome back.</h1>
  <p>One small step at a time.</p>
 </section>
 ${next?`<a class="continue-card" href="/subjects/${next.name.toLowerCase()}/#lesson-${next.i}"><span class="continue-icon">${next.icon}</span><span class="continue-copy"><small>YOUR NEXT STEP</small><strong>Continue learning</strong><span>${next.name} · Lesson ${next.i+1}: ${esc(next.lesson[0])}</span></span><b>Continue →</b></a>`:'<section class="continue-card all-done"><span class="continue-icon">🎉</span><span class="continue-copy"><small>GREAT WORK</small><strong>All lessons completed</strong><span>Choose a subject to revisit or explore a project.</span></span><b>Explore →</b></section>'}
 <section class="home-overview" aria-label="Learning progress">
  <div class="home-progress"><div class="home-progress-top"><span>Overall progress</span><strong>${pct}%</strong></div><div class="bar"><div style="width:${pct}%"></div></div><small>${st.lessons} of ${st.total} lessons completed</small></div>
  <a class="home-review" href="/review.html"><span>🧠</span><span><strong>${reviewDue} to review</strong><small>${streak} day streak</small></span><b>→</b></a>
 </section>
 <section class="home-section" id="learning-areas">
  <div class="home-section-heading"><div><small class="muted">CHOOSE WHAT TO EXPLORE</small><h2>Learning areas</h2></div></div>
  <div class="home-subject-grid">${Object.entries(SUBJECTS).map(([n,d])=>`<a class="home-subject" href="/subjects/${n.toLowerCase()}/" onclick="sessionStorage.setItem('myLearningOS.homeScroll',String(window.scrollY))"><span>${d.icon}</span><strong>${n}</strong><small>${subjectProgress(n)}% complete</small><div class="bar"><div style="width:${subjectProgress(n)}%"></div></div></a>`).join('')}</div>
 </section>
 <section class="home-section">
  <div class="home-section-heading"><div><small class="muted">LEARN BY DOING</small><h2>My projects</h2></div><a href="/projects.html">View all →</a></div>
  <div class="home-projects">${projectIds.map(id=>{const d=PROJECTS[id],p=projectState(id),done=(p.completed||[]).length,progress=projectProgress(id);return `<a class="home-project" href="/projects.html?project=${id}"><span class="home-project-icon">${d.icon}</span><span class="home-project-info"><strong>${d.title}</strong><small>${done}/${d.steps.length} steps · ${progress}%</small><span class="home-project-bar"><span style="width:${progress}%"></span></span></span><b>›</b></a>`}).join('')}</div>
 </section>
 <details class="home-details"><summary>✨ Curiosity Lab</summary><div class="curiosity-panel"><p class="muted">A quick question to connect ideas and explore something new.</p><div id="curiosityCard" class="curiosity-card"><div class="curiosity-meta" id="curiosityMeta"></div><div class="curiosity-question" id="questionBox">Loading a question…</div><div class="curiosity-clue" id="curiosityClue"></div><div class="curiosity-actions"><button class="button" onclick="showCuriosityClue()">💡 Give me a clue</button><button class="button secondary" onclick="newQuestion()">↻ New question</button><a id="curiosityLesson" class="button secondary" href="#">Explore lesson →</a></div></div></div></details>
 <details class="home-details"><summary>📝 My notes</summary><div class="home-notes"><p class="muted">Capture an idea or connection. Notes stay in this browser.</p><textarea class="note" id="homeNote" placeholder="An idea I want to remember…">${esc(state().notes.home||'')}</textarea><div class="lesson-actions"><button onclick="saveHomeNote()">Save notes</button></div></div></details>
 <footer>My Learning OS · Learn → Connect → Question → Understand</footer>`;
 const savedHomeScroll=sessionStorage.getItem('myLearningOS.homeScroll');if(savedHomeScroll!==null){sessionStorage.removeItem('myLearningOS.homeScroll');requestAnimationFrame(()=>window.scrollTo(0,Number(savedHomeScroll)||0));}
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
function getQuizReviewItems(){
 const s=state(),now=new Date(),items=[];
 Object.entries(s.quizResults||{}).forEach(([key,result])=>{
  if(!result?.nextReviewAt||!result.subject||!Number.isInteger(result.index))return;
  const subject=SUBJECTS[result.subject],lesson=subject?.lessons[result.index];
  if(!lesson)return;
  const nextReviewAt=new Date(result.nextReviewAt);
  if(Number.isNaN(nextReviewAt.getTime()))return;
  items.push({key,subject:result.subject,index:result.index,lesson,result,nextReviewAt,due:nextReviewAt<=now});
 });
 return items.sort((a,b)=>a.nextReviewAt-b.nextReviewAt);
}
function renderReview(){
 const s=state(),now=new Date(),dueLessons=getDueReviews(),quizReviews=getQuizReviewItems();
 const lessonSchedules=Object.values(s.review||{}).filter(r=>r&&r.nextReview&&SUBJECTS[r.subject]?.lessons[r.index]).map(r=>({type:'lesson',subject:r.subject,index:r.index,lesson:SUBJECTS[r.subject].lessons[r.index],date:new Date(r.nextReview),score:null})).filter(x=>!Number.isNaN(x.date.getTime()));
 const dueQuizReviews=quizReviews.filter(x=>x.due),upcomingQuizReviews=quizReviews.filter(x=>!x.due);
 const dueItems=[
  ...dueLessons.map(x=>({type:'lesson',subject:x.n,index:x.i,lesson:x.l,date:new Date(x.review.nextReview),score:null})),
  ...dueQuizReviews.map(x=>({type:'quiz',subject:x.subject,index:x.index,lesson:x.lesson,date:x.nextReviewAt,score:(x.result.lastScore??x.result.correct??0)+'/'+(x.result.total??3)}))
 ];
 const upcomingItems=[
  ...lessonSchedules.filter(x=>x.date>now),
  ...upcomingQuizReviews.map(x=>({type:'quiz',subject:x.subject,index:x.index,lesson:x.lesson,date:x.nextReviewAt,score:(x.result.lastScore??x.result.correct??0)+'/'+(x.result.total??3)}))
 ].sort((a,b)=>a.date-b.date);
 const uniqueDue=dueItems.filter((x,i,a)=>a.findIndex(y=>y.type===x.type&&y.subject===x.subject&&y.index===x.index)===i);
 const uniqueUpcoming=upcomingItems.filter((x,i,a)=>a.findIndex(y=>y.type===x.type&&y.subject===x.subject&&y.index===x.index)===i);
 const nextItem=uniqueDue[0]||uniqueUpcoming[0];
 const nextHref=nextItem?'/subjects/'+nextItem.subject.toLowerCase()+'/#lesson-'+nextItem.index:'/#learning-areas';
 const reviewRow=x=>'<article class="memory-review-row"><div class="memory-review-icon" aria-hidden="true">'+SUBJECTS[x.subject].icon+'</div><div class="memory-review-copy"><small>'+esc(x.subject)+' · '+(x.type==='quiz'?'Quiz review':'Lesson review')+'</small><h3>'+esc(x.lesson[0])+'</h3><p>Next review · '+formatDate(x.date.toISOString())+(x.score?' · Last score '+esc(String(x.score)):'')+'</p></div><a class="memory-review-link" href="/subjects/'+x.subject.toLowerCase()+'/#lesson-'+x.index+'">Open →</a></article>';
 document.getElementById('app').innerHTML=nav()+`<section class="hero memory-hero"><p class="memory-eyebrow">MY LEARNING OS · MEMORY</p><h1>🧠 Today's review</h1><p class="muted">A little practice today builds lasting knowledge.</p></section>
 <section class="panel memory-dashboard">
  <div class="memory-stats">
   <div class="memory-stat"><strong>${uniqueDue.length}</strong><span>Due today</span></div>
   <div class="memory-stat"><strong>${uniqueDue.length+uniqueUpcoming.length}</strong><span>Scheduled</span></div>
   <div class="memory-stat"><strong>${uniqueDue.length*2} min</strong><span>Estimated</span></div>
  </div>
  <section class="memory-start"><div class="memory-start-icon" aria-hidden="true">🧠</div><div class="memory-start-copy"><h2>Ready to strengthen your memory?</h2><p>Review your due concepts across your learning subjects.</p></div><a class="button memory-start-button" href="${nextHref}">${uniqueDue.length?'Start review →':'View next review →'}</a></section>
  <section class="memory-coming"><h2>Coming up</h2>${uniqueUpcoming.slice(0,5).map(reviewRow).join('')||'<div class="empty">No upcoming reviews yet. Complete a lesson or quiz to schedule your next review.</div>'}</section>
  ${uniqueDue.length?'<section class="memory-coming"><h2>Due now</h2>'+uniqueDue.map(reviewRow).join('')+'</section>':''}
 </section>
 <section class="panel memory-how"><h2>How your review grows</h2><p>After a lesson, the first review is scheduled for tomorrow. As you remember concepts successfully, the interval grows: 1 day → 3 days → 7 days → 14 days → 30 days. Quiz reviews adapt to your result.</p></section>
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

// Remember the dashboard's position when navigating away from Home. Do not overwrite it from other pages.
function saveHomeScrollOnLeave(){
 const path=location.pathname;
 if(path==='/'||path==='/index.html'){
  try{sessionStorage.setItem('myLearningOS.homeScroll',String(window.scrollY));}catch{}
 }
}
window.addEventListener('pagehide',saveHomeScrollOnLeave);

function boot(){const path=location.pathname;const match=path.match(/subjects\/([^/]+)/);document.body.dataset.subject=match?match[1].replace(/^./,c=>c.toUpperCase()):'';const app=document.getElementById('app');if(!app)return;try{if(path.includes('/subjects/'))renderSubject(document.body.dataset.subject);else if(path.includes('knowledge.html'))renderMap();else if(path.includes('review.html'))renderReview();else if(path.includes('projects.html')){const id=new URLSearchParams(location.search).get('project');id?renderProjectDetail(id):renderProjects();}else if(path.includes('search.html'))renderSearch();else if(path.includes('tutor.html'))renderTutor();else renderHome()}catch(error){console.error('My Learning OS failed to render:',error);document.title='My Learning OS';app.innerHTML='<main style="max-width:620px;margin:36px auto;padding:22px;font-family:system-ui,sans-serif;color:#222"><h1 style="font-size:1.6rem">Your learning page could not load</h1><p>We hit a loading error. Your saved learning progress has not been deleted.</p><p style="color:#666">Technical detail: '+String(error&&error.message||error).replace(/[&<>\"']/g,function(ch){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","\'":"&#39;"}[ch]})+'</p><a href="/" style="display:inline-block;padding:12px 16px;background:#4f46e5;color:white;text-decoration:none;border-radius:12px">Back to My Learning OS</a></main>'}}
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
 const backup={app:'My Learning OS',version:1,exportedAt:new Date().toISOString(),data:state()};
 const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'});
 const url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download='my-learning-os-backup-'+new Date().toISOString().slice(0,10)+'.json';
 document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 const status=document.getElementById('backupStatus');if(status)status.textContent='Backup downloaded. Keep the file somewhere safe.';
}
function importLearningBackup(input){
 const file=input&&input.files&&input.files[0];if(!file)return;
 const status=document.getElementById('backupStatus'),reader=new FileReader();
 reader.onload=()=>{
  try{
   const backup=JSON.parse(String(reader.result||''));
   if(!backup||backup.app!=='My Learning OS'||!backup.data||typeof backup.data!=='object'||Array.isArray(backup.data))throw new Error('This does not look like a My Learning OS backup.');
   if(!confirm('Restore this backup? Your current My Learning OS data in this browser will be replaced.')){if(status)status.textContent='Restore cancelled. Your current data is unchanged.';return;}
   localStorage.setItem(KEY,JSON.stringify(backup.data));
   if(status)status.textContent='Backup restored. Reloading your learning space…';
   location.reload();
  }catch(error){if(status)status.textContent=error.message||'Could not read that backup. Please choose a valid My Learning OS backup file.';}
  finally{input.value='';}
 };
 reader.onerror=()=>{if(status)status.textContent='Could not read this file. Please try again.';input.value='';};
 reader.readAsText(file);
}
boot();