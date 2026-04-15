import { readFile } from "./readFile.js";
import { writeFile } from "./writeFile.js";
import schemaJson from '../../Config/schema.json' with { type: 'json' };

const targetPath = process.env.DataPath;
const tableName = schemaJson.tableName;
const tablePath = `${targetPath}/${tableName}`;

const deleteFunc1 = ({ inQuery }) => {
    try {
        const data = readFile({ filePath: tablePath });

        const deletedRows = data.filter(row =>
            Object.entries(inQuery).every(
                ([key, value]) => String(row[key]) === String(value)
            )
        );

        const remainingData = data.filter(row =>
            !Object.entries(inQuery).every(
                ([key, value]) => String(row[key]) === String(value)
            )
        );

        writeFile({
            filePath: tablePath,
            data: remainingData
        });

        return deletedRows.length;   // 👈 return what got deleted
    } finally {
        globalThis.__IMPORT_RUNNING__ = false;
    }
};

const deleteFunc = ({ inQuery }) => {
    try {
        const data = readFile({ filePath: tablePath });
        const deletedRows = [];
        const remainingData = [];

        for (const row of data) {
            const isMatch = Object.entries(inQuery).every(
                ([key, value]) => String(row[key]) === String(value)
            );

            if (isMatch) deletedRows.push(row);
            else remainingData.push(row);
        };

        writeFile({
            filePath: tablePath,
            data: remainingData
        });

        return {
            count: deletedRows.length,
            rows: deletedRows   // optional but powerful
        };
    } finally {
        globalThis.__IMPORT_RUNNING__ = false;
    }
};

export { deleteFunc };