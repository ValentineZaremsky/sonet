import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage
});

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: () => {
      dispatch(addMessageActionCreator())
    },
    changeMessage: (text) => {
      dispatch(updateMessageActionCreator(text))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
