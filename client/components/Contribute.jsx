import React from 'react'
import {connect} from 'react-redux'

const Contribute = () => {
    return (
        <div>
            <p>Know something we don't? &nbsp;<span className='advice'>
                <a href="#/advice"><i className='fas fa-plus' />&nbsp;Add a Tip</a></span>
            </p>
        </div>
    )
}

export default Contribute