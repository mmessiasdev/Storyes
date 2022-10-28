import 'package:flutter/material.dart';
import 'package:fluttercode/view/components/widgets/textsdefault.dart';

class ProductsFy extends StatelessWidget {
  ProductsFy(
      {Key? key,
      required this.title,
      required this.desc,
      required this.price,
      required this.img})
      : super(key: key);
  String title;
  String desc;
  String price;
  String img;

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
              height: 128,
              width: 250,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(20),
                      bottomRight: Radius.circular(20),
                      topLeft: Radius.circular(20),
                      topRight: Radius.circular(0),
                    ),
                    child: SizedBox(
                      height: 128,
                      width: 72,
                      child: Image.network(
                        img,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  Padding(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 8, vertical: 10),
                    child: SizedBox(
                      height: 128,
                      width: 50,
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
