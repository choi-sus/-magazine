import React from "react";
import {Grid, Text, Button} from "../elements";
import {getCookie, deleteCookie} from "../shared/Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {history} from "../redux/configureStore"
import { apiKey } from "../shared/firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
  const is_session = sessionStorage.getItem(_session_key)? true : false;
  const user_info = useSelector((state)=> state.user.user);

  if(is_login && is_session){
        const user_name = user_info.user_name;

        return (
          <React.Fragment>
            <Grid bg="#fff" height="auto" is_zIndex is_fixed is_flex padding="15px 20%" border="4px solid rgb(168, 105, 208)">
              <Grid width="auto">
                <FontAwesomeIcon icon={faHome} onClick={()=> {history.push("/");}} style={{fontSize: "45px", color: "rgb(168 105 208)", cursor: "pointer"}}/>
              </Grid>
              <Grid width="auto" is_flex>
                <Text size="18px" margin="0 15px 0 0" color="rgb(168,105,208)" bold>{user_name}님 환영합니다 :)</Text>
                <Button text="Log Out" _onClick={()=> {dispatch(userActions.logoutFB());}} lineHeight= "35px" padding="0" width="100px"></Button>
              </Grid>
            </Grid>
          </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <Grid bg="#fff" height="auto" is_zIndex is_fixed is_flex padding="15px 20%" border="4px solid rgb(168, 105, 208)">
                <Grid>
                  <FontAwesomeIcon icon={faHome} onClick={()=> {history.push("/");}} style={{fontSize: "45px", color: "#8b48b5", cursor: "pointer"}}/>
                </Grid>
                
                <Grid is_flex width="auto">
                    <Button text="Log In" _onClick={()=> {history.push("/login");}} lineHeight= "35px" padding="0" width="100px"></Button>
                    <Button text="Sign Up" _onClick={()=> {history.push("/signup");}} lineHeight= "35px" padding="0" width="100px" margin="0 0 0 15px"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {}

export default Header;