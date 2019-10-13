import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';
import { ListItem } from 'react-native-elements';

const Objectif = ({ title, id, onDelete }) => (
  // <View style={styles.listItem}>
  //   <Text>{title}</Text>
  // </View>
  <TouchableNativeFeedback onPress={() => onDelete(id)}>
    <ListItem
      title={title}
      bottomDivider
    />
  </TouchableNativeFeedback>
);

// const styles = StyleSheet.create({
//   listItem: {
//     padding: 10,
//     marginVertical: 5,
//     backgroundColor: '#ccc',
//     borderColor: 'black',
//     borderWidth: 1,
//   },
// });

Objectif.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Objectif;
