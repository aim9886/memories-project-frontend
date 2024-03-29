import React, {useEffect, useState} from 'react'
import useStyles from './style';
import {Paper, TextField, Button, Typography} from '@material-ui/core';
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux';
import {createPost, updatePost} from '../../actions/posts';
import {useSelector} from 'react-redux';
const Form = ({currentId, setCurrentId}) => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [postData, setPostData] = useState({
         title: '', message: '', tags: '', selectedFile: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : 0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post)
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [post,user]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!currentId) {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
          } else {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
          }
        clear();
    }
    if(!user?.result?.name){
        return(
            <Paper className='classes.paper'>
                <Typography variant="h6" align="center">
                    Please sign in to create your own memories and like others' memories...
                </Typography>
            </Paper>
        )
    }
    const clear = () => {
        setCurrentId(0);
        setPostData ({title: '', message: '', tags: '', selectedFile:''});
    }

    return(
        <Paper className = {classes.paper}>
            <form autoComplete = "off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                <TextField name = "title" variant="outlined" label = "Title" fullWidth value = {postData.title} onChange = {(e) => setPostData({ ...postData, title: e.target.value})}/>
                <TextField name = "message" variant="outlined" label = "Message" fullWidth value = {postData.message} onChange = {(e) => setPostData({ ...postData, message: e.target.value})}/>
                <TextField name = "tags" variant="outlined" label = "Tags" fullWidth value = {postData.tags} onChange = {(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}/>
                <div className = {classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}></FileBase>
                </div>
                <Button className = {classes.buttonSubmit} variant= "contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant= "contained" color="secondary" size="small" type={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;