const timeDateConversor = (timestamp) => {
  const year = timestamp.slice(0, 4);
  const month = timestamp.slice(5, 7);
  const day = timestamp.slice(8, 10);
  const hour = timestamp.slice(11, 13);
  const minute = timestamp.slice(14, 16);
  return `${day}-${month}-${year} at ${hour}:${minute}`;
};
export default timeDateConversor;
