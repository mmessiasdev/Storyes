import 'package:flutter/material.dart';
import 'package:fluttercode/model/products.dart';
import 'package:fluttercode/repository/products.dart';
import 'package:fluttercode/view/components/products.dart';
import 'package:fluttercode/view/product.dart';
import 'package:fluttercode/view/widgets/titles.dart';

import '../../../controller/products.dart';

class First extends StatelessWidget {
  First({Key? key}) : super(key: key);
  var fetchProducts = ProductsController(ProductsRepository());

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        LateralTitle(title: 'Populares'),
        SizedBox(
          height: 150,
          child: FutureBuilder<List<Attributes>>(
              future: fetchProducts.fetchProductsList(),
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: snapshot.data!.length,
                    itemBuilder: (context, index) {
                      var renders = snapshot.data![index];
                      if (renders != null) {
                        return GestureDetector(
                          child: Products(
                            img: renders.thumb.toString(),
                            title: renders.name.toString(),
                            desc: renders.desc.toString(),
                            price: renders.price.toString(),
                            oldPrice: renders.oldprice.toString(),
                          ),
                          onTap: () => Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => ProductPage(
                                thumb: renders.thumb.toString(),
                                secoungimage: renders.secoundimg.toString(),
                                thirdimage: renders.thourdimg.toString(),
                                price: renders.price.toString(),
                                oldprice: renders.oldprice.toString(),
                                name: renders.name.toString(),
                                desc: renders.desc.toString(),
                                quantity: renders.quantity!,
                                brand: renders.brand.toString(),
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
                return const SizedBox();
              }),
        ),
      ],
    );
  }
}
