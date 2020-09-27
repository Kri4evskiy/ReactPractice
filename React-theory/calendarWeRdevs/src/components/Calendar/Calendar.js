import React from 'react'
import classnames from 'classnames'

import ModalDay from '../Modal/ModalDay'
import * as calendar from './calendarFunc'

import './Calendar.scss'

export default class Calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        monthNames: ['JANUARY', 'FEBRARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
        weekDayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        fullDayNames: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
        onChange: Function.prototype
    }

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null,
        isOpen: false
    }

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);

        this.setState({ date });
    }

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);

        this.setState({ date });
    }

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    }

    handleDayClick = date => {
        this.setState({ selectedDate: date });

        this.props.onChange(date);
    }

    handleShow = () => {
        this.setState({ isOpen: true });
    }

    handleHide = () => {
        this.setState({ isOpen: false });
    }

    render() {
        const { monthNames, weekDayNames, fullDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        const modal = this.state.isOpen ? (
            <ModalDay>

                <div className="modal__wrapper">
                    <div className='modal__window'>
                        <div className='modal__header'>
                            <button onClick={this.handleHide}>&times;</button>
                        </div>
                        <div className='modal__body'>
                            <label>
                                Month
                                <input type='text' value={monthNames[this.month]} readOnly />
                            </label>
                            <label>
                                Day
                                <input type='text' value={fullDayNames[selectedDate.getDay()]} readOnly />
                            </label>
                        </div>
                    </div>
                </div>

            </ModalDay>
        ) : null

        return (
            <>
                {modal}
                <div className="calendar">
                    <header>
                        <button className='left-btn-arrow' onClick={this.handlePrevMonthButtonClick}>{'<'}</button>
                        <span>{monthNames[this.month]} {this.year}</span>
                        <button className='right-btn-arrow' onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                    </header>

                    <table>
                        <tfoot>
                            <tr>
                                {weekDayNames.map((name, index) =>
                                    <th key={index}>{name}</th>
                                )}
                            </tr>
                        </tfoot>

                        <tbody>
                            {monthData.map((week, index) =>
                                <tr key={index} className="week">
                                    {week.map((date, index) => date ?
                                        <td
                                            key={index}
                                            className={classnames('day', {
                                                'today': calendar.areEqual(date, currentDate),
                                                'selected': calendar.areEqual(date, selectedDate)
                                            })}
                                            onClick={() => {
                                                this.handleDayClick(date);
                                                this.handleShow();
                                            }}
                                        >{date.getDate()}</td>
                                        :
                                        <td key={index} />
                                    )}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}