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
        <Text>
          {movieData.name}에 대한 {count}개의 관람평이 있어요
        </Text>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => setOpenExit(true)}>
          <Text style={styles.buttonText}>댓글 작성하러 가기</Text>
        </TouchableOpacity>
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
  input: {
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },

  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',
    height: 50,
    backgroundColor: '#27402D',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
  },

  comment: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignSelf: 'center',
  },

  nick: {
    flex: 1,
  },

  content: {
    flex: 2,
  },
});
