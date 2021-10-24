const obj1 = { name: 'lucas', password: '12345', email: 'l@gmail.com' };

// const { password, ...obj2 } = obj;

const removeKeyInObject = (obj, key) => {
  const { [key]: _, ...newObj } = obj;
  return newObj;
};

console.log(removeKeyInObject(obj1, 'password'));