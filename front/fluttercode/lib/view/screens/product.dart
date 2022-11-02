import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/components/header.dart';

import '../components/widgets/textsdefault.dart';

class ProductPage extends StatelessWidget {
  ProductPage(
      {Key? key,
      required this.product,
      required this.desc,
      required this.brand,
      required this.oldprice,
      required this.price,
      required this.img})
      : super(key: key);

  Map<String, dynamic> product;
  Map<String, dynamic> desc;
  Map<String, dynamic> brand;
  Map<String, dynamic> oldprice;
  Map<String, dynamic> price;
  Map<String, dynamic> img;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Header(),
          Column(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Column(
                  children: [
                    SecundaryText(
                        text:
                            '${product["attributes"]["oldprice"].toString()} R\$',
                        size: 20,
                        align: TextAlign.start),
                    ThourdText(
                      text: '${product["attributes"]["price"].toString()} R\$',
                      size: 35,
                      align: TextAlign.start,
                    ),
                  ],
                ),
              ),
              ListView(
                scrollDirection: Axis.horizontal,
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(20),
                    child: Container(
                      height: 242,
                      width: 180,
                      child: Image.network(
                        "http://localhost:1337${product["attributes"]["thumb"]["data"]["attributes"]["url"].toString()}",
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(20),
                    child: Container(
                      height: 242,
                      width: 180,
                      child: Image.network(
                        "http://localhost:1337${product["attributes"]["thumb"]["data"]["attributes"]["url"].toString()}",
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ],
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Column(
                  children: [
                    ThourdText(
                      size: 16,
                      text: product["attributes"]["name"].toString(),
                      align: TextAlign.start,
                    ),
                    FourthText(
                      size: 16,
                      text: product["attributes"]["desc"].toString(),
                      maxLines: 5,
                    ),
                    ThourdText(
                      text: product["attributes"]["brand"].toString(),
                      size: 15,
                      align: TextAlign.start,
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
