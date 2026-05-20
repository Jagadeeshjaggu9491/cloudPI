import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene, camera, renderer, particles, shapesGroup;
    let particleCount = 1000;
    let positions = new Float32Array(particleCount * 3);
    let initialY = new Float32Array(particleCount);
    let initialX = new Float32Array(particleCount);
    let initialZ = new Float32Array(particleCount);
    let clock = new THREE.Clock();
    
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xFFFFFF, 0.005);

    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 240;
    camera.position.y = 70;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0); 
    containerRef.current.appendChild(renderer.domElement);

    // --- Wave Particles ---
    const geometry = new THREE.BufferGeometry();
    let idx = 0;
    const columns = 40;
    const rows = 25;
    const spacing = 18;
    
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const x = (i - columns / 2) * spacing;
        const z = (j - rows / 2) * spacing;
        const y = 0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        initialX[idx] = x;
        initialY[idx] = y;
        initialZ[idx] = z;

        idx++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const canvasTexture = document.createElement('canvas');
    canvasTexture.width = 16;
    canvasTexture.height = 16;
    const ctx = canvasTexture.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(74, 44, 134, 1)');
    grad.addColorStop(0.3, 'rgba(172, 61, 199, 0.8)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    const texture = new THREE.CanvasTexture(canvasTexture);

    const material = new THREE.PointsMaterial({
      size: 4.5,
      map: texture,
      blending: THREE.NormalBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.45
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // --- Floating 3D Shapes ---
    shapesGroup = new THREE.Group();
    scene.add(shapesGroup);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(100, 200, 50);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0xa855f7, 2, 300); // purple light
    pointLight.position.set(0, 50, 100);
    scene.add(pointLight);

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6, // Violet
      metalness: 0.1,
      roughness: 0.2,
      transmission: 0.9, // glass-like
      ior: 1.5,
      transparent: true,
      opacity: 0.8,
      envMapIntensity: 1.0,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    });

    const createShape = (geo, x, y, z, scale) => {
      const mesh = new THREE.Mesh(geo, glassMaterial);
      mesh.position.set(x, y, z);
      mesh.scale.set(scale, scale, scale);
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      // Animation properties
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015
        },
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatOffset: Math.random() * Math.PI * 2,
        initialY: y
      };
      
      shapesGroup.add(mesh);
    };

    // Add some shapes
    createShape(new THREE.TorusGeometry(15, 4, 16, 100), -80, 50, -40, 1);
    createShape(new THREE.IcosahedronGeometry(18, 0), 100, 30, -20, 1);
    createShape(new THREE.OctahedronGeometry(15, 0), 0, 90, -60, 1);
    createShape(new THREE.TorusKnotGeometry(12, 3, 100, 16), -120, 20, 10, 1);
    createShape(new THREE.DodecahedronGeometry(16, 0), 80, 100, -80, 1);

    // --- Resize and Mouse Handle ---
    const handleResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - windowHalfX) * 0.04;
      mouseY = (event.clientY - windowHalfY) * 0.04;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // --- Animation Loop ---
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      
      // Animate Particles
      const posArr = particles.geometry.attributes.position.array;
      let idx = 0;
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const x = initialX[idx];
          const z = initialZ[idx];
          const wave1 = Math.sin(x * 0.02 + elapsedTime * 1.2) * 16;
          const wave2 = Math.cos(z * 0.025 + elapsedTime * 0.8) * 12;
          posArr[idx * 3 + 1] = wave1 + wave2;
          idx++;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Animate Shapes
      shapesGroup.children.forEach(mesh => {
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;
        mesh.rotation.z += mesh.userData.rotationSpeed.z;
        
        // Floating
        mesh.position.y = mesh.userData.initialY + Math.sin(elapsedTime * mesh.userData.floatSpeed * 10 + mesh.userData.floatOffset) * 10;
      });

      // Mouse Parallax for camera
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += ((-mouseY + 70) - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      // Slight parallax on shapes
      shapesGroup.position.x = -mouseX * 0.5;
      shapesGroup.position.y = mouseY * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      
      if (renderer && renderer.domElement && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      texture.dispose();
      
      shapesGroup.children.forEach(mesh => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }} 
    />
  );
}
