import { connect } from "react-redux";
import UserList from "./UserListView";
import * as user from "<src>/reducers/user";
import {getUsersAction} from "../../actions";


const mapStateToProps = state => ({
    users: state.users,
});

const mapDispatchToProps = {
    getUsersAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);