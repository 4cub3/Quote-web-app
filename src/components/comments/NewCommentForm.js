import { useEffect, useRef } from 'react';
import useHttp from '../../hooks/use-http';
import classes from './NewCommentForm.module.css';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

const NewCommentForm = ({onAddComment,quoteId}) => {
  const commentTextRef = useRef();
  const {sendRequest, status, error} = useHttp(addComment)
  useEffect(()=>{
    if(status === 'completed' && !error){
      onAddComment()
    }
  },[status, error,onAddComment])
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value
    // optional: Could validate here
    sendRequest({commentData:{text:enteredText}, quoteId: quoteId,})
    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {
        status === 'completed' && (
          <div className='centered'>
            <LoadingSpinner/>
          </div>
        )
      }
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
