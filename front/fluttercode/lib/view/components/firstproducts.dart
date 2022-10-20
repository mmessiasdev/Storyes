import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/components/widgets/products.dart';
import 'package:fluttercode/view/components/widgets/textsdefault.dart';
import 'package:fluttercode/view/components/widgets/titles.dart';

class First extends StatelessWidget {
  const First({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        LateralTitle(title: 'Populares'),
        SizedBox(
          height: 150,
          child: ListView(
            scrollDirection: Axis.horizontal,
            children: [
              Products(),
              Products(),
              Products(),
            ],
          ),
        ),
      ],
    );
  }
}
