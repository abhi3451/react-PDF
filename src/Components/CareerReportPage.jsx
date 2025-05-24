// CareerReportPage.jsx
import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import guidingStar from "../assets/images/guidingStar.png";

const styles = StyleSheet.create({
  page: {
    padding: 25,
    fontSize: 12,
    color: "#000",
  },
  welcomeContainer: {
    width: "100%",
    paddingHorizontal: 40,
    paddingTop: 50,
  },
  heading: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  paragraph: {
    fontSize: 16,
    textAlign: "left",
  },
  skillsContainer: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
  },
  skillsTitle: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    // marginTop: 20,
  },
  imageWrapper: {
    width: 650,
    height: 450,
    position: "relative",
  },
  starImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  skillLabel: {
    position: "absolute",
    backgroundColor: "#CECECE",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 10,
    fontWeight: 500,
    color: "#1a1a1a",
    textAlign: "center",
    width: 100,
  },
});

const getPositionStyle = (index) => {
  const positions = [
    { top: "35%", left: "50%" },
    { top: "55%", left: "77%" },
    { top: "80%", left: "85%" },
    { top: "55%", left: "28%" },
    { top: "80%", left: "17%" },
  ];

  const pos = positions[index] || { top: "50%", left: "50%" };
  return {
    ...styles.skillLabel,
    top: pos.top,
    left: pos.left,
    transform: "translate(-50%, -50%)",
  };
};

const CareerReportPage = ({ skills = [] }) => {
  return (
    <View style={styles.page}>
      
      <View style={styles.welcomeContainer}>
        <Text style={styles.heading}>
          Welcome to Your Career Exploration Journey!
        </Text>
        <Text style={styles.paragraph}>
          Your unique combination of values, interests, and personality makes your thought process creative and purposeful. This report will help you explore career pathways that align with your strengths and aspirations, guiding you towards making informed choices for your future.
        </Text>
      </View>
      <View style={styles.skillsContainer}>
        <Text style={styles.skillsTitle}>Your Guiding Stars</Text>
        <View style={styles.imageWrapper}>
          <Image src={guidingStar} style={styles.starImage} />
          {skills?.map((skill, idx) => (
            <Text key={idx} style={getPositionStyle(idx)}>
              {skill}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default CareerReportPage;
