export const DAYS_OF_WEEK = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fry",
  6: "Sat"
};

export const uniq = arr =>
  arr.reduce((a, b) => {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);

export const getDaysOfWeek = (days = []) => {
  if (days.length === 0) return "Never";

  const uniqDays = uniq(days);

  if (uniqDays.length === 7) return "Every day";

  const weekDays = [];
  const weekendDays = [];

  uniqDays.forEach(d => {
    // eslint-disable-next-line
    if (d == 0 || d == 6) {
      weekendDays.push(d);
    } else {
      weekDays.push(d);
    }
  });

  if (!weekDays.length && weekendDays.length === 2) {
    return "Weekends";
  }

  if (!weekendDays.length && weekDays.length === 5) {
    return "Week days";
  }

  return uniqDays.map(day => DAYS_OF_WEEK[day]).join(", ");
};
