"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 3000
    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 15
      posArray[i + 1] = (Math.random() - 0.5) * 15
      posArray[i + 2] = (Math.random() - 0.5) * 10

      // Mix of green, magenta, and cyan particles
      const colorChoice = Math.random()
      if (colorChoice < 0.5) {
        // Green (primary)
        colorArray[i] = 0.2
        colorArray[i + 1] = 0.8
        colorArray[i + 2] = 0.4
      } else if (colorChoice < 0.8) {
        // Magenta (accent)
        colorArray[i] = 0.8
        colorArray[i + 1] = 0.3
        colorArray[i + 2] = 0.7
      } else {
        // Cyan
        colorArray[i] = 0.3
        colorArray[i + 1] = 0.7
        colorArray[i + 2] = 0.9
      }
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    const geometries = [
      new THREE.IcosahedronGeometry(0.4, 0),
      new THREE.OctahedronGeometry(0.35, 0),
      new THREE.TetrahedronGeometry(0.4, 0),
      new THREE.TorusGeometry(0.25, 0.1, 8, 16),
    ]

    const shapes: THREE.Mesh[] = []
    const colors = [0x22c55e, 0xd946ef, 0x06b6d4, 0xf59e0b]

    for (let i = 0; i < 12; i++) {
      const geometry = geometries[i % geometries.length]
      const material = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 6 - 2)
      mesh.userData = {
        rotationSpeed: Math.random() * 0.015 + 0.005,
        floatSpeed: Math.random() * 0.0008 + 0.0003,
        floatOffset: Math.random() * Math.PI * 2,
        originalY: mesh.position.y,
      }
      shapes.push(mesh)
      scene.add(mesh)
    }

    camera.position.z = 4

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.0003
      particlesMesh.rotation.y += 0.0003
      particlesMesh.rotation.x += mouseY * 0.0002
      particlesMesh.rotation.y += mouseX * 0.0002

      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed
        shape.rotation.y += shape.userData.rotationSpeed * 0.7
        shape.position.y =
          shape.userData.originalY + Math.sin(Date.now() * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.5
      })

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true" />
}
