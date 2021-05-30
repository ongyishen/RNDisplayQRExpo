import React from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QRWithColor() {
  return (
    <QRCode
      value="https://www.buymeacoffee.com/ongyishen"
      size={300}
      color={"#C2185B"}
      backgroundColor={"#2582e0"}
    />
  );
}

const styles = StyleSheet.create({});
