import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CreatorSelect({ selectedCreator, setSelectedCreator }) {
  const handleChange = (event) => {
    setSelectedCreator(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='creator-select-label'>Creator</InputLabel>
        <Select
          labelId='creator-select-label'
          id='creator-select'
          value={selectedCreator}
          label='Creator'
          onChange={handleChange}
        >
          <MenuItem value='All'>
            <em>All</em>
          </MenuItem>
          <MenuItem value='student'>Student</MenuItem>
          <MenuItem value='teacher'>Teacher</MenuItem>
          <MenuItem value='phd'>PhD</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
