{
  const validateKeys = (obj: object, keys: string[]) => {
    return keys.every((key) => key in obj);
  };
}
