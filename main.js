import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 5);

// Orbit Controls (for click-and-drag interaction)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth dragging
controls.dampingFactor = 0.05;

// Cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// Cube with Phong shading for clearer lighting
const cubeMaterial = new THREE.MeshPhongMaterial({
    color: 0x99ff99, // Base color
    shininess: 50,   // Controls the specular highlight intensity
    specular: 0x222222, // Specular color for highlights
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Lighting
const directionalLight = new THREE.DirectionalLight(0xffeeff, 1);
directionalLight.position.set(1, -8, 0);
directionalLight.castShadow = true;
directionalLight.angle = Math.PI / 6;
directionalLight.penumbra = 0.5;
directionalLight.intensity = 1.5;
directionalLight.distance = 1;
scene.add(directionalLight);

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(directionalLightHelper);

// Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.75); // Soft ambient light
scene.add(ambientLight);

// Resize Handling
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Text
// const loader = new FontLoader();

// loader.load('./fonts/Merriweather_Regular.json');

// Animation Loop
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update(); // Update controls for smooth interaction
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);