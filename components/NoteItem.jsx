import { View, Text } from 'react-native';

const NoteItem = ({ note }) => {
    return (
     <View style={styles.noteItem}>
         <Text style={styles.noteText}>{item.text}</Text>
    </View>
    );
};

export default NoteItem;