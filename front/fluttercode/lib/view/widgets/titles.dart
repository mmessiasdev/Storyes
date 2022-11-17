import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/material.dart';
import 'package:fluttercode/view/widgets/textsdefault.dart';

class LateralTitle extends StatelessWidget {
  LateralTitle({required this.title});
  String title;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: Padding(
        padding:
            const EdgeInsets.only(left: 20, right: 20, top: 30, bottom: 15),
        child: ThourdText(
          size: 13,
          text: title,
          align: TextAlign.start,
        ),
      ),
    );
  }
}
