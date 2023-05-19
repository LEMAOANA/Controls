import * as THREE from 'three';

export default class Chairs {
  constructor(scene) {
    this.scene = scene;
    this.chairMaterial1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.chairMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.chairs = [];
    this.numChairsPerRow = 5;
    this.chairSize = 10;
    this.spacing = 5;
    this.offsetZ = 90;
  }

  createChairs() {
    const offsetX = ((this.numChairsPerRow - 1) * (this.chairSize + this.spacing)) / 2;

    for (let i = 0; i < 50; i++) {
      const chair = new THREE.Mesh(new THREE.BoxGeometry(this.chairSize, this.chairSize, this.chairSize), (i % 2 === 0) ? this.chairMaterial1 : this.chairMaterial2);

      const rowIndex = Math.floor(i / this.numChairsPerRow);
      const colIndex = i % this.numChairsPerRow;

      const positionX = colIndex * (this.chairSize + this.spacing) - offsetX;
      const positionZ = rowIndex * (this.chairSize + this.spacing) + this.offsetZ;

      chair.position.set(positionX, 0, positionZ);
      this.scene.add(chair);
      this.chairs.push(chair);
    }
  }
}
