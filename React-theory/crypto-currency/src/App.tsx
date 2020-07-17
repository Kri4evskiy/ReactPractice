import React from "react";

import { CryptoTable, ConverterBlock } from "./components";
import useStyles from './styles'

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <div>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <CryptoTable classes={classes} />
          </Grid>

          <Grid item xs={4}>
            <ConverterBlock classes={classes} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;