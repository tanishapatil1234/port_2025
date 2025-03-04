import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

/** Background class for primary background */
export class Background extends GameObject {
    constructor(data = null) {
        super();
        this.isLoaded = false; // Track image load state

        if (data?.src) {
            this.image = new Image();
            this.image.src = data.src;

            this.image.onload = () => {
                this.isLoaded = true;
                this.draw(); // Ensure the image is drawn only after loading
            };

            this.image.onerror = () => {
                console.error(`Failed to load background image: ${data.src}`);
            };
        } else {
            this.image = null;
            this.isLoaded = true; // If no image, consider it "loaded" for solid color fallback
        }

        GameEnv.gameObjects.push(this);
    }

    /** This method draws to GameEnv context, primary background */
    draw() {
        const ctx = GameEnv.ctx;
        const width = GameEnv.innerWidth;
        const height = GameEnv.innerHeight;

        if (this.isLoaded && this.image) {
            // Draw the background image scaled to the canvas size
            ctx.drawImage(this.image, 0, 0, width, height);
        } else {
            // Fallback: Fill canvas with solid color if image is not loaded or missing
            ctx.fillStyle = '#87CEEB';
            ctx.fillRect(0, 0, width, height);
        }
    }

    /** For primary background, update is the same as draw */
    update() {
        this.draw();
    }

    /** For primary background, resize is the same as draw */
    resize() {
        if (this.isLoaded) this.draw();
    }

    /** Destroy Game Object - remove from GameEnv.gameObjects array */
    destroy() {
        const index = GameEnv.gameObjects.indexOf(this);
        if (index !== -1) {
            GameEnv.gameObjects.splice(index, 1);
        }
    }
}

export default Background;
