import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export default class Movement {
  constructor(camera, scene) {
    this.controls = new PointerLockControls(camera, document.body);
    scene.add(this.controls.getObject());

    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case 37:
        this.controls.moveRight(-1);
        break;
      case 38:
        this.controls.moveForward(1);
        break;
      case 39:
        this.controls.moveRight(1);
        break;
      case 40:
        this.controls.moveForward(-1);
        break;
    }
  }
}
