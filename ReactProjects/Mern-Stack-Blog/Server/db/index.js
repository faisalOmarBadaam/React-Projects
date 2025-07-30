import { set, connect } from "mongoose";

set("strictQuery", false);

connect(
  "mongodb+srv://faisal:faisal@cluster0.wsh5w0a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    tlsAllowInvalidCertificates: true,
  }
)
  .then(() => console.log("connect to mongoose db"))
  .catch((error) => console.log(error));
