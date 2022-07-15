import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CommentModal from './CommentModal';

const MovieComment = ({movieData, movieId}) => {
  const [openExit, setOpenExit] = useState(false);
  const comments = movieData.reviews;
  const count = movieData.reviews_count;
  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => setOpenExit(true)}>
          <Text style={styles.buttonText}>댓글 작성하러 가기</Text>
        </TouchableOpacity>
        <Text style={styles.commentTitle}>댓글 {count}</Text>
        {comments.map(comment => (
          <View key={comment.review_id} style={styles.comment}>
            <Text style={styles.nick}>{comment.nickname}</Text>
            <Text style={styles.content}>{comment.content}</Text>
          </View>
        ))}
      </View>
      <CommentModal
        openExit={openExit}
        setOpenExit={setOpenExit}
        movieId={movieId}
      />
    </>
  );
};

export default MovieComment;

const styles = StyleSheet.create({
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',
    height: 50,
    backgroundColor: '#27402D',
    borderRadius: 10,
    marginBottom: 20,
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
  },

  commentTitle: {
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 20,
  },

  comment: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 20,
  },

  nick: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
  },

  content: {
    flex: 2,
  },
});
