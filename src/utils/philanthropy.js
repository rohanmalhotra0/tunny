export function parseIsoDate(dateString) {
  // dateString is expected in YYYY-MM-DD
  const [year, month, day] = dateString.split('-').map((v) => Number(v));
  return new Date(year, month - 1, day);
}

export function isDateInRange(date, startIso, endIso) {
  const start = parseIsoDate(startIso);
  const end = parseIsoDate(endIso);
  return date >= start && date <= end;
}

export function getActiveCampaign(campaigns, now = new Date()) {
  const active = campaigns.find((c) => isDateInRange(now, c.startDate, c.endDate));
  if (active) return active;

  // Fallback to most recent by start date.
  return [...campaigns].sort(
    (a, b) => parseIsoDate(b.startDate).getTime() - parseIsoDate(a.startDate).getTime(),
  )[0];
}

export function formatUsd(amount) {
  const safe = Number.isFinite(amount) ? amount : 0;
  return safe.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

export function clampPercent(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, value));
}

export function getProgressPercent(raisedAmountUsd, goalAmountUsd) {
  if (!Number.isFinite(goalAmountUsd) || goalAmountUsd <= 0) return 0;
  return clampPercent((raisedAmountUsd / goalAmountUsd) * 100);
}

export function getLifetimeTotal(campaigns) {
  return campaigns.reduce((sum, c) => {
    const value = Number.isFinite(c.raisedAmountUsd) ? c.raisedAmountUsd : 0;
    return sum + value;
  }, 0);
}
