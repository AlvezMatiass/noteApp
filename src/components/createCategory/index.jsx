import { View, TouchableOpacity, Text } from 'react-native'
import { styles } from './style'

const CreateCategory = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.createCategoryContainer}>
                <Text style={styles.createCategory}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateCategory