import 'package:flutter/material.dart';

class Header extends StatelessWidget {
  Header(
      {Key? key, required this.widget, required this.icon, required this.title})
      : super(key: key);
  final Widget widget;
  final Widget icon;
  final Widget title;

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
          title,
          Icon(Icons.search)
        ],
      ),
    );
  }
}
