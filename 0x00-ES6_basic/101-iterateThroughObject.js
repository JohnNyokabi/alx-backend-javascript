export default function iterateThroughObject(reportWithIterator) {
  let res = '';

  for (const employee of reportWithIterator) {
    res += employee + ' | ';
  }

  /* eliminate the trailing '|' from res */
  res = res.slice(0, -3);

  return res;
}
