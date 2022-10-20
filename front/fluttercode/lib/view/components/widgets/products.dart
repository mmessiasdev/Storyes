import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:fluttercode/view/components/widgets/textsdefault.dart';
import 'package:http/http.dart' as http;

class Products extends StatelessWidget {
  Products({Key? key}) : super(key: key);

  Future<List> fetch() async {
    var url = Uri.parse('http://localhost:1337/api/products?populate=*');
    var response = await http.get(url);
    var jsonResponse = jsonDecode(response.body);
    var itemCount = jsonResponse['results'];
    return itemCount;
  }

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
                          text: 'Teste Teste Teste',
                          align: TextAlign.start,
                        ),
                        FourthText(
                          size: 7,
                          maxLines: 2,
                          text:
                              'Teste Teste Teste Text TEste TEste TEstE TEsasrafewe wvwvrbherg',
                        ),
                      ],
                    ),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        SecundaryText(
                          text: 'de 300,00 R\$',
                          size: 13,
                          align: TextAlign.end,
                        ),
                        ThourdText(
                          text: "por 200,00 R\$",
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
  ProductsFy({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 0),
          child: Container(
            width: MediaQuery.of(context).size.width * 0.42,
            decoration: BoxDecoration(
              color: Color.fromRGBO(217, 217, 217, 1),
              borderRadius: BorderRadius.circular(20),
            ),
            child: SizedBox(
              height: 130,
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
                  ),
                  Padding(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 8, vertical: 10),
                    child: SizedBox(
                      width: MediaQuery.of(context).size.width * .15,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          ThourdText(
                            size: 10,
                            text: 'Teste Teste Teste',
                            align: TextAlign.end,
                          ),
                          Column(
                            mainAxisAlignment: MainAxisAlignment.end,
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              SecundaryText(
                                text: 'de 300,00 R\$',
                                size: 7,
                                align: TextAlign.end,
                              ),
                              ThourdText(
                                size: 10,
                                text: 'por 200,00 R\$',
                                align: TextAlign.end,
                              ),
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
