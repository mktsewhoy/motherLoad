import React , {Fragment} from 'react'
import {connect} from 'react-redux'

import{fetchTutorials} from "../actions/receive"
 

class Tutorials extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchTutorials())
    }
    render() {
        return(
            <Fragment>
                <h2 className='title is-2 has-text-white has-text-centered'>Tutorials</h2>
                <div className='content has-text-left' id="cleanUp">
                    

                    {this.props.tutorials.map(tutorials => {
                        return(
                            <Fragment>
                                <h3 className="has-text-white">
                                {tutorials.title}
                            </h3>
                            <p>{tutorials.description}</p>
                            </Fragment>
                        )
                    })}

                </div>
            </Fragment>
           
        )
    }
}

function mapStateToProps(state) {
    return{
        tutorials: state.tutorials
    }
}

export default connect(mapStateToProps)(Tutorials)