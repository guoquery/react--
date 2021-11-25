export function encodedParam(data: any, type: "url" | "urlencoded" = "url") {
  if (!data) {
    return "";
  }
  let param = "";
  if (type === "url") {
    param = `?`;
  }
  if (data) {
    Object.keys(data).forEach((el: string) => {
      if (param === "?") {
        param = `${param}${el}=${data[el]}`;
      } else {
        param = `${param}&${el}=${data[el]}`;
      }
    });
  }
  return param;
}
