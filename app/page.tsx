"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function Portfolio() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
    } = Matter;

    const engine = Engine.create();

    const render = Render.create({
      element: sceneRef.current!,
      engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    // ===== BOUNDS =====
    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 20,
      window.innerWidth,
      40,
      { isStatic: true }
    );

    const leftWall = Bodies.rectangle(
      -20,
      window.innerHeight / 2,
      40,
      window.innerHeight,
      { isStatic: true }
    );

    const rightWall = Bodies.rectangle(
      window.innerWidth + 20,
      window.innerHeight / 2,
      40,
      window.innerHeight,
      { isStatic: true }
    );



    // ===== RECTANGLES (spawn higher) =====
    const rectangle = Array.from({ length: 15 }).map(() =>
      Bodies.rectangle(
        100 + Math.random() * (window.innerWidth - 200),

        // 👇 HIGHER SPAWN (was /10, now above mid screen)
        -100 + Math.random() * (window.innerHeight / 4),

        20 + Math.random() * 60,
        20 + Math.random() * 60,
        {
          restitution: 0.98,
          friction: 0.1,
          render: {
            fillStyle: Math.random() > 0.5 ? "#696969" : "#729E8B",
          },
        }
      )
    );

    // ===== CIRCLES (spawn above screen) =====
    const circles = Array.from({ length: 20 }).map(() =>
      Bodies.circle(
        100 + Math.random() * (window.innerWidth - 200),

        // 👇 IMPORTANT CHANGE (fall in from above)
        -100 + Math.random() * -100,

        45,
        {
          restitution: 1.05,
          friction: 0,
          frictionAir: 0.0005,
          render: {
            fillStyle: Math.random() > 0.5 ? "#696969" : "#729E8B",
          },
        }
      )
    );

    // ===== WORLD =====
    Composite.add(engine.world, [
      ground,
      leftWall,
      rightWall,

      ...circles,
      ...rectangle,
    ]);

    // ===== MOUSE =====
    const mouse = Mouse.create(render.canvas);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.1,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // ===== RUN =====
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // ===== CLEANUP =====
    return () => {
      Render.stop(render);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      <div
        ref={sceneRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "auto",
        }}
      />

      <section className="hero">
        <h1>Ball Pit</h1>
        <p>Throw the balls around and have fun!!</p>
      </section>

      <a
    className="start-btn"
    href="https://github.com/frvrdre"
    target="_blank"
    rel="noopener noreferrer"
>
    View Projects
    </a>
    </main>
  );
}