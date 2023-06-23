import qr_order_step1 from "static/qr_order/img_orderstep1.png";
import qr_order_step2 from "static/qr_order/img_orderstep2.png";
import qr_order_step3 from "static/qr_order/img_orderstep3.png";

const qr_order_step1 = require("static/qr_order/img_orderstep1.png");
const qr_order_step2 = require("static/qr_order/img_orderstep2.png");
const qr_order_step3 = require("static/qr_order/img_orderstep3.png");

import yakinikuImg from "static/home/yakiniku.png";
import sushiImg from "static/home/sushi.png";
import washokuImg from "static/home/washoku.png";
import frenchImg from "static/home/french.png";
import italianImg from "static/home/italian.png";
import cafeImg from "static/home/cafe.png";

const allImages = [
  qr_order_step1,
  qr_order_step2,
  qr_order_step3,
  yakinikuImg,
  sushiImg,
  washokuImg,
  frenchImg,
  italianImg,
  cafeImg,
];

for (const image of allImages) {
  const img = require(image);
}
