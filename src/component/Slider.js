
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: '30',
    label: 'March 30',
  },
  {
    value: '80',
    label: 'April 20',
  },
];


function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(['30', '80']);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <center>
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
      Dead Line
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </div>
    </center>
  );
}