import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const SENDER = process.env.CONTACT_SENDER_EMAIL || 'onboarding@resend.dev';
const RECEIVER = process.env.CONTACT_RECEIVER_EMAIL;

interface ContactPayload {
  fullName?: string;
  phone?: string;
  comment?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: 'Email service is not configured' },
      { status: 500 },
    );
  }
  if (!RECEIVER) {
    return NextResponse.json(
      { success: false, error: 'Receiver email is not configured' },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON' },
      { status: 400 },
    );
  }

  const fullName = payload.fullName?.trim();
  const phone = payload.phone?.trim();
  const comment = payload.comment?.trim() || '';

  if (!fullName || !phone) {
    return NextResponse.json(
      { success: false, error: 'ФИО и телефон обязательны' },
      { status: 400 },
    );
  }

  const html = `
    <h2>Новая заявка с сайта Travel &amp; Study</h2>
    <p><strong>ФИО:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Комментарий:</strong> ${comment ? escapeHtml(comment) : '—'}</p>
  `;

  const { error } = await resend.emails.send({
    from: `Travel & Study <${SENDER}>`,
    to: [RECEIVER],
    subject: `Новая заявка: ${fullName}`,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { success: false, error: 'Не удалось отправить письмо' },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
