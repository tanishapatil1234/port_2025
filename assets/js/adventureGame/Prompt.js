const Prompt = {
    isOpen: false,
    dim: false,

    backgroundDim: {
        create () {
            this.dim = true
            console.log("CREATE DIM")
            const dimDiv = document.createElement("div");
            dimDiv.id = "dim";
            dimDiv.style.backgroundColor = "black";
            dimDiv.style.width = "100%";
            dimDiv.style.height = "100%";
            dimDiv.style.position = "absolute";
            dimDiv.style.opacity = "0.8";
            document.body.append(dimDiv);
            dimDiv.style.zIndex = "9998"
            dimDiv.addEventListener("click", Prompt.backgroundDim.remove)
        },
        remove () {
            this.dim = false
            console.log("REMOVE DIM");
            const dimDiv = document.getElementById("dim");
            dimDiv.remove();
            Prompt.isOpen = false
            promptTitle.style.display = "none";
            promptDropDown.style.width = "0"; 
            promptDropDown.style.top = "0";  
            promptDropDown.style.left = "-100%"; 
            promptDropDown.style.transition = "all 0.3s ease-in-out";
        },
    },

    createPromptDisplayTable() {
        const table = document.createElement("table");
        table.className = "table prompt";
    
        // Header row for questions
        const header = document.createElement("tr");
        const th = document.createElement("th");
        th.colSpan = 2;
        th.innerText = "Answer the Questions Below:";
        header.appendChild(th);
        table.appendChild(header);
    
        // Question 1: Which of these is not a programming language?
        const q1Row = document.createElement("tr");
        const q1Cell = document.createElement("td");
        q1Cell.innerText = "1. Which of these is not a programming language?\n a) Python  b) CSS  c) Java  d) C++";
        q1Row.appendChild(q1Cell);
        const q1InputCell = document.createElement("td");
        const q1Input = document.createElement("input");
        q1Input.type = "text";
        q1Input.placeholder = "Enter a, b, c, or d";
        q1Input.dataset.questionIndex = "0";
        q1InputCell.appendChild(q1Input);
        q1Row.appendChild(q1InputCell);
        table.appendChild(q1Row);

        // Question 2: Which of these is a JavaScript data type?
        const q2Row = document.createElement("tr");
        const q2Cell = document.createElement("td");
        q2Cell.innerText = "2. Which of these is a JavaScript data type?\n a) Integer  b) Character  c) Decimal  d) String";
        q2Row.appendChild(q2Cell);
        const q2InputCell = document.createElement("td");
        const q2Input = document.createElement("input");
        q2Input.type = "text";
        q2Input.placeholder = "Enter a, b, c, or d";
        q2Input.dataset.questionIndex = "1";
        q2InputCell.appendChild(q2Input);
        q2Row.appendChild(q2InputCell);
        table.appendChild(q2Row);

        // Add submit button
        const submitRow = document.createElement("tr");
        const submitCell = document.createElement("td");
        submitCell.colSpan = 2;
        submitCell.style.textAlign = "center";
        const submitButton = document.createElement("button");
        submitButton.innerText = "Submit";
        submitButton.addEventListener("click", this.handleSubmit.bind(this));
        submitCell.appendChild(submitButton);
        submitRow.appendChild(submitCell);
        table.appendChild(submitRow);

        // Wrap the table in a scrollable container
        const container = document.createElement("div");
        container.style.maxHeight = "400px";
        container.style.overflowY = "auto";
        container.style.border = "1px solid #ccc";
        container.style.padding = "10px";
        container.appendChild(table);
        return container;
    },

    toggleDetails() {
        Prompt.detailed = !Prompt.detailed
        Prompt.updatePromptDisplay()
    },

    updatePromptTable() {
        return this.createPromptDisplayTable();
    },

    handleSubmit() {
        const inputs = document.querySelectorAll("input[type='text']");
        const answers = Array.from(inputs).map(input => ({
            questionIndex: input.dataset.questionIndex,
            answer: input.value.trim().toLowerCase()
        }));

        // Check answers
        let results = "";
        if (answers[0]?.answer === "b") {
            results += "Question 1: Correct! CSS is not a programming language.\n";
        } else {
            results += "Question 1: Wrong! The correct answer is b) CSS.\n";
        }
        if (answers[1]?.answer === "d") {
            results += "Question 2: Correct! String is a JavaScript data type.";
        } else {
            results += "Question 2: Wrong! The correct answer is d) String.";
        }

        console.log("Submitted Answers:", answers);
        alert(results);
        Prompt.isOpen = false;
        Prompt.backgroundDim.remove();
    },

    updatePromptDisplay() {
        const table = document.getElementsByClassName("table scores")[0]
        const detailToggleSection = document.getElementById("detail-toggle-section")
        const clearButtonRow = document.getElementById("clear-button-row")
        const pagingButtonsRow = document.getElementById("paging-buttons-row")

        if (detailToggleSection) detailToggleSection.remove()
        if (table) table.remove()
        if (pagingButtonsRow) pagingButtonsRow.remove()
        if (clearButtonRow) clearButtonRow.remove()

        document.getElementById("promptDropDown").append(Prompt.updatePromptTable())
    },

    backPage() {
        const table = document.getElementsByClassName("table scores")[0]
        if (Prompt.currentPage - 1 == 0) return;
        Prompt.currentPage -= 1
        Prompt.updatePromptDisplay()
    },
    
    frontPage() {
        Prompt.currentPage += 1
        Prompt.updatePromptDisplay()
    },

    openPromptPanel(npc) {
        const promptDropDown = document.querySelector('.promptDropDown');
        const promptTitle = document.getElementById("promptTitle");
    
        if (this.isOpen) {
            this.backgroundDim.remove();
        }
    
        this.currentNpc = npc;
        this.isOpen = true;
    
        promptDropDown.innerHTML = ""; 
        promptTitle.style.display = "block";
        promptTitle.innerHTML = npc.quiz?.title || "NPC Quiz";
        promptDropDown.appendChild(promptTitle);
    
        promptDropDown.appendChild(this.updatePromptTable());
    
        this.backgroundDim.create();
    
        promptDropDown.style.position = "fixed";
        promptDropDown.style.zIndex = "9999";
        promptDropDown.style.width = "70%"; 
        promptDropDown.style.top = "15%";
        promptDropDown.style.left = "15%"; 
        promptDropDown.style.transition = "all 0.3s ease-in-out"; 
    },

    initializePrompt() {
        const promptTitle = document.createElement("div");
        promptTitle.id = "promptTitle";
        document.getElementById("promptDropDown").appendChild(promptTitle);
    },

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
};

export default Prompt;