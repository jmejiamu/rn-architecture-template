import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="login"
        options={{
          animation: "fade",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          animation: "fade",
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="forgot-password"
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack>
  );
}
