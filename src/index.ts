import fs from 'fs-extra';

/* Module */
class Files {
    public static getJson(dir: string): any {
        return JSON.parse(fs.readFileSync(dir, 'utf-8'));
    }
}

export default Files;
