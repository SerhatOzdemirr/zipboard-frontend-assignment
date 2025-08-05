import React, { useState } from "react";
import AccordionItem from "../components/AccordionItem";
import accordionData from "../data/data.json";

function AccordionPage() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="container-sm mt-5">
      <button className="btn-theme" onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <div className="accordion" id="accordionExample">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            itemId={`item-${index}`}
            headingId={`heading-${index}`}
            targetId={`collapse-${index}`}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default AccordionPage;
