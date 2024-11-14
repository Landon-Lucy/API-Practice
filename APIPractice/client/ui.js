import { getSomethingFromAPI, storeFileOnApi } from "./service.js";

console.log("in ui");

const text = await getSomethingFromAPI();
console.log(text);

const setupForm = () => {
  const formElement = document.getElementById("fileUploadForm");

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const fileUploadElement = document.getElementById("fileUpload");

    const file = fileUploadElement.files[0];
    console.log(file);

    async function getBase64(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async function () {
        console.log(reader.result);

        //actually have result
        await storeFileOnApi(reader.result);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    }

    console.log(getBase64(file)); // prints the base64 string
  });
};



setupForm();

