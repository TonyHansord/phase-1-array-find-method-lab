// code your solution here

const superbowlWin = (record) => {
  const winningSeason = record.find(({ result }) => result === "W");
  return winningSeason ? winningSeason.year : undefined;
};
