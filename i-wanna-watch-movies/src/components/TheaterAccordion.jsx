import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export const TheaterAccordion = ({theaters, filmsByTheater}) => {

  console.log(theaters)
  console.log(filmsByTheater)
  // const id = React.useId();
  return (
    theaters.map(theater => (
      <Accordion key={theater.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${theater.id}-panel-content`}
          id={`${theater.id}-panel-header`}
        >
          <Typography component="span">{theater.name} ({filmsByTheater.get(theater.id).length})</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {filmsByTheater.get(theater.id).map(film => (
            <Typography key={film.id}>{film.title}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    ))
  );
}