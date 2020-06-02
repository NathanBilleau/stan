<script>
    import { goto } from '@sveltech/routify'
    import ytThumb from 'youtube-img'
    import _ from 'lodash'
    import { selectedItems, score } from '../store'
    import content from '../content'

    import FullScreenBtn from '../components/FullScreenBtn.svelte'
    import HomeBtn from '../components/HomeBtn.svelte'
    import CloseBtn from '../components/CloseBtn.svelte'
    import StartPlaylist from '../components/StartPlaylist.svelte'
    import SideText from '../components/SideText.svelte'

    let myPlaylist = content

    if ($selectedItems.length !== 0) {
        myPlaylist = myPlaylist.filter((item, i) => {
            return $selectedItems.includes(i)
        })
    }

    let questions = []

    for (let item of myPlaylist) {
        for (let question of item.questions) {
            questions.push({
                img: ytThumb(item.video, 'maxres'),
                question: question.question,
                answers: question.answers
            }) 
        }
    }
    
    
    
    

    let currentQuestion = 0
    let currentAnswers = _.shuffle(questions[currentQuestion].answers)
    let answered = false
    let selectedAnswer

    function selectAnswer(a) {
        selectedAnswer = a
    }

    function check() {
        if (selectedAnswer !== undefined) {
        answered = true
            if (selectedAnswer === questions[currentQuestion].answers[0]) {
                $score ++
                $score = $score
            }
            else {
                console.log('bad');   
            }
        }
    }

    function nextQuestion() {
        answered = false
        selectedAnswer = undefined

        if (currentQuestion === questions.length - 1) {
            $goto('/')
        }
        else {
            currentQuestion ++
            currentAnswers = _.shuffle(questions[currentQuestion].answers)

            currentQuestion = currentQuestion
            currentAnswers = currentAnswers
        }
    }


</script>

<main>
    <div class="buttonsContainer">
        <HomeBtn />
        <FullScreenBtn />
        <CloseBtn />
    </div>
    
    <div class="score">
        <span>{$score}</span>
        <span>{questions.length}</span>
    </div>


    <h1>Question {currentQuestion + 1} sur {questions.length}</h1>

    {#if !answered}
        <h2>{questions[currentQuestion].question}</h2>

        <ul>
            {#each currentAnswers as answer, i}
                <li on:click={() => selectAnswer(answer)} class:selected={selectedAnswer === answer}>
                    <div>{i + 1}</div>
                    {answer}
                </li>
            {/each}
        </ul>

        <button on:click={check}>
            <span>Valider</span>
        </button>
    {:else}
        <img src={questions[currentQuestion].img} alt="">
        {#if selectedAnswer === questions[currentQuestion].answers[0]}
            <h2>Bien joué !</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione, eius voluptas autem dicta eveniet reprehenderit, nam, sunt quae fugit modi excepturi velit optio quasi iste non quos minima ducimus.</p>
        {:else}
            <h2>Mauvaise réponse</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione, eius voluptas autem dicta eveniet reprehenderit, nam, sunt quae fugit modi excepturi velit optio quasi iste non quos minima ducimus.</p>
        {/if}

        <button on:click={nextQuestion}>
            <span>Question suivante</span>
        </button>
    {/if}
    
    
    <SideText text="l'histoire du rap" />

</main>

<style>

main {
    background-color: #222;
    background-blend-mode: multiply;
}

h1 {
    font-weight: 400;
}

h2 {
    color: #fff;
    font-size: 1.5em;
    text-align: center;
}

h2, p {
    max-width: 60vw;
}

p {
    font-weight: 400;
}

h1, h2 {
    margin-bottom: 20px;
}

ul {
    color: #fff;
    list-style-type: none;
}

ul li {
    padding: 15px;
    border: 3px solid #fff;
    border-radius: 50px;
    margin-bottom: 20px;
    width: 50vw;
    display: grid;
    grid-template-columns: 50px auto;
    align-items: center;
    cursor: pointer;
}

ul li div {
    border: 2px solid #fff;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.selected div {
    background: #fff;
    color: #000;
}

button {
    background: rgb(255, 216, 58);
    color: #000;
    border-radius: 20px;
    padding: 10px 20px;
    display: block;
    width: fit-content;
    margin: 10px auto;
    text-decoration: none;
    text-transform: uppercase;
    font-family: var(--font);
    font-size: .9em;
    cursor: pointer;
    border:none;
    font-weight: 800;
}

button span {
    color: #000;
    display: inline-block;
}

.score {
    display: grid;
    grid-template-rows: 1fr 2fr 2fr;
    position: absolute;
    right: 50px;
    top: 100px;
}

.score::before {
    content: 'points';
    color: #fff;
    text-transform: uppercase;
    font-size: .8em;
}

.score span {
    color: #fff;
    text-align: center;
    font-size: 2em;
    font-weight: 800;
}

.score span:first-of-type {
    border-bottom: 2px solid #fff;
}

img {
    height: 40vh;
    filter: grayscale(1);
}


</style>