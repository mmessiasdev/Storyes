import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:fluttercode/view/components/widgets/textsdefault.dart';
import 'package:http/http.dart' as http;

class Products extends StatelessWidget {
  Products(
      {Key? key,
      // required this.scr,
      required this.title,
      required this.desc,
      required this.oldPrice,
      required this.price})
      : super(key: key);
  // String scr;
  String title;
  String desc;
  String oldPrice;
  String price;

  // Future<List> fetch() async {
  //   var url = Uri.parse('http://localhost:1337/api/products?populate=*');
  //   var response = await http.get(url);
  //   var jsonResponse = jsonDecode(response.body);
  //   var itemCount = jsonResponse['results'];
  //   return itemCount;
  // }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: SizedBox(
        height: 150,
        child: Row(
          children: [
            Container(
              height: 150,
              width: 100,
              decoration: BoxDecoration(
                color: Colors.red[200],
                borderRadius: const BorderRadius.only(
                  bottomLeft: Radius.circular(20),
                  bottomRight: Radius.circular(20),
                  topLeft: Radius.circular(20),
                  topRight: Radius.circular(20),
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

class ProductsFy extends StatelessWidget {
  ProductsFy(
      {Key? key,
      // required this.scr,
      required this.title,
      required this.desc,
      // required this.oldPrice,
      required this.price})
      : super(key: key);
  // String scr;
  String title;
  String desc;
  // String oldPrice;
  String price;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 0),
          child: Container(
            decoration: BoxDecoration(
              color: Color.fromRGBO(217, 217, 217, 1),
              borderRadius: BorderRadius.circular(20),
            ),
            child: SizedBox(
              height: 130,
              width: 250,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    height: 130,
                    width: 80,
                    decoration: BoxDecoration(
                      color: Colors.red[200],
                      borderRadius: const BorderRadius.only(
                        bottomLeft: Radius.circular(20),
                        bottomRight: Radius.circular(20),
                        topLeft: Radius.circular(20),
                        topRight: Radius.circular(0),
                      ),
                    ),
                    // child: Image.network(scr),
                  ),
                  Padding(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 8, vertical: 10),
                    child: SizedBox(
                      width: MediaQuery.of(context).size.width / 7,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          ThourdText(
                            size: 10,
                            text: title,
                            align: TextAlign.end,
                          ),
                          Column(
                            mainAxisAlignment: MainAxisAlignment.end,
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              ThourdText(
                                text: 'por ${price} R\$',
                                size: 10,
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
          ),
        ),
        SizedBox(
          height: 25,
        )
      ],
    );
  }
}
