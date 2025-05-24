import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    position : "relative"
  },
  title: {
    position:"absolute",
    bottom:270,
    fontSize: 72,
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 0.9,
  },
  ofLabel: {
    marginTop: 20,
    fontSize: 15,
    color: '#f79d25',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    position:"absolute",
    bottom:230,
  },
  name: {
    fontSize: 20,
    color: 'black',
    fontWeight: 600,
    marginTop: 4,
    position:"absolute",
    bottom:190,
  },
});

const CoverPagePDF = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.title}>CAREER{"\n"}COMPASS{"\n"}MAP</Text>
    <Text style={styles.ofLabel}>of</Text>
    <Text style={styles.name}>{name}</Text>
  </View>
);

export default CoverPagePDF;
