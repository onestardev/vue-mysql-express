// sql语句
const sqlMap = {
  // 用户
  user: {
    add: 'insert into users(`id`, `user_id`, `user_pwd`) values (NULL, ?, ?)'
  }
}

module.exports = sqlMap