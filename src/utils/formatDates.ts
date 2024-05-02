export const formatDate = (dateString: string) => {
  const dateObj = new Date(dateString);
  const fullDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);

  return fullDate;
};
