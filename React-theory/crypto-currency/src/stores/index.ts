import ConverterStore from './converterStore'
import CurrenciesStore from './currenciesStore'

const stores = {
    currenciesStore: new CurrenciesStore(),
    converterStore: new ConverterStore()
}

export default stores;