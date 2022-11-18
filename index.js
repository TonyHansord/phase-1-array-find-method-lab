// code your solution here

function superbowlWin(record) {
  const winningSeason = record.find(({ result }) => result === "W");
  return winningSeason ? winningSeason.year : undefined;
}
