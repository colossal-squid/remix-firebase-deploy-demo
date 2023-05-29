/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import { createRequestHandler } from "remix-google-cloud-functions";

const app = onRequest(
  createRequestHandler({
    build: require("./remix_server.js"),
  })
);

module.exports = { app };