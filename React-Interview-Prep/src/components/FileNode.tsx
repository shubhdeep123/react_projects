import { useState } from "react";

interface ExplorerNode {
  id: number;
  isFolder: boolean;
  name: string;
  children?: ExplorerNode[];
}

interface FileNodeProps {
  node: ExplorerNode;
  level?: number;
}

export default function FileNode({
  node,
  level = 0,
}: FileNodeProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        style={{
          marginLeft: `${level * 20}px`,
          cursor: node.isFolder ? "pointer" : "default",
          userSelect: "none",
          padding: "4px 0",
        }}
      >
        {node.isFolder ? (
          <div onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? "▼" : "▶"} 📁 {node.name}
          </div>
        ) : (
          <div>📄 {node.name}</div>
        )}
      </div>

      {isOpen &&
        node.children?.map((child) => (
          <FileNode
            key={child.id}
            node={child}
            level={level + 1}
          />
        ))}
    </div>
  );
}