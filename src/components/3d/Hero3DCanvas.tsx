import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface NodeData {
  name: string;
  category: string;
  tagline: string;
  color: string;
  position: [number, number, number];
}

const AGENCY_PILLARS: NodeData[] = [
  { name: 'Strategy', category: 'Foundation', tagline: 'Market research, positioning & business goals', color: '#60a5fa', position: [-3.2, 1.8, 0.4] },
  { name: 'Content', category: 'Creation', tagline: 'Reels, professional shoots & storytelling', color: '#f43f5e', position: [3.4, 1.6, -0.6] },
  { name: 'Websites', category: 'Technology', tagline: 'High-converting UI/UX, responsive & 3D web', color: '#38bdf8', position: [-3.6, -1.4, -0.2] },
  { name: 'Advertising', category: 'Growth', tagline: 'Targeted Meta & Google performance campaigns', color: '#fbbf24', position: [3.3, -1.6, 0.5] },
  { name: 'Automation', category: 'Efficiency', tagline: 'DM workflows, CRM funnels & lead pipelines', color: '#a78bfa', position: [0, 3.2, -1.2] },
  { name: 'Branding', category: 'Identity', tagline: 'Visual identity, creative direction & voice', color: '#34d399', position: [0, -3.2, 0.8] },
];

export const Hero3DCanvas: React.FC<{ onNodeSelect?: (name: string) => void }> = ({ onNodeSelect }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<NodeData | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080a, 0.07);

    const camera = new THREE.PerspectiveCamera(48, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for entire interactive universe
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // Central Agency Core (Aarambh Core)
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 2);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x181a20,
      emissive: 0x2563eb,
      emissiveIntensity: 0.25,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    worldGroup.add(coreMesh);

    // Core Outer Wireframe Orbit
    const wireGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    worldGroup.add(wireMesh);

    // Dual Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(1.9, 0.018, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.35 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    worldGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.3, 0.014, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    worldGroup.add(ring2);

    // Ambient Starfield / Particles
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 18;
      particlePos[i + 1] = (Math.random() - 0.5) * 14;
      particlePos[i + 2] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.045,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Pillar Nodes Mesh Array & Raycasting
    const nodeMeshes: THREE.Mesh[] = [];
    const connectionLines: THREE.Line[] = [];

    AGENCY_PILLARS.forEach((pillar) => {
      // Node Geometry based on domain
      let geo: THREE.BufferGeometry;
      switch (pillar.name) {
        case 'Strategy':
          geo = new THREE.OctahedronGeometry(0.42);
          break;
        case 'Content':
          geo = new THREE.TorusGeometry(0.32, 0.12, 16, 32);
          break;
        case 'Websites':
          geo = new THREE.BoxGeometry(0.55, 0.55, 0.55);
          break;
        case 'Advertising':
          geo = new THREE.ConeGeometry(0.4, 0.65, 5);
          break;
        case 'Automation':
          geo = new THREE.DodecahedronGeometry(0.42);
          break;
        case 'Branding':
          geo = new THREE.SphereGeometry(0.4, 24, 24);
          break;
        default:
          geo = new THREE.SphereGeometry(0.35, 16, 16);
      }

      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(pillar.color),
        emissive: new THREE.Color(pillar.color),
        emissiveIntensity: 0.35,
        roughness: 0.3,
        metalness: 0.7,
        clearcoat: 0.8,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pillar.position);
      mesh.userData = pillar;
      worldGroup.add(mesh);
      nodeMeshes.push(mesh);

      // Connective line to Core
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(...pillar.position),
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(pillar.color),
        transparent: true,
        opacity: 0.28,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      worldGroup.add(line);
      connectionLines.push(line);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 3, 20);
    pointLight1.position.set(4, 5, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x818cf8, 2, 20);
    pointLight2.position.set(-5, -4, 3);
    scene.add(pointLight2);

    // Mouse & Scroll state
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.6;
      mouse.targetY = y * 0.4;

      mouseVector.x = x;
      mouseVector.y = y;

      // Raycasting for interactive tooltips
      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const hit = intersects[0].object.userData as NodeData;
        setActiveNode(hit);
        setIsHovered(true);
        container.style.cursor = 'pointer';
      } else {
        setActiveNode(null);
        setIsHovered(false);
        container.style.cursor = 'default';
      }
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const hit = intersects[0].object.userData as NodeData;
        if (onNodeSelect) onNodeSelect(hit.name);
      }
    };

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    // Resize observer
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        // Continuous organic rotation
        coreMesh.rotation.y = time * 0.25;
        coreMesh.rotation.x = time * 0.15;
        wireMesh.rotation.y = -time * 0.2;
        ring1.rotation.z = time * 0.18;
        ring2.rotation.z = -time * 0.15;

        // Animate each pillar node individually
        nodeMeshes.forEach((mesh, idx) => {
          mesh.rotation.y += delta * (0.6 + idx * 0.1);
          mesh.rotation.x += delta * 0.4;
          // Gentle floating wave
          const basePos = (mesh.userData as NodeData).position;
          mesh.position.y = basePos[1] + Math.sin(time * 1.5 + idx) * 0.12;
        });

        // Scroll influence: camera depth & subtle tilt
        const scrollFactor = Math.min(scrollY / 900, 1.8);
        worldGroup.position.z = -scrollFactor * 1.5;
        worldGroup.rotation.y = mouse.x + scrollFactor * 0.4;
        worldGroup.rotation.x = -mouse.y + scrollFactor * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onNodeSelect]);

  return (
    <div className="relative w-full h-full select-none">
      <div ref={mountRef} className="w-full h-full" />

      {/* Interactive Tooltip Card floating on top when hovering a node */}
      {activeNode && (
        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300 transform translate-y-0 opacity-100 z-20"
        >
          <div className="px-4 py-3 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 shadow-2xl flex items-center gap-3.5 max-w-sm">
            <div 
              className="w-3 h-3 rounded-full shrink-0 shadow-lg"
              style={{ backgroundColor: activeNode.color, boxShadow: `0 0 12px ${activeNode.color}` }}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {activeNode.category}
                </span>
                <span className="text-white font-bold text-sm font-display">
                  {activeNode.name}
                </span>
              </div>
              <p className="text-xs text-neutral-300 font-body mt-0.5">
                {activeNode.tagline}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating 3D Navigation Cue */}
      <div className="absolute top-4 right-4 pointer-events-none text-right hidden sm:block">
        <span className="text-[11px] font-mono-custom tracking-wider text-neutral-500 uppercase">
          Interactive 3D Ecosystem
        </span>
        <div className="text-[10px] text-neutral-400 font-body">
          Hover nodes to inspect · Move cursor to orbit
        </div>
      </div>
    </div>
  );
};

export default Hero3DCanvas;
