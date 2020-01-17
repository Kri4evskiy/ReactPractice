import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const starWarsChars = [
    { name: 'Дарт Вэйдер', side: 'dark' },
    { name: 'Люк Скайвокер', side: 'light' },
    { name: 'Палпатин', side: 'dark' },
    { name: 'Обиван Кеноби', side: 'light' }
]

const App = ({ list }) => (

    <ul>
        {list.map((char, index) => {
            return (
                <li key={char.name + index}>
                    <strong>{char.name}</strong> - &nbsp; {char.side}
                </li>
            )
        })}
    </ul>
)

const withFilteredProps = Component => ({ list, side }) => {
    const filteredList = list.filter(char => char.side === side)
    return <Component list={filteredList} />
}

const FilteredList = withFilteredProps(App)

ReactDOM.render(<FilteredList list={starWarsChars} side='light' />, document.getElementById('root'));

serviceWorker.unregister();
