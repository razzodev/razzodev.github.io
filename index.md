<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/libs/mdb.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/libs/awesomplete.css">
    <link rel="stylesheet" href="./css/style.css">
    <title>What's your learning style?</title>
</head>

<body>
    <!-- Headline -->
    <div id="headerCont" class="container mt-4">
        <h2>
            What's your learning style?
        </h2>
    </div>
    <!-- Quiz -->
    <div id="questionForm" class="container">
        <form id="quiz-body" onsubmit="return false">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">
                <div class="mt-5 mb-3">
                    <!-- back button -->
                    <button id="back-btn" class="btn btn-primary btn-lg " href="#carouselExampleControls" role="button"
                        data-slide="prev">
                        <span class="" aria-hidden="true">back</span>
                    </button>
                    <!-- next button -->
                    <button id="next-btn" class="btn btn-primary btn-lg" href="#carouselExampleControls" role="button"
                        data-slide="next">
                        <span class="" aria-hidden="true">next</span>
                    </button>
                    <!-- submit button -->
                    <button id="submitButton" class="btn btn-outline-primary  " onclick="calc()" disabled
                        style="float:right">Pending your answers</button>
                </div>
                <div class="continaer-fluid mt-30">
                    <div class="carousel-inner">
                        <!-- slide 1 - dropdown menu -->
                        <div id="traitsSlide" class="carousel-item active">
                            <div class="card d-block w-100" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">Pick the traits that describe you:</h5>
                                    <p class="card-text"></p>
                                    <div id="traits-container" class="form-group">
                                        <div class="row">
                                            <div class="col-4">
                                                <!-- chekboxes -->
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_0" type="checkbox" class="custom-control-input"
                                                        value="ambiguity">
                                                    <label for="traitsInput_0"
                                                        class="custom-control-label">Dealing with ambiguity</label>
                                                </div>
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_1" type="checkbox" class="custom-control-input"
                                                        value="decisionMaking">
                                                    <label for="traitsInput_1" class="custom-control-label">Decision
                                                        Making</label>
                                                </div>
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_2" type="checkbox" class="custom-control-input"
                                                        value="emotionalIntelligence">
                                                    <label for="traitsInput_2" class="custom-control-label">Emotional
                                                        Intelligence</label>
                                                </div>
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_3" type="checkbox" class="custom-control-input"
                                                        value="goalSetting">
                                                    <label for="traitsInput_3" class="custom-control-label">Goal
                                                        Setting</label>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_4" type="checkbox" class="custom-control-input"
                                                        value="infoGather">
                                                    <label for="traitsInput_4" class="custom-control-label">Information
                                                        Gathering</label>
                                                </div>
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_5" type="checkbox" class="custom-control-input"
                                                        value="leadership">
                                                    <label for="traitsInput_5"
                                                        class="custom-control-label">Leadership</label>
                                                </div>
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_6" type="checkbox" class="custom-control-input"
                                                        value="openMind">
                                                    <label for="traitsInput_6" class="custom-control-label">Open
                                                        Minded</label>
                                                </div>
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_7" type="checkbox" class="custom-control-input"
                                                        value="problemSolving">
                                                    <label for="traitsInput_7" class="custom-control-label">Problem
                                                        Solving</label>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_8" type="checkbox" class="custom-control-input"
                                                        value="rational">
                                                    <label for="traitsInput_8"
                                                        class="custom-control-label">Rationality</label>
                                                </div>
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_9" type="checkbox" class="custom-control-input"
                                                        value="timeToReflect">
                                                    <label for="traitsInput_9"
                                                        class="custom-control-label">Self-Reflection</label>
                                                </div>
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_10" type="checkbox" class="custom-control-input"
                                                        value="timelyAction">
                                                    <label for="traitsInput_10" class="custom-control-label">Acting
                                                        on Time</label>
                                                </div>
                                                <div class="custom-control custom-checkbox custom-control-inline">
                                                    <input name="traitsInput" onchange="addTraitScores()"
                                                        id="traitsInput_11" type="checkbox" class="custom-control-input"
                                                        value="workInGroups">
                                                    <label for="traitsInput_11" class="custom-control-label">Work In
                                                        Groups</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="spectrumSlide" class="carousel-item">
                            <div class="card d-block w-100" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">Point to where you are in the spectrums:</h5>
                                    <p class="card-text"></p>
                                    <div id="slider-container" class="form-group">
                                        <label for="customRange2">Feeling</label> <label for="customRange2" style="float:right">Doing</label> <br>
                                        <input id="feelDoSlider" type="range" class="custom-range" min="0" max="6" id="customRange2">
                                        
                                        <label for="customRange2">Watching</label> <label for="customRange2" style="float:right">Thinking</label> <br>
                                        <input id="watchThinkSlider" type="range" class="custom-range" min="0" max="6" id="customRange2">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- slide 2 radio buttons -->
                        <div id="radioSlide" class="carousel-item radio-group">
                            <div id="" class="card d-block w-100" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">How do you like to learn?</h5>
                                    <p class="card-text"></p>
                                    <div id="" class="form-group">
                                        <div>
                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input name="learningSourceInput" onchange="addResourceScore()"
                                                    id="learningSourceInput_0" type="radio" class="custom-control-input"
                                                    value="accomodator" required="required">
                                                <label for="learningSourceInput_0" class="custom-control-label">An
                                                    active
                                                    workshop where I can learn
                                                    by doing.</label>
                                            </div>
                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input name="learningSourceInput" onchange="addResourceScore()"
                                                    id="learningSourceInput_1" type="radio" class="custom-control-input"
                                                    value="assimilator" required="required">
                                                <label for="learningSourceInput_1"
                                                    class="custom-control-label">Lectures,
                                                    articles, logical
                                                    instructions</label>
                                            </div>
                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input name="learningSourceInput" onchange="addResourceScore()"
                                                    id="learningSourceInput_2" type="radio" class="custom-control-input"
                                                    value="converger" required="required">
                                                <label for="learningSourceInput_2"
                                                    class="custom-control-label">Comprehensive
                                                    lingo and
                                                    visuals</label>
                                            </div>
                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input name="learningSourceInput" onchange="addResourceScore()"
                                                    id="learningSourceInput_3" type="radio" class="custom-control-input"
                                                    value="diverger" required="required">
                                                <label for="learningSourceInput_3" class="custom-control-label">Anything
                                                    visual
                                                    and
                                                    intuitive</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- slide 3 dropdown menu -->
                        <div id="teacherSlide" class="carousel-item">
                            <div class="card d-block w-100" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">My ideal teacher:</h5>
                                    <p class="card-text"></p>
                                    <div class="form-group">
                                        <label for="teacherInput"></label>
                                        <div>
                                            <select id="teacherInput" onchange="addTeacherScore()" name="teacherInput"
                                                class="custom-select" required="required">
                                                <option value=""></option>
                                                <option value="accomodator">Will mentor me and let me learn from my
                                                    own
                                                    experience</option>
                                                <option value="assimilator">Can model their thinking process in
                                                    their lectures
                                                </option>
                                                <option value="converger">Can set clear standards and goals</option>
                                                <option value="diverger">Is creative, sensitive &amp; facilitating
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- slide 4 text input -->
                        <div id="jobSlide" class="carousel-item">
                            <div class="card d-block w-100" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">What's your job?</h5>
                                    <p class="card-text"></p>
                                    <div class="form-group">
                                        <label for="jobInput"></label>
                                        <div class="input-group">
                                            <input id="jobSearchInput" name="jobInput" placeholder="search" type="text"
                                                required="required" class="form-control job-search-bar">
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </form>
    </div>
    <!-- container with results -->
    <div id="quizEnd" class="container" style="display: none;">
        <button id="restartBtn" class="btn btn-primary mt-2" href="javascript:window.location.reload(true)"
            onclick="window.location.reload(true);">Start Over</button>
        <!-- graphs -->
        <svg class="pie-chart"></svg>
        <svg class="radar-chart"></svg>
        <!-- details -->
        <ul class="nav nav-pills mb-4 mt-4" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                    aria-controls="pills-home" aria-selected="true">Initiating</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                    aria-controls="pills-profile" aria-selected="false">Analyzing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                    aria-controls="pills-contact" aria-selected="false">Deciding</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-other-tab" data-toggle="pill" href="#pills-other" role="tab"
                    aria-controls="pills-other" aria-selected="false">Creating</a>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="row">
                    <div class="tab-pane fade show active col-6" id="initiating" role="tabpanel"
                        aria-labelledby="initiating-tab">
                        If your learning style is Initiating, you prefer to learn from "hands-on" experience and real
                        life situations. You are willing to jump in and try out new and challenging experiences and will
                        volunteer for leadership on tasks. You are able to act quickly and decisively in a changing
                        environment without being caught in excessive deliberations. Because of your style you are
                        comfortable thinkng on your feet. Because you are willing to take risks, you are able to
                        identify new opportunities and generate possibilities for success at work and in life in
                        general. You have the ability to take initiative to start new projects, put ideas into practice,
                        and identify a course of action.
                        <br> <br>You learn best by tuning into the present circumstances and less from reflections about
                        past events or planning for future actions. Your tendency may be to act on "gut" feelings rather
                        than on logical analysis. In solving problems, you may rely more heavily on people for
                        information than on your own technical analysis. <br> <br> You thrive in dynamic learning spaces
                        where you can work with others to get assignments done, to set goals and to try out different
                        approaches to completing a project. You prefer teachers who take the role of coach or mentor in
                        helping you learn from your life experiences.
                    </div>
                    <div class="list-group col-6">
                        <a href="" class="list-group-item list-group-item-action disabled ttl">Learning Strengths</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Committing yourself to
                            objectives</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Seeking new opportunities</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Influencing and leading
                            others</a>
                        <br><br>
                        <a href="" class="list-group-item list-group-item-action disabled ttl">Learning Challenges</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Controlling the impulse to
                            act</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Listening to others views
                        </a>
                        <a href="" class="list-group-item list-group-item-action disabled">Impatience</a>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div class="row">
                    <div class="tab-pane fade show active col-6" id="analyzing" role="tabpanel"
                        aria-labelledby="analyzing-tab">
                        If Analyzing is your learning style, you are best at taking in a wide range of information and
                        putting it into concise, logical form. You probably are less focused on people and more
                        interested in abstract ideas and concepts. Generally, people with this learning style find it
                        more important that a theory has logical soundness than practical value. You like to carefully
                        analyze and assess each step and weigh its relative consequence before taking action. Because
                        you like to plan ahead, you are able to minimize mistakes and anticipate potential problems and
                        pitfalls. <br><br>
                        When dealing with people or events, your approach is to rely on your logical and objective
                        understanding of the situation and avoid your feelings to get in the way of your sound judgments
                        <br><br>
                        Others may see you as logical, organized, reliable, careful, and thoughtful. <br><br>
                    </div>
                    <div class="list-group col-6">
                        <a href="" class="list-group-item list-group-item-action disabled ttl">Learning Strengths</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Organizing information</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Being logical and rational
                        </a>
                        <a href="" class="list-group-item list-group-item-action disabled">Building conceptual
                            models</a>
                        <br><br>
                        <a href="" class="list-group-item list-group-item-action disabled ttl">Learning Challenges</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Socializing with others</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Risk taking</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Dealing with lack of
                            structure </a>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div class="row">
                    <div class="tab-pane fade show active col-6" id="deciding" role="tabpanel"
                        aria-labelledby="deciding-tab">
                        If Deciding is your learning style, you are best at finding practical uses for ideas and
                        theories. You have the ability to solve problems and make decisions based on rational evaluation
                        of solutions to questions or problems. You are good at identifying flaws and mistakes in
                        concepts and ideas by testing them in the real world. You like to set clear goals, evaluate and
                        then decide on the best path to achieve them. Because you are efficient and focused, you tend
                        not to be distracted by what you consider to be tangential facts or information. This can
                        sometimes lead to missing important information or solving the wrong problem. <br><br>
                        Your focus is on technical problem-solving when working with others. When you work with people,
                        you tend to concentrate on helping them to solve their problems efficiently and effectively
                        rather on feelings and interpersonal issues. <br><br>
                        People may see you as focused, pragmatic, rational and decisive. <br><br> You may learn best in
                        learning spaces where you can experiment with new ideas, simulations, laboratory assignments,
                        and practical applications. You prefer teachers who set clear standards and goals and evaluate
                        with problems and questions that have right or wrong answers. <br><br>
                    </div>
                    <div class="list-group col-6">
                        <a href="" class="list-group-item list-group-item-action disabled ttl">Learning Strengths</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Problem Solving</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Evaluating Ideas and
                            Solutions </a>
                        <a href="" class="list-group-item list-group-item-action disabled">Setting Goals</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Making Decisions</a>
                        <br><br>
                        <a href="" class="list-group-item list-group-item-action disabled ttl">Learning Challenges</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Thinking 'out of the box'</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Sensitivity to people's
                            feelings</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Dealing with ambiguity</a>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">
                <div class="row">
                    <div class="tab-pane fade show active col-6" id="creating" role="tabpanel"
                        aria-labelledby="creating-tab">
                        If your learning style is Creating, you learn by stepping back from experiences to observe and
                        reflect on your feelings about what is going on. You have the ability to see things from
                        different perspectives and from many different points of view. Because of your sensitivity to
                        people’s feelings you are able to consider diverse opinions and views and bridge the
                        differences. You are comfortable with ambiguity and tend not to see situations in black and
                        white. Your approach to situations is to observe rather than take action. <br><br>
                        You are able to recognize patterns in events, relationships and group interactions and make
                        sense of what they mean. You probably have broad cultural interests and like to gather
                        information. You are good at imagining the implication of a particular course of action and
                        creating alternative paths and approaches. <br><br>
                        Others may see you as caring, accepting, creative, sensitive, and open-minded. <br><br>
                        You like working in groups where there is open and free flowing conversation where you can
                        gather information, listen with an open mind, and receiving personalized feedback. You may enjoy
                        situations that call for generating a wide range of ideas, such as brainstorming sessions. You
                        like teachers who take a facilitating role and are sensitive and creative.
                    </div>
                    <div class="list-group col-6">
                        <a href="" class="list-group-item list-group-item-action disabled ttl">Learning Strengths</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Awareness of people's
                            feelings and values </a>
                        <a href="" class="list-group-item list-group-item-action disabled">Listening with an open mind
                        </a>
                        <a href="" class="list-group-item list-group-item-action disabled">Imagining the implications of
                            ambiguous situations </a>
                        <a href="" class="list-group-item list-group-item-action disabled"></a>
                        <br><br>
                        <a href="" class="list-group-item list-group-item-action disabled ttl">Learning Challenges</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Decision making</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Taking leadership</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Timely action</a>
                    </div>
                </div>
            </div>
        </div>
        <br><br> <a href="./resources/2013KOLBSKLSI4.0GUIDE.pdf">Source: Kolb D. & Kolb A. (2013): The Kolb Learning
            Style Inventory 4.0: <br> Guide to Theory, Psychometrics, Research & Applications.</a>


    </div>

    <div class="container" style="height: 10vh;"></div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <script src="./js/libs/awesomplete.js"></script>
    <script src="./js/libsCustomization.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.xkcd@1.1/dist/chart.xkcd.min.js" crossorigin="anonymous"></script>
    <script>const myChart = new chartXkcd.Line(svg, { ...});</script>
    <script src="./js/data.js"></script>
    <script src="./js/functions.js"></script>
    <script src="./js/sandbox.js"></script>
    <script src="./js/init.js"></script>
    

</body>

</html>
