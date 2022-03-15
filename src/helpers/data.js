export const addUID2Items = (items, type) =>
  items.map((item) => ({ ...item, uid: `${type}_${item.id}` }));
