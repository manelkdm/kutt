const express = require("express");
const { exec } = require("child_process");
const app = express();
const PORT = 4000;

app.use(express.json());

app.post("/", (req, res) => {
    console.log("📩 Webhook POST reçu !");
    const payload = req.body;
    console.log("📝 Contenu :", payload);

    // Vérifier si c’est bien un push
    if (!payload.ref) {
        return res.status(400).send("❌ Pas de branche détectée !");
    }

    // Déterminer la branche
    const branch = payload.ref.split("/").pop();
    if (branch !== "main") {
      return res.status(200).send(`⏩ Branche ignorée : ${branch}`);
    }

    // Chemin vers Kutt
    const kuttPath = "/home/vboxuser/kutt";

    // Lancer le déploiement
    console.log(`🚀 Déploiement de ${branch} dans ${kuttPath}...`);
    const cmd = `cd ${kuttPath} && docker compose --project-name kutt --env-file .env up -d --build`;
    exec(cmd, (err, stdout, stderr) => {
        if (err) {
            console.error("❌ Erreur exec:", err);
            return res.status(500).send("Erreur de déploiement");
        }
        console.log("✅ Résultat :", stdout);
        res.status(200).send("✅ Déploiement lancé !");
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Serveur webhook actif sur le port ${PORT}`);
});

