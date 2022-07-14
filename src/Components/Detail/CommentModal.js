import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Xicon from '../../../assets/xicon.png';

const CommentModal = ({openExit, setOpenExit, movieId}) => {
  const [inputValue, setInputValue] = useState('');
  const [lengthOfInput, setLengthOfInput] = useState(0);

  const postComment = () => {
    fetch(`http://15.164.163.31:8000/movies/${movieId}/reviews`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        content: inputValue,
      }),
    });
  };

  return (
    <Modal
      animationType="slide"
      visible={openExit}
      transparent={true}
      onRequestClose={() => setIsOpen(prev => !prev)}
      style={styles.modal}>
      <View style={styles.centeredView}>
        <View style={styles.modalSize}>
          <Text style={styles.title}>댓글 달기</Text>
          <TextInput
            multiline
            maxLength={100}
            value={inputValue}
            onChangeText={text => {
              setInputValue(text);
              setLengthOfInput(text.length);
            }}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.submit}
            onPress={() => setOpenExit(!openExit)}>
            <Text style={styles.submitText}>댓글 작성</Text>
          </TouchableOpacity>
          <Text style={styles.textLength}>{lengthOfInput}/100</Text>
          <TouchableOpacity
            style={styles.close}
            onPress={() => setOpenExit(prev => !prev)}>
            <Image source={Xicon} style={styles.closeButton} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CommentModal;

const styles = StyleSheet.create({
  modal: {
    marginTop: 300,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalSize: {
    margin: 20,
    width: 350,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },

  textLength: {
    position: 'absolute',
    top: 190,
    right: 75,
    color: '#ADADAD',
  },

  input: {
    width: 220,
    height: 120,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ADADAD',
    marginTop: 20,
    padding: 10,
  },

  submit: {
    width: 220,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#27402D',
    marginTop: 50,
  },

  submitText: {
    color: '#27402D',
    fontWeight: '600',
    fontSize: 16,
  },

  close: {
    position: 'absolute',
    right: 25,
    top: 30,
  },

  closeButton: {
    width: 20,
    height: 20,
  },
});
