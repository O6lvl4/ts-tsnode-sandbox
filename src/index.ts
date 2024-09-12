import dotenv from 'dotenv';
import { greetWithLanguage } from './utils/greeding';

dotenv.config();

function main() {
    const args = process.argv.slice(2);
    const name = args[0] || 'World';
    const language = process.env.GREETING_LANGUAGE || 'en';
    console.log(`App: ${process.env.APP_NAME}`);
    console.log(greetWithLanguage(name, language));
}

main();
