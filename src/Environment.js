
import * as THREE from 'three';

export default class Environment {
  constructor(scene) {
    this.scene = scene;
    this.houseWidth = 2;
    this.houseHeight = 50;
    this.houseDepth = 150;
    this.houseMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    this.treeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.minPositionX = -450;
    this.maxPositionX = 450;
    this.minPositionZ = -450;
    this.maxPositionZ = 450;
  }

  createHouse() {
    const rightWall = new THREE.Mesh(
      new THREE.BoxGeometry(this.houseWidth / 2, this.houseHeight, this.houseDepth),
      this.houseMaterial
    );
    rightWall.position.x = 75;
    this.scene.add(rightWall);

    const leftWall = new THREE.Mesh(
      new THREE.BoxGeometry(this.houseWidth / 2, this.houseHeight, this.houseDepth),
      this.houseMaterial
    );
    leftWall.position.x = -75;
    this.scene.add(leftWall);

    const frontWall = new THREE.Mesh(
      new THREE.BoxGeometry(this.houseWidth, this.houseHeight, this.houseDepth),
      this.houseMaterial
    );
    frontWall.position.z = -75;
    frontWall.rotation.y = Math.PI / 2;
    this.scene.add(frontWall);
  }

  createTrees() {
    for (let i = 0; i < 1000; i++) {
      const tree = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 10), this.treeMaterial);
      let positionX, positionZ;

      do {
        positionX = Math.random() * (this.maxPositionX - this.minPositionX) + this.minPositionX;
        positionZ = Math.random() * (this.maxPositionZ - this.minPositionZ) + this.minPositionZ;
      } while (
        positionX >= -75 - this.houseWidth / 2 &&
        positionX <= 75 + this.houseWidth / 2 &&
        positionZ >= -75 - this.houseDepth / 2
      );

      tree.position.x = positionX;
      tree.position.z = positionZ;
      this.scene.add(tree);
    }
  }
}