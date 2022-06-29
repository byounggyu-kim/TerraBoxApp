import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';

const MovieComment = ({movieData}) => {
  const comments = movieData.reviews;
  const count = movieData.reviews_count;
  return (
    <View>
      <Text>
        {movieData.name}에 대한 {count}개의 관람평이 있어요
      </Text>
      <TextInput style={styles.input} placeholder="댓글을 입력해주세요" />
      {comments.map(comment => (
        <View key={comment.review_id} style={styles.comment}>
          <Text style={styles.nick}>{comment.nickname}</Text>
          <Text style={styles.content}>{comment.content}</Text>
        </View>
      ))}
    </View>
  );
};

export default MovieComment;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
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
