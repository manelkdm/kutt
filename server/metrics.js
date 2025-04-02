const promClient = require('prom-client');

// ✅ Active la collecte par défaut
promClient.collectDefaultMetrics();

// ✅ Crée ta métrique personnalisée
const httpRequestCounter = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Nombre total de requêtes HTTP',
  labelNames: ['method', 'route', 'status'],
});

// ✅ Expose /metrics depuis l'app principale
function registerMetricsRoute(app) {
  app.get('/metrics', async (req, res) => {
    res.set('Content-Type', promClient.register.contentType);
    res.end(await promClient.register.metrics());
  });
}

module.exports = {
  httpRequestCounter,
  registerMetricsRoute
};

