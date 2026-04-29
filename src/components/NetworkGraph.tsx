import { useMemo } from "react";

// Procedurally generated network graph with pulsing nodes & travelling dashed lines.
export function NetworkGraph() {
  const { nodes, edges } = useMemo(() => {
    const n = [
      { x: 12, y: 22, r: 5, accent: false },
      { x: 22, y: 60, r: 6, accent: false },
      { x: 30, y: 30, r: 8, accent: true },
      { x: 38, y: 78, r: 5, accent: false },
      { x: 48, y: 18, r: 6, accent: false },
      { x: 50, y: 50, r: 10, accent: false },
      { x: 58, y: 82, r: 6, accent: false },
      { x: 68, y: 28, r: 7, accent: false },
      { x: 72, y: 62, r: 8, accent: true },
      { x: 82, y: 42, r: 6, accent: false },
      { x: 88, y: 78, r: 5, accent: false },
      { x: 92, y: 18, r: 5, accent: false },
    ];
    const e = [
      [0, 2], [1, 2], [2, 5], [2, 4], [3, 5], [3, 6],
      [4, 7], [5, 7], [5, 8], [6, 8], [7, 9], [8, 9],
      [8, 10], [9, 11], [9, 10], [1, 5], [0, 4],
    ];
    return { nodes: n, edges: e };
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#90CAF9"
          strokeOpacity="0.35"
          strokeWidth="0.18"
          className="line-travel"
          style={{ animationDelay: `${i * 0.2}s` }}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {nodes.map((n, i) => (
        <g
          key={i}
          className="node-group"
          style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${8 + (i % 5)}s` }}
        >
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r * 0.18}
            fill={n.accent ? "#E53935" : "#1565C0"}
            opacity={n.accent ? 0.95 : 0.85}
            className="node-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r * 0.4}
            fill={n.accent ? "#E53935" : "#1565C0"}
            opacity="0.12"
          />
        </g>
      ))}
    </svg>
  );
}
