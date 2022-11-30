import 'package:flutter/material.dart';
import 'package:fluttercode/controller/products.dart';
import 'package:fluttercode/model/products.dart';
import 'package:fluttercode/repository/products.dart';
import 'package:fluttercode/view/components/greyproducts.dart';
import 'package:fluttercode/view/widgets/titles.dart';
import '../../product.dart';

class ForYou extends StatelessWidget {
  ForYou({Key? key}) : super(key: key);
  var fetchProducts = ProductsController(ProductsRepository());

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
              child: FutureBuilder<List<Attributes>>(
                  future: fetchProducts.fetchProductsList(),
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
                        itemCount: snapshot.data?.length ?? 1,
                        itemBuilder: (context, index) {
                          var renders = snapshot.data![index];

                          if (renders != null) {
                            return GestureDetector(
                              child: ProductsFy(
                                  img: renders.thumb.toString(),
                                  title: renders.name.toString(),
                                  desc: renders.desc.toString(),
                                  price: renders.price.toString()),
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
                              color: Color.fromARGB(255, 199, 199, 199),
                              borderRadius: BorderRadius.circular(20),
                            ),
                          );
                        },
                      );
                    }
                    return const SizedBox();
                  }),
            ),
          ),
        ],
      ),
    );
  }
}
