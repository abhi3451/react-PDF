import { Page, View, Text, StyleSheet, Image, Font } from "@react-pdf/renderer";

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

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
  },
  boldText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  page: {
    width: "100%",
    height: "100%",
    padding: 10,
    fontFamily: "Roboto",
    fontSize: 11,
    position: "relative",
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  mainContent: {
    zIndex: 2,
    marginTop: 20,
    flexGrow: 1,
  },
  logo: {
    position: "absolute",
    top: 30,
    left: 30,
    width: 150,
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
  },
  lowerDesign: {
    position: "absolute",
    bottom: -10,
    right: 0,
    width: 300,
  },
  container: {
    width: "100%",
    height: "90%",
    // flex: 1,
    // justifyContent: "center",
    // alignContent: "center",
    padding: 40,
    marginTop: 30,
  },
  maintext: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
  },
  navigation: {
    position: "absolute",
    top: 40,
    right: 0,
    width: 450,
  },
  footerText: {
    position: "absolute",
    bottom: 20,
    left: 32,
    fontSize: 10,
    textAlign: "start",
    width: 300,
    zIndex: 2,
  },
});
const MotivationPage = ({
  showLogo = false,
  showLogo2 = true,
  showUpper = true,
  showLower = true,
  showNavigation = false,
  showFooterText = true,
  assets,
}) => (
  <Page size="A4" style={styles.page}>
    {showUpper && <Image src={assets.upper} style={styles.upperDesign} />}
    {showLower && <Image src={assets.lower} style={styles.lowerDesign} />}
    {showNavigation && (
      <Image src={assets.navigation} style={styles.navigation} />
    )}
    {showLogo && <Image src={assets.logo} style={styles.logo} />}
    {showLogo2 && <Image src={assets.logo2} style={styles.logo2} />}
    <View style={styles.mainContent}>
      <View style={styles.container}>
        <Text style={styles.maintext}>
          Just as a compass points to the True North, we aim to provide clarity
          and direction for your professional voyage. Let's embark on this
          colorful and vibrant expedition together, where your values,
          interests, and personality traits serve as the guiding stars to chart
          your course. Just as a compass points to the True North, we aim to
          provide clarity and direction for your professional voyage. Let's
          embark on this colorful and vibrant expedition together, where your
          values, interests, and personality traits serve as the guiding stars
          to chart your course. Just as a compass points to the True North, we
          aim to provide clarity and direction for your professional voyage.
          Let's embark on this colorful and vibrant expedition together, where
          your values, interests, and personality traits serve as the guiding
          stars to chart your course. Just as a compass points to the True
          North, we aim to provide clarity and direction for your professional
          voyage. Let's embark on this colorful and vibrant expedition together,
          where your values, interests, and personality traits serve as the
          guiding stars to chart your course. Just as a compass points to the
          True North, we aim to provide clarity and direction for your
          professional voyage. aim to provide clarity and direction for your
          professional voyage. Let's embark on this colorful and vibrant
          expedition together, where your values, interests, and personality
          traits serve as the guiding stars to chart your course. Just as a
          compass points to the True North, we aim to provide clarity and
          direction for your professional voyage. Let's embark on this colorful
          and vibrant expedition together, where your values, interests, and
          personality traits serve as the guiding stars to chart your course.
          Just as a compass points to the True North, we aim to provide clarity
          and direction for your professional voyage. aim to provide clarity and
          direction for your professional voyage. Let's embark on this colorful
          and vibrant expedition together, where your values, interests, and
          personality traits serve as the guiding stars to chart your course.
          Just as a compass points to the True North, we aim to provide clarity
          and direction for your professional voyage. Let's embark on this
          colorful and vibrant expedition together, where your values,
          interests, and personality traits serve as the guiding stars to chart
          your course. Just as a compass points to the True North, we aim to
          provide clarity and direction for your professional voyage. aim to
          provide clarity and direction for your professional voyage. Let's
          embark on this colorful and vibrant expedition together, where your
          values, interests, and personality traits serve as the guiding stars
          to chart your course. Just as a compass points to the True North, we
          aim to provide clarity and direction for your professional voyage.
          Let's embark on this colorful and vibrant expedition together, where
          your values, interests, and personality traits serve as the guiding
          stars to chart your course. Just as a compass points to the True
          North, we aim to provide clarity and direction for your professional
          voyage. Let's embark on this colorful and vibrant expedition together,
          where your values, interests, and personality traits serve as the
          guiding stars to chart your course. Just as a compass points to the
          True North, we aim to provide clarity and direction for your
          professional voyage. Let's embark on this colorful and vibrant
          expedition together, where your values, interests, and personality
          traits serve as the guiding stars to chart your course. Just as a
          compass points to the True North, we aim to provide clarity and
          direction for your professional voyage. Let's embark on this colorful
          and vibrant expedition together, where your values, interests, and
          personality traits serve as the guiding stars to chart your course.
          Just as a compass points to the True North, we aim to provide clarity
          and direction for your professional voyage. Let's embark on this{" "}
          <View>
            {showUpper && (
              <Image src={assets.upper} style={styles.upperDesign} />
            )}
            {showLower && (
              <Image src={assets.lower} style={styles.lowerDesign} />
            )}
            {showNavigation && (
              <Image src={assets.navigation} style={styles.navigation} />
            )}
            {showLogo && <Image src={assets.logo} style={styles.logo} />}
            {showLogo2 && <Image src={assets.logo2} style={styles.logo2} />}
          </View>{" "}
          colorful and vibrant expedition together, where your values,
          interests, and personality traits serve as the guiding stars to chart
          your course. Just as a compass points to the True North, we aim to
          provide clarity and direction for your professional voyage. Let's
          embark on this colorful and vibrant expedition together, where your
          values, interests, and personality traits serve as the guiding stars
          to chart your course.
        </Text>
      </View>
    </View>
    {showFooterText && (
      <Text style={styles.footerText}>
        www.findyourtruenorth.co.in{"\n"}
        findyourtruenorth.in@gmail.com
      </Text>
    )}
  </Page>
);

export default MotivationPage;
