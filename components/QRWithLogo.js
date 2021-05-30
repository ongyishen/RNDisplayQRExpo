import React from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QRWithLogo() {
  let logoFromFile = require("../assets/logo.png");
  return (
    <QRCode
      value="https://www.buymeacoffee.com/ongyishen"
      logo={logoFromFile}
      size={300}
      logoSize={100}
      logoBackgroundColor={"#fff"}
    />
  );
}

const styles = StyleSheet.create({});
