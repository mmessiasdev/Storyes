import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/components/widgets/textsdefault.dart';
import 'package:fluttercode/view/components/widgets/titles.dart';

class Stories extends StatelessWidget {
  const Stories({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        LateralTitle(title: 'Destaques do dia'),
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 5),
          child: SizedBox(
            height: 65,
            child: ListView(
              scrollDirection: Axis.horizontal,
              children: [
                Circle(),
                Circle(),
                Circle(),
                Circle(),
                Circle(),
                Circle(),
                Circle(),
                Circle(),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

Widget Circle() {
  return Padding(
    padding: const EdgeInsets.only(left: 10, right: 10),
    child: Container(
      height: 65,
      width: 65,
      decoration: BoxDecoration(
        color: Colors.red[200],
        borderRadius: const BorderRadius.all(Radius.circular(50)),
      ),
    ),
  );
}
