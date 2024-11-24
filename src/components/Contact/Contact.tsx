import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleReasonChange = (event: SelectChangeEvent<string>) => {
    setReason(event.target.value);
  };

  const handleSendWhatsApp = () => {
    const baseUrl = "https://wa.me/525548575825";
    const text = `¡Hola! Soy ${name}.
    
Me pongo en contacto contigo por el siguiente motivo: *${reason}*.

Estos son mis datos de contacto:
- Correo electrónico: ${email}
- Número de teléfono: ${phone}

Mensaje adicional:
${message || "Sin mensaje adicional."}

¡Quedo atento a tu respuesta! Muchas gracias.`;

    const url = `${baseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const isFormComplete = () =>
    name.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    reason.trim() !== "" &&
    message.trim() !== "";

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
          Contacto
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="Correo"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Número telefónico"
              variant="outlined"
              fullWidth
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
          <FormControl fullWidth>
            <InputLabel id="contact-reason-label">Motivo de contacto</InputLabel>
            <Select
              labelId="contact-reason-label"
              value={reason}
              onChange={handleReasonChange}
              label="Motivo de contacto"
              required
            >
              <MenuItem value="Contrataciones (privado)">
                Contrataciones (privado)
              </MenuItem>
              <MenuItem value="Contrataciones (club)">
                Contrataciones (club)
              </MenuItem>
              <MenuItem value="Festivales">Festivales</MenuItem>
              <MenuItem value="Colaboraciones">Colaboraciones</MenuItem>
              <MenuItem value="Patrocinios">Patrocinios</MenuItem>
              <MenuItem value="Otro">Otro</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Mensaje adicional"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            placeholder="Háblanos de tu idea, y nosotros haremos el resto."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSendWhatsApp}
            disabled={!isFormComplete()}
          >
            Enviar por WhatsApp
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
