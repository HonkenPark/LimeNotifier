import axios from 'axios';

export const backend_url = 'https://b1f2-222-112-77-160.ngrok-free.app';
export const koreaexim_url = 'https://www.koreaexim.go.kr/site/program/financial';
export const telegram_token = '5752826181:AAFr2i46cjgH3mzj1nDR8uKvGKiHoDGsduE';
export const telegram_chatid_Magnus = '5618081824';

export const send_message_telegram = (msg) => {
  axios.get(backend_url + '/sendTelegramMsg', {
    headers: { "ngrok-skip-browser-warning":"any" },
    params: {
      token: telegram_token,
      chatId: telegram_chatid_Magnus,
      message: msg
    }
  })
}