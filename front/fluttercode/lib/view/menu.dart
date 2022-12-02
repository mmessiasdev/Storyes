import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/Login.dart';
import 'package:fluttercode/view/homepage.dart';
import 'package:fluttercode/view/widgets/textsdefault.dart';

class Menu extends StatelessWidget {
  const Menu({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _fireBaseAuth = FirebaseAuth.instance;
    sair() async {
      await _fireBaseAuth.signOut().then(
            (user) => Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                builder: (context) => const Login(),
              ),
            ),
          );
    }

    return Column(
      children: [
        Container(
          decoration: BoxDecoration(
              color: Color.fromARGB(255, 251, 207, 207),
              borderRadius:
                  BorderRadius.only(bottomRight: Radius.circular(50))),
          height: MediaQuery.of(context).size.height * 0.20,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
            child: Column(
              children: [
                SizedBox(
                  width: double.infinity,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      PrimaryText(
                        text: 'Menu',
                        align: TextAlign.start,
                      ),
                      GestureDetector(
                        onTap: () => Navigator.pushReplacement(
                          context,
                          MaterialPageRoute(
                            builder: (context) => HomePage(),
                          ),
                        ),
                        child: Icon(Icons.arrow_back_ios_new),
                      ),
                    ],
                  ),
                ),
                SecundaryText(
                  text: 'Olá!',
                  size: 25,
                  align: TextAlign.start,
                  color: Colors.black,
                ),
              ],
            ),
          ),
        ),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
              child: GestureDetector(
                onTap: sair,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Icon(Icons.logout),
                    Padding(
                      padding: const EdgeInsets.only(left: 20),
                      child: SizedBox(
                        width: MediaQuery.of(context).size.width * 0.70,
                        child: ThourdText(
                          text: 'Sair da conta',
                          size: 15,
                          align: TextAlign.start,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ],
    );
  }
}
