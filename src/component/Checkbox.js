import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="Application"
          control={<Checkbox color="primary" />}
          label="Application"
          labelPlacement="start"
        />
        <FormControlLabel
          value="Website"
          control={<Checkbox color="primary" />}
          label="Website"
          labelPlacement="start"
        />
        
      </FormGroup>
    </FormControl>
  );
}
