import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero({ onNavClick }) {
  const shaderCanvasRef = useRef(null);
  const threeContainerRef = useRef(null);

  useEffect(() => {
    // Canvas Shader Setup
    const canvas = shaderCanvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    let animationFrameId;
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * canvas.width;
      mouse.y = (1.0 - (e.clientY - rect.top) / rect.height) * canvas.height;
    };

    const syncSize = () => {
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth || 1280;
        canvas.height = canvas.clientHeight || 720;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', syncSize);
    syncSize();

    const vs = `attribute vec2 a_position; varying vec2 v_texCoord; void main() { v_texCoord = a_position * 0.5 + 0.5; gl_Position = vec4(a_position, 0.0, 1.0); }`;
    const fs = `
      precision highp float; varying vec2 v_texCoord; uniform float u_time; uniform vec2 u_resolution; uniform vec2 u_mouse;
      void main() {
        vec2 uv = v_texCoord; vec2 m = u_mouse / u_resolution;
        vec3 color = vec3(0.0588, 0.0902, 0.1647);
        float dist1 = distance(uv, vec2(0.3 + 0.2 * sin(u_time * 0.2), 0.7 + 0.1 * cos(u_time * 0.3)));
        float dist2 = distance(uv, vec2(0.8 + 0.1 * cos(u_time * 0.4), 0.2 + 0.2 * sin(u_time * 0.1)));
        float dist3 = distance(uv, m);
        color += vec3(0.145, 0.388, 0.922) * (0.15 / (dist1 + 0.5));
        color += vec3(0.024, 0.714, 0.831) * (0.1 / (dist2 + 0.4));
        color += vec3(0.145, 0.388, 0.922) * (0.05 / (dist3 + 0.2));
        color *= 0.95 + 0.05 * sin(uv.y * 800.0);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const cs = (type, src) => {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog); gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos); gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    const render = (t) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };
    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', syncSize);
    };
  }, []);

  useEffect(() => {
    // Three.js Setup
    const container = threeContainerRef.current;
    if (!container) return;

    let w = container.clientWidth;
    let h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x2563EB, emissive: 0x06B6D4, shininess: 100, transparent: true, opacity: 0.8, wireframe: true
    });
    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    const light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));
    camera.position.z = 5;

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      orb.rotation.y += 0.005;
      orb.rotation.x += 0.003;
      orb.scale.setScalar(1 + Math.sin(time) * 0.05);

      const posAttr = geometry.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const z = posAttr.getZ(i);
        posAttr.setZ(i, z + Math.sin(x * 2 + time) * 0.1);
      }
      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden" id="home">
      <div className="absolute inset-0 w-full h-full opacity-60">
        <canvas ref={shaderCanvasRef} className="block w-full h-full" />
      </div>
      <div className="container mx-auto px-4 md:px-12 relative z-10 grid md:grid-cols-2 items-center gap-12">
        <div className="fade-up">
          <span className="text-[#4cd7f6] text-xs font-semibold uppercase tracking-[0.2em] block mb-4">Visionary Consulting</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transforming Skills Into <span className="gradient-text">Global Opportunities.</span>
          </h1>
          <p className="text-[#c3c6d7] text-lg max-w-lg mb-10 leading-relaxed">
            We bridge the gap between learning, technology, and employment to create high-performance systems that generate measurable impact for the C-suite.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-[#943fe2] to-[#2563eb] text-white px-8 py-4 rounded-xl text-xs font-semibold flex items-center gap-2 hover:brightness-110 transition-all">
              Get Started <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button onClick={() => onNavClick('contact')} className="glass-panel text-[#dae2fd] border border-white/10 px-8 py-4 rounded-xl text-xs font-semibold hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
        <div className="hidden md:block h-[500px] relative">
          <div ref={threeContainerRef} className="w-full h-full" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 ambient-glow rounded-full"></div>
        </div>
      </div>
    </section>
  );
}