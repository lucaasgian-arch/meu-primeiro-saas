import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = sb_publishable_adcIc_tXdio53_i1GjekqA_yaKkrav9;
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjdmd0anFmemt5ZG9zcmZ3bWR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4NDQ5NzMsImV4cCI6MjA4NDQyMDk3M30.v7_-rSF1MFzSOwVdyESdKQhklfRTdZOPj_G0qRhiF5A;

const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById("feedback-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const whatsapp = document.getElementById("whatsapp").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;

  const { error } = await supabase.from("responses").insert([
    {
      whatsapp,
      email,
      feedback,
    },
  ]);

  if (error) {
    alert("Erro ao enviar. Tente novamente.");
    console.error(error);
  } else {
    alert("Avaliação enviada com sucesso!");
    form.reset();
  }
});
