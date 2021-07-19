import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {useHistory} from 'react-router-dom';

import logo from '../../utils/logo.png';
import styles from './styles';

const firstScreen = ( {navigation} ) => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      //history.push('/login');
      navigation.navigate("Login")
    }, 2000);
  }, []);

  return (
    <View style={styles.background}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

export default firstScreen;
