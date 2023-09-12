import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";
import { View, Text } from "react-native";
import { COLORS } from "../themes";

const Stack = createNativeStackNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
                header: () => (
                    <View style={{ height: 50, backgroundColor: COLORS.extraColor}}>
                    </View>
                )
            }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator;