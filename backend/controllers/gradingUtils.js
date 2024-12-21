const calculateGrade = (attendancePercentage) => {
  if (attendancePercentage < 75) return "F";
  if (attendancePercentage < 85) return "P";
  if (attendancePercentage < 95) return "C";
  return "A";
};

module.exports = { calculateGrade };
