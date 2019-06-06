import React from 'react'
import classes from './withArrowModal.scss'

export const withArrowModal = Modal => {

    return props => {
        return (
            <div className={classes.ArrowModal}>
                <Modal />
            </div>
        )
    }
}
