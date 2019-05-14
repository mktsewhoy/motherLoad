import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import { addDataToDB } from '../apis/resources'
import{ fetchCategories } from "../actions/categories"
import {addToDataBase} from '../actions/add'


class AdviceForm extends React.Component {
  constructor(props){
    super(props)
    this.state ={
        categories: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
}
  componentDidMount(){
    this.props.dispatch(fetchCategories())
}
handleSubmit(event){
    event.preventDefault()
    addDataToDB(this.state)
}
handleChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
}
handleCategory(event){
    const arr = this.state.categories
    const thing = event.target.value
    const index = arr.indexOf(thing)
    return(index > -1 ? arr.splice(index, 1) : this.setState({
        categories: [...this.state.categories, event.target.value]
     }))
    
    // if it exists in array then remove it else add it

    
}
  render(){
      console.log(this.state)
    return(


      <Fragment>
          <h2 className='title is-2 has-text-centered has-text-white'>
                  Tweet of advice 
              </h2>
              <form onSubmit={this.handleSubmit}>
                  <div className="field">

                      <label className="label has-text-white">
                          Title
                      </label>
                      <div className="control">
                          <input className="input" type="text" name="title" placeholder='title'onChange={this.handleChange} /><br /><br />
                      </div>
                      
                      <label className="label has-text-white">
                          I'd like to give advice on:
                      </label>
                      <div className="control">
                      {this.props.categories.map(category =>{
                        return(
                            <div key={category.id} className='b-checkbox is-inline '>
                            
                            <span className='has-text-white'>
                            <input type="checkbox" name={category.name} value={category.id} onChange={this.handleCategory} />&nbsp;{category.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            </div>
                        )   
                        })}
                        <br /><br />
                      </div>





                      <label className="label has-text-white">
                          Advice
                      </label>
                      <div className="control">
                          <textarea className="textarea" name="description" placeholder="Enter a tweet of advice" onChange={this.handleChange}></textarea>
                      </div>
                      <div className="control is-inline">
                        <span className='has-text-white'><input type="radio" name="type" value="tip" onChange={this.handleChange}/>&nbsp;Tip&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className='has-text-white'><input type="radio" name="type" value="tutorial" onChange={this.handleChange}/>&nbsp;Tutorial</span>
                      </div>
                      <br /><br />
                      <label className="label has-text-white">
                          URL for Tutorial
                      </label>
                      <div className="control">
                          <input className="input" type="text" name="sourceUrl" placeholder='url here' onChange={this.handleChange} />
                      </div> <br/>
                      <div className="control">
                          <label className="label">
                              <input className="input is-large is-success" type="submit" value='Submit' onSubmit={this.handleSubmit}/>
                          </label>
                      </div>
                  </div>
              </form>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
    return{
        categories: state.categories,
        add: state.add
    }
}
export default connect(mapStateToProps)(AdviceForm)
