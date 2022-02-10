import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Button} from "../elements";
import { storage } from "./firebase";
import { actionCreators as imageActions } from "../redux/modules/image";


const Upload = (props)=> {

    const fileInput = React.useRef();
    const is_uploading = useSelector(state => state.image.uploading);
    const dispatch = useDispatch();

    const selectFile = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.files[0]);

        console.log(fileInput.current.files[0]);

        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            console.log(reader.result);
            dispatch(imageActions.setPreview(reader.result));
        }
    }

    const uploadFB = () => {
        let image = fileInput.current.files[0];
        dispatch(imageActions.uploadImageFB(image))
    }

    return(
        <React.Fragment>
            <input type="file" ref={fileInput} onChange={selectFile} disabled={is_uploading}></input>
            <Button margin="20px 0 50px 0" text="업로드하기" _onClick={uploadFB} disabled={!props.preview ? true : false}></Button>
        </React.Fragment>
    )
}

export default Upload;