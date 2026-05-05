import { readFile } from "./readFile.js";
import { writeFile } from "./writeFile.js";
import schemaJson from '../../Config/schema.json' with { type: 'json' };

const targetPath = process.env.DataPath;
const tableName = schemaJson.tableName;
const tablePath = `${targetPath}/${tableName}`;

const startFunc = ({ inPk, inRequestBody }) => {
    try {

        let data = readFile({ filePath: tablePath });

        const index = data.findIndex(el => el.pk === parseInt(inPk));

        if (index === -1) {
            return false;
        }

        data[index] = {
            ...data[index],
            ...inRequestBody
        };

        writeFile({
            filePath: tablePath,
            data
        });

        return inPk;

    } finally {

        globalThis.__IMPORT_RUNNING__ = false;

    }
};

export { startFunc };