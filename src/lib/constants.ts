export const SITE_INFO = {
  domain: 'https://carolinamamede.com.br',
  name: 'Dra. Ana Carolina Mamede',
  specialty: 'Endocrinologia & Metabologia',
  titleSuffix: 'Dra. Ana Carolina Mamede',
  crm: 'CRM-ES 22.237',
  rqe: 'RQE 15.266',
  fullCredentials: 'Dra. Ana Carolina Mamede · CRM-ES 22.237 · RQE 15.266 · Endocrinologia e Metabologia',
  phoneDisplay: '(27) 99995-3553',
  phoneRaw: '5527999953553',
  city: 'Guarapari',
  state: 'ES',
  address: '[PREENCHER - Endereço completo do novo consultório em Guarapari/ES]',
  hours: '[PREENCHER - Horário de atendimento]',
  googleMapsUrl: 'https://maps.google.com/?q=[PREENCHER_LOCALIZACAO_GUARAPARI]',
  gaMeasurementId: 'G-[PREENCHER_GA4_ID]',
  gtmId: 'GTM-[PREENCHER_GTM_ID]',
};

export const WA_MESSAGES: Record<string, string> = {
  home: 'Olá, Dra. Ana Carolina! Vim pelo site e gostaria de agendar uma consulta.',
  consultaOnline: 'Olá! Vim pelo site e gostaria de agendar uma consulta online.',
  obesidade: 'Olá! Vim pelo site (página de obesidade) e gostaria de agendar uma consulta.',
  diabetes: 'Olá! Vim pelo site (página de diabetes) e gostaria de agendar uma consulta.',
  tireoide: 'Olá! Vim pelo site (página de tireoide) e gostaria de agendar uma consulta.',
  menopausa: 'Olá! Vim pelo site (página de menopausa) e gostaria de agendar uma consulta.',
  colesterol: 'Olá! Vim pelo site (página de colesterol) e gostaria de agendar uma consulta.',
  areas: 'Olá! Vim pelo site (áreas de atuação) e gostaria de agendar uma consulta.',
  blog: 'Olá! Li um artigo no blog e gostaria de agendar uma consulta.',
  artigo: 'Olá! Li um artigo no blog e gostaria de agendar uma consulta.',
  obrigado: 'Olá! Baixei o guia e gostaria de agendar uma consulta.',
  contato: 'Olá! Vim pela página de contato e gostaria de agendar uma consulta.',
  sobre: 'Olá! Conheci a Dra. Ana Carolina pelo site e gostaria de agendar uma consulta.',
  default: 'Olá, Dra. Ana Carolina! Vim pelo site e gostaria de agendar uma consulta.'
};

export function getWhatsAppUrl(originKey: string = 'default', customMessage?: string): string {
  const text = customMessage || WA_MESSAGES[originKey] || WA_MESSAGES.default;
  return `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
}
