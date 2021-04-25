import fs from 'fs-extra';

/* Module */
class Files {
    public static async getJson(dir: string): Promise<any> {
        try {
            // eslint-disable-next-line no-bitwise
            fs.accessSync(dir, fs.constants.R_OK);
        }
        catch (err) {
            throw new Error(`File not found or not accessible: ${dir}`);
        }

        return JSON.parse(fs.readFileSync(dir, 'utf-8'));
    }
}

export default Files;
