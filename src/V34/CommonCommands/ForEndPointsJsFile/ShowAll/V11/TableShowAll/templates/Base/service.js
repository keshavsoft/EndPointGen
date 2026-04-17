import { kschema } from "@keshavsoft/kschema";
const tableName = "LedgerNames";

const fromJsonPath = () => {
    return kschema.table(tableName).get();
};

export { fromJsonPath };