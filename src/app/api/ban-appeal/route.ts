import { NextResponse } from "next/server";

function normalizeOptionalString(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

function truncate(value: string, maxLen: number): string {
  if (value.length <= maxLen) return value;
  return value.slice(0, Math.max(0, maxLen - 1)) + "…";
}

export async function POST(req: Request) {
  const webhookUrl = process.env.DISCORD_BAN_APPEAL_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Server misconfigured: missing webhook." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  // Honeypot (bots tend to fill hidden fields)
  const website = normalizeOptionalString(data.website);
  if (website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const discordUsername = normalizeOptionalString(data.discordUsername);
  const discordUserId = normalizeOptionalString(data.discordUserId);
  const email = normalizeOptionalString(data.email);
  const banReason = normalizeOptionalString(data.banReason);
  const appeal = normalizeOptionalString(data.appeal);
  const evidenceLink = normalizeOptionalString(data.evidenceLink);

  if (!discordUsername) {
    return NextResponse.json(
      { error: "Discord username is required." },
      { status: 400 },
    );
  }

  if (!appeal) {
    return NextResponse.json({ error: "Appeal is required." }, { status: 400 });
  }

  // Keep within Discord embed limits.
  const safeDiscordUsername = truncate(discordUsername, 256);
  const safeDiscordUserId = truncate(discordUserId, 64);
  const safeEmail = truncate(email, 256);
  const safeBanReason = truncate(banReason, 256);
  const safeAppeal = truncate(appeal, 3500);
  const safeEvidenceLink = truncate(evidenceLink, 512);

  const fields = [
    { name: "Discord", value: safeDiscordUsername || "—", inline: false },
    {
      name: "User ID",
      value: safeDiscordUserId || "—",
      inline: true,
    },
    { name: "Email", value: safeEmail || "—", inline: true },
    { name: "Ban reason (self-reported)", value: safeBanReason || "—", inline: false },
  ].filter(Boolean);

  if (safeEvidenceLink) {
    fields.push({ name: "Evidence", value: safeEvidenceLink, inline: false });
  }

  const payload = {
    embeds: [
      {
        title: "Ban Appeal",
        description: safeAppeal,
        color: 0x8b5cf6,
        fields,
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!discordRes.ok) {
      return NextResponse.json(
        { error: "Failed to deliver appeal." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to deliver appeal." },
      { status: 502 },
    );
  }
}
