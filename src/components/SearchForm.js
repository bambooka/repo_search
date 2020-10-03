import React from "react";
import {connect} from "react-redux";
import {changeInputActionCreator} from "../redux/actionCreators/changeInputActionCreator";
import {selectOptionActionCreator} from "../redux/actionCreators/selectOptionActionCreator";
import {fetchingDataActionCreator} from "../redux/actionCreators/fetchingDataActionCreator";
import {showLoaderActionCreator} from "../redux/actionCreators/showLoaderActionCreator";
import {hideAlertActionCreator, showAlertActionCreator} from "../redux/actionCreators/alertActionCreator";

const SearchForm = ({props, dispatch}) => {
  const data = props.selectorData;
  return (<>
      <form className='align-self-center' onSubmit={(e) => {
        e.preventDefault();
        console.log(props.selectorData.inputText)
        if(props.selectorData.inputText.length > 0) {
          dispatch(fetchingDataActionCreator(data))
          dispatch(showLoaderActionCreator())
          dispatch({type: 'CLEAR_INPUT'})
        } else {
          dispatch(showAlertActionCreator('Input is empty'))
          setTimeout(() => {
            dispatch(hideAlertActionCreator())
          }, 2000)
        }
      }}>
        {props.alert.alert
          ? <div className="alert alert-info" role="alert">
            {props.alert.alert}
          </div>
        : null
        }
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