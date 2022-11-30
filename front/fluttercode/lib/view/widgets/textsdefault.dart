import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:google_fonts/google_fonts.dart';

class PrimaryText extends StatelessWidget {
  PrimaryText({required this.text});

  String text;

  @override
  Widget build(BuildContext context) {
    return Text(text,
        style: GoogleFonts.montserrat(
            color: Colors.black,
            decoration: TextDecoration.none,
            fontSize: 45,
            fontWeight: FontWeight.w700));
  }
}

class SecundaryText extends StatelessWidget {
  SecundaryText(
      {required this.text,
      required this.size,
      required this.align,
      required this.color});

  String text;
  double size;
  TextAlign align;
  Color color;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width * 1,
      child: Text(text,
          textAlign: align,
          style: GoogleFonts.montserrat(
              decoration: TextDecoration.none,
              fontSize: size,
              fontWeight: FontWeight.w500,
              color: color)),
    );
  }
}

class ThourdText extends StatelessWidget {
  ThourdText({required this.text, required this.size, required this.align});

  String text;
  double size;
  TextAlign align;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width * 1,
      child: Text(text,
          maxLines: 2,
          textAlign: align,
          style: GoogleFonts.montserrat(
              fontSize: size, fontWeight: FontWeight.w600)),
    );
  }
}

class FourthText extends StatelessWidget {
  FourthText(
      {Key? key,
      required this.text,
      required this.maxLines,
      required this.size})
      : super(key: key);
  String text;
  int maxLines;
  double size;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      maxLines: maxLines,
      style:
          GoogleFonts.montserrat(fontSize: size, fontWeight: FontWeight.w300),
    );
  }
}
