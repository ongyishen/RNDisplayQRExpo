import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import QRWithColor from "./components/QRWithColor";
import QRWithLogo from "./components/QRWithLogo";
import SimpleQR from "./components/SimpleQR";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.qrStyle}>
            <SimpleQR></SimpleQR>
          </View>
          <View style={styles.qrStyle}>
            <QRWithLogo></QRWithLogo>
          </View>
          <View style={styles.qrStyle}>
            <QRWithColor></QRWithColor>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: "column",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  qrStyle: {
    flex: 1,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
  },
});
