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

    // bounds
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

    const ceiling = Bodies.rectangle(
      window.innerWidth / 2,
      -20,
      window.innerWidth,
      40,
      { isStatic: true }
    );

    // balls
   const rectangle = Array.from({ length: 15 }).map(() =>
  Bodies.rectangle(
    100 + Math.random() * (window.innerWidth - 100),
    100 + Math.random() * (window.innerHeight / 10),
    20 + Math.random() * 60,
    20 + Math.random() * 60,
    {
      restitution: 0.98,
      friction: 0.1,
      render: { fillStyle: Math.random() > 0.5 ? "#696969" : "#729E8B" },
    }
  )
    );
    // balls
    const circles = Array.from({ length: 20 }).map(() =>
      Bodies.circle(
        100 + Math.random() * (window.innerWidth - 200),
        100 + Math.random() * (window.innerHeight / 3),
        45,
        {
          restitution: 1.12,
          friction: 0,
          render: { fillStyle: Math.random() > 0.5 ? "#696969" : "#729E8B" },
        }
      )
    );

    // world
    Composite.add(engine.world, [
      ground,
      leftWall,
      rightWall,
      ceiling,
      ...circles,
      ...rectangle
    ]);

    // mouse
     // mouse
  const mouse = Mouse.create(render.canvas);

  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.1,
      render: {
      visible: false,
      },
    },
  });

  Composite.add(engine.world, mouseConstraint);

  render.mouse = mouse;

    // run
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // cleanup
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
        <h1>Andres Young</h1>
        <p>Throw the balls around and have fun exploring my portfolio!</p>
      </section>
            <button className="start-btn">
               View Projects
            </button>
    </main>
  );
}