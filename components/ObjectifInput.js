import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, TextInput, Modal,
} from 'react-native';
import { Button } from 'react-native-elements';

const ObjectifInput = ({ onAddObjectif, visible, onCancel }) => {
  const [objectif, setObjectif] = useState('');

  const inputHandler = (inputValue) => {
    setObjectif(inputValue);
  };

  const buttonPressHandler = () => {
    onAddObjectif(objectif);
    setObjectif('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput placeholder="Objectifs" style={styles.textInput} onChangeText={inputHandler} value={objectif} onSubmitEditing={buttonPressHandler} />
        <View style={styles.buttonContainer}>
          <Button title="annuler" buttonStyle={styles.cancelButton} containerStyle={styles.buttonWidth} onPress={onCancel} />
          <Button title="ajouter" type="outline" buttonStyle={styles.button} containerStyle={styles.buttonWidth} onPress={buttonPressHandler} />
        </View>
      </View>
    </Modal>
  );
};

ObjectifInput.propTypes = {
  onAddObjectif: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // height: 45,
    // alignItems: 'stretch',
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10,
    // flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  buttonWidth: {
    width: '40%',
  },
});

export default ObjectifInput;
