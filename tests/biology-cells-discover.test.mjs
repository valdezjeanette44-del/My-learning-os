import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import vm from 'node:vm';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function fn(s,name){const a=s.indexOf('function '+name+'('),b=s.indexOf('\nfunction ',a+10);return s.slice(a,b);}
test('Discover observation handles missing, correct, incorrect and changed answers without persistent writes',()=>{
 const feedback={textContent:''};let writes=0;
 const c=vm.createContext({document:{querySelector:()=>c.choice,getElementById:()=>feedback},localStorage:{setItem(){writes++;}},saveState(){writes++;}});
 vm.runInContext(fn(source,'clearCellsObservation')+fn(source,'revealCellsObservation'),c);
 vm.runInContext('revealCellsObservation()',c);assert.match(feedback.textContent,/Choose an observation/);
 for(const value of ['one','many','alive','boundaries']){c.choice={value};vm.runInContext('revealCellsObservation()',c);assert.match(feedback.textContent,value==='many'?/Exactly/:/image alone cannot establish/);vm.runInContext('clearCellsObservation()',c);assert.equal(feedback.textContent,'');}
 assert.equal(writes,0);assert.doesNotMatch(fn(source,'revealCellsObservation'),/state\(|save|recordReview|renderSubject/);
});
test('Discover precedes core, credits genuine microscopy, and retains its native temporary DOM',()=>{
 const c=vm.createContext({});vm.runInContext(fn(source,'cellsLessonIntroduction'),c);const html=vm.runInContext('cellsLessonIntroduction()',c);
 assert.ok(html.indexOf('cells-discover-title')<html.indexOf('id="cells-understand"'));
 assert.ok(html.indexOf('cells-microscopy-caption')<html.indexOf('class="cells-section-nav"'));
 assert.ok(html.indexOf('class="cells-section-nav"')<html.indexOf('class="cells-goals"'));
 assert.ok(html.indexOf('class="cells-goals"')<html.indexOf('id="cells-understand"'));
 assert.equal((html.match(/id="cells-opening"/g)||[]).length,1);
 assert.equal((html.match(/Your body contains trillions of cells/g)||[]).length,1);
 assert.match(html,/<figcaption id="cells-microscopy-caption">Moss leaf cells under a microscope\. Cell walls outline individual cells, while green chloroplasts carry out photosynthesis\.<\/figcaption>/);
 assert.match(html,/<summary>Microscopy source and image licence<\/summary><p>Specimen: <em>Plagiomnium affine<\/em> moss leaf\. The visible walls are not the cell membranes\. No calibrated scale is supplied here\.<\/p>/);
 for(const target of ['understand','compare','practice','reflect'])assert.ok(html.includes("scrollCellsSection('"+target+"')"));
 assert.match(html,/trillions of cells/);assert.match(html,/Plagiomnium affine/);assert.match(html,/not the cell membranes/);assert.match(html,/CC BY-SA 3.0/);assert.match(html,/colours unchanged/);
 assert.match(html,/alt="Microscope view/);assert.match(html,/<fieldset><legend>/);assert.equal((html.match(/onchange="clearCellsObservation\(\)"/g)||[]).length,4);assert.match(html,/id="cells-discover-feedback" role="status" aria-live="polite"/);
 assert.match(fn(source,'renderSubject'),/#cells-discover-practice/);assert.match(html,/scrollCellsSection\('understand'\)/);
});
test('production assessments, oxygen handlers, unrelated teaching and data paths remain byte-identical',()=>{
 // Fixed production hashes allow the same checks in a shallow CI checkout.
 const hash=text=>createHash('sha256').update(text).digest('hex');
 assert.equal(hash(source.slice(source.indexOf('const SUBJECTS='),source.indexOf('const STORAGE_RECOVERY_KEY='))),'23c27da4f2a27bae31f2c02cc23c698efa8692387fa57be7429e1bb6b0a15983');
 const expected={
 "clearCellsOxygenFeedback": "b9570241af384cde7e7e3891367cd115896488b0f8a8a4a016b491694553cbad",
 "reconsiderCellsOxygen": "687bd63b5c0fe468219e9c3dd4e69197cf79f44368058520b88bf485f28b9546",
 "explainCellsOxygen": "1c8de420ace9f7132ee8b08db17a344d1e0092ba540910d37cc2196d413811bc",
 "cellsLessonSummary": "eb85a67894df15eaf583bf67dc2d6d1557ca05f4f569145d37ad8e976c14f859",
 "lessonQuizQuestions": "44d4afecc9198dc8a9752a5df42f8c52dce61d6b2e721dfadd00f23c62644668",
 "saveAnswer": "4e7582d3beab35003de2182f31382b2826d1fdd0073e1519f29c254312587919",
 "saveNote": "fb4f977fc62e3d0c10733ea5f5972fbb0bcf9cc07bebf734e3a0d19bed24b36d",
 "completeLesson": "2cc08355c2ab2c2ef1748260470b4a87ef3164dddd92d76afefe8246d8f24089",
 "recordReview": "d99872f1f5535751e5dd08f50c5e2debcd4b15482e0d915844eee7a95dcef991",
 "finishReview": "f5a92d0285cb542c191670540c2e7d0545b3ab9ac637c5d4401295e10444eb31",
 "exportLearningBackup": "3ebc7efe222e1e73c3069b3dc5974a594db9a31fb9519fbd0033d11550ebacd3",
 "importLearningBackup": "19e92d7560eddb579a1fde25b58018c81ee7eeeb3d14de2516dbf104c7ad9d5b",
 "retryMissedLessonQuiz": "934c49347a2857762d005a11a602365c65bf3320eef631266d50b6bf662fb267",
 "resetLessonQuiz": "214b39bd7054c1ccb7ee0a0c5f460c02c272246e21068246a7da4fe697c7e169",
 "syncBiologyLessonHash": "23474e980cc5280e60ff56127cb13d59ad4f2722cd2910d4c1914f1e20fc92b8",
 "nav": "c5656348a61d5fb20c372223076b357d1ecd3d9f64b4712bc2e15eb2bcc22f56",
 "chemistryMatterIntroduction": "f86796365f180dedd65ac07bb26a0d76f844a170a3e12d06e5de9247a9ff5a2b",
 "chemistryAtomsIntroduction": "fe7b69d529e97eb3603c81a3a01dcc6c8ad0d8474d5e3e708d7259c9b2a0cee1",
 "chemistryBondsIntroduction": "c50215b0f37cc3b3860399e46afff769aabf8294b7fbd17a7e628d043b998103",
 "chemistryReactionsIntroduction": "4d6e5b879613fcaf7beacf89136b2446f2f4ad8b5518a343c20b3a75e5d69da7",
 "dnaLessonIntroduction": "7c3657de33f89ddabf837f5302990f94b15824edf4e6a23673bf789e03642be4",
 "lifeLessonIntroduction": "efcfcbce49b3628615ea22a7c82e1a01e33b1be97e28a868d95619a9f669e0f4",
 "selectionLessonIntroduction": "e903d2e965ca1c9f80354da1c5bfa303da43e8d256d45691222a0f2dab5157e3"
};
 for(const [name,digest] of Object.entries(expected))assert.equal(hash(fn(source,name)),digest,name);
});
