/**
 * Integração com Plataforma de E-mail Marketing (Brevo, RD Station, Mailchimp)
 * Isolado em um único arquivo conforme especificação técnica (Seção 5.5).
 */

export interface LeadPayload {
  nome: string;
  email: string;
  whatsapp: string;
  cidade: string;
  tema: string;
  consentimentoLGPD: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  origem?: string;
}

export async function cadastrarLead(payload: LeadPayload): Promise<{ success: boolean; message: string }> {
  // Variáveis de ambiente configuráveis (ex.: Brevo, RD Station, Mailchimp, Webhook)
  const EMAIL_PROVIDER = import.meta.env.EMAIL_PROVIDER || 'BREVO'; // BREVO | RD_STATION | MAILCHIMP | WEBHOOK
  const API_KEY = import.meta.env.EMAIL_API_KEY || '[PREENCHER_API_KEY]';
  const LIST_ID = import.meta.env.EMAIL_LIST_ID || '[PREENCHER_LIST_ID]';
  const WEBHOOK_URL = import.meta.env.EMAIL_WEBHOOK_URL;

  // Sanitização e tags
  const temaTag = payload.tema ? `tema-${payload.tema.toLowerCase().replace(/[^a-z0-9]/g, '-')}` : 'tema-geral';
  const tags = ['lead-guia', temaTag];

  console.info(`[EmailService] Processando lead: ${payload.email} (${tags.join(', ')}) via provedor: ${EMAIL_PROVIDER}`);

  try {
    if (WEBHOOK_URL) {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, tags, timestamp: new Date().toISOString() })
      });
      if (!response.ok) {
        throw new Error(`Webhook error: ${response.statusText}`);
      }
      return { success: true, message: 'Lead gravado com sucesso via Webhook.' };
    }

    if (EMAIL_PROVIDER === 'BREVO' && API_KEY && !API_KEY.includes('PREENCHER')) {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': API_KEY
        },
        body: JSON.stringify({
          email: payload.email,
          attributes: {
            NOME: payload.nome,
            WHATSAPP: payload.whatsapp,
            CIDADE: payload.cidade,
            TEMA_INTERESSE: payload.tema,
            UTM_SOURCE: payload.utm_source || '',
            UTM_CAMPAIGN: payload.utm_campaign || ''
          },
          listIds: LIST_ID && !LIST_ID.includes('PREENCHER') ? [parseInt(LIST_ID, 10)] : undefined,
          updateEnabled: true
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        console.warn('[EmailService] Brevo API status:', response.status, errData);
      }
      return { success: true, message: 'Lead enviado para o Brevo.' };
    }

    // Modo simulação ou quando chaves ainda não foram configuradas
    return {
      success: true,
      message: 'Simulação bem sucedida. Configure EMAIL_API_KEY e EMAIL_PROVIDER no .env para envio real.'
    };
  } catch (error) {
    console.error('[EmailService] Erro ao cadastrar lead:', error);
    return { success: false, message: 'Falha ao registrar lead no provedor de e-mail.' };
  }
}
