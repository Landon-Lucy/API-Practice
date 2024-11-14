const baseUrl = "http://localhost:5258/";

export const getSomethingFromAPI = async () => {
  const response = await fetch(baseUrl);
  const text = await response.text();
  return text;
};

export const storeFileOnApi = async (fileAsString) => {
  const body = {
    "base64File": fileAsString,
  };
  await fetch(baseUrl + "fileUpload", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
