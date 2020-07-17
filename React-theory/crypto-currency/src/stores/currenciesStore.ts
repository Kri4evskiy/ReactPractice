import { observable, computed, action } from "mobx";
import { TCoin } from "../types";
import axios from "axios";

class CurrenciesStore {
  @observable private items: TCoin[] = [];

  @computed
  get getItems() {
    return this.items;
  }

  @action
  setItems = (items: TCoin[]): void => {
    this.items = items;
  };

  @action
  fetchCoins = () => {
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
        this.items = coins;
      });
  };
}

export default CurrenciesStore;
