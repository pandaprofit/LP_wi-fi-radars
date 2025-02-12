import { config } from './config.js';

export async function sendToTelegram(data) {
    const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = config;

    // Форматируем сообщение
    const message = `
🎯 Новая заявка с квиза!

🏢 Тип бизнеса: ${data.business_type}
🎯 Сфера: ${data.business_sphere}
📍 Локации: ${data.locations}
💰 Средний чек: ${data.average_check}

👤 Имя: ${data.name}
📱 Телефон: ${data.phone}

📅 Дата заявки: ${new Date().toLocaleString()}
    `.trim();

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        if (!response.ok) {
            throw new Error('Ошибка отправки сообщения в Telegram');
        }

        return true;
    } catch (error) {
        console.error('Ошибка при отправке в Telegram:', error);
        throw error;
    }
}
