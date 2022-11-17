import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttercode/controller/products.dart';
import 'package:fluttercode/model/products.dart';
import 'package:fluttercode/repository/products.dart';
import 'package:fluttercode/view/widgets/titles.dart';

class Stories extends StatelessWidget {
  Stories({Key? key}) : super(key: key);
  var imageController = ProductsController(ProductsRepository());

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        LateralTitle(title: 'Destaques do dia'),
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 5),
          child: SizedBox(
            height: 65,
            child: SizedBox(
              child: FutureBuilder<List<Attributes>>(
                future: imageController.fetchProductsList(),
                builder: (context, snapshot) {
                  return ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: snapshot.data?.length ?? 1,
                    itemBuilder: (context, index) {
                      var renders = snapshot.data![index];
                      print(renders);
                      return Circle(
                        url: '${renders.thumb}',
                      );
                    },
                  );
                },
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class Circle extends StatelessWidget {
  Circle({Key? key, required this.url}) : super(key: key);

  String url;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 10, right: 10),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(50),
        child: Container(
          height: 65,
          width: 65,
          decoration: BoxDecoration(
            color: Colors.red[200],
          ),
          child: Image.network(
            url,
            fit: BoxFit.cover,
          ),
        ),
      ),
    );
  }
}
