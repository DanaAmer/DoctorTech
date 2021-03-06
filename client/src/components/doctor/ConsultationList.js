import React from 'react';
import {
  List, Paper
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { getDoctors } from '../../store/action/doctorActions';
import ConsultationListEntry from './ConsultationListEntry';


class ConsultationList extends React.Component {

  render() {

    return (
        <List style={{ width: "100%", maxWidth: "100%", position: 'relative', overflow: 'auto', height: "810px" }}>
          {
            this.props.consults && this.props.consults.map((elem) => (
              <ConsultationListEntry key={elem.consultId} consults={elem} />
            ))
          }

        </List>
    )
  }
}

//Note:add the redux state to the props
const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    doctors: state.doctor.doctors,
    consultsOutbox: state.doctor.consultsOutbox,
    consultsInbox: state.doctor.consultsInbox
  }
}

//Note: add the action to the props
const mapDispatchToProps = (dispatch) => {
  return {
    getDoctors: () => dispatch(getDoctors())
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ConsultationList);