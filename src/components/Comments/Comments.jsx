import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { Loader } from "../Loader/Loader";

export const Comments = () => {
  const { data: comments, isLoading } = useGetCommentsQuery();

  return (
    <>
      {isLoading && <Loader />}
      <Grid>
        {comments?.length > 0 &&
          comments.map((comment) => <Comment key={comment.id} {...comment} />)}
      </Grid>
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
