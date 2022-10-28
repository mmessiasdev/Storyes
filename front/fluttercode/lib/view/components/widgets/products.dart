import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:fluttercode/view/components/widgets/textsdefault.dart';
import 'package:http/http.dart' as http;

class Products extends StatelessWidget {
  Products(
      {Key? key,
      required this.title,
      required this.desc,
      required this.oldPrice,
      required this.img,
      required this.price})
      : super(key: key);
  String title;
  String desc;
  String oldPrice;
  String price;
  String img;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: SizedBox(
        height: 142,
        child: Row(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(20),
              child: Container(
                height: 142,
                width: 80,
                child: Image.network(
                  img,
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: SizedBox(
                width: 175,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        ThourdText(
                          size: 16,
                          text: title,
                          align: TextAlign.start,
                        ),
                        FourthText(size: 7, maxLines: 2, text: desc),
                      ],
                    ),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        SecundaryText(
                          text: 'de ${oldPrice} R\$',
                          size: 13,
                          align: TextAlign.end,
                        ),
                        ThourdText(
                          text: 'por ${price} R\$',
                          size: 22,
                          align: TextAlign.end,
                        )
                      ],
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
