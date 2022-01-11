const whereAmI = async (lat, lng) => {
  try {
    const responseGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!responseGeo.ok) {
      throw new Error("Geo error");
    }
    const dataGeo = await responseGeo.json();
    console.log(dataGeo);

    const resCountry = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
    if (!resCountry.ok) {
      throw new Error("Country error");
    }
    const dataCountry = await resCountry.json();
    console.log(dataCountry);
    return `You are in ${dataGeo.city}`;
  } catch (err) {
    console.log(`Error: ${err.message}`);
    throw err;
  }
};

(async () => {
  try {
    const result = whereAmI(51.50354, -0.12768);
    console.log(result);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
})();
