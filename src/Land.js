import * as THREE from 'three';
export default class Land {
    constructor(scene) {
        this.scene = scene;
      }
      createland(){
        // Add green land with trees
const landGeometry = new THREE.PlaneGeometry(2000, 2000);
const landMaterial = new THREE.MeshBasicMaterial({ color: 0x15761d, side: THREE.DoubleSide });
const land = new THREE.Mesh(landGeometry, landMaterial);
land.rotation.x = Math.PI / 2;
this.scene.add(land);
      }
}