// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = (props) => {
  // Add state for the comments
  const [comment] = useState(props.comment);

  return (
    <div>
      {props.comments.map((comment) => (
        <Comment comment={comment} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
