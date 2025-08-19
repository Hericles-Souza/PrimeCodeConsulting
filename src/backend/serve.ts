import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Campos obrigatórios: nome, email e mensagem.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'contato@primecodeconsulting.com.br',
    subject: `Nova Mensagem de Contato de ${name}`,
    html: `
      <h3>Nova Mensagem de Contato</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Erro ao enviar a mensagem.' });
  }
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});