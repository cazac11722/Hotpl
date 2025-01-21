import React, { useState } from "react";
import { Stage, Layer, Rect, Text, Line } from "react-konva";

const BracketCanvas = () => {
  const [nodes, setNodes] = useState([
    { id: 1, name: "Player 1", x: 50, y: 50 },
    { id: 2, name: "Player 2", x: 50, y: 150 },
    { id: 3, name: "Player 3", x: 250, y: 100 },
  ]);

  const handleDragMove = (e, id) => {
    const updatedNodes = nodes.map((node) =>
      node.id === id ? { ...node, x: e.target.x(), y: e.target.y() } : node
    );
    setNodes(updatedNodes);
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight - 100}>
      <Layer>
        {/* 연결선 */}
        <Line
          points={[
            nodes[0].x + 100, nodes[0].y + 20,
            nodes[2].x, nodes[2].y + 20,
            nodes[1].x + 100, nodes[1].y + 20,
          ]}
          stroke="black"
          strokeWidth={2}
        />

        {/* 노드 */}
        {nodes.map((node) => (
          <React.Fragment key={node.id}>
            <Rect
              x={node.x}
              y={node.y}
              width={100}
              height={40}
              fill="lightblue"
              shadowBlur={5}
              draggable
              onDragMove={(e) => handleDragMove(e, node.id)}
            />
            <Text
              x={node.x}
              y={node.y + 10}
              text={node.name}
              fontSize={14}
              width={100}
              align="center"
            />
          </React.Fragment>
        ))}
      </Layer>
    </Stage>
  );
};

export default BracketCanvas;
