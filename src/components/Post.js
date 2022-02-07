import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Grid, Image, Text, Button} from "../elements";
import {history} from "../redux/configureStore";
import {actionCreators as postActions} from "../redux/modules/post";

const Post = (props) => {
    const dispatch =  useDispatch();
    const post_list = useSelector((state)=> state.post.list);

    const delClick = ()=> {
      console.log(post_list[props.idx].id);

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
          <Grid>
            <Grid is_flex padding="16px">
              <Grid is_flex width="auto">
                <Image shape="circle" src={props.src} />
                <Text bold>{props.user_info.user_name}</Text>
              </Grid>
              <Grid is_flex width="auto">
                <Text>{props.insert_dt}</Text>
                {props.is_me && <Button width="auto" margin="4px" padding="4px" _onClick={()=> {history.push(`/write/${props.id}`)}}>수정</Button>}
                {props.is_me && <Button width="auto" margin="4px" padding="4px" _onClick={()=> delClick()}>삭제</Button>}
              </Grid>
            </Grid>
            <Grid is_flex>
              <Grid padding="16px">
                <Text>{props.contents}</Text>
              </Grid>
              <Grid _onClick={()=> {history.push(`/post/${props.id}`);}}>
                <Image shape="rectangle" src={props.image_url} />
              </Grid>
            </Grid>
            <Grid padding="16px">
              <Text margin="0" bold>댓글 {props.comment_cnt}개</Text>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    }
    if(props.layout === "img_left"){
      return (
        <React.Fragment>
          <Grid>
            <Grid is_flex padding="16px">
              <Grid is_flex width="auto">
                <Image shape="circle" src={props.src} />
                <Text bold>{props.user_info.user_name}</Text>
              </Grid>
              <Grid is_flex width="auto">
                <Text>{props.insert_dt}</Text>
                {props.is_me && <Button width="auto" margin="4px" padding="4px" _onClick={()=> {history.push(`/write/${props.id}`)}}>수정</Button>}
                {props.is_me && <Button width="auto" margin="4px" padding="4px" _onClick={()=> delClick()}>삭제</Button>}
              </Grid>
            </Grid>
            <Grid is_flex>
              <Grid _onClick={()=> {history.push(`/post/${props.id}`);}}>
                <Image shape="rectangle" src={props.image_url} />
              </Grid>
              <Grid padding="16px">
                <Text>{props.contents}</Text>
              </Grid>
            </Grid>
            <Grid padding="16px">
              <Text margin="0" bold>댓글 {props.comment_cnt}개</Text>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image shape="circle" src={props.src} />
              <Text bold>{props.user_info.user_name}</Text>
            </Grid>
            <Grid is_flex width="auto">
              <Text>{props.insert_dt}</Text>
              {props.is_me && <Button width="auto" margin="4px" padding="4px" _onClick={()=> {history.push(`/write/${props.id}`)}}>수정</Button>}
              {props.is_me && <Button width="auto" margin="4px" padding="4px" _onClick={()=> delClick()}>삭제</Button>}
            </Grid>
          </Grid>
          <Grid padding="16px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid _onClick={()=> {history.push(`/post/${props.id}`);}}>
            <Image shape="rectangle" src={props.image_url} />
          </Grid>
          <Grid padding="16px">
            <Text margin="0" bold>댓글 {props.comment_cnt}개</Text>
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
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
  is_me: false,
};

export default Post;