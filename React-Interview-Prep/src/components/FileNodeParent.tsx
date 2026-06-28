import FileNode from "./FileNode";

const explorer = [
  {
    id: 1,
    name: "src",
    isFolder: true,
    children: [
      {
        id: 2,
        name: "components",
        isFolder: true,
        children: [
          {
            id: 3,
            name: "Button.tsx",
            isFolder: false,
          },
          {
            id: 4,
            name: "Modal.tsx",
            isFolder: false,
          },
        ],
      },
      {
        id: 5,
        name: "hooks",
        isFolder: true,
        children: [
          {
            id: 6,
            name: "useFetch.ts",
            isFolder: false,
          },
        ],
      },
      {
        id: 7,
        name: "App.tsx",
        isFolder: false,
      },
    ],
  },
  {
    id: 8,
    name: "public",
    isFolder: true,
    children: [
      {
        id: 9,
        name: "favicon.ico",
        isFolder: false,
      },
    ],
  },
];
export default function FileNodeParent() {
    return (
        <>
            {explorer.map((node) => (
              // @ts-ignore: allow passing node prop when FileNode prop types differ
              <FileNode key={node.id} node={node} />
            ))}
        </>
    );
}

