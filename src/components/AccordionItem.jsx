import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function AccordionItem({ itemId, headingId, targetId, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headingId}>
        <button
          className={`accordion-button d-flex justify-content-between align-items-center ${
            isOpen ? "" : "collapsed"
          }`}
          type="button"
          onClick={toggle}
        >
          {title}
          <FontAwesomeIcon
            icon={isOpen ? faMinus : faPlus}
            className="ms-auto"
          />
        </button>
      </h2>
      {isOpen && (
        <div
          id={targetId}
          className="accordion-collapse show"
          aria-labelledby={headingId}
        >
          <div className="accordion-body">{content}</div>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
