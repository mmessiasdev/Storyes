import 'package:flutter/material.dart';
import 'package:fluttercode/view/HomePage.dart';
import 'package:fluttercode/view/components/textform.dart';

class Search extends StatelessWidget {
  Search({Key? key}) : super(key: key);

  final _searchProductController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Center(
              child: TextForm(
                controller: _searchProductController,
                password: false,
                text: 'Procure algum produto',
              ),
            )
          ],
        ),
      ),
    );
  }
}
