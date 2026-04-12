import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="profile/setting"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile/account-center"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
