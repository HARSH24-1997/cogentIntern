import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
      <center>
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
       <div className="py-4"> Amount </div>
      </Typography>
      <Slider
        defaultValue={3000}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1000}
        marks
        min={0}
        max={10000}
        valueLabelDisplay="on"
      />
    </div>
    </center>
  );
}
