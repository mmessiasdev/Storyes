import 'dart:convert';

import 'package:fluttercode/model/products.dart';
import 'package:fluttercode/repository/repositories.dart';
import 'package:http/http.dart' as http;

class ProductsRepository implements Repositories {
  String urlData = "http://localhost:1337/api";

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
    print(itemCount);
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
  Future<String> putProducts() {
    // TODO: implement putProducts
    throw UnimplementedError();
  }
}
