import { connect } from "react-redux";
import { compose } from "redux";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage
});

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Dialogs);

// withAuthRedirect
