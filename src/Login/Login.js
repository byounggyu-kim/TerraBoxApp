import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [userInfo, setUserInfo] = useState({id: '', pw: ''});
  const navigation = useNavigation();
  const loginAuth = () => {
    if (userInfo.id === 'briankim' && userInfo.pw === 'qwerty') {
      Alert.alert('환영합니다  ' + userInfo.id + '님', '입장하시겠습니까?', [
        {
          text: '네',
          onPress: () => {
            navigation.navigate('Main');
            setUserInfo({id: '', pw: ''});
          },
        },
      ]);
    } else {
      Alert.alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <View style={styles.white}>
      <View style={styles.inputLayout}>
        <Text style={styles.textDecoration}>아이디</Text>
        <TextInput
          placeholder="아이디나 이메일을 입력하세요"
          style={styles.input}
          value={userInfo.id}
          onChangeText={x => setUserInfo({id: x, pw: userInfo.pw})}
          clearButtonMode="while-editing"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Text style={styles.textDecoration}>비밀번호</Text>
        <TextInput
          placeholder="비밀번호를 입력하세요"
          style={styles.input}
          secureTextEntry={true}
          value={userInfo.pw}
          onChangeText={x => setUserInfo({id: userInfo.id, pw: x})}
          clearButtonMode="while-editing"
        />
        <TouchableOpacity style={styles.button} onPress={() => loginAuth()}>
          <Text style={styles.buttonText}>로그인하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  white: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputLayout: {
    width: '80%',
    marginBottom: 150,
  },

  textDecoration: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 25,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginBottom: 45,
  },

  button: {
    backgroundColor: '#27402D',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'whitesmoke',
  },
});
