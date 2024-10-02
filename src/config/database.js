module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'docker',
    password: 'nova_senha', // Use a senha que você definiu
    database: 'sqlnode',
    define: {
      timestamps: true,
      underscored: true,
    },
};
