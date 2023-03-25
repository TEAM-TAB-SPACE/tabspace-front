export const cookieStringToObject = (cookieString: string) => {
  if (!cookieString) {
    return {};
  } else {
    const cookies = cookieString.split('; ');
    const result: { [index: string]: string } = {};

    for (let i = 0; i < cookies.length; i++) {
      const cur = cookies[i].split('=');
      result[cur[0]] = cur[1];
    }
    return result;
  }
};
