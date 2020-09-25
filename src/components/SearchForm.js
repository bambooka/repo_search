import React from "react";
import {connect} from "react-redux";



const SearchForm = ({props, dispatch}) => {
  const data = props.selectorData;
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch({type: 'CLEAR_INPUT'})
    }} className='searchForm'>
      <input
        value={data.inputText}
        onChange={(e) => dispatch({type: 'CHANGE_INPUT', inputData: e.target.value})}
        type='input'
        placeholder='input app name'/>
      <div>
        {data.languages.map((lg, index) => {
          return <><input
            checked={data.selectedOption === lg}
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