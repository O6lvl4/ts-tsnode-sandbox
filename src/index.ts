import dotenv from 'dotenv';
import { greet } from './utils/greeding';

dotenv.config();

function main() {
    const args = process.argv.slice(2);
    const name = args[0] || 'World';
    console.log(greet(name));
}

main();
