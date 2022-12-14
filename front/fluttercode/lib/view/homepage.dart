import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/login.dart';
import 'package:fluttercode/view/menu.dart';

import 'package:fluttercode/view/product.dart';
import 'package:fluttercode/view/widgets/textsdefault.dart';

import 'containers/homepage/firstproducts.dart';
import 'containers/homepage/foryou.dart';
import 'containers/homepage/header.dart';
import 'containers/homepage/stories.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          Column(
            children: [
              Header(
                widget: Menu(),
                icon: Icon(Icons.menu),
                title: PrimaryText(
                  text: 'Storyes',
                  align: TextAlign.center,
                ),
              ),
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
