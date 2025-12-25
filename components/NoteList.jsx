import { View } from 'react-native';
import NoteItem from './NoteItem';
import { FlatList } from 'react-native-web';

const NoteItem = ({ notes }) => {
    return (
        <View>
            <FlatList

                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <NoteItem note={item} />}
                />
        </View>
    )
}