import React from "react";
import axios from "axios";

import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    cryptoInputBox: {
      marginBottom: 10,
      marginTop: 10,
    },
    currencyInput: {
      minWidth: "calc(70% - 10px)",
      marginRight: 10,
    },
    currencyType: {
      minWidth: "30%",
    },
    table: {
      minWidth: 650,
    },
    currencyIcon: {
      width: 18,
      height: 18,
      borderRadius: 30
    }
  })
);

type TCoin = {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume25hour: number;
};

function App() {
  const classes = useStyles();
  const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);

  React.useEffect(() => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
      )
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(3),
            volume25hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          };
          return obj;
        });
        setAllCoins(coins);
      });
  }, []);

  return (
    <Container className={classes.root} maxWidth="lg">
      <div>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    
                    <TableCell align="left">Name</TableCell>
                    ​<TableCell align="left">FullName</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">volume24hour</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allCoins.map((coin) => (
                    <TableRow key={coin.name}>
                      <TableCell>
                        <img className={classes.currencyIcon} src={coin.imageUrl} alt="Coin icon" />
                      </TableCell>
                      <TableCell align="left">{coin.name}</TableCell>
                      <TableCell align="left">{coin.fullName}</TableCell>
                      <TableCell align="left">${coin.price}</TableCell>
                      <TableCell align="left">${coin.volume25hour}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                  <TextField fullWidth label="Сумма" />
                </FormControl>
                <FormControl className={classes.currencyType}>
                  <InputLabel shrink htmlFor="age-native-label-placeholder">
                    Валюта
                  </InputLabel>
                  <Select value={10}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                  <TextField fullWidth label="Сумма" />
                </FormControl>
                <FormControl className={classes.currencyType}>
                  <InputLabel shrink htmlFor="age-native-label-placeholder">
                    Валюта
                  </InputLabel>
                  <Select value={10}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Typography variant="h5" component="h5">
                9 227,17 Доллар США
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
