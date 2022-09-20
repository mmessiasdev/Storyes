import 'package:mysql1/mysql1.dart';
import 'package:storyesapi/app/core/exeptions/emailregistered.dart';
import 'package:storyesapi/app/core/helpers/cripty.dart';
import 'package:storyesapi/app/entities/user.dart';

import '../core/database/database.dart';

class UserRepository {
  Future<User> login(String email, String password) async {
    MySqlConnection? conn;
    try {
      conn = await Database().openConnection();
      final result = await conn.query(''' 
          SELECT * FROM user
          WHERE email = ?
          AND password = ?
         ''', [email, Cripty.generatedSha256Hash(password)]);
      print(await conn.query("select * from user"));

      // if (result.isEmpty) {
      //   throw UserNotfoundException();
      // }

      final userData = result.first;

      return User(
        id: userData['id'],
        name: userData['name'],
        email: userData['email'],
        password: '',
      );
    } on MySqlException catch (e, s) {
      print(e);
      print(s);
      throw Exception('Erro ao realizar login');
    } finally {
      await conn?.close();
    }
  }

  Future<void> save(User user) async {
    MySqlConnection? conn;
    try {
      conn = await Database().openConnection();

      final isUserRegiser =
          await conn.query("SELECT * FROM user WHERE email = ?", [user.email]);

      if (isUserRegiser.isEmpty) {
        await conn.query(''' 
          insert into user
          values(?,?,?,?)
        ''', [
          null,
          user.name,
          user.email,
          Cripty.generatedSha256Hash(user.password)
        ]);
      } else {
        throw Emailregistered();
      }
    } on MySqlException catch (e, s) {
      print(e);
      print(s);
      throw Exception();
    } finally {
      await conn?.close();
    }
  }

  Future<User> findById(int id) async {
    MySqlConnection? conn;
    try {
      conn = await Database().openConnection();
      final result = await conn.query('select * from user where id = ?', [id]);
      final mysqlData = result.first;
      return User(
        id: mysqlData['id'],
        name: mysqlData['name'],
        email: mysqlData['email'],
        password: '',
      );
    } on MySqlException catch (e, s) {
      print(e);
      print(s);
      throw Exception();
    } finally {
      await conn?.close();
    }
  }
}
