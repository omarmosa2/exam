// Application State
const state = {
    questions: [],
    selectedQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    totalQuestions: 0
};

// DOM Elements
const elements = {
    startScreen: document.getElementById('startScreen'),
    quizScreen: document.getElementById('quizScreen'),
    resultsScreen: document.getElementById('resultsScreen'),
    selectButtons: document.querySelectorAll('.select-btn'),
    customCountInput: document.getElementById('customCount'),
    startCustomBtn: document.getElementById('startCustomBtn'),
    currentQuestionSpan: document.getElementById('currentQuestion'),
    totalQuestionsSpan: document.getElementById('totalQuestions'),
    progressFill: document.getElementById('progressFill'),
    currentScoreSpan: document.getElementById('currentScore'),
    totalScoreSpan: document.getElementById('totalScore'),
    questionText: document.getElementById('questionText'),
    answersContainer: document.getElementById('answersContainer'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    finishQuizBtn: document.getElementById('finishQuizBtn'),
    finalScore: document.getElementById('finalScore'),
    percentage: document.getElementById('percentage'),
    correctCount: document.getElementById('correctCount'),
    wrongCount: document.getElementById('wrongCount'),
    performanceMessage: document.getElementById('performanceMessage'),
    restartBtn: document.getElementById('restartBtn')
};

// Load questions from JSON file
async function loadQuestions() {
    try {
        const response = await fetch('question.json');
        const data = await response.json();
        state.questions = data;
        console.log(`Loaded ${state.questions.length} questions successfully`);
    } catch (error) {
        console.error('Error loading questions:', error);
        alert('خطأ في تحميل الأسئلة / Error loading questions. Please make sure question.json exists.');
    }
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Select random questions
function selectRandomQuestions(count) {
    const shuffled = shuffleArray(state.questions);
    return shuffled.slice(0, count);
}

// Start quiz with selected number of questions
function startQuiz(count) {
    // Validate count
    const questionCount = count === 'all' ? state.questions.length : parseInt(count);
    
    if (questionCount <= 0 || questionCount > state.questions.length) {
        alert(`الرجاء إدخال عدد صحيح بين 1 و ${state.questions.length}\nPlease enter a valid number between 1 and ${state.questions.length}`);
        return;
    }
    
    // Initialize quiz state
    state.selectedQuestions = count === 'all' 
        ? shuffleArray(state.questions) 
        : selectRandomQuestions(questionCount);
    state.totalQuestions = state.selectedQuestions.length;
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.answers = new Array(state.totalQuestions).fill(null);
    
    // Update UI
    elements.totalQuestionsSpan.textContent = state.totalQuestions;
    elements.totalScoreSpan.textContent = state.totalQuestions;
    
    // Switch to quiz screen
    switchScreen('quiz');
    displayQuestion();
}

// Switch between screens
function switchScreen(screen) {
    elements.startScreen.classList.remove('active');
    elements.quizScreen.classList.remove('active');
    elements.resultsScreen.classList.remove('active');
    
    switch(screen) {
        case 'start':
            elements.startScreen.classList.add('active');
            break;
        case 'quiz':
            elements.quizScreen.classList.add('active');
            break;
        case 'results':
            elements.resultsScreen.classList.add('active');
            break;
    }
}

// Display current question
function displayQuestion() {
    const question = state.selectedQuestions[state.currentQuestionIndex];
    
    // Update question text
    elements.questionText.textContent = question.question;
    
    // Update progress
    elements.currentQuestionSpan.textContent = state.currentQuestionIndex + 1;
    const progress = ((state.currentQuestionIndex + 1) / state.totalQuestions) * 100;
    elements.progressFill.style.width = `${progress}%`;
    
    // Update score
    elements.currentScoreSpan.textContent = state.score;
    
    // Clear previous answers
    elements.answersContainer.innerHTML = '';
    
    // Create answer buttons
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.dataset.index = index;
        button.dataset.correct = answer.correct ? '1' : '0';
        
        // If question was already answered, show the result
        if (state.answers[state.currentQuestionIndex] !== null) {
            button.classList.add('disabled');
            const selectedAnswer = state.answers[state.currentQuestionIndex];
            
            if (index === selectedAnswer) {
                if (answer.correct) {
                    button.classList.add('correct');
                } else {
                    button.classList.add('wrong');
                }
            }
            
            // Also highlight the correct answer
            if (answer.correct) {
                button.classList.add('correct');
            }
        } else {
            // Add click event for unanswered questions
            button.addEventListener('click', handleAnswerClick);
        }
        
        elements.answersContainer.appendChild(button);
    });
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Handle answer click
function handleAnswerClick(event) {
    const button = event.target;
    const answerIndex = parseInt(button.dataset.index);
    const isCorrect = button.dataset.correct === '1';
    
    // Mark this question as answered
    state.answers[state.currentQuestionIndex] = answerIndex;
    
    // Update score if correct
    if (isCorrect) {
        state.score++;
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
        // Highlight the correct answer
        const correctButton = elements.answersContainer.querySelector('[data-correct="1"]');
        if (correctButton) {
            correctButton.classList.add('correct');
        }
    }
    
    // Disable all answer buttons
    const allButtons = elements.answersContainer.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => {
        btn.classList.add('disabled');
        btn.removeEventListener('click', handleAnswerClick);
    });
    
    // Update score display
    elements.currentScoreSpan.textContent = state.score;
    
    // Auto-advance to next question after a short delay (optional)
    // Uncomment the following lines if you want auto-advance
    // setTimeout(() => {
    //     if (state.currentQuestionIndex < state.totalQuestions - 1) {
    //         goToNextQuestion();
    //     }
    // }, 1500);
}

