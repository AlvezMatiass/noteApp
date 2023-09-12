import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { useEffect, useState } from 'react';

const Notes = ( { Title, Description, Date, Location, Importance, Friends } ) => {

    const [importanceColor, setImportanceColor] = useState('#437F97')

    useEffect(()=> {
        if(Importance === 'red') {         
            setImportanceColor('#FD151B')
        } else if(Importance === 'yellow') {
            setImportanceColor('#FFB30F')
        } else if(Importance === 'green') {
            setImportanceColor('#849324')
        }
    },[Importance]) 

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.noteTitle}>{ Title }</Text>
            <Text style={styles.noteDescription}>{ Description }</Text>
            {
                Location ? (
                    <Text style={styles.noteLocation}>{ Location }</Text>
                ) : ''
            }
            {
                Friends ? (
                    <Text style={styles.noteFriends}>{ Friends }</Text>
                ) : ''
            }
            
            <View style={styles.noteFinalContainer}>
                <Text style={styles.noteDate}>{ Date }</Text>
                <Text style={[styles.noteImportance, {backgroundColor: importanceColor}]}></Text>
            </View>
        </TouchableOpacity>
    )
}

export default Notes;