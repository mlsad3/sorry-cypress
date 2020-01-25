require('dotenv').config();

exports.PORT = process.env.SORRY_CYPRESS_DASHBOARD_PORT || process.env.PORT || 8080;

exports.GRAPHQL_SCHEMA_URL =
  process.env.SORRY_CYPRESS_GRAPHQL_SCHEMA_URL || 'http://localhost:4000';
