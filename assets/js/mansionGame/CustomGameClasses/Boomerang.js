import Character from '../GameEngine/Character.js';

/*
    Boomerang class for the Reaper boss scythe attack
    - Travels along an elliptical path from boss to target
    - revComplete becomes true once it completes one revolution
*/

class Boomerang extends Character {
    constructor(gameEnv = null, targetx, targety, sourcex, sourcey) {
        // Create placeholder sprite data for the boomerang
        const data = {
            id: 'scythe',
            pixels: { width: 32, height: 32 },
            SCALE_FACTOR: 1,
            ANIMATION_RATE: 1,
            INIT_POSITION: { x: sourcex, y: sourcey },
            fillStyle: 'gray', // simple visual
        };
        super(data, gameEnv);

        // Store coordinates
        this.source_coords = { x: sourcex, y: sourcey };
        this.target_coords = { x: targetx, y: targety };

        // Ellipse calculations
        this.ellipse_center = {
            x: (sourcex + targetx) / 2,
            y: (sourcey + targety) / 2
        };

        this.ellipse_width = Math.sqrt((targetx - sourcex) ** 2 + (targety - sourcey) ** 2);
        this.ellipse_height = this.ellipse_width / 4; // arbitrary height, can tweak
        this.ellipse_tilt = Math.atan2(targety - sourcey, targetx - sourcex);

        this.radian_prog = 0;
        this.radian_limit = 2 * Math.PI;
        this.projectileSpeed = 0.05;

        this.revComplete = false;
    }

    update() {
        if (this.revComplete) return;

        if (this.radian_prog >= this.radian_limit) {
            this.revComplete = true;
        } else {
            this.radian_prog += this.projectileSpeed;

            const cosProg = Math.cos(this.radian_prog);
            const sinProg = Math.sin(this.radian_prog);
            const cosTilt = Math.cos(this.ellipse_tilt);
            const sinTilt = Math.sin(this.ellipse_tilt);

            // Ellipse parametric equations
            const x_coord = this.ellipse_center.x + 
                            (this.ellipse_width / 2) * cosProg * cosTilt - 
                            this.ellipse_height * sinProg * sinTilt;

            const y_coord = this.ellipse_center.y + 
                            (this.ellipse_width / 2) * cosProg * sinTilt + 
                            this.ellipse_height * sinProg * cosTilt;

            this.position.x = x_coord;
            this.position.y = y_coord;
        }

        this.draw(); // draw the boomerang on screen
    }

    destroy() {
        super.destroy();
    }
}

export default Boomerang;
