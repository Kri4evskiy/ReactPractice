// 1. Использовать функциональные компоненты
//
// Wrong
class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi {this.props.name}</h1>
                <h2>I work as a {this.props.position}</h2>
            </div>
        )
    }
}

// Correct
const Greeting = (props) => (
    <div>
        <h1>Hi {props.name}</h1>
        <h2>I work as a {props.position}</h2>
    </div>
)
//----------------------------------------------------------

// 2. Деструктуризация пропсов
//
// Wrong
const Greeting = (props) => (
    <div>
        <h1>Hi {props.name}</h1>
        <h2>I work as a {props.position}</h2>
    </div>
)

// Correct
const Greeting = ({ name, position }) => (
    <div>
        <h1>Hi {name}</h1>
        <h2>I work as a {position}</h2>
    </div>
)
// ----------------------------------------------------------

// 3. Диструктивное присваивание - значение по умолчанию
//
// Default values for props
class Greeting extends React.Component {
    render() {
        const { name = '', position = '' }
        return (
            <div>
                <h1>Hi {name}</h1>
                <h2>I work as a {position}</h2>
            </div>
        )
    }
}

// 4. Проброс дополнительных пропсов без необходимости их полного перечисления
//
// Example of component props
<Greeting
    name='Jack'
    position='Front-end Developer'
    data-name='position'
    onClick={showFunction}
    id='person-position'
/>

// REST
const Greeting = ({ name, position, ...restProps }) => (
    <div>
        <h1> Hi {name}</h1>
        <h2 {...restProps}> I work as a {position} </h2>
    </div>
);
//----------------------------------------------------------------------

// 5. Перетерание дефолтных настройкек компонентов (перетераем className)
//
// Example of custom props
< Greeting
    name='Jack'
    position='Front-end Developer'
    className="new-class"
/>

const Greeting = ({ name, position, ...restProps }) => (
    <div>
        <h1> Hi {name}!</h1>
        <h2 className='old-class' {...restProps}> I work as a {position} </h2>
    </div>
);
//-------------------------------------------------------------------------

// 6. Условный рендеринг
//
// Render if 'true'
const Greeting = ({ name, position }) => (
    <div>
        {name && <h1> Hi {name}! </h1>}
        <h2> I work as a {position} </h2>
    </div>
);

// Render if 'false'
const Greeting = ({ name }) => (
    <div>
        <h1>Hi {name}!</h1>
        {position || <h2> I work as a Developer </h2>}
    </div>
);

// Ternary operator
const Greeting = ({ name, position }) => (
    <div>
        {
            name
                ? <h1>Hi {name}!</h1>
                : <span>No name</span>
        }
        <h2>I work as a {position}</h2>
    </div>
);
// -----------------------------------------------------------

// 7. Использование компонента в качестве пропса
//
<LayoutComponent
    top={<Navigaror />}
    leftSide={<SideBar />}
    rightSide={<Main />}
    bottom={<Footer />}
/>
// ----------------------------------------------------------

// 8. Создание классовых компонентов
//
// Old version
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            couner: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() { };
}

// Modern
class Counter extends React.Component {
    state = {
        counter: 0,
    }
    handleClick = () => { }
}
// -----------------------------------------------------------

// 9. Работа с массивами
//
// Wrong
const List = () => (
    <ul>
        <li>first</li>
        <li>second</li>
    </ul>
)

// Correct
const List = () => (
    <ul>
        {['first', 'second'].map(item => <li key={item}>{item}</li>)}
    </ul>
)
// -----------------------------------------------------------

// 10. Использование фрагмента
//
// Posible
const Greeting = ({ name, position }) => (
    <div>
        <h1> Hi {name}</h1>
        <h2> I work as a {position} </h2>
    </div>
);

// Use Fragment
const Greeting = ({ name, position }) => (
    <Fragment>
        <h1> Hi {name}</h1>
        <h2> I work as a {position} </h2>
    </Fragment>
);

// Much better
const Greeting = ({ name, position }) => (
    <>
        <h1> Hi {name}</h1>
        <h2> I work as a {position} </h2>
    </>
);
// -----------------------------------------------------------

// 11. setState - вторым аргументом может принимать callback-функцию, в которую гарантированно поподёт уже обновившейся стэйт
//
handleClick = () => {
    this.setState({ someValue: this.state.someValue + 1 },
        () => {
            this.callbackFunc(this.state.someValue)
        })
}
// -----------------------------------------------------------

// 12. Компонентность и многоразовость
//
// Nogood
<>
    <button type='button'></button>

    // Instead create component
    const Button = (props) => <button type='button' {...props} />

    // And use component everywhere
    <Button />
</>

// 13. Event-Switch
//
// A lot of methods
handleClick = () => { this.doSomethung() }
handleMouseEnter = () => { this.setState({ hoverd: true }) }
handleMouseLeave = () => { this.setState({ hoverd: false }) }

// One Event switch
handleEvent = ({ type }) => {
    switch (type) {
        case 'click': return this.doSomethung()
        case 'mouseEnter': return this.setState({ hoverd: true })
        case 'mouseLeave': return this.setState({ hoverd: false })
        default: return console.warn(`No case for event type ${type}`)
    }
}
// ------------------------------------------------------------------

// 13. HOC
//
const Connect = ComposedComponent => (
    class extends React.Component {
        state = { data: null }

        componentDidMount() {
            // this would fetch or connect to a store
            this.setState({ data })
        }

        render() {
            return (
                <ComposedComponent {...this.props} data={this.state.data} />
            )
        }
    }
)
// --------------------------------------------------------------------
