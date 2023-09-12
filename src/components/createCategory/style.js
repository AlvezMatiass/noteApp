import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    createCategoryContainer: {
        height: 32,
        width: 32,
        borderRadius: 100,
        backgroundColor: COLORS.backgroundSecundary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    createCategory: {
        color: COLORS.textBlack,
        fontSize: 20
    },
})