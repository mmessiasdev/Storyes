import 'dart:convert';

import 'package:fluttercode/model/products.dart';
import 'package:fluttercode/repository/repositories.dart';
import 'package:http/http.dart' as http;

class ProductsRepository implements Repositories {
  String urlData = "http://localhost:1337/api";
  late Attributes product;

  @override
  Future<String> deleteProducts() {
    // TODO: implement deleteProducts
    throw UnimplementedError();
  }

  @override
  Future<List<Attributes>> getProductsList() async {
    // TODO: implement getProductsList
    List<Attributes> listItens = [];
    var url = Uri.parse('$urlData/products/?populate=*');
    var response = await http.get(url);
    print('status code : ${response.statusCode}');
    var body = jsonDecode(response.body);
    // parse
    var itemCount = body["data"];
    // print(itemCount);
    for (var i = 0; i < itemCount.length; i++) {
      listItens.add(Attributes.fromJson(itemCount[i]));
    }
    return listItens;
  }

  @override
  Future<String> patchProducts() {
    // TODO: implement patchProducts
    throw UnimplementedError();
  }

  @override
  Future<String> postProducts() {
    // TODO: implement postProducts
    throw UnimplementedError();
  }

  @override
  Future<String> putProducts() async {
    // TODO: implement putProducts
    var url = Uri.parse('$urlData/products/${product.id}?populate=*');
    String resData = '';
    await http.put(url, body: {
      'quantity': (product.quantity!).toString(),
    }).then(
      (value) {
        Map<String, dynamic> result = json.decode(value.body);
        print(result);
        return resData = result['quantity'];
      },
    );
    return resData;
  }
}
