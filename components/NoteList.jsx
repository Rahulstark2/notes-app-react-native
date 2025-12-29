import { FlatList, View } from 'react-native';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete, onEdit }) => {
    return (
        <View>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => <NoteItem note={item}
                    onDelete={onDelete} onEdit={onEdit} />}
                keyboardShouldPersistTaps='handled'
            />
        </View>
    );
};

export default NoteList;