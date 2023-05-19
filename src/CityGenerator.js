import * as THREE from 'three';
export default class CityGenerator {
    constructor(scene) {
      this.scene = scene;
    }
  
    // Generate a random building with different properties
    createBuilding() {
      const buildingHeight = Math.random() * 15 + 10; // Random height between 5 and 15
      const buildingWidth = Math.random() * 8 + 4; // Random width between 2 and 6
      const buildingDepth = Math.random() * 4 + 4; // Random depth between 2 and 6
  
      const shapeOptions = [
        'box', 'cylinder', 'cone', 'sphere' // Different shape options
      ];
      const shape = shapeOptions[Math.floor(Math.random() * shapeOptions.length)]; // Random shape selection
  
      const buildingGeometry = this.createGeometry(shape, buildingWidth, buildingHeight, buildingDepth);
      const buildingColor = new THREE.Color(Math.random(), Math.random(), Math.random());
      const buildingMaterial = new THREE.MeshBasicMaterial({ color: buildingColor });
      const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
      building.position.y = buildingHeight / 2; // Position the building above the ground
      return building;
    }
  
    // Create geometry based on shape selection
    createGeometry(shape, width, height, depth) {
      switch (shape) {
        case 'box':
          return new THREE.BoxGeometry(width, height, depth);
        case 'cylinder':
          return new THREE.CylinderGeometry(width / 2, width / 2, height, 32);
        case 'cone':
          return new THREE.ConeGeometry(width / 2, height, 32);
        case 'sphere':
          return new THREE.SphereGeometry(width / 2, 32, 32);
        default:
          return new THREE.BoxGeometry(width, height, depth);
      }
    }
      // Generate multiple buildings
  generateBuildings(buildingCount, areaSize) {
    for (let i = 0; i < buildingCount; i++) {
      const building = this.createBuilding();
      const x = Math.random() * areaSize - areaSize / 2; // Random x position within the area
      const z = Math.random() * areaSize - areaSize / 2; // Random z position within the area
      building.position.set(x, 0, z);
      this.scene.add(building);
    }
  }
}
