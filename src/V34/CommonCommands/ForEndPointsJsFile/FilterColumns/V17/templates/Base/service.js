import { kschema } from "@keshavsoft/kschema";

const filterItems = ({ inRequestQuery, inTableName }) => {
    const tableName = inTableName;

    return kschema.table(tableName).filterByColumns(inRequestQuery);
};

export { filterItems };