import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Register</Text>

      <TouchableOpacity onPress={() => router.replace("/login")}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
