export function greet(name: string): string {
  return `Hello, ${name}! Welcome to ts-node.`;
}

export function greetWithLanguage(name: string, language: string = 'en'): string {
  const greetings: { [key: string]: string } = {
    en: 'Hello',
    ja: 'こんにちは',
    es: 'Hola'
  };
  const greeting = greetings[language] || greetings['en'];
  return `${greeting}, ${name}! Welcome to ts-node.`;
}
