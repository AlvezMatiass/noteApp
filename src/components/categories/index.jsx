import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Categories = ( {category} ) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
    )
}

export default Categories;