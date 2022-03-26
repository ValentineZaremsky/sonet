import { connect } from "react-redux";
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

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
