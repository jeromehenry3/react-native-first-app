import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, Button,
} from 'react-native';

import Objectif from './components/Objectif';
import ObjectifInput from './components/ObjectifInput';

export default function App() {
  const [objectifs, setObjectifs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addObjectif = (value) => {
    value !== '' && setObjectifs(actualValue => [
      ...actualValue,
      { id: Math.random().toString(), title: value },
    ]);
    setShowModal(false);
  };

  const RemoveObjectif = (id) => {
    setObjectifs(objectifsActuels => objectifsActuels.filter(obj => obj.id !== id));
  };

  const cancelModal = () => {
    setShowModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Ajouter un élément" onPress={() => setShowModal(true)} />
      <ObjectifInput onAddObjectif={addObjectif} visible={showModal} onCancel={cancelModal} />
      <FlatList
        data={objectifs}
        keyExtractor={item => item.id}
        renderItem={
          itemData => (
            <Objectif
              title={itemData.item.title}
              id={itemData.item.id}
              onDelete={RemoveObjectif}
            />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

});
