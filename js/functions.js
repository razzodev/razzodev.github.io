// ----------------------------------------------
// add keys from the LearnerName array. 
// score, traits, jobs
// ---------------------------------------------
var createLearnerObj = function (arr,masterObj) {
    for (i=0;i<arr.length;i++){
        masterObj[arr[i]] = {
            score: 0,
            traits: {},
            jobs: [],
        };
    }
};

// ------------------------------------------------
// add the traits (keys and values) 
// to the corresponding learners.
// ------------------------------------------------
function addTraits (input) {
    input =='input';
    var traitKeys = Object.keys(traitsObj);
    var learnersKeys = Object.keys(learners);
    var valArray = Object.values(traitsObj);
    var traitIndex = traitKeys.indexOf(input);
    for (j=0;j<learnersKeys.length;j++){
        learners[learnerArray[j]].traits[input] = valArray[traitIndex][j];
    }
}

// -----------------------------------------------------
// adds jobs array from the a multidimentional array
// -----------------------------------------------------
function addJobArrayTolearners(key,twoDArray) {
    var a;
    var b =[];
    key == 'key';
    var obj = learners;
    var learnersKeys = Object.keys(learners);
    for (j=0;j<learnersKeys.length;j++){
        twoDArray[j] = twoDArray[j].map(function(x){ return x.toLowerCase() });
        obj[learnersKeys[j]][key] = twoDArray[j];
    }
};

// ---------------------------------
// (1) get all selected checkboxes
// (2) push to an array 
// ---------------------------------
var selCheckbox = () => {
    var checkedList = [];
    // (1)
    var checkedBox = document.querySelectorAll('input[type="checkbox"]');
    for (i=0;i<checkedBox.length;i++){
        if (checkedBox[i].checked == true){
            // (2)
            checkedList.push(checkedBox[i].value);
        }
    } return checkedList;
};

// ----------------------------------------------------------
// add checkbox inputs to learners' score.
// ----  (1) assign 'called' value to enable the submit button 
// ----  (2) b = simplyfied reference for checkbox 
// ----  (3) a = learner in learners object
// ----  (4) traitKeys[j] = each trait property in a traits object
// ----  (5) check if checkbox == to a true trait
// ----------------------------------------------------------
function addTraitScores() {
    // (1)
    addTraitScores.called = true;
    var a;
    var b;
    var obj = learners;
    var learnersKeys = Object.keys(obj);
    var traitKeys;
    var traitValue;
    selCheckbox();
    for (l=0;l<selCheckbox().length;l++){
        // (2)
        b = selCheckbox()[l];
        for (i=0;i<learnersKeys.length;i++){
            // (3)
            a = learnersKeys[i];
            traitKeys = Object.keys(obj[a].traits);
            for (j=0;j<traitKeys.length;j++){
                // (4)
                traitValue = obj[a].traits[traitKeys[j]];
                // (5)
                if (b == traitKeys[j] && traitValue == true){
                    obj[a].score +=3;
                } 
            }
        }
    } 
}
// ----------------------------------------------------------
// add range input. to three differnt learners on the spectrum.
// **could be less repetitative if i had more time**
// -----------------------------------------------------------
var addSliderScore= function (low,mid,high,value){
    addSliderScore.called = true;
    var newScore = 30; 
    if (value == 6){
        learners[high].score += newScore;
    }   else if (value == 5){
            learners[high].score += (newScore - 10);
            learners[mid].score += (newScore - 20);
        }   else if (value == 4) {
            learners[mid].score += (newScore - 10);
            learners[high].score += (newScore - 20);
            }   else if (value == 3){
                    learners[mid].score += newScore;
                }   else if(value == 2){
                        learners[mid].score += (newScore - 10);
                        learners[low].score += (newScore - 20);
                    }   else if(value == 1){
                            learners[mid].score += (newScore - 20);
                            learners[low].score += (newScore - 10);
                }           else {
                                learners[low].score += newScore;
                            }
                };
        



var feelDo = document.getElementById('feelDoSlider');;
var feelDoEvent = feelDo.addEventListener('mouseup',function(){
    addSliderScore('diverger','accomodator','converger',feelDo.value);
});
var watchThink = document.getElementById('watchThinkSlider');
var watchThinkEvent = watchThink.addEventListener('mouseup',function(){
    addSliderScore('diverger','assimilator','converger',watchThink.value);
});


// ----------------------------------------------------------
// get all radio buttons. 
// pass their value to an array if theyre checked
// -----------------------------------------------------------
var selResource = () => {
    var radioInput = 0;
    var allRadioInputs = document.querySelectorAll('input[type="radio"]');
    for (i=0;i<allRadioInputs.length;i++){
        if (allRadioInputs[i].checked == true){
            radioInput = (allRadioInputs[i].value);
            console.log(`your resource style: ${radioInput}`);
        }
    } return radioInput;
}

// ---------------------------------------------
// add radio input to score.
// --- looks up the learner name and
// --- compares with the radio input value
// ---------------------------------------------
var addResourceScore = () => {
    addResourceScore.called = true;
    var a;
    var obj = learners;
    var learnersKeys = Object.keys(obj);
    var selected = selResource();
    selected == 'selected';
    for (i=0;i<learnersKeys.length;i++){
        a = learnersKeys[i];
        if (a === selected){
            obj[a].score += 20;
        }
    } 
}


var selTeacher = () =>{
    return document.getElementById('teacherInput').value;
} 
// --------------------------------------
// adds dropdown menu input to score
// (same as radio input)
// --------------------------------------
var addTeacherScore = () => {
    addTeacherScore.called = true;
    var a;
    var obj = learners;
    var learnersKeys = Object.keys(obj);
    var selected = selTeacher();
    selected;
    console.log(`Your teacher: ${selected}`);
    for (i=0;i<learnersKeys.length;i++){
        a = learnersKeys[i];
        if (a === selected){
            obj[a].score += 20;    
        }
    } 
};


// ------------------------------------------
// add text input to score
// --- (1) get search bar input value
// --- (2) change to lowercase
// --- (3) check if input is included in job list
// ------------------------------------------
var addJobScore = () => {
    addJobScore.called = true;
    var a;
    var b;
    var obj = learners;
    var learnersKeys = Object.keys(obj);
    // (1)
    var input = document.getElementById('jobSearchInput').value;
    // (2)
    var jobInput = input.toLowerCase();
    for (i=0;i<learnersKeys.length;i++){
        a = learnersKeys[i];
        // (3) b = job array
        b = obj[a].jobs;
        if (b.includes(jobInput)){
            obj[a].score +=20;
        }
    }    
}
    

var jobResult = document.getElementById('jobSearchInput')
var jobEvent = jobResult.addEventListener('change', addJobScore);


