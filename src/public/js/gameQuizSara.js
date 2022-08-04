// Logica del quiz

// Variables
const question=document.querySelector('#question');
const choices=Array.from(document.querySelectorAll('.choice-text'));
//const progressText=document.querySelector('#progressText');
const scoreText=document.querySelector('#score');
//const progressBarFull=document.querySelector('#progressBarFull');
const image = document.createElement('img');

let currentQuestion={}
let acceptingAnswers=true
let score=0
let questionCounter=0
let availableQuestions=[]
let jirafa = "A. JIRAFA"
let mariposa = "B. MARIPOSA"
let caracol = "C. CARACOL"
let sara = "D. SARA"
// Variables 

// Preguntas del quiz con respuestas definidas
let questions=[
                    {
                        question:"¿Cómo se llama la oruga?",
                        choice1:'A. JIRAFA',
                        choice2:'B. MARIPOSA',
                        choice3:'C. CARACOL',
                        choice4:'D. SARA',
                        
                        answer:4,       
                    },

                    {
                        question:"¿En qué se convirtió la oruga?",
                        choice1:'A) JIRAFA',
                        choice2:'B) MARIPOSA',
                        choice3:'C) CARACOL',
                        choice4:'D) SARA',
                        answer:2,
                    },

                    {
                        question:"¿Quién tiene unas patas muy largas?",
                        choice1:'A) JIRAFA',
                        choice2:'B) MARIPOSA',
                        choice3:'C) CARACOL',
                        choice4:'D) SARA',
                        answer:1,      
                    },
    
                    {
                        question:"¿Quién es el amigo del loro?",
                        choice1:'A) JIRAFA',
                        choice2:'B) MARIPOSA',
                        choice3:'C) CARACOL',
                        choice4:'D) SARA',
                        answer:3,
                    }
                ]
// Preguntas del quiz con respuestas definidas

// Variables del marcador

const SCORE_POINTS=100
const MAX_QUESTIONS=4

// Variables del marcador

// Funcion para comenzar el quiz
startGame = () =>   {
                        questionCounter=0
                        score=0
                        availableQuestions = [...questions]
                        getNewQuestion()   
                    }
// Funcion para comenzar el quiz


// Funcion que permite ir a una nueva pregunta y a la pagina de resultados correspondiente
getNewQuestion = () =>  {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score)

        if(score==0){

            return window.location.assign('/fin_0pts')

        }else if(score==100){

            return window.location.assign('/fin_100pts')

            }else if(score==200){

                return window.location.assign('/fin_200pts')

            }else if(score==300){

                return window.location.assign('/fin_300pts')

            }else{
                return window.location.assign('/fin_400pts')
            }





}
// Funcion que permite ir a una nueva pregunta, en cada pagina se aloja una imagen diferente y a la pagina de resultados correspondiente   

// Contador que permite contabilizar el marcador y el numero de pregunta en donde cada pagina aloja una imagen diferente   
    questionCounter++
    //progressText.innerText=`Pregunta ${questionCounter} de ${MAX_QUESTIONS}`
    //progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    const questionsIndex = Math.floor(0* availableQuestions.length)
   
    if(questionCounter==1){

        image.src  ='img/imgSaraQuiz/gif/Sara.gif'
        document.querySelector('.containerImgSara').appendChild(image);
        document.getElementById('barra1').style.background = "#40BDA8";


    }else if(questionCounter==2){
        
        image.src  ='img/imgSaraQuiz/gif/Sara-durmiendo.gif'   
        var saraDurmiendo = document.querySelector('.containerImgSara').appendChild(image);
        //saraDurmiendo.style.width = '90vw';
        document.getElementById('barra2').style.background = "#40BDA8";
     


    }else if(questionCounter==3){
    
        image.src  ='img/imgSaraQuiz/gif/Jirafa.gif'
        document.querySelector('.containerImgSara').appendChild(image);
        document.getElementById('barra3').style.background = "#40BDA8";

    }else   {

        image.src  ='img/imgSaraQuiz/gif/Loro-y-caracol.gif'
        document.querySelector('.containerImgSara').appendChild(image);
        document.getElementById('barra4').style.background = "#40BDA8";
    }


        currentQuestion = availableQuestions[questionsIndex]
        question.innerText = currentQuestion.question

        choices.forEach(choice =>   {
                    const number = choice.dataset['number']
                    choice.innerText=currentQuestion['choice' + number]

        })

        availableQuestions.splice(questionsIndex, 1)
        acceptingAnswers = true





}
// Contador que permite contabilizar el marcador y el numero de pregunta en donde cada pagina aloja una imagen diferente 

