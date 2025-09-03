import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Delegacia — Agentes & Casos',
      version: '1.0.0',
      description:
        'API para gerenciamento de agentes e casos.'
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['./routes/*.js'],
});

export default swaggerSpec;