import React , {Fragment} from 'react'
import {connect} from 'react-redux'

import{fetchTips} from "../actions/receive"

import Filter from "../components/Filter"
 

class Tips extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchTips())
    }
    render() {
        return(
            <Fragment>
                <p id="contribute">Know something we don't? &nbsp;<span className='advice'><a href="#/advice"><i className='fas fa-plus' />&nbsp;Add a Tip</a></span></p>
                <Filter />
                <h2 className='title is-2 has-text-centered has-text-white' >Tips</h2>
                
                <div className='content has-text-left' id="cleanUp">
                    
                    {this.props.tips.map(tips => {
                        return(
                            <Fragment>
                                <h3 className="has-text-white">
                                    <a href={tips.source_url} target='_blank'>{tips.title}</a>
                                </h3>
                                <p>
                                    {tips.description}
                                </p>
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
        tips: state.tips
    }
}

export default connect(mapStateToProps)(Tips)