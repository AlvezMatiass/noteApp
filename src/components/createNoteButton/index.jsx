import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './style';
import { COLORS } from '../../themes';

const CreateNoteButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <MaterialCommunityIcons name="note-edit-outline" size={24} color={COLORS.textWhite} />
            </TouchableOpacity>
        </View>
    )
}

export default CreateNoteButton;