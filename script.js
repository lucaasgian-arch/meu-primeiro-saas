import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = "SUA_SUPABASE_URL";
const supabaseKey = "SUA_ANON_PUBLIC_KEY";

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
