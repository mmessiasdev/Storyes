// flutter run -d edge --web-renderer html

import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:fluttercode/controller/auth/usercheck.dart';
import 'package:fluttercode/view/homepage.dart';
import 'package:flutter/material.dart';
import 'package:fluttercode/view/login.dart';
import 'dart:io';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    debugInvertOversizedImages = false;
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: UserChecked(),
    );
  }
}
