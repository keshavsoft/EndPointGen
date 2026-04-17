import { getData } from "@keshavsoft/kschema";

const fromJsonPath = () => {
    return getData({ table: "LedgerNames" });
};

export { fromJsonPath };