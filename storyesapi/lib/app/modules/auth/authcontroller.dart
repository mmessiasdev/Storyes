import 'dart:async';
import 'dart:convert';
import 'package:shelf/shelf.dart';
import 'package:shelf_router/shelf_router.dart';
import 'package:storyesapi/app/core/exeptions/emailregistered.dart';
import 'package:storyesapi/app/entities/user.dart';
import 'package:storyesapi/app/repositories/userrepository.dart';

part 'authcontroller.g.dart';

class Authcontroller {
  final _userRepository = UserRepository();

  @Route.post('/register')
  Future<Response> register(Request request) async {
    try {
      final userRq = User.fromJson(await request.readAsString());
      await _userRepository.save(userRq);

      return Response(
        200,
        headers: {
          'content-type': 'application/json',
        },
      );
    } on Emailregistered catch (e, s) {
      print(e);
      print(s);
      return Response(400,
          body: jsonEncode(
            {
              'error': 'Email já existente',
            },
          ),
          headers: {
            'content-type': 'application/json',
          });
    }
  }

  Router get router => _$AuthcontrollerRouter(this);
}
