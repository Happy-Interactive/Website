import React, { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const Home = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        currentMount.appendChild(renderer.domElement);

        // Set solid black background
        scene.background = new THREE.Color(0x000000);

        // OrbitControls setup
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        const fontLoader = new FontLoader();
        fontLoader.load(
            "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
            (font) => {
                // Create a group to hold the face, eyes, and smile
                const faceGroup = new THREE.Group();

                // Create face
                const faceGeometry = new THREE.SphereGeometry(2, 32, 32);
                const faceMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                const face = new THREE.Mesh(faceGeometry, faceMaterial);
                faceGroup.add(face);

                // Create left eye
                const leftEyeGeometry = new TextGeometry("h", {
                    font: font,
                    size: 0.8, // Increased size
                    height: 0.1,
                });
                const leftEyeMaterial = new THREE.MeshStandardMaterial({
                    color: 0xff3333,
                    emissive: 0xff0000,
                });
                const leftEye = new THREE.Mesh(leftEyeGeometry, leftEyeMaterial);
                leftEye.position.set(-0.6, 0.3, 1.9);
                faceGroup.add(leftEye);

                // Create right eye
                const rightEyeGeometry = new TextGeometry("i", {
                    font: font,
                    size: 0.8, // Increased size
                    height: 0.1,
                });
                const rightEyeMaterial = new THREE.MeshStandardMaterial({
                    color: 0xff3333,
                    emissive: 0xff0000,
                });
                const rightEye = new THREE.Mesh(rightEyeGeometry, rightEyeMaterial);
                rightEye.position.set(0.6, 0.3, 1.9);
                faceGroup.add(rightEye);

                // Create smile
                const smileGeometry = new THREE.TorusGeometry(
                    0.7,
                    0.1,
                    16,
                    100,
                    Math.PI
                );
                const smileMaterial = new THREE.MeshStandardMaterial({
                    color: 0xff3333,
                    emissive: 0xff0000,
                });
                const smile = new THREE.Mesh(smileGeometry, smileMaterial);
                smile.position.set(0, -0.5, 1.9);
                smile.rotation.x = Math.PI;
                faceGroup.add(smile);

                // Add the face group to the scene
                scene.add(faceGroup);

                // Add ambient light
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                scene.add(ambientLight);

                // Add point light
                const pointLight = new THREE.PointLight(0xffffff, 1);
                pointLight.position.set(5, 5, 5);
                scene.add(pointLight);

                // Set camera position
                camera.position.z = 10;

                const animate = function () {
                    requestAnimationFrame(animate);

                    faceGroup.rotation.y += 0.01;

                    controls.update();

                    renderer.render(scene, camera);
                };

                animate();
            }
        );

        // Cleanup
        return () => {
            currentMount.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div>
            <Navbar />
            <div ref={mountRef} />
        </div>
    )
};

export default Home;