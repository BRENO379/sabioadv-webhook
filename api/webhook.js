export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const payload = req.body;
  console.log("Evento SabioADV:", JSON.stringify(payload));
  switch (payload?.event) {
    case "contact_created":
      console.log("Novo contato:", payload.data?.nome, payload.data?.telefone);
      break;
    case "message_inbound":
      console.log("Mensagem recebida:", payload.data?.text);
      break;
    case "message_outbound":
      console.log("Mensagem enviada:", payload.data?.text);
      break;
    case "message_status":
      console.log("Status de mensagem:", payload.data);
      break;
    default:
      console.log("Evento nao tratado:", payload?.event);
  }
  return res.status(200).json({ ok: true });
}
