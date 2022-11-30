import 'package:flutter/material.dart';
import 'package:fluttercode/view/containers/homepage/header.dart';
import 'package:fluttercode/view/homepage.dart';
import 'package:fluttercode/view/widgets/textsdefault.dart';

class Login extends StatelessWidget {
  const Login({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        color: Color.fromARGB(255, 255, 255, 255),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Header(
              widget: const HomePage(),
              icon: const Icon(Icons.login_rounded),
              title: PrimaryText(text: 'Storyes'),
            ),
            Container(
              decoration: const BoxDecoration(
                  color: Colors.red,
                  borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(20),
                      topRight: Radius.circular(20))),
              height: MediaQuery.of(context).size.height * 0.75,
            ),
          ],
        ),
      ),
    );
  }
}
