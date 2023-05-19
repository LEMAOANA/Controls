import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PointerLockControls } from 'three/examples/jsm//controls/PointerLockControls.js';
import { AxesHelper } from 'three';

import CityGenerator from './CityGenerator';
import Chairs from './Chairs';
import Fog from './Fog';
import Environment from './Environment';
import Land from './Land';
import Movement from './Movement';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Add axis helper
const axisHelper = new AxesHelper(5);
scene.add(axisHelper);
// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
//
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);
// Set up the camera position
camera.position.set(0, 50, 300);
camera.lookAt(scene.position);


// Create instances of the exported classes
const chairs = new Chairs(scene);
chairs.createChairs();
//
const cityGenerator = new CityGenerator(scene);
cityGenerator.generateBuildings(100, 120);
//
const environment = new Environment(scene);
environment.createHouse();
environment.createTrees();
//
const fog = new Fog(scene);
const Lland = new Land(scene);
Lland.createland();
// Create an instance of the Movement class
const movement = new Movement(camera, scene);

/**/ 
// Call the methods to generate the buildings, create chairs, add fog, create house, and create trees
fog.addFog();

// orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;
// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();