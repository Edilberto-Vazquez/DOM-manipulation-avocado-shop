const getData = async (api: string) => {
  try {
    const response: Response = await fetch(api);
    const data: any = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error: ", error);
  }
};

export default getData;
