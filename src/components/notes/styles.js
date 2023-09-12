import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        width: '98%',
        backgroundColor: COLORS.backgroundSecundary,
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 12,
    },
    noteTitle: {
        color: COLORS.textBlack,
        fontFamily: 'Inter-Bold',
        fontSize: 18
    },
    noteDescription: {
        color: COLORS.textBlack,
        fontFamily: 'Inter-Medium',
        fontSize: 14
    },
    noteLocation: {
        color: COLORS.textBlack,
        fontFamily: 'Inter-Regular',
        fontSize: 12
    },
    noteFinalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 6
    },
    noteDate: {
        color: COLORS.textBlack,
        fontFamily: 'Inter-Bold',
        fontSize: 12,
    },
    noteImportance: {
        width: 10,
        height: 10,
        borderRadius: 100,
    }
})