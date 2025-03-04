import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';

class GameLevelPrisonEscape {
  constructor(path) {
    const width = (typeof GameEnv.getWidth === "function") ? GameEnv.getWidth() : window.innerWidth;
    const height = (typeof GameEnv.getHeight === "function") ? GameEnv.getHeight() : window.innerHeight;

    // Background data
    const image_data_desert = {
      name: 'Prison Escape',
      greeting: "Welcome to the Prison! It's miserable here. Your only job... GET OUT!",
      src: `${path}/images/gamify/Prisonescapebackround.jpeg`,
      pixels: { height: 168, width: 300 }
    };

    // Player Data
    const sprite_data_chillguy = {
      id: 'Chill Guy',
      greeting: "Hi, I am Chill Guy, Currently in prison, Unfortunately I need to break out!",
      src: `${path}/assets/js/adventureGame/MainCharecter.png`,
      SCALE_FACTOR: 10,
      STEP_FACTOR: 2000,
      ANIMATION_RATE: 10,
      INIT_POSITION: { x: 0, y: height - (height / 10) },
      pixels: { height: 760, width: 500 },
      orientation: { rows: 4, columns: 4 },
      frameSize: { width: 100, height: 190 },
      down: { row: 0, start: 0, columns: 3 },
      up: { row: 1, start: 0, columns: 3 },
      left: { row: 2, start: 0, columns: 3 },
      right: { row: 3, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    // NPC Data
    const npcs = [
      {
        id: 'Tofer',
        greeting: "Tough luck out here buster... answer these questions then talk to the real boss in the red",
        src: `${path}/assets/js/adventureGame/Npc1.png`,
        SCALE_FACTOR: 8,
        ANIMATION_RATE: 50,
        pixels: { height: 224, width: 515 },
        INIT_POSITION: { x: 103, y: 92 },
        orientation: { rows: 3, columns: 7 },
        frameSize: { width: 73, height: 82 },
        down: { row: 1, start: 0, columns: 7 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        quiz: {
          title: "General Knowledge Quiz",
          questions: [
            "What is the largest company by market cap?\n1. Target\n2. Apple\n3. Walmart\n4. Boeing",
            "What year was the first programming language made?\n1. 1403\n2. 2027\n3. 1942\n4. 2011"
          ]
        },
        reaction: function () { alert(this.greeting); },
        interact: function () {
          let quiz = new Quiz();
          quiz.initialize();
          quiz.openPanel(this.quiz);
        }
      },
      {
        id: 'Boss in Red',
        greeting: "So your the new guy around... answer these final questions and you will be allowed the key out of here",
        src: `${path}/assets/js/adventureGame/PrisonerNPC.png`,
        SCALE_FACTOR: 10,
        ANIMATION_RATE: 50,
        pixels: { height: 146, width: 300 },
        INIT_POSITION: { x: width / 4, y: height / 4 },
        orientation: { rows: 1, columns: 3 },
        down: { row: 0, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        quiz: {
          title: "GitHub Command Quiz",
          questions: [
            "Which command is used to clone a repository?\n1. git clone\n2. git fork\n3. git copy\n4. git download",
            "Which command is used to add changes to the staging area?\n1. git add\n2. git stage\n3. git commit\n4. git push"
          ]
        },
        reaction: function () { alert(this.greeting); },
        interact: function () {
          let quiz = new Quiz();
          quiz.initialize();
          quiz.openPanel(this.quiz);
        }
      }
    ];

    // Create objects for this level
    this.objects = [
      { class: Background, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      ...npcs.map(npc => ({ class: Npc, data: npc }))
    ];
  }
}

export default GameLevelPrisonEscape;