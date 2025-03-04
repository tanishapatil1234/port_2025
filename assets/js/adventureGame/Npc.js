import GameEnv from "./GameEnv.js";
import Character from "./Character.js";
import Prompt from "./Prompt.js";

class Npc extends Character {
    constructor(data = null) {
        super(data);
        this.quiz = data?.quiz?.title; // Quiz title
        this.questions = Prompt.shuffleArray(data?.quiz?.questions || []);
        
        // Add new questions
        this.questions.push(
            "What year was the first programming language made?\n1. 1403\n2. 2027\n3. 1942\n4. 2011",
            "What is the largest company by market cap?\n1. Target\n2. Apple\n3. Walmart\n4. Boeing",
            "Which of the following is NOT a programming language?\n1. Python\n2. CSS\n3. Java\n4. Ruby",
            "Which is a JavaScript data type?\n1. Car\n2. House\n3. Tree\n4. String"
        );
        
        this.currentQuestionIndex = 0; // Start from the first question
        this.alertTimeout = null;
        this.bindEventListeners();

        // Assuming the quiz data includes answers, store them if provided
        this.correctAnswers = data?.quiz?.answers || []; // Optional: Store correct answers if included
    }

    /**
     * Override the update method to draw the NPC.
     * This NPC is stationary, so the update method only calls the draw method.
     */
    update() {
        this.draw();
    }

    /**
     * Bind key event listeners for proximity interaction.
     */
    bindEventListeners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    /**
     * Handle keydown events for interaction.
     * @param {Object} event - The keydown event.
     */
    handleKeyDown({ key }) {
        switch (key) {
            case 'e': // Player 1 interaction
            case 'u': // Player 2 interaction
                this.shareQuizQuestion();
                break;
        }
    }

    /**
     * Handle keyup events to stop player actions.
     * @param {Object} event - The keyup event.
     */
    handleKeyUp({ key }) {
        if (key === 'e' || key === 'u') {
            // Clear any active timeouts when the interaction key is released
            if (this.alertTimeout) {
                clearTimeout(this.alertTimeout);
                this.alertTimeout = null;
            }
        }
    }

    /**
     * Get the next question in the shuffled array.
     * @returns {string} - The next quiz question.
     */
    getNextQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questions.length; // Cycle through questions
        return question;
    }

    /**
     * Handle proximity interaction and share a quiz question.
     */
    shareQuizQuestion() {
        const players = GameEnv.gameObjects.filter(obj => obj.state.collisionEvents.includes(this.spriteData.id));
        const hasQuestions = this.questions.length > 0;
        if (players.length > 0 && hasQuestions) {
            players.forEach(player => {
                if (!Prompt.isOpen) {
                    // Assign this NPC as the current NPC in the Prompt system
                    Prompt.currentNpc = this;
                    // Open the Prompt panel with this NPC's details
                    Prompt.openPromptPanel(this);
                }
            });
        }
    }

    /**
     * Optional: Method to check if an answer is correct (if Prompt doesn't handle this)
     * @param {string} playerAnswer - The player's submitted answer (e.g., '2' or '4')
     * @param {number} questionIndex - The index of the current question
     * @returns {boolean} - True if the answer is correct, false otherwise
     */
    checkAnswer(playerAnswer, questionIndex) {
        if (this.correctAnswers.length > 0) {
            return playerAnswer === this.correctAnswers[questionIndex];
        }
        // Default logic if no answers are provided in data
        const question = this.questions[questionIndex];
        if (question.includes("NOT a programming language")) {
            return playerAnswer === '2'; // CSS is not a programming language
        } else if (question.includes("JavaScript data type")) {
            return playerAnswer === '4'; // String is a JS data type
        }
        return false;
    }
}

export default Npc;
