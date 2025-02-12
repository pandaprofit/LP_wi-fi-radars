// Конфигурация для Telegram бота
export const config = {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID || ''
};

// Функция для проверки наличия всех необходимых параметров
export function validateConfig() {
    const requiredParams = ['TELEGRAM_BOT_TOKEN', 'TELEGRAM_CHAT_ID'];
    const missingParams = requiredParams.filter(param => !config[param]);

    if (missingParams.length > 0) {
        throw new Error(`Отсутствуют необходимые параметры: ${missingParams.join(', ')}`);
    }

    return true;
}
