import React from "react";

import {
  StyleSheet,
  Text,
  TouchableHighlightProps,
  TouchableOpacity,
} from "react-native";

interface SkillCardProps extends TouchableHighlightProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  textSkill: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
