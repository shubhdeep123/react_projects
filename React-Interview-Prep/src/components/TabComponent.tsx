import { useState } from "react";

const tabs = [
  {
    id: 1,
    label: "Home",
    content: "Welcome to Home Page",
  },
  {
    id: 2,
    label: "About",
    content: "About Us",
  },
  {
    id: 3,
    label: "Contact",
    content: "Contact Us",
  },
];
export default function TabComponent() {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const currentTab = tabs.find((tab) => tab.id === activeTab);
  return (
    <div>
      <div style={{ display: "flex", gap: "12px" }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{ backgroundColor: `${activeTab == tab.id ? "blue" : ""}` }}
          >
            <h2>{tab.label}</h2>
          </div>
        ))}
      </div>
      <div>
        <p key={currentTab?.id}>{currentTab?.content}</p>,
      </div>
    </div>
  );
}