// funcion que captura el evento click, se registra la respuesta correcta e incorrecta
choices.forEach(choice =>   {
    choice.addEventListener('click', e => {
        
   

        if(!acceptingAnswers) return
        acceptingAnswers =false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct':
        'incorrect'

        var containerSelect = selectedChoice.parentElement.innerText

        var concatmsj = 'mensaje' + containerSelect[0]
      
        /********************************CORRECTO HE INCORRECTO******************************** */

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
            var msj= ''
            var msjDivTrue = ''
            var opt = ''
            /* Palomita de correcto */ 
            var concat = "active" + containerSelect[0]
            var choicheContainer = document.getElementById(concat)
            var divTrue = document.createElement('div')
            divTrue.textContent = '✓'
            choicheContainer.appendChild(divTrue)
            
              /* mensajes correctos */
            switch(concatmsj){
                case 'mensajeA':
                    msj = 'msjATrue'
                    opt = document.getElementById(concatmsj)
                    msjDivTrue = document.createElement('div')
                    //msjDivTrue.textContent = "¡BIEN HECHO!"
                    opt.appendChild(msjDivTrue)
                    break
                case 'mensajeB':
                    msj = 'msjBTrue'
                    opt = document.getElementById(concatmsj)
                    msjDivTrue = document.createElement('div')
                    //msjDivTrue.textContent = "¡BIEN HECHO!"
                    opt.appendChild(msjDivTrue)
                    document.querySelector('.containerImgSara').removeChild(image);
                    image.src  ='img/imgSaraQuiz/gif/Sara-mariposa2.gif'
                    document.querySelector('.containerImgSara').appendChild(image);
                    break
                case 'mensajeC':
                    msj = 'msjCTrue'
                    opt = document.getElementById(concatmsj)
                    msjDivTrue = document.createElement('div')
                    //msjDivTrue.textContent = "¡BIEN HECHO!"
                    opt.appendChild(msjDivTrue)

                    
    
                    break
                case 'mensajeD':
                    msj = 'activeTextTrue'
                    opt = document.getElementById(concatmsj)
                    msjDivTrue = document.createElement('div')
                    msjDivTrue.textContent = "¡BIEN HECHO!"
                    opt.appendChild(msjDivTrue)
                   
                    break
                default:
                    break
                
            }
            document.getElementById(concatmsj).classList.add(msj)
            document.getElementById(concat).classList.add('circleTrue')
            selectedChoice.parentElement.classList.add(classToApply)
            setTimeout(() => {
                
                selectedChoice.parentElement.classList.remove(classToApply)
                document.getElementById(concat).classList.remove('circleTrue')
                document.getElementById(concatmsj).classList.remove('activeTextTrue')
                opt.removeChild(msjDivTrue)
                choicheContainer.removeChild(divTrue)
                getNewQuestion()
            },1100)

        }else{
            var concat = "active" + containerSelect[0]
            var choicheContainer = document.getElementById(concat)
            var divFalse = document.createElement('divFalse')
            divFalse.textContent = 'X'
            choicheContainer.appendChild(divFalse)
            
            document.getElementById(concat).classList.add('circleFalse')
            selectedChoice.parentElement.classList.add(classToApply)
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply)
                document.getElementById(concat).classList.remove('circleFalse')
                choicheContainer.removeChild(divFalse)
                getNewQuestion()
            },1100)
        }
       

    }) 


})
// funcion que captura el evento click, se registra la respuesta correcta e incorrecta



// se acomulan los resultados en el marcador
incrementScore = num => {
                            score +=num
                            scoreText.innerText = score
                        }
// se acomulan los resultados en el marcador

//Función para cambiar la barra por pregunta 



// Se inica el quiz
startGame()
// Se inica el quiz