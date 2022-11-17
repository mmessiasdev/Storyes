import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/homepage.dart';
import 'package:fluttercode/view/widgets/textsdefault.dart';

class Header extends StatelessWidget {
  Header({Key? key, required this.widget, required this.icon})
      : super(key: key);
  final Widget widget;
  final Widget icon;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          GestureDetector(
            onTap: () => Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                builder: (context) => widget,
              ),
            ),
            child: icon,
          ),
          PrimaryText(
            text: 'Storyes',
          ),
          Icon(Icons.search)
        ],
      ),
    );
  }
}
