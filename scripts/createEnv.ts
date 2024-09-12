const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function createEnvFile() {
    const envTemplatePath = path.join(__dirname, '..', '.env.template');
    const envPath = path.join(__dirname, '..', '.env');

    try {
        // .env.templateファイルを読み込む
        const templateContent = await fs.readFile(envTemplatePath, 'utf8');

        // .envファイルが既に存在するかチェック
        try {
            await fs.access(envPath);
            console.log('.env file already exists. Skipping creation.');
            rl.close();
            return;
        } catch (error) {
            // ファイルが存在しない場合は続行
        }

        let envContent = '';
        const lines = templateContent.split('\n');

        for (const line of lines) {
            if (line.trim() && !line.startsWith('#')) {
                const [key, value] = line.split('=');
                if (!value || value.trim() === '') {
                    const userInput = await question(`Enter value for ${key}: `);
                    envContent += `${key}=${userInput}\n`;
                } else {
                    envContent += `${line}\n`;
                }
            } else {
                envContent += `${line}\n`;
            }
        }

        // .envファイルを作成
        await fs.writeFile(envPath, envContent);
        console.log('.env file has been created successfully.');
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        rl.close();
    }
}

createEnvFile();
