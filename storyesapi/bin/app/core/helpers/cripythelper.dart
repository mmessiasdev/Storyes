import 'dart:convert';
import 'package:crypto/crypto.dart';

class Cripythelper {
  Cripythelper._();
  static String generatedSha256Hash(String password) {
    final bytes = utf8.encode(password);
    return sha256.convert(bytes).toString();
  }
}
