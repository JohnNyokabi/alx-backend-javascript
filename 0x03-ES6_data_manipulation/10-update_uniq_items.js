export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }
  groceries.forEach((k, v) => {
    if (v === 1) {
      groceries.set(k, 100);
    }
  });
  return groceries;
}
