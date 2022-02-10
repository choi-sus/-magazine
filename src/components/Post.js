import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Grid, Image, Text, Button} from "../elements";
import {history} from "../redux/configureStore";
import {actionCreators as postActions} from "../redux/modules/post";
import { apiKey } from "../shared/firebase";

const Post = (props) => {
    const is_login = useSelector((state) => state.user.is_login);
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
    const is_session = sessionStorage.getItem(_session_key)? true : false;

    const dispatch =  useDispatch();
    const post_list = useSelector((state)=> state.post.list);

    const delClick = ()=> {

      let del = prompt("삭제를 원하시면 네를 입력해 주세요.");

        if(del === "네"){
            dispatch(postActions.delPostFB(post_list[props.idx].id))
            alert("삭제가 완료됐습니다."); 
        }else {
            alert("삭제가 취소됐습니다.")
            window.location.reload();
        }
    }


    if(props.layout === "img_right"){
      return (
        <React.Fragment>
          <Grid bg="#faf5ff" margin="0 0 80px 0" padding="20px 35px" is_hover={!props.active ? `transform: scale(1.03);` : ""}>
            <Grid _onClick={()=> {history.push(`/post/${props.id}`);}} is_cursor>
              <Grid is_flex margin="0 0 15px 0">
                <Grid is_flex width="auto">
                  <Image shape="circle" src={props.src} />
                  <Text size="20px" margin="0 0 0 10px" bold>{props.user_info.user_name}</Text>
                </Grid>
                <Grid width="auto">
                  <Text size="16px" margin="0">{props.insert_dt}</Text>
                </Grid>
              </Grid>
              <Grid is_flex margin="0 0 30px 0">
                <Grid>
                  <Text size="25px" margin="0 25px 0 0">{props.contents}</Text>
                </Grid>
                <Grid is_shadow>
                  <Image shape="rectangle" src={props.image_url} />
                </Grid>
              </Grid>
            </Grid>
            <Grid margin="0">
              <Grid width="auto">
                {props.is_me && <Button width="55px" margin="0 0 0 10px" padding="0" _onClick={()=> {history.push(`/write/${props.id}`)}}>수정</Button>}
                {props.is_me && <Button width="55px" margin="0 0 0 10px" padding="0" _onClick={()=> delClick()}>삭제</Button>}
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    }
    if(props.layout === "img_left"){
      return (
        <React.Fragment>
          <Grid bg="#faf5ff" margin="0 0 80px 0" padding="20px 35px" is_hover={!props.active ? `transform: scale(1.03);` : ""}>
            <Grid _onClick={()=> {history.push(`/post/${props.id}`);}} is_cursor>
              <Grid is_flex margin="0 0 15px 0">
                <Grid is_flex width="auto">
                  <Image shape="circle" src={props.src} />
                  <Text size="20px" margin="0 0 0 10px" bold>{props.user_info.user_name}</Text>
                </Grid>
                <Grid width="auto">
                  <Text size="16px" margin="0">{props.insert_dt}</Text>
                </Grid>
              </Grid>
              <Grid is_flex margin="0 0 30px 0">
                <Grid is_shadow>
                  <Image shape="rectangle" src={props.image_url} />
                </Grid>
                <Grid>
                  <Text size="25px" margin="0 0 0 25px">{props.contents}</Text>
                </Grid>
              </Grid>
            </Grid>
            <Grid margin="0">
              <Grid width="auto">
                {props.is_me && <Button width="55px" margin="0 0 0 10px" padding="0" _onClick={()=> {history.push(`/write/${props.id}`)}}>수정</Button>}
                {props.is_me && <Button width="55px" margin="0 0 0 10px" padding="0" _onClick={()=> delClick()}>삭제</Button>}
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Grid bg="#faf5ff" margin="0 0 80px 0" padding="20px 35px" is_hover={!props.active ? `transform: scale(1.03);` : ""}>
          <Grid _onClick={()=> {history.push(`/post/${props.id}`);}} is_cursor>
            <Grid is_flex margin="0 0 15px 0">
              <Grid is_flex width="auto">
                <Image shape="circle" src={props.src} />
                <Text size="20px" margin="0 0 0 10px" bold>{props.user_info.user_name}</Text>
              </Grid>
              <Grid width="auto">
                <Text size="16px" margin="0">{props.insert_dt}</Text>
              </Grid>
            </Grid>
            <Grid margin="0 0 25px 0">
              <Text size="25px" margin="0">{props.contents}</Text>
            </Grid>
            <Grid margin="0 0 30px 0" is_shadow>
              <Image shape="rectangle" src={props.image_url} />
            </Grid>
          </Grid>
          <Grid margin="0">
            <Grid width="auto">
              {props.is_me && <Button width="55px" margin="0 0 0 10px" padding="0" _onClick={()=> {history.push(`/write/${props.id}`)}}>수정</Button>}
              {props.is_me && <Button width="55px" margin="0 0 0 10px" padding="0" _onClick={()=> delClick()}>삭제</Button>}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}

Post.defaultProps = {
  user_info: {
    user_name: "yeon",
    user_profile: "http://file3.instiz.net/data/cached_img/upload/2019/01/15/6/04ee674122410d063a5966fa16da5db6.jpg",
  },
  image_url: "http://file3.instiz.net/data/cached_img/upload/2019/01/15/6/04ee674122410d063a5966fa16da5db6.jpg",
  contents: "마이멜로디!",
  insert_dt: "2021-02-27 10:00:00",
  is_me: false,
};

export default Post;