import { http } from "../http";
import "../websocket/client";

http.listen(3666, () => console.log("Server is up and running on port 3666"));