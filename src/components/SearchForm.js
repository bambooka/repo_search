import React from "react";
import {connect} from "react-redux";



const SearchForm = ({props, dispatch}) => {
  console.log(props, '1')
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch({type: 'CLEAR_INPUT'})
    }} className='searchForm'>
      <input value={props.inputText} onChange={(e) => dispatch({type: 'CHANGE_INPUT', inputData: e.target.value})} type='input' placeholder='input app name'/>
      <div>
        {props.languages.map((lg, index) => {
          return <><input
            checked={props.selectedOption === lg}
            onChange={(e) => dispatch({type: 'SELECT_OPTION', selectedOption: e.target.value})}
            name='language'
            key={index}
            type='radio'
            value={lg}/> <>{lg}</>
          </>
        })
        }
      </div>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {props: state}
}

export default connect(mapStateToProps)(SearchForm)