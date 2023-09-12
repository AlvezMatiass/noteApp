import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { Categories, CreateCategory, Notes, CreateNoteButton } from '../../components';

const Home = () => {

    return (
        <View style={styles.container}>
            <View style={styles.categoryContainer}>
                <Categories category='All' />
                <Categories category='Colegio' />
                <Categories category='Trabajo' />
                <Categories category='Casa' />
                <CreateCategory />
            </View>
            <ScrollView contentContainerStyle={styles.notesContainer}>
                <Notes 
                Title='Ir al colegio' 
                Description='tengo clase importante el jueves a las 14:00 hs'
                Date='13-09-23'
                Location='Colegio Nro 47*'
                Importance='red'
                Friends={`${'@Hizoka'} ${'@Franciscois'} ${'@Ariel'}`}
                />
                <Notes 
                Title='Reunion de padres' 
                Description='asistir a reunion de padres de Milo'
                Date='25-10-23'
                Location='Jardin Juan de Jose Paz'
                Importance='yellow'
                Friends= ''
                />
                <Notes 
                Title='Limpiar la casa' 
                Description='acordarme de limpiar la casa antes del fin de semana ya que vienen visitas'
                Date='17-10-23'
                Location=''
                Importance='green'
                Friends= ''
                />
                <Notes 
                Title='Stream 30 Horas Genshin' 
                Description='acordarme de jugar las 30 horas de genshin durante todo el mes, afk o jugarlo yo para ganar las protogemas gratis'
                Date='23-11-23'
                Location=''
                Importance='red'
                Friends= {`${'@Franciscois'}`}
                />
                <Notes 
                Title='Reunion de padres' 
                Description='asistir a reunion de padres de Milo'
                Date='25-10-23'
                Location='Jardin Juan de Jose Paz'
                Importance='yellow'
                Friends= ''
                />
                <Notes 
                Title='Limpiar la casa' 
                Description='acordarme de limpiar la casa antes del fin de semana ya que vienen visitas'
                Date='17-10-23'
                Location=''
                Importance='green'
                Friends= ''
                />
            </ScrollView>
            <CreateNoteButton />
        </View>
    )    
};

export default Home;