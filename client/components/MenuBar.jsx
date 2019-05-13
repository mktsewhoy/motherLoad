import React , {Fragment} from 'react'

class MenuBar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <div className="wrapper">
                    <nav key="navbar" className="tabs">
                        <div className="selector"></div>
                        <a href="#" className="active"><i className="fas fa-home" />&nbsp;Home</a>
                        <a href='#/pcparts/'><i className="fas fa-desktop" />&nbsp;PC Parts</a>
                        <a href='#/tips'><i className="fas fa-hands-helping" />&nbsp;Tips</a>
                        <a href='#/tutorials'><i className="fas fa-chalkboard-teacher" />&nbsp;Tutorials</a>
                        <a href='#/articles'><i className="far fa-newspaper" />&nbsp;Articles</a>
                    </nav>
                </div>
    
            </Fragment>
        )
    }
}

export default MenuBar