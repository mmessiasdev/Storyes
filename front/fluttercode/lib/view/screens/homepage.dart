import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/components/firstproducts.dart';
import 'package:fluttercode/view/components/foryou.dart';
import 'package:fluttercode/view/components/header.dart';
import 'package:fluttercode/view/components/stories.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          Column(
            children: [
              Header(),
              Stories(),
              First(),
              ForYou(),
            ],
          ),
        ],
      ),
    );
  }
}
