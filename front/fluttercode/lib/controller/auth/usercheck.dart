import 'dart:async';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:fluttercode/view/homepage.dart';
import 'package:fluttercode/view/login.dart';

// ------------ RESPONSABLE FOR USER VERIFICATION ------------ //
class UserChecked extends StatefulWidget {
  const UserChecked({Key? key}) : super(key: key);

  @override
  State<UserChecked> createState() => _UserCheckedState();
}

class _UserCheckedState extends State<UserChecked> {
  StreamSubscription? streamSubscription;

  // ------------ App launch authentication state ------------ //
  @override
  initState() {
    super.initState();
    streamSubscription =
        FirebaseAuth.instance.authStateChanges().listen((User? user) {
      if (user == null) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => const Login()),
        );
        print('Usuário não está logado.');
      } else {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => const HomePage()),
        );
        print('Usuário logado');
      }
    });
  }

  @override
  void dispose() {
    streamSubscription!.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: CircularProgressIndicator()),
    );
  }
}
