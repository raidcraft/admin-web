import * as Sequelize from 'sequelize';
import * as config from 'config';
import { logger } from '@/services';

export interface DbConfig {
  database: string;
  password: string;
  server: string;
  user: string;
  port: number;
}

const dbConfig = config.get<DbConfig>('db');

logger.info(`Connecting to database ${dbConfig.user}:${dbConfig.password}@${dbConfig.server}:${dbConfig.port} --> ${dbConfig.database}`)

export const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  dialect: 'mysql',
  host: dbConfig.server,
  port: dbConfig.port,
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

sequelize.authenticate();
