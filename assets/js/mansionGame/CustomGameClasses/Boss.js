import Enemy from '../GameEngine/Enemy.js';
import Boomerang from '../CustomGameClasses/Boomerang.js';
import Projectile from '../CustomGameClasses/Projectile.js';
import Arm from '../CustomGameClasses/Arm.js';

class Boss extends Enemy {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);

        this.stage = 1;
        this.fullHealth = data?.initialHealth || 1500;
        this.healthPoints = this.fullHealth;

        this.arrows = [];
        this.fireballs = [];
        this.scythes = [];
        this.lastAttackTime = Date.now();
        this.attackInterval = data?.attackInterval || 2000;
        this.angerModifier = 1;

        /* Debug/cheat key code - uncomment to enable
        // Add a debug/cheat key ('p') that instantly defeats this boss
        this._killKeyHandler = (event) => {
            try {
                if (!event || !event.key) return;
                if (event.key === 'p' || event.key === 'P') {
                    console.log("[Boss] Kill key pressed: forcing boss death.");
                    this.healthPoints = 0;
                    // Remove the boss graphic and objects from the game
                    try { this.destroy(); } catch (e) { console.warn('Error destroying boss:', e); }
                    // End the current level so game control can transition
                    try {
                        if (this.gameEnv && this.gameEnv.gameControl && this.gameEnv.gameControl.currentLevel) {
                            this.gameEnv.gameControl.currentLevel.continue = false;
                        }
                    } catch (e) { console.warn('Error ending level after boss kill:', e); }
                }
            } catch (e) { console.error('Kill key handler error:', e); }
        };

        // Attach the listener to window so it's active while the boss exists
        if (typeof window !== 'undefined') window.addEventListener('keydown', this._killKeyHandler);
        */

        this.projectileTypes = data?.projectileTypes || ['FIREBALL', 'ARROW'];

        // Initialize arms
        this.leftArm = new Arm({
            xOffset: -60,
            yOffset: 20,
            weaponSrc: "/images/mansionGame/ReaperLeftHandScythe.png",
            emptySrc: "/images/mansionGame/ReaperLeftHandEmpty.png",
            hasWeapon: true
        }, gameEnv);

        this.rightArm = new Arm({
            xOffset: 60,
            yOffset: 20,
            weaponSrc: "/images/mansionGame/ReaperRightHandScythe.png",
            emptySrc: "/images/mansionGame/ReaperRightHandEmpty.png",
            hasWeapon: true
        }, gameEnv);

        this.arms = [this.leftArm, this.rightArm];

        this.isThrowingScythe = false;
    }

    update() {
        this.draw();

        // Update stage & attack speed
        const healthRatio = this.healthPoints / this.fullHealth;
        this.stage = healthRatio < 0.33 ? 3 : (healthRatio < 0.66 ? 2 : 1);
        this.attackInterval = this.stage === 3 ? 1000 : this.stage === 2 ? 1500 : 2000;
        this.angerModifier = this.stage === 3 ? 2 : 1;

        // Update projectiles
        [...this.fireballs, ...this.arrows].forEach(p => {
            if (p.revComplete) {
                p.destroy();
            } else {
                p.update();
            }
        });
        this.fireballs = this.fireballs.filter(p => !p.revComplete);
        this.arrows = this.arrows.filter(p => !p.revComplete);

        // Update scythes
        this.scythes.forEach(s => s.update());
        this.scythes = this.scythes.filter(s => !s.revComplete);
        if (this.scythes.length === 0) {
            this.isThrowingScythe = false;
            this.leftArm.restoreWeapon(); // return scythe to left arm
        }

        // Update arms to follow the boss
        this.arms.forEach(arm => arm.update(this.position.x, this.position.y));

        // Attack logic
        const now = Date.now();
        if (now - this.lastAttackTime >= this.attackInterval) {
            const target = this.findNearestPlayer();
            if (target) this.performAttack(target);
            this.lastAttackTime = now;
        }

        // Movement toward nearest player if not throwing scythe
        if (!this.isThrowingScythe) {
            const target = this.findNearestPlayer();
            if (target) this.moveToward(target, 0.25);
        }
    }

    findNearestPlayer() {
        const players = this.gameEnv.gameObjects.filter(obj => obj.constructor.name === 'Player');
        if (players.length === 0) return null;

        let nearest = players[0];
        let minDist = Infinity;

        for (const player of players) {
            const dx = player.position.x - this.position.x;
            const dy = player.position.y - this.position.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDist) {
                minDist = dist;
                nearest = player;
            }
        }

        return nearest;
    }

    performAttack(target) {
        const rand = Math.random();

        if (this.stage >= 3 && rand < 0.3) {
            this.scytheAttack(target);
        } else if (rand < 0.6) {
            this.fireballAttack(target);
        } else {
            this.arrowAttack(target);
        }
    }

    moveToward(target, speed) {
        const dx = target.position.x - this.position.x;
        const dy = target.position.y - this.position.y;
        const angle = Math.atan2(dy, dx);
        this.position.x += Math.cos(angle) * speed;
        this.position.y += Math.sin(angle) * speed;
    }

    explode(x, y) {
        throw new Error("Reapers cannot explode! (yet :})");
    }

    scytheAttack(target) {
        // Use left arm to throw scythe
        this.leftArm.removeWeapon();
        this.scythes.push(new Boomerang(this.gameEnv, target.position.x, target.position.y, this.position.x, this.position.y));
        this.isThrowingScythe = true;
    }

    fireballAttack(target) {
        this.rightArm.shoot();
        this.fireballs.push(new Projectile(this.gameEnv, target.position.x, target.position.y, this.position.x, this.position.y, "FIREBALL"));
    }

    arrowAttack(target) {
        this.rightArm.shoot();
        this.arrows.push(new Projectile(this.gameEnv, target.position.x, target.position.y, this.position.x, this.position.y, "ARROW"));
    }

    addArm(arm) {
        this.arms.push(arm);
    }

    /* Debug/cheat destroy override - uncomment with key handler above
    // Ensure we clean up the key listener when the boss is destroyed
    destroy() {
        try {
            if (typeof window !== 'undefined' && this._killKeyHandler) {
                window.removeEventListener('keydown', this._killKeyHandler);
            }
        } catch (e) { console.warn('Failed to remove boss key listener:', e); }

        // Call parent destroy if available (Character -> GameObject)
        if (super.destroy) super.destroy();
    }
    */
}

export default Boss;
