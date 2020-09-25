import React from "react";
import {connect} from "react-redux";
const RepoItem = (props) => {
  return (
    <div className='repo-item'>
      {}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    props: state
  }
}

export default connect(mapStateToProps, null)(RepoItem);