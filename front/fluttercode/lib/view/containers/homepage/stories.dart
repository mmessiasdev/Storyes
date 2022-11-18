import 'package:flutter/material.dart';
import 'package:fluttercode/controller/products.dart';
import 'package:fluttercode/model/products.dart';
import 'package:fluttercode/repository/products.dart';
import 'package:fluttercode/view/widgets/titles.dart';

import '../../components/storie.dart';

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
                  if (snapshot.hasData) {
                    return ListView.builder(
                      scrollDirection: Axis.horizontal,
                      itemCount: snapshot.data?.length ?? 1,
                      itemBuilder: (context, index) {
                        var renders = snapshot.data![index];
                        if (renders.name == null) {
                          return const CircleLoader();
                        }
                        return Circle(
                          url: '${renders.thumb}',
                        );
                      },
                    );
                  }
                  return Container(
                    color: Colors.white,
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
