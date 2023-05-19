
import * as THREE from 'three';

export default class Fog {
  constructor(scene) {
    this.scene = scene;
    this.fogColor = new THREE.Color(0x0000ff);
    this.fogNear = 500;
    this.fogFar = 800;
  }

  addFog() {
    this.scene.fog = new THREE.Fog(this.fogColor, this.fogNear, this.fogFar);
  }
}