// Navigation functions
function goToPreviousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        displayQuestion();
    }
}

function goToNextQuestion() {
    if (state.currentQuestionIndex < state.totalQuestions - 1) {
        state.currentQuestionIndex++;
        displayQuestion();
    } else {
        // Quiz completed
        showResults();
    }
}

// Update navigation button states
function updateNavigationButtons() {
    // Previous button
    elements.prevBtn.disabled = state.currentQuestionIndex === 0;
    
    // Next button - change text on last question
    if (state.currentQuestionIndex === state.totalQuestions - 1) {
        elements.nextBtn.textContent = 'إنهاء / Finish 🏁';
    } else {
        elements.nextBtn.textContent = 'التالي / Next ⏭';
    }
}

// Show results screen
function showResults() {
    // Calculate based on answered questions only
    const answeredCount = state.answers.filter(answer => answer !== null).length;
    const wrongAnswers = answeredCount - state.score;
    const percentageScore = answeredCount > 0 
        ? Math.round((state.score / answeredCount) * 100) 
        : 0;
    
    // Update results
    elements.finalScore.textContent = `${state.score} / ${answeredCount}`;
    elements.percentage.textContent = `${percentageScore}%`;
    elements.correctCount.textContent = state.score;
    elements.wrongCount.textContent = wrongAnswers;
    
    // Performance message
    let message = '';
    let messageClass = '';
    
    if (percentageScore >= 90) {
        message = '🌟 ممتاز! أداء رائع! / Excellent! Outstanding performance!';
        messageClass = 'excellent';
    } else if (percentageScore >= 70) {
        message = '👏 جيد جداً! استمر في التقدم! / Very Good! Keep up the good work!';
        messageClass = 'good';
    } else if (percentageScore >= 50) {
        message = '👍 جيد! يمكنك تحسين أدائك / Good! You can improve your performance';
        messageClass = 'average';
    } else {
        message = '💪 يحتاج إلى مزيد من التدريب / Needs more practice';
        messageClass = 'poor';
    }
    
    elements.performanceMessage.textContent = message;
    elements.performanceMessage.className = `performance-message ${messageClass}`;
    
    // Switch to results screen
    switchScreen('results');
}

// Restart quiz
function restartQuiz() {
    switchScreen('start');
    elements.customCountInput.value = '';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', async () => {
    // Load questions
    await loadQuestions();
    
    // Start screen - predefined question counts
    elements.selectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const count = e.target.dataset.count;
            startQuiz(count);
        });
    });
    
    // Start screen - custom count
    elements.startCustomBtn.addEventListener('click', () => {
        const customCount = elements.customCountInput.value;
        if (customCount) {
            startQuiz(customCount);
        } else {
            alert('الرجاء إدخال عدد الأسئلة / Please enter number of questions');
        }
    });
    
    // Allow Enter key on custom input
    elements.customCountInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            elements.startCustomBtn.click();
        }
    });
    
    // Navigation buttons
    elements.prevBtn.addEventListener('click', goToPreviousQuestion);
    elements.nextBtn.addEventListener('click', goToNextQuestion);
    
    // Finish quiz button
    elements.finishQuizBtn.addEventListener('click', () => {
        const answeredCount = state.answers.filter(answer => answer !== null).length;
        
        if (answeredCount === 0) {
            alert('الرجاء الإجابة على سؤال واحد على الأقل قبل إنهاء الاختبار\nPlease answer at least one question before finishing the quiz');
            return;
        }
        
        const confirmFinish = confirm(
            `هل أنت متأكد من إنهاء الاختبار الآن؟\n` +
            `لقد أجبت على ${answeredCount} من ${state.totalQuestions} سؤال\n\n` +
            `Are you sure you want to finish the quiz now?\n` +
            `You have answered ${answeredCount} out of ${state.totalQuestions} questions`
        );
        
        if (confirmFinish) {
            showResults();
        }
    });
    
    // Restart button
    elements.restartBtn.addEventListener('click', restartQuiz);
    
    // Keyboard navigation (optional enhancement)
    document.addEventListener('keydown', (e) => {
        if (elements.quizScreen.classList.contains('active')) {
            if (e.key === 'ArrowLeft' && !elements.nextBtn.disabled) {
                goToNextQuestion();
            } else if (e.key === 'ArrowRight' && !elements.prevBtn.disabled) {
                goToPreviousQuestion();
            }
        }
    });
});