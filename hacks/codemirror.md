---
layout: post
title: Code Runner
permalink: /code
---

<!-- CodeMirror CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/darcula.min.css">

<!-- CodeMirror JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/clike/clike.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/javascript/javascript.min.js"></script>

<style>
  .code-runner-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .header-section {
    text-align: center;
    margin-bottom: 30px;
  }

  .header-section h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }

  .header-section p {
    font-size: 1.1em;
    opacity: 0.8;
  }

  .controls-section {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .control-group {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .control-group label {
    font-weight: 600;
  }

  select, button {
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid rgba(128, 128, 128, 0.3);
    font-size: 14px;
    cursor: pointer;
  }

  select {
    min-width: 150px;
  }

  .btn-group {
    display: flex;
    gap: 10px;
    margin-left: auto;
  }

  button {
    transition: all 0.2s;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  .run-btn {
    font-weight: 600;
    padding: 10px 24px;
  }

  .secondary-btn {
    opacity: 0.9;
  }

  .editor-container {
    border: 1px solid rgba(128, 128, 128, 0.3);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  .CodeMirror {
    height: 400px;
    font-size: 14px;
  }

  .output-section {
    border: 1px solid rgba(128, 128, 128, 0.3);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  .output-header {
    padding: 12px 16px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.3);
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .output-content {
    padding: 16px;
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
    min-height: 100px;
    max-height: 300px;
    overflow-y: auto;
  }

  .examples-section {
    margin-top: 40px;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid rgba(128, 128, 128, 0.3);
  }

  .examples-section h3 {
    margin-bottom: 15px;
  }

  .example-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .example-btn {
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid rgba(128, 128, 128, 0.3);
    cursor: pointer;
    transition: all 0.2s;
    font-size: 13px;
  }

  .example-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  }

  .info-section {
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid rgba(128, 128, 128, 0.3);
    font-size: 14px;
  }

  .info-section h4 {
    margin-bottom: 8px;
  }

  .info-section ul {
    margin-left: 20px;
  }

  .stats {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    font-size: 13px;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .controls-section {
      flex-direction: column;
      align-items: stretch;
    }

    .btn-group {
      margin-left: 0;
      width: 100%;
    }

    .example-buttons {
      flex-direction: column;
    }
  }
</style>

<div class="code-runner-container">
  <div class="header-section">
    <h2>Code Runner</h2>
    <p>Write, test, and run code in Python, Java, and JavaScript</p>
  </div>

  <div class="controls-section">
    <div class="control-group">
      <label for="language">Language:</label>
      <select id="language">
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="javascript">JavaScript</option>
      </select>
    </div>

    <div class="control-group">
      <label for="fontSize">Font Size:</label>
      <select id="fontSize">
        <option value="12">12px</option>
        <option value="14" selected>14px</option>
        <option value="16">16px</option>
        <option value="18">18px</option>
      </select>
    </div>

    <div class="btn-group">
      <button id="clearBtn" class="secondary-btn">🗑️ Clear</button>
      <button id="copyBtn" class="secondary-btn">📋 Copy Code</button>
      <button id="runBtn" class="run-btn large primary">▶ Run Code</button>
    </div>
  </div>

  <div class="editor-container">
    <textarea id="editor">print("Hello, world!")</textarea>
  </div>

  <div class="output-section">
    <div class="output-header">
      <span>Output</span>
      <button id="copyOutputBtn" style="padding: 4px 12px; font-size: 12px;">Copy Output</button>
    </div>
    <div class="output-content" id="output">Click "Run Code" to see output here...</div>
  </div>

  <div class="stats" id="stats">
    <span id="lineCount">Lines: 1</span>
    <span id="charCount">Characters: 22</span>
    <span id="execTime"></span>
  </div>

  <div class="examples-section">
    <h3>Test Examples</h3>
    <div class="example-buttons" id="exampleButtons"></div>
  </div>

  <div class="info-section">
    <h4>Tips & Shortcuts</h4>
    <ul>
      <li><strong>Run Code:</strong> Click the Run button or press Ctrl+Enter (Cmd+Enter on Mac)</li>
      <li><strong>Clear Editor:</strong> Quickly clear all code to start fresh</li>
      <li><strong>Copy Code:</strong> Copy your code to clipboard with one click</li>
      <li><strong>Test Examples:</strong> Load pre-made examples to test compiler features</li>
    </ul>
  </div>
</div>

<script type="module">
import { pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

// Example code snippets
const examples = {
  python: [
    {
      name: "Hello World",
      code: "print('Hello, world!')"
    },
    {
      name: "Variables & Math",
      code: "x = 10\ny = 20\nsum = x + y\nprint(f'Sum: {sum}')\nprint(f'Product: {x * y}')"
    },
    {
      name: "For Loop",
      code: "for i in range(5):\n    print(f'Count: {i}')"
    },
    {
      name: "List Operations",
      code: "numbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers]\nprint('Numbers:', numbers)\nprint('Squares:', squares)\nprint('Sum:', sum(numbers))"
    },
    {
      name: "Function",
      code: "def greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('Alice'))\nprint(greet('Bob'))"
    },
    {
      name: "Conditionals",
      code: "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')\n\nfor i in range(3):\n    if i % 2 == 0:\n        print(f'{i} is even')\n    else:\n        print(f'{i} is odd')"
    }
  ],
  java: [
    {
      name: "Hello World",
      code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, world!\");\n  }\n}"
    },
    {
      name: "Variables & Math",
      code: "public class Main {\n  public static void main(String[] args) {\n    int x = 10;\n    int y = 20;\n    System.out.println(\"Sum: \" + (x + y));\n    System.out.println(\"Product: \" + (x * y));\n  }\n}"
    },
    {
      name: "For Loop",
      code: "public class Main {\n  public static void main(String[] args) {\n    for (int i = 0; i < 5; i++) {\n      System.out.println(\"Count: \" + i);\n    }\n  }\n}"
    },
    {
      name: "Array",
      code: "public class Main {\n  public static void main(String[] args) {\n    int[] numbers = {1, 2, 3, 4, 5};\n    int sum = 0;\n    for (int num : numbers) {\n      sum += num;\n    }\n    System.out.println(\"Sum: \" + sum);\n  }\n}"
    },
    {
      name: "Method",
      code: "public class Main {\n  public static String greet(String name) {\n    return \"Hello, \" + name + \"!\";\n  }\n  \n  public static void main(String[] args) {\n    System.out.println(greet(\"Alice\"));\n    System.out.println(greet(\"Bob\"));\n  }\n}"
    },
    {
      name: "Conditionals",
      code: "public class Main {\n  public static void main(String[] args) {\n    int age = 18;\n    if (age >= 18) {\n      System.out.println(\"Adult\");\n    } else {\n      System.out.println(\"Minor\");\n    }\n  }\n}"
    }
  ],
  javascript: [
    {
      name: "Hello World",
      code: "console.log('Hello, world!');"
    },
    {
      name: "Variables & Math",
      code: "const x = 10;\nconst y = 20;\nconsole.log(`Sum: ${x + y}`);\nconsole.log(`Product: ${x * y}`);"
    },
    {
      name: "For Loop",
      code: "for (let i = 0; i < 5; i++) {\n  console.log(`Count: ${i}`);\n}"
    },
    {
      name: "Array Operations",
      code: "const numbers = [1, 2, 3, 4, 5];\nconst squares = numbers.map(x => x ** 2);\nconsole.log('Numbers:', numbers);\nconsole.log('Squares:', squares);\nconsole.log('Sum:', numbers.reduce((a, b) => a + b, 0));"
    },
    {
      name: "Function",
      code: "function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('Alice'));\nconsole.log(greet('Bob'));"
    },
    {
      name: "Conditionals",
      code: "const age = 18;\nif (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}\n\nfor (let i = 0; i < 3; i++) {\n  console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);\n}"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    mode: "python",
    theme: "darcula",
    indentUnit: 4,
    tabSize: 4
  });

  const langSelect = document.getElementById("language");
  const fontSizeSelect = document.getElementById("fontSize");
  const outputDiv = document.getElementById("output");
  const exampleButtonsDiv = document.getElementById("exampleButtons");
  const lineCountSpan = document.getElementById("lineCount");
  const charCountSpan = document.getElementById("charCount");
  const execTimeSpan = document.getElementById("execTime");

  // Update stats
  function updateStats() {
    const code = editor.getValue();
    const lines = code.split('\n').length;
    const chars = code.length;
    lineCountSpan.textContent = `Lines: ${lines}`;
    charCountSpan.textContent = `Characters: ${chars}`;
  }

  editor.on('change', updateStats);

  // Font size changer
  fontSizeSelect.addEventListener("change", () => {
    const size = fontSizeSelect.value;
    const cm = document.querySelector('.CodeMirror');
    cm.style.fontSize = size + 'px';
    editor.refresh();
  });

  // Load examples for current language
  function loadExamples(lang) {
    exampleButtonsDiv.innerHTML = '';
    examples[lang].forEach((example, index) => {
      const btn = document.createElement('button');
      btn.className = 'example-btn';
      btn.textContent = example.name;
      btn.onclick = () => {
        editor.setValue(example.code);
        outputDiv.textContent = 'Click "Run Code" to see output here...';
        execTimeSpan.textContent = '';
      };
      exampleButtonsDiv.appendChild(btn);
    });
  }

  // Language switcher
  langSelect.addEventListener("change", () => {
    const lang = langSelect.value;
    if (lang === "python") {
      editor.setOption("mode", "python");
      editor.setValue("print('Hello, world!')");
    } else if (lang === "java") {
      editor.setOption("mode", "text/x-java");
      editor.setValue("public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, world!\");\n  }\n}");
    } else if (lang === "javascript") {
      editor.setOption("mode", "javascript");
      editor.setValue("console.log('Hello, world!');");
    }
    loadExamples(lang);
  });

  // Clear button
  document.getElementById("clearBtn").onclick = () => {
    editor.setValue("");
    outputDiv.textContent = 'Click "Run Code" to see output here...';
    execTimeSpan.textContent = '';
  };

  // Copy code button
  document.getElementById("copyBtn").onclick = () => {
    const code = editor.getValue();
    navigator.clipboard.writeText(code).then(() => {
      const btn = document.getElementById("copyBtn");
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    });
  };

  // Copy output button
  document.getElementById("copyOutputBtn").onclick = () => {
    const output = outputDiv.textContent;
    navigator.clipboard.writeText(output).then(() => {
      const btn = document.getElementById("copyOutputBtn");
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 1500);
    });
  };

  // Run button logic
  function runCode() {
    const code = editor.getValue();
    const lang = langSelect.value;
    outputDiv.textContent = "⏳ Running...";
    execTimeSpan.textContent = '';

    const startTime = Date.now();

    let runURL;
    if (lang === "python") runURL = `${pythonURI}/run/python`;
    else if (lang === "java") runURL = `${javaURI}/run/java`;
    else if (lang === "javascript") runURL = `${pythonURI}/run/javascript`;

    const body = JSON.stringify({ code });
    const options = { ...fetchOptions, method: "POST", body };
    
    fetch(runURL, options)
      .then(res => res.json())
      .then(result => {
        const endTime = Date.now();
        const execTime = endTime - startTime;
        const output = result.output || "[no output]";
        outputDiv.textContent = output;
        execTimeSpan.textContent = `⏱Execution time: ${execTime}ms`;
      })
      .catch(err => {
        outputDiv.textContent = "Error: " + err.message;
        execTimeSpan.textContent = '';
      });
  }

  document.getElementById("runBtn").onclick = runCode;

  // Keyboard shortcut: Ctrl+Enter or Cmd+Enter to run
  editor.setOption("extraKeys", {
    "Ctrl-Enter": runCode,
    "Cmd-Enter": runCode
  });

  // Load initial examples
  loadExamples('python');
  updateStats();
});
</script>