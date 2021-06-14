import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { down } from "../assets/SVG";

function Accrodion({ DATA }) {
  return (
    <div className="accrodion-root">
      {DATA.map((data) => (
        <Accordion>
          <AccordionSummary
            expandIcon={down}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordion-heading">{data.head}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Accrodion;
