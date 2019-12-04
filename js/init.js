// create the initial object with four learner children
createLearnerObj(learnerArray,learners);

// repeated function. see extraComments.js , line 1-12
addTraits('leadership'); addTraits('emotionalIntelligence'); addTraits('workInGroups'); addTraits('problemSolving'); addTraits('goalSetting'); addTraits('decisionMaking'); addTraits('openMind'); addTraits('ambiguity'); addTraits('infoGather'); addTraits('timelyAction'); addTraits('rational'); addTraits('timeToReflect');

addJobArrayTolearners(jobs,jobList);

document.getElementById('submitButton').disabled='true';

// -------------------------------------------------------------------
// validate that all questions are answered to enable the submit button.
// also changes the button text and color
// -------------------------------------------------------------------
var checkifComplete = function(){
    var x = document.getElementById('submitButton');
    var disable = () => {
        x.disabled = true;
    }
    var enable = ()=> {
        x.disabled = false;
        x.className = 'btn btn-primary btn-lg';
        x.innerHTML = 'Click for your result';
    }
    if (x.disabled == true){
        if (addTraitScores.called &&
            addResourceScore.called &&
            addTeacherScore.called &&
            addJobScore.called){
            return enable(); 
        }  
    }
}



// listen to 'next button' - if its clicked - calls the function above
var nextButton = document.getElementById('next-btn').addEventListener('click',checkifComplete);
// ----------------------------------
// remove quiz form, calculate results, disply a result container.
// ----------------------------------
var calc = ()=>{
    document.getElementById('questionForm').style.display = 'none';
    document.getElementById('quizEnd').style.display = 'block';
    
    var r = [];
    var sum = 0;
    var obj = learners;
    var a = Object.keys(obj);
    for(x=0;x<a.length;x++){
        sum += (obj[a[x]].score);
        obj[a[x]].score;
        r.push(obj[a[x]].score);
        pieChart(r);
        radarChart(r);
        
    } ;
    learnerLabels.forEach(a => {
      console.log(`${a}`);
      let i = learnerLabels.indexOf(a);
      let d = r[i] / arrSum(r)
      console.log(`${Math.round(d*100) / 100}`);
    })

}

// ----------------------------------
// create graph
// ----------------------------------
var pieChart = function(d){
const svg = document.querySelector('.pie-chart');
const pieChart = new chartXkcd.Pie(svg, {
    title: 'Your learing style', // optional
    data: {
      labels: ['initiating', 'analyzing', 'deciding', 'creating'],
      datasets: [{
        data: d ,
      }],
    },
    options: { // optional
        showLabels:true,
      innerRadius: 0.4,
      legendPosition: chartXkcd.config.positionType.upRight,
    },
  });
}
// ----------------------------------
// create graph
// ----------------------------------
var radarChart = function(d){
const svg = document.querySelector('.radar-chart');
  
  const radarChart = new chartXkcd.Radar(svg, {
    title: 'See how you compared with raz',
    data: {
      labels: ['initiating', 'analyzing', 'deciding', 'creating'],
      datasets: [{
        label: 'you',
        data: d,
      }, {
        label: 'raz',
        data: [74, 65, 64, 55],
      }],
    },
    options: {
      showLegend: true,
      dotSize: 1,
      showLabels: true,
      legendPosition: chartXkcd.config.positionType.upRight,
      // unxkcdify: true,
    },
  });
}

const learnerLabels = ['initiating', 'analyzing', 'deciding', 'creating'];

const arrSum = arr => arr.reduce((a,b) => a + b, 0);
