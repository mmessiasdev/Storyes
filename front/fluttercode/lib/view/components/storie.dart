import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

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
          child: Image(
            image: CachedNetworkImageProvider(
              url,
              maxHeight: 128,
              maxWidth: 72,
            ),
            fit: BoxFit.cover,
          ),
        ),
      ),
    );
  }
}

class CircleLoader extends StatelessWidget {
  const CircleLoader({Key? key}) : super(key: key);

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
          child: CircularProgressIndicator(
            color: Colors.red,
          ),
        ),
      ),
    );
  }
}
