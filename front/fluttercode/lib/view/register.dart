import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/components/textform.dart';
import 'package:fluttercode/view/widgets/textsdefault.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter/services.dart';
import 'Login.dart';

// ------------ RESPONSIBLE FOR THE APP REGISTRATION SCREEN ------------ //
class Registration extends StatefulWidget {
  Registration({Key? key}) : super(key: key);

  @override
  State<Registration> createState() => _RegistrationState();
}

class _RegistrationState extends State<Registration> {
  // ------- FireBase controller ------- //
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _firebaseAuth = FirebaseAuth.instance;

  @override
  Widget build(BuildContext context) {
    // ------- Registration autentication function ------- //
    Cadastrar() async {
      try {
        UserCredential userCredential =
            await _firebaseAuth.createUserWithEmailAndPassword(
                email: _emailController.text,
                password: _passwordController.text);
        if (userCredential != null) {
          userCredential.user!.updateDisplayName(_nameController.text);
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(builder: (context) => const Login()),
          );
        }
      } on FirebaseAuthException catch (e) {
        if (e.code == 'user-not-found') {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text('Usuário Não Encontrado'),
              backgroundColor: Colors.redAccent,
            ),
          );
        } else if (e.code == 'wrong-password') {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text('Sua Senha está errada'),
              backgroundColor: Colors.orange,
            ),
          );
        }
      }
    }

    return Scaffold(
      body: Container(
        color: Color.fromARGB(255, 251, 207, 207),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextForm(
                controller: _nameController,
                password: false,
                text: 'Digite seu nome'),
            TextForm(
                controller: _emailController,
                password: false,
                text: 'Digite um email válido'),
            TextForm(
                controller: _passwordController,
                password: true,
                text: 'Digite uma senha'),
            Padding(
              padding: const EdgeInsets.only(top: 20),
              child: Center(
                child: TextButton(
                  onPressed: () {
                    Cadastrar();
                  },
                  child: Container(
                    width: MediaQuery.of(context).size.width * 0.70,
                    color: Colors.white,
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: ThourdText(
                        text: 'Registrar-se',
                        size: 20,
                        align: TextAlign.center,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
