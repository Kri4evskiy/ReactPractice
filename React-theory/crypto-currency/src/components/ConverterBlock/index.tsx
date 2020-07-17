import React from "react";
import { observer, inject } from "mobx-react";
import CurrenciesStore from '../../stores/currenciesStore'

import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

type IConverterBlock = {
    classes: any;
    currenciesStore?: CurrenciesStore
  };



const ConverterBloc: React.FC<IConverterBlock> = inject("currenciesStore")(
  observer(({ classes, currenciesStore }) => {
      const coins:  string[] = currenciesStore!.getItems.map(coin => coin.name)
    return (
      <Paper className={classes.paper}>
        <div className={classes.cryptoInputBox}>
          <FormControl className={classes.currencyInput}>
            <TextField fullWidth label="Сумма" />
          </FormControl>
          <FormControl className={classes.currencyType}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Валюта
            </InputLabel>
            <Select value={coins[0]}>
              {
                  coins.map(name => <MenuItem value={name}>{name}</MenuItem>)
              }
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
            <Select value={coins[0]}>
              {
                  coins.map(name => <MenuItem value={name}>{name}</MenuItem>)
              }
            </Select>
          </FormControl>
        </div>
      </Paper>
    );
  })
);

export default ConverterBloc;
