// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { fullName, phone, comment } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'noreply@travelandstudy.ru',
      to: 'traveland.study@yandex.ru',
      subject: 'Новая заявка с сайта',
      html: `
        <p><strong>ФИО:</strong> ${fullName}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Комментарий:</strong> ${comment}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
