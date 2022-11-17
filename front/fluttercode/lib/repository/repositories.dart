import 'package:fluttercode/model/products.dart';

abstract class Repositories {
  //get
  Future<List<Attributes>> getProductsList();

  //post
  Future<String> postProducts();

  //put
  Future<String> putProducts();

  //patch
  Future<String> patchProducts();

  //delete
  Future<String> deleteProducts();
}
