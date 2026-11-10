const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name = "", email = "", service = "", message = "", _gotcha = "" } = req.body || {};

  // Honeypot: pretend success so bots don't retry
  if (_gotcha) return res.status(200).json({ ok: true });

  if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || !message.trim())
    return res.status(400).json({ error: "Invalid input" });
  if (name.length > 100 || email.length > 200 || message.length > 5000)
    return res.status(400).json({ error: "Input too long" });

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "ELORA Studio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO || "contact.elorastudio@gmail.com"],
      reply_to: email,
      subject: `New ELORA Studio enquiry from ${name.slice(0, 80)}`,
      html: `
        <p><b>Name:</b> ${esc(name)}</p>
        <p><b>Email:</b> ${esc(email)}</p>
        <p><b>Service:</b> ${esc(service)}</p>
        <p><b>Message:</b></p>
        <p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!r.ok) {
    console.error("Resend error:", r.status, await r.text());
    return res.status(502).json({ error: "Send failed" });
  }
  return res.status(200).json({ ok: true });
}
