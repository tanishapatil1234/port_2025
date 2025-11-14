import GameEnvBackground from "./GameEngine/GameEnvBackground.js";
import Player from "./GameEngine/Player.js";
import Boss from './CustomGameClasses/Boss.js';
import Arm from './CustomGameClasses/Arm.js';
import Enemy from './GameEngine/Enemy.js';

class MansionLevel6_BattleRoom {
    constructor(gameEnv) {
        const width = gameEnv.innerWidth;
        const height = gameEnv.innerHeight;
        const path = gameEnv.path;

        // --- Floor ---
        const image_src_floor = path + "/images/mansionGame/bossFloorPattern.png";
        const image_data_floor = {
            name: 'floor',
            src: image_src_floor,
            pixels: {height: 341, width: 498}
        };

        // --- Player ---
        const sprite_src_mc = path + "/images/mansionGame/spookMcWalk.png";
        const MC_SCALE_FACTOR = 7;
        const sprite_data_mc = {
            id: 'Spook',
            greeting: "Hi, I am Spook.",
            src: sprite_src_mc,
            SCALE_FACTOR: MC_SCALE_FACTOR,
            STEP_FACTOR: 1500,
            ANIMATION_RATE: 100,
            INIT_POSITION: { 
                x: (width / 2 - width / (5 * MC_SCALE_FACTOR)), 
                y: height - (height / MC_SCALE_FACTOR)
            },
            pixels: {height: 2400, width: 3600},
            orientation: {rows: 2, columns: 3},
            down: {row: 1, start: 0, columns: 3},
            downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16},
            downLeft: {row: 0, start: 0, columns: 3, rotate: -Math.PI/16},
            left: {row: 0, start: 0, columns: 3},
            right: {row: 1, start: 0, columns: 3},
            up: {row: 1, start: 0, columns: 3},
            upLeft: {row: 0, start: 0, columns: 3, rotate: Math.PI/16},
            upRight: {row: 1, start: 0, columns: 3, rotate: -Math.PI/16},
            hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
            keypress: {up: 87, left: 65, down: 83, right: 68} // W, A, S, D
        };

        // --- Reaper Boss ---
        const BOSS_SCALE_FACTOR = 2;
        const sprite_src_body = path + "/images/mansionGame/ReaperMainBody.png";
        const sprite_boss_data = {
            id: 'reaper',
            src: sprite_src_body,
            SCALE_FACTOR: BOSS_SCALE_FACTOR,
            STEP_FACTOR: 800,
            ANIMATION_RATE: 30,
            INIT_POSITION: {x: Math.floor(width * 0.7), y: Math.floor(height * 0.6)},
            pixels: {height: 300, width: 300},
            orientation: {rows: 1, columns: 1},
            hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
            projectileSpeed: 8,
            attackInterval: 2000,
            projectileTypes: ['FIREBALL', 'ARROW'],
            initialHealth: 1500
        };

        // Reaper Enemy
        const REAPER_SCALE_FACTOR = 2;
        const sprite_reaper_src = path + "/images/mansionGame/ReaperMainBody.png";
        const sprite_reaper_data = {
            id: 'reaperboss',
            src: sprite_reaper_src,
            SCALE_FACTOR: REAPER_SCALE_FACTOR,
            STEP_FACTOR: 800,
            ANIMATION_RATE: 30,
            INIT_POSITION: {x: width * 0.7, y: height * 0.8},
            pixels: {width: 300, height: 300},
            orientation: {rows: 1, columns: 1},
            hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
        }

        // --- Reaper Arms ---
        const ARM_SCALE_FACTOR = 2;
        const sprite_arm_left_empty = path + "/images/mansionGame/ReaperLeftHandEmpty.png";
        const sprite_arm_left_scythe = path + "/images/mansionGame/ReaperLeftHandScythe.png";
        const sprite_arm_right_empty = path + "/images/mansionGame/ReaperRightHandEmpty.png";
        const sprite_arm_right_scythe = path + "/images/mansionGame/ReaperRightHandScythe.png";

        const leftArmData = {
            id: 'leftArm',
            src: sprite_arm_left_scythe,
            SCALE_FACTOR: ARM_SCALE_FACTOR,
            STEP_FACTOR: 800,
            ANIMATION_RATE: 30,
            INIT_POSITION: {x: sprite_boss_data.INIT_POSITION.x - 50, y: sprite_boss_data.INIT_POSITION.y + 20},
            pixels: {height: 300, width: 300},
            orientation: {rows:1, columns:1},
            hitbox: {widthPercentage: 0.4, heightPercentage: 0.2},
            xOffset: -50,
            yOffset: 20,
            hasWeapon: true,
            emptySrc: sprite_arm_left_empty,
            weaponSrc: sprite_arm_left_scythe
        };

        const rightArmData = {
            id: 'rightArm',
            src: sprite_arm_right_empty,
            SCALE_FACTOR: ARM_SCALE_FACTOR,
            STEP_FACTOR: 800,
            ANIMATION_RATE: 30,
            INIT_POSITION: {x: sprite_boss_data.INIT_POSITION.x + 50, y: sprite_boss_data.INIT_POSITION.y + 20},
            pixels: {height: 300, width: 300},
            orientation: {rows:1, columns:1},
            hitbox: {widthPercentage: 0.4, heightPercentage: 0.2},
            xOffset: 50,
            yOffset: 20,
            hasWeapon: false,
            emptySrc: sprite_arm_right_empty,
            weaponSrc: sprite_arm_right_scythe
        };

        this.classes = [
            {class: GameEnvBackground, data: image_data_floor},
            {class: Player, data: sprite_data_mc},
            // {class: Boss, data: sprite_boss_data},
            // {class: Arm, data: leftArmData},
            // {class: Arm, data: rightArmData},
            //{class: Enemy, data: sprite_reaper_data},
        ];
    }
}

export default MansionLevel6_BattleRoom;