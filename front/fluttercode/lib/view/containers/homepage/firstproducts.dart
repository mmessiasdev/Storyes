import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/components/products.dart';
import 'package:fluttercode/view/product.dart';
import 'package:fluttercode/view/widgets/titles.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class First extends StatelessWidget {
  const First({Key? key}) : super(key: key);

  Future<List> fetch() async {
    var url = Uri.parse('http://localhost:1337/api/products/?populate=*');
    var response = await http.get(url);
    var jsonResponse = jsonDecode(response.body);
    var itemCount = jsonResponse["data"];
    return itemCount;
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        LateralTitle(title: 'Populares'),
        SizedBox(
          height: 150,
          child: FutureBuilder<List>(
              future: fetch(),
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: snapshot.data!.length,
                    itemBuilder: (context, index) {
                      var fetchProduct = snapshot.data![index];
                      var url = "http://localhost:1337";
                      if (fetchProduct["attributes"]["name"] != null) {
                        return GestureDetector(
                          child: Products(
                            img: fetchProduct["attributes"]["secoundimg"]
                                .toString(),
                            title:
                                fetchProduct["attributes"]["name"].toString(),
                            desc: fetchProduct["attributes"]["desc"].toString(),
                            price:
                                fetchProduct["attributes"]["price"].toString(),
                            oldPrice: fetchProduct["attributes"]["oldprice"]
                                .toString(),
                          ),
                          onTap: () => Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => ProductPage(
                                product: fetchProduct,
                                id: fetchProduct["id"],
                              ),
                            ),
                          ),
                        );
                      }
                      return Container(
                        height: 128,
                        width: 250,
                        decoration: BoxDecoration(
                          color: Color.fromARGB(255, 221, 220, 220),
                          borderRadius: BorderRadius.circular(20),
                        ),
                      );
                    },
                  );
                }
                return SizedBox();
              }),
        ),
      ],
    );
  }
}
