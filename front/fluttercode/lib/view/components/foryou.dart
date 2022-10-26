import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/view/components/widgets/products.dart';
import 'package:fluttercode/view/components/widgets/titles.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

import 'firstproducts.dart';

class ForYou extends StatelessWidget {
  const ForYou({Key? key}) : super(key: key);

  Future<List> fetch() async {
    var url = Uri.parse('http://localhost:1337/api/products/');
    var response = await http.get(url);
    var jsonResponse = jsonDecode(response.body);
    var itemCount = jsonResponse["data"];
    return itemCount;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 25),
      child: Column(
        children: [
          LateralTitle(title: 'For You'),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: SizedBox(
              child: FutureBuilder<List>(
                  future: fetch(),
                  builder: (context, snapshot) {
                    if (snapshot.hasData) {
                      return GridView.builder(
                        physics: NeverScrollableScrollPhysics(),
                        scrollDirection: Axis.vertical,
                        shrinkWrap: true,
                        gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                          maxCrossAxisExtent: 250,
                          mainAxisSpacing: 10,
                          crossAxisSpacing: 30,
                          mainAxisExtent: 160,
                        ),
                        itemCount: snapshot.data!.length,
                        itemBuilder: (context, index) {
                          var fetchProduct = snapshot.data![index];
                          if (fetchProduct["attributes"]["name"] != null) {
                            return ProductsFy(
                                title: fetchProduct["attributes"]["name"]
                                    .toString(),
                                desc: fetchProduct["attributes"]["desc"]
                                    .toString(),
                                price: fetchProduct["attributes"]["price"]
                                    .toString());
                          }
                          return CircularProgressIndicator();
                        },
                      );
                    }
                    return CircularProgressIndicator();
                  }),
            ),
          ),
        ],
      ),
    );
  }
}


// children: [
//   ProductsFy(title: 'Title', desc: '100', price: '100'),
//   ProductsFy(title: 'Title', desc: '100', price: '100'),
//   ProductsFy(title: 'Title', desc: '100', price: '100'),
//   ProductsFy(title: 'Title', desc: '100', price: '100'),
//   ProductsFy(title: 'Title', desc: '100', price: '100'),
// ],


// Text(
//                               fetchProduct["attributes"]["name"].toString());