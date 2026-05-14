# 🟢 Ball Pit — Interactive Physics Playground

A fun interactive web project built with **Next.js, Matter.js, HTML, and CSS**. This project simulates a dynamic physics “ball pit” where objects fall, collide, and can be dragged around by the user. It was built from scratch to explore real-time physics simulations and improve understanding of animation, canvas rendering, and DOM layering.

---

## 🔗 Live Demo
https://ball-drop-kappa.vercel.app/

---

## 🚀 Features

- 🟡 Real-time physics simulation using Matter.js  
- 🧲 Draggable objects with mouse interaction  
- 🌐 Full-screen interactive canvas background  
- 🎨 Randomized shapes, sizes, and colors  
- 🧱 Invisible physics boundaries (walls + ground)  
- 🖱️ “Grab and throw” object mechanics  
- ⚡ Smooth continuous rendering loop  

---

## 🧪 Tech Stack

- Next.js  
- React  
- Matter.js  
- TypeScript  
- CSS3  
- HTML5 Canvas  

---

## 🎯 Purpose

This project was built to practice:

- Physics-based animations in the browser  
- Using external libraries like Matter.js  
- Canvas rendering inside React / Next.js  
- Managing side effects with `useEffect`  
- Layering interactive UI over a physics engine  

---

## 📁 How It Works

- A Matter.js engine is created when the component loads  
- Random shapes are generated above the screen  
- Gravity pulls objects into the scene  
- Mouse constraint allows dragging objects  
- Canvas is fixed as a background layer  
- UI elements are rendered above using z-index  

