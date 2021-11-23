import React from 'react';
import './filterMenu.scss';

const FilterMenu = ({ filterStatus, handlerFilterChange }) => {
    const buttons = [
        { status: 'ALL', title: 'All' },
        { status: 'DONE', title: 'Done' },
        { status: 'NOT_DONE', title: 'Complete' },
    ]
    return (
        <div className="filter__menu">
            {buttons.map(btn => {
                const isActive = filterStatus === btn.status
                return (
                    <div className={`filter__item ${isActive ? 'filter__item_active' : ''}`}
                        key={btn.status}
                        onClick={() => handlerFilterChange(btn.status)}
                    >{btn.title}</div>
                )
            })}
        </div>
    )
}

export default FilterMenu
