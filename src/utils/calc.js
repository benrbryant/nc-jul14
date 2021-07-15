export function calcAvgHonor(list) {
  return Math.round(
    list.reduce((sum, user) => sum + parseInt(user.honor), 0) / list.length
  );
}

export function calcAvgRank(list) {
  return Math.round(
    list.reduce((sum, user) => sum + user.ranks.overall.rank * -1, 0) /
      list.length
  );
}

export function calcSumComp(list) {
  return list.reduce(
    (sum, user) => sum + user.codeChallenges.totalCompleted,
    0
  );
}
