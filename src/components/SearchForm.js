import React from "react";
import {connect} from "react-redux";
import {changeInputActionCreator} from "../redux/actionCreators/changeInputActionCreator";
import {selectOptionActionCreator} from "../redux/actionCreators/selectOptionActionCreator";
import {fetchingDataActionCreator} from "../redux/actionCreators/fetchingDataActionCreator";

const SearchForm = ({props, dispatch}) => {
  const data = props.selectorData;
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // console.log(fetchingDataActionCreator())
      dispatch(fetchingDataActionCreator(data))
      dispatch({type: 'CLEAR_INPUT'})
    }} className='searchForm'>
      <input
        value={data.inputText}
        onChange={(e) => dispatch(changeInputActionCreator(e.target.value))}
        type='input'
        placeholder='input app name'/>
      <div>
        {data.languages.map((lg, index) => {
          return <><input
            checked={data.selectedOption === lg}
            onChange={(e) => dispatch(selectOptionActionCreator(e.target.value))}
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