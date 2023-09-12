import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        height: 32,
        paddingHorizontal: 16,
        backgroundColor: COLORS.backgroundSecundary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryText: {
        color: COLORS.textBlack,
        fontFamily: 'Inter-Bold'
    }
})