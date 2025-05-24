import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

// Font registration
Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/roboto/files/roboto-latin-400-normal.woff",
      fontWeight: "normal",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/roboto/files/roboto-latin-700-normal.woff",
      fontWeight: "bold",
    },
  ],
});

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontFamily: "Roboto",
    fontSize: 11,
    position: "relative",
    backgroundColor: "#fff",
    flexDirection: "column",
     paddingTop: 120,    
  paddingBottom: 100,
  },
  logo2: {
    position: "absolute",
    top: 30,
    left: 30,
    width: 60,
  },
  upperDesign: {
    position: "absolute",
    top: -10,
    right: 0,
    width: 280,
      marginBottom: 80,   

  },
  lowerDesign: {
    position: "absolute",
    bottom: -10,
    right: 0,
    width: 300,
    marginTop:"20px"
  },
mainContent: {
  marginTop: 120,     
  marginBottom: 80,   
  paddingHorizontal: 40,
},
  maintext: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 1.5,
  },
  footerText: {
    position: "absolute",
    bottom: 20,
    left: 32,
    fontSize: 10,
    textAlign: "start",
    width: 300,
  },
});

const MotivationPDF = ({ fullText, assets }) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      {/* Design elements that should appear on every page */}
      <Image src={assets.upper} style={styles.upperDesign} fixed />
      <Image src={assets.lower} style={styles.lowerDesign} fixed />
      <Image src={assets.logo2} style={styles.logo2} fixed />

      {/* Main content */}
      <View style={styles.mainContent}>
        <Text style={styles.maintext}>{fullText}</Text>
      </View>

      {/* Footer */}
      <Text style={styles.footerText} fixed>
        www.findyourtruenorth.co.in{"\n"}
        findyourtruenorth.in@gmail.com
      </Text>
    </Page>
  </Document>
);

export default MotivationPDF;
