module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000,
    },
    post:{
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || '',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'VjtEvKIH1q',
        password: process.env.MYSQL_PASS || 'MOhocDtnDq',
        database: process.env.MYSQL_DB || 'VjtEvKIH1q',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || '',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.CACHE_SRV_HOST || '',
        port: process.env.CACHE_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-14604.c291.ap-southeast-2-1.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || 14604,
        password: process.env.REDIS_PASS || 'Mj2DGMOlu66mQyedSbjfcNCKk6NWZFJJ'
    }
}