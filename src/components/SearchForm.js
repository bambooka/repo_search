import React from "react";
import {connect} from "react-redux";
import {changeInputActionCreator} from "../redux/actionCreators/changeInputActionCreator";
import {selectOptionActionCreator} from "../redux/actionCreators/selectOptionActionCreator";
import {fetchingDataActionCreator} from "../redux/actionCreators/fetchingDataActionCreator";

const SearchForm = ({props, dispatch}) => {
  const data = props.selectorData;
  return (<>
      {/*<form className='row align-self-center' onSubmit={(e) => {*/}
      {/*  e.preventDefault();*/}
      {/*  // console.log(fetchingDataActionCreator())*/}
      {/*  dispatch(fetchingDataActionCreator(data))*/}
      {/*  dispatch({type: 'CLEAR_INPUT'})*/}
      {/*}} className='searchForm'>*/}
      {/*  <input*/}
      {/*    value={data.inputText}*/}
      {/*    onChange={(e) => dispatch(changeInputActionCreator(e.target.value))}*/}
      {/*    type='input'*/}
      {/*    placeholder='input app name'/>*/}
      {/*  <div>*/}
      {/*    {data.languages.map((lg, index) => {*/}
      {/*      return <><input*/}
      {/*        checked={data.selectedOption === lg}*/}
      {/*        onChange={(e) => dispatch(selectOptionActionCreator(e.target.value))}*/}
      {/*        name='language'*/}
      {/*        key={index}*/}
      {/*        type='radio'*/}
      {/*        value={lg}/> <>{lg}</>*/}
      {/*      </>*/}
      {/*    })*/}
      {/*    }*/}
      {/*  </div>*/}
      {/*</form>*/}

      <form className='align-self-center' onSubmit={(e) => {
        e.preventDefault();
        // console.log(fetchingDataActionCreator())
        dispatch(fetchingDataActionCreator(data))
        dispatch({type: 'CLEAR_INPUT'})
      }}>
        <div className="form-group">
          <label htmlFor="inputRepoName">Repo name</label>
          <input
            id='inputRepoName'
            className='form-control'
            value={data.inputText}
            onChange={(e) => dispatch(changeInputActionCreator(e.target.value))}
            type='input'
            placeholder='input app name'
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-check d-flex flex-column">
          <label className='d-flex flex-column'>
            Select language
            {data.languages.map((lg, index) => {
              return <label>
                <input
                  id='selectLanguage'
                  checked={data.selectedOption === lg}
                  onChange={(e) => dispatch(selectOptionActionCreator(e.target.value))}
                  name='language'
                  key={index}
                  type='radio'
                  value={lg}
                  className="form-check-input"
                /> <>{lg}</>
              </label>
            })
            }
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

const mapStateToProps = (state) => {
  return {props: state}
}

export default connect(mapStateToProps)(SearchForm)