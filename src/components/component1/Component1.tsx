import React from 'react';
import { Button, Typography } from '@mui/material';
import { StyledDiv } from './Component.styles';

type HelloWorldProps = {
  name: string;
};

export const Component1: React.FC<HelloWorldProps> = ({ name }) => {
  return (
    <StyledDiv>
      <Typography variant="h4" gutterBottom>
        Hello, {name}!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </StyledDiv>
  );
};
