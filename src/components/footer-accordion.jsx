import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { FaArrowDown } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./footer-accordion.css";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button type="button" onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

function FooterAccordion({ headings, contents }) {
  return (
    <div className="bg-[#1f1f1f] ">
      <Accordion defaultActiveKey="0">
        {headings.map((heading, idx) => {
          return (
            <Card>
              <Card.Header>
                <CustomToggle eventKey={idx}>
                  {heading} <RiArrowDropDownLine className="text-[24px]" />
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={idx}>
                <Card.Body>{contents[idx]} </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
}

export default FooterAccordion;
