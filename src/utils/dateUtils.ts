export const formatDate = (date: Date): string => {
  return date.getDate().toString();
};

export const getWeekDays = (): string[] => {
  return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
};