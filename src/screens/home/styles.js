import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12
    },
    categoryContainer: {
        flexDirection: 'row',
        marginBottom: 12,
        gap: 12
    },
    notesContainer: {
        alignItems: 'center',
        gap: 12
    },
    text: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium'
    }
})