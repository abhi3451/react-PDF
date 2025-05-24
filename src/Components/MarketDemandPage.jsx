import { View, Text, StyleSheet } from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 30,
    width: "100%",
  },
  title: {
    fontSize: 23,
    fontWeight: 600,
    marginTop: 40,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    paddingBottom: 5,
    
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  chartArea: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 150,
    marginTop: 30,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  barGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "16%", // Adjust spacing
  },
  bar: {
    width: 10,
    marginBottom: 4,
  },
  currentBar: {
    backgroundColor: "#FF9800",
  },
  futureBar: {
    backgroundColor: "#FFB74D",
  },
  xLabel: {
    fontSize: 8,
    textAlign: "center",
    marginTop: 4,
    writingMode: "lr-tb",
  },
  legend: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
    fontSize: 10,
    gap: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  colorBox: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
});

// Utility to find max demand
const getMaxDemand = (data) => {
  let max = 0;
  data.forEach((item) => {
    max = Math.max(max, item.current_demand, item.future_demand);
  });
  return max;
};

// Component
const MarketDemandPage = ({ marketDemand = [], name = "User" }) => {
  const maxDemand = getMaxDemand(marketDemand);
  const barScale = 1.3; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Shaping the Future:
        {"\n"}Career Trends You Should Know
      </Text>

      <Text style={styles.subtitle}>
        Below is a visualization of how these careers are expected to grow over time:
      </Text>

      <Text style={styles.subtitle}>
        Career Pathways: Current vs Future Market Trends ({name})
      </Text>

      {/* Chart Area */}
      <View style={styles.chartArea}>
        {marketDemand.map((item, idx) => (
          <View key={idx} style={styles.barGroup}>
            
            <View
              style={[
                styles.bar,
                styles.currentBar,
                {
                  height: (item.current_demand / maxDemand) * 100 * barScale,
                },
              ]}
            />
            <View
              style={[
                styles.bar,
                styles.futureBar,
                {
                  height: (item.future_demand / maxDemand) * 100 * barScale,
                },
              ]}
            />
            {/* <Text style={styles.xLabel}>{item.career_path}</Text> */}
          </View>
        ))}
      </View>

      {/* Legend */}
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={{ ...styles.colorBox, backgroundColor: "#FF9800" }} />
          <Text>Current Demand</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={{ ...styles.colorBox, backgroundColor: "#FFB74D" }} />
          <Text>Future Demand</Text>
        </View>
      </View>
    </View>
  );
};

export default MarketDemandPage;
