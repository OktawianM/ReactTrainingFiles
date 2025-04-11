
import { createRxDatabase } from "rxdb";
import { getRxStorageLocalstorage } from "rxdb/plugins/storage-localstorage";
import { calculationSchema } from "./schema";

export const db = await createRxDatabase({
  name: "calculations_db",
  storage: getRxStorageLocalstorage(),
});
//db.remove();
await db.addCollections({
  calculations: {
    schema: calculationSchema,
  },
});