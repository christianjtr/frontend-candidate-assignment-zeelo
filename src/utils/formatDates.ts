export const formatDate = (dateString: string): string => {
  const dateObj = new Date(dateString);

  const isValidDate = dateObj instanceof Date;

  if (!isValidDate) {
    return 'Invalid date';
  }

  const fullDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);

  return fullDate;
};
