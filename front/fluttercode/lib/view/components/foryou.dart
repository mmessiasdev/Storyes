import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/components/widgets/products.dart';
import 'package:fluttercode/view/components/widgets/titles.dart';

import 'firstproducts.dart';

class ForYou extends StatelessWidget {
  const ForYou({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        LateralTitle(title: 'Para Você'),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                children: [
                  ProductsFy(),
                  ProductsFy(),
                  ProductsFy(),
                  ProductsFy(),
                  ProductsFy(),
                  ProductsFy(),
                ],
              ),
              Padding(
                padding: const EdgeInsets.only(top: 25),
                child: Column(
                  children: [
                    ProductsFy(),
                    ProductsFy(),
                    ProductsFy(),
                    ProductsFy(),
                    ProductsFy(),
                    ProductsFy(),
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
