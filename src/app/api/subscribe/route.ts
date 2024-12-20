import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

export async function POST(req: Request) {
  try {
    const { email, firstName } = await req.json();

    await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID!, {
      email_address: email,
      status: 'subscribed',
      tags: ['Website Subscriber'],
      merge_fields: {
        FNAME: firstName,
        SOURCE: 'Website Footer'
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error subscribing to newsletter' }, { status: 500 });
  }
} 