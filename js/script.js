import {
    THREE as 
} from '../js/three.js';

let scene = new THREE.scene();
let camera = new THREE.perspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the shape
var geometry = new THREE.BoxGeometry(1, 1, 1);
// Create the material
var material = new THREE.MeshBasicMaterial({
    color: 313136,
    wireframe: false
});
// Create the cube
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

// Game logic
let update = function () {

};

// Draw scene
let render = function () {
    renderer.render(scene, camera);
};

// run game loop (update, render, repeat)
let gameLoop = function () {
    requestAnimationFrame(gameLoop);

    update();
    render();
};

gameLoop();