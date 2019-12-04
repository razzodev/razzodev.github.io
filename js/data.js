var learnerArray = ['accomodator','assimilator','converger','diverger'];
var learners = {};
var both = 'both';
var jobs = 'jobs';


// traits by categories. by index if the learner.
const traitsObj = {
    ambiguity: [false,true,false,true],
    decisionMaking: [true,true,true,false],
    emotionalIntelligence: [false,false,false,true],
    goalSetting: [true,true,true,false],
    infoGather: [false,true,false,false],
    leadership: [true,false,false,false],
    openMind: [false,false,false,true],
    problemSolving: [true,true,true,false],
    rational: [true,true,true,false],
    timeToReflect: [false,true,false,true],
    timelyAction: [true,false,true,false],
    workInGroups: [true,false,true,true],
};
// mdArray of matching jobs for learners
var jobList = [
        ["Butcher", "Chef/Cook", "Director", "Doctor", "Farmer", "Fisherman", "Janitor", "Locksmith", "Maid", "Marketer", "Nurse", "Photographer", "Salesperson", "Secratery", "Tailor", "Taxi Driver","Teacher", "Therapist", "Travel Agent", "Waiter/Waitress" ],
        ["Accountant", "Astronomer", "Attorney/Lawyer", "Chemist", "Cryptographer", "Judge", "Mathematition", "Pharmacist", "Philosopher", "Physicist", "Researcher", "Scientist" ],
        ["Architect", "Contractor", "Designer","Developer", "Electrition", "Engineer", "Entrepreneur", "Inventor", "Pilot", "Producer", "Programmer", ],
        ["Actor", "Animator", "Artist","Entertainer", "Hairdresser", "Historian", "Illustrator", "Lifeguard", "Linguist", "Model", "Musician", "Performer", "Psycologist", "Social Worker","Dancer" ]
    ];
    
// merge into single array and sort A-Z 
var jobListMerge = [].concat.apply([],jobList).sort();
// jobListMerge = jobListMerge.sort();

// activate awesomeplete feature
var jobSearch = document.getElementById('jobSearchInput');
var awesomplete = new Awesomplete(jobSearch);
awesomplete.list= jobListMerge;



