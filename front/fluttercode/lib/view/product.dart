import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/homepage.dart';
import 'package:fluttercode/view/widgets/textsdefault.dart';
import 'package:http/http.dart' as http;

import 'containers/homepage/header.dart';

class ProductPage extends StatefulWidget {
  ProductPage(
      {Key? key,
      required this.product,
      required this.desc,
      required this.brand,
      required this.oldprice,
      required this.price,
      required this.img,
      required this.id})
      : super(key: key);

  Map<String, dynamic> product;
  Map<String, dynamic> desc;
  Map<String, dynamic> brand;
  Map<String, dynamic> oldprice;
  Map<String, dynamic> price;
  Map<String, dynamic> img;
  int id;

  @override
  State<ProductPage> createState() => _ProductPageState();
}

class _ProductPageState extends State<ProductPage> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
        body: ListView(
      children: [
        Header(
          icon: Icon(Icons.arrow_back_ios_new_rounded),
          widget: HomePage(),
        ),
        Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 30),
              child: Column(
                children: [
                  SecundaryText(
                      color: Colors.black,
                      text:
                          '${widget.product["attributes"]["oldprice"].toString()} R\$',
                      size: 20,
                      align: TextAlign.start),
                  ThourdText(
                    text:
                        '${widget.product["attributes"]["price"].toString()} R\$',
                    size: 35,
                    align: TextAlign.start,
                  ),
                ],
              ),
            ),
            SizedBox(
              height: 280,
              child: ListView(
                scrollDirection: Axis.horizontal,
                children: [
                  contImage(
                      url:
                          "${widget.product["attributes"]["thumb"].toString()}"),
                  contImage(
                      url:
                          "${widget.product["attributes"]["secoundimg"].toString()}"),
                  contImage(
                      url:
                          "${widget.product["attributes"]["thourdimg"].toString()}")
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.only(top: 50),
                    child: Column(
                      children: [
                        ThourdText(
                          size: 20,
                          text: widget.product["attributes"]["name"].toString(),
                          align: TextAlign.start,
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 10),
                          child: ThourdText(
                              text: "Quantidade: " +
                                  widget.product["attributes"]["quantity"]
                                      .toString(),
                              align: TextAlign.start,
                              size: 12),
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 40),
              child: Column(children: [
                Positioned(
                  child: GestureDetector(
                      child: Container(
                          width: size.width * .80,
                          height: 80,
                          color: Color.fromRGBO(255, 79, 79, 1),
                          child: Center(
                            child: SecundaryText(
                              align: TextAlign.center,
                              color: Colors.black,
                              text: "Comprar",
                              size: 30,
                            ),
                          )),
                      onTap: () {
                        setState(() {
                          int quantity =
                              widget.product["attributes"]["quantity"]--;
                          print(quantity);
                        });
                      }),
                ),
              ]),
            ),
            Padding(
              padding: const EdgeInsets.only(bottom: 30),
              child: SizedBox(
                width: size.width * .80,
                height: 50,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(top: 10),
                      child: Positioned(
                        child: GestureDetector(
                            child: Container(
                          width: size.width * .60,
                          color: Color.fromARGB(255, 0, 0, 0),
                          child: Center(
                              child: SecundaryText(
                            text: "Carrinho",
                            color: Colors.white,
                            size: 20,
                            align: TextAlign.center,
                          )),
                        )),
                      ),
                    ),
                    Padding(
                        padding: const EdgeInsets.only(top: 10),
                        child: Positioned(
                          child: GestureDetector(
                            child: Container(
                              width: size.width * .15,
                              color: Color.fromARGB(255, 255, 255, 255),
                              child: Center(
                                  child: Icon(Icons.favorite_border,
                                      color: Colors.red)),
                            ),
                          ),
                        )),
                  ],
                ),
              ),
            ),
            FourthText(
              size: 16,
              text: widget.product["attributes"]["desc"].toString(),
              maxLines: 5,
            ),
            ThourdText(
              text: widget.product["attributes"]["brand"].toString(),
              size: 15,
              align: TextAlign.start,
            ),
          ],
        ),
      ],
    ));
  }
}

class contImage extends StatelessWidget {
  contImage({Key? key, required this.url}) : super(key: key);
  String url;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(20),
        child: SizedBox(
          height: 280,
          width: 185,
          child: Image.network(
            url,
            fit: BoxFit.cover,
          ),
        ),
      ),
    );
  }
}
