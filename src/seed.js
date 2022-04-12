export function seedDatabase(firebase) {
  function getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
  }

  firebase.firestore().collection("videos").add({
    id: getUUID(),
    temple_name: "",
    image_url: "",
    wikipedia_url: "",
    location: "",
    description: "",
    services: "",
    contact: "",
    Moolavar: "",
    thala_virutsam: "",
    thala_theertham: "",
  });
}
