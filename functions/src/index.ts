import functions = require("firebase-functions");
import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-upe-alumni-database.cloudfunctions.net/",
  headers: { "X-API-KEY": functions.config().alumniportal.apikey },
});

exports.alumniPortalCreateUser = functions.https.onCall(
  async (data, context) => {
    const { auth } = context;

    if (!auth) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "You must be logged in!"
      );
    }

    return instance.post("/user", data);
  }
);

exports.alumniPortalGetUser = functions.https.onCall(async (data, context) => {
  const { auth } = context;

  if (!auth) {
    throw new functions.https.HttpsError(
      "permission-denied",
      "You must be logged in!"
    );
  }

  const { uid } = data;
  return instance
    .get(`/user/${uid}`)
    .then(({ data }) => data)
    .catch((error) => {
      if (error.response.status === 404) {
        return {};
      } else {
        throw new functions.https.HttpsError(
          "unknown",
          `Route /user/${uid} returned non 404 failure code`
        );
      }
    });
});

exports.alumniPortalGetUsers = functions.https.onCall(async (data, context) => {
  const { auth } = context;

  if (!auth) {
    throw new functions.https.HttpsError(
      "permission-denied",
      "You must be logged in!"
    );
  }

  return instance.get("/user/");
});
