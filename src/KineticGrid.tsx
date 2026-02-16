"use client";

import { useEffect, useRef } from "react";

export default function KineticGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const spacing = 40;
    const mouse = { x: -9999, y: -9999 };

    const points: any[] = [];

    class Point {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number = 0;
      vy: number = 0;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDist = 120;

        if (distance < maxDist) {
          const force = (maxDist - distance) / maxDist;
          const angle = Math.atan2(dy, dx);

          this.vx -= Math.cos(angle) * force * 2;
          this.vy -= Math.sin(angle) * force * 2;
        }

        // Spring back to origin
        this.vx += (this.originX - this.x) * 0.05;
        this.vy += (this.originY - this.y) * 0.05;

        // Friction
        this.vx *= 0.9;
        this.vy *= 0.9;

        this.x += this.vx;
        this.y += this.vy;
      }
    }

    function init() {
      points.length = 0;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          points.push(new Point(x, y));
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(0,0,0,0.05)";
      ctx.lineWidth = 1;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.update();

        // Connect to right neighbor
        const right = points.find(
          (pt) => pt.originX === p.originX + spacing && pt.originY === p.originY
        );

        // Connect to bottom neighbor
        const bottom = points.find(
          (pt) => pt.originX === p.originX && pt.originY === p.originY + spacing
        );

        if (right) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(right.x, right.y);
          ctx.stroke();
        }

        if (bottom) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(bottom.x, bottom.y);
          ctx.stroke();
        }
      }

      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    });

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    init();
    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
}
